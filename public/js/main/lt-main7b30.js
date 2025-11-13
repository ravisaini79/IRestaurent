
/*home*/
$(document).ready(function() {


    $(window).scrollTop(0);

/*for home page*/
var whitebgheader = $('#landing-home').height();

$(window).scroll(function() {    
    var onscroll = $(window).scrollTop()+100;
    if (onscroll >= whitebgheader) {
        $("header").addClass("white-Header");
        $('.nav-item ul li a').addClass('font_color_b').removeClass('font_color_a');
    } else {
        $("header.white-Header").removeClass("white-Header");
        $('.nav-item ul li a').addClass('font_color_a').removeClass('font_color_b');
    }
});


$(document).ready(function(){
  $(".onclick-scroll").click(function(onclickscroll) {
    var destination = $(this).attr('href');
    onclickscroll.preventDefault();
    var targetOffset = $('#'+destination+'').offset().top-50;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);

  });
});



/*for home ends*/

$('form#book-a-demo-form select').click(function(){
  $(this).css('color','#000');
});




$(document).ready(function(){
  $("a[href='#fifth-section']").click(function(e) {
    $('.off-canvas-wrap.move-left').removeClass('move-left');
    e.preventDefault();
    var targetOffset = $('#fifth-section').offset().top-50;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);

  });
});

$(document).ready(function(){
  $("a[href='#first-section']").click(function(e) {
    
    e.preventDefault();
    var targetOffset = $('#first-section').offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);

  });
});


/**
$('.static-2-home').attr('id','ourstory');
      $(window).load(function(){
      if(location.hash == '#ourstory')
        {
          $('a[href="http://bonjourchocolates.in/about-us"]').click();
          
        }
    });
*/


});

