const emailInputElement = document.getElementById("email-input");
const passwordInputElement = document.getElementById("password-input");
const confirmPasswordInputElement = document.getElementById("confirm-input");
const registerBtnElement = document.getElementById("register-btn");

const emailLogin = document.getElementById("email-login");
const passwordLogin = document.getElementById("password-login");

const userIDElement = document.getElementById("user-id")
const userEmailElement = document.getElementById("user-email")
const userPasswordElement = document.getElementById("user-password")







registerBtnElement.onclick = () => {
    const emailInputValue = emailInputElement.value.trim();
    const passwordInputValue = passwordInputElement.value.trim();
    const confirmPasswordInputValue = confirmPasswordInputElement.value.trim();

    if(!emailInputValue || !passwordInputValue || !confirmPasswordInputValue){
        alert ("Feel the empty gaps")
        return;
    };

    if( passwordInputValue !== confirmPasswordInputValue){
        console.log("password does not match")
        return;
    }
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

    const newUserEmailElement = document.createElement("td");
    newUserEmailElement.textContent = emailInputValue
    userEmailElement.append(newUserEmailElement);
    emailInputElement.value = "";   

    const newUserPasswordElement = document.createElement("td");
    newUserPasswordElement.textContent = passwordInputValue;
    userPasswordElement.append(newUserPasswordElement);
    passwordInputElement.value = "";   

    
    const deleteBtnElement = document.createElement("button");
    deleteBtnElement.textContent = "x";
    newTableElement.append(deleteBtnElement);

    deleteBtnElement.onclick = () => {
        if(confirm("are you sure to delete>")){

            newTableElement.remove();
        }
    };
};