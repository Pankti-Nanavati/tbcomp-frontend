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
    var user_name = document.forms["forgetPasswordForm"]["userName"].value;
    var userPattern = /^[a-zA-Z]+$/;

    var q1 = document.forms["forgetPasswordForm"]["question1"].value;
    var q2 = document.forms["forgetPasswordForm"]["question2"].value;
    var q3 = document.forms["forgetPasswordForm"]["question3"].value;
    if((userPattern.test(user_name)==false))
    {
                document.getElementById('userNameAlert').innerHTML=" **Username must be in aphabets only";
                return false;
    }
    else
    {
        document.getElementById('userNameAlert').innerHTML = '';
        document.getElementById('userNameAlert').style.display = 'none';
    }
    var alertMessage = document.getElementById('alert-message');
    var ErrorAlertMessage = document.getElementById('error-alert-message');
    if (q1 != "null" && q2 != "null" || q2 != "null" && q3 != "null" || q1 != "null" && q3 != "null" || q1 != "null" && q2 != "null"&& q3 != "null")
    {
        ErrorAlertMessage.style.display = "block";
        alertMessage.style.display = "none";
        return false;

    } 
    else{
        ErrorAlertMessage.style.display = "none";
        alertMessage.style.display = "block";
    }
}
function ResetPassword(){
    var loginForm = document.getElementById('main-login-form-section');
    var forgotPasswordForm = document.getElementById('main-forgot-pass-section');
    var resetPasswordForm = document.getElementById('reset-password-form-section');

    loginForm.style.display = "none";
    forgotPasswordForm.style.display = "none";
    resetPasswordForm.style.display = "block";
}
