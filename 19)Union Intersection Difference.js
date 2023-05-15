/*
Given two arrays (arr1) and (arr2) return the union, intersection, difference and symmetric difference of the two arrays.



Inputs: arr1 = [1, 2, 3] and arr2 = [2, 3, 4]



union(arr1, arr2) - Returns [1, 2, 3, 2, 3, 4]

intersection(arr1, arr2) - Returns [2, 3]

difference(arr1, arr2) - Returns [1]

difference(arr2, arr1) - Returns [4]

symmetricDifference(arr1, arr2) - Returns [1, 4]
*/
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
function union(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(union(arr1, arr2));

function intersection(arr1, arr2) {
  return arr1.filter((itm1) => arr2.includes(itm1));
}
console.log(intersection(arr1, arr2));

function difference1(arr1, arr2) {
  return arr1.filter((itm1) => !arr2.includes(itm1));
}
console.log(difference1(arr1, arr2));

function difference2(arr1, arr2) {
  return arr2.filter((itm1) => !arr1.includes(itm1));
}
console.log(difference2(arr1, arr2));

function symmetricDifference(arr1, arr2) {
  //   let res1 =
  return arr1
    .filter((itm1) => !arr2.includes(itm1))
    .concat(arr2.filter((itm1) => !arr1.includes(itm1)));
  //   let res2 = arr2.filter((itm1) => !arr1.includes(itm1));
  //   return [...res1, ...res2];
}
console.log(symmetricDifference(arr1, arr2));
