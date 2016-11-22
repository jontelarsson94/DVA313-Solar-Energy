<?php
require_once "../inc/db_credentials.php";

$data = array();

$result = $database->select("default_extended", "*");

$data['defaults'] = $result;

echo json_encode($result);
 ?>
