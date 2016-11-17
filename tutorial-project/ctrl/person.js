//set module and controller that we can use in html/php file
angular.module('person', []).controller('personCtrl', function($scope, $http) {

//function for getting all persons
  $scope.getPersons = function (){
    $http.get("api/get_persons.php")
    //we get response back from the API when we do echo json_encode($data);
    //The $data variable will come back as response
    .success(function (response) {
      if(response.success == true){
        //if $data['success'] is set to true in get_persons.php this will execute
        $scope.persons = response.result;
        //When we set $scope.persons = something, we can use $scope.persons as
        // {{ persons }} in the html, (it is an array so we probably use {{ persons.something }} )
      }else {
        //if $data['success'] is set to false in get_persons.php this will execute
        $scope.persons_error = response.error;
      }
    });
  }

//function for adding a person to the database
  $scope.addPerson = function() {
    $http({
      //all the parameters that needs to be set
          method  : 'POST',
          url     : 'api/add_person.php',  //url is where we should send the post request
          data    : $.param($scope.formData),  /*To be able to send values through
          the $_POST variable we need to set $.param($scope.formData) where formData comes
          from the html and more specifically from an element with ng-model. In the html we
          have the input firstname with ng-model="formData.firstname" and the input Field
          lastname with ng-model="formData.lastname"*/
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })
    .success(function(response) {
        if (!response.success) {
           //if not successful, bind errors to error variables.
           //We can use these to display errors like "Firstname is required"
          $scope.errorFirstName = response.errors.firstname;
          //this we would use in html only as {{ errorFirstname since it is not an array }}
          $scope.errorLastName = response.errors.lastname;
        }
        //after adding a person we call getPersons to instantly update the html
        //with the new person
        $scope.getPersons();
      });
  }


});
