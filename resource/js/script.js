$(document).ready(function(){
  /* Scroll back to Top */
    $(".BacktoTop").click(function(){
      $('html, body').animate({scrollTop:0},400);
    });
  /* Animations on scroll */
  $('.js--wp-about').waypoint(function(direction){
      $('.js--wp-about').addClass('animated fadeIn');
    },{
      offset: '90%'
  });

  $('.js--wp-job').waypoint(function(direction){
      $('.js--wp-job').addClass('animated fadeIn');
    },{
      offset: '90%'
  });

  $('.js--wp-portfolio').waypoint(function(direction){
      $('.js--wp-portfolio').addClass('animated fadeInUp');
    },{
      offset: '90%'
  });

  $('.js--wp-contact').waypoint(function(direction){
      $('.js--wp-contact').addClass('animated fadeInUp');
    },{
      offset: '90%'
  });
  $('.js--progress1').waypoint(function(direction){
      $('.js--progress1').addClass('progress1');
    },{
      offset: '80%'
  });
  $('.js--progress2').waypoint(function(direction){
      $('.js--progress2').addClass('progress2');
    },{
      offset: '80%'
  });
  $('.js--progress3').waypoint(function(direction){
      $('.js--progress3').addClass('progress3');
    },{
      offset: '95%'
  });
  $('.js--progress4').waypoint(function(direction){
      $('.js--progress4').addClass('progress4');
    },{
      offset: '95%'
  });

  $('.counter').countUp({
  'time': 2000,
  'delay': 10
  });

});
