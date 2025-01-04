let months = ["January","july","march","august"];

months[0] = "july";

months[1] = "june";

console.log(months);


console.log("------------------OR-------------------");

let months1 = ["January","july","march","august"];

months1.shift();

months1.shift();

months1.unshift("june");

months1.unshift("july");

console.log(months1);
