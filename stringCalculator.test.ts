import StringCalculator from "./stringCalculator";

let calculator: StringCalculator;

beforeEach(() => {
  calculator = new StringCalculator();
});

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should return 100 when the input is "100"', () => {
    expect(calculator.add("100")).toBe(100);
  });

  test('should return 3 when the input is "1,2"', () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test('should return 35 when the input is "1,2,7,5,6,3,2,9"', () => {
    expect(calculator.add("1,2,7,5,6,3,2,9")).toBe(35);
  });

  test('should return 10 when the input is "1\\n2,3,4"', () => {
    expect(calculator.add("1\n2,3,4")).toBe(10);
  });

  test('should return  6 when using a custom delimiter ";" with input "//;\\n1;2;3"', () => {
    expect(calculator.add("//;\n1;2;3")).toBe(6);
  });

  test("should throw exception for single negative numbers", () => {
    expect(() => calculator.add("1,-2")).toThrow(
      "negative numbers not allowed: -2"
    );
  });

  test("should throw exception for multiple negative numbers", () => {
    expect(() => calculator.add("1,-2,-3")).toThrow(
      "negative numbers not allowed: -2,-3"
    );
  });

  //additional test cases

  test("should ignore input greater than 1000 return 0 when input is '1003'", () => {
    expect(calculator.add("1003")).toBe(0);
  });

  test("should ignore input greater than 1000 return 2 when input is '2 , 1003'", () => {
    expect(calculator.add("2,1003")).toBe(2);
  });

  test('should handle delimiters of any length like "//[***]\\n1***2***3" and return 6', () => {
    expect(calculator.add("//[***]\n1***2***3")).toBe(6);
  });

  //getCalledCount
  test("should return 0 when add is not called", () => {
    expect(calculator.getCalledCount()).toBe(0);
  });

  test("should return 1 when add is called once", () => {
    calculator.add("1,3");
    expect(calculator.getCalledCount()).toBe(1);
  });

  test("should return 2 when add is called twice", () => {
    calculator.add("1");
    calculator.add("");
    expect(calculator.getCalledCount()).toBe(2);
  });
});
