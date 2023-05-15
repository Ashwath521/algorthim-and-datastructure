/*Given an array (names) of objects where each object contains the firstname and lastname of a person, return an array that contains the fullname of each person.

Input: names = [{firstname: 'Bruce', lastname: 'Wayne'}, {firstname: 'Clark', lastname: 'Kent'}]

fullNames(names) - Returns ['Bruce Wayne', 'Clark Kent'] */
// solution-1
let data = [
  { firstname: "Bruce", lastname: "Wayne" },
  { firstname: "Clark", lastname: "Kent" },
];
function fullNames(names) {
  return names.map((data) => data.firstname + " " + data.lastname);
}
console.log(fullNames(data));

// solution-2

function fullNames2(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(data[i].firstname + " " + data[i].lastname);
  }
  return result;
}
console.log(fullNames2(data));
