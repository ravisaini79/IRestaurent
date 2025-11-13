$(document).ready(function() {

/*for home page*/
var whitebgheader = $('#landing-home').height();

$(window).scroll(function() {    
    var onscroll = $(window).scrollTop()+100;
    if (onscroll >= whitebgheader) {
        $("header").addClass("white-Header");
        $('.nav-item ul li a').addClass('font_color_d').removeClass('font_color_a');
        $('section#top-client-slider .owl-controls.clickable').attr('style','position:absolute;');
    } else {
        $("header.white-Header").removeClass("white-Header");
        $('.nav-item ul li a').addClass('font_color_a').removeClass('font_color_d');
        $('section#top-client-slider .owl-controls.clickable').attr('style','position:fixed;');
    }
});
/*for home ends*/

$('form#book-a-demo-form select').click(function(){
	$(this).css('color','#000');
});



/*client scroll*/
var absfixed = $('#landing-home').height();

$(window).scroll(function() {    
    var forclt = $(window).scrollTop()+640;
    if (forclt >= absfixed) {
        $('section#top-client-slider .owl-controls.clickable').attr('style','position:absolute;');
    } else {
        $('section#top-client-slider .owl-controls.clickable').attr('style','position:fixed;');
    }
});

});



