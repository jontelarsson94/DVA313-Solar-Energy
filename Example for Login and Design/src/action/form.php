<?php

if (isset($_GET["form"])) {
    if ($_GET["form"] == "userVerification") {
        if ($userService->userVerification(htmlspecialchars($_POST["username"]), htmlspecialchars($_POST["password"])) > 0) {
            echo "<script type='text/javascript'>location.href = '.';</script>";
        } else {
            echo "<script type='text/javascript'>location.href ='?page=login&error';</script>";
        }
    }

    if ($_GET["form"] == "logout") {
      $userService->logout();
      echo "<script type='text/javascript'>location.href = '.';</script>";
    }
    echo "<script type='text/javascript'>location.href ='.';</script>";
}

?>
