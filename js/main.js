$(document).ready(function(){
  	
  	// clock timer

  	if ($('#clock').length) {

	    $('#clock').countdown('2018/10/01', function(event) {
	       var $this = $(this).html(event.strftime(''
	         + '<span class="day_clock clock_block">%D<b>дня</b></span>'
	         + '<span class="hour_clock clock_block">%H<b>час</b></span>'
	         + '<span class="min_clock clock_block">%M<b>мин</b></span>'
	         + '<span class="sec_clock clock_block">%S<b>сек</b></span>'));
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
            "value_area": 800
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
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
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
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
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
      "retina_detect": true,
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
});






///odometr///

var check = 0;
// scroll to elem
$(window).scroll(function() {
  // проверка на докрутку до определенного элемента
  var scroll_picca = $('.about_platform__wrapper').offset().top;
  //если мы докрутили до нужного элемента 
  
    if ($(this).scrollTop() > scroll_picca) {
    var decimal_places = 1;
      var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
    if (($('.about_platform_numbers__list').length)&&(check == 0)) {
    $('.odometr')
      .animateNumber(
        {
          number: 4.9 * decimal_factor,

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
      check = 1;

      $('.odometr1')
      .animateNumber(
        {
          number: 5.0 * decimal_factor,

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
      check = 1;

      $('.odometr2')
      .animateNumber(
        {
          number: 9.5 * decimal_factor,

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
      check = 1;

      $('.odometr3')
      .animateNumber(
        {
          number: 4.8 * decimal_factor,

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
      check = 1;

      $('.odometr4')
      .animateNumber(
        {
          number: 9.4 * decimal_factor,

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
      check = 1;
    } 
  }

});