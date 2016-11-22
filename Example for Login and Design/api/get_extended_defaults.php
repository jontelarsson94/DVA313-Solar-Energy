<?php
require_once "../inc/db_credentials.php";

$data = array();

$result = $database->select("default_extended", "*", [
  "ORDER" => "row"
]);

$data['success'] = true;
$data['defaults'] = $result;

echo json_encode($data);
 ?>
