<?php

class DB {

    const DB_IP   = "127.0.0.1";
    const DB_PORT = 3306;
    const DB_USER = "root";
    const DB_PASS = "";
    const DB_NAME = "solar";


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
