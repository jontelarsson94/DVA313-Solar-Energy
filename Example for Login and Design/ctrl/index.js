//set module and controller that we can use in html/php file
angular.module('index', []).controller('indexCtrl', function($scope, $http) {

  

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

  $scope.getCashflowTable = function (){
    for(var i = 4; i < 56; i++){
      $scope.table.push(i);
    }
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
    $("#indata-18").change(function () {
        alert("changee");
        Cal_extended_25();
    });
});

$('#input-tabs').on('mouseenter', '', function(ev){
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  //calculating p19
  var p18 = $( "#indata-18" ).val();
  var e12 = $( "#extended-12" ).val();
  var result = p18/(e12*0.01);
  $("#indata-19").val(Math.round(result));

    // calculating e25
  Cal_extended_25();

  //calculating e38 and p48
  var e30 = $( "#extended-30" ).val();
  var e31 = $( "#extended-31" ).val();
  var e32 = $( "#extended-32" ).val();
  var e33 = $( "#extended-33" ).val();
  var e34 = $( "#extended-34" ).val();
  var e35 = $( "#extended-35" ).val();
  var e36 = $( "#extended-36" ).val();
  var e37 = $( "#extended-37" ).val();
  result = +e30 + +e31 + +e32 + +e33 + +e34 + +e35 + +e36 + +e37;
  $( "#extended-38" ).val(result );
  $( "#indata-47" ).val(Math.round(result) );

  //Calculating e46 and p48
  var e41 = $( "#extended-41" ).val();
  var e42 = $( "#extended-42" ).val();
  var e43 = $( "#extended-43" ).val();
  var e44 = $( "#extended-44" ).val();
  var e45 = $( "#extended-45" ).val();
  result = +e41 + +e42 + +e43 + +e44 + +e45;
  $( "#extended-46" ).val(Math.round(result) );
  $( "#indata-48" ).val(Math.round(result) );
});

//calculating p19, p49
$('#private').on('keyup', '#indata-18', function(ev){
  var p18 = $( "#indata-18" ).val();
  var e12 = $( "#extended-12" ).val();
  var result = p18/(e12*0.01);
  $( "#indata-19" ).val( Math.round(result) );
  var p47 = $( "#indata-47" ).val();
  var p48 = $( "#indata-48" ).val();
  result = (+p47 + +p48)/p18
  $( "#indata-49" ).val( Math.round(result) );
});

//calculating e38, p47, p49
$('#extended').on('keyup', '#extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37', function(ev){
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

  var p18 = $( "#indata-18" ).val();
  var p47 = $( "#indata-47" ).val();
  var p48 = $( "#indata-48" ).val();
  result = (+p47 + +p48)/p18
  $( "#indata-49" ).val( Math.round(result) );
});

//calculating e46, p48, p49
$('#extended').on('keyup', '#extended-41, #extended-42, #extended-43, #extended-44, #extended-45', function(ev){
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
});

$('#extended').on('keyup', '#extended-50, #extended-51, #indata-28, #indata-24, #indata-18', function(ev){
  var e50 = $( "#extended-50" ).val();
  var e51 = $( "#extended-51" ).val();
  var p28 = $( "#indata-28" ).val();
  var p24 = $( "#indata-24" ).val();
  var p18 = $( "#indata-18" ).val();
  var result = (+e50 - +e51)/Math.pow((1+(p28 * 0.01)), p24)/p18;
  $( "#extended-52" ).val( Math.round(result) );
});

$('#private').on('keyup', '#indata-18', function(ev){
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
});



$('#private').on('click', '#radioPerson, #radioCompany', function(ev){
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
});
<<<<<<< HEAD
=======

//make B, C and G

//Always use #calculations as the identifier in the $('#calculations')
//Then look in the excel sheet and in the formula for that cell there will be a number of different cells that make the calculations.
//Whenever any of these cells get changed, the calculations should be performed. This is all the other ids after the .on('keyup')
//So basically just copy this function and change the different ids to match the formula in your cell.
$('#calculations').on('keyup', '#indata-24, #indata-18, extended-60, indata-53, extended-56', function(ev){
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

//This is added because C column also needs to change values when B column does
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
});

$('#calculations').on('keyup', '#indata-28', function(ev){
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
});

$('#calculations').on('keyup', '#indata-24, #indata-28, #extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37, #extended-38, #extended-41, #extended-42, #extended-43, #extended-44, #extended-45, #extended-46', function(ev){
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
});
>>>>>>> origin/master
