const anagram = (string1, string2) => {
  if (string1 === string2) {
    return true;
  }
  if (string1.length !== string2.length) {
    return false;
  }
  let count = {};

  for (let letter of string1) {
    count[letter] = (count[letter] || 0) + 1;
  }

  for (let letter of string2) {
    if (!count[letter]) return false;
    else --count[letter];
  }
  return true;
};

anagram("listen", "silent");
