<?php

class DB {

    const DB_IP   = "mysql18.citynetwork.se";
    const DB_PORT = 3306;
    const DB_USER = "141364-wj79764";
    const DB_PASS = "SolarCalculator";
    const DB_NAME = "141364-dva313";


    private static $instance;
    private $connect;

    private function __construct() {
    }

    public static function getInstance() {
        if (null === static::$instance) {
            self::$instance = new DB();
        }

        return self::$instance;
    }

    public function openDB() {
        $this->connect = mysqli_connect(DB::DB_IP . ":" . DB::DB_PORT, DB::DB_USER, DB::DB_PASS, DB::DB_NAME);
    }

    public function closeDB() {
        mysqli_close($this->connect);
    }

    public function getConnect() {
        return $this->connect;
    }

}

?>
