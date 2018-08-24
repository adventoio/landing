
/**
* Theme: Velonic Admin Template
* Author: Coderthemes
* Chart Js Page
*/

!function($) {
    "use strict";

    var ChartJs = function() {};

    ChartJs.prototype.respChart = function respChart(selector,type,data, options) {
        // get selector by context
        var ctx = $('canvas')[0].getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();
        var kuku = 0;
        // enable resizing matter
        $(window).scroll(function(){
             var scroll_picca = $('.diagramm_block').offset().top;
              //если мы докрутили до нужного элемента 
              
            if (($(this).scrollTop() > scroll_picca - 250)&&(kuku == 0)) {
                setTimeout(generateChart,400);
                kuku = 1; 
            }
        });

        // this function produce the responsive Chart JS
        function generateChart(){
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width() );
            switch(type){
                case 'Line':
                    new Chart(ctx).Line(data, options);
                    break;
                case 'Doughnut':
                    new Chart(ctx).Doughnut(data, options);
                    break;
                case 'Pie':
                    new Chart(ctx).Pie(data, options);
                    break;
                case 'Bar':
                    new Chart(ctx).Bar(data, options);
                    break;
                case 'Radar':
                    new Chart(ctx).Radar(data, options);
                    break;
                case 'PolarArea':
                    new Chart(ctx).PolarArea(data, options);
                    break;
            }
            // Initiate new chart or Redraw

        };
        // run function - render chart at first load

    },
    //init
    ChartJs.prototype.init = function() {
        var data1 = [
            {
                value: 62.5,
                color:"#db3b19",
            },
            {
                value : 7,
                color : "#3d5481",
            },
            {
                value : 3,
                color : "#35af9d",
            },
            {
                value : 12,
                color : "#23a9c3",
            },
            {
                value : 9,
                color : "#2a65bb",
            },
            {
                value : 2,
                color : "#9336ad",
            },
            {
                value : 3,
                color : "#a13e6c",
            },
            {
                value : 1.5,
                color : "#5a5784",
            }

        ]
        this.respChart($("#doughnut"),'Doughnut',data1);


    },
    $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs

}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.ChartJs.init()
}(window.jQuery);