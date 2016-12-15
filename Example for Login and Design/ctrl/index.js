//set module and controller that we can use in html/php file
angular.module('index', []).controller('indexCtrl', function($scope, $http) {

  $scope.number = 56;

  $scope.getIndataDefaultsPerson = function (){
    $http.get("api/get_indata_defaults_person.php")

    .success(function (response) {
      if(response.success == true){
        $scope.indata_defaults = response.defaults;
      }else {

      }
    });
  }

  $scope.getIndataDefaultsCompany = function (){
    $http.get("api/get_indata_defaults_company.php")

    .success(function (response) {
      if(response.success == true){
        $scope.indata_defaults = response.defaults;
      }else {

      }
    });
  }

  $scope.getNumber = function(num) {
    return new Array(num);
  }

  $scope.getExtendedDefaultsPerson = function (){
    $http.get("api/get_extended_defaults_person.php")

    .success(function (response) {
      if(response.success == true){
        $scope.extended_defaults = response.defaults;
      }else {

      }
    });
  }

  $scope.getExtendedDefaultsCompany = function (){
    $http.get("api/get_extended_defaults_company.php")

    .success(function (response) {
      if(response.success == true){
        $scope.extended_defaults = response.defaults;
      }else {

      }
    });
  }


});

$('[data-toggle="popover"]').popover();

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();

});

$('[data-toggle="tooltip"]').tooltip();

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function calculateS(){
  $("#s-4").val(  parseInt($("#r-4").val()) );

    for(var i = 5; i < 55; i++){
        if( parseInt($("#indata-24").val()) >  parseInt($("#a-" +i).val()))
            $("#s-"+i).val(  parseInt($("#s-"+(i-1)).val()) +  parseInt($("#r-"+i).val()) );
    }
}

function calculateR(){
  var r55 = 0;

    for(var i = 4; i < 55; i++){
            $("#r-"+i).val(  parseInt($("#f-"+i).val()) +  parseInt($("#g-"+i).val()) +  parseInt($("#h-"+i).val()) +  parseInt($("#i-"+i).val()) +  parseInt($("#j-"+i).val()) +  parseInt($("#k-"+i).val()) +  parseInt($("#l-"+i).val()) +  parseInt($("#m-"+i).val()) );
            r55 = r55 +  parseInt($("#r-"+i).val());
    }
    $("#r-55").val(r55); 
    calculateS();
}

function calculateQ(){
  $("#q-4").val(  parseInt($("#p-4").val()) );

    for(var i = 5; i < 55; i++){
        if( parseInt($("#indata-24").val()) >  parseInt($("#a-" +i).val()))
            $("#q-"+i).val(  parseInt($("#q-"+(i-1)).val()) +  parseInt($("#p-"+i).val()) );
    }
}

function calculateO(){
  $("#o-4").val(  parseInt($("#n-4").val()) );

    for(var i = 5; i < 55; i++){
        if( parseInt($("#indata-24").val()) >  parseInt($("#a-" +i).val()))
            $("#o-"+i).val(  parseInt($("#o-"+(i-1)).val()) +  parseInt($("#n-"+i).val()) );
    }
}

//Must be called every time D, G, H, I, J, K, L or M is calculated
function calculateN(){
  var n55 = 0;

    for(var i = 4; i < 55; i++){
            $("#n-"+i).val(Math.round(  parseInt($("#d-"+i).val()))
                          +  Math.round(parseInt($("#g-"+i).val()))
                          +  Math.round(parseInt($("#h-"+i).val()))
                          +  Math.round(parseInt($("#i-"+i).val()))
                          +  Math.round(parseInt($("#j-"+i).val()))
                          +  Math.round(parseInt($("#k-"+i).val()))
                          +  Math.round(parseInt($("#l-"+i).val()))
                          +  Math.round(parseInt($("#m-"+i).val())));
            n55 = n55 +  Math.round(parseInt($("#n-"+i).val()));
    }
    $("#n-55").val(n55);
    //alert("n55-" + n55);
    calculateO();

}

