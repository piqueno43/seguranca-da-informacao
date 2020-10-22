$(document).ready(function () {
    $(".titulo-box").on('click', function(){
        $(".titulo-box").removeClass("aberto");
        $(".box-orientacoes").removeClass("aberto");
        $(this).addClass("aberto");
        $(this).next(".box-orientacoes").addClass("aberto");
    });
});