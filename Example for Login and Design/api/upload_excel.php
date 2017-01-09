<?php
$target_dir = "../excel/";
$target_file = $target_dir . "default_solar.xlsx";
//$alreadyFile = "../excel/default_solar.xlsx";
$uploadOk = 1;
if(!empty($_FILES["fileToUpload"]["name"])){
  // Allow certain file formats
  $fileType = pathinfo($_FILES["fileToUpload"]["name"],PATHINFO_EXTENSION);
  if($fileType != "xlsx") {
      echo "Sorry, only xlsx files are allowed.";
      $uploadOk = false;
  }
  // Check if $uploadOk is set to 0 by an error
  if ($uploadOk == false) {
      echo "Sorry, your file was not uploaded.";
      echo '<script type="text/javascript">window.location.href="../index.php";</script>';
      //$uploadOk = false
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
}else{
  echo '<script type="text/javascript">window.location.href="../index.php";</script>';
}
?>
