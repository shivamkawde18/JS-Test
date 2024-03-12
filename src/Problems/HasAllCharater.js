export const hasAllCharacters = (s1, s2) => {
  for (let i = 0; i < s2.length; i++) {
    if (!s1.includes(s2[i])) return false;
  }
  return true;
};
