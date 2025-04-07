// link -> https://leetcode.com/problems/group-anagrams/description/

function groupAnagrams(strs: string[]): string[][] {
  let outputArr = new Array();
  let map: Map<string, string[]> = new Map();

  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");
    if (map.has(sorted)) {
      map.get(sorted)!.push(strs[i]);
    } else {
      map.set(sorted, []);
      map.get(sorted)!.push(strs[i]);
    }
  }

  for (const val of map) {
    outputArr.push(val[1]);
  }

  return outputArr;
}

console.log(
  groupAnagrams(["some", "yo", "hey", "care", "mose", "oy", "mouse", "race"])
);
