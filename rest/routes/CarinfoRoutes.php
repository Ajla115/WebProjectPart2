<?php


Flight::route('GET /carinfo', function(){
    Flight::json(Flight::carinfoService()->get_all());
  });

  Flight::route('GET /carinfo/@id', function($id){
    Flight::json(Flight::carinfoService()->get_by_id($id));
  });
  


?>
