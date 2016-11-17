<?php
  require_once "../inc/db_credentials.php";
  $database->query("CREATE TABLE IF NOT EXISTS persons(
    id int AUTO_INCREMENT PRIMARY KEY,
    firstname varchar(32) NOT NULL,
    lastname varchar(32) NOT NULL
  );");
?>
