document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var messageError = document.getElementById('messageError');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    document.getElementById('clearBtn').addEventListener('click', function() {
        clearForm();
    });

    function validateForm() {
        clearErrors();

        var isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailError.style.display = 'block';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
            clearForm();
        }
    }

    function clearForm() {
        form.reset();
        clearErrors();
    }

    function clearErrors() {
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        messageError.style.display = 'none';
    }
});
