
$('#form-bookademo, #myModal>div').html(`
   <div class="row">
        <div class="small-12 medium-6 large-5 small-centered columns" style="">
              <h2 class="text-center font_family_a font_size_36px font_color_b font-600">Get On-<span class="color-lime">Lime!</span></h2>
            <p style="display:block !important;" class="text-center text-padding font_family_a font_size_14px font_color_b font-300">Request a free demonstration to see how our products
                <br>can help you boost your business</p>
            <form id="book-a-demo-form" class="text-center greenwheels-form1" name="book-a-demo-form" autocomplete="off" method="post">

                <div class="form-feild first-last-name two-col-form-feild">
                    <ul class="small-block-grid-1 medium-block-grid-1">
                        <li>
                            <label class="font_family_a font_size_14px font_color_b font-600 text-left hide-for-small-only" for="yourname">Your Name</label>
                            <input id="yourname" type="text" name="yourname" placeholder="Your Name" value="" required="" class="font_size_b">
                        </li>
                    </ul>
                </div>

                <div class="form-feild phone-number">
                    <ul class="small-block-grid-1 medium-block-grid-2">
                        <li>
                            <label class="font_family_a font_size_14px font_color_b font-600 text-left hide-for-small-only" for="countryCode">Select Country</label>
                            <select name="countryCode" class="countryCode" id="countryCode">
                                <option data-countryCode="None" value="" selected>Select Country</option>
                                <option data-countryCode="IN" value="91">India (+91)</option>
                                <option data-countryCode="AU" value="61">Australia (+61)</option>
                                <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                <option data-countryCode="US" value="1">USA (+1)</option>
                                <option data-countryCode="GB" value="44">UK (+44)</option>
                                <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                                <optgroup label="Other countries">
                                    <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                    <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                    <option data-countryCode="AO" value="244">Angola (+244)</option>
                                    <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                    <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                    <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                    <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                    <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                    <option data-countryCode="AU" value="61">Australia (+61)</option>
                                    <option data-countryCode="AT" value="43">Austria (+43)</option>
                                    <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                    <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                    <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                    <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                    <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                    <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                    <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                    <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                    <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                    <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                    <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                    <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                    <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                    <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                    <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                    <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                    <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                    <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                    <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                    <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                    <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                    <option data-countryCode="CA" value="1">Canada (+1)</option>
                                    <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                                    <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                                    <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                                    <option data-countryCode="CL" value="56">Chile (+56)</option>
                                    <option data-countryCode="CN" value="86">China (+86)</option>
                                    <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                    <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                    <option data-countryCode="CG" value="242">Congo (+242)</option>
                                    <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                    <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                    <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                    <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                    <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                    <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                    <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                    <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                    <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                    <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                    <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                    <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                    <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                    <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                    <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                    <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                    <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                    <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                    <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                    <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                    <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                    <option data-countryCode="FI" value="358">Finland (+358)</option>
                                    <option data-countryCode="FR" value="33">France (+33)</option>
                                    <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                    <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                    <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                    <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                    <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                    <option data-countryCode="DE" value="49">Germany (+49)</option>
                                    <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                    <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                    <option data-countryCode="GR" value="30">Greece (+30)</option>
                                    <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                    <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                    <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                    <option data-countryCode="GU" value="671">Guam (+671)</option>
                                    <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                    <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                    <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                    <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                    <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                    <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                    <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                    <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                    <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                    <option data-countryCode="IN" value="91">India (+91)</option>
                                    <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                    <option data-countryCode="IR" value="98">Iran (+98)</option>
                                    <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                    <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                    <option data-countryCode="IL" value="972">Israel (+972)</option>
                                    <option data-countryCode="IT" value="39">Italy (+39)</option>
                                    <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                    <option data-countryCode="JP" value="81">Japan (+81)</option>
                                    <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                    <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                    <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                    <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                    <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                    <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                    <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                    <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                    <option data-countryCode="LA" value="856">Laos (+856)</option>
                                    <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                    <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                    <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                    <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                    <option data-countryCode="LY" value="218">Libya (+218)</option>
                                    <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                    <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                    <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                    <option data-countryCode="MO" value="853">Macao (+853)</option>
                                    <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                    <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                    <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                    <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                    <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                    <option data-countryCode="ML" value="223">Mali (+223)</option>
                                    <option data-countryCode="MT" value="356">Malta (+356)</option>
                                    <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                    <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                    <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                    <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                    <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                    <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                    <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                    <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                    <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                    <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                    <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                    <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                    <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                    <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                    <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                    <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                    <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                    <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                    <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                    <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                    <option data-countryCode="NE" value="227">Niger (+227)</option>
                                    <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                    <option data-countryCode="NU" value="683">Niue (+683)</option>
                                    <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                    <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                    <option data-countryCode="NO" value="47">Norway (+47)</option>
                                    <option data-countryCode="OM" value="968">Oman (+968)</option>
                                    <option data-countryCode="Pk" value="92">Pakistan (+92)</option>
                                    <option data-countryCode="PW" value="680">Palau (+680)</option>
                                    <option data-countryCode="PA" value="507">Panama (+507)</option>
                                    <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                                    <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                    <option data-countryCode="PE" value="51">Peru (+51)</option>
                                    <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                    <option data-countryCode="PL" value="48">Poland (+48)</option>
                                    <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                    <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                    <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                    <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                    <option data-countryCode="RO" value="40">Romania (+40)</option>
                                    <option data-countryCode="RU" value="7">Russia (+7)</option>
                                    <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                    <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                    <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                    <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                    <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                    <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                    <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                    <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                    <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                    <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                    <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                    <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                    <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                    <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                    <option data-countryCode="ES" value="34">Spain (+34)</option>
                                    <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                    <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                    <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                    <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                    <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                    <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                    <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                    <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                    <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                    <option data-countryCode="SI" value="963">Syria (+963)</option>
                                    <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                    <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                                    <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                    <option data-countryCode="TG" value="228">Togo (+228)</option>
                                    <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                    <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                    <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                    <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                    <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                                    <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                    <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                    <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                    <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                    <option data-countryCode="GB" value="44">UK (+44)</option>
                                    <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                    <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                                    <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                    <option data-countryCode="US" value="1">USA (+1)</option>
                                    <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                                    <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                    <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                    <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                    <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                    <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
                                    <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                                    <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                    <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                    <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                    <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                    <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                                </optgroup>
                            </select>
                        </li>
                        <li>
                            <label class="font_family_a font_size_14px font_color_b font-600 text-left hide-for-small-only" for="yourcity">Your City</label>
                            <input type="text" id="yourcity" name="yourCity" placeholder="Your City" value="" required="" class="font_size_b">
                        </li>

                    </ul>
                </div>
                <div class="form-feild tel-number">
                    <label class="font_family_a font_size_14px font_color_b font-600 text-left hide-for-small-only" for="phonenumber">Mobile or Landline with (STD)</label>
                    <input id="phonenumber" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' class="form-control mobile" name="phoneNumber" placeholder="Mobile or Landline with (STD)" /> <span class="error error-phone" style="display:none;"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
                </div>
                <div class="form-feild restaurant-name">
                    <label class="font_family_a font_size_14px font_color_b font-600 text-left hide-for-small-only" for="restaurantname">Restaurant Name</label>
                    <input id="restaurantname" type="text" name="restaurantname" placeholder="Restaurant Name" value="" required="" class="font_size_b">
                </div>

                <div class="form-feild email-id">
                    <label class="font_family_a font_size_14px font_color_b font-600 text-left hide-for-small-only" for="email">Email Id</label>
                    <input type="email" name="email" placeholder="Email Id" value="" required="required" class="font_size_b email">
                </div>

                <button type="submit" name="submit" id="bookademobutton" class="form_submit button font_family_a font_size_16px font-600" >Free Demo</button>
                <p class="font_family_a font_size_14px font_color_b font-300" style="margin-top: 10px;">For any queries, contact our support team.
                    <br><a href="mailto:contactus@greenwheels.com" target="_top" class="color-lime">contactus@greenwheels.com</a></p>
            </form>
            <!--book demo-->
            <!--book demo-->
        </div>
    </div>



  `);

  $('#myModal>div>.row>.small-centered').removeClass('small-12 medium-6 large-5 small-centered columns').parent().attr('style','max-width:100% !important;');



  var currentTime = new Date();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var year = currentTime.getFullYear();

  var greenwheelsaddress = [
    {city: "Gurugram", address: "Alchemy Web Pvt. Ltd.<br>  1st floor, 445,<br> Udyog Vihar Phase V,<br> Gurugram, Haryana 122008, India", googleMapShortenUrl:"https://goo.gl/maps/hfdk3W2W7yx"},
  ];

