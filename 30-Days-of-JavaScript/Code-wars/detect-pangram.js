function isPangram(string) {
  //...
  for (let i = 0; i < string.length - 1; i++) {
    let datai = typeof string[i];
    if (datai !== "string") continue;
    for (let j = i + 1; j < string.length; j++) {
      let dataj = typeof string[j];
      if (dataj !== "string") continue;
      {
        if (string[i] === string[j]) return false;
        console.log(string[j]);
      }
    }
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
