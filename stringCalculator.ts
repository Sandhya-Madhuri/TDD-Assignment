export default class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") return 0;
    if (numbers.includes(",")) {
      const numsArray = numbers.split(",").map((num) => parseInt(num, 10));
      return numsArray.reduce((sum, num) => sum + num, 0);
    }
    return parseInt(numbers);
  }
}
