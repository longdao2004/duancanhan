// arrow function
// Arrow function là một cách viết hàm ngắn gọn hơn trong JavaScript.
const course = {
    name: 'React - The Complete Guide',
    getName: function() {
        return this.name;
    },
}

console.log(course.getName()); // React - The Complete Guide
/*
Thực hành tạo Arrow function
Cập nhật tháng 6 năm 2022

Sử dụng arrow function để tạo hàm triple nhận vào 1 tham số x và trả về giá trị x * 3.
*/


// Expected results:
// console.log(triple(2)) // Output: 6
// console.log(triple(3)) // Output: 9
// console.log(triple(5)) // Output: 15
const triple = (x) => x * 3;
console.log(triple(2)); // Output: 6
console.log(triple(3)); // Output: 9    