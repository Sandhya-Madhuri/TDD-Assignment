import StringCalculator from "./stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
  });
  test('should return 1 when the input is "1"', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
  });
});
