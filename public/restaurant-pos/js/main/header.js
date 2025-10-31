
$(document).ready(function() {
  console.log('If looking under the hood is your thing, we\'d love to chat http://greenwheels.com/careers');
  var brandname = 'greenwheels';
  var brandtagline = '';
  var brandlogo = 'greenwheels-logo.png';
  //var tab = ["Products","Clients","Careers","Book a Demo"];
    var tabs =[ {name: "Products", class: "products", slug: "javascript:void(0)", click:""},
                {name: "Restaurant Type", class: "restaurant-type", slug: "javascript:void(0)", click:""},
                {name: "Clients", class: "clients", slug: "https://greenwheels.com/clients", click:""},
                {name: "Resources", class: "restaurant-resources", slug: "https://greenwheels.com/restaurant-resources", click:""},
                {name: "Blog", class: "Blog", slug: "https://greenwheels.com/blog/", click:""},
                {name: "Careers", class: "careers", slug: "https://greenwheels.com/careers", click:""},
                {name: "FREE DEMO", class: "book-a-demo", slug: "form-bookademo", click:"onclick-scroll"}
              ];
     var mobtabs =[ 
              ];
              
    var productDetails =[
      {version:"1", name:"greenwheels Software Suite", discp:"A complete solution for your restaurant’s technology, operations and marketing needs. All within an integrated framework.", readmore:"Learn More"},
    ];




    var restaurantDetails =[
      {version:"1", name:"Restaurant Types", discp:"Complete software suite customized to your restaurant needs", readmore:"Learn More"},
    ];

//_________________________________________________________________________
//version::0 of productSubtabs starts here
    var productSubtabs =[
      
    ];
     
//version::0 of productSubtabs ends here
//_________________________________________________________________________
    $('header').html(`
        <div class="row">

        <div class="row large-view-header hide-for-small hide-for-medium" style="padding:0!important;">
          <div class="large-2 columns nav-logo text-left">
            <a class="`+brandname+`" href="/" style="display:inline-block;"><img src="img/`+brandlogo+`" alt="`+brandname+`"></a>
          </div>
          <div class="large-10 columns nav-item text-right" style="padding:0!important;">
            <ul>
            </ul>
          </div>
        </div>

        <div class="row hide-for-large-up small-view-header">
          <div class="small-5 medium-2 columns text-left"><a class="`+brandname+`" href="/" style="display:inline-block; padding:1.2rem 0 0 8px !important;"><img src="img/`+brandlogo+`" alt="`+brandname+`"></a></div>
          <div class="small-7 medium-10 columns text-right nav-toggler">
          <a class="font_family_a font_size_14px font-600 " href="https://greenwheels.com/book-a-demo" style="clear: both !important;
bottom: 18px;
    position: relative;
    clear: both !important;
    background: #00b657;
    padding: 7px 0px;
    width: 100px;
    text-align: center;
    border-radius: 2px;
    left: 0px;
    right: auto;
    color: #fff!important;">FREE DEMO</a>
            <a href="javascript:void(0)">
              <span>
              <span class="top-bar"></span>
              <span class="middle-bars"></span>
              <span class="bottom-bar"></span>
              </span>
            </a>
          </div>
        </div>
        </div>
      `);


    for(var t=0; t<=tabs.length-1; t++){
        $('.nav-item ul').append(`
          <li class="`+tabs[t].class+`">
          <a class="font_family_a font_color_a font_size_16px font-600 `+tabs[t].click+`" href="`+tabs[t].slug+`">`+tabs[t].name+`</a>
          </li>`);
    }

    $('header .book-a-demo>a').attr('onclick',"ga('send', 'event', 'Book a demo', 'clicked')");

    $('.nav-item ul li.products, .small-view-header').append(`
        <div id="products-subtab" class="sub-tabs" style="background:#fff;">
        <div class="text-padding bg-color-white" style="display:block;">
         
          <div class="row" style="margin: 0 auto !important;max-width: 100% !important;width: 100% !important;">
            <div class="small-12 medium-4 columns text-left" style="">
             <div class="hide-for-large-up">
                <ul class="nav-small small-block-grid-1">

              <div class="new-small-header-11-18">

<div class="small-block-grid-2 show-for-small-only">
           <li><a class="`+brandname+`" href="/" style="display:inline-block; padding:0rem 0 0 0px !important;"><img src="img/`+brandlogo+`" alt="`+brandname+`"></a></li>

</div>             
             <div class="product-drop-down-18-11"><details>
  <summary><h6 class="font_family_a font_size_24px font-600">PRODUCTS<i class="fa fa-angle-right" aria-hidden="true" style="padding-left: 10px"></i></h6></summary>

  <ul>
  <div>
  <li><a class="font_family_a font_color_b font_size_18px font-600" href="https://greenwheels.com/online-food-ordering-system">Online Food Ordering System <i class="fa fa-arrow-right" aria-hidden="true" style="font-size: 13px;
    font-weight: 100;"></i></a></li>
  <li><p class="sub-tab-heading font_family_a font_size_14px  font-400" style="color:#000; padding: 0px 53px 13px 10px;">Your restaurant’s own online ordering website & mobile app</li></p>
   </div>
   <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/restaurant-mobile-ordering-app" style="padding-top:2px;">Mobile App </a></li>
    <li><a class="font_family_a font_color_b font_size_16px font-100 " href="https://greenwheels.com/online-table-reservation-system" style="padding-top:2px;">Table Reservation </a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/websites-for-restaurants" style="padding-top:2px;">Website Builder</a></li>       
 </ul>
  
  <ul>
  <div>
  <li><a class="font_family_a font_color_b font_size_18px font-600" href="https://greenwheels.com/restaurant-pos">Restaurant POS <i class="fa fa-arrow-right" aria-hidden="true" style="font-size: 13px;
    font-weight: 100;"></i></a></li>
  <p class="sub-tab-heading font_family_a font_size_14px  font-400" style="color:#000; padding: 0px 0px 13px 10px;">Cloud-based POS solution with integrated<br> online & third-party orders</li></p>
  </div>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/order-management-for-restaurant">Order Management </a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/cloud-telephony-services-for-restaurants">IVR Service </a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/kitchen-display-system">Kitchen Display System </a></li>
  </ul>
 
  <ul>
  <div>
  <li><a class="font_family_a font_color_b font_size_16px font-600" href="https://greenwheels.com/restaurant-crm-solution">CRM Solution <i class="fa fa-arrow-right" aria-hidden="true" style="font-size: 13px;
    font-weight: 100;"></i></a></li>
  <p class="sub-tab-heading font_family_a font_size_14px  font-400" style="color:#000; padding: 0px 58px 13px 10px;">Automate marketing campaigns with a<br> fully-integrated CRM system</li></p>
  </div>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/customer-loyalty-program-for-restaurants">Loyalty Program </a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/restaurant-feedback-system">Feedback System </a></li>
  </ul>  
  </details>
  </div>


  <div class="product-drop-down-18-11"><details>
  <summary><h6 class="font_family_a font_size_24px font-600">RESTAURANT TYPE<i class="fa fa-angle-right" aria-hidden="true" style="padding-left: 10px"></i></h6></summary>
  <ul>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/restaurant-software/bar-software">Bar </a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/restaurant-software/cafe-software">Cafe </a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/restaurant-software/enterprise-software">Enterprise </a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/restaurant-software/dine-in-software">Dine-in </a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/restaurant-software/qsr-software">QSR </a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/restaurant-software/cloud-kitchen-software">Cloud Kitchen </a></li>
  </ul>
  </details>
  </div>




              <a href="https://greenwheels.com/clients"><h6 class="font_family_a font_size_24px font-600">CLIENTS</h6></a>
                <a href="https://greenwheels.com/restaurant-resources"><h6 class="font_family_a font_size_24px font-600">RESOURCES</h6></a>
              <a href="https://greenwheels.com/blog"><h6 class="font_family_a font_size_24px font-600">BLOG</h6></a>
              </div>
              <br>
                </ul>

<hr>
<div class="row" style="margin-left: -10px!important">
  <div class="columns small-6">
  <ul class=" small-block-grid-1" >
   <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/about-us">About Us</a></li>
             <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/careers">Careers</a></li>
           <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/restaurant-analytics-solution">Pulse</a></li></div>
 </ul>
  <div class="columns small-6"> 
<ul class="small-block-grid-1">
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/terms">Terms</a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/privacy-policy">Privacy Policy</a></li>
  <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/support">Support</a></li>
   <li><a class="font_family_a font_color_b font_size_16px font-100" href="https://greenwheels.com/contact-us">Contact Us</a></li>
</ul>
  </div>
</div>


                <div class="nav__menu__footer">
                 <ul>
                <li class="instagram"><a href="https://www.instagram.com/greenwheels/" onclick="javascript:window.open('https://www.instagram.com/greenwheels/'); return false;"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 2.336v11.328C16 14.954 14.953 16 13.664 16H2.336C1.046 16 0 14.953 0 13.664V2.336C0 1.046 1.047 0 2.336 0h11.328C14.954 0 16 1.047 16 2.336zM14.336 7h-1.773c.07.32.102.656.102 1 0 2.578-2.086 4.664-4.665 4.664-2.578 0-4.664-2.086-4.664-4.664 0-.344.03-.68.102-1H1.664v7c0 .188.15.336.336.336h12c.188 0 .336-.148.336-.336V7zM5 8c0 1.657 1.344 3 3 3 1.657 0 3-1.343 3-3 0-1.656-1.343-3-3-3-1.656 0-3 1.344-3 3zm9.336-6c0-.187-.148-.336-.336-.336h-2c-.187 0-.336.15-.336.336v2c0 .188.15.336.336.336h2c.188 0 .336-.148.336-.336V2z" fill="#36363D" fill-rule="evenodd"></path></svg></a></li>
                <li class="twitter"><a href="https://twitter.com/getonlime" onclick="javascript:window.open('https://twitter.com/getonlime'); return false;"><svg width="16" height="13" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg"><path d="M14.368 3.235v.43C14.368 8 11.07 13 5.038 13 3.19 13 1.446 12.594 0 11.664c.258.04.516.055.782.055 1.53 0 2.96-.666 4.07-1.557-1.422-.015-2.65-.984-3.055-2.28.203.038.406.062.61.062.297 0 .593-.04.875-.118C1.782 7.53.65 6.203.65 4.61v-.04c.444.243.944.39 1.483.407-.89-.594-1.468-1.594-1.468-2.72 0-.608.17-1.108.445-1.593 1.633 1.985 4.04 3.22 6.757 3.368-.054-.235-.07-.5-.07-.758C7.797 1.46 9.257 0 11.07 0c.946 0 1.798.406 2.415 1.032.734-.15 1.445-.422 2.07-.797-.242.765-.758 1.414-1.445 1.82.67-.078 1.297-.258 1.89-.524-.445.674-1 1.245-1.632 1.706" fill="#36363D" fill-rule="evenodd"></path></svg></a></li>
                <li class="facebook"><a href="https://www.facebook.com/GetOnlime" onclick="javascript:window.open('https://www.facebook.com/GetOnlime'); return false;"><svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M1.614 3.1v2.2H0v2.695h1.614V16H4.93V7.996h2.224s.208-1.292.31-2.704H4.942V3.45c0-.276.36-.645.72-.645h1.805V0H5.01C1.532 0 1.614 2.696 1.614 3.1" fill="#36363D" fill-rule="evenodd"></path></svg></a></li>
                <li class="linkedin"><a href="https://www.linkedin.com/company/greenwheels" onclick="javascript:window.open('https://www.linkedin.com/company/greenwheels'); return false;"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1.96 3.743C.78 3.743 0 2.913 0 1.867 0 .814.797 0 2.016 0 3.22 0 3.986.814 4 1.867c0 1.046-.78 1.876-2.015 1.876H1.96zm-1.624 1.7h3.328V16H.336V5.442zM9 9.87c0-1.363.852-2.042 1.852-2.042s1.812.68 1.812 2.387V16H16V9.87c0-3.063-1.664-4.763-4-4.763-1.335 0-2.336.775-3 1.796l-.11-1.46H5.61c0 .36.054 2.385.054 2.385V16H9V9.87z" fill="#36363D" fill-rule="evenodd"></path></svg></a></li>
                 </ul>
                <p><a class="font_family_a font_size_14px font-600" href="https://greenwheels.com/book-a-demo">FREE DEMO</a></p>
              </div>
              </div>           
            </div>

            <div class="small-12 medium-12 columns  subtab-list hide-for-small hide" style="text-align: center;">
            </div>

          </div>
        </div>
        </div>      `);


    for(var s=0; s<=mobtabs.length-1; s++){
        $('.nav-small').append(`
         
          <li class="`+mobtabs[s].slug+`">
          <a class="font_family_a font_color_a font_size_16px font-100 " href="`+mobtabs[s].slug+`" target="`+mobtabs[s].target+`">`+mobtabs[s].name+`</a>
          </li>`);
          
    }


      if((productDetails[0].version == '0')){
        $('.subtab-list').html(`<ul class="small-block-grid-2 medium-block-grid-3">

        </ul>`);
  }


  else if((productDetails[0].version == '1')){
    $('.subtab-list').html(`<div class="">
    <ul class="small-block-grid-2 medium-block-grid-3" style="padding-top: 30px; padding-bottom: 30px;">
      <li class="product-discovery" style="position: relative;

left: 4.5%;

right: auto;">
        
 
          <div class="Ace no-padding text-left  "  style="">
           <a href="https://greenwheels.com/online-food-ordering-system" class="row " style="display:block;">
           <div class="small-12 columns no-padding" style="">
           <p class="sub-tab-heading font-600 font_family_a font_size_12px font-600 text-left color-lime sub-tab-heading-1" style=" padding-bottom: 1.4vw; font-size: 12px!important;">DISCOVERY</p>
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600 sub-tab-heading-1" style="">Online Food Ordering System <i class="fa fa-arrow-right" style="font-size:
            12px!important; padding-left:6px;"></i> </p>          
            <p class="sub-tab-discription text-padding font_family_a font_size_12px font-300" style="color: #6d6d6d;  margin-top: 4px !important; font-size: 0.9111vw;">Your restaurant’s own online ordering website<br> & mobile app</p>
           </div>
           </a>
          </div>
     
          <div class="Ace no-padding text-left  "  style:"">
          <a href="https://greenwheels.com/restaurant-mobile-ordering-app" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px  font-400 sub-tab-heading-2" style="color: #1f2532; ">Mobile App</p>         
          </div>
          </a>
         </div>


         <div class="Ace no-padding text-left  "  style:"">
         <a href="https://greenwheels.com/online-table-reservation-system" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px sub-tab-heading-2  font-400" style="color: #1f2532; ">Table Reservation</p>           
          </div>
          </a>
        </div>


        <div class="Ace no-padding text-left  "  style:"">
        <a href="https://greenwheels.com/websites-for-restaurants" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px sub-tab-heading-2 font-400" style="color: #1f2532;">Website Builder</p>
           
          </div>
          </a>
        </div>


      </li>


      <li class="product-operations " style="border-left: 1px solid #eceff1;" >

      <div class="Ace no-padding text-left"  style="position: relative;

left: 18.70000%;

right: auto;">
        <a href="https://greenwheels.com/restaurant-pos" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
           <p class="sub-tab-heading font-600 font_family_a font_size_12px font-600 text-left color-lime sub-tab-heading-1" style=" padding-bottom: 1.4vw; font-size: 12px!important;">OPERATIONS</p>
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600 sub-tab-heading-1" style="">Restaurant POS System <i class="fa fa-arrow-right" style="font-size:
            12px!important; padding-left:6px;"></i>
           </p>
            <p class="sub-tab-discription text-padding font_family_a font_size_14px font-300" style="color: #6d6d6d;  margin-top: 4px !important; font-size: 0.9111vw;">Cloud-based POS solution with integrated<br> online & third-party orders</p>
          </div>
        </a>
      </div>


  
      <div class="Ace no-padding text-left "  style="position: relative;

left: 18.70000%;

right: auto;">
        <a href="https://greenwheels.com/restaurant-inventory-management" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px sub-tab-heading-2 font-400" style="color: #1f2532;">Inventory</p>
           
          </div>
        </a>
      </div>

      <div class="Ace no-padding text-left "  style="position: relative;

left: 18.70000%;

right: auto;">
        <a href="https://greenwheels.com/order-management-for-restaurant" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px sub-tab-heading-2 font-400" style="color: #1f2532; ">Third-Party Order Management</p>
           
          </div>
        </a>
     </div>

     <div class="Ace no-padding text-left"  style="position: relative;

left: 18.70000%;

right: auto;">
        <a href="https://greenwheels.com/kitchen-display-system" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px sub-tab-heading-2  font-400" style="color: #1f2532;">Kitchen Display System</p>
           
          </div>
        </a>
      </div>

      </li>



      <li class="product-engagement " style="border-left: 1px solid #eceff1;">

      <div class="Ace no-padding text-left small-push-2"  style:"">
        <a href="https://greenwheels.com/restaurant-crm-solution" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
          <p class="sub-tab-heading font-600 font_family_a font_size_12px font-600 text-left color-lime sub-tab-heading-1" style="padding-bottom: 1.4vw; font-size: 12px!important;">ENGAGEMENT</p>
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600 sub-tab-heading-1" style="">CRM Solution <i class="fa fa-arrow-right" style="font-size:
            12px!important; padding-left:6px;"></i></p>
            <p class="sub-tab-discription text-padding font_family_a font_size_12px font-300" style="color: #6d6d6d;  margin-top: 4px !important; font-size: 0.9111vw;">Automate marketing campaigns with a fully-<br>integrated CRM system</p>
          </div>
        </a>
      </div>
  
      <div class="Ace no-padding text-left small-push-2"  style:"">
        <a href="https://greenwheels.com/customer-loyalty-program-for-restaurants" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px  font-400 sub-tab-heading-2" style="color:#000;">Loyalty Program</p>
           
          </div>
        </a>
      </div>

      <div class="Ace no-padding text-left small-push-2 "  style:"">
        <a href="https://greenwheels.com/restaurant-feedback-system
         "class="row " style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font-400 sub-tab-heading-2" style="color: #1f2532; ">Feedback System</p>
           
          </div>
        </a>
      </div>

      <div class="Ace no-padding text-left small-push-2"  style:"">
        <a href="https://greenwheels.com/cloud-telephony-services-for-restaurants
         "class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px  font-400 sub-tab-heading-2" style="color: #1f2532; ">IVR Service</p>
           
          </div>
        </a>
      </div>

      </li>

    </ul>
    </div>
    `);
    for(var p=0; p<=productSubtabs.length-1; p++){
      if((productSubtabs[p].category == "discovery")){
        $('.product-discovery').append(`<div class="`+productSubtabs[p].subtab+` no-padding" style="`+productSubtabs[p].style+`">
        <a href="`+productSubtabs[p].slug+`" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600" style="">`+productSubtabs[p].heading+`</p>
            <p class="sub-tab-discription text-padding font_family_a font_size_14px font_color_b font-300" style="  margin-top: 4px !important;">`+productSubtabs[p].discp+`</p>
          </div>
        </a>
        </div>`);
      }
      else if((productSubtabs[p].category == "operations")){
        $('.product-operations').append(`<div class="`+productSubtabs[p].subtab+` no-padding" style="`+productSubtabs[p].style+`">
        <a href="`+productSubtabs[p].slug+`" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600" style="">`+productSubtabs[p].heading+`</p>
            <p class="sub-tab-discription text-padding font_family_a font_size_14px font_color_b font-300" style=" margin-top: 4px !important;">`+productSubtabs[p].discp+`</p>
          </div>
        </a>
        </div>`);
      }
      else if((productSubtabs[p].category == "engagement")){
        $('.product-engagement').append(`<div class="`+productSubtabs[p].subtab+` no-padding" style="`+productSubtabs[p].style+`">
        <a href="`+productSubtabs[p].slug+`" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600" style="">`+productSubtabs[p].heading+`</p>
            <p class="sub-tab-discription text-padding font_family_a font_size_14px font_color_b font-300" style=" margin-top: 4px !important;">`+productSubtabs[p].discp+`</p>
          </div>
        </a>
        </div>`);
      }
    }
  }
  
  $('.nav-item ul li.restaurant-type').append(`
        <div id="products-subtab" class="sub-tabs" style="background:#fff; width:35%; left: 22.5%; right 15%;">
        <div class="text-padding bg-color-white" style="display:block;">
         
          <div class="row" style="margin: 0 auto !important;max-width: 100% !important;width: 100% !important;">
            <div class="small-12 medium-6 columns text-left" style="">

             <div class="page-section" style="padding: 5vh 0vh 0vh 1rem !important;">
                <p class="sub-tab-heading font-600 font_family_a font_size_16px font_color_b" style="padding-top:0px">
                  `+restaurantDetails[0].name+`
                </p>
                <p class="sub-tab-discription text-padding font_family_a font_size_14px font_color_b font-300" style="padding-top:5px" >
                  `+restaurantDetails[0].discp+`
                </p>

                 <p class="sub-tab-discription text-padding font_family_a font_size_20px font_color_b font-300" style="padding-top:0px"><a href="https://greenwheels.com/restaurant-software"><span style="color: #04b261; font-size:15px; font-family: 'Source Sans Pro', sans-serif; font-weight: 600" >
                  `+restaurantDetails[0].readmore+`  <i class="fa fa-arrow-right" style="font-size:
            12px!important; padding-left:6px;"></i></a>
                </p>                
              </div>

            </div>

            <div class="small-12 medium-6 columns text-left subtab-list" style="">

             <ul class="small-block-grid-2 medium-block-grid-1">
      <li class="product-discovery">
       <div class="Ace no-padding"  style:"">
        <a href="https://greenwheels.com/restaurant-software/bar-software" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600">Bar </p>          
          </div>
          </a>

        <div class="Ace no-padding">
        <a href="https://greenwheels.com/restaurant-software/cafe-software" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600" style="">Cafe</p>
          </div>
        </a>
        </div>


        <div class="Ace no-padding">
        <a href="https://greenwheels.com/restaurant-software/cloud-kitchen-software" class="row" style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600" style="">Cloud Kitchen </p>
           </p>
          </div>
        </a>
        </div>

         <div class="Ace no-padding">
        <a href="https://greenwheels.com/restaurant-software/enterprise-software" class="row " style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600" style="">Enterprise</p>
          </div>
        </a>
        </div>

        <div class="Ace no-padding">
        <a href="https://greenwheels.com/restaurant-software/dine-in-software" class="row " style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600" style="">Dine-in</p>
          </div>
</a>
          </div>
          
        <div class="Ace no-padding">
        <a href="https://greenwheels.com/restaurant-software/qsr-software" class="row " style="display:block;">
          <div class="small-12 columns no-padding" style="">
            <p class="sub-tab-heading font_family_a font_size_16px font_color_b font-600" style="">QSR</p>
          </div>
        </a>
        </div>
      </li>
     
    </ul>
            </div>

          </div>
        </div>
        </div>
      `);




    $('.nav-item ul li').mouseenter(function() {
      var toopen = $(this).attr('class');
      
      $('#'+toopen+'-subtab').addClass('to-open');
    }).mouseleave(function() {
      $('.sub-tabs.to-open').removeClass('to-open');
    });

/*mobile headder*/
$('.nav-toggler a').click(function(){
  $(this).toggleClass('active-toggle');
  $('.nav-toggler a>span').toggleClass('toggle');
  $('body').toggleClass('overflowhid');
  $('.small-view-header #products-subtab').toggleClass('active-mob-nav');
});

$('#landing-home, .product-details, #top-banner').addClass('for-scroll-only');

var height_of_top_container = $('.for-scroll-only').height();


$(window).scroll(function() {    
    var onscroll = $(window).scrollTop()+75;
    if (onscroll >= height_of_top_container) {
        $("header").addClass("bg-color-shadow bg-color-reduce");
    } else if(onscroll < height_of_top_container){
        $("header").removeClass("bg-color-shadow bg-color-reduce");
    }
});
});
   
