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

    var q1 = document.forms["RegisterForm"]["question1"].value;
    var q2 = document.forms["RegisterForm"]["question2"].value;
    var q3 = document.forms["RegisterForm"]["question3"].value;

    var alertMessage = document.getElementById('alert-message');
    var ErrorAlertMessage = document.getElementById('security-error-alert-message');
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
       
    } 
}
/*
function GotoRegisterForm(){
    var registerForm = document.getElementById('regForm');
    var SecurityForm = document.getElementById('SecurityForm');

    registerForm.style.display = "block";
    SecurityForm.style.display = "none";
}*/