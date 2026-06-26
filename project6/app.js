var btnSeach = document.querySelector('.search-box_btn');
btnSeach.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
    this.previousSibling.focus();
})