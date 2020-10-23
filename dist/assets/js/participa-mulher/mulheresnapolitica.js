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
        $('html, body').animate({
                scrollTop: 0
            },
            800
        )
        return false
    })

    var offset = $('#menuFixo').offset().top
    var $meuMenu = $('#menuFixo')
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



    $('#mulheres-na-politica #linhaTempo #timeline-carousel').carousel({
        pause: true,
        interval: false
    })


    $('#ano_0').click(function () {
        $('li').removeClass('barra')

        $('#ano_0').addClass('barra')
    })
    $('#ano_1').click(function () {
        $('li').removeClass('barra')
        $('#ano_0, #ano_1').addClass('barra')
    })
    $('#ano_2').click(function () {
        $('li').removeClass('barra')
        $('#ano_0, #ano_1, #ano_2').addClass('barra')
    })
    $('#ano_3').click(function () {
        $('li').removeClass('barra')
        $('#ano_0, #ano_1, #ano_2, #ano_3').addClass('barra')
    })
    $('#ano_4').click(function () {
        $('li').removeClass('barra')
        $('#ano_0, #ano_1, #ano_2, #ano_3, #ano_4').addClass('barra')
    })
    $('#ano_5').click(function () {
        $('li').removeClass('barra')
        $('#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5').addClass('barra')
    })
    $('#ano_6').click(function () {
        $('li').removeClass('barra')
        $('#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6').addClass(
            'barra'
        )
    })
    $('#ano_7').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7'
        ).addClass('barra')
    })
    $('#ano_8').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8'
        ).addClass('barra')
    })
    $('#ano_9').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9'
        ).addClass('barra')
    })

    $('#ano_10').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10'
        ).addClass('barra')
    })
    $('#ano_11').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11'
        ).addClass('barra')
    })
    $('#ano_12').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12'
        ).addClass('barra')
    })
    $('#ano_13').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13'
        ).addClass('barra')
    })
    $('#ano_14').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13, #ano_14'
        ).addClass('barra')
    })
    $('#ano_15').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13, #ano_14, #ano_15'
        ).addClass('barra')
    })
    $('#ano_16').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13, #ano_14, #ano_15, #ano_16'
        ).addClass('barra')
    })
    $('#ano_17').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13, #ano_14, #ano_15, #ano_16, #ano_17'
        ).addClass('barra')
    })
    $('#ano_18').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13, #ano_14, #ano_15, #ano_16, #ano_17, #ano_18'
        ).addClass('barra')
    })
    $('#ano_19').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13, #ano_14, #ano_15, #ano_16, #ano_17, #ano_18, #ano_19'
        ).addClass('barra')
    })
    $('#ano_20').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13, #ano_14, #ano_15, #ano_16, #ano_17, #ano_18, #ano_19, #ano_20'
        ).addClass('barra')
    })
    $('#ano_21').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13, #ano_14, #ano_15, #ano_16, #ano_17, #ano_18, #ano_19, #ano_20, #ano_21'
        ).addClass('barra')
    })

    $('#ano_22').click(function () {
        $('li').removeClass('barra')
        $(
            '#ano_0, #ano_1, #ano_2, #ano_3, #ano_4, #ano_5, #ano_6, #ano_7, #ano_8, #ano_9, #ano_10, #ano_11, #ano_12, #ano_13, #ano_14, #ano_15, #ano_16, #ano_17, #ano_18, #ano_19, #ano_20, #ano_21, #ano_22'
        ).addClass('barra')
    })



    $(".card-body .btn").on("click", function () {
        $(this).closest(".card-body").next(".pecas").addClass("mostrar-pecas");
    });

    $(".pecas .btn").on("click", function () {
        $(this).closest(".pecas").removeClass("mostrar-pecas");
    });




    $('.menu-estatisticas ul li a').on('click', function () {
        $('.graficos_lista .graficos_item').addClass('sr-only')
        $('.menu-estatisticas ul li a').removeClass('ativo')
        $(this).addClass('ativo')

        var posicao = $('.menu-estatisticas ul li a.ativo')
            .closest('li')
            .index()

        $('.graficos_lista .graficos_item')
            .eq(posicao)
            .removeClass('sr-only')
    })

    // montando as noticias

    var x
    var i = 1
    var noticias = {
        noticia_1: {
            id: '1',
            tribunal: 'TRE/PA',
            titulo: 'Mulher contemporânea é temática de evento na Justiça Eleitoral do Pará',
            descricao: '',
            data: '27.08.2019',
            link: 'http://www.tre-pa.jus.br/imprensa/noticias-tre-pa/2019/Agosto/mulher-contemporanea-e-tematica-de-evento-na-justica-eleitoral-do-para'
        },

        noticia_2: {
            id: '2',
            tribunal: 'TSE',
            titulo: 'Memória de pioneiras do processo democrático brasileiro é lembrada pelo TSE no Dia Internacional da Igualdade Feminina',
            descricao: 'Data é celebrada em 26 de agosto, em alusão à ratificação da Declaração dos Direitos do Homem e do Cidadão, ocorrida em 1789 ',
            data: '26.08.2019',
            link: 'http://www.tse.jus.br/imprensa/noticias-tse/2019/Agosto/memoria-de-pioneiras-do-processo-democratico-brasileiro-e-lembrada-pelo-tse-no-dia-internacional-da-igualdade-feminina'
        },
        noticia_3: {
            id: '3',
            tribunal: 'TRE/RN',
            titulo: 'Roda de conversa reúne mulheres de destaque no cenário jurídico.Participe!',
            descricao: 'O evento é uma maneira de incentivar a participação institucional feminina',
            data: '22.08.2019',
            link: 'http://www.tre-rn.jus.br/imprensa/noticias-tre-rn/2019/Agosto/roda-de-conversa-reune-mulheres-de-destaque-no-cenario-juridico-participe'
        },

        noticia_4: {
            id: '4',
            tribunal: 'TRE/SC',
            titulo: 'TRE - RS institui programa "Mais Mulheres na Política"',
            descricao: 'Programa tem o objetivo de promover ações educativas sobre a participação das mulheres na política',
            data: '22.08.2019',
            link: 'http://www.tre-rs.jus.br/imprensa/noticias-tre-rs/2019/Agosto/tre-rs-institui-programa-mais-mulheres-na-politica-1'
        },
        noticia_5: {
            id: '5',
            tribunal: 'TRE/PA',
            titulo: 'Justiça Eleitoral promove debate sobre os desafios da mulher contemporânea',
            descricao: '',
            data: '21.08.2019',
            link: 'http://www.tre-pa.jus.br/imprensa/noticias-tre-pa/2019/Agosto/justica-eleitoral-promove-debate-sobre-os-desafios-da-mulher-contemporanea'
        },

        noticia_6: {
            id: '6',
            tribunal: 'TRE/SC',
            titulo: 'Chamada de trabalhos para a revista Resenha Eleitoral encerra na próxima segunda(19)',
            descricao: 'A chamada é aberta ao público em geral, podendo conter comentários de julgamentos ou papers relativos à participação feminina na política ',
            data: '15.08.2019',
            link: 'http://www.tre-sc.jus.br/imprensa/noticias-tre-sc/2019/Agosto/chamada-de-trabalhos-para-a-revista-resenha-eleitoral-encerra-na-proxima-segunda-19'
        },

        noticia_7: {
            id: '7',

            tribunal: 'TRE/SC',
            titulo: 'Seminário“ Mulheres na Política: Elas podem, o país precisa” será realizado em São Miguel do Oeste no próximo sábado(17)',
            descricao: 'Evento tem como objetivo aumentar a participação política feminina e a representatividade da mulher em âmbitos institucionais ',
            data: '14.08.2019',
            link: 'http://www.tre-sc.jus.br/imprensa/noticias-tre-sc/2019/Agosto/seminario-201cmulheres-na-politica-elas-podem-o-pais-precisa201d-sera-realizado-em-sao-miguel-do-oeste-no-proximo-sabado-17'
        },
        noticia_8: {
            id: '8',
            tribunal: 'TRE/PA',
            titulo: 'Justiça Eleitoral lança Comissão para tratar sobre desafios da mulher contemporânea',
            descricao: '',
            data: '13.08.2019',
            link: 'http://www.tre-pa.jus.br/imprensa/noticias-tre-pa/2019/Agosto/justica-eleitoral-lanca-comissao-para-tratar-sobre-desafios-da-mulher-contemporanea'
        },
        noticia_9: {
            id: '9',
            tribunal: 'TRE/ES',
            titulo: 'TRE - ES promove palestra sobre Participação Feminina na Política',
            descricao: 'Evento acontece nesta segunda - feira(29) e abordará os motivos da baixa representatividade feminina na vida pública ',
            data: '24.07.2019',
            link: 'http://www.tre-es.jus.br/imprensa/noticias-tre-es/2019/Julho/tre-es-promove-palestra-sobre-participacao-feminina-na-politica'
        },
        noticia_10: {
            id: '10',
            tribunal: 'TRE/PA',
            titulo: 'TRE cria comissão para incentivar a participação feminina no poder judiciário',
            descricao: 'A Portaria nº 18.836 / 2019 foi publicada nesta sexta - feira(12) no Diário da Justiça Eletrônico',
            data: '12.07.2019',
            link: 'http://www.tre-pa.jus.br/imprensa/noticias-tre-pa/2019/Julho/tre-cria-comissao-para-incentivar-a-participacao-feminina-no-poder-judiciario'
        }
    }

    function montar_noticias() {
        for (x in noticias) {
            noticia =
                '<div id="noticia_' +
                noticias[x].id +
                '">' +
                '<a href="' +
                noticias[x].link +
                '" target="_blank">' +
                '<h3>' +
                noticias[x].titulo +
                '</h3>' +
                '</a>' +
                '<span>Fonte: ' +
                noticias[x].tribunal +
                ' | postado em ' +
                noticias[x].data +
                '</span>' +
                '</div>'

            // str1 = "#noticia_";

            // $(sigla = str1.concat(noticias[x].id.toLowerCase())).prepend(noticia);

            //$('#noticias_lista').append(noticia)
        }
    }

    montar_noticias()

    // fim / montando as noticias

    // fim / montando as legislacao

    /* var ctx = document.getElementById('mulheres_filiadas').getContext('2d')
     var myChart = new Chart(ctx, {
         type: 'pie',
         data: {
             labels: ['Mulheres', 'Homens', 'Não informado'],
             datasets: [
                 {
                     label: '# de filiadas',
                     data: [44.28, 55.41, 0.31],
                     backgroundColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 0.7)',
               'rgba(59, 28, 44, 0.5)'
             ],
                     borderColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)'
             ],
                     borderWidth: 1
           }
         ]
         },
         options: {
             scales: {
                 yAxes: [
                     {
                         ticks: {
                             beginAtZero: false
                         }
             }
           ]
             }
         }
     })

     $('#btn_populacao').on('click', function () {
         var ctx = document.getElementById('populacao').getContext('2d')
         var populacao = new Chart(ctx, {
             type: 'pie',
             data: {
                 labels: ['Homens', 'Mulheres'],
                 datasets: [
                     {
                         label: '%',
                         data: [48.3, 51.7],
                         backgroundColor: ['rgba(59, 28, 44, 1)', 'rgba(59, 28, 44, 0.7)'],
                         borderColor: ['rgba(59, 28, 44, 1)', 'rgba(59, 28, 44, 1)'],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 showline: false,
                 responsive: true
             }
         })
         return populacao
     })
     $('#btn_mulheres_filiadas').on('click', function () {
         var ctx = document.getElementById('mulheres_filiadas').getContext('2d')
         var myChart = new Chart(ctx, {
             type: 'pie',
             data: {
                 labels: ['Mulheres', 'Homens', 'Não informado'],
                 datasets: [
                     {
                         label: '# de filiadas',
                         data: [44.28, 55.41, 0.31],
                         backgroundColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 0.7)',
               'rgba(59, 28, 44, 0.5)'
             ],
                         borderColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)'
             ],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 scales: {
                     yAxes: [
                         {
                             ticks: {
                                 beginAtZero: false
                             }
             }
           ]
                 }
             }
         })
     })

     $('#btn_mulheres_candidatas').on('click', function () {
         var ctx = document.getElementById('mulheres_candidatas').getContext('2d')
         var myChart = new Chart(ctx, {
             type: 'polarArea',
             data: {
                 labels: ['Mulheres', 'Homens'],
                 datasets: [
                     {
                         label: '# de candidatas',
                         data: [31.65, 68.37],
                         backgroundColor: ['rgba(59, 28, 44, 1)', 'rgba(59, 28, 44, 0.7)'],
                         borderColor: ['rgba(59, 28, 44, 1)', 'rgba(59, 28, 44, 1)'],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 scales: {
                     yAxes: [
                         {
                             ticks: {
                                 beginAtZero: false
                             }
             }
           ]
                 }
             }
         })
     })

     $('#btn_mulheres_candidatas_por_cargo_2016').on('click', function () {
         var ctx = document
             .getElementById('mulheres_candidatas_por_cargo_2016')
             .getContext('2d')
         var myChart = new Chart(ctx, {
             type: 'bar',
             data: {
                 labels: ['Prefeita', 'Vice-prefeita', 'Vereadora'],
                 datasets: [
                     {
                         label: 'Candidatas por cargo - 2016',
                         data: [2150, 2988, 153314],
                         backgroundColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 0.7)',
               'rgba(59, 28, 44, 0.5)'
             ],
                         borderColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)'
             ],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 scales: {
                     yAxes: [
                         {
                             ticks: {
                                 beginAtZero: true
                             }
             }
           ]
                 }
             }
         })
     })

     $('#btn_por_partido').on('click', function () {
         var ctx = document.getElementById('por_partido_2018').getContext('2d')
         var por_partido = new Chart(ctx, {
             type: 'horizontalBar',
             data: {
                 labels: [
           'AVANTE',
           'DC',
           'DEM',
           'MDB',
           'NOVO',
           'PATRI',
           'PC DO B',
           'PCB',
           'PCO',
           'PDT',
           'PHS',
           'PL',
           'PMB',
           'PMN',
           'PODE',
           'PP',
           'PPL',
           'PPS',
           'PRB',
           'PROS',
           'PRP',
           'PRTB',
           'PSB',
           'PSC',
           'PSD',
           'PSDB',
           'PSL',
           'PSOL',
           'PSTU',
           'PT',
           'PTB',
           'PTC',
           'PV',
           'REDE',
           'SOLIDARIEDADE'
         ],
                 datasets: [
                     {
                         label: 'Feminino',
                         data: [
               84.009,
               83.278,
               475.267,
               1075.564,
               3.944,
               31.667,
               177.978,
               6.573,
               1.468,
               557.57,
               94.901,
               354.885,
               23.642,
               100.177,
               71.344,
               642.176,
               17.51,
               200.741,
               204.491,
               39.281,
               112.267,
               60.135,
               282.994,
               186.099,
               135.425,
               650.337,
               100.125,
               67.715,
               7.851,
               708.061,
               535.74,
               87.043,
               156.918,
               8.994,
               97.752
             ],
                         backgroundColor: [
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E'
             ],
                         borderColor: [
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E',
               '#68314E'
             ],
                         borderWidth: 1
           },
                     {
                         label: 'Masculino',
                         data: [
               102.711,
               103.418,
               609.976,
               1311.252,
               22.272,
               48.394,
               218.658,
               8.009,
               2.26,
               696.641,
               120.001,
               440.966,
               19.228,
               120.776,
               95.432,
               799.745,
               22.812,
               277.672,
               193.713,
               58.117,
               137.755,
               78.29,
               371.513,
               236.267,
               191.786,
               805.275,
               140.173,
               82.5,
               9.286,
               876.873,
               653.18,
               111.857,
               218.864,
               14.898,
               115.383
             ],
                         backgroundColor: [
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784'
             ],
                         borderColor: [
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784',
               '#294784'
             ],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false,
                 legend: {
                     position: 'top'
                 },
                 plugins: {
                     labels: [
                         {
                             fontSize: 14,
                             fontStyle: 'bold',
                             fontColor: '#fff',
                             fontFamily: '"Lucida Console", Monaco, monospace',
                             textShadow: true,
                             render: 'percentage',
                             position: 'outside',
                             arc: true
             }
           ]
                 },
                 scales: {
                     xAxes: [
                         {
                             stacked: true,
                             display: true,
                             scaleLabel: {
                                 display: true,
                                 labelString: 'Total'
                             }
             }
           ],
                     yAxes: [
                         {
                             stacked: true,
                             display: true,
                             scaleLabel: {
                                 display: true,
                                 labelString: 'Partido'
                             }
             }
           ]
                 }
             }
         })
         return por_partido
     })

     $('#btn_mulheres_candidatas_por_cargo_2018').on('click', function () {
         var ctx = document
             .getElementById('mulheres_candidatas_por_cargo_2018')
             .getContext('2d')
         var myChart = new Chart(ctx, {
             type: 'bar',
             data: {
                 labels: [
           'Presidente',
           'Vice-presidente',
           'Governadora',
           'Vice-governadora',
           'Senadora',
           'Deputada Federal',
           'Deputada Estadual',
           'Deputada Distrital',
           'Senadora 1º Suplente',
           'Senadora 2º Suplente'
         ],
                 datasets: [
                     {
                         label: 'Candidatas por cargo - 2018',
                         data: [2, 5, 30, 67, 63, 2767, 5744, 309, 91, 117],
                         backgroundColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 0.7)',
               'rgba(59, 28, 44, 0.6)',
               'rgba(59, 28, 44, 0.5)',
               'rgba(59, 28, 44, 0.4)',
               'rgba(59, 28, 44, 0.3)',
               'rgba(59, 28, 44, 0.2)',
               'rgba(59, 28, 44, 0.1)',
               'rgba(59, 28, 44, 0.1)',
               'rgba(59, 28, 44, 0.1)'
             ],
                         borderColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)'
             ],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 scales: {
                     yAxes: [
                         {
                             ticks: {
                                 beginAtZero: true
                             }
             }
           ]
                 }
             }
         })
     })

     $('#btn_mulheres_eleitas').on('click', function () {
         var ctx = document.getElementById('mulheres_eleitas').getContext('2d')
         var myChart = new Chart(ctx, {
             type: 'doughnut',
             data: {
                 labels: ['Mulheres', 'Homens'],
                 datasets: [
                     {
                         label: 'Eleitas - 2018',
                         data: [290, 1500],
                         backgroundColor: ['rgba(59, 28, 44, 1)', 'rgba(59, 28, 44, 0.5)'],
                         borderColor: ['rgba(59, 28, 44, 1)', 'rgba(59, 28, 44, 1)'],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 scales: {
                     yAxes: [
                         {
                             ticks: {
                                 beginAtZero: true
                             }
             }
           ]
                 }
             }
         })
     })

     $('#btn_mulheres_eleitas_por_cargo_2018').on('click', function () {
         var ctx = document
             .getElementById('mulheres_eleitas_por_cargo_2018')
             .getContext('2d')
         var myChart = new Chart(ctx, {
             type: 'bar',
             data: {
                 labels: [
           'Governadora',
           'Vice-governadora',
           'Senadora',
           'Deputada Federal',
           'Deputada Estadual',
           'Deputada Distrital',
           'Senadora 1º Suplente',
           'Senadora 2º Suplente'
         ],
                 datasets: [
                     {
                         label: 'Eleitas por cargo - 2018',
                         data: [1, 7, 7, 77, 161, 3, 11, 23],
                         backgroundColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 0.7)',
               'rgba(59, 28, 44, 0.6)',
               'rgba(59, 28, 44, 0.5)',
               'rgba(59, 28, 44, 0.4)',
               'rgba(59, 28, 44, 0.3)',
               'rgba(59, 28, 44, 0.2)',
               'rgba(59, 28, 44, 0.1)'
             ],
                         borderColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)'
             ],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 scales: {
                     yAxes: [
                         {
                             ticks: {
                                 beginAtZero: true
                             }
             }
           ]
                 }
             }
         })
     })

     $('#btn_mulheres_candidatas_por_faixa_etaria').on('click', function () {
         var ctx = document
             .getElementById('mulheres_candidatas_por_faixa_etaria')
             .getContext('2d')
         var myChart = new Chart(ctx, {
             type: 'horizontalBar',
             data: {
                 labels: [
           '18 a 20 anos',
           '21 a 29 anos',
           '30 a 39 anos',
           '40 a 49 anos',
           '50 a 59 anos',
           '60 a 69 anos',
           '70 a 79 anos',
           '80 a 89 anos',
           '90 a 94 anos',
           '95 a 99 anos',
           '100 anos ou mais'
         ],
                 datasets: [
                     {
                         label: 'Por faixa etaria',
                         data: [
               2767,
               19214,
               41894,
               48958,
               38459,
               13940,
               2190,
               213,
               10,
               1,
               1
             ],
                         backgroundColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 0.7)',
               'rgba(59, 28, 44, 0.6)',
               'rgba(59, 28, 44, 0.5)',
               'rgba(59, 28, 44, 0.4)',
               'rgba(59, 28, 44, 0.3)',
               'rgba(59, 28, 44, 0.2)',
               'rgba(59, 28, 44, 0.1)',
               'rgba(59, 28, 44, 0.1)',
               'rgba(59, 28, 44, 0.1)',
               'rgba(59, 28, 44, 0.1)'
             ],
                         borderColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)'
             ],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 scales: {
                     yAxes: [
                         {
                             ticks: {
                                 beginAtZero: true
                             }
             }
           ]
                 }
             }
         })
     })

     $('#btn_mulheres_candidatas_por_ocupacao_2018').on('click', function () {
         var ctx = document
             .getElementById('mulheres_candidatas_por_ocupacao_2018')
             .getContext('2d')
         var myChart = new Chart(ctx, {
             type: 'horizontalBar',
             data: {
                 labels: [
           'Empresária',
           'Advogada',
           'Dona de casa',
           'Estudante, bolsista, estagiária e semelhantes',
           'Aposentada',
           'Professora de Ensino Médio',
           'Professora de Ensino Fundamental',
           'Comerciante',
           'Administradora',
           'Servidora Pública Estadual',
           'Outras *'
         ],
                 datasets: [
                     {
                         label: 'Candidatas por ocupação',
                         data: [609, 507, 494, 326, 296, 292, 254, 242, 208, 170, 5806],
                         backgroundColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 0.7)',
               'rgba(59, 28, 44, 0.6)',
               'rgba(59, 28, 44, 0.5)',
               'rgba(59, 28, 44, 0.4)',
               'rgba(59, 28, 44, 0.3)',
               'rgba(59, 28, 44, 0.2)',
               'rgba(59, 28, 44, 0.1)',
               'rgba(59, 28, 44, 0.1)',
               'rgba(59, 28, 44, 0.1)',
               'rgba(59, 28, 44, 0.1)'
             ],
                         borderColor: [
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)',
               'rgba(59, 28, 44, 1)'
             ],
                         borderWidth: 1
           }
         ]
             },
             options: {
                 scales: {
                     yAxes: [
                         {
                             ticks: {
                                 beginAtZero: true
                             }
             }
           ]
                 }
             }
         })
     })
     */
    $('#carouselNovo').on('slide.bs.carousel', function (e) {
        /*

                CC 2.0 License Iatek LLC 2018
                Attribution required

                */

        var $e = $(e.relatedTarget)
        var idx = $e.index()
        var itemsPerSlide = 3
        var totalItems = $('.carousel-item').length

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx)
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == 'left') {
                    $('.carousel-item')
                        .eq(i)
                        .appendTo('.carousel-inner')
                } else {
                    $('.carousel-item')
                        .eq(0)
                        .appendTo('.carousel-inner')
                }
            }
        }
    })
});


