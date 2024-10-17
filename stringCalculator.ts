export default class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") return 0;
    const delimiterRegex = /[\n,]+/;
    const numsArray = numbers
      .split(delimiterRegex)
      .map((num) => parseInt(num, 10));
    return numsArray.reduce((sum, num) => sum + num, 0);
  }
}
