// chuyển đổi kiểu = thay đổi kiểu dữ liệu của giá trị này thành giá trị khác
// (chuỗi, số, boolean)

// --------------- EXAMPLE 1 ---------------
let age = window.prompt("How old are you?");
// hàm `number` chuyển đổi giá trị của 'age' từ chuỗi sang kiểu số(number).
age = Number(age);
age+=1;

console.log(age, typeof age);

// --------------- EXAMPLE 2 ---------------
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);