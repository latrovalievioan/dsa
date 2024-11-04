const genMap = (s: string) => {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    else map.set(s[i], 1);
  }

  return map as Map<string, number>;
};

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const mapS = genMap(s);
  const mapT = genMap(t);

  for (let i = 0; i < s.length; i++) {
    if (mapS.get(s[i]) !== mapT.get(s[i])) return false;
  }

  return true;
}

console.log(isAnagram("rat", "car"));
