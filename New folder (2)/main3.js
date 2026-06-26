/* 
// chuỗi
var firstname = 'Long';
var lastName = 'Dao';
console.log(`Toi la: ${firstname} ${lastName}`);

var myString = '   Hoc JS tai F8!   ';
//length
console.log(myString.length);
//Find index
console.log(myString.indexOf('JS', 6));
console.log(myString.lastIndexOf('JS'));
console.log(myString.search('JS'));
//cut string
console.log(myString.slice(-3, -1));
//replace
console.log(myString.replace(/JS/g, 'JavaScript'));
//convert to upper case chuyển đổi chuỗi thành chữ hoa
console.log(myString.toUpperCase());
//convert to lower case chuyển đỗi chuỗi thành chữ thường
console.log(myString.toLowerCase());
//trim
console.log(myString.trim());
//split
// console.log(myString.split(' '));
var language = 'JS, PHP, JAVA';
console.log(language.split(','))
//get a character by index
const myString2 = 'Long dao';
console.log(myString2.charAt(5)); 
*/

/* var age = 18;
var PI = 3.14;
console.log(age.toString());
console.log(PI.toFixed());

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false 
*/

/* // mảng phần 1
var languages = ['js', 'php', 'ruby'];
console.log(languages[0]);

// làm việc với Mảng

var languages = [
    'js', 'php', 'ruby'
];
//to string
console.log(languages.toString());
//join
console.log(languages.join(' - '));
//pop - xóa element cuối mảng và trả về phần tử đã xóa
console.log(languages.pop());
//push
console.log(languages.push('python'));
//shift - xóa element đầu mảng và trả về phần tử đã xóa
console.log(languages.shift());
//unshift - them 1 or nhiều phần tử trả về độ dài mới của mảng
console.log(languages.unshift('java'));
//splicing - xóa cắt chèn phần tử trong mảng
console.log(languages.splice(1, 2, 'c#', 'c++'));
//concat - tạo ra một mảng mới bằng cách hợp nhất (nối) các mảng hiện có:
var languages2 = [
    'c#',
    'c++'
];
console.log(languages.concat(languages2));
//Slicing - cắt một phần của mảng thành một mảng mới, tạo ra một mảng mới, không xóa bất kỳ phần tử nào khỏi mảng nguồn.
console.log(languages.slice(1, 3)); */

/*
Để vượt qua thử thách này, 
hãy tạo hàm getLastElement có 1 tham số 
(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), 
hàm này sẽ trả về phần tử cuối cùng trong mảng.

code: 
// Viết hàm tại đây
function getLastElement(arr) {
    return arr[arr.length - 1];
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

- array.length trả về độ dài của mảng.
- array.length - 1 là chỉ số của phần tử cuối cùng trong mảng (do chỉ số mảng bắt đầu từ 0).
- array[array.length - 1] truy cập phần tử cuối cùng của mảng.

function getFirstElement(arr) {
    return arr[0];
}
hãy tạo hàm getFirstElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử đầu tiên trong mảng.
 */
/* 
// Object trong JS

var emailKey = 'email'

var myInfo = {
    name: 'Nguyen Van A',
    age: 20,
    address: 'Ha Noi',
    [emailKey]: 'dtl10@gmail.com',
    getName: function() {
        return this.name;
    },
    getAge: function() {
    }
};

// Function --> phuong thuc
// Other --> thuoc tinh

console.log(myInfo.getName()); */


// Object constructor

var User = function User(firstname, lastName, avatar) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstname} ${this.lastName}`
    }
}

var author = new User('Long', 'dao', 'avatar');
var user = new User('Long', 'Tran', 'avatar');

author.title = 'chia se tai face';
user.comment = 'cmt dao';

console.log(author);
console.log(user);

// Obect prototype - Basic
//1.prototype la 
//2.su dung khi nao
var User = function User(firstname, lastName, avatar) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstname} ${this.lastName}`
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

var user = new User('Long', 'dao', 'avatar');
var user2 = new User('Long', 'Tran', 'avatar');

console.log(user.className);
console.log(user2.getClassName());

// doi tuong date
var date = Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();