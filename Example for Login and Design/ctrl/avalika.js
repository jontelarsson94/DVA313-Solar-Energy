// you can call these function as soon as value of Col A and C is calculated. so that if the values changes it reflects.  

function Cal_col_H() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val())/100;
    var Pris_kopt_el = parseInt($("#indata-61").val());
    var  i=1;
    var j = 5;

    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var valh = parseInt($("#c-" + j).val()) * Andel_egenanvand_el * Pris_kopt_el;
            $("#h-" + j).val(valh);
        }else{
            $("#h-" + j).val(0);
        }
        j++;
    }
}

function Cal_col_I() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val())/100;
    var Pris_sald_el = parseInt($("#indata-62").val());
    var  i=1;
    var j = 5;

    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var ival = parseInt($("#c-" + j).val()) * (1 - Andel_egenanvand_el) * Pris_sald_el;
            $("#i-" + j).val(ival);
        } else {
            $("#i-" + j).val(0);
        }
        j++;
    }
    

}


function Cal_col_J() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val())/100;
    var Ersattning_fran_natagare = parseInt($("#indata-63").val());
    var  i=1;
    var j = 5;

    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var jval = parseInt($("#c-" + j).val()) * Ersattning_fran_natagare * (1 - Andel_egenanvand_el);
            $("#j-" + j).val(jval);
        } else {
            $("#j-" + j).val(0);
        }

        j++;

    }

}


//Make column H, I and J
//From cash flow table

