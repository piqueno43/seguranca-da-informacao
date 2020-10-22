$(document).ready(function () {
  $('#pesquisar').keyup(function () {
    var stringPesquisa = $(this).val()
    $('.geral_perguntas div')
      .parent()
      .hide()
    $('.geral_perguntas div:contains(' + stringPesquisa + ')')
      .parent()
      .show()
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('a[href="#top"]').fadeIn()
    } else {
      $('a[href="#top"]').fadeOut()
    }
  })

  $('a[href="#top"]').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      800
    )
    return false
  })

  // carrega cabecalho nas páginas internas
  // if (window.location.origin === 'http://www.justicaeleitoral.jus.br') {
  //   $('#header').load(
  //     'https://www.justicaeleitoral.jus.br/assets/inc/header.html #cabecalho_je'
  //   )
  // } else {
  //   $('#header').load('../assets/inc/header.html #cabecalho_je')
  // }

  var $meuMenu = $('#menuFixo')
  if ($meuMenu.length) {
    var offset = $meuMenu.offset().top

    $(document).on('scroll', function () {
      if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('fixar')
        $('.je-menu').addClass('menu-drop')
        $('.je-menu ul').addClass('drop-content')
        $('.btn-selecionar').addClass('btn-selecionar-visivel')
      } else {
        $meuMenu.removeClass('fixar')
        $('.je-menu').removeClass('menu-drop')
        $('.je-menu ul').removeClass('drop-content')
        $('.btn-selecionar').removeClass('btn-selecionar-visivel')
      }
    })
  }
})
