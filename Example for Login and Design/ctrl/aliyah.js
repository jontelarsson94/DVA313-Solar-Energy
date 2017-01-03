
function CalculateTabl2DEF() {
    var d_111val;
    var e_111val;
    var f_111val;
    var i = 1;
    var j = 61;
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

    var d_60val = (-1) * ((Investeringskostnad * Installerad_effekt) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
    $("#d-60").val(d_60val);
    d_111val = d_60val;

    if ((Investeringskostnad * Installerad_effekt * ROT_avdrag) <= Tak_ROT_avdrag) {
        var e_60val = (-1) * ((Investeringskostnad * Installerad_effekt * (1 - ROT_avdrag)) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#e-60").val(Math.round(e_60val));
        e_111val = Math.round(e_60val);
        //  -(Investeringskostnad*Installerad_effekt*(1-ROT_avdrag)+SUM('Dina indata & Resultat'!D35:D38))"
    } else {
        // -(Investeringskostnad*Installerad_effekt-Tak_ROT_avdrag+SUM('Dina indata & Resultat'!D35:D38))
        var e_60val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_ROT_avdrag) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#e-60").val(Math.round(e_60val));
        e_111val = Math.round(e_60val);
    }

    if (Investeringskostnad * Installerad_effekt * Investeringsstod <= Tak_Investeringsstod) {
        //-(Investeringskostnad*Installerad_effekt*(1-Investeringsstod)+SUM('Dina indata & Resultat'!D35:D38))
        var f_60val = (-1) * ((Investeringskostnad * Installerad_effekt * (1 - Investeringsstod)) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-60").val(Math.round(f_60val));
        f_111val = Math.round(f_60val);
    } else {
        //-(Investeringskostnad*Installerad_effekt-Tak_Investeringsstod+SUM('Dina indata & Resultat'!D35:D38))
        var f_60val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_Investeringsstod) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-60").val(Math.round(f_60val));
        f_111val = Math.round(f_60val);

    }

    var j = 61;
    for (i = 1; i < 50; i++) {
        var val1;
        var val2;
        if ((i / Antal_ar_till_byte_av_vaxelriktare <= Antal_byten_av_vaxelriktare) && (i < Ekonomisk_livslangd) && (i / Antal_ar_till_byte_av_vaxelriktare == 1 || i / Antal_ar_till_byte_av_vaxelriktare == 2 || i / Antal_ar_till_byte_av_vaxelriktare == 3)) {
            -(Kostnad_växelriktarbyte * Installerad_effekt)
            val1 = -(Kostnad_vaxelriktarbyte * Installerad_effekt);
        } else {
            val1 = 0;
        }
        if (i == Ekonomisk_livslangd) {
            val2 = (Restvarde - Rivningskostnad);
        } else {
            val2 = 0;
        }
        var sum = Math.round(val1) + Math.round(val2);
        d_111val = d_111val + Math.round(sum);
        e_111val = e_111val + Math.round(sum);
        f_111val = f_111val + Math.round(sum);
        var value = Math.round(val1 + val2);
        $("#d-" + j).val(value);
        $("#e-" + j).val(value);
        $("#f-" + j).val(value);
        j++;
    }
    $("#d-111").val(Math.round(d_111val));
    $("#e-111").val(Math.round(e_111val));
    $("#f-111").val(Math.round(f_111val));
}


//calculate INtada and result D83 col
/*
function calculateD83() {
    var count = 0;
    for (var i = 5; i < 55; i++) {
        if (parseInt($("#o-" + i).val()) < 0) {
            count = count + 1;
        }
    }
    if (count < parseInt($("#indata-24").val())) {
        var val = count + 1;
        $("#indata-83").val(val);
    } else {
        var ErrorStr = ">Livslängd ('" + parseInt($("#indata-24").val()) + "')år";
        $("#indata-83").val(ErrorStr);
    }


}

//calculate INtada and result D88 col
function calculateD88() {
    var count = 0;
    for (var i = 5; i < 55; i++) {
        if (parseInt($("#q-" + i).val()) < 0) {
            count = count + 1;
        }
    }
    if (count < parseInt($("#indata-24").val())) {
        var val = count + 1;
        $("#indata-88").val(val);
    } else {
        var ErrorStr = ">Livslängd ('" + parseInt($("#indata-24").val()) + "')år";
        $("#indata-88").val(ErrorStr);
    }


}

//calculate INtada and result D93 col
function calculateD93() {
    var count = 0;
    for (var i = 5; i < 55; i++) {
        if (parseInt($("#s-" + i).val()) < 0) {
            count = count + 1;
        }
    }
    if (count < parseInt($("#indata-24").val())) {
        var val = count + 1;
        $("#indata-93").val(val);
    } else {
        var ErrorStr = ">Livslängd ('" + parseInt($("#indata-24").val()) + "')år";
        $("#indata-93").val(ErrorStr);
    }

}*/
