import "./App.css";
import { groupAnagrams, hasAllCharacters, sortRGB } from "./Problems";

function App() {
  //anagram Question 2
  const inputString = ["eat", "tea", "tan", "ate", "nat", "bat"];

  const output = groupAnagrams(inputString);
  console.log(output, "question 2");
  //---------------------------------------------------------------------

  //Question 3 SortByRGB
  const givenRGBString = ["R", "B", "R", "G", "G", "B"];
  const sortedStr = sortRGB(givenRGBString);
  console.log(sortedStr, "Question 3");
  //---------------------------------------------------------------------

  //Question 4 HasAllCahraters
  const s1 = "aabbw";
  const s2 = "abc";
  const check = hasAllCharacters(s1, s2);
  console.log(check, "Question 4");

  return (
    <div className="container">
      <div>
        <h1>hiii Qnance</h1>

        <p>Please open console to check output</p>
      </div>
    </div>
  );
}

export default App;
