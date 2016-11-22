<html>
  <head>
    <meta charset="utf-8">
    <title>Add person</title>
    <link rel="stylesheet" type="text/css" href="lib/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="lib/css/bootstrap-theme.min.css">
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="lib/js/angular.min.js"></script>
    <script src="ctrl/person.js"></script>
  </head>
  <!--We need to set ng-app and ng-controller at tags that surround the elements
      that use that app and controller-->
  <body ng-app="person" ng-controller="personCtrl" ng-cloak>

    <div class="container-fluid">
<!--A form just needs ng-submit since the controller will tell that it is a POST method
    and where it will send the data-->
      <form ng-submit="addPerson()">
          <div class="form-group">
            <label for="firstname">First name:</label>
            <!--Here we set ng-model="formData.firstname" so we can send it with
            the $_POST variable as $_POST['firstname']-->
            <input type="text" class="form-control" name="firstname" ng-model="formData.firstname">
            <p>{{errorFirstName}}</p>
            <!--Here we set ng-model="formData.lastname" so we can send it with
            the $_POST variable as $_POST['lastname']-->
            <label for="lastname">Last name:</label>
            <input type="text" class="form-control" name="lastname" ng-model="formData.lastname">
            <p>{{errorLastName}}</p>
          </div>
          <button type="submit" class="btn btn-default">Add</button>
        </form>
    </div>


    <div class="container-fluid">
      <!--Here we set ng-init="getPersons()" so that when this div renders it
          will also call for getPersons and return a persons variable since we set
          $scope.persons = response.result in the controller function-->
      <div class="row" ng-init="getPersons()">
        <div class="col-md-10">
          <ul class="list-group">
            <!--ng-repeat is like a foreach and lets us use one person at a time-->
            <li class="list-group-item" ng-repeat="person in persons">
              <!--This is how we can use the variables clean and simple in html
                  because we get them in json-format -->
                Firstname: {{person.firstname}} <br> Lastname: {{person.lastname}}
            </li>
          </ul>
        </div>
    </div>


  </body>
</html>
