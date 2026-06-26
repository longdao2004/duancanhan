// hiểu hơn về câu lênh đk
// và phép so sánh

/* var a = 1;
var b = 2;

var result = 'A' && 'B' && 'C';
// toán tử && đọc từng value cái nào k có tro 6 th trả về result
var result = 'A' || 'B' || 'C';
// toán tử || đọc value đầu tiên trả về result
console.log(result)

console.log('result', result); */

/* if (result) {
     console.log('dk dung');
} else {
     console.log('dk sai');
} */

// làm việc với mảng Phần 2
/*
array methods:
every()
some()
find()
filter()
map()
reduce() 
 */ 

var courses = [
     {
          id: 1,
          name: 'javascript',
          coin: 0
     },
     {
          id: 2,
          name: 'html',
          coin: 1
     },
     {
          id: 3,
          name: 'css',
          coin: 1
     },
     {
          id: 4,
          name: 'react',
          coin: 200
     },
     {
          id: 5,
          name: 'nodejs',
          coin: 1
     }
];

/* 
function courseHandler(course, index) {
    // console.log(course);
     return {
          id: course.id,
          name: `Khia hoc: ${course.name}`,
          coin: course.coin,
          coinText: `Gia: ${course.coin}`,
    };
    return course.name;
} */

// map() method
/* var newCousres = courses.map(courseHandler);
console.log(newCousres.join('')); 
*/

// reduce() method
// bien luu tru
// thuc hien luu tru
// VD
// Flat - "làm phẳng mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem); 
}, []);

console.log(flatArray);

// lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
     {
          topic: "Front-end",
          courses: [
               {
                    id: 1,
                    title: "HTML, CSS"
               },
               {
                    id: 2,
                    title: "Javascript"
               }
          ]
     },
     {
          topic: "Back-end",
          courses: [
               {
                    id: 1,
                    title: "PHP"
               },
               {
                    id: 2,
                    title: "Ruby"
               }
          ]
     }
];

var newCousres = topics.reduce(function(courses, topic) {
     return courses.concat(topic.courses);
}, []);

console.log(newCousres);

/* var htmls = newCousres.map(function() {
     return '<li>' + this.title + '</li>';
});

console.log(htmls.join('')); */

// includes method
var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];
function checkCar(cars) {
     return cars.includes('Mercedes', 2);
}

console.log(cars);