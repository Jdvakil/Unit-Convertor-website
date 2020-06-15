//KILOGRAMS 
$(window).load(function () {
    $('.conv').hide();
    $('#kgSub').hide();
    $("#kgNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#kgSub').width($('#kgNum').width());
            $("#kgSub").slideDown(1000);
            $("#kgSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#kgSub").hide(1000);
        }
    });
    $('#kgSub').click(function () {
        //change button stats
        $("#kgSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#kgSub').hide(1000);
        }
        if ($('#kgNum').val() == '') {
            alert('Kilograms cannot be empty please enter a valid number')
        } else {
            $('#kgEmpty').empty();
            $('#kgConv').slideDown(1000, function () {
                let kg = $('#kgNum').val();
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg) + " Kilograms(Kg). <br>");
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg * 1000) + " Grams(g). <br>");
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg * 1e+6) + " Milligrams(mg). <br>");
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg * 1e+9) + " Micrograms(ug). <br>");
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg * 0.001) + " Metric Tons(mt). <br>");
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg * 0.000984207) + " Imperial Tons(it). <br>");
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg * 0.00110231) + " US Tons(ut). <br>");
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg * 0.157473) + " Stones(st). <br>");
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg * 2.20462) + " Pounds(lbs). <br>");
                $('#kgEmpty').append(kg + " Kilograms(Kg) = " + (kg * 35.274) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#kgUp').click(function () {
        $('#kgUp').css('cursor', 'pointer');
        $('#kgConv').slideUp(1000, function () {
            $('#kgEmpty').empty();
        });
    });
});
//GRAMS 
$(window).load(function () {
    $('.conv').hide();
    $('#gSub').hide();
    $("#gNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#gSub').width($('#gNum').width());
            $("#gSub").slideDown(1000);
            $("#gSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#gSub").hide(1000);
        }
    });
    $('#gSub').click(function () {
        //change button stats
        $("#gSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#gSub').hide(1000);
        }
        if ($('#gNum').val() == '') {
            alert('Grams cannot be empty please enter a valid number')
        } else {
            $('#gEmpty').empty();
            $('#gConv').slideDown(1000, function () {
                let g = $('#gNum').val();
                $('#gEmpty').append(g + " Grams(G) = " + (g * 0.001) + " Kilograms(Kg). <br>");
                $('#gEmpty').append(g + " Grams(G) = " + (g) + " Grams(g). <br>");
                $('#gEmpty').append(g + " Grams(G) = " + (g * 1000) + " Milligrams(mg). <br>");
                $('#gEmpty').append(g + " Grams(G) = " + (g * 1e+6) + " Micrograms(ug). <br>");
                $('#gEmpty').append(g + " Grams(G) = " + (g * 1e-6) + " Metric Tons(mt). <br>");
                $('#gEmpty').append(g + " Grams(G) = " + (g * 9.8421e-7) + " Imperial Tons(it). <br>");
                $('#gEmpty').append(g + " Grams(G) = " + (g * 1.1023e-6) + " US Tons(ut). <br>");
                $('#gEmpty').append(g + " Grams(G) = " + (g * 0.000157473) + " Stones(st). <br>");
                $('#gEmpty').append(g + " Grams(G) = " + (g * 0.00220462) + " Pounds(lbs). <br>");
                $('#gEmpty').append(g + " Grams(G) = " + (g / 28.35) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#gUp').click(function () {
        $('#gUp').css('cursor', 'pointer');
        $('#gConv').slideUp(1000, function () {
            $('#gEmpty').empty();
        });
    });
});
//MILLIGRAMS 
$(window).load(function () {
    $('.conv').hide();
    $('#mgSub').hide();
    $("#mgNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#mgSub').width($('#mgNum').width());
            $("#mgSub").slideDown(1000);
            $("#mgSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#mgSub").hide(1000);
        }
    });
    $('#mgSub').click(function () {
        //change button stats
        $("#mgSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#mgSub').hide(1000);
        }
        if ($('#mgNum').val() == '') {
            alert('Milligrams cannot be empty please enter a valid number')
        } else {
            $('#mgEmpty').empty();
            $('#mgConv').slideDown(1000, function () {
                let mg = $('#mgNum').val();
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg / 1e6) + " Kilograms(Kg). <br>");
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg * 0.001) + " Grams(g). <br>");
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg) + " Milligrams(mg). <br>");
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg * 1000) + " Micrograms(ug). <br>");
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg / 1e+9) + " Metric Tons(mt). <br>");
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg * 9.8421e-10) + " Imperial Tons(it). <br>");
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg * 1.1023e-9) + " US Tons(ut). <br>");
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg * 1.5747e-7) + " Stones(st). <br>");
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg * 2.2046e-6) + " Pounds(lbs). <br>");
                $('#mgEmpty').append(mg + " Milligrams(Mg) = " + (mg * 3.5274e-5) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#mgUp').click(function () {
        $('#mgUp').css('cursor', 'pointer');
        $('#mgConv').slideUp(1000, function () {
            $('#mgEmpty').empty();
        });
    });
});
//MICROGRAMS
$(window).load(function () {
    $('.conv').hide();
    $('#ugSub').hide();
    $("#ugNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#ugSub').width($('#ugNum').width());
            $("#ugSub").slideDown(1000);
            $("#ugSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#ugSub").hide(1000);
        }
    });
    $('#ugSub').click(function () {
        //change button stats
        $("#ugSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#ugSub').hide(1000);
        }
        if ($('#ugNum').val() == '') {
            alert('Micrograms cannot be empty please enter a valid number')
        } else {
            $('#ugEmpty').empty();
            $('#ugConv').slideDown(1000, function () {
                let ug = $('#ugNum').val();
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug * 1e-9) + " Kilograms(Kg). <br>");
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug * 1e-6) + " Grams(g). <br>");
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug * 0.001) + " Milligrams(mg). <br>");
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug) + " Micrograms(ug). <br>");
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug * 1e-12) + " Metric Tons(mt). <br>");
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug * 9.8421e-13) + " Imperial Tons(it). <br>");
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug * 1.1023e-12) + " US Tons(ut). <br>");
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug * 1.5747e-10) + " Stones(st). <br>");
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug * 2.2046e-9) + " Pounds(lbs). <br>");
                $('#ugEmpty').append(ug + " Micrograms(ug) = " + (ug * 3.5274e-8) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#ugUp').click(function () {
        $('#ugUp').css('cursor', 'pointer');
        $('#ugConv').slideUp(1000, function () {
            $('#ugEmpty').empty();
        });
    });
});
//METRIC TONS
$(window).load(function () {
    $('.conv').hide();
    $('#mtSub').hide();
    $("#mtNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#mtSub').width($('#mtNum').width());
            $("#mtSub").slideDown(1000);
            $("#mtSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#mtSub").hide(1000);
        }
    });
    $('#mtSub').click(function () {
        //change button stats
        $("#mtSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#mtSub').hide(1000);
        }
        if ($('#mtNum').val() == '') {
            alert('Metric Tons cannot be empty please enter a valid number')
        } else {
            $('#mtEmpty').empty();
            $('#mtConv').slideDown(1000, function () {
                let mt = $('#mtNum').val();
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt * 1000) + " Kilograms(Kg). <br>");
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt * 1e+6) + " Grams(g). <br>");
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt * 1e+9) + " Milligrams(mg). <br>");
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt * 1e+12) + " Micrograms(ug). <br>");
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt) + " Metric Tons(mt). <br>");
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt * 0.984207) + " Imperial Tons(it). <br>");
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt * 1.102312) + " US Tons(ut). <br>");
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt * 157.473) + " Stones(st). <br>");
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt * 2204.624) + " Pounds(lbs). <br>");
                $('#mtEmpty').append(mt + " Metric Tons(mt) = " + (mt * 35273.979) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#mtUp').click(function () {
        $('#mtUp').css('cursor', 'pointer');
        $('#mtConv').slideUp(1000, function () {
            $('#mtEmpty').empty();
        });
    });
});
//IMPERIAL TONS
$(window).load(function () {
    $('.conv').hide();
    $('#itSub').hide();
    $("#itNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#itSub').width($('#itNum').width());
            $("#itSub").slideDown(1000);
            $("#itSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#itSub").hide(1000);
        }
    });
    $('#itSub').click(function () {
        //change button stats
        $("#itSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#itSub').hide(1000);
        }
        if ($('#itNum').val() == '') {
            alert('Imperial Tons cannot be empty please enter a valid number')
        } else {
            $('#itEmpty').empty();
            $('#itConv').slideDown(1000, function () {
                let it = $('#itNum').val();
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it * 1016.05) + " Kilograms(Kg). <br>");
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it * 1.016e+6) + " Grams(g). <br>");
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it * 1.016e+9) + " Milligrams(mg). <br>");
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it * 1.016e+12) + " Micrograms(ug). <br>");
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it * 1.01605) + " Metric Tons(mt). <br>");
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it) + " Imperial Tons(it). <br>");
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it * 1.12) + " US Tons(ut). <br>");
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it * 160) + " Stones(st). <br>");
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it * 2240) + " Pounds(lbs). <br>");
                $('#itEmpty').append(it + " Imperial Tons(it) = " + (it * 35840) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#itUp').click(function () {
        $('#itUp').css('cursor', 'pointer');
        $('#itConv').slideUp(1000, function () {
            $('#itEmpty').empty();
        });
    });
});
//USTONS
$(window).load(function () {
    $('.conv').hide();
    $('#utSub').hide();
    $("#utNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#utSub').width($('#utNum').width());
            $("#utSub").slideDown(1000);
            $("#utSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#utSub").hide(1000);
        }
    });
    $('#utSub').click(function () {
        //change button stats
        $("#utSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#utSub').hide(1000);
        }
        if ($('#utNum').val() == '') {
            alert('US Tons cannot be empty please enter a valid number')
        } else {
            $('#utEmpty').empty();
            $('#utConv').slideDown(1000, function () {
                let ut = $('#utNum').val();
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut * 907) + " Kilograms(Kg). <br>");
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut * 907185) + " Grams(g). <br>");
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut * 9.072e+8) + " Milligrams(mg). <br>");
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut * 9.072e+11) + " Micrograms(ug). <br>");
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut / 1.102) + " Metric Tons(mt). <br>");
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut / 1.12) + " Imperial Tons(it). <br>");
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut) + " US Tons(ut). <br>");
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut * 143) + " Stones(st). <br>");
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut * 2000) + " Pounds(lbs). <br>");
                $('#utEmpty').append(ut + " US Tons(ut) = " + (ut * 32000) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#utUp').click(function () {
        $('#utUp').css('cursor', 'pointer');
        $('#utConv').slideUp(1000, function () {
            $('#utEmpty').empty();
        });
    });
});
//STONES
$(window).load(function () {
    $('.conv').hide();
    $('#sSub').hide();
    $("#sNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#sSub').width($('#sNum').width());
            $("#sSub").slideDown(1000);
            $("#sSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#sSub").hide(1000);
        }
    });
    $('#sSub').click(function () {
        //change button stats
        $("#sSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#sSub').hide(1000);
        }
        if ($('#sNum').val() == '') {
            alert('Metric Tons cannot be empty please enter a valid number')
        } else {
            $('#sEmpty').empty();
            $('#sConv').slideDown(1000, function () {
                let s = $('#sNum').val();
                $('#sEmpty').append(s + " US Tons(ut) = " + (s * 6.35) + " Kilograms(Kg). <br>");
                $('#sEmpty').append(s + " US Tons(ut) = " + (s * 6350) + " Grams(g). <br>");
                $('#sEmpty').append(s + " US Tons(ut) = " + (s * 6.35e+6) + " Milligrams(mg). <br>");
                $('#sEmpty').append(s + " US Tons(ut) = " + (s * 6.35e+9) + " Micrograms(ug). <br>");
                $('#sEmpty').append(s + " US Tons(ut) = " + (s / 157) + " Metric Tons(mt). <br>");
                $('#sEmpty').append(s + " US Tons(ut) = " + (s / 160) + " Imperial Tons(it). <br>");
                $('#sEmpty').append(s + " US Tons(ut) = " + (s / 143) + " US Tons(ut). <br>");
                $('#sEmpty').append(s + " US Tons(ut) = " + (s) + " Stones(st). <br>");
                $('#sEmpty').append(s + " US Tons(ut) = " + (s * 14) + " Pounds(lbs). <br>");
                $('#sEmpty').append(s + " US Tons(ut) = " + (s * 14) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#sUp').click(function () {
        $('#sUp').css('cursor', 'pointer');
        $('#sConv').slideUp(1000, function () {
            $('#sEmpty').empty();
        });
    });
});
//POUNDS
$(window).load(function () {
    $('.conv').hide();
    $('#pSub').hide();
    $("#pNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#pSub').width($('#pNum').width());
            $("#pSub").slideDown(1000);
            $("#pSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#pSub").hide(1000);
        }
    });
    $('#pSub').click(function () {
        //change button stats
        $("#pSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#pSub').hide(1000);
        }
        if ($('#pNum').val() == '') {
            alert('Metric Tons cannot be empty please enter a valid number')
        } else {
            $('#pEmpty').empty();
            $('#pConv').slideDown(1000, function () {
                let p = $('#pNum').val();
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p / 2.205) + " Kilograms(Kg). <br>");
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p * 454) + " Grams(g). <br>");
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p * 453592) + " Milligrams(mg). <br>");
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p * 4.536e+8) + " Micrograms(ug). <br>");
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p / 2205) + " Metric Tons(mt). <br>");
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p / 2240) + " Imperial Tons(it). <br>");
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p / 2000) + " US Tons(ut). <br>");
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p / 14) + " Stones(st). <br>");
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p) + " Pounds(lbs). <br>");
                $('#pEmpty').append(p + " Pounds(lbs) = " + (p * 16) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#pUp').click(function () {
        $('#pUp').css('cursor', 'pointer');
        $('#pConv').slideUp(1000, function () {
            $('#pEmpty').empty();
        });
    });
});
//OUNCES
$(window).load(function () {
    $('.conv').hide();
    $('#oSub').hide();
    $("#oNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#oSub').width($('#oNum').width());
            $("#oSub").slideDown(1000);
            $("#oSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#oSub").hide(1000);
        }
    });
    $('#oSub').click(function () {
        //change button stats
        $("#oSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#oSub').hide(1000);
        }
        if ($('#oNum').val() == '') {
            alert('Metric Tons cannot be empty please enter a valid number')
        } else {
            $('#oEmpty').empty();
            $('#oConv').slideDown(1000, function () {
                let o = $('#oNum').val();
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o / 35.274) + " Kilograms(Kg). <br>");
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o * 28.35) + " Grams(g). <br>");
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o * 28350) + " Milligrams(mg). <br>");
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o * 2.835e+7) + " Micrograms(ug). <br>");
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o / 35274) + " Metric Tons(mt). <br>");
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o / 35840) + " Imperial Tons(it). <br>");
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o / 32000) + " US Tons(ut). <br>");
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o / 224) + " Stones(st). <br>");
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o / 16) + " Pounds(lbs). <br>");
                $('#oEmpty').append(o + " Ounces(Oz) = " + (o * 16) + " Ounces(Oz). <br>");
            });
        }
    });
    $('#oUp').click(function () {
        $('#oUp').css('cursor', 'pointer');
        $('#oConv').slideUp(1000, function () {
            $('#oEmpty').empty();
        });
    });
});