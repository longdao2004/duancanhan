// html DOM
// DOM là  một tiêu chuẩn W3C (World Wide Web Consortium).
// DOM là Document Object Model

/* tiêu chuẩn w3c
DOM Có 3 thành phần 
1. Element
2. Atribute
3. Text 
*/
// Node

// ---------------------------------------------------------
// JS: Brower | Server 
// Browser: HTML -> DOM -> WEB API
// Server: HTML -> DOM -> WEB API -> DB -> WEB API -> DOM -> HTML
// ---------------------------------------------------------
// document object

// get element method
// 1. Element: ID, class, tag, CSS selector, HTML collection
// getElementById (trả về trực tiếp element)
// getElementsByClassName
// getElementsByTagName
// querySelector (trả về trực tiếp element)
// querySelectorAll
// HTML collection
//console.log(document.forms[1]);
// document.write
//document.write('LÔ')
// var boxNode = document.querySelector('.box1');
// console.log(boxNode.querySelector('li'));
// console.log(boxNode.getElementsByClassName('p'));
/* var heading = document.querySelectorAll('.heading');
for (var i = 0; i < heading.length; i++) {
    console.log(heading[i]);
} */

//console.log(document.forms[1]);

// 2. Atribute
/* var headingElement = document.querySelector('h1');
headingElement.title = 'title test';
console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('title')); */

// 3. Text 
// inner text, text content
//var headingElement = document.querySelector('.heading');

// lấy ra nội dung (geter)
/* console.log(headingElement.innerText);
console.log(headingElement.textContent); 
 */
// sửa đổi (seter)
/* headingElement.innerText = 'New heading';
headingElement.textContent = 'New heading'; */

// innerHTML, outerHTML
// innerHTML thêm đc elementNode vào 1 element
//var boxElement = document.querySelector('.box');
// innerHTML
//boxElement.innerHTML = '<h1>Heading</h1>';
//console.log(boxElement.innerHTML);
//console.log(document.querySelector('h1').innerText);

// outerHTML
/* console.log(boxElement.outerHTML);
boxElement.outerHTML = '<sapn>test</span>';
console.log(boxElement) */

// Node properties
//console.log([boxElement]);

// DOM CSS
/* boxElement.style.width = '100px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = 'red'; */

/* Object.assign(boxElement.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'purple '
});

console.log(boxElement.style.backgroundColor); */

// ClassList Property
// add
// contains
// remove
// toggle
//var boxElement = document.querySelector('.box');
// add
//boxElement.classList.add('red', 'blue');
// contains
// console.log(boxElement.classList.contains('red'));
//remove
// boxElement.classList.remove('red');
//toggle
// boxElement.classList.toggle('red');

/* setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000); */

// DOM events
// Attribute events
// Assign event using the element node

/* var h1Element = document.querySelectorAll('h1');

for (var i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
} */

// 1. inpuy / select

/* var inputElement = document.querySelector('select');

inputElement.onchange = function(e) {
    console.log(e.target.value);
} */

// 2. key up / down
/* var inputElement = document.querySelector('input[type="text"]');

inputElement.onkeyup = function(e) {
    console.log(e.which);
    switch(e.which) {
        case 27:
            console.log('Exit');
            break;
    }
} */

/* document.onkeydown = function(e) {
    switch(e.which) {
        case 27:
            console.log('Exit');
            break;
        case 13:
            console.log('Enter');
            break;
    }
} */

// 1. PreventDefault
/* var aElement = document.links;
for (var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function(e) {
        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
} */
/* var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick = function(e) {
    console.log(e.target);
} */

// 2. StopPropagation
/* document.querySelector('div').onclick = function() {
    console.log('div');
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('button');
} */

