/* // Math object
// toan tu 3 ngoi
var course = {
    name: 'javascript',
    price:250
}

var results = course.coin > 0  */

/* var myInfo = {
    name: 'Nguyen Van A',
    age: 20,
    address: 'Ha Noi',
};

for (var key in myInfo) {
    console.log(key + ' : ' + myInfo[key]);
} */

/*
// for /in loop
var language = [
    'js',
    'php',
    'java',
]
    
for (var key in language) {
    console.log(language[key]);
} */

/* var myInfo = {
    name: 'Nguyen Van A',
    age: 20,
};


for (var value of Object.keys(myInfo)) {
    console.log(value);
} */

// đệ quy
// xác định điểm dừng
// logic handle => tạo ra điểm dừng
// bt đếm ngược time
function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1);
    }
    return 1;
} 

console.log(giaiThua(3));