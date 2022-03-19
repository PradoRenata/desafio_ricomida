$(function(){
 
    $('[data-bs-toggle="tooltip"]').tooltip(); 

    $('#boton').click(function(){
        alert("El correo fué enviado correctamente...")
    });

    $('h4').on('dblclick', function(){
        $(this).css("color",'red');
    });

    $('.card-text').click(function(){
        $('.card-text').toggle(500);
    })

    $('.card-title').click(function(){
        $('.card-text').toggle(500);
    })

});



    
        