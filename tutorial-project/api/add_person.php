<?php

require_once "../inc/db_credentials.php";
//Arrays
$errors = array();
$data = array();
//Check conditions/Validation
if (empty($_POST['firstname']))
  $errors['firstname'] = 'Firstname is required.';

if (empty($_POST['lastname']))
  $errors['lastname'] = 'Lastname is required.';

//Set return statement
if (!empty($errors)) {
  $data['success'] = false;
  $data['errors']  = $errors;
} else {
  //Write to db

  $database->insert("persons", [
    "firstname" => $_POST['firstname'],
    "lastname" => $_POST['lastname']
  ]);
  
  $data['success'] = true;
  $data['message'] = 'Person added successfully!';
  $data['result'] = $result;
}

//Return data, this is what the controller functions pick up as "response"
echo json_encode($data);
 ?>