var greenwheelsUsaddress = [
    {city: "United States", address: "26420 Island Lake Drive, <br/>Novi, MI 48374, United States", googleMapShortenUrl:"https://goo.gl/maps/hfdk3W2W7yx"},
  ];

  var greenwheelsemailid = [{email: "contactus@greenwheels.com", subject:""},
  ];
  var greenwheelsphonenumber = [""];
  var greenwheelsUsphonenumber = [""];


  //var tab = ["Products","Clients","Careers","Book a Demo"];
    var quicklinks =[ {name: "About Us", slug: "https://greenwheels.com/about-us", target:""},
                {name: "Careers", slug: "https://greenwheels.com/careers", target:""},
                {name: "Blog", slug: "https://greenwheels.com/blog/", target:"_blank"},
                // {name: "Clients", slug: "https://greenwheels.com/clients", target:""},
                {name: "Pulse", slug: "https://greenwheels.com/restaurant-analytics-solution", target:""},
                {name: "Contact Us", slug: "https://greenwheels.com/contact-us", target:""},
                {name: "News & Events", slug: "https://greenwheels.com/news-and-events", target:""},
                {name: "Terms", slug: "https://greenwheels.com/terms", target:""},
                {name: "Support", slug: "https://greenwheels.com/support", target:""},
    ];
    //var tab = ["Products","Clients","Careers","Book a Demo"];
    var sociallinks =[
      {name:"facebook", icon:"", link:"https://www.facebook.com/GetOnlime", imagename:"facebook", imageformate:"png"},
      {name:"twitter", icon:"", link:"https://twitter.com/getonlime", imagename:"twitter", imageformate:"png"},
      {name:"instagram", icon:"", link:"https://www.instagram.com/greenwheels/", imagename:"instagram", imageformate:"png"},
      {name:"linkedin", icon:"", link:"https://www.linkedin.com/company/greenwheels", imagename:"linkedin", imageformate:"png"}
    ];



