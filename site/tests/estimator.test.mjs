import { test } from "node:test";
import assert from "node:assert/strict";
import { estimate, clamp, spendFromQuery, spendBand, LIMITS } from "../src/lib/estimator.ts";

const defaults = { spend: 40000, roas: 3, drag: 68, waste: 15 };

test("default inputs", () => {
  const r = estimate(defaults, 2500);
  assert.equal(Math.round(r.revenue), 120000);
  assert.equal(Math.round(r.afterCosts), 38400);
  assert.equal(Math.round(r.contribution), -1600);
  assert.equal(Math.round(r.leak), 6000);
  assert.equal(r.payback.toFixed(1), "2.4");
});
test("blueprint defaults and ranges", () => {
  assert.deepEqual(Object.values(LIMITS).map((l) => [l.min, l.max, l.initial]),
    [[10000, 200000, 40000], [1.5, 6, 3], [40, 85, 68], [5, 30, 15]]);
});
test("values are clamped to their range", () => {
  assert.equal(clamp("spend", 5), 10000);
  assert.equal(clamp("spend", 1e9), 200000);
  assert.equal(clamp("roas", NaN), 3);
});
test("query pass-through accepts digits only", () => {
  assert.equal(spendFromQuery("?spend=65000"), 65000);
  for (const bad of ["", "?spend=", "?spend=abc", "?spend=-5", "?spend=0", "?spend=1e9"]) assert.equal(spendFromQuery(bad), null);
});
test("spend bands", () => {
  assert.equal(spendBand(19999), "Under $20K");
  assert.equal(spendBand(20000), "$20K–$50K");
  assert.equal(spendBand(50000), "$50K–$100K");
  assert.equal(spendBand(100000), "$100K+");
});
