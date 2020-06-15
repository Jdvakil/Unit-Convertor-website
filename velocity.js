//Milespersecs
$(window).load(function () {
    $('.conv').hide();
    $('#mphSub').hide();
    $("#mphNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#mphSub').width($('#mphNum').width());
            $("#mphSub").slideDown(1000);
            $("#mphSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#mphSub").hide(1000);
        }
    });
    $('#mphSub').click(function () {
        //change button stats
        $("#mphSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#mphSub').hide(1000);
        }
        if ($('#mphNum').val() == '') {
            alert('Kilograms cannot be empty please enter a valid number')
        } else {
            $('#mphEmpty').empty();
            $('#mphConv').slideDown(1000, function () {
                let mph = $('#mphNum').val();
                $('#mphEmpty').append(mph + " Miles per Hour(mph) = " + (mph) + " Miles per Hour(mph). <br>");
                $('#mphEmpty').append(mph + " Miles per Hour(mph) = " + (mph * 1.467) + " Foot per Second(fps). <br>");
                $('#mphEmpty').append(mph + " Miles per Hour(mph) = " + (mph / 2.237) + " Meters per Second(mps). <br>");
                $('#mphEmpty').append(mph + " Miles per Hour(mph) = " + (mph * 1.609) + " Kilometer per Second(kmph). <br>");
                $('#mphEmpty').append(mph + " Miles per Hour(mph) = " + (mph / 1.151) + " Knots(kts). <br>");
            });
        }
    });
    $('#mphUp').click(function () {
        $('#mphUp').css('cursor', 'pointer');
        $('#mphConv').slideUp(1000, function () {
            $('#mphEmpty').empty();
        });
    });
});
//Footpersecs
$(window).load(function () {
    $('.conv').hide();
    $('#fpsSub').hide();
    $("#fpsNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#fpsSub').width($('#fpsNum').width());
            $("#fpsSub").slideDown(1000);
            $("#fpsSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#fpsSub").hide(1000);
        }
    });
    $('#fpsSub').click(function () {
        //change button stats
        $("#fpsSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#fpsSub').hide(1000);
        }
        if ($('#fpsNum').val() == '') {
            alert('Kilograms cannot be empty please enter a valid number')
        } else {
            $('#fpsEmpty').empty();
            $('#fpsConv').slideDown(1000, function () {
                let fps = $('#fpsNum').val();
                $('#fpsEmpty').append(fps + " Foot per Second(fps) = " + (fps / 1.467) + " Miles per Hour(mph). <br>");
                $('#fpsEmpty').append(fps + " Foot per Second(fps) = " + (fps) + " Foot per Second(fps). <br>");
                $('#fpsEmpty').append(fps + " Foot per Second(fps) = " + (fps / 3.281) + " Meters per Second(mps). <br>");
                $('#fpsEmpty').append(fps + " Foot per Second(fps) = " + (fps * 1.097) + " Kilometer per Second(kmph). <br>");
                $('#fpsEmpty').append(fps + " Foot per Second(fps) = " + (fps / 1.688) + " Knots(kts). <br>");
            });
        }
    });
    $('#fpsUp').click(function () {
        $('#fpsUp').css('cursor', 'pointer');
        $('#fpsConv').slideUp(1000, function () {
            $('#fpsEmpty').empty();
        });
    });
});
//Meters per sec
$(window).load(function () {
    $('.conv').hide();
    $('#mpsSub').hide();
    $("#mpsNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#mpsSub').width($('#mpsNum').width());
            $("#mpsSub").slideDown(1000);
            $("#mpsSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#mpsSub").hide(1000);
        }
    });
    $('#mpsSub').click(function () {
        //change button stats
        $("#mpsSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#mpsSub').hide(1000);
        }
        if ($('#mpsNum').val() == '') {
            alert('Kilograms cannot be empty please enter a valid number')
        } else {
            $('#mpsEmpty').empty();
            $('#mpsConv').slideDown(1000, function () {
                let mps = $('#mpsNum').val();
                $('#mpsEmpty').append(mps + " Meters per Second(mps) = " + (mps * 2.237) + " Miles per Hour(mph). <br>");
                $('#mpsEmpty').append(mps + " Meters per Second(mps) = " + (mps * 3.281) + " Foot per Second(fps). <br>");
                $('#mpsEmpty').append(mps + " Meters per Second(mps) = " + (mps) + " Meters per Second(mps). <br>");
                $('#mpsEmpty').append(mps + " Meters per Second(mps) = " + (mps * 3.6) + " Kilometer per Second(kmph). <br>");
                $('#mpsEmpty').append(mps + " Meters per Second(mps) = " + (mps * 1.944) + " Knots(kts). <br>");
            });
        }
    });
    $('#mpsUp').click(function () {
        $('#mpsUp').css('cursor', 'pointer');
        $('#mpsConv').slideUp(1000, function () {
            $('#mpsEmpty').empty();
        });
    });
});
// Kilometers per hour
$(window).load(function () {
    $('.conv').hide();
    $('#kmphSub').hide();
    $("#kmphNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#kmphSub').width($('#kmphNum').width());
            $("#kmphSub").slideDown(1000);
            $("#kmphSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#kmphSub").hide(1000);
        }
    });
    $('#kmphSub').click(function () {
        //change button stats
        $("#kmphSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#kmphSub').hide(1000);
        }
        if ($('#kmphNum').val() == '') {
            alert('Kilograms cannot be empty please enter a valid number')
        } else {
            $('#kmphEmpty').empty();
            $('#kmphConv').slideDown(1000, function () {
                let kmph = $('#kmphNum').val();
                $('#kmphEmpty').append(kmph + " Kilometers per Hour(kmph) = " + (kmph / 1.609) + " Miles per Hour(mph). <br>");
                $('#kmphEmpty').append(kmph + " Kilometers per Hour(kmph) = " + (kmph / 1.097) + " Foot per Second(fps). <br>");
                $('#kmphEmpty').append(kmph + " Kilometers per Hour(kmph) = " + (kmph / 3.6) + " Meters per Second(mps). <br>");
                $('#kmphEmpty').append(kmph + " Kilometers per Hour(kmph) = " + (kmph) + " Kilometer per Second(kmph). <br>");
                $('#kmphEmpty').append(kmph + " Kilometers per Hour(kmph) = " + (kmph / 1.852) + " Knots(kts). <br>");
            });
        }
    });
    $('#kmphUp').click(function () {
        $('#kmphUp').css('cursor', 'pointer');
        $('#kmphConv').slideUp(1000, function () {
            $('#kmphEmpty').empty();
        });
    });
});
//knots
$(window).load(function () {
    $('.conv').hide();
    $('#ktsSub').hide();
    $("#ktsNum").keyup(function () {
        if ($(this).val().length > 0) {
            $('#ktsSub').width($('#ktsNum').width());
            $("#ktsSub").slideDown(1000);
            $("#ktsSub").html(function () {
                return "Submit" + " <i class='fa fa-spinner fa-spin'>";
            });
        }
        else {
            $("#ktsSub").hide(1000);
        }
    });
    $('#ktsSub').click(function () {
        //change button stats
        $("#ktsSub").html(function () {
            return "Submit" + "<i class='fas fa-check-circle'></i>";
        });
        setTimeout(hideF, 1000);
        function hideF() {
            $('#ktsSub').hide(1000);
        }
        if ($('#ktsNum').val() == '') {
            alert('Kilograms cannot be empty please enter a valid number')
        } else {
            $('#ktsEmpty').empty();
            $('#ktsConv').slideDown(1000, function () {
                let kts = $('#ktsNum').val();
                $('#ktsEmpty').append(kts + " Knots(kts) = " + (kts * 1.151) + " Miles per Hour(mph). <br>");
                $('#ktsEmpty').append(kts + " Knots(kts) = " + (kts * 1.688) + " Foot per Second(fps). <br>");
                $('#ktsEmpty').append(kts + " Knots(kts) = " + (kts / 1.944) + " Meters per Second(mps). <br>");
                $('#ktsEmpty').append(kts + " Knots(kts) = " + (kts * 1.852) + " Kilometer per Second(kmph). <br>");
                $('#ktsEmpty').append(kts + " Knots(kts) = " + (kts) + " Knots(kts). <br>");
            });
        }
    });
    $('#ktsUp').click(function () {
        $('#ktsUp').css('cursor', 'pointer');
        $('#ktsConv').slideUp(1000, function () {
            $('#ktsEmpty').empty();
        });
    });
});