/*********************** Footer Starts-mobile *******************************/
$('.greenwheels-footer1').addClass('bg_color_263238').html(`<div class="row" id="greenwheels-address">

  <div class="small-12 medium-4 columns text-left show-for-small-only" id="qiuck-links">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase">Quick Links</p>
    </div>
    <div class="text-padding" style="width:100%;">
    <ul class="small-block-grid-3 medium-block-grid-2" style="margin:0 !important;">
      
    </ul>
    </div>
  </div>


  <div class="small-12 medium-4 columns text-center show-for-small-only" id="social-links">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase">Keep In Touch</p>
      <ul class="small-block-grid-`+sociallinks.length+` text-center">      
      </ul>

      <br>

      <div class="text-center show-for-small-only ">  
      <img class="thumbnail" src="images/payments.png" style="width: 30%; ">    
      </div>
     
    </div>
  </div>


  <div class="small-12 medium-4 columns text-right small-only-text-center show-for-small-only" id="contact-details">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase">Contact Info</p>
      <div><p class="text-no-bottom-padding greenwheels-address" style="opacity:0.5;line-height: 1.5 !important;">
<a class="font_family_a font_size_14px font_color_a font-600" href="`+greenwheelsaddress[0].googleMapShortenUrl+`" target="_blank">`+greenwheelsaddress[0].address+`</a>
      </p></div>
      <div><p class="greenwheels-email-id" style="opacity:0.5;margin:2.8vh 0 !important; ">
<a class="font_family_a font_size_14px color-lime font-bold" href="mailto:`+greenwheelsemailid[0].email+`?subject=`+greenwheelsemailid[0].subject+`">`+greenwheelsemailid[0].email+`</a>
      </p></div>
      <div><p class="greenwheels-phone-number" style="opacity:0.5;">
<a class="font_family_a font_size_14px font_color_a font-600" href="tel:`+greenwheelsphonenumber+`">`+greenwheelsphonenumber+`</a>
      </p></div>
    </div>
  </div>
</div>




<div class="row" id="greenwheels-copyright">
            <div class="text-center">
            <p style="opacity:0.5;" class="text-padding font_family_a font_size_14px font_color_a font-300 text-center">Copyright &copy; `+year+` greenwheels. All Rights Reserved</p>
            </div>
</div>

<div class="fix-whatsapp-btn">
   <a href="https://wa.me/919971898428" onclick="ga('send', 'event', 'Whatsapp chat button', 'clicked')" >
       <span>Hey, how can I help you today ? </span>
       <img src="images/whatsapp-btn.svg">
   </a> 
</div>
  `);








