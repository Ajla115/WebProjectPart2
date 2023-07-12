<?php
/**
 * @OA\Get(path="/tests", tags={"testemonials"}, security={{"ApiKeyAuth": {}}},
 *         summary="Return all testemonials from the API. ",
 *         @OA\Response( response=200, description="List of all testemonials.")
 * )
 */

Flight::route('GET /tests', function(){
  Flight::json(Flight::testemonialsService()->get_all());
});


 /**
  * @OA\Get(path="/tests/{id}", tags={"testemonials"}, security={{"ApiKeyAuth": {}}},
  *     @OA\Parameter(in="path", name="id", example=1, description="Testemonial ID"),
  *     @OA\Response(response="200", description="Fetch individual comment based on a testemonial ID")
  * )
  */
  
Flight::route('GET /tests/@id', function($id){
  Flight::json(Flight::testemonialsService()->get_by_id($id));
});

/** 
*@OA\Post(
  *     path="/test/{id}", security={{"ApiKeyAuth": {}}},
  *     description="Add customer",
  *     tags={"customers"},
  *     @OA\RequestBody(description="Add new customer", required=true,
  *       @OA\MediaType(mediaType="application/json",
  *    			@OA\Schema(
  *    				@OA\Property(property="first_name", type="string", example="Zikrija",	),
  *    				@OA\Property(property="last_name", type="string", example="Maslenjak",	 ),
    *    				@OA\Property(property="comment", type="string", example="Customer",	 ),
    *                   @OA\Property(property="Datum", type="string", example="12345",	,

  *        )
  *     )),
  *     @OA\Response(
  *         response=200,
  *         description="Test has been added"
  *     ),
  *     @OA\Response(
  *         response=500,
  *         description="Error"
  *     )
  * )
  */
  

Flight::route('POST /test/@id', function ($data, $id) {
  $data = Flight::request()->data->getData();

});

?>
