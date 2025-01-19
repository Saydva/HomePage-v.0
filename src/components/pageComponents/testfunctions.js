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

const pageCss = {
  div1: "",
  div2: "",
  nav: "",
  p: "",
  button1: "",
  button2: "",
  button3: "",
  p1: "",
  p2: "",
  p3: "",
  button4: "",
  p4: "",
  button5: "",
};

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
  [" p-3"],
  ["btn m-3 w-24 "],
];
const elements = [" p4"];

function erase(object, elements) {
  const empty = () => {
    return "";
  };
  let obj = {};
  for (let value in object) {
    obj[value] = empty();
  }
  obj[elements] = "hidden";
  return obj;
}

const emptyObj = erase(pageCss);

const fill = (object) => {
  let obj = object;
  Object.keys(obj).forEach((key, index) => {
    obj[key] = layoutArr[index];
  });
  return obj;
};

console.log(fill(emptyObj, elements));
console.log(erase(emptyObj));
console.log(pageCss["button5"]);
// console.log(obj);
