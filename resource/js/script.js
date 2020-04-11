$(document).ready(function(){
  /* Scroll back to Top */
    $(".BacktoTop").click(function(){
      $('html, body').animate({scrollTop:0},400);
    });
  /* Animations on scroll */
  $('.js--wp-about').waypoint(function(direction){
      $('.js--wp-about').addClass('animated fadeIn');
    },{
      offset: '50%'
  })
});