function calculateP(){
  var p55 = 0;

    for(var i = 4; i < 55; i++){
            $("#p-"+i).val(  parseInt($("#e-"+i).val())
                          +  parseInt($("#g-"+i).val())
                          +  parseInt($("#h-"+i).val())
                          +  parseInt($("#i-"+i).val())
                          +  parseInt($("#j-"+i).val())
                          +  parseInt($("#k-"+i).val())
                          +  parseInt($("#l-"+i).val())
                          +  parseInt($("#m-"+i).val()) );
            p55 = p55 +  parseInt($("#p-"+i).val());
    }
    $("#p-55").val(p55);
    calculateQ();
}

//Whenever one of these is calculated, we should calculate c first
function calculateH() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val())/100;
    var Pris_kopt_el = $("#indata-61").val();
    /*alert("Ekonomisk_livslangd-"+Ekonomisk_livslangd);
    alert("Andel_egenanvand_el-"+Andel_egenanvand_el);
    alert("Pris_kopt_el-"+Pris_kopt_el);*/
    var  i=1;
    var j = 5;
    var sum = 0;

    for (i = 1; i < 50; i++) {
        if (Ekonomisk_livslangd >= i) {
            var valh = parseInt($("#c-" + j).val()) * Andel_egenanvand_el * Pris_kopt_el;
            $("#h-" + j).val(valh);
            //alert(valh);
            sum = sum + valh;
        }else{
            $("#h-" + j).val(0);
        }
        j++;
    }
    $("#h-55").val(sum);
    calculateN();
    calculateP();
    calculateR();
}

function calculateI() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val())/100;
    var Pris_sald_el = $("#indata-62").val();
    var  i=1;
    var j = 5;
    var sum = 0;

    for (i = 1; i < 50; i++) {
        if (Ekonomisk_livslangd >= i) {
            var ival = parseInt($("#c-" + j).val()) * (1 - Andel_egenanvand_el) * Pris_sald_el;
            $("#i-" + j).val(ival);
            sum = sum + ival;
        } else {
            $("#i-" + j).val(0);
        }
        j++;
    }
    //alert("i-"+sum);
    $("#i-55").val(sum);
    calculateN();
    calculateP();
    calculateR();
}


function calculateJ() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val())/100;
    var Ersattning_fran_natagare = $("#indata-63").val();
    var  i=1;
    var j = 5;
    var sum = 0;

    for (i = 1; i < 50; i++) {
        if (Ekonomisk_livslangd >= i) {
            var jval = parseInt($("#c-" + j).val()) * Ersattning_fran_natagare * (1 - Andel_egenanvand_el);
            $("#j-" + j).val(jval);
            sum = sum + jval;
        } else {
            $("#j-" + j).val(0);
        }

        j++;

    }
    //alert("j-"+sum);
    $("#j-55").val(sum);
    calculateN();
    calculateP();
    calculateR();

}

