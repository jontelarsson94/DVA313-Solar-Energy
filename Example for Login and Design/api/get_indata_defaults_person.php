<?php
require_once "../inc/db_credentials.php";

$data = array();

$result = $database->select("default_indata_person", "*", [
  "ORDER" => "row"
]);

$data['defaults'] = $result;
$data['success'] = true;

echo json_encode($data);
 ?>
