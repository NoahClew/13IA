function PasswordView(){
         var x = document.getElementById("pwInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
}
