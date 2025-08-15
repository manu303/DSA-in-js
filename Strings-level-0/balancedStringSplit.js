var balancedStringSplit = function (s) {
  let map = {};
  let count = 0;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[i]];
    }

    if (!map[s[++i]]) {
      map[s[i]] = 1;
    } else {
      ++map[s[++i]];
    }
    if (map["R"] === map["L"]) count++;
  }
  return count;
};
