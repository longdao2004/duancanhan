// Callback
// là hàm được truyền qua đối số
// khi gọi hàm khác

// 1. hàm
// 2. đc truyền qua đối số
// 3. đc gọi lại (trong hàm nhận đối số)
/* Array.prototype.map2 = function(callback) {
    var output = [], arraylength = this.length;
    for (var i = 0; i < arraylength; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var courses = ['java', 'php', 'ruby'];

var htmls = courses.map2(function(course) {
    return `<h2>${courses}</h2>`;
});

console.log(htmls.join('')); */

/* var htmls = courses.map(function() {
    return `<h2>${courses}</h2>`;
});
console.log(htmls.join('')); */


// forEach, fin, filter, some, every, reduce
// forEach
/* Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

var courses = ['java', 'php', 'ruby'];

courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
}); */

// filter2
/* Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result =  callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
};

var courses = [
    {
        name: 'javascript',
        coin: 680
    },
    {
        name: 'java',
        coin: 860
    },
    {
        name: 'php',
        coin: 980
    }
];

var filterCourses = courses.filter2(function(course, index, array) {
    return course.coin > 700;
});

console.log(filterCourses); */

// some2 
/* Array.prototype.some2 = function(callback) {
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                output = true;
                break;
            };
        }
    }
    return output;
}

var courses = [
    {
        name: 'javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'java',
        coin: 860,
        isFinish: false,
    },
    {
        name: 'php',
        coin: 980,
        isFinish: false,
    }
];

var result = courses.some2(function(course, index, array) {
    return course.isFinish;
});

console.log(result); */

// every2
Array.prototype.every2 = function(callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }

    return output;
}

var courses = [
    {
        name: 'javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'java',
        coin: 860,
        isFinish: true,
    },
    {
        name: 'php',
        coin: 980,
        isFinish: true,
    }
];

var result = courses.every2(function(course, index, array) {
    return course.coin > 500;
});

console.log(result); 