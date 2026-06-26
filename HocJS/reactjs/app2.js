// destructuring, rest parameters
//destructuring (phan ra)
var array = ['long', 'hieu', 'tung', 'thanh', 'tien'];
var [a, b, c, d, e] = array; // khai bao array
console.log(a, b, c, d, e); // long hieu tung thanh tien

// rest parameters (tham so con lai)
var array2 = ['long', 'hieu', 'tung', 'thanh', 'tien'];
var [a, ...rest] = array2; // khai bao a
console.log(a);
console.log(rest);

// su dung voi object
var course = {
    name: 'javascript',
    price: 1000,
    image: 'image-address',
};

var { name, description = 'default description' } = course;
console.log(name);
console.log(description); // default description

// rest parameters with object
function logger(...params) {
    console.log(params);
}
console.log(logger(1, 2, 3, 4, 5));