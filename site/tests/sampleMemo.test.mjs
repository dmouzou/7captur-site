import { test } from "node:test";
import assert from "node:assert/strict";
import { SAMPLE_ROWS, CUT_SHARE, sampleTotals } from "../src/lib/sampleMemo.ts";

test("sample memo totals match the headline figures", () => {
  const t = sampleTotals();
  assert.equal(t.spend, 42800);
  assert.equal(t.net, 6120);
  assert.equal(t.roas.toFixed(1), "3.1");
});
test("exactly one row loses cash and the cut is 4,480 per window", () => {
  assert.equal(SAMPLE_ROWS.filter((r) => r.net < 0).length, 1);
  assert.equal(Math.round(SAMPLE_ROWS[1].spend * CUT_SHARE), 4480);
});
