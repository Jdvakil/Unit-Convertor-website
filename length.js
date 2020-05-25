//KILOMETERS
$(window).load(function () {
    $('.conv').hide();
    $('#kmSub').hide();
    $("#kmNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#kmSub').width($('#kmNum').width());
            $("#kmSub").slideDown(1000);
            $("#kmSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#kmSub").hide(1000);
        }
    });
    $('#kmSub').click(function () {
        //change button stats
        $("#kmSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#kmSub').hide(1000);
        }
        if ($('#kmNum').val() == '') {
            alert('Kilometers cannot be empty please enter a valid number')
        } else {
            $('#kmEmpty').empty();
            $('#kmConv').slideDown(1000, function () {
                let km = $('#kmNum').val();
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km) + " Kilometers(m). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 1000) + " Meters(m). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 100000) + " Centimeters(cm). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 1e+6) + " Millimeters(mm). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 1e+9) + " Micrometers(um). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 1e+12) + " Nanometers(nm). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 0.621371) + " Miles(mi). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 1093.61) + " Yards(yrd). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 3280.84) + " Foot(Ft). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 39370.1) + " Inch(in). <br>");
                $('#kmEmpty').append(km + " Kilometers(km) = " + (km * 0.539957) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#kmUp').click(function () {
        $('#kmUp').css('cursor', 'pointer');
        $('#kmConv').slideUp(1000, function () {
            $('#kmEmpty').empty();
        });
    });
});
//METERS
$(window).load(function () {
    $('#mUp').click(function () {
        $('#mUp').css('cursor', 'pointer');
        $('#mConv').slideUp(1000, function () {
            $('#mEmpty').empty();
        });
    });
    $('#mSub').hide();
    $("#mNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#mSub').width($('#mNum').width());
            $("#mSub").slideDown(1000);
            $("#mSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#mSub").hide(1000);
        }
    });
    $('#mSub').click(function () {
        //change button stats
        $("#mSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#mSub').hide(1000);
        }
        if ($('#mNum').val() == '') {
            alert('Meters cannot be empty please enter a valid number')
        } else {
            $('#mEmpty').empty();
            $('#mConv').slideDown(1000, function () {
                let m = $('#mNum').val();
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 0.001) + " Kilometers(m). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m) + " Meters(m). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 100) + " Centimeters(cm). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 1e+3) + " Millimeters(mm). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 1e+6) + " Micrometers(um). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 1e+9) + " Nanometers(nm). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 0.000621371) + " Miles(mi). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 1.09361) + " Yards(yrd). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 3.28084) + " Foot(Ft). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 39.3701) + " Inch(in). <br>");
                $('#mEmpty').append(m + " Kilometers(km) = " + (m * 0.000539957) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#mUp').click(function () {
        $('#mUp').css('cursor', 'pointer');
        $('#mConv').slideUp(1000, function () {
            $('#mEmpty').empty();
        });
    });
});
//CENTIMETERS
$(window).load(function () {
    $('#cmUp').click(function () {
        $('#cmUp').css('cursor', 'pointer');
        $('#cmConv').slideUp(1000, function () {
            $('#cmEmpty').empty();
        });
    });
    $('#cmSub').hide();
    $("#cmNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#cmSub').width($('#cmNum').width());
            $("#cmSub").slideDown(1000);
            $("#cmSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#cmSub").hide(1000);
        }
    });
    $('#cmSub').click(function () {
        //change button stats
        $("#cmSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#cmSub').hide(1000);
        }
        if ($('#cmNum').val() == '') {
            alert('Centimeters cannot be empty please enter a valid number')
        } else {
            $('#cmEmpty').empty();
            $('#cmConv').slideDown(1000, function () {
                let cm = $('#cmNum').val();
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 1e-5) + " Kilometers(m). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 0.01) + " Meters(m). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm) + " Centimeters(cm). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 10) + " Millimeters(mm). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 10000) + " Micrometers(um). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 1e+7) + " Nanometers(nm). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 6.2137e-6) + " Miles(mi). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 0.0109361) + " Yards(yrd). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 0.0328084) + " Foot(Ft). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 0.393701) + " Inch(in). <br>");
                $('#cmEmpty').append(m + " Centimeters(km) = " + (cm * 5.39957e-6) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#cmUp').click(function () {
        $('#cmUp').css('cursor', 'pointer');
        $('#cmConv').slideUp(1000, function () {
            $('#cmEmpty').empty();
        });
    });
});
//MILLIMETERS
$(window).load(function () {
    $('#mmUp').click(function () {
        $('#mmUp').css('cursor', 'pointer');
        $('#mmConv').slideUp(1000, function () {
            $('#mmEmpty').empty();
        });
    });
    $('#mmSub').hide();
    $("#mmNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#mmSub').width($('#mmNum').width());
            $("#mmSub").slideDown(1000);
            $("#mmSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#mmSub").hide(1000);
        }
    });
    $('#mmSub').click(function () {
        //change button stats
        $("#mmSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#mmSub').hide(1000);
        }
        if ($('#mmNum').val() == '') {
            alert('Millimeters cannot be empty please enter a valid number')
        } else {
            $('#mmEmpty').empty();
            $('#mmConv').slideDown(1000, function () {
                let mm = $('#mmNum').val();
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 1e-6) + " Kilometers(m). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 0.001) + " Meters(m). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 0.1) + " Centimeters(cm). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm) + " Millimeters(mm). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 1000) + " Micrometers(um). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 1e+6) + " Nanometers(nm). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 6.21371e-7) + " Miles(mi). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 0.00109361) + " Yards(yrd). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 0.00328084) + " Foot(Ft). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 0.0393701) + " Inch(in). <br>");
                $('#mmEmpty').append(mm + " Millimeters(mm) = " + (mm * 5.39957e-7) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#mmUp').click(function () {
        $('#mmUp').css('cursor', 'pointer');
        $('#mmConv').slideUp(1000, function () {
            $('#mmEmpty').empty();
        });
    });
});
//MICROMETERS
$(window).load(function () {
    $('#umUp').click(function () {
        $('#umUp').css('cursor', 'pointer');
        $('#umConv').slideUp(1000, function () {
            $('#umEmpty').empty();
        });
    });
    $('#umSub').hide();
    $("#umNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#umSub').width($('#umNum').width());
            $("#umSub").slideDown(1000);
            $("#umSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#umSub").hide(1000);
        }
    });
    $('#umSub').click(function () {
        //change button stats
        $("#umSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#umSub').hide(1000);
        }
        if ($('#umNum').val() == '') {
            alert('Micrometers cannot be empty please enter a valid number')
        } else {
            $('#umEmpty').empty();
            $('#umConv').slideDown(1000, function () {
                let um = $('#umNum').val();
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 1e-9) + " Kilometers(m). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 1e-6) + " Meters(m). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 1e-4) + " Centimeters(cm). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 0.001) + " Millimeters(mm). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um) + " Micrometers(um). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 1000) + " Nanometers(nm). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 6.2137e-10) + " Miles(mi). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 1.0936e-6) + " Yards(yrd). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 3.2808e-6) + " Foot(Ft). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 3.937e-5) + " Inch(in). <br>");
                $('#umEmpty').append(um + " Micrometers(um) = " + (um * 5.39957e-10) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#umUp').click(function () {
        $('#umUp').css('cursor', 'pointer');
        $('#umConv').slideUp(1000, function () {
            $('#umEmpty').empty();
        });
    });
});
//Nanometer
$(window).load(function () {
    $('#nmUp').click(function () {
        $('#nmUp').css('cursor', 'pointer');
        $('#nmConv').slideUp(1000, function () {
            $('#nmEmpty').empty();
        });
    });
    $('#nmSub').hide();
    $("#nmNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#nmSub').width($('#nmNum').width());
            $("#nmSub").slideDown(1000);
            $("#nmSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#nmSub").hide(1000);
        }
    });
    $('#nmSub').click(function () {
        //change button stats
        $("#nmSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#nmSub').hide(1000);
        }
        if ($('#nmNum').val() == '') {
            alert('Nanometers cannot be empty please enter a valid number')
        } else {
            $('#nmEmpty').empty();
            $('#nmConv').slideDown(1000, function () {
                let nm = $('#nmNum').val();
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 1e-12) + " Kilometers(m). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 1e-9) + " Meters(m). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 1e-7) + " Centimeters(cm). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 1e-6) + " Millimeters(mm). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 0.001) + " Micrometers(um). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm) + " Nanometers(nm). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 6.2137e-13) + " Miles(mi). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 1.09361e-9) + " Yards(yrd). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 3.28084e-9) + " Foot(Ft). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 3.93701e-8) + " Inch(in). <br>");
                $('#nmEmpty').append(nm + " Nanometers(nm) = " + (nm * 5.39957e-13) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#umUp').click(function () {
        $('#umUp').css('cursor', 'pointer');
        $('#umConv').slideUp(1000, function () {
            $('#umEmpty').empty();
        });
    });
});
//Miles
$(window).load(function () {
    $('#miUp').click(function () {
        $('#miUp').css('cursor', 'pointer');
        $('#miConv').slideUp(1000, function () {
            $('#miEmpty').empty();
        });
    });
    $('#miSub').hide();
    $("#miNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#miSub').width($('#miNum').width());
            $("#miSub").slideDown(1000);
            $("#miSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#miSub").hide(1000);
        }
    });
    $('#miSub').click(function () {
        //change button stats
        $("#miSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#miSub').hide(1000);
        }
        if ($('#miNum').val() == '') {
            alert('Miles cannot be empty please enter a valid number')
        } else {
            $('#miEmpty').empty();
            $('#miConv').slideDown(1000, function () {
                let mi = $('#miNum').val();
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 1.60934) + " Kilometers(m). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 1609.34) + " Meters(m). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 160934) + " Centimeters(cm). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 1.609e+6) + " Millimeters(mm). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 1.609e+9) + " Micrometers(um). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 1.609e+12) + " Nanometers(nm). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi) + " Miles(mi). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 1760) + " Yards(yrd). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 5280) + " Foot(Ft). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 63360) + " Inch(in). <br>");
                $('#miEmpty').append(mi + " Miles(Mi) = " + (mi * 0.868976) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#umUp').click(function () {
        $('#umUp').css('cursor', 'pointer');
        $('#umConv').slideUp(1000, function () {
            $('#umEmpty').empty();
        });
    });
});
//Yards
$(window).load(function () {
    $('#ydUp').click(function () {
        $('#ydUp').css('cursor', 'pointer');
        $('#ydConv').slideUp(1000, function () {
            $('#ydEmpty').empty();
        });
    });
    $('#ydSub').hide();
    $("#ydNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#ydSub').width($('#ydNum').width());
            $("#ydSub").slideDown(1000);
            $("#ydSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#ydSub").hide(1000);
        }
    });
    $('#ydSub').click(function () {
        //change button stats
        $("#ydSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#ydSub').hide(1000);
        }
        if ($('#ydNum').val() == '') {
            alert('Yards cannot be empty please enter a valid number')
        } else {
            $('#ydEmpty').empty();
            $('#ydConv').slideDown(1000, function () {
                let m = $('#ydNum').val();
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 0.0009144) + " Kilometers(m). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 0.9144) + " Meters(m). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 91.44) + " Centimeters(cm). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 914.4) + " Millimeters(mm). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 914400) + " Micrometers(um). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 9.144e8) + " Nanometers(nm). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 0.000568182) + " Miles(mi). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m) + " Yards(yrd). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 3) + " Foot(Ft). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 36) + " Inch(in). <br>");
                $('#ydEmpty').append(m + " Yards(yd) = " + (m * 0.000493737) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#umUp').click(function () {
        $('#umUp').css('cursor', 'pointer');
        $('#umConv').slideUp(1000, function () {
            $('#umEmpty').empty();
        });
    });
});
//Foot
$(window).load(function () {
    $('#ftUp').click(function () {
        $('#ftUp').css('cursor', 'pointer');
        $('#ftConv').slideUp(1000, function () {
            $('#ftEmpty').empty();
        });
    });
    $('#ftSub').hide();
    $("#ftNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#ftSub').width($('#ftNum').width());
            $("#ftSub").slideDown(1000);
            $("#ftSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#ftSub").hide(1000);
        }
    });
    $('#ftSub').click(function () {
        //change button stats
        $("#ftSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#ftSub').hide(1000);
        }
        if ($('#ftNum').val() == '') {
            alert('Foot cannot be empty please enter a valid number')
        } else {
            $('#ftEmpty').empty();
            $('#ftConv').slideDown(1000, function () {
                let m = $('#ftNum').val();
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 0.0003048) + " Kilometers(m). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 0.3048) + " Meters(m). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 30.48) + " Centimeters(cm). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 304.8) + " Millimeters(mm). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 304800) + " Micrometers(um). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 3.048e+8) + " Nanometers(nm). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 0.000189394) + " Miles(mi). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 0.333333) + " Yards(yrd). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m) + " Foot(Ft). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 12) + " Inch(in). <br>");
                $('#ftEmpty').append(m + " Foot(Ft) = " + (m * 0.000164579) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#ftUp').click(function () {
        $('#ftUp').css('cursor', 'pointer');
        $('#ftConv').slideUp(1000, function () {
            $('#ftEmpty').empty();
        });
    });
});
//Inch
$(window).load(function () {
    $('#inUp').click(function () {
        $('#inUp').css('cursor', 'pointer');
        $('#inConv').slideUp(1000, function () {
            $('#inEmpty').empty();
        });
    });
    $('#inSub').hide();
    $("#inNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#inSub').width($('#inNum').width());
            $("#inSub").slideDown(1000);
            $("#inSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#inSub").hide(1000);
        }
    });
    $('#inSub').click(function () {
        //change button stats
        $("#inSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#inSub').hide(1000);
        }
        if ($('#inNum').val() == '') {
            alert('Inch cannot be empty please enter a valid number')
        } else {
            $('#inEmpty').empty();
            $('#inConv').slideDown(1000, function () {
                let m = $('#inNum').val();
                $('#inEmpty').append(m + " Inch(In) = " + (m * 2.54e-5) + " Kilometers(m). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m * 0.0254) + " Meters(m). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m * 2.54) + " Centimeters(cm). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m * 25.4) + " Millimeters(mm). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m * 25400) + " Micrometers(um). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m * 2.54e+7) + " Nanometers(nm). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m * 1.5783e-5) + " Miles(mi). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m * 0.0277778) + " Yards(yrd). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m * 0.0833333) + " Foot(Ft). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m) + " Inch(in). <br>");
                $('#inEmpty').append(m + " Inch(In) = " + (m * 1.3715e-5) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#inUp').click(function () {
        $('#inUp').css('cursor', 'pointer');
        $('#inConv').slideUp(1000, function () {
            $('#inEmpty').empty();
        });
    });
});
//Nautical Miles
$(window).load(function () {
    $('#naUp').click(function () {
        $('#naUp').css('cursor', 'pointer');
        $('#naConv').slideUp(1000, function () {
            $('#naEmpty').empty();
        });
    });
    $('#naSub').hide();
    $("#naNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#naSub').width($('#naNum').width());
            $("#naSub").slideDown(1000);
            $("#naSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#naSub").hide(1000);
        }
    });
    $('#naSub').click(function () {
        //change button stats
        $("#naSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#naSub').hide(1000);
        }
        if ($('#naNum').val() == '') {
            alert('Nautical Miles cannot be empty please enter a valid number')
        } else {
            $('#naEmpty').empty();
            $('#naConv').slideDown(1000, function () {
                let m = $('#naNum').val();
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 1.852) + " Kilometers(m). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 1852) + " Meters(m). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 185200) + " Centimeters(cm). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 1.852e+6) + " Millimeters(mm). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 1.852e+9) + " Micrometers(um). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 1.852e+12) + " Nanometers(nm). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 1.15078) + " Miles(mi). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 2025.37) + " Yards(yrd). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 6076.12) + " Foot(Ft). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m * 72913) + " Inch(in). <br>");
                $('#naEmpty').append(m + " Nautical Miles(NauM) = " + (m) + " Nautical miles(NauM). <br>");
            });
        }
    });
    $('#naUp').click(function () {
        $('#naUp').css('cursor', 'pointer');
        $('#naConv').slideUp(1000, function () {
            $('#naEmpty').empty();
        });
    });
});