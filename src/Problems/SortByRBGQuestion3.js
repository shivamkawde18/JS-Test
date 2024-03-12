// Given a List of characters “R”, “G” and “B”. sort them in such a way
// that all “R”, “G” and “B” will be together, List need to be sorted in
// place.

export const sortRGB = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i <= high) {
    if (arr[i] === "R") {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
      i++;
    } else if (arr[i] === "G") {
      i++;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    }
  }

  return arr;
};
