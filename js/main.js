function openConfirmation() {
    $('.menu--overlay').addClass('menu--overlay--active');
    $('.modal_cont').addClass('modal_cont--active');
    $('body').addClass('body--active');
}

$(document).ready(function () {

    if (location.hash == '#confirmation') {
        openConfirmation();
    }

    $('.animate-number').each(function () {
        $(this).data('value', $(this).text());
        $(this).text('0');
    });

    $(".subscription-form").submit(function () { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "mail.php", //путь до php фаила отправителя
            data: form_data,
            success: function () {
                //код в этом блоке выполняется при успешной отправке сообщения
                openConfirmation();
            },
            error: function () {
                alert('error!');
            }
        });
        return false;
    });


    // fancybox

    /*$('.modal_link').fancybox();*/

    // visible telegramm button

    $('.modal_cont__close').on('click', function () {
        $('.modal_cont').removeClass('modal_cont--active');
        $('.menu--overlay').removeClass('menu--overlay--active');
        $('body').removeClass('body--active');
    });

    function telBtn() {
        $('.telegram_abs__wrap').addClass('telegram_abs__wrap--vis');
    }

    function telText() {
        $('.telegram_abs__wrap a span').addClass('span_vis');
    }

    setTimeout(telText, 35000);


    setTimeout(telBtn, 20000);

    if ($(window).width() > 991) {
        $(".h__nav li a").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href');
            var top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    }
    else {
        $(".h__nav li a").on("click", function (event) {
            event.preventDefault();
            var id2 = $(this).attr('href');
            var top2 = $(id2).offset().top;
            $('body,html').animate({scrollTop: top2}, 1500);
            $('.h__wrap').removeClass('h__wrap--active');
            $('body').removeClass('body--active');
            $('.menu--overlay').removeClass('menu--overlay--active');
            $('.h__lang').removeClass('h__lang--active');
        });
    }




    // select link

  $('.advento_uses__links a').on('click', function(event) {
    event.preventDefault();

    $('.toggle_wrap').slideToggle(400);

    $(this).toggleClass('toggle_link__active');
  });

  ///bg_anim//

  function bg_anim(){
    $('.lines_back').addClass('lines_back--active');
  }
  setTimeout(bg_anim,500);

  $(window).scroll(function() {

    // проверка на докрутку до определенного элемента
    var scroll_picca = $('.how_it_works__list3').offset().top;
    //если мы докрутили до нужного элемента

      if ($(this).scrollTop() > scroll_picca) {

        $('.gorizontal_graphic').addClass('animate_class__graph');

        $('.vertical_graphics').addClass('vertical_graphics__active');

      }
    });





  	// clock timer

  	if ($('.wrapper_rus').length) {

	    $('#clock').countdown('2018/10/24', function(event) {
	       var $this = $(this).html(event.strftime(''
           + '<span class="day_clock clock_block">%D<b>дня</b></span>'
           + '<span class="hour_clock clock_block">%H<b>час</b></span>'
           + '<span class="min_clock clock_block">%M<b>мин</b></span>'
           + '<span class="sec_clock clock_block">%S<b>сек</b></span>'));
	     });

	  }

    if ($('.wrapper_eng').length) {

      $('#clock').countdown('2018/10/24', function(event) {
         var $this = $(this).html(event.strftime(''
           + '<span class="day_clock clock_block">%D<b>days</b></span>'
           + '<span class="hour_clock clock_block">%H<b>hours</b></span>'
           + '<span class="min_clock clock_block">%M<b>min</b></span>'
           + '<span class="sec_clock clock_block">%S<b>sec</b></span>'));
       });

    }

    // select //

    $('select').selectric();

    //particles

    particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 180,
          "density": {
            "enable": true,
            "value_area": 1200
          }
        },
        "color": {
          "value": "#1d5070"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }/*,
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }*/
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 255,
          "color": "#1d5070",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": false,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

  );


  // tabs

  function DataitemCheck(dataItem){
    $('.faq_tabs__container').each(function(elemId) {
      elemId = $(this).attr('id');

      if ($(this).attr('id') == dataItem) {
        $('.faq_tabs__container').removeClass('faq_tabs__container--active');
        $(this).addClass('faq_tabs__container--active');
      }
    });
  }

  $('.faq_wrap__tabs_link li a').on("click", function (event) {
      event.preventDefault();

      $('.faq_wrap__tabs_link li a').removeClass('faq_wrap__tabs_link--active');
      $(this).addClass('faq_wrap__tabs_link--active');

      var dataItem  = $(this).attr('data-item');
      DataitemCheck(dataItem);
   });

  //tabs_toggle//

  $('.faq_tabs__list li span').on('click', function () {
    if($(this).hasClass('faq_tabs__list--active')){
      $(this).removeClass('faq_tabs__list--active');
      $(this).next('.faq_tab__info').slideUp(400);
    }
    else{
      $('.faq_tab__info').slideUp(400);
      $('.faq_tabs__list li span').removeClass('faq_tabs__list--active');
      $(this).addClass('faq_tabs__list--active');
      $(this).next('.faq_tab__info').slideDown(400);
    }
  });


  //roadmap//

  var z = 0;
  var h1 = $('.roadmap_wrap__columns--left').height();
  var h2 = $('.roadmap_wrap__columns--right').height();
  if(h1 > h2){
    var top = h1;
  }
  else{
    var top = h2;
  }
  console.log(top);
  $('.road_arrow--bottom').on('click', function (e) {
    e.preventDefault();
    z-=120;
    if(z > 580 - top){
      var sX = "translateY(" + z + "px)";
      $('.roadmap_wrap__columns--left').css({ transform: sX });
      $('.roadmap_wrap__columns--right').css({ transform: sX });
      console.log(z);
      $('.road_arrow--top').css('display','block');
    }
    if(z < 648 - top){
      $('.road_arrow--bottom').css('visibility','hidden');
    }
  });

  $('.road_arrow--top').on('click', function (e) {
    e.preventDefault();
    z+=120;
      var sX = "translateY(" + z + "px)";
      $('.roadmap_wrap__columns--left').css({ transform: sX });
      $('.roadmap_wrap__columns--right').css({ transform: sX });
      console.log(z);
      $('.road_arrow--bottom').css('visibility','visible');
    if(z == 0){
      $('.road_arrow--top').css('display','none');
    }
  });


  ///menu_mob///

  $('.menu_mob_but').on('click', function () {
    $('.h__wrap').addClass('h__wrap--active');
    $('body').addClass('body--active');
    $('.menu--overlay').addClass('menu--overlay--active');
    $('.h__lang').addClass('h__lang--active');
  });

  $('.mob_menu_close').on('click', function () {
    $('.h__wrap').removeClass('h__wrap--active');
    $('body').removeClass('body--active');
    $('.menu--overlay').removeClass('menu--overlay--active');
    $('.h__lang').removeClass('h__lang--active');
  });

  // $(document).click(function (e) {
  //   var container = $(".h__wrap");
  //   var container2 = $(".menu_mob_but");
  //     // var button=$('.m_catalog_block_list--bottom a');
  //     // var button2=$('.menu_mob_but');
  //     if ((container.has(e.target).length === 0)&&(container2.has(e.target).length === 0)){
  //         $('.h__wrap').removeClass('h__wrap--active');
  //         $('body').removeClass('body--active');
  //         $('.menu--overlay').removeClass('menu--overlay--active');
  //     }
  // });

  //wow//

   new WOW().init();

   ///head_anim//

  var check5 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca5 = $('.buy_btn').offset().top;
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > scroll_picca5)&&(check5 == 0)) {
          function delay(){
            $('.cl').addClass('cl--active');
            $('.cr').addClass('cr--active');
            check5 = 1;
          }
          setTimeout(delay,2500);
      }
  })

  var check6 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca6 = $('.vertical_graphics2').offset().top;
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > scroll_picca6)&&(check6 == 0)) {
        $('.advento_uses__v_images img').addClass('v_img_anim');
        check6 = 1 ;
    }
  })

  var check7 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca7 = $('.diagramm_block').offset().top;
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > scroll_picca7 - 500)&&(check7 == 0)) {
        $('.dg_bg').addClass('dg_bg--active');
        check7 = 1 ;
    }
  })

  var check8 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca8 = 200;
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > scroll_picca8)&&(check8 == 0)) {
        $('.about_platform__wrapper--bg').addClass('about_platform__wrapper--bg--active');
        check8 = 1 ;
    }
  })

  var check9 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca9 = $('.roadmap_block').offset().top;
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > scroll_picca9 - 100)&&(check9 == 0)) {
        $('.token_sell__back').addClass('token_sell__back--active');
        check9 = 1 ;
    }
  })

  var check10 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca10 = $('.our_comand').offset().top;
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > scroll_picca10 - 500)&&(check10 == 0)) {
        $('.our_comand .container_bg .comm_back').addClass('comm_back--active');
        check10 = 1 ;
    }
  })

  var check11 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca11 = $('.our_consultant').offset().top;
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > scroll_picca11 - 500)&&(check11 == 0)) {
        $('.our_consultant .container_bg .comm_back').addClass('comm_back--active');
        check11 = 1 ;
    }
  })

  var check12 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca12 = $('.part_block').offset().top;
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > scroll_picca12 - 500)&&(check12 == 0)) {
        $('.smi_bg').addClass('smi_bg--active');
        check12 = 1 ;
    }
  })


  var check13 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    var scroll_picca13 = $('.ssp_dsp__content').offset().top;
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > scroll_picca13 + 150)&&(check13 == 0)) {
        $('.advento_uses__v_images2 img').addClass('v_img_anim2');
        check13 = 1 ;
    }
  })

  var check14 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    //если мы докрутили до нужного элемента

      if (($(this).scrollTop() > 500)&&(check14 == 0)) {
        $('.token_sell > img').attr('src','img/after_roadmap_bg.jpg');
        check14 = 1 ;
    }
  })

  var check15 = 0;
  // scroll to elem
  $(window).scroll(function() {
    // проверка на докрутку до определенного элемента
    //если мы докрутили до нужного элемента
      var scroll_picca15 = $('.advento_title__wrapper').offset().top;

      if (($(this).scrollTop() > scroll_picca15)&&(check15 == 0)) {
        $('.v_bg_head').addClass('v_bg_head--active');
        check15 = 1 ;
    }
  })



});

