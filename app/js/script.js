$(document).ready(function(){
  new WOW().init();
 
  $('.nav-menu__link, .logo').click(function(e){
    e.preventDefault();
    var valueHref = $(this).attr('href');
    var positionContentOfHref = $(valueHref).offset().top - $('.nav').outerHeight();
    
    $('html').animate({
      scrollTop: positionContentOfHref
    }, 600)
    
  })
  
  $('.nav-menu__btn').click(function(){
    if(!$(this).hasClass('open')){
      $(this).addClass('open');
      $('.nav-menu').addClass('d-flex')
    }
    else{
      $(this).removeClass('open');
      $('.nav-menu').removeClass('d-flex')
    }
  })
 
  $(window).scroll(function(){
    if($(this).scrollTop() > $('.nav').outerHeight()){
      $('.nav').addClass('bg');
    }
    else{
      $('.nav').removeClass('bg');
    }
  })
  
  $('.works-control__item').click(function(){
    $('.works-control__item').removeClass('works-control__item_active');
    $(this).addClass('works-control__item_active');
    filterPhoto('.' + $(this).attr('data-filter'));
  })
  
  function filterPhoto(choosedAttrValue){
    $('.works-gallery__item').filter(choosedAttrValue).show();
    $('.works-gallery__item').not(choosedAttrValue).hide();
  }
 
  $('.facts__count').counterUp({
    time: 2000,
    delay: 100
  })
  
  $('.map-overlay').click(function(){
    $(this).hide();
  })
  $(window).scroll(function(){
    if($('.map-overlay').css('display') == 'none'){
      $('.map-overlay').show();
    }
    
    $('.nav-menu__link').each(function(){
      var valueHref = $(this).attr('href');
      var positionContentOfHref = $(valueHref).offset().top - $('.nav').outerHeight() - 80;
      if($(window).scrollTop() >= positionContentOfHref){
        $('.nav-menu__link').removeClass('nav-menu__link_active');
        $(this).addClass('nav-menu__link_active');
      }
    })
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})