#!/usr/bin/env bash
# Sequential agent handoff helper for 7captur-site. The Astro project lives in /site.
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/.."
HANDOFF_FILE="AGENT_HANDOFF.md"
BRANCH="main"

usage() {
  cat <<'USAGE'
Usage:
  ./scripts/agent-handoff.sh start  <MILESTONE_ID> <AGENT_NAME>
  ./scripts/agent-handoff.sh verify
  ./scripts/agent-handoff.sh finish <MILESTONE_ID> "<commit message>"
USAGE
  exit 1
}

require_main_branch() {
  local current_branch
  current_branch="$(git rev-parse --abbrev-ref HEAD)"
  if [[ "$current_branch" != "$BRANCH" ]]; then
    echo "ERROR: Expected branch '$BRANCH', but currently on '$current_branch'."
    exit 1
  fi
}

require_handoff_file() {
  if [[ ! -f "$HANDOFF_FILE" ]]; then
    echo "ERROR: $HANDOFF_FILE not found in repository root."
    exit 1
  fi
}

has_script() {
  node -e "const p=require('./package.json'); process.exit(p.scripts && p.scripts['$1'] ? 0 : 1)"
}

cmd_start() {
  local milestone="${1:-}"
  local agent="${2:-ai-agent}"
  [[ -z "$milestone" ]] && usage

  require_main_branch
  require_handoff_file

  echo "==> Syncing latest $BRANCH from origin..."
  git pull --rebase origin "$BRANCH"

  if [[ -n "$(git status --porcelain)" ]]; then
    echo "WARNING: Working tree is not clean. Inspect before continuing:"
    git status --short
  fi

  local ts tmp_file
  ts="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  tmp_file="$(mktemp)"
  awk -v m="$milestone" -v a="$agent" -v t="$ts" '
    /^- \*\*Current State:\*\*/ { print "- **Current State:** `IN_PROGRESS`: Milestone `" m "` claimed by `" a "` at `" t "`"; next }
    { print }
  ' "$HANDOFF_FILE" > "$tmp_file"
  cat "$tmp_file" > "$HANDOFF_FILE"
  rm -f "$tmp_file"

  echo "==> Claim recorded. Keep scope strictly inside $milestone, then run verify and finish."
}

cmd_verify() {
  echo "==> Verifying the Astro project in ./site ..."
  (
    cd site
    [[ -d node_modules ]] || npm ci --no-audit --no-fund
    for s in typecheck lint test build check:site; do
      if has_script "$s"; then
        echo "--> npm run $s"
        npm run "$s"
      fi
    done
  )
  echo "==> All checks passed."
}

cmd_finish() {
  local milestone="${1:-}"
  local message="${2:-}"
  [[ -z "$milestone" || -z "$message" ]] && usage

  require_main_branch
  require_handoff_file

  if ! git status --porcelain "$HANDOFF_FILE" | grep -q .; then
    echo "ERROR: $HANDOFF_FILE has not been updated. Mark $milestone DONE and add handoff notes first."
    exit 1
  fi

  local changed_files
  changed_files="$(git status --porcelain | wc -l | tr -d ' ')"
  if [[ "$changed_files" -lt 2 ]]; then
    echo "WARNING: Only $changed_files file changed. Verify that $milestone is complete."
  elif [[ "$changed_files" -gt 45 ]]; then
    echo "WARNING: $changed_files files changed. Confirm no build output or out-of-scope edits are staged."
  fi

  cmd_verify

  echo "==> Staging and committing to $BRANCH..."
  git add -A
  git commit -q -m "[$milestone] $message"

  echo "==> Pushing to origin/$BRANCH..."
  git pull --rebase origin "$BRANCH"
  git push origin "$BRANCH"

  echo "==> Milestone $milestone committed and pushed."
}

subcmd="${1:-}"
shift || true

case "$subcmd" in
  start)  cmd_start "$@" ;;
  verify) cmd_verify ;;
  finish) cmd_finish "$@" ;;
  *)      usage ;;
esac
