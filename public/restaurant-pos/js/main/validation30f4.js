    /**Validator ***/
    $('span.error').hide();

    $('.mobile').keyup(function() {
        let myform = $(this).parent().parent();
        var cc = $(myform).find('#countryCode :selected').attr('data-countryCode');
        if (cc == "IN") {
            var num = $(this).val();
            if (num.match(/(|0?)[1-9]{1}\d{9}/) && (num.length <= 11)) {
                if (num.startsWith('0')) {
                    $(myform).find('.mobile').attr("maxlength", "11");
                } else {
                    $(myform).find('.mobile').attr("maxlength", "10");
                }
                checkPhoneState(myform, 'success');
            } else {
                checkPhoneState(myform, 'fail');
            }

            $(myform).find('.mobile').attr("placeholder", "Mobile or Landline with (STD)");
        } else if (cc == "AE") {
            var num = $(this).val();
            if (num.match(/(971|0?)[1-9]{1,2}\d{6}/) && (num.length <= 12)) {
                if (num.startsWith('971')) {
                    $(myform).find('.mobile').attr("maxlength", "12");
                } else if (num.startsWith('0')) {
                    $(myform).find('.mobile').attr("maxlength", "10");
                } else {
                    $(myform).find('.mobile').attr("maxlength", "9");
                }
                checkPhoneState(myform, 'success');
            } else {
                checkPhoneState(myform, 'fail');
            }
        } else {
            $(myform).find('.mobile').attr("maxlength","19");

        }
    });



    function checkPhoneState(myform, status) {
        if (status == 'success') {
            $(myform).find('.mobile').focusout(function() {
                $(myform).find('.mobile').css({
                    'box-shadow': '0 0 0px 1px #ccc'
                });
                $(myform).find('.span.error.error-phone').hide();
            });
        } else {
            $(myform).find('.mobile').focusout(function() {
                $(myform).find('.mobile').css({
                    'box-shadow': '0 0 1px 1px red'
                });
                $(myform).find('.span.error.error-phone').show();
                $(myform).find('.span.error.error-phone').balloon({
                    contents: "Please Enter in Correct Format",
                    position: "right"
                });
            });
            $(myform).find('.mobile').focusin(function() {
                $(myform).find('.mobile').css({
                    'box-shadow': '0 0 1px 1px #6da942'
                });
                $(myform).find('.span.error.error-phone').hide();
            });
        }

    }



    $('.mobile').keyup(function() {
        let myform = $(this).parent().parent();
        var num = $(this).val();
        if (num.length < 6) {
            $(myform).find('.mobile').removeAttr("maxlength");
        }
    });



    $('input.email').focusout(function() {
        let myform = $(this).parent().parent();
        var mail = $(myform).find('.email').val().toLowerCase();
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (mail.match(regex)) {
            checkEmailState(myform, 'success');
        } else {
            checkEmailState(myform, 'fail');
        }
    });

    $('input.email').focusin(function() {
        let myform = $(this).parent().parent();
        $(myform).find('.email').css({
            'box-shadow': '0 0 1px 1px #6da942'
        });
        $(myform).find('span.error.error-email').hide();
    });


    function checkEmailState(frm, status) {
        if (status == "success") {
            $(frm).find('.email').css({
                'box-shadow': '0 0 0px 1px #ccc'
            });
            $(frm).find('span.error.error-email').hide();
        } else {
            $(frm).find('.email').css({
                'box-shadow': '0 0 1px 1px red'
            });
            $(frm).find('span.error.error-email').show();
            $(frm).find('span.error.error-email').balloon({
                contents: "Please Enter in Correct Format",
                position: "right"
            });
        }
    }



    function frmSubmit(myform) {
        var validPhone = validatePhone(myform);
        var validEmail = validateEmail(myform);
        if ((validPhone) && (validEmail)) {
            console.log("Phone & Email is Valid");
            return true;
        } else {
            console.log("Please Fill The Form Correctly");
            return false;
        }
    }


    function validatePhone(myform) {
        var phone = $(myform).find('.mobile').val();
        var cc = $(myform).find('select').find(':selected').attr('data-countryCode');
        if (cc == "IN") {
            var num = $(myform).find('.mobile').val();
            if (num.match(/(|0?)[1-9]{1}\d{9}/) && (num.length <= 11)) {
                if (num.length == 10) {
                    $(myform).find('.mobile').attr("maxlength", "10");
                } else {
                    $(myform).find('.mobile').attr("maxlength", "11");
                }
                return true;
            } else {
                $(myform).find('.mobile').css({
                    'box-shadow': '0 0 1px 1px red'
                });
                $(myform).find('.span.error.error-phone').show();
                $(myform).find('.span.error.error-phone').balloon({
                    contents: "Please Enter in Correct Format",
                    position: "right"
                });
                return false;
            }

        } else if (cc == "AE") {
            var num = $(myform).find('.mobile').val();
            if (num.match(/(|0?)[1-9]{1,2}\d{7}/) && (num.length <= 11)) {
                if (num.startsWith('971')) {
                    $(myform).find('.mobile').attr("maxlength", "11");
                } else if (num.startsWith('0')) {
                    $(myform).find('.mobile').attr("maxlength", "9");
                } else {
                    $(myform).find('.mobile').attr("maxlength", "8");
                }
                return true;
            } else {
                $(myform).find('.mobile').css({
                    'box-shadow': '0 0 1px 1px red'
                });
                $(myform).find(' span.error').show();
                $(myform).find(' span.error').balloon({
                    contents: "Please Enter in Correct Format",
                    position: "right"
                });
                return false;
            }
        } else if (cc == "None") {
            $(myform).find('select').css({
                'box-shadow': '0 0 1px 1px red'
            });
            return false;
        } else {
            $(myform).find('.mobile').attr({
                "maxlength": "15",
                "minlength": "6"
            });
        }

        if ((phone == "") || (phone.length > 15)) {
            $(myform).find('.mobile').css({
                'box-shadow': '0 0 1px 1px red'
            });
            $(myform).find(' span.error').show();
            $(myform).find(' span.error').balloon({
                contents: "Please Enter in Correct Format",
                position: "right"
            });
            return false;
        } else {
            $(myform).find('.mobile').css({
                'box-shadow': '0 0 0px 1px #ccc'
            });
            $(myform).find(' span.error').hide();
            return true;
        }
    }




    function validateEmail(myform) {
        var mail = $(myform).find('.email').val().toLowerCase();
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (mail.match(regex)) {
            $(myform).find('.email').css({
                'box-shadow': '0 0 0px 1px #ccc'
            });
            $(myform).find('span.error.error-email').hide();
            return true;
        } else {
            $(myform).find('.email').css({
                'box-shadow': '0 0 1px 1px red'
            });
            $(myform).find('span.error.error-email').show();
            $(myform).find('span.error.error-email').balloon({
                contents: "Please Enter in Correct Format",
                position: "right"
            });
            return false;
        }
    }




    $('.countryCode').change(function() {
        let myform = $(this).closest('form');
        $(this).css({
            'box-shadow': '0 0 0px 1px #ccc'
        });
        $(myform).find('.mobile').val("");
        var cc = $(myform).find('.countryCode :selected').attr('data-countrycode');
        if (cc == "IN") {
            viewCities(myform, 'true');
        } else {
            viewCities(myform, 'false');
        }
    });


    function viewCities(parent, visible) {
        if (visible == 'true') {
            $(parent).find('input[name="yourCity"]').parent().html(`
<label class="font_family_a font_size_14px font_color_b font-600 text-left" for="yourcity">Your City</label>
<select name="yourCity">
                    <option data-city="none" value="" selected="">Select City</option>
                    <option data-city="Bengaluru" value="Bengaluru">Bengaluru</option>
                    <option data-city="Chandigarh" value="Chandigarh">Chandigarh</option>
                    <option data-city="Chennai" value="Chennai">Chennai</option>
                    <option data-city="Delhi" value="Delhi">Delhi</option>
                    <option data-city="Gurugram" value="Gurugram">Gurugram</option>
                    <option data-city="Hyderabad" value="Hyderabad">Hyderabad</option>
                    <option data-city="Jaipur" value="Jaipur">Jaipur</option>
                    <option data-city="Kolkata" value="Kolkata">Kolkata</option>
                    <option data-city="Mumbai" value="Mumbai">Mumbai</option>
                    <option data-city="Noida" value="Noida">Noida</option>
                    <option data-city="Pune" value="Pune">Pune</option>
                    <optgroup label="Other Cities">
                    <option data-city="Agra" value="Agra">Agra</option>
                    <option data-city="Ahmedabad" value="Ahmedabad">Ahmedabad</option>
                    <option data-city="Allahabad" value="Allahabad">Allahabad</option>
                    <option data-city="Ambala" value="Ambala">Ambala</option>
                    <option data-city="Amritsar" value="Amritsar">Amritsar</option>
                    <option data-city="Bhilai" value="Bhilai">Bhilai</option>
                    <option data-city="Bhopal" value="Bhopal">Bhopal</option>
                    <option data-city="Agra" value="Agra">Agra</option>
                    <option data-city="Bhubaneswar" value="Bhubaneswar">Bhubaneswar</option>
                    <option data-city="Coimbatore" value="Coimbatore">Coimbatore</option>
                    <option data-city="Dehradun" value="Dehradun">Dehradun</option>
                    <option data-city="Dimapur" value="Dimapur">Dimapur</option>
                    <option data-city="Faridabad" value="Faridabad">Faridabad</option>
                    <option data-city="Goa" value="Goa">Goa</option>
                    <option data-city="Guwahati" value="Guwahati">Guwahati</option>
                    <option data-city="Gwalior" value="Gwalior">Gwalior</option>
                    <option data-city="Hosur" value="Hosur">Hosur</option>
                    <option data-city="Indore" value="Indore">Indore</option>
                    <option data-city="Jalandhar" value="Jalandhar">Jalandhar</option>
                    <option data-city="Jammu" value="Jammu">Jammu</option>
                    <option data-city="Kanpur" value="Kanpur">Kanpur</option>
                    <option data-city="Karnal" value="Karnal">Karnal</option>
                    <option data-city="Kochi" value="Kochi">Kochi</option>
                    <option data-city="Kozhikode" value="Kozhikode">Kozhikode</option>
                    <option data-city="Lucknow" value="Lucknow">Lucknow</option>
                    <option data-city="Ludhiana" value="Ludhiana">Ludhiana</option>
                    <option data-city="Manipal" value="Manipal">Manipal</option>
                    <option data-city="Meerut" value="Meerut">Meerut</option>
                    <option data-city="Mohali" value="Mohali">Mohali</option>
                    <option data-city="Moradabad" value="Moradabad">Moradabad</option>
                    <option data-city="Mussoorie" value="Mussoorie">Mussoorie</option>
                    <option data-city="Nagpur" value="Nagpur">Nagpur</option>
                    <option data-city="Nainital" value="Nainital">Nainital</option>
                    <option data-city="Nashik" value="Nashik">Nashik</option>
                    <option data-city="Panchkula" value="Panchkula">Panchkula</option>
                    <option data-city="Patiala" value="Patiala">Patiala</option>
                    <option data-city="Patna" value="Patna">Patna</option>
                    <option data-city="Pondicherry" value="Pondicherry">Pondicherry</option>
                    <option data-city="Raipur" value="Raipur">Raipur</option>
                    <option data-city="Rajkot" value="Rajkot">Rajkot</option>
                    <option data-city="Ranchi" value="Ranchi">Ranchi</option>
                    <option data-city="Salem" value="Salem">Salem</option>
                    <option data-city="Secundrabad" value="Secundrabad">Secundrabad</option>
                    <option data-city="Shimla" value="Shimla">Shimla</option>
                    <option data-city="Siliguri" value="Siliguri">Siliguri</option>
                    <option data-city="Solan" value="Solan">Solan</option>
                    <option data-city="Surat" value="Surat">Surat</option>
                    <option data-city="Tezpur" value="Tezpur">Tezpur</option>
                    <option data-city="Udaipur" value="Udaipur">Udaipur</option>
                    <option data-city="Vadodara" value="Vadodara">Vadodara</option>
                    <option data-city="Varanasi" value="Varanasi">Varanasi</option>
                    <option data-city="Vijayawada" value="Vijayawada">Vijayawada</option>
                    <option data-city="Warangal" value="Warangal">Warangal</option>
                    <option data-city="Others" value="Others">Others</option>
</select>
`);
        } else {
            $(parent).find('[name="yourCity"]').parent().html(`
<label class="font_family_a font_size_14px font_color_b font-600 text-left" for="yourcity">Your City</label>
<input type="text" name="yourCity" placeholder="Your City" value="" required="" class="font_size_b">
`);
        }
    }