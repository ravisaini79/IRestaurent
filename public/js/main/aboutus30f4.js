$(document).ready(function() {
/*------------------------------------------------------------------------------------*/

/*for home page*/
var whitebgheader = $('#landing-about').height();

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

/*------------------------------------------------------------------------------------*/
});

$('section#li-map-second .overlay').click(function(){
$('section#li-map-second .overlay').css('display','none');
});

$(document).ready(function(){
  $("a[href='#li-aboutus-first']").click(function(e) {
    
    e.preventDefault();
    var targetOffset = $('#li-aboutus-first').offset().top-150;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);

  });
});











/*------------------------------------------------------------------------------------*/

jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBrvKYl02lprXgWE0rjVILimPVi51Ph19A&sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

        
    // Multiple Markers
    var markers = [

 // greenwheels Location pointers

      ['greenwheels Delhi ', 28.558586, 77.245481],
     ['greenwheels Mumbai ', 19.0476579, 72.8251349],
     ['greenwheels Bangalore ', 12.912627, 77.642402],
     ['greenwheels Pune ', 18.5364748, 73.8958987],
     ['greenwheels Hyderabad ', 17.4411827, 78.3982787],
      ['greenwheels Chennai', 13.0611501, 80.2404989],
       ['greenwheels Dubai', 25.186564, 55.260259],




    ];
                        
     // Info Window Content
    var infoWindowContent = [
       ['<div class="info_content">' +
        '<h3>East Of Kailash</h3>' +
        '<p>D Block, Building Number 28, Community Center, East of Kailash, New Delhi, Pin 110065</p>' +        '</div>'],

        ['<div class="info_content">' +
        '<h3>greenwheels Mumbai</h3>' +
        '<p>Bombay Connect Office, 4th floor Candelar building St. John Baptist Road, near mount Mary Steps Bandra West, Mumbai</p>' +        '</div>'],        
        ['<div class="info_content">' +
        '<h3>greenwheels Bangalore</h3>' +
        '<p>415, Top Floor, 16th Cross Road, Sector - 4, HSR Layout, Bangalore - 560102</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>greenwheels Pune</h3>' +
        '<p>C-4/5 2nd floor, The mesh Rakhshlekha Society, Lane 6, Koregoan Park, Pune</p>' +        '</div>'],

        ['<div class="info_content">' +
        '<h3>greenwheels Hyderabad</h3>' +
        '<p>402, Siddhartha Residency Kavuri, Phase 1, Behind Jubilee Ridge Hotel, Madhapur, Hyderabad</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>greenwheels Chennai</h3>' +
        '<p>3-A, 3rd Floor, Gee Gee Emerald, 151, Village Road Nungambakkam, Chennai</p>' +        '</div>'],

        ['<div class="info_content">' +
        '<h3>greenwheels Dubai</h3>' +
        '<p>1204, Exchange by Omniyat, Business Bay, Dubai.<br>+971563671300</p>' +        '</div>'],
    ];
        
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    var image = { url: 'img/about-us/greenwheels-aboutus-location.png', };
   
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
 icon: image,

            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(4);
        google.maps.event.removeListener(boundsListener);
    });
    
}






$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        delay:2000,
        duration: 6000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});