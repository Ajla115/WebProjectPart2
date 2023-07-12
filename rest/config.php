<?php
class Config
{
    // $host = 'localhost' might not work, use '127.0.0.1' if that is the case

    // public static $host = '127.0.0.1';
    // public static $schema = 'rentacar';
    // public static $username = 'root';
    // public static $password = '';
    // public static $port = '3306';


  /* public static $host = '127.0.0.1';
    public static $schema = 'rentacar';
    public static $username = 'root';
    public static $password = 'a1b2c3d4e5';
    public static $port = '3306';*/

    

    /*ovj dio je kad se opet deploya na D.O., ako je dodano na D.O. onda ce koristiti JWT Token odatle, a ako nema tamo nista, onda ce ovu rijec web koristiti*/

    //This part below will be used when deploying the whole project with digital ocean
   public static function DB_HOST(){
        return Config::get_env("DB_HOST", "127.0.0.1");
    }

    public static function DB_USERNAME(){
        return Config::get_env("DB_USERNAME", "root");
    }

    public static function DB_PASSWORD(){
        return Config::get_env("DB_PASSWORD", "a1b2c3d4e5");
    }

    public static function DB_SCHEME(){
        return Config::get_env("DB_SCHEME", "rentacar");
    }

    public static function DB_PORT(){
        return Config::get_env("DB_PORT", "3306");
    }
    public static function JWT_SECRET(){
        return Config::get_env("JWT_SECRET", "web");
    }

    public static function get_env($name, $default){
        return isset($_ENV[$name]) && trim($_ENV[$name]) != ' ' ? $_ENV[$name] : $default;
    }

}

?>
