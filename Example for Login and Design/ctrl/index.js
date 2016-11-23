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
});

$('#private').on('keyup', '#person-18', function(ev){
  var p18 = $( "#person-18" ).val();
  var e12 = $( "#extended-12" ).val();
});
