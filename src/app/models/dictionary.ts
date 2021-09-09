export interface Dictionary {
  [key: string]: string | boolean | number | Dictionary;
  length?: number;
}
