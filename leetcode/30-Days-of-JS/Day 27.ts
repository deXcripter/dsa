type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  const isArray = Array.isArray(obj);
  const newObj: Obj = isArray ? [] : {};

  if (isArray) {
    for (let i = 0; i < obj.length; i++) {
      if (Array.isArray(obj[i])) {
        const val = compactObject(obj[i] as Obj);
        Array.isArray(newObj) && newObj.push(val);
      } else if (obj[i] && typeof obj[i] !== "object") {
        Array.isArray(newObj) && newObj.push(obj[i]);
      } else if (obj[i]) {
        (newObj as JSONValue[]).push(compactObject(obj[i] as Obj));
      }
    }
  } else {
    for (const key in obj) {
      const val = obj[key];
      if (val && typeof val === "object") {
        const compacted = compactObject(val as Obj);
        (newObj as Record<string, JSONValue>)[key] = compacted;
      } else if (val) {
        (newObj as Record<string, JSONValue>)[key] = val;
      }
    }
  }

  return newObj;
}

console.log(
  compactObject({
    r: { x: null, k: 0, p: 82, y: false, i: 8, l: 39 },
    t: null,
    c: "",
    k: 34,
    f: null,
    d: {
      v: null,
      s: 31,
      x: null,
      m: 46,
      b: 74,
      t: 45,
      a: {
        u: 9,
        c: 94,
        v: 0,
        q: {
          m: true,
          g: "",
          a: 0,
          u: 0,
          j: 88,
          w: true,
          x: null,
          q: null,
          z: 58,
        },
        b: 15,
        k: true,
        i: null,
        e: 84,
        t: false,
      },
      f: "",
      c: [
        95,
        [
          19,
          [
            {
              n: null,
              g: 2,
              s: [
                65,
                29,
                3,
                true,
                "",
                [null, false, 30, 29, true, 66, 91, null, 93, null],
                [null, false, null, 43, 0, 43, true, 53, 50, 38],
                null,
                4,
                "",
              ],
              w: 52,
              h: "",
              o: 8,
              u: "",
            },
            3,
            59,
            null,
            null,
            true,
            74,
            {
              u: 31,
              y: 50,
              v: null,
              o: 44,
              z: true,
              i: {
                m: 84,
                t: 36,
                p: 76,
                y: 34,
                d: 69,
                g: null,
                q: 52,
                f: true,
                v: 0,
              },
              f: {
                y: {
                  c: false,
                  i: "",
                  r: 40,
                  z: [
                    93,
                    91,
                    false,
                    8,
                    88,
                    52,
                    [
                      1,
                      27,
                      99,
                      null,
                      20,
                      26,
                      24,
                      [0, 68, 40, 93, 76, false, 0, 58, 0, false],
                      25,
                      80,
                    ],
                    [
                      { j: 0, g: false, r: 36, z: 13, s: true, o: 58, l: 15 },
                      [true, 74, null, 23, true, 71, 82, true, 79, 98],
                      62,
                      false,
                      27,
                      30,
                      ["", 8, 11, 89, 39, true, 16, 88, 15, 91],
                      false,
                      54,
                      26,
                    ],
                    {
                      l: false,
                      m: 72,
                      c: 40,
                      u: [91, 98, 71, null, 0, "", 5, false, null, 19],
                      a: 15,
                      i: 39,
                      k: true,
                      x: 41,
                      e: "",
                    },
                    79,
                  ],
                  a: [
                    15,
                    52,
                    [
                      false,
                      [false, 12, "", 99, "", 2, 41, true, null, 48],
                      [50, false, false, 39, 0, false, 72, "", 42, 95],
                      23,
                      17,
                      null,
                      93,
                      30,
                      null,
                      4,
                    ],
                    57,
                    18,
                    69,
                    false,
                    "",
                    "",
                    49,
                  ],
                  n: 7,
                  d: {
                    w: [
                      ["", true, 44, "", 16, 76, 77, 70, 24, null],
                      [31, 0, 6, 32, 0, 45, 28, 67, null, true],
                      true,
                      28,
                      61,
                      0,
                      [93, 23, 0, 20, 74, "", 10, 13, false, 82],
                      null,
                      31,
                      81,
                    ],
                    y: 59,
                    s: 36,
                    o: 95,
                    c: null,
                    n: 46,
                    e: 0,
                    q: null,
                    f: null,
                  },
                },
                d: 0,
                o: null,
                m: 82,
                l: "",
                b: 48,
                x: 0,
                j: 75,
                q: 0,
              },
            },
            70,
            82,
          ],
          "",
          11,
          false,
          true,
          "",
          [
            12,
            0,
            27,
            40,
            false,
            42,
            15,
            20,
            true,
            [null, true, 10, true, 28, 37, 92, 0, false, null],
          ],
          75,
          8,
        ],
        false,
        0,
        "",
        46,
        [3, null, "", 64, "", null, 92, 9, 53, ""],
        77,
        43,
        null,
      ],
      h: true,
    },
    o: 2,
    y: {
      g: {
        x: 99,
        t: null,
        f: false,
        d: [0, null, 94, 84, 28, null, 2, 66, "", null],
        g: "",
        s: 15,
        y: true,
        l: 80,
        u: 33,
      },
      a: null,
      r: null,
      n: 31,
      u: 99,
      i: 50,
      e: 12,
      b: 0,
    },
    l: [
      18,
      58,
      [
        "",
        null,
        0,
        71,
        false,
        64,
        62,
        [0, 35, true, 88, 0, 99, false, false, 38, 0],
        false,
        { e: 0, i: 54, d: 9, z: 48, u: 44, o: "", j: 16, l: 65, n: 86, b: 0 },
      ],
      [
        "",
        true,
        true,
        0,
        85,
        52,
        { i: true, x: 58, d: false, s: 35, o: 20, f: 73, j: 97, b: 99, l: 85 },
        56,
        [true, 0, 98, 40, null, null, null, 38, 10, true],
        98,
      ],
      63,
      "",
      "",
      21,
      54,
      true,
    ],
    v: "",
  })
);

// console.log(
//   compactObject({
//     o: 11,
//     a: 68,
//     m: 18,
//     v: true,
//     b: false,
//     h: null,
//     r: false,
//     p: 93,
//     l: true,
//     k: "",
//     n: 79,
//     f: 18,
//     u: null,
//     j: null,
//     e: null,
//     z: {
//       d: true,
//       t: null,
//       o: 21,
//       w: null,
//       m: 82,
//       k: 35,
//       l: 26,
//       r: 45,
//       b: false,
//       z: 0,
//       i: null,
//       c: 33,
//       p: 69,
//       j: 27,
//       e: 53,
//       q: 97,
//       h: true,
//       a: true,
//       n: true,
//       f: 73,
//       u: null,
//     },
//     w: 12,
//     y: 0,
//     q: "",
//     t: null,
//     s: true,
//     x: false,
//     c: true,
//     i: false,
//     g: 29,
//   })
// );
