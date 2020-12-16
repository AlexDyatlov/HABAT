$(function(){

  $('.services__inner').slick({
    dots: true,
    prevArrow: '<button class="slider-arrows slider-arrows-prev"><img src="images/btnprev.svg" alt=""></button>',
    nextArrow: '<button class="slider-arrows slider-arrows-next"><img src="images/btnnext.svg" alt=""></button>',
  });

  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });

  $('.menu__btn').on('click', function(){
    this.classList.toggle('active')
    $('.header__wrapper').slideToggle();
  });

  $('.work__dropdown').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('work__dropdown--active');
  });

});