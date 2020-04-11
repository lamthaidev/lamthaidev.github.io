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
  });

  $('.js--wp-job').waypoint(function(direction){
      $('.js--wp-job').addClass('animated fadeIn');
    },{
      offset: '30%'
  });

  $('.js--wp-portfolio').waypoint(function(direction){
      $('.js--wp-portfolio').addClass('animated fadeInUp');
    },{
      offset: '30%'
  });

  $('.js--wp-contact').waypoint(function(direction){
      $('.js--wp-contact').addClass('animated bounceIn');
    },{
      offset: '50%'
  });

  $('.counter').countUp({
  'time': 2000,
  'delay': 10
  });

});
