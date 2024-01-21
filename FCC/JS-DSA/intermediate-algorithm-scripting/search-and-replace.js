// link => https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
  const index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);

  return str;
}

// test here
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');

// I couldnt solve this one on my own. I had to peep at the solution.
