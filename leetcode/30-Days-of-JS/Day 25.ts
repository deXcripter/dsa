type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const map1 = new Map<number, ArrayType>();
  for (const item of arr1) {
    map1.set(item.id, item);
  }

  for (const item2 of arr2) {
    const existingItem = map1.get(item2.id);

    if (existingItem) {
      for (const key in item2) {
        existingItem[key] = item2[key];
      }
    } else {
      map1.set(item2.id, item2);
    }
  }

  const mergedArray = Array.from(map1.values());
  mergedArray.sort((a, b) => a.id - b.id);

  return mergedArray;
}

const res = join(
  [
    { id: 1, x: 36, d: 26, f: 35 },
    { id: 3, c: 20, z: 75 },
  ],
  [{ id: 2, o: 48, z: 84, y: 61 }]
);

console.log(res);
