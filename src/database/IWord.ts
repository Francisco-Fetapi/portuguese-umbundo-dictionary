import type { IWordClasses } from "./IWordClasses";

interface FromPTtoUM<T = string[]> {
  pt: string;
  um: T;
}

export interface IWord extends FromPTtoUM {
  class: keyof IWordClasses;
  examples: FromPTtoUM<string>[];
}
