function noOneLikesIt(arr) {
  let result;
  if (arr.length === 0) {
    result = "no one likes this";
  } else if (arr.length == 1) {
    result = `${arr[0]} likes it`;
  } else if (arr.length === 2) {
    result = `${arr[0]} and ${arr[1]} like this`;
  } else if (arr.length === 3) {
    result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  } else {
    result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
  console.log(result);
  return result;
}

noOneLikesIt(["Peter", "Alex", "Allen", "Mark"]);
