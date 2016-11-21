<?php

require_once "DB.php";
require_once "src/model/User.php";

class UserDAO {

    public function existsUser($username, $password) {
        DB::getInstance()->openDB();

        $sql = "SELECT * FROM users WHERE username='$username' and password=sha1('$password')";

        if (!$query = mysqli_query(DB::getInstance()->getConnect(), $sql)) {
            echo("Error description: " . mysqli_error(DB::getInstance()->getConnect()));
        }

        $user_id = -1;

        while ($rows = mysqli_fetch_array($query)) {
            $user_id = $rows["id"];
        }

        DB::getInstance()->closeDB();

        return $user_id;
    }

    public function getUserById($user_id) {
        DB::getInstance()->openDB();

        $sql = "SELECT id, admin,username FROM users WHERE id=" . $user_id;

        if (!$query = mysqli_query(DB::getInstance()->getConnect(), $sql)) {
            echo("Error description: " . mysqli_error(DB::getInstance()->getConnect()));
        }

        while ($rows = mysqli_fetch_array($query)) {
            $user = new User($rows["id"], $rows["admin"] == 1 ? User::ADMIN : User::USER, $rows["username"]);
        }

        DB::getInstance()->closeDB();

        return $user;
    }

}

?>
