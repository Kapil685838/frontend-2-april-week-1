/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(item => {
    if(item.profession === "developer") console.log(item);
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(item => {
    if(item.profession === "developer") console.log(item);
  })
}

function addData() {
  //Write your code here, just console.log
  const employee = {
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  };

  arr.push(employee);

  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredData = arr.filter(item => item.profession !== "admin");

  arr = filteredData;

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let id = arr.length;

  let newArr = [
    { id: id + 1, name: "kapil", age: "24", profession: "developer" },
    { id: id + 2, name: "kamal", age: "26", profession: "trainee" },
    { id: id + 3, name: "arun", age: "21", profession: "trainee" },
  ];

  arr = arr.concat(newArr);

  console.log(arr);
}
