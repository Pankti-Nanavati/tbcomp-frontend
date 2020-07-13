function userQuestion(){
    var loginForm = document.getElementById('main-login-form-section');
    var forgotPasswordForm = document.getElementById('main-forgot-pass-section');
   

    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "block";

}
    
function loginValidation(){
    
  var email=document.forms["loginForm"]["emailId"].value;
  var email_patt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(email_patt.test(email) == false )
	
		{
			document.getElementById('emailAlert').innerHTML=" **Please enter valid Email"
			return false;
		}
	else{
		document.getElementById('emailAlert').innerHTML = '';
		document.getElementById('emailAlert').style.display = 'none';
    }
}

function nameValidation(){
    var email=document.forms["forgetPasswordForm"]["emailId"].value;
    var email_patt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    var q1 = document.forms["forgetPasswordForm"]["question1"].value;
    var q2 = document.forms["forgetPasswordForm"]["question2"].value;
    var q3 = document.forms["forgetPasswordForm"]["question3"].value;
  
      if(email_patt.test(email) == false )
      
          {
              document.getElementById('emailAlert2').innerHTML=" **Please enter valid Email"
              return false;
          }
      else{
          document.getElementById('emailAlert2').innerHTML = '';
          document.getElementById('emailAlert2').style.display = 'none';
      }
   
    var alertMessage = document.getElementById('alert-message');
    var ErrorAlertMessage = document.getElementById('error-alert-message');
    var BlankAlertMessage = document.getElementById('blank-alert-message');

    if (q1 == "" && q2 == "" && q3 == "")
    {
        ErrorAlertMessage.style.display = "none";
        alertMessage.style.display = "none";
        BlankAlertMessage.style.display = "block";
        return false;

    } 
    else if (q1 != "" && q2 == ""  && q3 == "" ||  q1 == "" && q2 != ""  && q3 == "" ||  q1 == "" && q2 == ""  && q3 != ""){
        ErrorAlertMessage.style.display = "block";
        alertMessage.style.display = "none";
        BlankAlertMessage.style.display = "none";
        console.log('In here -2')
        return false;

    }
    else if(q1 != "" && q2 != "" && q3 != "" ) 
    {
        ErrorAlertMessage.style.display = "block";
        alertMessage.style.display = "none";
        BlankAlertMessage.style.display = "none";
        return false;


    }
    else if (q1 != "" && q2 != "" && q3=="" || q1 ==""  && q2 != "" && q3 != "" || q1 != "" && q2== "" && q3 != "")
    {
        var loginForm = document.getElementById('main-login-form-section');
        loginForm.style.display = "none";
        window.location.assign("ResetPassword.html");
        
        
    } 
    return false
}
function ResetPassword(){
    var loginForm = document.getElementById('main-login-form-section');
    var forgotPasswordForm = document.getElementById('main-forgot-pass-section');
    var resetPasswordForm = document.getElementById('reset-password-form-section');

    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "none";
    resetPasswordForm.style.display = "block";
}
function ResetFormValidation()
{
    var email=document.forms["ResetPasswordForm"]["emailId"].value;
    var email_patt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var main_pass=document.forms["ResetPasswordForm"]["password"].value;
    var confirm_pass=document.forms["ResetPasswordForm"]["confirmPassword"].value;
       
	if(email_patt.test(email) == false )
		{
            document.getElementById('emailAlert').innerHTML=" **Please enter valid Email"
			return false;
		}
	else{
		document.getElementById('emailAlert').innerHTML = '';
        document.getElementById('emailAlert').style.display = 'none';

    }

    if(main_pass != confirm_pass)
	{
        document.getElementById('confPasswordAlert').innerHTML='**Please enter the correct Password';
		return false;
	}	
	else{
		document.getElementById('confPasswordAlert').innerHTML = '';
        document.getElementById('confPasswordAlert').style.display = 'none';
	}    
}