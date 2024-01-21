function palindrome(str) {
  const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reverseStr = newStr.split('').reverse().join('');
  return newStr === reverseStr;
}

palindrome('eye');
