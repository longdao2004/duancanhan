var btnOpen = document.querySelector('.open_modal');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal_header i');
var btnClose = document.querySelector('.modal_footer button');

// ham xu ly dong mo
function toggleModal(e) {
    modal.classList.toggle('hide');
}

// goi su kien 
btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e){
    if (e.target == e.currentTarget) {
        toggleModal();
    }
});

