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

  $scope.getExtendedDefaults = function (){
    $http.get("api/get_extended_defaults.php")

    .success(function (response) {
      if(response.success == true){
        $scope.extended_defaults = response.defaults;
      }else {

      }
    });
  }


});


$('[data-toggle="tooltip"]').tooltip();

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$('#input-tabs').on('mouseenter', '', function(ev){
  $('[data-toggle="tooltip"]').tooltip();

  //calculating p19
  var p18 = $( "#person-18" ).val();
  var e12 = $( "#extended-12" ).val();
  var result = p18/(e12*0.01);
  $( "#person-19" ).val( Math.round(result) );

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
  $( "#person-47" ).val(Math.round(result) );

  //Calculating e46 and p48
  var e41 = $( "#extended-41" ).val();
  var e42 = $( "#extended-42" ).val();
  var e43 = $( "#extended-43" ).val();
  var e44 = $( "#extended-44" ).val();
  var e45 = $( "#extended-45" ).val();
  result = +e41 + +e42 + +e43 + +e44 + +e45;
  $( "#extended-46" ).val(Math.round(result) );
  $( "#person-48" ).val(Math.round(result) );
});

//calculating p19, p49
$('#private').on('keyup', '#person-18', function(ev){
  var p18 = $( "#person-18" ).val();
  var e12 = $( "#extended-12" ).val();
  var result = p18/(e12*0.01);
  $( "#person-19" ).val( Math.round(result) );
  var p47 = $( "#person-47" ).val();
  var p48 = $( "#person-48" ).val();
  result = (+p47 + +p48)/p18
  $( "#person-49" ).val( Math.round(result) );
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
  $( "#person-47" ).val(Math.round(result) );

  var p18 = $( "#person-18" ).val();
  var p47 = $( "#person-47" ).val();
  var p48 = $( "#person-48" ).val();
  result = (+p47 + +p48)/p18
  $( "#person-49" ).val( Math.round(result) );
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
  $( "#person-48" ).val(Math.round(result) );

  var p18 = $( "#person-18" ).val();
  var p47 = $( "#person-47" ).val();
  var p48 = $( "#person-48" ).val();
  result = (+p47 + +p48)/p18
  $( "#person-49" ).val( Math.round(result) );
});

$('#extended').on('keyup', '#extended-50, #extended-51, #person-28, #person-24, #person-18', function(ev){
  var e50 = $( "#extended-50" ).val();
  var e51 = $( "#extended-51" ).val();
  var p28 = $( "#person-28" ).val();
  var p24 = $( "#person-24" ).val();
  var p18 = $( "#person-18" ).val();
  var result = (+e50 - +e51)/Math.pow((1+(p28 * 0.01)), p24)/p18;
  $( "#extended-52" ).val( Math.round(result) );
});
