// Random number generator
/* const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * max) + min;
console.log(randomNum); // Output: a random number between 0 and 1 */

const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    //tạo ra một số ngẫu nhiên trong một khoảng xác định bởi giá trị min và max
    // math.floor() lam tron xuong
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

}
