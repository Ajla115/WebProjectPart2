<?php
require_once "BaseDao.class.php";

class UserDao extends BaseDao{

  /**
  * constructor of dao class
  */
  public function __construct(){
    parent::__construct("customers"); //ovo je naziv tabele
  }

  public function get_user_by_email($email){
    return $this->query("SELECT * FROM customers WHERE email = :email", ['email' => $email]);
  }
}

?>