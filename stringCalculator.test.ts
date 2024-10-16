import StringCalculator from "./stringCalculator";

let calculator: StringCalculator;

beforeEach(() => {
  calculator = new StringCalculator();
});

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
  test('should return 100 when the input is "1"', () => {
    expect(calculator.add("100")).toBe(100);
  });
  test('should return 3 when the input is "1,2"', () => {});
  test('should return 35 when the input is "1,2,7,5,6,3,2,9"', () => {
    expect(calculator.add("1,2,7,5,6,3,2,9")).toBe(35);
  });

  test.todo('should return 6 when the input is "1\\n2,3"');
  test.todo(
    'should return 6 when using a custom delimiter ";" with input "//;\\n1;2;3"'
  );
  test.todo("should throw exception for negative numbers");
  test.todo("should throw exception for multiple negative numbers");
});
