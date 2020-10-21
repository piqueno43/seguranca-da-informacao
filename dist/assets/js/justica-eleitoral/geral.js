$(document).ready(function() {
  $('#pesquisar').keyup(function() {
    var stringPesquisa = $(this).val();
    $('.geral_perguntas div')
      .parent()
      .hide();
    $('.geral_perguntas div:contains(' + stringPesquisa + ')')
      .parent()
      .show();
  });

  $(window).on('scroll',function() {
    if ($(this).scrollTop() > 100) {
      $('a[href="#top"]').fadeIn();
    } else {
      $('a[href="#top"]').fadeOut();
    }
  });

  $('a[href="#top"]').on('click',function() {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  var $meuMenu = $('#menuFixo');
  if ($meuMenu.length) {
    var offset = $meuMenu.offset().top;

    $(document).on('scroll', function() {
      if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('fixar');
        $('.je-menu').addClass('menu-drop');
        $('.je-menu ul').addClass('drop-content');
        $('.btn-selecionar').addClass('btn-selecionar-visivel');
      } else {
        $meuMenu.removeClass('fixar');
        $('.je-menu').removeClass('menu-drop');
        $('.je-menu ul').removeClass('drop-content');
        $('.btn-selecionar').removeClass('btn-selecionar-visivel');
      }
    });
  }
});

$('.area-de-comunicacao .abrir-menu').click(function() {
  $('.area-de-comunicacao .sub-menu').fadeIn('');
  $('.area-de-comunicacao .abrir-menu').hide();
  $('.area-de-comunicacao .fechar-menu').fadeIn();
});

$('.area-de-comunicacao .fechar-menu').click(function() {
  $('.area-de-comunicacao .sub-menu').fadeOut();
  $('.area-de-comunicacao .fechar-menu').hide();
  $('.area-de-comunicacao .abrir-menu').fadeIn();
});

$('#ver-grade').on('click',function() {
  $('#ver-grade').addClass('close');
  $('#ver-lista').removeClass('close');
  $('#nova-home .card-bg').removeClass('col-md-4');
  $('#nova-home .card-bg').addClass('col-md-12');
  $('#nova-home .card-bg').addClass('card-bg-100');
});

$('#ver-lista').on('click',function() {
  $('#ver-lista').addClass('close');
  $('#ver-grade').removeClass('close');
  $('#nova-home .card-bg').addClass('col-md-4');
  $('#nova-home .card-bg').removeClass('col-md-12');
  $('#nova-home .card-bg').removeClass('card-bg-100');
});

$('#mostrar-mais-cards').on('click', function() {
  $('#mostrar-mais-cards').addClass('close');
  $('#mostrar-menos-cards').removeClass('close');
  $('.card-aje').removeClass('close');
  $('.card-jovemeleitor').removeClass('close');
  $('.card-desinformacao').removeClass('close');
  $('.card-tps').removeClass('close');
  $('.card-spe').removeClass('close');
});

$('#mostrar-menos-cards').on('click', function() {
  $('#mostrar-mais-cards').removeClass('close');
  $('#mostrar-menos-cards').addClass('close');
  $('.card-aje').addClass('close');
  $('.card-jovemeleitor').addClass('close');
  $('.card-desinformacao').addClass('close');
  $('.card-tps').addClass('close');
  $('.card-spe').addClass('close');
});
