export default class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiterRegex = /[\n,]+/; //default delimiterRegx

    if (numbers.startsWith("//")) {
      const newLineIndex = numbers.indexOf("\n");
      const customDelimiter = numbers.substring(2, newLineIndex);
      delimiterRegex = new RegExp(`[${customDelimiter}]`);
      numbers = numbers.substring(newLineIndex + 1);
    }

    const numsArray = numbers
      .split(delimiterRegex)
      .map((num) => parseInt(num, 10));

    return numsArray.reduce((sum, num) => sum + num, 0);
  }
}
