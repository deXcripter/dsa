type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  let tempChunk: Obj[] = [];
  let result: Obj[][] = [];

  for (let i = 0; i < arr.length; i++) {
    tempChunk.push(arr[i]);
    if (tempChunk.length === size) {
      result.push(tempChunk);
      tempChunk = [];
    }
  }

  if (tempChunk.length > 0) {
    result.push(tempChunk);
  }

  return result;
}