// lightning head

$(window).scroll(function() {
  // проверка на докрутку до определенного элемента
  var scroll_picca = $('.about_platform__wrapper').offset().top;
  //если мы докрутили до нужного элемента

    if ($(this).scrollTop() > scroll_picca - 300) {
      $('.about_platform__img').addClass('about_platform__img--active');
    }
});

function startAnimateNumber(selector, decimal_places) {
    $element = $(selector);

    var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

    $element.animateNumber(
        {
            number: $element.data('value') * decimal_factor,

            numberStep: function(now, tween) {
                var floored_number = Math.floor(now) / decimal_factor,
                    target = $(tween.elem);

                if (decimal_places > 0) {
                    // force decimal places even if they are 0
                    floored_number = floored_number.toFixed(1);

                    // replace '.' separator with ','
                    floored_number = floored_number.toString().replace('.', '.');
                }

                target.text(floored_number);
            }
        },
        1300
    );
}

///odometr///

var check = 0;
// scroll to elem
$(window).scroll(function() {
  // проверка на докрутку до определенного элемента
  var scroll_picca = $('.about_platform__wrapper').offset().top;
  //если мы докрутили до нужного элемента

    if ($(this).scrollTop() > scroll_picca) {

    if (($('.about_platform_numbers__list').length)&&(check == 0)) {
      startAnimateNumber('.odometr', 1);
      startAnimateNumber('.odometr1', 1);
      startAnimateNumber('.odometr2', 1);
      startAnimateNumber('.odometr3', 1);
      startAnimateNumber('.odometr4', 1);
      check = 1;
    }
  }



  if (($(window).width() < 1200) > 0) {

      $('.security_content--right, .security_logo').appendTo('.security_content--left__block');

  }

});

