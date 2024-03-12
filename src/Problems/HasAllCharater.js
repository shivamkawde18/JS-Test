// Given two string s1 and s2. Determine if s2 has all the character
// present in s1.
export const hasAllCharacters = (s1, s2) => {
  for (let i = 0; i < s2.length; i++) {
    if (!s1.includes(s2[i])) return false;
  }
  return true;
};
