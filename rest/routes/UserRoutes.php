<?php

use Firebase\JWT\JWT; //ovo creates JWT Token
use Firebase\JWT\Key;

Flight::route('POST /login', function(){
    $login = Flight::request()->data->getData();
    $user = Flight::userDao()->get_user_by_email($login['email']);
    //Flight::json($user);
    if(count($user) > 0){
        $user = $user[0];
    }
    if (isset($user['id'])){
      if($user['password'] == md5($login['password'])){
        unset($user['password']);
        //$user['is_admin'] = false;
        $jwt = JWT::encode($user, Config::JWT_SECRET(), 'HS256'); //ovako se zapravo stavara JWT Token
        Flight::json(['token' => $jwt]);
      }else{
        Flight::json(["message" => "Wrong password"], 404);
      }
    }else{
      Flight::json(["message" => "User doesn't exist"], 404); //ovo je u slucaju da email nije valid, mada je ovo generalized message, ali mogu se i specificne poruke stavljati da user zna u cmeu je greska
  }
});



?>