function calculateDEF() {
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

    for (i = 1; i < 50; i++) {
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
        //alert(sum);
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

    calculateN();
    calculateP();
    calculateR();

}

function calculateB(){
  //give different variables the value that is in that input field
  //If the cell is in "indata & resultat", then the id will be #indata-row
  //If the cell is in "grundläggande antaganden", then the id will be #extended-row
  //If the cell is in "Kassaflöden", then the id will be #column-row so for example A5 in the table will be #a-5
  var p24 = $( "#indata-24" ).val();
  var p18 = $( "#indata-18" ).val();
  var e60 = $( "#extended-60" ).val();
  e60 = e60 / 100; // divide by 100 since it is a % unit
  var p53 = $( "#indata-53" ).val();
  var e56 = $( "#extended-56" ).val();
  e56 = e56/100;
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var current = $( "#a-" + i ).val();
    var result = 0;
    if(+current <= +p24){
      //perform the calculation and save result in a variable
      result = p18 * e60 * p53 * (Math.pow((1-e56), (current-1)));
      //
      sum = sum + result;
    }
    //give the cell (input field) that value
    $( "#b-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#b-55" ).val( Math.round(sum) );
}

function calculateC(){
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100;
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var currentB = $( "#b-" + i ).val();
    var currentA = $( "#a-" + i ).val();
    var result = currentB/Math.pow((1+p28), currentA);
    sum = sum + result;
    $( "#c-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#c-55" ).val( Math.round(sum) );
  calculateH();
  calculateI();
  calculateJ();
}


function calculateG(){
  var p24 = $( "#indata-24" ).val();
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100;
  var p47 = $( "#indata-47" ).val();
  var p48 = $( "#indata-48" ).val();
  //set sum counter to 0
  var sum = 0;
  var result = 0;
  //loop through all the ids for that column
  //skipping 8-13
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
    if(+currentA <= +p24){
      result = -((p47+p48)/Math.pow((1+p28), currentA));
      sum = sum + result;
    }
    $( "#g-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#g-55" ).val( Math.round(sum) );
  calculateN();
  calculateP();
  calculateR();
}

function calculateK(){
  var p64 = $( "#indata-64" ).val();
  var p65 = $( "#indata-65" ).val();
  p65 = p65 / 100; // divide by 100 since it is a % unit
  var p66 = $( "#indata-66" ).val();
  p66 = p66 / 100;
  var e64 = $( "#extended-64" ).val();
  var sum = 0; //set sum counter to 0
  
  //loop through the necessary ids for that column (row 5-54)
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val(); //improvement (?) - put declaration of "currentA", "currentC", "result" before the for-loop, to avoid creating several different variables?
  var currentC = $( "#c-" + i ).val(); 
    var result = 0; 
    
    if(+e64 >= +currentA)
      //perform the calculation and save the result in a variable
      result = currentC * p65 * (1-p66) * p64;
  //else result = 0
      
    $( "#k-" + i ).val( Math.round(result) ); //give the specific cell (input field) that value
  sum = sum + result; //increase the sum   
  
  //var testStr1 = "result of K" + i + "=" + result;
  //alert(testStr1); //test
  }
  
  $( "#k-55" ).val( Math.round(sum) ); //give the sum-cell the total calculated sum 
  
  //var testStr2 = "total K sum=" + sum;
  //alert(testStr2); //test
  calculateN();
  calculateP();
  calculateR();
}

function calculateM(){
  var p24 = $( "#indata-24" ).val();
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100; // divide by 100 since it is a % unit
  var p60 = $( "#indata-60" ).val();
  p60 = p60 / 100; 
  var p68 = $( "#indata-68" ).val();
  var e65 = $( "#extended-65" ).val();
  var e66 = $( "#extended-66" ).val();
  var sum = 0; //set sum counter to 0
  
  //loop through the necessary ids for that column (row 5-54)
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
  var currentC = $( "#c-" + i ).val();
  var result = 0;
  
  //perform calculations if necessary
  if(+p24 >= +currentA && +p68 >= +currentA) {
    if((currentC * (1-p60) * e65) > (+e66))
      result = 18000 / Math.pow((1+p28), currentA);
    else
      result = currentC * (1-p60) * e65;
  }
  //else result = 0;
    
    $( "#m-" + i ).val( Math.round(result) ); //give the specific cell (input field) that value
  sum = sum + result; //increase the sum  
  
  //var testStr1 = "result of M" + i + "=" + result;
  //alert(testStr1); //test
  }

  $( "#m-55" ).val( Math.round(sum) ); //give the sum-cell the total calculated sum 
  
  //var testStr2 = "total M sum=" + sum;
  //alert(testStr2); //test  
  calculateN();
  calculateP();
  calculateR();
}

function calculateL(){
  var p24 = $( "#indata-24" ).val();
  var p67 = $( "#indata-67" ).val();
  var sum = 0; //set sum counter to 0
  
  //loop through the necessary ids for that column (row 5-54)
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
    var currentC = $( "#c-" + i ).val();
  var result = 0;
  
  if(+p24 >= +currentA)
    //perform the calculation and save the result in a variable
    result = currentC * p67;
  //else result = 0
  
    $( "#l-" + i ).val( Math.round(result) ); //give the specific cell (input field) that value
  sum = sum + result; //increase the sum  
  
  //var testStr1 = "result of L" + i + "=" + result;
  //alert(testStr1); //test
  }
  
  $( "#l-55" ).val( Math.round(sum) );
  
  //var testStr2 = "total L sum=" + sum;
  //alert(testStr2); //test
  calculateN();
  calculateP();
  calculateR();
}

