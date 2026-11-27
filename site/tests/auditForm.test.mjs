import { test } from "node:test";
import assert from "node:assert/strict";
import { validateAudit } from "../src/lib/auditForm.ts";

const good = { name: "Jane Smith", email: "jane@yourstore.com", store_url: "yourstore.com", platform: "Shopify", spend: "$20K–$50K", channels: ["Meta"] };

test("a complete request passes", () => {
  assert.deepEqual(validateAudit(good), {});
  assert.deepEqual(validateAudit({ ...good, store_url: "https://shop.example.co.uk/en" }), {});
});
test("every required field is reported, in form order", () => {
  const e = validateAudit({ name: " ", email: "", store_url: "", platform: "", spend: "", channels: [] });
  assert.deepEqual(Object.keys(e), ["name", "email", "store_url", "platform", "spend", "channels"]);
});
test("free mail and malformed values are rejected", () => {
  assert.ok(validateAudit({ ...good, email: "jane@gmail.com" }).email);
  assert.ok(validateAudit({ ...good, email: "jane@store" }).email);
  assert.ok(validateAudit({ ...good, store_url: "my store" }).store_url);
});
