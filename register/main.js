var valid = 'false';
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
/*   
function RegisterValidation(){
    var email=document.forms["RegisterForm"]["emailId"].value;
    var email_patt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    var user_name = document.forms["RegisterForm"]["collegeName"].value;
    var userPattern = /^[a-zA-Z]+$/;

    var main_pass=document.forms["RegisterForm"]["password"].value;
    var confirm_pass=document.forms["RegisterForm"]["confirmPassword"].value;
    
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
    if((userPattern.test(user_name)==false))
    {
                document.getElementById('collegeNameAlert').innerHTML=" **Please enter a valid College/University name";
                return false;
    }
    else
    {
        document.getElementById('collegeNameAlert').innerHTML = '';
        document.getElementById('collegeNameAlert').style.display = 'none';
    }
    return true
}*/
function EmailValid(){
    var email=document.forms["RegisterForm"]["emailId"].value;
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
function PassValid(){
    var main_pass=document.forms["RegisterForm"]["password"].value;
    var confirm_pass=document.forms["RegisterForm"]["confirmPassword"].value;
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
function CollegeValid(){
    var user_name = document.forms["RegisterForm"]["collegeName"].value;
    var userPattern = /^[a-zA-Z]+$/;
    if((userPattern.test(user_name)==false))
    {
                document.getElementById('collegeNameAlert').innerHTML=" **Please enter a valid College/University name";
                return false;
    }
    else
    {
        document.getElementById('collegeNameAlert').innerHTML = '';
        document.getElementById('collegeNameAlert').style.display = 'none';
    }
   
}
function ShowSecurityQues(){    
        //console.log('In');
        var registerForm = document.getElementById('regForm');
        var SecurityForm = document.getElementById('SecurityForm');
      
        registerForm.style.display = "none";
        SecurityForm.style.display = "block";
        
}
function QuestionValidation(){
    var q1 = document.forms["RegisterForm"]["question1"].value;
    var q2 = document.forms["RegisterForm"]["question2"].value;
    var q3 = document.forms["RegisterForm"]["question3"].value;

    var alertMessage = document.getElementById('alert-message');
    var ErrorAlertMessage = document.getElementById('security-error-alert-message');
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

function GotoRegisterForm(){
    var registerForm = document.getElementById('regForm');
    var SecurityForm = document.getElementById('SecurityForm');

    registerForm.style.display = "block";
    SecurityForm.style.display = "none";
}