<?php
require_once "BaseDao.class.php";

class UserDao extends BaseDao{

  /**
  * constructor of dao class
  */
  public function __construct(){
    parent::__construct("customers"); //ovo je naziv tabele ili ovdje treba users
  }

  public function get_user_by_email($email){
    return $this->query("SELECT * FROM customers WHERE email = :email", ['email' => $email]);
  }    
  
  /*function getUserByFirstNameAndLastName($firstName, $lastName)
    {
        return $this->query_unique("SELECT * FROM customers WHERE firstName = :firstName AND lastName = :lastName", ["firstName" => $firstName, "lastName" => $lastName]);
    }*/

    function getUserByFirstNameAndLastName($customer_name, $customer_surname)
    {
        return $this->query_unique("SELECT * FROM customers WHERE customer_name = :customer_name AND customer_surname = :customer_surname", ["customer_name" => $customer_name, "customer_surname" => $customer_surname]);
    }
}





?>