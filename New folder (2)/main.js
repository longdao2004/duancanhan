// Khai báo biến
// var fullName = 'Dao Tat Long';
// var age = 26;

// Gọi hàm thông báo
// alert(fullName);
// alert(age);

// console.log(fullName);

// console.log('Xac nhan bn du tuoi!');

/*
alert 
cofirm
prompt
dùng đề bật cửa sổ hộp thoại
*/

// setInterval(function () {
//     console.log('Thong bao' + Math.random());
// }, 1000)

/*
// toán tử số học
 var a = 5;
 var b = 10;
 console.log(a + b);
 console.log(a - b);
 console.log(a * b);
 console.log(a % b);

 var c = 5;
 c++;
 ++c;
 c--;
 --c;
 console.log(c);

 var age = 20;
 var nextAge = age + 1;
 console.log(nextAge);
*/

/*
// toán tử gán
// var fullName = 'DTL';
var a = 1;

a += 2;

console.log(a);

var number = 1;

// sử dung làm hậu tố
number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3

var number = 1;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3

// sử dụng làm tiền tố
var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3

var number = 1;

console.log(++number); // 2
console.log(number); // 2

console.log(++number); // 3
console.log(number); // 3
*/

/*
// toán tử so sánh
var a = 1;
var b = 2;

if (a == b) {
    alert('dung')
}
*/

/*
// toán tử logic
var a = 1;
var b = 2;

if (a > 0 && b > 0) {
    // alert('a va b lon hon 0');
}
*/

/*
// toán tử ++ --
// hậu & tiền

var a = 5;
// Việc 1: +1 cho a, a = a + 1 => a = 7
// Việc 2: Trả về a sau khi đc + 1

// Việc 1: 'a copy', 'a copy' = 5
// Việc 2: trừ 1 của a, a = a - 1 => a = 4
// Việc 3: trả về 'a copy'
var output = a--;

console.log('output: ', output);
*/

/*
// toán tử chuỗi - String  operator
var name = 'Dao';
name += ' Long';
console.log(name);
*/

/*
// boolean
var a = 1;
var b = 2;
var isSuccess = a > b;
console.log(isSuccess);

var age = 16
var canBuyAlcohol = age >= 18
console.log(canBuyAlcohol)
*/

/*
// câu lệnh điều kiện if else
if () {
    // code
} else {
    // code
}
*/

/*
// toán tử logic
var a = 1;
var b = 2;
var c = 3;

if (a > 0 && b > 0 && c > 0) {
    console.log('dk dung');
}
*/

// Kiểu dữ liệu
// number type
var a = 1;
var b = 2;
var c = 3;

// String type
var fullName = 'Long Dao';

// boolean
var isSuccess = true;

// undefined type
var age;

// Null
var isNull = null;
console.log(typeof isNull)

// Symbol
var a = Symbol('a');

// Function
var myFunction = function() {
    alert('2 chao');
}

// Object
var myObject = {
    name: 'Long Dao',
    age: 20,
    address: 'HN',
    myFunction: function () {

    }
};

var myArray = [
    'JS',
    'PHP',
    'JAVA',
];

/*
//: Kết quả trả về của typeof sẽ luôn là 1 chuỗi, vậy nên typeof của d sẽ là 'string'.
var a = '1';
var b = 2;
var c = typeof a;
var d = typeof b;
var e = typeof d;
console.log(c, d, e);
*/

// toán tử so sánh
// === (so sánh tuyệt đối =)
// !== (!== trả về true nếu hai giá trị không bằng nhau hoặc khác kiểu dữ liệu.
// !== trả về false nếu hai giá trị bằng nhau và cùng kiểu dữ liệu.)
// var a = 1;
// var b = '1';
// console.log(a !== b);

// console.log(Boolean(1));
// console.log(Boolean(['BMW'])) // true
// console.log(Boolean({ name: 'Miu' })) // true

// console.log(!!'hi') // true

// console.log(!!false) // false
// console.log(!!0) // false
// console.log(!!'') // false
// console.log(!!null) // false
// console.log(!!undefined) // false
// console.log(!!NaN) // false

// var a = ''; //false
// var b = 0; // false
// var c = []; // true
// var d = 1 > 2; // false
// var e = {}; // true
// var f = '0'; //true

/* Kiểu dữ liệu số (number)
//Cách thông thường khi ta khai báo một số.
var million = 1000000;

//Cũng là khai báo số 1000000 nhưng có cách viết khác. Bạn có thể thêm chữ e vào sau số 1 và chỉ định số số không phía sau chữ e như sau:
var million = 1e6; // tương tự: 1000000
// hoặc
var billion = 2e9; // tương tự: 2000000000 (hai tỏi à nhầm hai tỉ)

-Đối tượng Number
Phương thức	Vai trò
Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi

-----------------------------------
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'
 */