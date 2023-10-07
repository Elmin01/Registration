

const emailInputElement = document.getElementById("email-input");
const passwordInputElement = document.getElementById("password-input");
const confirmPasswordInputElement = document.getElementById("confirm-input");

const registerBtnElement = document.getElementById("register-btn");
const loginBtnElement = document.getElementById("login-button");

const emailLogin = document.getElementById("email-login");
const passwordLogin = document.getElementById("password-login");

const userIDElement = document.getElementById("user-id")
const userEmailElement = document.getElementById("user-email")
const userPasswordElement = document.getElementById("user-password")

const userTableRowElement = document.getElementById("user-row")
const userTableBodyElement = document.getElementById("user-body")

const emailLoginElement = document.getElementById("email-login");
const passwordLoginElement = document.getElementById("password-login");








registerBtnElement.onclick = () => {
    const emailInputValue = emailInputElement.value.trim();
    const passwordInputValue = passwordInputElement.value.trim();
    const confirmPasswordInputValue = confirmPasswordInputElement.value.trim();

    const newUserEmailElement = document.createElement("td");
    newUserEmailElement.textContent = emailInputValue;
    userTableBodyElement.append(newUserEmailElement);
    emailInputElement.value = "";   

    const newUserPasswordElement = document.createElement("td");
    newUserPasswordElement.textContent = passwordInputValue;
    userTableBodyElement.append(newUserPasswordElement);
    passwordInputElement.value = "";   
    confirmPasswordInputElement.value = "";

    
    const deleteBtnElement = document.createElement("button");
    deleteBtnElement.textContent = "x";
    userTableBodyElement.append(deleteBtnElement);

    deleteBtnElement.onclick = () => 
    {
        if(confirm("are you sure to delete>")){

            userTableBodyElement.remove();
        }
    }

    if(!emailInputValue && !passwordInputValue && !confirmPasswordInputValue){
        alert ("Feel the empty gaps")
        return;
    }
    else if(!emailInputValue){
        alert("Feel the email")
        return;
    }
    else if(!passwordInputValue){
        alert("Feel the password gap")
        return;
    }
    else if( passwordInputValue !== confirmPasswordInputValue){
        alert("password does not match")
        return;
    }
    else{
        alert("Registration is successful")
        return;
    };
    
    function ValidateEmail(emailInputValue){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(emailInputElement.value.match(mailformat)){
            alert("Valid email address!");
            document.form1.text1.focus();
            return true;
        }
        else{
            alert("You have entered an invalid email address!");
            document.form1.text1.focus();
            return false;
        }
    };

    function validatePassword() {
        var newPassword = document.getElementById('user-password').newPassword.value;
        var minNumberofChars = 6;
        var maxNumberofChars = 16;
        var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        alert(newPassword); 
        if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
            return false;
        }
        if(!regularExpression.test(newPassword)) {
            alert("password should contain at least one number and one special character");
            return false;
        }
    }

};

loginBtnElement.onclick = () =>{
    const emailInputValue = emailInputElement.value.trim();
    const passwordInputValue = passwordInputElement.value.trim();

    const emailLoginValue = userTableBodyElement.value.trim();
    const passwordLoginValue = userTableBodyElement.value.trim();

//    const validUserEmail = emailInputValue;
//    const validUserPassword = passwordInputValue;





    if(emailLoginValue !== userTableBodyElement){
        alert("email is not correct")
        return;
    }
    else if(passwordLoginValue !== userTableBodyElement){
        alert("password is not correct")
        return;
    }
    
        alert("login successful")
        return;


};