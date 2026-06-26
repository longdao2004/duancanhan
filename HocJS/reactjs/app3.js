// Spread operator Toán tử trải rộng 
var arr = ['kong', 'god', 'king'];
var arr2 = ['queen', 'prince'];
var arr3 = [...arr2, ...arr];
console.log(arr3); // ['kong', 'kong', 'god', 'king']

var obj1 = {
    name: 'kong'
};

var obj2 = {
    age: 30
};

var obj3 = {
    ...obj1,
    ...obj2,
    address: 'Hà Nội'
};

console.log(obj3); 

//
var arr4 = ['long1', 'long2', 'long3'];
function logger(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }   
}   
logger(...arr4); 