$(document).ready(function () {
    (function () {
        var url_inicial = "https://www.";
        var url_final = ".jus.br/@@get_lista_noticias_categoria?subject=Mulheres%20na%20Pol%C3%ADtica,Participa%20Mulher&start_date=10%2F01%2F2020&end_date=06%2F02%2F2020&sort=date%3AD%3AL%3Ad1";
        var urls = ["tse", "tre-ac", "tre-al", "tre-ap", "tre-am", "tre-ba", "tre-ce", "tre-df", "tre-es", "tre-go", "tre-ma", "tre-mt", "tre-ms", "tre-mg", "tre-pa", "tre-pb", "tre-pr", "tre-pe", "tre-pi", "tre-rn", "tre-rs", "tre-ro", "tre-rr", "tre-sc", "tre-sp", "tre-se", "tre-to"];

        var requests = urls.map(function (path) {
            return $.getJSON(url_inicial + path + url_final);
        });

        $.when.apply($, requests).then(function (tse_resp, tre_ac_resp, tre_al_resp, tre_ap_resp, tre_am_resp, tre_ba_resp, tre_ce_resp, tre_df_resp, tre_es_resp, tre_go_resp, tre_ma_resp, tre_mt_resp, tre_ms_resp, tre_mg_resp, tre_pa_resp, tre_pb_resp, tre_pr_resp, tre_pe_resp, tre_pi_resp, tre_rn_resp, tre_rs_resp, tre_ro_resp, tre_rr_resp, tre_sc_resp, tre_sp_resp, tre_se_resp, tre_to_resp) {

            var todos_tribunais = tse_resp[0].concat(tre_ac_resp[0], tre_al_resp[0], tre_ap_resp[0], tre_am_resp[0], tre_ba_resp[0], tre_ce_resp[0], tre_df_resp[0], tre_es_resp[0], tre_go_resp[0], tre_ma_resp[0], tre_mt_resp[0], tre_ms_resp[0], tre_mg_resp[0], tre_pa_resp[0], tre_pb_resp[0], tre_pr_resp[0], tre_pe_resp[0], tre_pi_resp[0], tre_rn_resp[0], tre_rs_resp[0], tre_ro_resp[0], tre_rr_resp[0], tre_sc_resp[0], tre_sp_resp[0], tre_se_resp[0], tre_to_resp[0]);

            $.each(todos_tribunais, function (a, b) {
                var data_ss = b.date_publish.split(" ")[0].split("/");
                var data_formated = data_ss[2] + "-" + data_ss[1] + "-" + data_ss[0];
                var data_formated = b["data_formatada"] = data_formated;
            });

            todos_tribunais.sort(function (e, r) {
                return new Date(r.data_formatada) - new Date(e.data_formatada);
            });

            $.each(todos_tribunais, function (a, b) {
                /*console.log(b.description);*/
                var url_tribunal = b.url.split(".")[1];
                $("#noticias_lista").append('<div class="box-esclarecimento"><a href="' + b.url + '" target="_blank"><h3>' + b.title + '</h3></a><span>Fonte: ' + url_tribunal + ' | postado em ' + b.date_publish + '</span></div>');
            });
            /*console.log(todos_tribunais);*/
        });
    })();
});


function myFunction(atual_esclarecimentos) {

    var items = $("#noticias_lista " + atual_esclarecimentos);
    var numItems = items.length;
    var perPage = 6;

    items.slice(perPage).hide();

    $('#paginacao-esclarimentos').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        /*cssStyle: 'dark-theme',*/
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
}

function filtro_esclarecimento(class_pesquisa, class_ativar_funcao) {
    var last_index = $("#noticias_lista ." + class_pesquisa).length;
    $("#noticias_lista .box-esclarecimento").each(function (index) {
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


    $("#noticias_lista ." + class_pesquisa).each(function (index) {
        $("#pagination-container").removeClass("sr-only");
        if (index > 7) {
            $(this).hide();
        }
        if (last_index < 9) {
            $("#pagination-container").addClass("sr-only");
        }
    });
}
var
    todos_esclarecimentos = ".box-esclarecimento";

setTimeout(function () {

    myFunction(todos_esclarecimentos);

}, 1000);
