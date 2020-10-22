$(document).ready(function () {
  $(window).scroll(function () {
    var altura_scroll = $(this).scrollTop()

    if (altura_scroll > 70) {
      $('body').addClass('nav-fixo-top')
    } else {
      $('body').removeClass('nav-fixo-top')
    }
  })

  $('#nav-principal-desinformacao .navbar-nav .nav-item').click(function () {
    $('#nav-principal-desinformacao .navbar-nav .nav-item').removeClass(
      'active'
    )
    $(this).addClass('active')

    var verificar_menu_mobile = $(
      '.menu-desinformacao button.navbar-toggler'
    ).attr('aria-expanded')

    if (verificar_menu_mobile == 'true') {
      $('#nav-principal-desinformacao').removeClass('show')
      $('.menu-desinformacao button.navbar-toggler').attr(
        'aria-expanded',
        'false'
      )
    }
  })

  /*
    $(".menu-esclarecimentos .nav-item .nav-link").click(function (e) {

        $(".menu-esclarecimentos .nav-item .nav-link").removeClass("active");
        $(this).addClass("active");

        var texto_lista = $(this).text();
        var eleicoes_2018_esclarecimentos = "conteudo-eleicoes-2018";
        var je_esclarecimentos = "conteudo-je";
        var urna_esclarecimentos = "conteudo-urna";
        var voto_esclarecimentos = "conteudo-voto";
        var videos_esclarecimentos = "conteudo-videos";
        var esclarementos = "box-esclarecimento";

        if (texto_lista == "Eleições 2018") {
            filtro_esclarecimento(eleicoes_2018_esclarecimentos, "." + eleicoes_2018_esclarecimentos);
        } else if (texto_lista == "Justiça Eleitoral") {
            filtro_esclarecimento(je_esclarecimentos, "." + je_esclarecimentos);
        } else if (texto_lista == "Urna") {
            filtro_esclarecimento(urna_esclarecimentos, "." + urna_esclarecimentos);
        } else if (texto_lista == "Voto") {
            filtro_esclarecimento(voto_esclarecimentos, "." + voto_esclarecimentos);
        } else if (texto_lista == "Vídeos") {
            filtro_esclarecimento(videos_esclarecimentos, "." + videos_esclarecimentos);
        } else if (texto_lista == "Todos") {
            filtro_esclarecimento(esclarementos, "." + esclarementos);
        }
    });


    function myFunction(atual_esclarecimentos) {

        var items = $(".painel-esclarecimentos " + atual_esclarecimentos);
        var numItems = items.length;
        var perPage = 8;

        items.slice(perPage).hide();

        $('#paginacao-esclarimentos').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&laquo;",
            nextText: "&raquo;",
            cssStyle: 'dark-theme',
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });
    }

    function filtro_esclarecimento(class_pesquisa, class_ativar_funcao) {
        var last_index = $(".painel-esclarecimentos ." + class_pesquisa).length;
        $(".painel-esclarecimentos .box-esclarecimento").each(function (index) {
            $(this).removeClass("sr-only");
            var class_div = $(this).attr("class");
            var achar_class = class_div.match(class_pesquisa, 'gmi');
            if (achar_class == null) {
                $(this).addClass("sr-only");
            } else {
                myFunction(class_ativar_funcao);
                $(this).show();
            }
        });
        $(".painel-esclarecimentos ." + class_pesquisa).each(function (index) {
            $("#pagination-container").removeClass("sr-only");
            if (index > 7) {
                $(this).hide();
            }
            if (last_index < 9) {
                $("#pagination-container").addClass("sr-only");
            }
        });
    }

    var todos_esclarecimentos = ".box-esclarecimento";
    myFunction(todos_esclarecimentos);

*/

  $('.linha-videos .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    video: true,
    dots: false,
    navText: [
      "<img src='/assets/images/desinformacao/botao-anterior-videos.png'>",
      "<img src='/assets/images/desinformacao/botao-proximo-videos.png'>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  $('.parceiros .owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5700,
    autoplayHoverPause: true,
    smartSpeed: 3000,

    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
      "<img src='/assets/images/desinformacao/botao-anterior-parceiros.png'>",
      "<img src='/assets/images/desinformacao/botao-proximo-parceiros.png'>"
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })

  $.ajax({
    url:
      'https://www.tse.jus.br/@@get_lista_noticias_categoria?subject=Desinforma%C3%A7%C3%A3o',
    success: function (data) {
      $.each(data, function (key, dados) {
        if (dados.image_large != null) {
          $('.noticias-referentes').append(
            '<div class="col-12 texto-noticia"><div class="row"><div class="col-md-3 col-xs-12"><img src="' +
              dados.image_preview +
              '" alt="' +
              dados.title +
              '" class="img-fluid"></div><div class="col-md-9 col-xs-12"><h3><a href="' +
              dados.url +
              '" target="_blank">' +
              dados.title +
              '</a></h3><p><a href="' +
              dados.url +
              '" target="_blank">' +
              dados.description +
              '</a></p><p>' +
              dados.date_publish.substring(0, 10) +
              '</p></div></div></div>'
          )
        } else {
          $('.noticias-referentes').append(
            '<div class="col-12 texto-noticia"><h3><a href="' +
              dados.url +
              '" target="_blank">' +
              dados.title +
              '</a></h3><p><a href="' +
              dados.url +
              '" target="_blank">' +
              dados.description +
              '</a></p><p>' +
              dados.date_publish.substring(0, 10) +
              '</p></div>'
          )
        }
      })
    }
  })
})
