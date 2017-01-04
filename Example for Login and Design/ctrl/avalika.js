//Whenever one of these is calculated, we should calculate B first

//IF(Ekonomisk_livslängd>=A61,B61*Andel_egenanvänd_el*Pris_köpt_el,0)

/*function calculateHtable2() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val()) / 100;
    var Pris_kopt_el = $("#indata-61").val();
    
    var i = 1;
    var j = 61;
    var sum = 0;

    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var valh = Math.round(parseInt($("#b-" + j).val()) * Andel_egenanvand_el * Pris_kopt_el);
            $("#h-" + j).val(valh);
            //alert(valh);
            sum = sum + valh;
        } else {
            $("#h-" + j).val(0);
        }
        j++;
    }
    $("#h-111").val(sum);
}*/

//=IF(Ekonomisk_livslängd>=A61,B61*Andel_egenanvänd_el*Pris_köpt_el,0)
/*function calculateItable2() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val()) / 100;
    var Pris_sald_el = $("#indata-62").val();
    var i = 1;
    var j = 61;
    var sum = 0;

    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var ival = Math.round(parseInt($("#b-" + j).val()) *  Andel_egenanvand_el * Pris_sald_el);
            $("#i-" + j).val(ival);
            sum = sum + ival;
        } else {
            $("#i-" + j).val(0);
        }
        j++;
    }
    //alert("i-"+sum);
    $("#i-111").val(sum);
}*/

//=IF(Ekonomisk_livslängd>=A63,B63*Ersättning_från_nätägare*(1-Andel_egenanvänd_el),0)
/*function calculateJtable2() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val()) / 100;
    var Ersattning_fran_natagare = $("#indata-63").val();
    var i = 1;
    var j = 61;
    var sum = 0;

    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var jval = Math.round(parseInt($("#b-" + j).val()) * Ersattning_fran_natagare * (1 - Andel_egenanvand_el));
            $("#j-" + j).val(jval);
            sum = sum + jval;
        } else {
            $("#j-" + j).val(0);
        }

        j++;

    }
    //alert("j-"+sum);
    $("#j-111").val(sum);

}*/