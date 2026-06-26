//Cách chấp nhận JavaScript ĐẦU VÀO CỦA NGƯỜI DÙNG
//1.easy way = windown prompt
// let username;
// username = window.prompt("Enter your name: ");
// console.log(username);
//2.Professional way = html textbox
let username;
document.getElementById('mySubmit').onclick = function() {
    username = document.getElementById('myText').value;
    document.getElementById('myH1').textContent = `hello ${username}`;
}