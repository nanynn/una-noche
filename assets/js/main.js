var button = document.querySelector('button');

button.addEventListener('click', function(e) {
    e.preventDefault();
});


$(document).ready(function() {
    $('#primera', '#segunda', '#tercera', '#cuarta').click(function(event) {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});