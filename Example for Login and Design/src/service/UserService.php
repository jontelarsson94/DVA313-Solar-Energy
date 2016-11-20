<?php

require_once "src/dao/UserDAO.php";

class UserService {

    var $userDAO;

    function __construct() {
        $this->userDAO = new UserDAO();
    }

    public function userVerification($username, $password) {
        $user_id = $this->userDAO->existsUser($username, $password);
        if ($user_id > 0) {
            $_SESSION["login_user"] = $this->userDAO->getUserByID($user_id);
        }
        return $user_id;
    }

    public function logout() {
        unset($_SESSION["login_user"]);
        unset($_SESSION["user"]);
    }

}

?>
