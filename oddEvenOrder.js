function sortArray(array) {
  let ascendingArr = [];
  let descendingArr = [];

  const result = array.filter((element, index) => {
    if (element % 2 === 0) {
      return ascendingArr.push(element);
    } else if (element % 2 === 1) {
      let descendant = descendingArr.push(element);
      return descendant;
    } else if (element.length === 0) {
      return element;
    }
  });
  console.log(result.sort());
  console.log(descendingArr.sort());
  console.log(ascendingArr.sort((b, a) => a - b));
}

sortArray([5, 3, 2, 8, 1, 4]);
