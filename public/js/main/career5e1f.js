$(document).ready(function() {

/*for home page*/
var whitebgheader = $('#landing-home').height();

$(window).scroll(function() {    
    var onscroll = $(window).scrollTop()+100;
    if (onscroll >= whitebgheader) {
        $("header").addClass("white-Header");
        $('.nav-item ul li a').addClass('font_color_d').removeClass('font_color_a');
    } else {
        $("header.white-Header").removeClass("white-Header");
        $('.nav-item ul li a').addClass('font_color_a').removeClass('font_color_d');
    }
});
/*for home ends*/

});

$(document).ready(function(){
  $("a[href='#careers-container']").click(function(e) {
    
    e.preventDefault();
    var targetOffset = $('#careers-container').offset().top-150;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);

  });
});
