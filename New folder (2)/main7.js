// FETCH
// API la Application Programming Interface
// backend -> API -> Fetch -> JSON/XMl -> JSON.parse -> JS type -> render ra giap dien html
/* var postApi = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(postApi)
.then(function(response) {
    return response.json();
    // JSON.parse: JSON -> JS type
})
.then(function(posts) {
    var htmls = posts.map(function(post) {
        return `<li>
        ${post.title}
        ${post.body}
        </li>`;
    });
    var html = htmls.join('');
    document.getElementById('post-block').innerHTML = html;
})
.catch(function(error) {
    console.log('err');
}) */

// JSON server
/* var courseApi = 'http://localhost:3000/courses';
fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    }) */

// API server (fake) / Mock API
// CRUD
// Example


var courseApi = 'http://localhost:3000/courses';

function start() { 
    getCourses(renderCourses);

    handleCreateFrom();
}

start();

// functions
function getCourses(callback) {
    fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
    .then(function(response) {
        response.json();
    })
    .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `<li>
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                </li>
                `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateFrom() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        };
        createCourse(formData);
    }
}