 function validate() {
var firstName=document.getElementById("firstName").value;
var lastName=document.getElementById("lastName").value;
 var Email=document.getElementById("Email").value;
var Password=document.getElementById("Password").value;
 var ConfirmPassword=document.getElementById("Confirm Password").value;
  if(
    firstName =="mohamed" 
  && lastName =="mahmoud"
  && Email =="admin@gamil.com"
  && Password =="user"
  && ConfirmPassword=="user"
  )
   {
    alert("sign-up succesfully");   
    return false;
        }
        else{
            alert("sign-up faild");
        }
        }