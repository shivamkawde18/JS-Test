// Question 2. Provided a list consisting of string S, group the string on basis of
// anagram. Two strings are considered Anagram if rearranging the letters
// of one string will result into the other string typically using all the
// original letters exactly once.

// Constraints:

// 1. Length of the input strings will be in range [1, 10]
// 2. 2. Sum of length of all strings will not exceed 10000 for any test case.

// Sample Test 1:-
// Input: S = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

export const groupAnagrams = (strings) => {
  const anagramGroups = {};

  // Function to sort characters in a string
  const sortString = (str) => str.split("").sort().join("");

  // Iterate through each string in the input array
  strings.forEach((str) => {
    // Sort the string to get a unique representation for anagrams
    const sortedStr = sortString(str);

    // Use the sorted string as a key in the hash map
    // If the key doesn't exist, create an empty array
    anagramGroups[sortedStr] = anagramGroups[sortedStr] || [];

    // Push the original string to the array
    anagramGroups[sortedStr].push(str);
  });

  const result = Object.values(anagramGroups).map((group) => group.sort());

  return result;
};