// DOM event - Event listener
//1. Xử lý nhiều viêc khi 1 event xảy ra
/* var btn = document.getElementById('btn');
btn.onclick = function() {
    console.log('viec1');
    console.log('viev2');
    alert('viec3');
} */
//2. lắng nghe / Hủy bỏ lắng nghe
/* var btn = document.getElementById('btn');

function viec1() {
    console.log('Viec1');
}

function viec2() {
    console.log('Viec2');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);
setTimeout(function() {
    btn.removeEventListener('click', viec1);
}, 3000); */

//JSON
// var json = '["JS","PHP"]';
// var json = '{"name":"Long dao","age":"20"}';

// var object = JSON.parse(json);
// console.log(object);

// console.log(JSON.stringify(true));

// PROMISE (sync, async, pain)
// Sync (đồng bộ)
// setTimeout, setInterval, fetch, xmlHttpRequest, đọc file, request animation frame(bất đồng bộ)
// setTimeout(function() {
//     console.log('Dòng này sẽ in ra sau')
// }, 5000)
// setTimeout là tác vụ bất động bộ (async)
// console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

// Callback hell
/* setTimeout (function() {
    console.log(1)
    setTimeout (function() {
        console.log(2)
        setTimeout (function() {
            console.log(3)
            setTimeout (function() {
                console.log(4)
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000); */

// Pyramid of doom
// Promise concept
/* var promise = new Promise(
   // Executor
   // function trả về 2 tham số
   function(resol, reject) {
       // logic
       // resolve('success')
       // reject('error')
       reject('co loi');
   }
); 

promise
   .then(function(courses){
       console.log(courses)
   })
   .catch(function(error){
       console.log(error)
   })
   .finally(function(){
       console.log('finally')
   }) */

// Promise (chain)
/* var promise = new Promise(
    function(resol, reject) {
        resol();
    }
); 

promise
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(function() {
                resolve([1,2,3]);
            }, 3000);
        });
    })
    .then(function(data){
        console.log(data);
        return 2;
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log('finally')
    }) */

// Đây là ví dụ về callback hell trong truyền thuyết, và cách sử dụng Promise để giải quyết nó.
/* function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    }); */

// Promise methods (resolve, reject, all)
// Promise.resolve, Promise.reject
/* var promise = new Promise(function(resolve, reject) {
    //resolve('success');
    reject('err')
}) */

/* var promise = Promise.resolve('Success!')
var promise = Promise.reject('Error!')
promise
    .then(function (result){
        console.log('result', result);
    })
    .catch(function(error) {
        console.log('error', error);
    }) */

// Promise.all
/* var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([1]);
        }, 1000);
    }
);

var promise2 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3]);
        }, 2000);
    }
);

Promise.all([promise1, promise2])
.then(function(result) {
    var result1 = result[0];
    var result2 = result[1];
    console.log( result1.concat(result2));
}); */

// VD
var users = [
    {
        id: 1,
        name: 'Long dao',
    },
    {
        id: 2,
        name: 'Minh tuan',
    },
    {
        id: 3,
        name: 'Huy tuan',
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'anh chua ra video 1',
    },
    {
        id: 2,
        user_id: 2,
        content: 'vua ra xong e oi 2',
    },
    {
        id: 3,
        user_id: 3,
        content: 'thanks 3',
    }
];

// 1. lay commnet
// 2. lay user
// 3. lay user theo id
// 4. lay comment theo user_id

//fale API
function getComments() {
    return new Promise(function(resolve) {
       setTimeout(function() {
        resolve(comment);
       }, 1000); 
    });
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user){
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        }, 1000);
    }, 1000);
}

getComments()
.then(function(comment) {
    var userIds = comment.map(function(comment){
        return comment.user_id;
    });

    return getUsersByIds(userIds)
        .then(function(users) {
            return {
                users: users,
                comment: comment,
            };
        });
})
.then(function(data) {
    var commentBlock = document.getElementById('comment-block');
    var html = '';
    data.comment.forEach(function(comment) {
        var user = data.users.find(function(user) {
            return user.id === comment.user_id;
        });
        html += `<li>${user.name}: ${comment.content}</li>`;
    });

    commentBlock.innerHTML = html;
});
