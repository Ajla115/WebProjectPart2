<?php
/**
 * @OA\Get(path="/getTestimonials", tags={"testemonials"}, security={{"ApiKeyAuth": {}}},
 *         summary="Return all testemonials from the API. ",
 *         @OA\Response( response=200, description="List of all testemonials.")
 * )
 */

Flight::route('GET /getTestimonials', function(){
  Flight::json(Flight::testemonialsService()->getAllTestimonials());
});


?>
