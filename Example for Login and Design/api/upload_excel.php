<?php
$target_dir = "../excel/";
$target_file = $target_dir . "default_solar.xlsx";
//$alreadyFile = "../excel/default_solar.xlsx";
$uploadOk = 1;
$fileType = pathinfo($target_file,PATHINFO_EXTENSION);
if(!empty($_FILES["fileToUpload"]["name"])){
  // Allow certain file formats
  if($fileType != "xlsx") {
      echo "Sorry, only xlsx files are allowed.";
      $uploadOk = 0;
  }
  // Check if $uploadOk is set to 0 by an error
  if ($uploadOk == 0) {
      echo "Sorry, your file was not uploaded.";
  // if everything is ok, try to upload file
  } else {
    //checking if file exsists
    if(file_exists($target_file)){
      echo "file exists so we remove it";
      echo unlink($target_file);
    }

    //Place it into your "uploads" folder mow using the move_uploaded_file() function
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
    require_once "update_defaults.php";
  }
}
?>
