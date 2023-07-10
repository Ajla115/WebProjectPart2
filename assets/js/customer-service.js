//inside of this JSON object, we will put methods for ADD,
//DELETE, EDIT, showconfirmationDialog and etc
var CustomerService = {
 
  emailValidator: function() {
      jQuery.validator.addMethod(
          "email",
          function (value, element) {
              return (
                  this.optional(element) ||
                  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value)
              );
          },
          "Please enter valid email address!"
      );
  },

  formToJson: function(form) {
      var array = $(form).serializeArray();
      var json = {};
  
      $.each(array, function() {
          json[this.name] = this.value || '';
      })
    
      return json;
  },

  validateForm: function() {
      var self = this; // this is a reference to the CustomerService object for using in nested functions
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
            const data = self.formToJson(form);  // this self is refering to this JS object
              
            console.log("test", typeof data);
    
            $.post(" rest/customer", data)
              .done(function (response) {

                const token = response.token;
                const customer = response.customer;
                // Storing the JWT token in localStorage
                localStorage.setItem('user_token', token);
                toastr.success("User added to the database");
                form.reset();

             setTimeout(function() {
                 window.location.href = 'index2.html';}, 5000); // Redirect after 5 seconds to index2.html
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
     }, 


  init: function() {
      this.emailValidator();
      this.validateForm();
  },


  checkToken: function() {
      var token = localStorage.getItem("user_token");
        if (token) {
            
        } else {
            
            window.location.replace("index.html");
        }
    },

    getComments: function() {
      $.ajax({
          url: 'rest/tests',
          type: 'GET',
          beforeSend: function (xhr) {
              xhr.setRequestHeader(
                  "Authorization",
                  localStorage.getItem("user_token")
              );
          },
          dataType: 'json',
          success: function(data) { 
              console.log(data);
              for (var i = 0; i < data.length; i++) {
                  var fullname = data[i].first_name + " " + data[i].last_name;
                  $("#comments-swiper").append(
                      '<div class="swiper-slide">' +
                          '<p style="color: white; text-align: center;"><strong>' + fullname + '</strong></p>' +
                          '<p style="color: white; text-align: center;"><i class="bx bxs-quote-alt-left quote-icon-left"></i>' + 
                          data[i].comment + 
                          '<i class="bx bxs-quote-alt-right quote-icon-right"></i></p>' +
                      '</div>'
                  );
              }
  
              var swiper = new Swiper('.testimonials-slider', {
                  pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                  },
              });
          },
          error: function(error) {
              console.error('Error:', error);
          }
      });
  },

   
};







   /* init: function () { //this init fun will validate and if everything is okay, it will go to the handler
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
      },

          addCustomer: function(customer) {
            console.log("post");
            $.ajax({
              url: "rest/customer",
              type: "POST",
              /*beforeSend: function (xhr) {
                xhr.setRequestHeader(
                  "Authorization",
                  localStorage.getItem("user_token")
                );
              },*/
             /* data: JSON.stringify(customer),
              contentType: "application/json",
              dataType: "json",
              success: function (customer) {
                //$("#addCustomerModal").modal("hide");
                toastr.success("Customer has been added!");
                //StudentService.getStudents();
              },
            });
          },

        emailValidator: function(){
          jQuery.validator.addMethod(
            "email",
            function (value, element) {
              return (
                this.optional(element) ||
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value)
              ); //regex to check whether email has been entered correctly
            },
            "Please enter valid email address!"
          );
        },
        
        
          formToJson: function (form) {
            var array = $(form).serializeArray();
            var json = {};
        
            $.each(array, function() {
              json[this.name] = this.value || '';
            })
          
            return json;
          },
        
          validateForm: function() {
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
                .done(function (response) {

          
    const token = response.token;
    const customer = response.customer;
    
    // Store the JWT token in localStorage
    localStorage.setItem('user_token', token);

          toastr.success("User added to the database");
          form.reset();
          setTimeout(function() {
      window.location.href = 'index2.html';
   }, 5000); // Redirect after 5 seconds
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

        }*/
          
          




