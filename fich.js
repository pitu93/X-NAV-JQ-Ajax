jQuery(document).ready(function(){
    $.ajax({
        type:"GET",
        url: "texto"
    }).done(function(pagina){
        $("#inicial").text(pagina);
    });

    $('#boton').click(function(){
        $.ajax({
            type:"GET",
            url: "texto2"
        }).done(function(pagina){
            $("#textboton").text(pagina);
        });
    }) 

    $('#boton2').click(function(){
        $.ajax({
            type:"GET",
            url: "texto3"
        }).done(function(pagina){
            $("#html").html(pagina);
        });
    }) 
});
