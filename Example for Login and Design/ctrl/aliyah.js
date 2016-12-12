
function Cal_extended_25() {
    //alert("check indata-18 value" + $("#indata-18").val());
    var p18 = $("#indata-18").val();
    var choosen = $("input[name=optradio]:checked").val();
    if (p18 <= 10) {
        if (choosen=="1") {
            $("#extended-25").val(3000 * 1.25);
        } else {
            $("#extended-25").val(3000);
        }
    }
    else if (p18 <= 30) {
        if (choosen == "1") {
            $("#extended-25").val(2000 * 1.25);
        } else {
            $("#extended-25").val(2000);
        }
    } else if (p18 <= 100) {
        if (choosen == "1") {
            $("#extended-25").val(1500 * 1.25);
        } else {
            $("#extended-25").val(1500);
        }

    } else {
        if (choosen == "1") {
            $("#extended-25").val(1000 * 1.25);
        } else {
            $("#extended-25").val(1000);
        }

    }
    Cal_col_DEF();
}

function Cal_col_DEF() {
    var d_55val;
    var e_55val;
    var f_55val;
    var i = 1;
    var j = 5;
    var Investeringskostnad = parseInt($("#indata-32").val());
    var Installerad_effekt = parseInt($("#indata-18").val());
    var ROT_avdrag = parseInt($("#extended-17").val()) / 100;
    var Tak_ROT_avdrag = parseInt($("#extended-18").val());
    var Investeringsstod = parseInt($("#indata-33").val()) / 100;
    var Tak_Investeringsstod = parseInt($("#extended-16").val());
    var Antal_ar_till_byte_av_vaxelriktare = parseInt($("#extended-24").val());
    var Antal_byten_av_vaxelriktare = parseInt($("#extended-23").val());
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Kostnad_vaxelriktarbyte = parseInt($("#extended-25").val());
    var Kalkylranta = parseInt($("#indata-28").val()) / 100;
    var Restvarde = parseInt($("#extended-50").val());
    var Rivningskostnad = parseInt($("#extended-51").val());

    var d_4val = (-1) * ((Investeringskostnad * Installerad_effekt) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
    $("#d-4").val(d_4val);
    d_55val = d_4val;

    if ((Investeringskostnad * Installerad_effekt * ROT_avdrag) <= Tak_ROT_avdrag) {
        var e_4val = (-1) * ((Investeringskostnad * Installerad_effekt * (1 - ROT_avdrag)) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#e-4").val(e_4val);
        e_55val = e_4val;
        //  -(Investeringskostnad*Installerad_effekt*(1-ROT_avdrag)+SUM('Dina indata & Resultat'!D35:D38))"
    } else {
        // -(Investeringskostnad*Installerad_effekt-Tak_ROT_avdrag+SUM('Dina indata & Resultat'!D35:D38))
        var e_4val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_ROT_avdrag) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#e-4").val(e_4val);
        e_55val = e_4val;
    }

    //Investeringskostnad*Installerad_effekt*Investeringsstod<=Tak_Investeringsstod
    if (Investeringskostnad * Installerad_effekt * Investeringsstod <= Tak_Investeringsstod) {
        //-(Investeringskostnad*Installerad_effekt*(1-Investeringsstod)+SUM('Dina indata & Resultat'!D35:D38))
        var f_4val = (-1) * ((Investeringskostnad * Installerad_effekt * (1 - Investeringsstod)) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-4").val(f_4val);
        f_55val = f_4val;
    } else {
        //-(Investeringskostnad*Installerad_effekt-Tak_Investeringsstod+SUM('Dina indata & Resultat'!D35:D38))
        var f_4val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_Investeringsstod) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-4").val(f_4val);
        f_55val = f_4val;
    }

    //alert($("#d-4").val() + "    " + $("#e-4").val() + "   " + $("#f-4").val());

    for (i = 1; i < 51; i++) {
        var val1;
        var val2;
        if ((i / Antal_ar_till_byte_av_vaxelriktare <= Antal_byten_av_vaxelriktare) && (i < Ekonomisk_livslangd) && (i / Antal_ar_till_byte_av_vaxelriktare == 1 || i / Antal_ar_till_byte_av_vaxelriktare == 2 || i / Antal_ar_till_byte_av_vaxelriktare == 3)) {
            val1 = -((Kostnad_vaxelriktarbyte * Installerad_effekt)) / Math.pow(1 + Kalkylranta, i);
        } else {
            val1 = 0;
        }

        if (i == Ekonomisk_livslangd) {
            //(Restvarde-Rivningskostnad)/(1+Kalkylranta)^A5
            val2 = (Restvarde - Rivningskostnad) / Math.pow(1 + Kalkylranta, i);
        } else {
            val2 = 0;
        }

        var sum = val1 + val2;
        d_55val = d_55val + sum;
        e_55val = e_55val + sum;
        f_55val = f_55val + sum;

        var value = Math.round(val1 + val2);
        $("#d-" + j).val(value);
        $("#e-" + j).val(value);
        $("#f-" + j).val(value);
        //if (value != 0) { alert(i); }

        j++;
    }


    $("#d-55").val(Math.round(d_55val));
    $("#e-55").val(Math.round(e_55val));
    $("#f-55").val(Math.round(f_55val));


}


//Make column D, E, F
//From cash flow table
