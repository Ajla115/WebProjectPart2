<?php
/**
 * @OA\Get(path="/getTestimonials", tags={"testemonials"}, security={{"ApiKeyAuth": {}}},
 *         summary="Return all testemonials from the API. ",
 *         @OA\Response( response=200, description="List of all testemonials.")
 * )
 */

Flight::route('GET /tests', function(){
  Flight::json(Flight::testemonialsService()->get_all());
});
  
Flight::route('GET /tests/@id', function($id){
  Flight::json(Flight::testemonialsService()->get_by_id($id));
});


?>
