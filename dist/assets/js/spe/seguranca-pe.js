

$(document).ready(function () {

	$('#seguranca-processo-eleitoral #ano_0').click(function () {
		$('li').removeClass("barra");
		$('#ano_0').addClass("barra");
	});

	$('#seguranca-processo-eleitoral #ano_1').click(function () {
		$('li').removeClass("barra");
		$('#ano_0').addClass("barra");
		$('#ano_1').addClass("barra");
	});
	$('#seguranca-processo-eleitoral #ano_2').click(function () {
		$('li').removeClass("barra");
		$('#ano_0').addClass("barra");
		$('#ano_1').addClass("barra");
		$('#ano_2').addClass("barra");
	});
	$('#seguranca-processo-eleitoral #ano_3').click(function () {
		$('li').removeClass("barra");
		$('#ano_0').addClass("barra");
		$('#ano_1').addClass("barra");
		$('#ano_2').addClass("barra");
		$('#ano_3').addClass("barra");
	});
	$('#seguranca-processo-eleitoral #ano_4').click(function () {
		$('li').removeClass("barra");
		$('#ano_0').addClass("barra");
		$('#ano_1').addClass("barra");
		$('#ano_2').addClass("barra");
		$('#ano_3').addClass("barra");
		$('#ano_4').addClass("barra");
	});
	$('#seguranca-processo-eleitoral #ano_5').click(function () {
		$('li').removeClass("barra");
		$('#ano_0').addClass("barra");
		$('#ano_1').addClass("barra");
		$('#ano_2').addClass("barra");
		$('#ano_3').addClass("barra");
		$('#ano_4').addClass("barra");
		$('#ano_5').addClass("barra");
	});
	$('#seguranca-processo-eleitoral #ano_6').click(function () {
		$('li').removeClass("barra");
		$('#ano_0').addClass("barra");
		$('#ano_1').addClass("barra");
		$('#ano_2').addClass("barra");
		$('#ano_3').addClass("barra");
		$('#ano_4').addClass("barra");
		$('#ano_5').addClass("barra");
		$('#ano_6').addClass("barra");
	});
	$('#seguranca-processo-eleitoral #ano_7').click(function () {
		$('li').removeClass("barra");
		$('#ano_0').addClass("barra");
		$('#ano_1').addClass("barra");
		$('#ano_2').addClass("barra");
		$('#ano_3').addClass("barra");
		$('#ano_4').addClass("barra");
		$('#ano_5').addClass("barra");
		$('#seguranca-processo-eleitoral #ano_6').addClass("barra");
		$('#seguranca-processo-eleitoral #ano_7').addClass("barra");
	});


	$("#spe-mitos-verdades .card-header").on("click", function () {
		$('#spe-mitos-verdades .card-header').show();
		$(this).hide();
	});

	//slide passo a passo
	$('#carouselPasso').carousel({
		interval: 10,
		itemsPerSlide: 4
	})

	function proximoPasso() {
		$('.passo-2').show();
		// $(this).hide();
	}

});

