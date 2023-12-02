const solve = (input: string): number => {
  const lines = input.split("\n");

  const firstAndLastDigits: { first: number; last: number }[] = lines.map(
    (line) => {
      // Find first character that can be cast into Integer
      let first = 0;
      for (const element of line) {
        const char = element;
        if (parseInt(char)) {
          first = parseInt(char);
          break;
        }
      }

      // Find last character that can be cast into Integer
      let last = 0;
      for (let i = line.length - 1; i >= 0; i--) {
        const char = line[i];
        if (parseInt(char)) {
          last = parseInt(char);
          break;
        }
      }

      return { first, last };
    }
  );

  const calibrationValues = firstAndLastDigits.map((digits) =>
    parseInt(digits.first.toString() + digits.last.toString())
  );

  const sum = calibrationValues.reduce((a, b) => a + b, 0);

  return sum;
};

export default solve;
