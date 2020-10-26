

$(document).ready(function () {
	$(".atributos-tps ul li a").tooltip();

	$(function () {
		var hash = window.location.hash;
		hash && $('ul.nav a[href="' + hash + '"]').tab('show');

		var altura_pagina = $(window).scrollTop();


		if (altura_pagina > 100) {
			$("#navegacao-tps").addClass("nav-fixo-top");
			$("#navegacao-tps .navbar-brand img").addClass("sr-only");
		}

		/*$('.nav-tabs a').click(function(e) {
		    $(this).tab('show');
		    var scrollmem = $('body').scrollTop() || $('html').scrollTop();
		    window.location.hash = this.hash;
		    $('html,body').scrollTop(scrollmem);
		});*/
	});

	$(".ano-tps").click(function () {
		$(".ano-tps").removeClass("ativo");
		$(this).addClass("ativo");

		var pegar_class = $(this).find("a").attr("class");
		var pegar_ano = pegar_class.split("-")[2];

		$(".conteudo-tps").removeClass("ativo");
		$(".conteudo-tps-" + pegar_ano).addClass("ativo");

	});
	$(window).scroll(function () {
		var altura_scroll = $(this).scrollTop();

		if (altura_scroll > 70) {
			$("#navegacao-tps .navbar-brand img").addClass("sr-only");
			$("#navegacao-tps").addClass("nav-fixo-top");

		} else {
			$("#navegacao-tps .navbar-brand img").removeClass("sr-only");
			$("#navegacao-tps").removeClass("nav-fixo-top");
		}

	});

	$("#navbar-menu-principal .navbar-nav .nav-item").click(function () {
		$("#navbar-menu-principal .navbar-nav .nav-item").removeClass("active");
		$(this).addClass("active");

		var verificar_menu_mobile = $("#navegacao-tps button.navbar-toggler").attr(
			"aria-expanded");

		if (verificar_menu_mobile == "true") {
			$("#navbar-menu-principal").removeClass("show");
			$("#navegacao-tps button.navbar-toggler").attr("aria-expanded", "false");
		}
	});


	//Marcar marcos automaticamente

	(function () {
		$("#conteudo-cronograma .card .badge").each(function () {

			/*const dia_atual = "31";
			const mes_atual = "10";
			const ano_atual = "2019";

			let texto = $(this).text();
			let pegar_datas = texto.split(" a ");

			let primeira_data = pegar_datas[0];
			let segunda_data = pegar_datas[1];*/


			/*if (!segunda_data) {
			            let dividir_data = primeira_data.split("/");
			            let dia = dividir_data[0];
			            let mes = dividir_data[1];
			            let ano = dividir_data[2];

			            if (dia == dia_atual && mes == mes_atual && ano == ano_atual) {
			                $(this).closest(".card").addClass("atual");
			            }
			        }

			        if (primeira_data && segunda_data) {

			            let dividir_data_1 = primeira_data.split("/");
			            let dia_1 = dividir_data_1[0];
			            let mes_1 = dividir_data_1[1];
			            let ano_1 = dividir_data_1[2];

			            let dividir_data_2 = segunda_data.split("/");
			            let dia_2 = dividir_data_2[0];
			            let mes_2 = dividir_data_2[1];
			            let ano_2 = dividir_data_2[2];


			            if (!mes_1 && dia_2 > dia_1) {
			                mes_1 = mes_2;
			            } else if (!mes_1 && dia_2 < dia_1) {
			                mes_1 = mes_2 - 1;
			            }

			            if (!ano_1) {
			                ano_1 = ano_2;
			            }

			            console.log(dia_1 + "/" + mes_1 + "/" + ano_1 + " a " + dia_2 + "/" + mes_2 + "/" + ano_2);

			            if (dia_atual >= dia_1 && dia_atual <= dia_2 && mes_atual == mes_1) {
			                $(this).closest(".card").addClass("atual");
			            }

			    }*/


		});
	})();


	$.ajax({
		url: "https://www.tse.jus.br/@@get_lista_noticias_categoria?subject=TPS%20%E2%80%93%20Teste%20P%C3%BAblico%20de%20Seguran%C3%A7a",
		success: function (data) {
			$.each(data, function (key, dados) {


				$(".painel-esclarecimentos").append(
					'<div class="col-md-4 box-esclarecimento"><h3><a href="' +
					dados.url + '" target="_blank">' + dados.title +
					'</a></h3><span class="badge badge-pill badge-secondary">' + dados.date_publish + '</span></div>');


				$(".noticias-linha-do-tempo").append(
					'<div class="col-md-12 box-esclarecimento">TPS 2019: <a href="' +
					dados.url + '" target="_blank">' + dados.title +
					'</a><span class="badge badge-pill badge-secondary">' + dados.date_publish + '</span></div>');


			});
		}
	});

	function myFunction(atual_esclarecimentos) {

		var items = $(".painel-esclarecimentos " + atual_esclarecimentos);
		var numItems = items.length;
		var perPage = 6;

		items.slice(perPage).hide();

		$('#paginacao-esclarimentos').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: "«",
			nextText: "»",
			/*cssStyle: 'dark-theme',*/
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
	var
		todos_esclarecimentos = ".box-esclarecimento";

	setTimeout(function () {

		myFunction(todos_esclarecimentos);

	}, 500);
});