//This will always calculate cash flow column D, E and F, dont call calculateDEF after this one
function calculateE25(){
  var p18 = $( "#indata-18" ).val();
  var choosen = $("input[name=optradio]:checked").val()
  var result;
  if(choosen == 2){
    result = 1000;
  }
  else{
    result = 1000*1.25;
  }
  if(choosen == 2 && p18 <= 100){
    result = 1500;
  }
  else if(p18 <= 100){
    result = 1500*1.25;
  }
  if(choosen == 2 && p18 <= 30){
    result = 2000;
  }
  else if(p18 <= 30){
    result = 2000*1.25;
  }
  if(choosen == 2 && p18 <= 10){
    result = 3000;
  }
  else if(p18 <= 10){
    result = 3000*1.25;
  }
  $( "#extended-25" ).val( Math.round(result) );

  calculateDEF();
}

function calculateE52(){
  var e50 = $( "#extended-50" ).val();
  var e51 = $( "#extended-51" ).val();
  var p28 = $( "#indata-28" ).val();
  var p24 = $( "#indata-24" ).val();
  var p18 = $( "#indata-18" ).val();
  var result = (+e50 - +e51)/Math.pow((1+(p28 * 0.01)), p24)/p18;
  $( "#extended-52" ).val( Math.round(result) );
}

function calculateI25(){
  var e41 = $( "#extended-41" ).val();
  var e42 = $( "#extended-42" ).val();
  var e43 = $( "#extended-43" ).val();
  var e44 = $( "#extended-44" ).val();
  var e45 = $( "#extended-45" ).val();
  var result = +e41 + +e42 + +e43 + +e44 + +e45;
  $( "#extended-46" ).val(Math.round(result) );
  $( "#indata-48" ).val(Math.round(result) );

  var p18 = $( "#indata-18" ).val();
  var p47 = $( "#indata-47" ).val();
  var p48 = $( "#indata-48" ).val();
  result = (+p47 + +p48)/p18
  $( "#indata-49" ).val( Math.round(result) );
}

function calculateI49(){
  var p18 = $( "#indata-18" ).val();
  var p47 = $( "#indata-47" ).val();
  var p48 = $( "#indata-48" ).val();
  result = (+p47 + +p48)/p18
  $( "#indata-49" ).val( Math.round(result) );
}

function calculateE38AndI47(){
  var e30 = $( "#extended-30" ).val();
  var e31 = $( "#extended-31" ).val();
  var e32 = $( "#extended-32" ).val();
  var e33 = $( "#extended-33" ).val();
  var e34 = $( "#extended-34" ).val();
  var e35 = $( "#extended-35" ).val();
  var e36 = $( "#extended-36" ).val();
  var e37 = $( "#extended-37" ).val();
  var result = +e30 + +e31 + +e32 + +e33 + +e34 + +e35 + +e36 + +e37;
  $( "#extended-38" ).val(Math.round(result) );
  $( "#indata-47" ).val(Math.round(result) );
}

function calculateE46AndI48(){
  var e41 = $( "#extended-41" ).val();
  var e42 = $( "#extended-42" ).val();
  var e43 = $( "#extended-43" ).val();
  var e44 = $( "#extended-44" ).val();
  var e45 = $( "#extended-45" ).val();
  result = +e41 + +e42 + +e43 + +e44 + +e45;
  $( "#extended-46" ).val(Math.round(result) );
  $( "#indata-48" ).val(Math.round(result) );
}

function calculateI19(){
  var p18 = $( "#indata-18" ).val();
  var e12 = $( "#extended-12" ).val();
  var result = p18/(e12*0.01);
  $( "#indata-19" ).val( Math.round(result) );
}

