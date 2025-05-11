class ArrayWrapper {
  constructor(public nums: number[]) {}

  valueOf(): number {
    let total = 0;

    for (const val of this.nums) {
      total += val;
    }

    return total;
  }

  toString(): string {
    console.log(`[${this.nums.join(",")}]`);
    return `[${this.nums.join(",")}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
obj1.valueOf() + obj2.valueOf(); // 10
String(obj1); // "[1,2]"
String(obj2); // "[3,4]"
