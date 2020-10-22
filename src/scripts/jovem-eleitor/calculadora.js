 $(document).ready(function () {

     $('.input-data-nascimento').mask('00/00/0000');

     function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
         var d = new Date,
             ano_atual = d.getFullYear(),
             mes_atual = d.getMonth() + 1,
             dia_atual = d.getDate(),

             ano_aniversario = +ano_aniversario,
             mes_aniversario = +mes_aniversario,
             dia_aniversario = +dia_aniversario,

             quantos_anos = ano_atual - ano_aniversario;

         if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
             quantos_anos--;
         }

         return quantos_anos < 0 ? 0 : quantos_anos;
     }


     function validar_data(ano, mes, dia) {
         var ano_atual = new Date().getFullYear(),
             total_meses_ano = 12,
             total_dias_mes = new Date(ano, mes, 0),
             total_dias_mes = total_dias_mes.getDate();

         if (dia <= total_dias_mes && ano <= ano && mes <= mes) {
             var idaderr = idade(ano, mes, dia),
                 aniversario = dia + "/" + mes + "/" + ano;

             /*console.log("validou");*/
             $(".resposta-calculadora").append("<p>Você tem <strong>" + idaderr + "</strong> anos.</p>");


             if (idaderr == 15 && new Date(2020, mes, dia) < new Date(2020, 10, 05)) {
                 $(".resposta-calculadora").append("<p>Podem alistar-se para votar em 2020 mas, mesmo com o título, não são obrigados a votar.</p>");
             } else if (new Date(2020, mes, dia) >= new Date(2020, 10, 04) && idaderr == 69) {
                 $(".resposta-calculadora").append("<p>Podem alistar-se para votar em 2020 mas, mesmo com o título, não são obrigados a votar.</p>");
             } else if (idaderr == 18) {
                 $(".resposta-calculadora").append("<p>Devem alistar-se todos os brasileiros a partir da data de seu 18º aniversário. A partir desta data, o indivíduo está sujeito às consequências do alistamento tardio, exceto à multa eleitoral, cobrada apenas daqueles que se alistarem a partir dos 19 anos. Caso tenham 18 anos e se alistem até 6/5/2020, são obrigados a votar.</p>");
             } else if (idaderr == 17 && new Date(2020, mes, dia) > new Date(2020, 05, 07) && new Date(2020, mes, dia) < new Date(2020, 10, 04)) {
                 $(".resposta-calculadora").append("<p>Podem alistar-se para votar em 2020 e, se o fizerem, são obrigados a votar os que fizerem seu 18º aniversário entre os dias 7/5/20 e 4/10/20. Caso completem 18 anos entre 7/5/20 e a reabertura do cadastro eleitoral, no início de novembro de 2020, devem alistar-se tão logo seja possível a fim de evitar as consequências do alistamento tardio.</p>");
             } else if (idaderr > 18 && idaderr < 70) {
                 $(".resposta-calculadora").append("<p>São obrigados a alistar-se e a votar e estão sujeitos às consequências do alistamento tardio todos os maiores de 18 anos. Todavia, são isentos de multa eleitoral, permanecendo as demais consequências civis, os não alistados que fizeram 19 anos a partir do dia 7 de outubro de 2018 que requererem seu alistamento até o dia 6/5/2020.</p>");
             } else if (idaderr > 15 && idaderr <= 18 && new Date() < new Date('2020/10/05')) {
                 $(".resposta-calculadora").append("<p>Podem alistar-se para votar em 2020 mas, mesmo com o título, não são obrigados a votar.</p>");
             } else if (idaderr > 69) {
                 $(".resposta-calculadora").append("<p>Podem alistar-se para votar em 2020 mas, mesmo com o título, não são obrigados a votar.</p>");
             } else {
                 $(".resposta-calculadora").append("<p>Você não pode se alistar.</p>");
             }


         } else {
             /*console.log("não validou");*/
             $(".resposta-calculadora").append("Data incorreta");
         }

     }


     //SOLICITAÇÃO PARA CALCULAR IDADE


     function solicitacao() {
         $(".resposta-calculadora").html("");

         var data_aniversario = $(".input-data-nascimento").val();
         var dividir_data = data_aniversario.split("/");

         if (data_aniversario.length < 10) {
             $(".resposta-calculadora").append("<p>Data inválida</p>");
         } else if (dividir_data[2] < 1900 || dividir_data[2] > 2020) {
             $(".resposta-calculadora").append("<p>Ano inválido</p>");
         } else {
             validar_data(dividir_data[2], dividir_data[1], dividir_data[0]);
         }
     }


     $(".input-data-nascimento").on('keypress', function (e) {
         if (e.keyCode == 13) {
             solicitacao();
         }

     });

     $(".calcular-idade").on('click', function (e) {
         solicitacao();
     });


     //LIMPAR TUDO

 });