$('#calculations').on('mouseenter', '', function(ev){
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  //calculating p19
  calculateI19();
  calculateE25();
  calculateE52();
  calculateI25();
  calculateI49();
  calculateE46AndI48();

  //calculating e38 and p48
  calculateE38AndI47();

  //Calculating e46 and p48
  calculateE46AndI48();
  calculateB();
  calculateC();
  calculateDEF();
  calculateG();
  calculateH();
  calculateI();
  calculateJ();
  calculateK();
  calculateL();
  calculateM();
  calculateN();
  calculateO();
  calculateP();
  calculateQ();
  calculateR();
  calculateS();


  /*alert("b-" + $( "#b-55" ).val());
  alert("c-"+$( "#c-55" ).val());
  alert("d-"+$( "#d-55" ).val());
  alert("e-"+$( "#e-55" ).val());
  alert("f-"+$( "#f-55" ).val());
  alert("g-"+$( "#g-55" ).val());
  alert("h-"+$( "#h-55" ).val());
  alert("i-"+$( "#i-55" ).val());
  alert("j-"+$( "#j-55" ).val());
  alert("k-"+$( "#k-55" ).val());
  alert("l-"+$( "#l-55" ).val());
  alert("m-"+$( "#m-55" ).val());
  alert("n-"+$( "#n-55" ).val());
  alert("o-"+$( "#o-55" ).val());
  alert("p-"+$( "#p-55" ).val());
  alert("q-"+$( "#q-55" ).val());
  alert($( "#q-4" ).val());
  alert($( "#q-5" ).val());
  alert($( "#q-6" ).val());
  alert($( "#q-7" ).val());
  alert("r-"+$( "#r-55" ).val());
  //alert($( "#s-32" ).val());*/


});

//calculating p19, p49
$('#calculations').on('keyup', '#indata-18', '#extended-12', function(ev){
  calculateI19();
  calculateI49();
});

//calculating e38, p47, p49
$('#calculations').on('keyup', '#extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37', function(ev){
  calculateE38AndI47();
  calculateI49();
});

//calculating e46, p48, p49
$('#calculations').on('keyup', '#extended-41, #extended-42, #extended-43, #extended-44, #extended-45', function(ev){
  calculateI25();
});

$('#calculations').on('keyup', '#extended-50, #extended-51, #indata-28, #indata-24, #indata-18', function(ev){
  calculateE52();
});

$('#calculations').on('keyup', '#indata-18', function(ev){
  calculateE25();
});



$('#calculations').on('click', '#radioPerson, #radioCompany', function(ev){
  calculateE25();
});

//make B, C and G

//Always use #calculations as the identifier in the $('#calculations')
//Then look in the excel sheet and in the formula for that cell there will be a number of different cells that make the calculations.
//Whenever any of these cells get changed, the calculations should be performed. This is all the other ids after the .on('keyup')
//So basically just copy this function and change the different ids to match the formula in your cell.
$('#calculations').on('keyup', '#indata-24, #indata-18, extended-60, indata-53, extended-56', function(ev){
calculateB();
calculateC();
calculateK();
calculateM();
calculateL();
});

$('#calculations').on('keyup', '#indata-28', function(ev){
  calculateC();
  calculateK();
  calculateM();
  calculateL();
});

$('#calculations').on('keyup', '#indata-24, #indata-28, #extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37, #extended-38, #extended-41, #extended-42, #extended-43, #extended-44, #extended-45, #extended-46', function(ev){
  calculateG();
});

//column K 
//(when changes are made to column A and C then you need to call this function as well, at least C column) <====== IMPORTANT
$('#calculations').on('keyup', '#extended-64, #indata-65, #indata-66, #indata-64', function(ev){
  calculateK();
});

//column M
//(when changes are made to column A and C then you need to call this function as well, at least C column) <====== IMPORTANT
$('#calculations').on('keyup', '#indata-24, #indata-68, #indata-60, #extended-65, #extended-66, #indata-28', function(ev){
  calculateM();
});

//column L 
//(when changes are made to column A and C then you need to call this function as well, at least C column) <====== IMPORTANT
$('#calculations').on('keyup', '#indata-24, #indata-67', function(ev){
  calculateL();
});

//Column D, E, F
$('#calculations').on('keyup', '#indata-32, #indata-35, #indata-36, #indata-37, #indata-38, #indata-33, #indata-24, #indata-28, #indata-35, #extended-17, #extended-18, #extended-16, #extended-24, #extended-23, #extended-50, #extended-51', function(ev){
  calculateE25();
});

//Column H, I, J
$('#calculations').on('keyup', '#indata-60, #indata-61, #indata-62, #indata-63', function(ev){
  calculateC();
});

$('#calculations').on('keyup', '#indata-60, #indata-61, #indata-62, #indata-63', function(ev){
  calculateC();
});

$('#calculations').on('keyup', '#indata-24', function(ev){
  calculateO();
  calculateQ();
  calculateS();
});


