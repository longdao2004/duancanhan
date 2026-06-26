//Enhanced object literals
// 1.định nghĩa key: value cho object
// 2.định nghĩa method cho object
// 3.định nghĩa key cho object dưới dạng biến

// định nghĩa 1
var name = 'React - The Complete Guide';
var price = 1000;

var course = {
    name: name,
    price: price,
}

console.log(course); 


var name2 = 'long';
var price2 = 2000;

var course2 = {
    name2,
    price2
}

console.log(course2); // { name2: 'long', price2: 2000 }

// dinh nghĩa method cho object
var name3 = 'React - The Complete Guide';
var price3 = 3000;

var course3 = {
    name3,
    price3,
    getName() {
        return name3;
    },
}

console.log(course3.getName()); // React - The Complete Guide

// định nghĩa key cho object dưới dạng biến
var fieldName = 'name4';
var fieldPrice = 'price4';
const course4 = {
    [fieldName]: 'long dao',
    [fieldPrice]: 5000
}
console.log(course4); // { name4: 'long dao', price4: 5000 }
