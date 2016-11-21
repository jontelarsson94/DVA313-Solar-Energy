<?php

class User {

    const USER = 0;
    const ADMIN = 1;

    var $id, $username;


    public function __construct($id, $username) {
        $this->id = $id;
        $this->username = $username;
    }

    public function getId() {
        return $this->id;
    }

    public function getUsername() {
        return $this->username;
    }

}

?>
