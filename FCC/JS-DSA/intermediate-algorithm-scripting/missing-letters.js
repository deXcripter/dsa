function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const start = alphabet.indexOf(str[0]);
  const end = alphabet.indexOf(str[str.length - 1]);
  const slicedAlphabet = alphabet.slice(start, end + 1);
  const missingLetter = slicedAlphabet
    .split('')
    .filter((letter) => !str.includes(letter))[0];
  return missingLetter;
}

fearNotLetter('abce');
