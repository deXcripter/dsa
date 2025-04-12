type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  const results: any[] = [];
  let counter = 0;

  return new Promise((res, rej) => {
    for (let i = 0; i < functions.length; i++) {
      Promise.resolve(functions[i]())
        .then((data) => {
          results[i] = data;
          counter++;
          if (counter === functions.length) {
            return res(results);
          }
        })
        .catch((err) => rej(err));
    }
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