$(window).resize(function() {

  if (($(window).width() < 1200) > 0) {

      $('.security_content--right, .security_logo').appendTo('.security_content--left__block');

  }

});

var check2 = 0;
var check20 = 0;

$(window).scroll(function(){



    var scroll_picca2 = $('.token_sell').offset().top;


  //если мы докрутили до нужного элемента

    if ($(this).scrollTop() > scroll_picca2 - 200) {

          if (($('.token_sell__ul').length)&&(check2 == 0)) {
              startAnimateNumber('.percent1 i', 1);
              startAnimateNumber('.percent2 i', 1);
              startAnimateNumber('.percent3 i', 1);
              check2 = 1;
          }
    }

    var scroll_picca10 = $('.contain_market__wrapper').offset().top;

    if ($(this).scrollTop() > scroll_picca10 - 200) {
          if (($('.contain_market__wrapper--top').length)&&(check20 == 0)) {
              check20 = 1;
              startAnimateNumber('.pers1_cont', 0);
              startAnimateNumber('.pers2_cont', 0);
              startAnimateNumber('.pers3_cont', 0);
              startAnimateNumber('.pers4_cont', 0);
              startAnimateNumber('.pers5_cont', 0);
              startAnimateNumber('.pers6_cont', 0);
          }
    }
});








