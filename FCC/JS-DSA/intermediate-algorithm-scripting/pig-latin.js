const translatePigLatin = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelIndex = str.split('').findIndex((char) => vowels.includes(char));

  if (vowelIndex === 0) return `${str}way`;
  if (vowelIndex === -1) return `${str}ay`;
  return `${str.slice(vowelIndex)}${str.slice(0, vowelIndex)}ay`;
};

translatePigLatin('consonant');
