   $(document).ready(function () {

       var myElement = document.getElementById('conteudo-jovem-eleitor');
       new SimpleBar(myElement, {
           autoHide: true
       });


       $(".pergunta").click(function () {

           var verificar_class = $(this).attr("class");
           var procurar_class = verificar_class.match(/estou-nessa-pergunta/gmi);

           if (!procurar_class) {
               var numero_pergunta = $(this).attr("class").split(" ")[1].split("-")["1"];
               var pergunta = $(this).find(".balao-pergunta").text();

               $(".pergunta").removeClass("estou-nessa-pergunta");
               $(this).addClass("estou-nessa-pergunta");

               abrir_dialogo(numero_pergunta, pergunta);
           }

       });

       function abrir_dialogo(numero_dialogo, titulo_pergunta) {
           var conversa_ativa = $(".conversa-" + numero_dialogo + " li");
           $(".load-conversa").remove();
           $(".pergunta-selecionada li").text();
           $(".pergunta-selecionada").addClass("ativar-pergunta-selecionada");
           $(".pergunta-selecionada li").text(titulo_pergunta);

           $("#conteudo-jovem-eleitor").append("<div class='load-conversa esconder-load'><img src='/assets/images/jovem-eleitor/load-conversa.gif'></div>");

           $(".conversa").removeClass("ativar-conversa");
           $(".conversa li").removeClass("mostrar");
           $(".conversa-" + numero_dialogo).addClass("ativar-conversa");
           conversa_ativa.addClass("esconder");
           $(".load-conversa").removeClass("esconder-load");


           setTimeout(function () {
               conversa_ativa.each(function (i, element) {

                   var ultimo_item = i == conversa_ativa.length - 1;

                   setTimeout(function () {
                       setTimeout(function () {
                           $(".load-conversa").removeClass("esconder-load");
                       }, 1000);

                       element.className = "mostrar";

                       $(".load-conversa").addClass("esconder-load");

                       if (ultimo_item) {
                           $(".load-conversa").remove();
                       }
                       var scroll_1 = $('.simplebar-content').height();
                       var scroll_2 = $("#conteudo-jovem-eleitor .simplebar-content-wrapper").height();
                       var scroll_3 = scroll_1 - scroll_2;

                       $("#conteudo-jovem-eleitor .simplebar-content-wrapper").animate({ scrollTop: scroll_3 }, "slow");

                   }, i * 2000);

               });
           }, 2000);


       }
   });
