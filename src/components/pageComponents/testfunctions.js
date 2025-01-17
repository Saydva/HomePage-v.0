const arr = [
  [
    "flex justify:center",
    "flex items-center flex-col  self-start",
    "flex flex-row px-6 border-slate-200 ",
    "flex justify-center items-center",
    "p-3",
    "p-3",
    "p-3",
    "px-14 m-3",
    "py-8",
    "p-14 m-3",
    "",
    " p-3 hidden",
  ],
];

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

const empty = () => {
  return "";
};

function set(object) {
  var newobj = {};
  for (let value in object) {
    newobj[value] = empty();
  }
  return newobj;
}

var myobj = set(obj);
console.log(myobj);

function setback(arr, obj) {
  let backobj = obj;
  for (let i = 0; i > arr.length; i++) {
    for (let value in backobj) {
      backobj[value] = [i];
    }
  }
  return backobj;
}

setback(arr, myobj);
