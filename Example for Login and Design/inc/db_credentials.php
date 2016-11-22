<?php

//This is a very nice open-source database library for php I think we should use
require_once '../lib/php/medoo.php';

  // Initialize the database
  //Set your own setting for your database
$database = new medoo([
    'database_type' => 'mysql',
    'database_name' => '141364-dva313',
    'server' => 'mysql18.citynetwork.se',
    'username' => '141364-wj79764',
    'password' => 'SolarCalculator',
    'charset' => 'utf8',
    'port' => 3306
]);
?>
