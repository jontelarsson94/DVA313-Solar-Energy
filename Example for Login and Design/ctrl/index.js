//set module and controller that we can use in html/php file
angular.module('index', []).controller('indexCtrl', function($scope, $http) {

  $scope.number = 112;

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

/*******************************
*  Whats left is:              *
*  Indata-55                   *
*  Indata-72                   *
*  Indata-73                   *
*  Indata-74                   *
*  Indata-83                   *
*  Indata-84                   *
*  Indata-88                   *
*  Indata-89                   *
*  Indata-93                   *
*  Indata-94                   *
********************************/

function IRR(values, guess) {
  // Credits: algorithm inspired by Apache OpenOffice
  
  // Calculates the resulting amount
  var irrResult = function(values, dates, rate) {
    var r = rate + 1;
    var result = values[0];
    for (var i = 1; i < values.length; i++) {
      result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
    }
    return result;
  }

  // Calculates the first derivation
  var irrResultDeriv = function(values, dates, rate) {
    var r = rate + 1;
    var result = 0;
    for (var i = 1; i < values.length; i++) {
      var frac = (dates[i] - dates[0]) / 365;
      result -= frac * values[i] / Math.pow(r, frac + 1);
    }
    return result;
  }

  // Initialize dates and check that values contains at least one positive value and one negative value
  var dates = [];
  var positive = false;
  var negative = false;
  for (var i = 0; i < values.length; i++) {
    dates[i] = (i === 0) ? 0 : dates[i - 1] + 365;
    if (values[i] > 0) positive = true;
    if (values[i] < 0) negative = true;
  }
  
  // Return error if values does not contain at least one positive value and one negative value
  if (!positive || !negative) return '#NUM!';

  // Initialize guess and resultRate
  var guess = (typeof guess === 'undefined') ? 0.1 : guess;
  var resultRate = guess;
  
  // Set maximum epsilon for end of iteration
  var epsMax = 1e-10;
  
  // Set maximum number of iterations
  var iterMax = 50;

  // Implement Newton's method
  var newRate, epsRate, resultValue;
  var iteration = 0;
  var contLoop = true;
  do {
    resultValue = irrResult(values, dates, resultRate);
    newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
    epsRate = Math.abs(newRate - resultRate);
    resultRate = newRate;
    contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
  } while(contLoop && (++iteration < iterMax));

  if(contLoop) return '#NUM!';

  // Return internal rate of return
  return resultRate;
}

function calculateI84(){
  var cashFlowArray = new Array();
  for(var i = 60; i <= 110; i++){
    cashFlowArray.push(parseInt($( "#n-"+i ).val()))
  }
  var i84 = IRR(cashFlowArray, 0.0000001);
  i84 = i84*100;
  $( "#indata-84" ).val(i84.toFixed(1));
}

function calculateI89(){
  var cashFlowArray = new Array();
  for(var i = 60; i <= 110; i++){
    cashFlowArray.push(parseInt($( "#p-"+i ).val()))
  }
  var i89 = IRR(cashFlowArray, 0.0000001);
  i89 = i89*100;
  $( "#indata-89" ).val(i89.toFixed(1));
}

function calculateI94(){
  var cashFlowArray = new Array();
  for(var i = 60; i <= 110; i++){
    cashFlowArray.push(parseInt($( "#r-"+i ).val()))
  }
  var i94 = IRR(cashFlowArray, 0.0000001);
  i94 = i94*100;
  $( "#indata-94" ).val(i94.toFixed(1));
}


function drawLineChart1() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'År');
   data.addColumn('number', 'Kassaflöde');

   //some necessary variables
   var ekonomisk_livslangd = parseInt($( "#indata-24" ).val());
   var currentO = 0;

   //loop through the rows 4-54 of O column
   for(var i = 4; i < 55; i++){

     if(i <= (ekonomisk_livslangd + 4)) {
       //get the value of the current O column's cell
       currentO = parseInt($( "#o-" + i ).val());

       //add the values (year, cell value) to the linear diagram
       data.addRows([[((i-4).toString()), currentO]]);
    }
   }

   // Set chart options
   var options = {'title' : 'Ackumulerat nuvärde - Utan ROT-avdrag eller investeringsstöd',
      hAxis: {
         title: 'År'
      },
      vAxis: {
         title: 'Ackumelerat nuvärde (kr)'
      },
      'height':400,
      pointsVisible: true
   };

   // Instantiate and draw the chart.
   var chart = new google.visualization.LineChart(document.getElementById('lineChart1'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("lineChart1").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function drawLineChart2() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'År');
   data.addColumn('number', 'Kassaflöde');

   //some necessary variables
   var ekonomisk_livslangd = parseInt($( "#indata-24" ).val());
   var currentO = 0;

   //loop through the rows 4-54 of O column
   for(var i = 4; i < 55; i++){

     if(i <= (ekonomisk_livslangd + 4)) {
       //get the value of the current O column's cell
       currentO = parseInt($( "#q-" + i ).val());

       //add the values (year, cell value) to the linear diagram
       data.addRows([[((i-4).toString()), currentO]]);
    }
   }

   // Set chart options
   var options = {'title' : 'Ackumulerat nuvärde - Med ROT-avdrag',
      hAxis: {
         title: 'År'
      },
      vAxis: {
         title: 'Ackumelerat nuvärde (kr)'
      },
      'height':400,
      pointsVisible: true
   };

   // Instantiate and draw the chart.
   var chart = new google.visualization.LineChart(document.getElementById('lineChart2'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("lineChart2").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function drawLineChart3() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'År');
   data.addColumn('number', 'Kassaflöde');

   //some necessary variables
   var ekonomisk_livslangd = parseInt($( "#indata-24" ).val());
   var currentO = 0;

   //loop through the rows 4-54 of O column
   for(var i = 4; i < 55; i++){

     if(i <= (ekonomisk_livslangd + 4)) {
       //get the value of the current O column's cell
       currentO = parseInt($( "#s-" + i ).val());

       //add the values (year, cell value) to the linear diagram
       data.addRows([[((i-4).toString()), currentO]]);
    }
   }

   // Set chart options
   var options = {'title' : 'Ackumulerat nuvärde - Med investeringsstöd',
      hAxis: {
         title: 'År'
      },
      vAxis: {
         title: 'Ackumelerat nuvärde (kr)'
      },
      'height':400,
      pointsVisible: true
   };

   // Instantiate and draw the chart.
   var chart = new google.visualization.LineChart(document.getElementById('lineChart3'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("lineChart3").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

//when changes are made to d-55 and g-55, fire the "google.charts.setOnLoadCallback(drawPieChart1);"
function drawPieChart1() {

   //some necessary variables
   var investering = parseInt($( "#d-55" ).val());
   var arliga_kostnader = parseInt($( "#g-55" ).val());
   var total_summa = investering + arliga_kostnader;

   var localeInvestering = investering.toLocaleString();
   var localeArliga_kostnader = arliga_kostnader.toLocaleString();
   var localeTotal_summa = total_summa.toLocaleString();

   //find out what percentage a number is of the total sum
   investering = (investering / total_summa) * 100;
   arliga_kostnader = (arliga_kostnader / total_summa) * 100;

   var investering_str = "Investering = " + localeInvestering + " kr";
   var arliga_kostnader_str = "Årliga kostnader = " + localeArliga_kostnader + " kr";

   // Define the chart to be drawn
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Calculation');
   data.addColumn('number', 'Percentage');
   data.addRows([
      [investering_str, investering],
      [arliga_kostnader_str, arliga_kostnader]
   ]);

   // Set chart options
   var options = {'title':'Kostnader utan ROT-avdrag och investeringsstöd',
      'height':400};

   // Instantiate and draw the chart.
   var chart = new google.visualization.PieChart(document.getElementById('pieChart1'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("pieChart1").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function drawPieChart2() {

   //some necessary variables
   var investering = parseInt($( "#e-55" ).val());
   var arliga_kostnader = parseInt($( "#g-55" ).val());
   var total_summa = investering + arliga_kostnader;

   var localeInvestering = investering.toLocaleString();
   var localeArliga_kostnader = arliga_kostnader.toLocaleString();
   var localeTotal_summa = total_summa.toLocaleString();

   //find out what percentage a number is of the total sum
   investering = (investering / total_summa) * 100;
   arliga_kostnader = (arliga_kostnader / total_summa) * 100;

   var investering_str = "Investering = " + localeInvestering + " kr";
   var arliga_kostnader_str = "Årliga kostnader = " + localeArliga_kostnader + " kr";

   // Define the chart to be drawn
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Calculation');
   data.addColumn('number', 'Percentage');
   data.addRows([
      [investering_str, investering],
      [arliga_kostnader_str, arliga_kostnader]
   ]);

   // Set chart options
   var options = {'title':'Kostnader med ROT-avdrag',
      'height':400};

   // Instantiate and draw the chart.
   var chart = new google.visualization.PieChart(document.getElementById('pieChart2'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("pieChart2").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function drawPieChart3() {

   //some necessary variables
   var investering = parseInt($( "#f-55" ).val());
   var arliga_kostnader = parseInt($( "#g-55" ).val());
   var total_summa = investering + arliga_kostnader;

   var localeInvestering = investering.toLocaleString();
   var localeArliga_kostnader = arliga_kostnader.toLocaleString();
   var localeTotal_summa = total_summa.toLocaleString();

   //find out what percentage a number is of the total sum
   investering = (investering / total_summa) * 100;
   arliga_kostnader = (arliga_kostnader / total_summa) * 100;

   var investering_str = "Investering = " + localeInvestering + " kr";
   var arliga_kostnader_str = "Årliga kostnader = " + localeArliga_kostnader + " kr";

   // Define the chart to be drawn
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Calculation');
   data.addColumn('number', 'Percentage');
   data.addRows([
      [investering_str, investering],
      [arliga_kostnader_str, arliga_kostnader]
   ]);

   // Set chart options
   var options = {'title':'Kostnader med investeringsstöd',
      'height':400};

   // Instantiate and draw the chart.
   var chart = new google.visualization.PieChart(document.getElementById('pieChart3'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("pieChart3").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function CalculateSecondDEF() {
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
            -(Kostnad_vaxelriktarbyte * Installerad_effekt)
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

    calculateSecondN();
    calculateSecondP();
    calculateSecondR();
}

//calculate production cost for the cell D72
//in the tab "dina indata & result" in the given excel file
function calculateProductionCostD72() {

  //start the calculation and save the result in a variable - send in "41" for cell D41
  var productionCostD72 = calculateProductionCost("41");

  //assign the result to the correct input box on the website
  $( "#indata-72" ).val( productionCostD72 );
}


//calculate production cost for the cell D73
//in the tab "dina indata & result" in the given excel file
function calculateProductionCostD73() {

  //start the calculation and save the result in a variable - send in "42" for cell D42
  var productionCostD73 = calculateProductionCost("42");

  //assign the result to the correct input box on the website
  $( "#indata-73" ).val( productionCostD73 );
}


//calculate production cost for the cell D74
//in the tab "dina indata & result" in the given excel file
function calculateProductionCostD74() {

  //start the calculation and save the result in a variable - send in "43" for cell D43
  var productionCostD74 = calculateProductionCost("43");

  //assign the result to the correct input box on the website
  $( "#indata-74" ).val( productionCostD74 );
}

function calcPv(rate, nper, pmt) {

  var pv_value = 0;
  var x = 0;
  var y = 0;

  if ( rate == 0 ) { // Interest rate is 0
    pv_value = -((pmt * nper));
  } else {
    x = Math.pow(1 + rate, -nper);
    y = Math.pow(1 + rate, nper);
    pv_value = - ( x * ( rate - pmt + y * pmt )) / rate;
  }
  return (pv_value);
}

//calculate the production cost
//(you have to send in either "41", "42" or "43" to this function)
function calculateProductionCost(X){

  //some error handling if you do not send in "41", "42" or "43" to the function:
  if(X != "41" && X != "42" && X != "43"){
    console.log("ERROR: input parameter to the function 'calculateProductionCost' is not '41', '42' or '43'");
    return 0;
  }

  //300/(1+.0938)^1 + 300/(1+.0938)^2 + 300/(1+.0938)^3
  //(9.38, 3, 300)
  //(D28, D24, -D49)
  //values from the tab "indata & result" in the given excel file:
  var inDX = parseInt($( "#indata-" + X ).val()); //here you will retrieve the value of either cell D41, D42 or D43
  var inD28 = parseInt($( "#indata-28" ).val()) / 100;
  var inD24 = parseInt($( "#indata-24" ).val());
  var inD49 = parseInt($( "#indata-49" ).val());
  var inD18 = parseInt($( "#indata-18" ).val());
  //value from the tab "grundläggande antaganden" in the given excel file:
  var extD52 = parseInt($( "#extended-52" ).val());
  //value from the tab "kassaflöden" in the given excel file:
  var cashflowC55 = parseInt($( "#c-55" ).val());

  //for i = 1; i <= D24; i++{

  var pv = calcPv(inD28, inD24, -inD49);

  //-('Grundläggande antaganden'!D52)/(1+D28)^D24)/(Kassaflöden!C55/D18)

  //perform the calculation for production cost
  //(D41+NUVÄRDE(D28;D24;-D49)-('Grundläggande antaganden'!D52)/(1+D28)^D24)/(Kassaflöden!C55/D18)
  //"inD49 / Math.pow((1 + inD28), inD24))" - same formula as "nuvärde år n = A / (1+kalkylränta)^n":
  var productionCost = (inDX + (pv) - (extD52) / (Math.pow((1 + inD28), inD24))) / (cashflowC55 / inD18);
  //return the calculated production cost but with only 3 decimals:
  return (productionCost.toFixed(3));
}

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

}


function calculateI55(){
  var e64 = parseInt($( "#extended-64" ).val());
  var sum = 0; //set sum counter to 0
  var currentA, currentB = 0;

  //loop through row 4-54 in column A and B of the cashflow table
  for(var i = 4; i < 55; i++){
  //retrieve the current A and B cell's value
    currentA = parseInt($( "#a-" + i ).val());
    currentB = parseInt($( "#b-" + i ).val());

  //if currentA <= "elcertifikatår" then add currentB to the sum
  if(currentA <= e64)
    sum = sum + currentB;
  }

  sum = Math.round(sum); //get spaces between the numbers (easier to read), and round the result.

  $( "#indata-55" ).val(sum);
}

function calculateI41(){
  $("#indata-41").val(  -Math.round(parseInt($("#d-55").val())/parseInt($("#indata-18").val())) );
}

function calculateI42(){
  $("#indata-42").val(  -Math.round(parseInt($("#e-55").val())/parseInt($("#indata-18").val())) );
}

function calculateI43(){
  $("#indata-43").val(  -Math.round(parseInt($("#f-55").val())/parseInt($("#indata-18").val())) );
}

function calculateI54(){
  $("#indata-54").val(  Math.round(parseInt($("#b-55").val())) );
}

function calculateI82(){
  $("#indata-82").val(  parseInt($("#n-55").val()) );
}

function calculateI87(){
  $("#indata-87").val(  parseInt($("#p-55").val()) );
}

function calculateI92(){
  $("#indata-92").val(  parseInt($("#r-55").val()) );
}

function calculateSecondS(){
  $("#s-60").val(  parseInt($("#r-60").val()) );

    for(var i = 61; i < 111; i++){
        if( parseInt($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#s-"+i).val(  parseInt($("#s-"+(i-1)).val()) +  parseInt($("#r-"+i).val()) );
    }
}

function calculateS(){
  $("#s-4").val(  parseInt($("#r-4").val()) );

    for(var i = 5; i < 55; i++){
        if( parseInt($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#s-"+i).val(  parseInt($("#s-"+(i-1)).val()) +  parseInt($("#r-"+i).val()) );
    }
    calculateD93();
}

function calculateSecondR(){
  var r111 = 0;

    for(var i = 60; i < 111; i++){
            $("#r-"+i).val(  parseInt($("#f-"+i).val()) +  parseInt($("#g-"+i).val()) +  parseInt($("#h-"+i).val()) +  parseInt($("#i-"+i).val()) +  parseInt($("#j-"+i).val()) +  parseInt($("#k-"+i).val()) +  parseInt($("#l-"+i).val()) +  parseInt($("#m-"+i).val()) );
            r111 = r111 +  parseInt($("#r-"+i).val());
    }
    $("#r-111").val(r111); 
    calculateSecondS();
}

function calculateR(){
  var r55 = 0;

    for(var i = 4; i < 55; i++){
            $("#r-"+i).val(  parseInt($("#f-"+i).val()) +  parseInt($("#g-"+i).val()) +  parseInt($("#h-"+i).val()) +  parseInt($("#i-"+i).val()) +  parseInt($("#j-"+i).val()) +  parseInt($("#k-"+i).val()) +  parseInt($("#l-"+i).val()) +  parseInt($("#m-"+i).val()) );
            r55 = r55 +  Math.round(parseInt($("#r-"+i).val()));
    }
    $("#r-55").val(r55);
    calculateS();
    calculateI92();
}

function calculateSecondQ(){
  $("#q-60").val(  parseInt($("#p-60").val()) );

    for(var i = 61; i < 111; i++){
        if( parseInt($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#q-"+i).val(  parseInt($("#q-"+(i-1)).val()) +  parseInt($("#p-"+i).val()) );
    }
}

function calculateQ(){
  $("#q-4").val(  parseInt($("#p-4").val()) );

    for(var i = 5; i < 55; i++){
        if( parseInt($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#q-"+i).val(Math.round(  Math.round(parseInt($("#q-"+(i-1)).val())) +  Math.round(parseInt($("#p-"+i).val())) ));
    }
    calculateD88();
}

function calculateSecondO(){
  $("#o-60").val(  parseInt($("#n-60").val()) );

    for(var i = 61; i < 111; i++){
        if( parseInt($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#o-"+i).val(Math.round(  Math.round(parseInt($("#o-"+(i-1)).val())) +  Math.round(parseInt($("#n-"+i).val())) ));
    }
    //calculateD83();
    //google.charts.setOnLoadCallback(drawLineChart1);
}

function calculateO(){
  $("#o-4").val(  parseInt($("#n-4").val()) );

    for(var i = 5; i < 55; i++){
        if( parseInt($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#o-"+i).val(Math.round(  Math.round(parseInt($("#o-"+(i-1)).val())) +  Math.round(parseInt($("#n-"+i).val())) ));
    }
    calculateD83();
}

function calculateSecondN(){
  var n111 = 0;

    for(var i = 60; i < 111; i++){
            $("#n-"+i).val(Math.round(  parseInt($("#d-"+i).val()))
                          +  Math.round(parseInt($("#g-"+i).val()))
                          +  Math.round(parseInt($("#h-"+i).val()))
                          +  Math.round(parseInt($("#i-"+i).val()))
                          +  Math.round(parseInt($("#j-"+i).val()))
                          +  Math.round(parseInt($("#k-"+i).val()))
                          +  Math.round(parseInt($("#l-"+i).val()))
                          +  Math.round(parseInt($("#m-"+i).val())));
            n111 = n111 +  Math.round(parseInt($("#n-"+i).val()));
    }
    $("#n-111").val(n111);
    calculateSecondO();
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
    calculateI82();
}

function calculateSecondP(){
  var p111 = 0;

    for(var i = 60; i < 111; i++){
            $("#p-"+i).val( Math.round( parseInt($("#e-"+i).val()))
                          +  Math.round(parseInt($("#g-"+i).val()))
                          +  Math.round(parseInt($("#h-"+i).val()))
                          +  Math.round(parseInt($("#i-"+i).val()))
                          +  Math.round(parseInt($("#j-"+i).val()))
                          +  Math.round(parseInt($("#k-"+i).val()))
                          +  Math.round(parseInt($("#l-"+i).val()))
                          +  Math.round(parseInt($("#m-"+i).val())) );
            p111 = p111 +  Math.round(parseInt($("#p-"+i).val()));
    }
    $("#p-111").val(Math.round(p111));
    //calculateQ();
    //calculateI87();
    calculateSecondQ()
}

function calculateP(){
  var p55 = 0;

    for(var i = 4; i < 55; i++){
            $("#p-"+i).val( Math.round( parseInt($("#e-"+i).val()))
                          +  Math.round(parseInt($("#g-"+i).val()))
                          +  Math.round(parseInt($("#h-"+i).val()))
                          +  Math.round(parseInt($("#i-"+i).val()))
                          +  Math.round(parseInt($("#j-"+i).val()))
                          +  Math.round(parseInt($("#k-"+i).val()))
                          +  Math.round(parseInt($("#l-"+i).val()))
                          +  Math.round(parseInt($("#m-"+i).val())) );
            p55 = p55 +  Math.round(parseInt($("#p-"+i).val()));
    }
    $("#p-55").val(Math.round(p55));
    calculateQ();
    calculateI87();
}

function calculateSecondH() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val()) / 100;
    var Pris_kopt_el = $("#indata-61").val();
    /*alert("Ekonomisk_livslangd-"+Ekonomisk_livslangd);
    alert("Andel_egenanvand_el-"+Andel_egenanvand_el);
    alert("Pris_kopt_el-"+Pris_kopt_el);*/
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
    calculateSecondN();
    calculateSecondP();
    calculateSecondR();
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
            var valh = Math.round(parseInt($("#c-" + j).val()) * Andel_egenanvand_el * Pris_kopt_el);
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
    calculateSecondH();
}

function calculateSecondI() {
    var Ekonomisk_livslangd = parseInt($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val()) / 100;
    var Pris_sald_el = $("#indata-62").val();
    var i = 1;
    var j = 61;
    var sum = 0;
    //OM(Ekonomisk_livslängd>=A61;B61*(1-Andel_egenanvänd_el)*Pris_såld_el;0)
    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var ival = Math.round(parseInt($("#b-" + j).val()) *  (1-Andel_egenanvand_el) * Pris_sald_el);
            $("#i-" + j).val(ival);
            sum = sum + ival;
        } else {
            $("#i-" + j).val(0);
        }
        j++;
    }
    //alert("i-"+sum);
    $("#i-111").val(sum);
    calculateSecondN();
    calculateSecondP();
    calculateSecondR();
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
            var ival = Math.round(parseInt($("#c-" + j).val()) * (1 - Andel_egenanvand_el) * Pris_sald_el);
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
    calculateSecondI();
}

function calculateSecondJ() {
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
    calculateSecondN();
    calculateSecondP();
    calculateSecondR();
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
            var jval = Math.round(parseInt($("#c-" + j).val()) * Ersattning_fran_natagare * (1 - Andel_egenanvand_el));
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
    calculateSecondJ();

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
        $("#e-4").val(Math.round(e_4val));
        e_55val = Math.round(e_4val);
        //  -(Investeringskostnad*Installerad_effekt*(1-ROT_avdrag)+SUM('Dina indata & Resultat'!D35:D38))"
    } else {
        // -(Investeringskostnad*Installerad_effekt-Tak_ROT_avdrag+SUM('Dina indata & Resultat'!D35:D38))
        var e_4val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_ROT_avdrag) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#e-4").val(Math.round(e_4val));
        e_55val = Math.round(e_4val);
    }

    //Investeringskostnad*Installerad_effekt*Investeringsstod<=Tak_Investeringsstod
    if (Investeringskostnad * Installerad_effekt * Investeringsstod <= Tak_Investeringsstod) {
        //-(Investeringskostnad*Installerad_effekt*(1-Investeringsstod)+SUM('Dina indata & Resultat'!D35:D38))
        var f_4val = (-1) * ((Investeringskostnad * Installerad_effekt * (1 - Investeringsstod)) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-4").val(Math.round(f_4val));
        f_55val = Math.round(f_4val);
    } else {
        //-(Investeringskostnad*Installerad_effekt-Tak_Investeringsstod+SUM('Dina indata & Resultat'!D35:D38))
        var f_4val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_Investeringsstod) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-4").val(Math.round(f_4val));
        f_55val = Math.round(f_4val);
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

        var sum = Math.round(val1) + Math.round(val2);
        //alert(sum);
        d_55val = d_55val + Math.round(sum);
        e_55val = e_55val + Math.round(sum);
        f_55val = f_55val + Math.round(sum);

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
    calculateI41();
    calculateI42();
    calculateI43();
    CalculateSecondDEF();

}

function calculateSecondB(){
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var result = $( "#b-" + i ).val();
    var second = i+56;
    //give the cell (input field) that value
    $( "#b-" + second ).val( Math.round(result) );
  }
  var sum = $( "#b-55" ).val();
  //give the sum-cell the value of all the cells together
  $( "#b-111" ).val( Math.round(sum) );

  calculateSecondH();
  calculateSecondI();
  calculateSecondJ();
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
      result = Math.round(p18 * e60 * p53 * (Math.pow((1-e56), (current-1))));
      //
      sum = sum + result;
    }
    //give the cell (input field) that value
    $( "#b-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#b-55" ).val( Math.round(sum) );

  calculateI54();
  calculateI55();
  calculateSecondB();
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
    var result = Math.round(currentB/Math.pow((1+p28), currentA));
    sum = sum + result;
    $( "#c-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#c-55" ).val( Math.round(sum) );
  calculateH();
  calculateI();
  calculateJ();
  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
}

function calculateSecondG(){
  //OM(A62<=Ekonomisk_livslängd;-(Årlig_fast_driftkostnad+Årlig_rörlig_driftkostnad);0)

  var p24 = parseInt($("#indata-24").val());
  //p28 = p28 / 100;
  var p47 = parseInt($("#indata-47").val());
  var p48 = parseInt($("#indata-48").val());
  //set sum counter to 0
  var sum = 0;
  var result = 0;
  var j = 1;
  //loop through all the ids for that column
  //skipping 8-13
  for(var i = 60; i < 111; i++){
    //var currentA = $( "#a-" + i ).val();

    if(j <= +p24){
      result = -(p47+p48);
      sum = sum + Math.round(result);
    }
    $( "#g-" + i ).val( Math.round(result) );
    result = 0;
    j++;
  }
  //give the sum-cell the value of all the cells together
  $( "#g-111" ).val( Math.round(sum) );
  calculateSecondN();
  calculateSecondP();
  calculateSecondR();
}


function calculateG(){
  var p24 = parseInt($("#indata-24").val());
  var p28 = parseInt($("#indata-28").val())/100;
  //p28 = p28 / 100;
  var p47 = parseInt($("#indata-47").val());
  var p48 = parseInt($("#indata-48").val());
  //set sum counter to 0
  var sum = 0;
  var result = 0;
  var j = 1;
  //loop through all the ids for that column
  //skipping 8-13
  for(var i = 5; i < 55; i++){
    //var currentA = $( "#a-" + i ).val();
    if(j <= +p24){
      result = -(p47+p48)/Math.pow((1+p28), j);
      sum = sum + Math.round(result);
    }
    $( "#g-" + i ).val( Math.round(result) );
    result = 0;
    j++;
  }
  //give the sum-cell the value of all the cells together
  $( "#g-55" ).val( Math.round(sum) );
  calculateN();
  calculateP();
  calculateR();
  calculateSecondG();
}

//CALCULATE SECOND CASHFLOW TABLE COLUMNS K,L,M:
function calculateSecondK(){
  var p64 = $( "#indata-64" ).val();
  var p65 = $( "#indata-65" ).val();
  p65 = p65 / 100; // divide by 100 since it is a % unit
  var p66 = $( "#indata-66" ).val();
  p66 = p66 / 100;
  var e64 = $( "#extended-64" ).val();
  var sum = 0; //set sum counter to 0

  var currentA, currentB = 0;
  var result = 0;
  
  //loop through the necessary ids for that column (row 61-110)
  for(var i = 61; i < 111; i++){
    currentA = $( "#a-" + i ).val();
    currentB = $( "#b-" + i ).val();
    result = 0;

    if(+e64 >= +currentA)
      //perform the calculation and save the result in a variable
      result = Math.round( currentB * p65 * (1-p66) * p64 );
    //else result = 0

    $( "#k-" + i ).val( result ); //give the specific cell (input field) that value
    sum = sum + result; //increase the sum
  }

  $( "#k-111" ).val( sum ); //give the sum-cell the total calculated sum
  calculateSecondN();
  calculateSecondP();
  calculateSecondR();
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
  calculateSecondK();
  calculateN();
  calculateP();
  calculateR();
}

function calculateSecondM(){
  var p24 = $( "#indata-24" ).val();
  var p28 = $( "#indata-28" ).val();
  p28 = p28 / 100; // divide by 100 since it is a % unit
  var p60 = $( "#indata-60" ).val();
  p60 = p60 / 100;
  var p68 = $( "#indata-68" ).val();
  var e65 = $( "#extended-65" ).val();
  var e66 = $( "#extended-66" ).val();
  var sum = 0; //set sum counter to 0

  var currentA, currentB = 0;
  var result = 0;
  
  //loop through the necessary ids for that column (row 61-110)
  for(var i = 61; i < 111; i++){
    currentA = $( "#a-" + i ).val();
    currentB = $( "#b-" + i ).val();
    result = 0;

    //perform calculations if necessary
    if(+p24 >= +currentA && +p68 >= +currentA) {
      if((currentB * (1-p60) * e65) > (+e66))
        result = Math.round(18000 / Math.pow((1+p28), currentA));
      else
        result = Math.round(currentB * (1-p60) * e65);
    }
    //else result = 0;

    $( "#m-" + i ).val( result ); //give the specific cell (input field) that value
    sum = sum + result; //increase the sum
  }

  $( "#m-111" ).val( sum ); //give the sum-cell the total calculated sum
  calculateSecondN();
  calculateSecondP();
  calculateSecondR();
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
        result = Math.round(18000 / Math.pow((1+p28), currentA));
      else
        result = Math.round(currentC * (1-p60) * e65);
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
  calculateSecondM();
  calculateN();
  calculateP();
  calculateR();
}

function calculateSecondL(){
  var p24 = $( "#indata-24" ).val();
  var p67 = $( "#indata-67" ).val();
  var sum = 0; //set sum counter to 0

  var currentA, currentB = 0;
  var result = 0;
  
  //loop through the necessary ids for that column (row 61-110)
  for(var i = 61; i < 111; i++){
    currentA = $( "#a-" + i ).val();
    currentB = $( "#b-" + i ).val();
    result = 0;

    if(+p24 >= +currentA)
      //perform the calculation and save the result in a variable
      result = Math.round( currentB * p67 );
    //else result = 0

    $( "#l-" + i ).val( result ); //give the specific cell (input field) that value
    sum = sum + ( result ); //increase the sum
  }

  $( "#l-111" ).val( sum );
  calculateSecondN();
  calculateSecondP();
  calculateSecondR();
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
  calculateSecondL();
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

  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
}

//This doesnt work the first time we enter with mouse, but second time it works?
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

  //alert(result);
  calculateI49();
  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
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

  calculateI49();
  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
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
  calculateE46AndI48();

  //calculating e38 and p48
  calculateE38AndI47();
  calculateI49();
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

  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();


});

$('#buttonArea').on('mouseleave', '', function(ev){
  //calculating p19
  calculateI19();
  calculateE25();
  calculateE52();
  calculateI25();
  calculateE46AndI48();

  //calculating e38 and p48
  calculateE38AndI47();
  calculateI49();
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

  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();

  alert($( "#n-111" ).val());
  alert($( "#p-111" ).val());
  alert($( "#r-111" ).val());

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



$('#calculations').on('click', '#personToggle, #companyToggle', function(ev){

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
  calculateSecondO();
  calculateSecondQ();
  calculateSecondS();
});

$('#calculations').on('keyup', '#indata-18', function(ev){
  calculateI41();
  calculateI42();
  calculateI43();
});

$('#calculations').on('keyup', '#indata-41, #indata-42, #indata-43, #indata-28, #indata-24, #indata-49, #indata-18, #extended-52', function(ev){
  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
});

$('#calculations').on('keyup', '#extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37, #extended-41, #extended-42, #extended-43, #extended-44, #extended-45', function(ev){
  calculateE38AndI47();
  calculateE46AndI48();
});

$('#calculations').on('change', '#extended-64', function(ev){
  calculateI55();
});

$('#calculations').on('click', '#click-84', function(ev){
  calculateI84();
});

$('#calculations').on('click', '#click-89', function(ev){
  calculateI89();
});

$('#calculations').on('click', '#click-94', function(ev){
  calculateI94();
});

$("#diagramBtn").click(function(){
  google.charts.setOnLoadCallback(drawLineChart1);
  google.charts.setOnLoadCallback(drawLineChart2);
  google.charts.setOnLoadCallback(drawLineChart3);
  google.charts.setOnLoadCallback(drawPieChart1);
  google.charts.setOnLoadCallback(drawPieChart2);
  google.charts.setOnLoadCallback(drawPieChart3);
});

$("#createPDFBtn").click(function(){
  google.charts.setOnLoadCallback(drawLineChart1);
  google.charts.setOnLoadCallback(drawLineChart2);
  google.charts.setOnLoadCallback(drawLineChart3);
  google.charts.setOnLoadCallback(drawPieChart1);
  google.charts.setOnLoadCallback(drawPieChart2);
  google.charts.setOnLoadCallback(drawPieChart3);
  calculateI84();
  calculateI89();
  calculateI94();
});
