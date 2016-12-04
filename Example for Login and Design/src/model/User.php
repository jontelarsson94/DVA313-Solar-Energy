<?php

class User {

    var $id, $username, $admin;


    public function __construct($id, $admin, $username) {
        $this->id = $id;
        $this->username = $username;
        $this->admin = $admin;
    }

    public function getId() {
        return $this->id;
    }

    public function getUsername() {
        return $this->username;
    }

    public function getAdmin(){
      return $this->admin;
    }

}

?>
