var UserService = {
    init: function () {
      
      var token = localStorage.getItem("user_token"); //ako hocemo da settamo value umjesto da je retrieve, onda treba ovako setItem("user_token", value);
      if (token) { //if token exists, onda ide redirect na ovaj html page
        window.location.replace("index2.html");
      }
      $("#login-form").validate({
        
        submitHandler: function (form) {
          //console.log("data123");
          var entity = Object.fromEntries(new FormData(form).entries());
          UserService.login(entity);
        },
      });
    },
    login: function (entity) {
      $.ajax({
        url: "rest/login",
        type: "POST",
       /* beforeSend: function (xhr) {
          xhr.setRequestHeader(
            "Authorization",
            localStorage.getItem("user_token")
          );
        },*/
        data: JSON.stringify(entity),
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
          console.log(result);
          localStorage.setItem("user_token", result.token); //ovo user_token je kako smo mi dali ime tokenu
          window.location.replace("index2.html");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          toastr.error(XMLHttpRequest.responseJSON.message);
        },
      });
    },
  
    logout: function () {   //ovo je logout function, jako simple
      localStorage.clear();
      window.location.replace("index.html");
    },
  };

  //za logout treba samo staviti Button onClick = UserService.logout i tjt


