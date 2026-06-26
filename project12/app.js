var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', function(e) {
    //console.log('Change', upload.files[0]);

    var file = upload.files[0]
    if (!file) {
        return
    }
    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = `Sai hinh anh`
        return
    } else {
        error.innerHTML = ``
    }

    if (file.size / (1024 * 1024) > 5) {
        error.innerHTML = `hinh anh duoi 5MB`
        return
    } else {
        error.innerHTML = ``
    }

    var img = document.createElement('img')
    img.src = URL.createObjectURL(file)
    preview.appendChild(img)
})