// ECMAScript 6
// Let, const
// Template Literals
// Multi-line String
// Arrow function
// classes
// Default parameter values
// Destructuring
// Rest parameters
// Spread
// Enhanced object loterals
// tagged template literal
// Modules
// Optional chaining

// 1. Var / Let, Const: Scope, Hosting
// 2.  Const / Var, Let: Assignment
// Code block: if else, loop, {},....
//var a = 1;

// Template Literals
// const line = 'Line 1\nLine 2'

// console.log(line);

//Arrow function
// return về 1 object
// const sum = (a, b) => ({ a: a, b: b });
// console.log(sum(1,10));
// th nhận đối số
// const logger = (log) => console.log(log);
// logger('js');

// const obj = {
//     name: 'js!',
//     getName: function() {
//         return this.name; // this la context
//     }
// };
// console.log(obj.getName());

// classes
// function Course(name, price) {
//     this.name = name;
//     this.price = price;

//     this.getname = function() {
//         return this.name;
//     }

//     const isSuccess = false;
// }
/* class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    run() {
        
    }
}

const phpCourse = new Course('php', 1000);
const jsCourse = new Course('js', 1000);
console.log(phpCourse);
console.log(jsCourse);
 */
// Default parameter values
// function logger(log, type = 'log') {
//     console[type](log);
// }

// logger('Message');

// Enhanced object loterals
// DN method cho object
// DN key cho object duoi dang bien
// var fieldName = 'name';
// var fieldPrice = 'price';

// const course = {
//     [fieldName]: 'php',
//     [fieldPrice]: 1000,
// }
// console.log(course);

// Destructuring, Rest parameters (phan ra)
// array
// var array = ['JS', 'PHP', 'Ruby'];
// var[a, ...rest] = array;
// console.log(a)
// console.log(rest);

// object
// var course = {
//     name: 'JS',
//     price: 1000
// };

// var { name, price } = course;
/* let person = {
    name: 'Long dao',
    age: 20,
    address: 'Hanoi',
    company: {
        name: 'FPT',
        address: 'HCM'
    }
};

let { name, email = "email@example.com", ...info } = person;
console.log(`data: ${name}`);
console.log(`data: ${JSON.stringify(info)}`);
console.log(`data: ${info.company.address}`);
console.log(`data: ${email}`);

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));
 */
// Spread
// VD1
/* var object1 = {
    name: 'JS',
};
var object2 = {
    price: 1000
};
var object3 = { ...object1, ...object2 };
console.log(object3); */

// VD2
/* var array = ['JS', 'PHP', 'Ruby'];
function logger(...rest) { //rest
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
logger(...array); // spread */

// tagged template literal
/* function highlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
    .join('');
}

var brand = 'F8';
var course = 'JS';
const html = highlight`Hoc lap trinh ${course} tai ${brand}`;
console.log(html); // Hoc lap trinh JS tai F8 */

// Modules
// Import / Export
//import logger from './logger.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } 
// from './constants.js';
// import * as constants from './constants.js';
// console.log(constants);
// logger('Text message...', TYPE_WARN); 

// Optional chaining(?.) - Tùy chọn xâu chuỗi (?.)
/* const obj = {
    name: 'LD',
    cat: {
        name: 'Cat',
        cat2: {
            name: 'Cat2',
            cat3: {
                name: 'Cat3'
            }
        }
    }
};
if (obj.cat?.cat2?.cat3?.name) {
    console.log(obj.cat.cat2.cat3.name);
}
 */

// Polyfill
/* if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        } 
        if (start === undefined) { start = 0; }
        return this.indexOf(search, start) !== -1;
    };
} */

/*
Dưới đây là một ví dụ về Polyfill cho Array.prototype.includes, một phương thức mới trong ES6: 

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }
    var o = Object(this);
    var len = o.length >>> 0;
    if (len === 0) {
      return false;
    }
    var n = fromIndex | 0;
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
      if (o[k] === searchElement) {
        return true;
      }
      k++;
    }
    return false;
  };
}

Thư viện Polyfill

import 'core-js/stable';
import 'regenerator-runtime/runtime';

Polyfill.io:

Sử dụng dịch vụ như Polyfill.io để tự động cung cấp các Polyfill cần thiết dựa trên tính năng mà bạn sử dụng.
<script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=default"></script>

*/