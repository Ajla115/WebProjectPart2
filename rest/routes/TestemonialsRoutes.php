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
* @OA\Post(
*     path="/test", security={{"ApiKeyAuth": {}}},
*     description="Add test",
*     tags={"customers"},
*     @OA\RequestBody(description="Add new test", required=true,
*       @OA\MediaType(mediaType="application/json",
*    			@OA\Schema(
*    				@OA\Property(property="first_name", type="string", example="Demo",	description="first name"),
*    				@OA\Property(property="last_surname", type="string", example="Customer",	description="last name" ),
*                   @OA\Property(property="comment", type="string", example="jjhggghhjk",	description="Comment" ),

*        )
*     )),
*     @OA\Response(
*         response=200,
*         description="has been added"
*     ),
*     @OA\Response(
*         response=500,
*         description="Error"
*     )
* )
*/

//works
//add a new customer to the database
Flight::route('POST /test', function () {
  $data = Flight::request()->data->getData();

  // Add the customer to the database
  $test = Flight::testemonialsService()->add($data);
  //unset($customer['password']);

  // Generate the JWT token
 // $jwt = JWT::encode($customer, Config::JWT_SECRET(), 'HS256');

  // Return the JWT token in the response
  Flight::json(['customer' => $test]);
});


?>
