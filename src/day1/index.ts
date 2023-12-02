import { Day } from "../day";
import solvePart1 from "./part1";

class Day1 extends Day {
  constructor() {
    super(1);
  }

  solveForPartOne(input: string): string {
    const result = solvePart1(input);
    return result.toString();
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day1();
