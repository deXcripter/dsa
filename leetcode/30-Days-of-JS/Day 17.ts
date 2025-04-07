class TimeLimitedCache {
  map: Map<number, { expiration: number; value: number }>;

  constructor() {
    this.map = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const isUnexpired =
      this.map.has(key) && this.map.get(key)!.expiration > Date.now();

    this.map.set(key, { expiration: Date.now() + duration, value });

    return isUnexpired;
  }

  get(key: number): number {
    if (this.map.has(key) && this.map.get(key)!.expiration > Date.now()) {
      return this.map.get(key)!.value;
    } else {
      return -1;
    }
  }

  count(): number {
    let count = 0;
    for (let val of this.map) {
      if (val[1].expiration > Date.now()) count++;
    }

    return count;
  }
}

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 2));
console.log(timeLimitedCache.set(1, 50, 1));
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.get(1));
