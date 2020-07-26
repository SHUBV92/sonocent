const anagram = (s, t) => {
  if (s === t) {
    return true;
  }
  if (s.length !== t.length) {
    return false;
  }
  let count = {};

  for (let letter of s) {
    count[letter] = (count[letter] || 0) + 1;
  }

  for (let letter of t) {
    if (!count[letter]) return false;
    else --count[letter];
  }
  return true;
};

anagram("listen", "silent");
