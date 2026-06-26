
//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator
/* =: Gán giá trị cho biến.
==: So sánh giá trị sau khi chuyển đổi kiểu, không so sánh kiểu dữ liệu.
===: So sánh cả giá trị và kiểu dữ liệu, không thực hiện chuyển đổi kiểu. */
const PI = 3.14;

if(PI === "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}