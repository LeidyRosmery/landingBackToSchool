var contenidoCurrentVideo = [{
  video: "https://www.youtube.com/watch?v=Ginx7WKq5GE&list=LLbFy2AGQPMDoDoRqgtPHTdQ&index=21",
  img: "img/logo-escritorio.png",
  texto: "Aprovecha un rincón de tu dormitorio y conviértelo en tu zona de estudio. Aprende a integrar un escritorio en tu habitación con los siguientes consejos."
}, {
  video: "https://www.youtube.com/watch?v=fKopy74weus&index=24&list=LLbFy2AGQPMDoDoRqgtPHTdQ",
  img: "img/icono-escritorio.png",
  texto: "Una área de estudio ordenada incrementa la atención y rendimiento académico. Clasifica tus objetos de uso diario y evita el desorden con los siguientes tips."
}, {
  video: "https://www.youtube.com/watch?v=PMivT7MJ41M&list=LLbFy2AGQPMDoDoRqgtPHTdQ&index=28",
  img: "img/logo-banner.png",
  texto: "Una buena alimentación estimula la concentración y renueva la energía durante el día. Prepara una lonchera saludable siguiendo estos consejos."
}];
$(document).ready(function() {
  var widthWindows = $(window).width();
  if (widthWindows > 992) {
    $('.link-video-tip').on('click', function(e) {
      // $('.video-tip-current').fadeOut('slow');

      // $(".video-tip-current").fadeTo("slow",0);
      //
     e.preventDefault();
      // $('.img-current ').attr('src', contenidoCurrentVideo[$(this).data('video')].img);
      // $('.text-current').html(contenidoCurrentVideo[$(this).data('video')].texto);
      // var currentVideo = $(this).find('[class*=video-tip-]').css('background-image');
      // $(".video-tip-current").css("background-image", currentVideo);


        // $('.video-tip-current').fadeIn('fast');
        // $(".video-tip-current").fadeTo("slow",1);

    })
  }
});
$(window).resize(function() {

  if (widthWindows > 992) {
    $('.link-video-tip').on('click', function(e) {
      e.preventDefault();

    })
  }
});