/*********************** Footer Starts - desktop *******************************/
$('.greenwheels-footer').addClass('bg_color_263238').html(`<div class="row" id="greenwheels-address">
  
<div class="small-12 medium-3 columns  text-left hide-for-small-only">



    <div class="content-padding-top" style="font-size: 0.9722222222222222vw!important;">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase" style="font-size: 0.9722222222222222vw!important;">
      PRODUCTS</p>
    </div>


    <div class="">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase" style="font-size: 0.9722222222222222vw!important;">
     Operations</p>


    <ul class="new-1" style="margin:0 !important; font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 0.9722222222222222vw;
    line-height: 1.8 !important;
     "> 
    <li><a href="https://greenwheels.com/restaurant-pos">Restaurant POS</a></li> 
    <li><a href="https://greenwheels.com/order-management-for-restaurant
    ">Order Management</a></li>
    <li><a href="https://greenwheels.com/restaurant-inventory-management">Inventory Management</a></li>
    <li><a href="https://greenwheels.com/kitchen-display-system">Kitchen Display System</a></li>   
    </ul>
    </div>



    <div class="">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase" style="font-size: 0.9722222222222222vw!important;">
     Discovery</p>


      <ul class="new-1" style="margin:0 !important; font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 0.9722222222222222vw;
    line-height: 1.8 !important;"
     > 
      <li><a href="https://greenwheels.com/online-food-ordering-system">Online Food Ordering System</a></li> 
      <li><a href="https://greenwheels.com/restaurant-mobile-ordering-app">Mobile App</a></li>
      <li><a href="https://greenwheels.com/online-table-reservation-system">Table Reservation</a></li>
      <li><a href="https://greenwheels.com/websites-for-restaurants">Website-Builder</a></li>       
      </ul>
      </div>


    <div class="">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase" style="font-size: 0.9722222222222222vw!important;">
     Engagement</p>


      <ul class="new-1" style="margin:0 !important; font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 0.9722222222222222vw;
    line-height: 1.8 !important;"> 
    <li><a href="https://greenwheels.com/restaurant-crm-solution">CRM Solution</a></li> 
    <li><a href="https://greenwheels.com/customer-loyalty-program-for-restaurants">Loyalty Program</a></li>
    <li><a href="https://greenwheels.com/restaurant-feedback-system">Feedback System</a></li>   
    </ul>
    </div>

</div>





<div class="small-12 medium-2 columns  hide-for-small-only">

    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase" style="font-size: 0.9722222222222222vw!important;">
     FEATURES</p>
   
      <ul class="new-1" style="margin:0 !important; font-family: 'Source Sans Pro', sans-serif;
    font-weight:600;
    font-size: 0.9722222222222222vw;
    line-height: 1.8 !important;"> 
    <li><a href="https://greenwheels.com/restaurant-billing-software">Billing</a></li> 
    <li><a href="https://greenwheels.com/restaurant-inventory-management">Inventory</a></li>
    <li><a href="https://greenwheels.com/restaurant-integrations">Integrations </a></li> 
     <li><a href="https://greenwheels.com/restaurant-reporting-analytics">Reporting and Analytics </a></li>   
    </ul>
   </div>


<div class="">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase" style="font-size: 0.9722222222222222vw!important;">
     FEATURED RESOURCES</p>


      <ul class="new-1" style="margin:0 !important; font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 0.9722222222222222vw;
    line-height: 1.8 !important;" class="sub-tab-heading font_family_a font_size_14px font_color_b font-600">     
    <li><a href="https://greenwheels.com/restaurant-marketing-plan">Restaurant Marketing</a></li>   
    <li><a href="https://greenwheels.com/restaurant-budget-template">Budget Template </a></li>
    <li><a href="https://greenwheels.com/food-delivery-report-2018">Food Delivery Report 2019 </a></li> 
    <li><a href="https://greenwheels.com/restaurant-technology-report">Technology Report 2019 </a></li> 
   
    </ul>
</div>

</div>



  <div class="small-12 medium-2 columns small-push-1 hide-for-small-only">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase" style="font-size: 0.9722222222222222vw!important;">
      RESTAURANT TYPE</p>
      <ul class="new-1" style="margin:0 !important; font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 0.9722222222222222vw;
    line-height: 1.8 !important;"> 
    <li><a href="https://greenwheels.com/restaurant-software/enterprise-software">Enterprise</a></li> 
    <li><a href="https://greenwheels.com/restaurant-software/cloud-kitchen-software">Cloud Kitchen</a></li>
    <li><a href="https://greenwheels.com/restaurant-software/bar-software">Bar</a></li>  
    <li><a href="https://greenwheels.com/restaurant-software/cafe-software">Cafe</a></li> 
    <li><a href="https://greenwheels.com/restaurant-software/dine-in-software">Dine-in</a></li>   
    <li><a href="https://greenwheels.com/restaurant-software/qsr-software">QSR</a></li>  
    </ul>
    </div>
  </div>



<div class="small-12 medium-3 columns  small-push-footer hide-for-small-only">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase" style="font-size: 0.9722222222222222vw!important;" >
      QUICK LINKS</p>
      <ul class="new-1" style="margin:0 !important; font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 0.9722222222222222vw;
    line-height: 1.8 !important;"> 
    <li><a href="https://greenwheels.com/about-us">About Us</a></li> 
    <li><a href="https://greenwheels.com/careers">Careers</a></li>
    <li><a href="https://greenwheels.com/news-and-events">News and Events</a></li>   
       
    <li><a href="https://greenwheels.com/blog/">Blog</a></li> 
    <li><a href="https://greenwheels.com/contact-us">Contact Us</a></li> 
    <li><a href="https://greenwheels.com/support">Support</a></li>
    <li><a href="https://greenwheels.com/terms">Terms</a></li> 
    <li><a href="https://greenwheels.com/restaurant-guest-post-contribution">Contribute An Article</a></li> 
    <li><a href="https://greenwheels.com/privacy-policy">Privacy Policy</a></li> 
    

    </ul>
  </div>
</div>

<div class="small-12 medium-2 columns small-push-1 hide-for-small-only" id="social-links" >
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase" style="font-size: 0.9722222222222222vw!important;">Keep in Touch</p>
     



      <p class="text-no-bottom-padding-1 greenwheels-address" style="opacity:0.5; line-height: 1.5 !important; font-size: 15px!important; font-family: Source Sans Pro;">
<a class="new-1 font_color_a" style="margin:0 !important; font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 0.9722222222222222vw;
    line-height: 1.8 !important;" href="`+greenwheelsaddress[0].googleMapShortenUrl+`" target="_blank">`+greenwheelsaddress[0].address+`</a>
      </p>

      <div>
      <p class="greenwheels-email-id" style="opacity:0.5;margin:2.8vh 0 !important;font-size: 17px!important;font-family: Source Sans Pro; ">
<a class="font_family_a font_size_14px color-lime font-bold" href="mailto:`+greenwheelsemailid[0].email+`?subject=`+greenwheelsemailid[0].subject+`">`+greenwheelsemailid[0].email+`</a>
      </p>
      </div>
      <div><p class="greenwheels-phone-number" style="opacity:0.5; font-size: 17px!important; font-family: Source Sans Pro;">
<a class="font_family_a font_size_14px font_color_a font-600" href="tel:`+greenwheelsphonenumber+`">`+greenwheelsphonenumber+`</a>
      </p></div>
  <div> <ul class="small-block-grid-`+sociallinks.length+` "></div>
      </ul>
      <br>
      <div><img class="show-for-medium-up thumbnail" src="images/payments.png" style="width: 60%;"></div>
  </div>
  </div>
</div>


<div class="small-12 medium-4 columns text-left show-for-small-only" id="qiuck-links">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase">Quick Links</p>
    </div>
    <div class="text-padding" style="width:100%;">
    <ul class="small-block-grid-3 medium-block-grid-2" style="margin:0 !important;">
      
    </ul>

    </div>
  </div>


  <div class="small-12 medium-4 columns text-center show-for-small-only" id="social-links">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase">Keep In Touch</p>
      <ul class="small-block-grid-`+sociallinks.length+` text-center">
      </ul>

      <br>

      <div class="text-center show-for-small-only ">  
      <img class="thumbnail" src="images/payments.png" style="width: 30%; ">    
      </div>

    </div>
  </div>


  <div class="small-12 medium-4 columns text-right small-only-text-center show-for-small-only" id="contact-details">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase">Contact Info</p>
      <div><p class="text-no-bottom-padding greenwheels-address" style="opacity:0.5;line-height: 1.5 !important;">
<a class="font_family_a font_size_14px font_color_a font-600" href="`+greenwheelsaddress[0].googleMapShortenUrl+`" target="_blank">`+greenwheelsaddress[0].address+`</a>
      </p></div>
      <div><p class="greenwheels-email-id" style="opacity:0.5;margin:2.8vh 0 !important; ">
<a class="font_family_a font_size_14px color-lime font-bold" href="mailto:`+greenwheelsemailid[0].email+`?subject=`+greenwheelsemailid[0].subject+`">`+greenwheelsemailid[0].email+`</a>
      </p></div>
      <div><p class="greenwheels-phone-number" style="opacity:0.5;">
<a class="font_family_a font_size_14px font_color_a font-600" href="tel:`+greenwheelsphonenumber+`">`+greenwheelsphonenumber+`</a>
      </p></div>
    </div>
  </div>
</div>

<div class="row" id="greenwheels-copyright">
            <div class="text-center">
            <p style="opacity:0.5;" class="text-padding font_family_a font_size_15px font_color_a font-300 text-center">Copyright &copy; `+year+` greenwheels. All Rights Reserved</p>
            </div>
</div>

<div class="fix-whatsapp-btn">
   <a href="https://wa.me/919971898428" onclick="ga('send', 'event', 'Whatsapp chat button', 'clicked')" >
       <span>Hey, how can I help you today ? </span>
       <img src="images/whatsapp-btn.svg">
   </a> 
</div>
  `);



