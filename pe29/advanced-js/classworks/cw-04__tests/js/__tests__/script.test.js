function sum(a, b) {
  return a + b;
}

describe("sum function tests", () => {
  test("negative numbers sum", () => {
    const result = sum(-50, -505);
    expect(result).toBeLessThan(0);
  });
  test("first argument is negative", () => {
    const result = sum(-50, 505);
    const resultZero = sum(-50, 50);
    expect(result).toBeGreaterThan(0);
    expect(resultZero).toBe(0);
  });
  test("string arguments", () => {
    expect(sum("50", 101)).toBe(151);
    expect(sum(-"50", 100)).toBe(50);
  })
});
