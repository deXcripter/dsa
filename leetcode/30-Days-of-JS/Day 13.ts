async function sleep(millis: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

// let t = Date.now();
// sleep(2000).then(() => console.log(Date.now() - t)); // 100