/*********************** Footer USA Starts *******************************/

$('.greenwheels-us-footer').addClass('bg_color_263238').html(`<div class="row" id="greenwheels-address">
  <div class="small-12 medium-4 columns hide-for-small-only text-left" id="qiuck-links">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase">Quick Links</p>
    </div>
    <div class="text-padding" style="width:100%;">
    <ul class="small-block-grid-3 medium-block-grid-2" style="margin:0 !important;">
      
    </ul>
    </div>
  </div>
  <div class="small-12 medium-4 columns text-center" id="social-links">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase">Keep In Touch</p>
      <ul class="small-block-grid-`+sociallinks.length+` text-center">
      </ul>
    </div>
  </div>
  <div class="small-12 medium-4 columns text-right small-only-text-center" id="contact-details">
    <div class="content-padding-top">
      <p class="text-padding font_family_a font_size_14px font_color_a font-600 text-uppercase">Contact Info</p>
      <p class="text-no-bottom-padding-1 greenwheels-address" style="opacity:0.5;line-height: 1.5 !important;">
<a class="font_family_a font_size_14px font_color_a font-600" href="`+greenwheelsUsaddress[0].googleMapShortenUrl+`" target="_blank">`+greenwheelsUsaddress[0].address+`</a>
      </p>
      <div><p class="greenwheels-email-id" style="opacity:0.5;margin:2.8vh 0 !important; ">
<a class="font_family_a font_size_14px color-lime font-bold" href="mailto:`+greenwheelsemailid[0].email+`?subject=`+greenwheelsemailid[0].subject+`">`+greenwheelsemailid[0].email+`</a>
      </p></div>
      <div><p class="greenwheels-phone-number" style="opacity:0.5;">
<a class="font_family_a font_size_14px font_color_a font-600" href="tel:`+greenwheelsUsphonenumber+`">`+greenwheelsUsphonenumber+`</a>
      </p></div>



    </div>
  </div>
</div>

<div class="row" id="greenwheels-copyright">
            <div class="text-center">
            <p style="opacity:0.5;" class="text-padding font_family_a font_size_14px font_color_a font-300 text-center">Copyright &copy; `+year+` greenwheels. All Rights Reserved</p>
            </div>
</div>

<div class="fix-whatsapp-btn">
   <a href="https://wa.me/919348671795" onclick="ga('send', 'event', 'Whatsapp chat button', 'clicked')" >
       <span>Hey, how can I help you today ? </span>
       <img src="images/whatsapp-btn.svg">
   </a> 
</div>
  `);

    for(var q=0; q<=quicklinks.length-1; q++){
        $('#qiuck-links ul').append('<li class="no-padding '+quicklinks[q].slug+'"><a class="text-padding font_family_a font_color_a font_size_14px font-600" href="'+quicklinks[q].slug+'" target="'+quicklinks[q].target+'" style="opacity:0.5;">'+quicklinks[q].name+'</a></li>');
    }
    for(var s=0; s<=sociallinks.length-1; s++){
        $('#social-links ul').append(`
          <li class="greenwheels-`+sociallinks[s].name+`" style="display: inline-block; float: none; width: auto; padding: 0 0.5rem !important;">
            <a class="text-padding font_color_a font_size_14px font-600" href="`+sociallinks[s].link+`" target="_blank" style="opacity:0.5">
              <i class="fa fa-`+sociallinks[s].imagename+`" aria-hidden="true"></i>
            </a>
          </li>`);
    }


