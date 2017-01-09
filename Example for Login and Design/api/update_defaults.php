<?php
require_once "../lib/php/PHPExcel-develop/Classes/PHPExcel.php";
require_once "../inc/db_credentials.php";

		$tmpfname = "../excel/default_solar.xlsx";
		$excelReader = PHPExcel_IOFactory::createReaderForFile($tmpfname);
		$excelObj = $excelReader->load($tmpfname);
		$worksheet = $excelObj->getSheet(0);
		$lastRow = $worksheet->getHighestRow();

		//echo "<table>";
		for ($row = 1; $row <= $lastRow; $row++) {
	      $name = $worksheet->getCell('A'.$row)->getValue();
	      $value = $worksheet->getCell('B'.$row)->getValue();
	      $unit = $worksheet->getCell('C'.$row)->getValue();
	      $min = $worksheet->getCell('D'.$row)->getValue();
	      $max = $worksheet->getCell('E'.$row)->getValue();
	      $comment = $worksheet->getCell('F'.$row)->getValue();
	      //echo $row . " " . $name . " " . $value . " " $comment . "";
	      $database->update("default_indata_person", [
	        "name" => $name,
	        "value" => $value,
	        "unit" => $unit,
	        "min" => $min,
	        "max" => $max,
	        "comment" => $comment
	      ], [
	      	"row" => $row
	      ]);
		}

		$tmpfname = "../excel/default_solar.xlsx";
		$excelReader = PHPExcel_IOFactory::createReaderForFile($tmpfname);
		$excelObj = $excelReader->load($tmpfname);
		$worksheet = $excelObj->getSheet(1);
		$lastRow = $worksheet->getHighestRow();

		//echo "<table>";
		for ($row = 1; $row <= $lastRow; $row++) {
	      $name = $worksheet->getCell('A'.$row)->getValue();
	      $value = $worksheet->getCell('B'.$row)->getValue();
	      $unit = $worksheet->getCell('C'.$row)->getValue();
	      $min = $worksheet->getCell('D'.$row)->getValue();
	      $max = $worksheet->getCell('E'.$row)->getValue();
	      $comment = $worksheet->getCell('F'.$row)->getValue();
	      //echo $row . " " . $name . " " . $value . " " $comment . "";
	      $database->update("default_indata_company", [
	        "name" => $name,
	        "value" => $value,
	        "unit" => $unit,
	        "min" => $min,
	        "max" => $max,
	        "comment" => $comment
	      ], [
	      	"row" => $row
	      ]);
		}

		$tmpfname = "../excel/default_solar.xlsx";
		$excelReader = PHPExcel_IOFactory::createReaderForFile($tmpfname);
		$excelObj = $excelReader->load($tmpfname);
		$worksheet = $excelObj->getSheet(2);
		$lastRow = $worksheet->getHighestRow();

		//echo "<table>";
		for ($row = 1; $row <= $lastRow; $row++) {
	      $name = $worksheet->getCell('A'.$row)->getValue();
	      $value = $worksheet->getCell('B'.$row)->getValue();
	      $unit = $worksheet->getCell('C'.$row)->getValue();
	      $min = $worksheet->getCell('D'.$row)->getValue();
	      $max = $worksheet->getCell('E'.$row)->getValue();
	      $comment = $worksheet->getCell('F'.$row)->getValue();
	      //echo $row . " " . $name . " " . $value . " " $comment . "";
	      $database->update("extended_person", [
	        "name" => $name,
	        "value" => $value,
	        "unit" => $unit,
	        "min" => $min,
	        "max" => $max,
	        "comment" => $comment
	      ], [
	      	"row" => $row
	      ]);
		}

		$tmpfname = "../excel/default_solar.xlsx";
		$excelReader = PHPExcel_IOFactory::createReaderForFile($tmpfname);
		$excelObj = $excelReader->load($tmpfname);
		$worksheet = $excelObj->getSheet(3);
		$lastRow = $worksheet->getHighestRow();

		//echo "<table>";
		for ($row = 1; $row <= $lastRow; $row++) {
	      $name = $worksheet->getCell('A'.$row)->getValue();
	      $value = $worksheet->getCell('B'.$row)->getValue();
	      $unit = $worksheet->getCell('C'.$row)->getValue();
	      $min = $worksheet->getCell('D'.$row)->getValue();
	      $max = $worksheet->getCell('E'.$row)->getValue();
	      $comment = $worksheet->getCell('F'.$row)->getValue();
	      //echo $row . " " . $name . " " . $value . " " $comment . "";
	      $database->update("extended_company", [
	        "name" => $name,
	        "value" => $value,
	        "unit" => $unit,
	        "min" => $min,
	        "max" => $max,
	        "comment" => $comment
	      ], [
	      	"row" => $row
	      ]);
		}
		echo '<script type="text/javascript">window.location.href="../index.php?upload=true";</script>';
?>
