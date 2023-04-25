//Find out the total sum of the array elements

let a = [1, 4, 5, 8, 9, 12];

function TotalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(TotalSum(a));
