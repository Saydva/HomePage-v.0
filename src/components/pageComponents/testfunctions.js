// const arr = [
//   "flex justify:center",
//   "flex items-center flex-col  self-start",
//   "flex flex-row px-6 border-slate-200 ",
//   "flex justify-center items-center",
//   "p-3",
//   "p-3",
//   "p-3",
//   "px-14 m-3",
//   "py-8",
//   "p-14 m-3",
//   "",
//   " p-3 hidden",
// ];
// splite arr into arr of subarrs with elements to set them as obj kye value pairs
// const splitArr = arr.map((element) => newArr.push([element]));

const layoutArr = [
  ["flex justify:center"],
  ["flex items-center flex-col  self-start"],
  ["flex flex-row px-6 border-slate-200 "],
  ["flex justify-center items-center"],
  ["p-3"],
  ["p-3"],
  ["p-3"],
  ["px-14 m-3"],
  ["py-8"],
  ["p-14 m-3"],
  [""],
  [" p-3 hidden"],
];
// console.log(newArr);

const obj = {
  div1: "flex justify:center",
  div2: "flex items-center flex-col  self-start",
  nav: "flex flex-row px-6 border-slate-200 ",
  p: "flex justify-center items-center",
  button1: "p-3",
  button2: "p-3",
  button3: "p-3",
  p1: "px-14 m-3",
  p2: "py-8",
  p3: "p-14 m-3",
  button4: "",
  p4: " p-3 hidden",
};

function set(object) {
  const empty = () => {
    return "";
  };
  var newobj = {};
  for (let value in object) {
    newobj[value] = empty();
  }
  return newobj;
}

var emptyObj = set(obj);
// console.log(emptyObj);

const setLauot = (obj) => {
  let modiObj = obj;
  Object.keys(modiObj).forEach((key, index) => {
    modiObj[key] = layoutArr[index][0];
  });
  return modiObj;
};

console.log(setLauot(emptyObj));

console.log(emptyObj);
// console.log(obj);