$(document).ready(function(){
  
  $("button.form_submit").click(function(e){
      if(frmSubmit('.greenwheels-form1')){
      // validate email
       $('div#loading').css('display','block');
      function ValidateEmail(email) {
            var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            return expr.test(email);
      };
      // data object
      var data = {
        yourname: $('input[name="yourname"]').val(),
        contactnumber: $.trim($('#countryCode').val()+" "+$('input[name="phoneNumber"]').val()),
        restaurantname: $('input[name="restaurantname"]').val(),
        email: $.trim($('input[name="email"]').val()),
        yourCity: $('[name="yourCity"]').val(),
        yourCountry: $('#countryCode option:selected').text().split('(')[0]
      }
      // validate and not send post request untill and unless data is validated
      if((data.yourname != '') && (data.mobile != '') && (data.restaurantname != '') && (data.email != '') && (data.yourCountry !='Select Country') && (data.yourCity != '') && (data.contactnumber.length >= 9)){
         if (ValidateEmail(data.email)) {
$.post("https://website-service.dashboards.greenwheels.com/api/v1/lt-website-service/restaurant/create",
           {
             name: data.yourname,
             phone_number: data.contactnumber,
             brand_name: data.restaurantname,
             email: data.email,
             city: data.yourCity,
             country:data.yourCountry
           },
           function (data, status) {
              gtag('event', 'form_submit', {
                send_to: 'G-NB7KXZGW5T',
                event_category: 'Form',
                event_action: 'submit',
                event_label: 'form_submit',
              });
            fbq('track', 'Lead', {
content_ids: ['1234'],
content_type: 'product',
value: 1.00,
currency: 'INR'
});
               ga('send', 'event', 'Book a demo', 'submit');
         goog_report_conversion('https://greenwheels.com/');
               // display success message
                $('div#loading').css('display','none');
               $('div#success').css('display','block');
               // clearing all data
               var elems = $("form input");
               var l = elems.length;
               for (var i = 0; i < l; ++i){
                 elems[i].value="";
               }
               
           });
         }
          
      }
              
      }
      else {
        return false;
      }
  });


  $("button.form_submit_new").click(function(e){
      
      if(frmSubmit('.greenwheels-form2')){
      // validate email
      $('div#loading').css('display','block');
      function ValidateEmail(email) {
            var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            return expr.test(email);
      };
      // data object
      var data = {
        yourname: $('.greenwheels-form2 input[name="yourname"]').val(),
        contactnumber: $.trim($('#countryCode1').val()+$('.greenwheels-form2 input[name="phoneNumber"]').val()),
        restaurantname: $('.greenwheels-form2  input[name="restaurantname"]').val(),
        email: $.trim($('.greenwheels-form2  input[name="email"]').val()),
        yourCity: $('.greenwheels-form2  [name="yourCity"]').val(),
        yourCountry: $('.greenwheels-form2  #countryCode1 option:selected').text().split('(')[0]
      }

      // validate and not send post request untill and unless data is validated
      if((data.yourname != '') && (data.mobile != '') && (data.restaurantname != '') && (data.email != '') && (data.yourCity != '') && (data.yourCountry !='') && (data.contactnumber.length >= 9)){
         if (ValidateEmail(data.email)) {
$.post("https://website-service.dashboards.greenwheels.com/api/v1/lt-website-service/restaurant/create",
           {
             name: data.yourname,
             phone_number: data.contactnumber,
             brand_name: data.restaurantname,
             email: data.email,
             city: data.yourCity,
             country: data.yourCountry
           },
           function (data, status) {
              gtag('event', 'form_submit', {
                send_to: 'G-NB7KXZGW5T',
                event_category: 'Form',
                event_action: 'submit',
                event_label: 'form_submit',
              });
            fbq('track', 'Lead', {
content_ids: ['1234'],
content_type: 'product',
value: 1.00,
currency: 'INR'
});
               ga('send', 'event', 'Book a demo', 'submit');
         goog_report_conversion('https://greenwheels.com/');
               // display success message
               $('div#loading').css('display','none');
                $('div#success').css('display','block');
                $('div#new-form').css('display','none');
                // clearing all data
                var elems = $("form input");
                var l = elems.length;
                for (var i = 0; i < l; ++i){
                  elems[i].value="";
                }
               
           });


         }
          
      }
      
      }
      else {
        return false;
      }
      
  });
  $(".greenwheels-form2,.greenwheels-form1").submit(function(e){
     e.preventDefault();
  });
$('a.close-reveal-ico,div#success').click(function()
{
$('#success').css('display','none');
});






/*********************** Footer Starts *******************************/

// var footBoxHome = document.getElementById("footer-box-home");
// var footBoxAll = document.getElementById("footer-box-all");
// var copyRight = document.getElementById("copy-right-new");

// var copyRightText = '<div class="row"><div class="small-12 medium-12 text-center columns font_family_a small-only-text-center font_size_a font_color_d">Copyright &copy; 2017. <span style="text-transform: none;">greenwheels</span>. All Rights Reserved.</div></div>'

// copyRight.innerHTML = copyRightText;

// var quicklinks='<div class="hide-for-small-only small-12 medium-4 columns text-left text-uppercase" id="quick-link">' + 
// '<h2 class="font_family_c font_size_a font_color_a">Quick Links</h2>' + 
//   '<ul class="small-block-grid-2">' + 
//     '<li><a class="font_family_a font_size_a font_color_d" href="about-us">About us</a></li>' +
//     '<li><a class="font_family_a font_size_a font_color_d" href="products">Products</a></li>' +
//     '<li><a class="font_family_a font_size_a font_color_d" href="clients">Clients</a></li>' +
//     '<li><a class="font_family_a font_size_a font_color_d" href="careers">Careers</a></li>' +
//     '<li><a class="font_family_a font_size_a font_color_d" href="pulse">Pulse</a></li>' +
//     '<li><a class="font_family_a font_size_a font_color_d" href="https://medium.com/greenwheelsculture" target="_blank">Culture Blog</a></li>' +
//     '<li><a class="font_family_a font_size_a font_color_d" href="contact-us">Contact Us</a></li>' +
//     '<li><a class="font_family_a font_size_a font_color_d" href="terms">Terms</a></li>' +
//     '<li><a class="font_family_a font_size_a font_color_d" href="privacy-policy">Privacy Policy</a></li>'

// var footHome=    '<li><a class="footer-book-a-demo font_family_a font_size_a font_color_d" href="#fifth-section">Book a Demo</a></li></ul></div>'

// var footAll= '<li><a class="font_family_a font_size_a font_color_d" href="#" data-reveal-id="myModal" onClick="ga(\'send\', \'event\', \'Book a demo\', \'clicked\')">Book a Demo</a></li></ul></div>'

// var social='<div class="small-12 medium-4 columns text-center" id="socail-link">' +
//   '<h2 class="font_family_c font_size_a font_color_a text-uppercase">Keep In Touch</h2>' +
//     '<ul class="">' +
//       '<li><a class="font_family_a font_color_d" href="https://www.facebook.com/GetOnlime" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>' +
//       '<li><a class="font_family_a font_color_d" href="https://www.linkedin.com/company/greenwheels" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>' +
//       '<li><a class="font_family_a font_color_d" href="https://twitter.com/getonlime" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>' +
//       '<li><a class="font_family_a font_color_d" href="https://www.instagram.com/greenwheels" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li></ul></div>'

// var contactdetail='<div class="small-12 medium-4 columns text-right small-only-text-center" id="contact-details"><h2 class="font_family_c font_size_a font_color_a text-uppercase">Contact Info</h2><p class="font_family_a font_size_a font_color_d">Building Number 28, Community Center, East of Kailash,<br>New Delhi,<br>PIN - 110065, India<br><span class="color-lime">info@greenwheels.com</span><br><span class="color-lime">+91 11 395 89156</span></p></div>'

// footBoxHome.innerHTML = quicklinks + footHome + social + contactdetail;

// footBoxAll.innerHTML = quicklinks + footAll + social + contactdetail;


/*********************** Footer Ends *******************************/

});



if(window.location.pathname=="/products")
{
setTimeout(()=>{

  $('#myModal').foundation('reveal','open');
},15000);

}