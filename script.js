/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const newArr =  arr.map((item) => console.log(item.name))
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => console.log(item.name))
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4, name:"Pooja", age:"27", profession:"Developer"})
}

function removeAdmin() {
  //Write your code here, just console.log
  const filterAdmin =arr.filter((item) => item.profession!="admin")
console.log(filterAdmin)
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr1 = [1,2,3]
const arr2=[4,5,6]

const arr3 = arr1.concat(arr2)
console.log(arr3)
}
