<?php
  //DB login
  require_once "../inc/db_credentials.php";

  //Arrays
  $data = array();

  //Get data from DB
  $result = $database->select("persons", [
    "firstname",
	   "lastname"
  ]);

  //Set return statement
    $data['success'] = true;
    $data['result'] = $result;

  //Return data, this is what the controller functions pick up as "response"
  //$data['result'] will be picked up as response.result
  echo json_encode($data);
?>
