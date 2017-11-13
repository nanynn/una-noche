var button = document.querySelector('button');

button.addEventListener('click', function(e) {
    e.preventDefault();
});


$(document).ready(function() {
    $('#primera', '#segunda', '#tercera', '#cuarta').click(function(event) {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    $('#pago').slider({
        tooltip: 'always'
    });

    $('#pago').on('slide', function(e){
        $('#valor-pago').text('$' + e.value);
    });

    $('#opinion').submit(function(e){
        e.preventDefault();

        $.ajax({
            method: 'POST',
            url: 'https://formspree.io/chirimoyaestudio@gmail.com',
            data: $('#opinion').serialize(),
            datatype: 'json',
            success: function(){
                swal('¡Muchas Gracias!','Tu opinión ha sido enviada', 'success');
                $('#video').modal('hide');

            },
            error: function(){
                swal('¡Lo sentimos!','Hubo un error, inténtalo más tarde', 'error');
            }
        });
    });
});