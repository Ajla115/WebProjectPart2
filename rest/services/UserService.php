<?php
require_once 'BaseService.php';
require_once __DIR__ . "/../dao/UserDao.php";

class UserService extends BaseService
{
    public function __construct()
    {
        parent::__construct(new UserDao);
    }

    function getUserByFirstNameAndLastName($customer_name, $customer_surname)
    {
        return $this->dao->getUserByFirstNameAndLastName($customer_name, $customer_surname);
    }

    
   /* function add($user)
    {
        $user['password'] = md5($user['password']);
        return parent::add($user);
    }*/

   /* function update($id, $user)
    {
        $user['password'] = md5($user['password']);
        return parent::update($id, $user);
    }*/

    public function update($entity, $id, $id_column="id"){
        //$entity['password'] = md5($entity['password']);
        if(isset($entity['id_column']) && !is_null($entity['id_column'])){
            return parent::update($entity, $id, $entity['id_column']);
        }
        return parent::update($entity, $id);
    }

    public function add($entity){
       //unset($entity['phone']); //ovo je da smo u form registration koloni imali i opciju da se unese phone, a nema ga u bazi
       $entity['password'] = md5($entity['password']); //ovo je za hashing sifre
        return parent::add($entity);
    }


    function get_user_by_email($email)
    {
        return $this->dao->get_user_by_email($email);
    }
}
?>