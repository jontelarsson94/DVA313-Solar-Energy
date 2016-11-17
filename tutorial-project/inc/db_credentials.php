<?php

//This is a very nice open-source database library for php I think we should use
require_once '../lib/php/medoo.php';

  // Initialize the database
  //Set your own setting for your database
$database = new medoo([
    'database_type' => 'mysql',
    'database_name' => 'sample-project',
    'server' => 'localhost',
    'username' => 'root',
    'password' => 'root',
    'charset' => 'utf8'
]);
?>