/*for form submition onlly*/

$("button.form_submit").click(function (e) {
  e.preventDefault();
  let myform = $(this).parent();
  grecaptcha.ready(function () {
    const siteKey = '6LcVkasUAAAAALOOKD0QKAS27-mK4nnvrnpFRKQF'
    grecaptcha.execute(siteKey, { action: 'submit' }).then(function (token) {

      if (frmSubmit(myform)) {
        var currentUrl = window.location.href;
        var params = new URL(currentUrl).searchParams;

        // Extract UTM parameters
        var utmSource = params.get('utm_source') || 'none';
        var utmMedium = params.get('utm_medium') || 'none';
        var utmCampaign = params.get('utm_campaign') || 'none';
        var gadSource = params.get('gad_source') || 'none';
        var utmParameters = `source:${utmSource}, medium:${utmMedium}, campaign:${utmCampaign}, gad_source:${gadSource}`;
        // data object
        var data = {
          yourName: $(myform).find('input[name="yourname"]').val(),
          contactNumber: $.trim($(myform).find('.countryCode').val() + " " + $(myform).find('input[name="phoneNumber"]').val()),
          restaurantName: $(myform).find('input[name="restaurantname"]').val(),
          email: $.trim($(myform).find('input[name="email"]').val()),
          yourCity: $(myform).find('[name="yourCity"]').val(),
          yourCountry: $(myform).find('.countryCode option:selected').text().split('(')[0]
        }
        console.log(data);
        // validate and not send post request until and unless data is validated
        if ((data.yourName != '') && (data.contactNumber != '') && (data.restaurantName != '') && (data.email != '') && (data.yourCountry != 'Select Country') && (data.yourCity != '') && (data.contactNumber.length >= 9)) {
          $('div#loading').css('display', 'block');
          // $.ajax({
          //   url: 'https://api.jsonbin.io/b',
          //   type: 'POST',
          //   contentType: 'application/json',
          //     headers: {
          //     'secret-key': '$2a$10$5K5cR8MvRwgIzqypqDSKOObfU7pXp4AOGtv33Vd1xU.dXslfmUWCG',
          //     'private': true
          //     },
          //   data: JSON.stringify(data),
          //   success: (data) => {
          //     $('div#loading').css('display','none');
          //    $('div#success').css('display','block');
          //    // clearing all data
          //    var elems = $("form input");
          //    var l = elems.length;
          //    for (var i = 0; i < l; ++i){
          //      elems[i].value="";
          //    }
          //    setTimeout(()=>{window.location=window.location.href},2000);
          //   },
          //   error: (err) => {
          //     console.log(err.responseJSON);
          //   }
          // });
          $.post("https://website-service.dashboards.greenwheels.com/api/v1/lt-website-service/restaurant/create",
            {
              name: data.yourName,
              phone_number: data.contactNumber,
              brand_name: data.restaurantName,
              email: data.email,
              city: data.yourCity,
              country: data.yourCountry,
              utm_parameters: utmParameters,
              token
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
              if (data.id) {
                ga('require', 'ecommerce', 'ecommerce.js');
                ga('ecommerce:addTransaction', {
                  id: data.id
                });
                ga("ecommerce:send")
              }



              // display success message
              $('div#loading').css('display', 'none');
              $('div#success').css('display', 'block');

              // chq('8a1d85ca39eec4148ecbd7c30384f074');

              // clearing all data

              var elems = $("form input");
              var l = elems.length;
              for (var i = 0; i < l; ++i) {
                elems[i].value = "";
              }
            }).fail(function(xhr, status, error) {
              $('div#loading').css('display', 'none');
              console.error("Failed to verify reCAPTCHA:", error);
            });
        }
      }
      else {
        console.log("Not Submitted");
        return false;
      }
      
    });


  });
});


jQuery(window).load(function() {

setTimeout(function(){
$('.onload-reveal').foundation('reveal', 'open');
},10000);

});
// $('.close-reveal-modal,.reveal-modal-bg').click(function(){
//     $('body#product').removeClass('helppopup');
// });

$(document).ready(function(){
  $(".onclick-scroll").click(function(onclickscroll) {
    var destination = $(this).attr('href');
    onclickscroll.preventDefault();
    var targetOffset = $('#'+destination+'').offset().top-50;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);

  });
});


$('#qiuck-links .form-bookademo a').addClass('onclick-scroll');
$('.cta-sec .button').addClass('onclick-scroll');
/*for click to scroll function*/
/*animation speed control*/
  //  WOW().init();
//        $('.wow').attr('data-wow-duration','5s').attr('data-wow-delay','0.4s').attr('data-wow-offset','0');  
/*animation speed control*/


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-accord");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

setTimeout( function(){

$('.fix-whatsapp-btn span').addClass('slide-in');

},5000)



$('.country-sites button').click( function(){
    $('.country-sites').toggleClass('open');
});

$('a.close-reveal-ico,div#success').click(function () {
  $('#success').css('display', 'none');
});

$('form#book-a-demo-form .button').attr('onclick','captureSetup()');


