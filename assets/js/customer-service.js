//inside of this JSON object, we will put methods for ADD,
// DELETE, EDIT, showconfirmationDialog and etc
/*var CustomerService = {
    init: function () { //this init fun will validate and if everything is okay, it will go to the handler
        $("#addCustomerForm").validate({
          submitHandler: function (form) {
            var customer = Object.fromEntries(new FormData(form).entries()); //this is how you get data
            CustomerService.addCustomer(customer); //this is is how you add customers to db
            form.reset(); //form reset so the form is clean for next input
          },
        });

        $("#editCustomerForm").validate({
          submitHandler: function (form) {
            var customer = Object.fromEntries(new FormData(form).entries());
            CustomerService.editCustomer(customer);
          },
        });

         function addCustomer(customer) {
            console.log("post");
            $.ajax({
              url: "rest/customer",
              type: "POST",
              beforeSend: function (xhr) {
                xhr.setRequestHeader(
                  "Authorization",
                  localStorage.getItem("user_token")
                );
              },
              data: JSON.stringify(customer),
              contentType: "application/json",
              dataType: "json",
              success: function (customer) {
                $("#addCustomerModal").modal("hide");
                toastr.success("Customer has been added!");
                //StudentService.getStudents();
              },
            });
          }


        jQuery.validator.addMethod(
            "email",
            function (value, element) {
              return (
                this.optional(element) ||
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value)
              ); //regex za provjeru da li je email upisan kako treba
            },
            "Please enter valid email address!"
          );
        
          function formToJson(form) {
            var array = $(form).serializeArray();
            var json = {};
        
            $.each(array, function() {
              json[this.name] = this.value || '';
            })
          
            return json;
          }
        
          
          function validateForm()   {
            $("#addCustomerForm").validate({
            focusCleanup: true,
            errorElement: "em",
             rules: {
               customer_name: "required",
              customer_surname: "required",
              password: {
                 required: true,
                 minlength: 2,
                 maxlength: 10,
            },
             },
            messages: {
              customer_name: "First name field is required",
              customer_surname: "Last name field is required",
              //email: "Enter a valid email",
              password: {
                minlength: "Password must be at least 2 characters long",
              },
            },
            highlight: function (element, errorClass) {
              $(element).fadeOut(function () {
                $(element).fadeIn();
              });
            },
        
            errorContainer: "#messageBox1",
            errorLabelContainer: "#messageBox1 ul",
            wrapper: "li",
            submitHandler: function (form, validator) {
              const data = formToJson(form);
              console.log("test", typeof data);
        
              
        
              $.post(" rest/customers", data)
                .done(function () {
                  toastr.success("User added");
                  form.reset();
                })
                .fail(function () {
                  toastr.error("User not added");
                });
            },
        
            invalidHandler: function (event, validator) {
              var errors = validator.numberOfInvalids();
              toastr.error("Error");
              if (errors) {
                var message =
                  errors == 1
                    ? "You missed 1 field."
                    : "You missed " + errors + " fields.";
                $("div.error span").html(message);
                $("div.error").show();
              } else {
                $("div.error").hide();
              }
            },
          });

        }



       
},

};


*/
