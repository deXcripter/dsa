function convertToRoman(num) {
  const romanNumeral = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
  };

  const numString = num.toString();
  let roman = '';
  for (let i = 0; i < numString.length; i += 1) {
    const digit = numString[i];
    const place = numString.length - i;
    const value = digit * 10 ** (place - 1);
    roman += romanNumeral[value];
    console.log(digit, place, value);
  }

  return roman;
}

console.log(convertToRoman(400));
