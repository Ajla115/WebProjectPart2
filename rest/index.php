<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require '../vendor/autoload.php';


// import and register all business logic files (services) to FlightPHP
require_once __DIR__ . '/services/CustomerService.php';
require_once __DIR__ . '/services/BookingService.php';
require_once __DIR__ . '/services/EmployeeService.php';
require_once __DIR__ . '/services/LocationService.php';
require_once __DIR__ . '/services/ReviewService.php';
require_once __DIR__ . '/services/VehicleService.php';
require_once __DIR__ . '/services/UserService.php';
require_once __DIR__ . '/services/TestemonialsService.php';

require_once __DIR__ . '/dao/UserDao.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

Flight::register('customerService', "CustomerService");
Flight::register('bookingService', "BookingService");
Flight::register('employeeService', "EmployeeService");
Flight::register('locationService', "LocationService");
Flight::register('reviewService', "ReviewService");
Flight::register('vehicleService', "VehicleService");
Flight::register('userService', "UserService");
Flight::register('testemonialsService', "TestemonialsService");


Flight::register('userDao', "UserDao");

// middleware method for login
  /* Flight::route('/*', function(){
    //perform JWT decode
    $path = Flight::request()->url;
    if ($path == '/login' || $path == '/customers' || $path == '/docs.json') return TRUE; 
    // exclude login route from middleware
    //ove rute su ovdje excluded od autorizacije, znaci da njima svako moze pristupiti
    //ovo customers se odnosi na signup 

   $headers = getallheaders();
    //Flight::json(['headers' => $headers]);
    if (@!$headers['Authorization']){
      Flight::json(["message" => "Authorization is missing"], 403);
      return FALSE;
    }else{
      try {
        $decoded = (array)JWT::decode($headers['Authorization'], new Key(Config::JWT_SECRET(), 'HS256'));
        Flight::set('user', $decoded);
        return TRUE;
      } catch (\Exception $e) {
        Flight::json(["message" => "Authorization token is not valid"], 403);
        return FALSE;
      }
    }
  });*/

/*Flight::route('/*', function(){
  // Perform JWT decode
  $path = Flight::request()->url;
  if ($path == '/login' || $path == '/customers' || $path == '/docs.json') return true;

  //$headers = Flight::request()->headers;
  $headers = getallheaders();
  Flight::json(['headers' => $headers]);
  if (!isset($headers['Authorization'])) {
      Flight::json(["message" => "Authorization is missing"], 403);
      return false;
  } else {
      try {
          $decoded = (array)JWT::decode($headers['Authorization'], Config::JWT_SECRET(), 'HS256');
          Flight::set('user', $decoded);
          return true;
      } catch (\Exception $e) {
          Flight::json(["message" => "Authorization token is not valid"], 403);
          return false;
      }
  }
});*/
/*Flight::route('/*', function(){
  // Perform JWT decode
  $path = Flight::request()->url;
  if ($path == '/login' || $path == '/customers' || $path == '/docs.json') return true;

  //$headers = Flight::request()->headers;
  $headers = getallheaders();
  //echo $headers['Authorization'];
  Flight::json(['headers' => $headers]);
  if (!isset($headers['Authorization'])) {
    Flight::json(["message" => "Authorization is missing"], 403);
    return false;
  } else {
    try {
      $jwtSecret = Config::JWT_SECRET();
      $algorithm = ['HS256'];
      $decoded = (array)JWT::decode($headers['Authorization'], $jwtSecret, $algorithm);
      Flight::set('user', $decoded);
      return true;
    } catch (\Exception $e) {
      Flight::json(["message" => "Authorization token is not valid"], 403);
      return false;
    }
  }
});*/



/* REST API documentation endpoint */
Flight::route('GET /docs.json', function(){
  $openapi = \OpenApi\scan('routes');
  header('Content-Type: application/json');
  echo $openapi->toJson();
});





// import all routes
require_once __DIR__ . '/routes/CustomerRoutes.php';
require_once __DIR__ . '/routes/BookingRoutes.php';
require_once __DIR__ . '/routes/EmployeeRoutes.php';
require_once __DIR__ . '/routes/LocationRoutes.php';
require_once __DIR__ . '/routes/ReviewRoutes.php';
require_once __DIR__ . '/routes/VehicleRoutes.php';
require_once __DIR__ . '/routes/UserRoutes.php';
require_once __DIR__ . '/routes/TestemonialsRoutes.php';

// it is still possible to add custom routes after the imports
/*Flight::route('GET /', function () {
    //$base = new BaseDao("customers"); ovo je mali hack da se pozove base dao samo na jednu tabelu
});*/


Flight::start();
?>
