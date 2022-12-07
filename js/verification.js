/*Initializzing User name and Password*/
var useridArray = ["BCA/40541/20", "BCA/40543/20", "BCA/40545/20"];
var passArray = ["piyush", "amit", "raunak"];

/*3 Times Login Only*/
var userAttempt = 0;
const TOTAL_ATTEMPT = 3;

/*Function Called*/
var  validate = () => {
    /*Accepting User Input for Id and Password*/
    var userName = document.getElementById("txt_username").value;
    var userPassword = document.getElementById("id_password").value;

    /*Captcha*/
    var string1 = document.getElementById("capt").value;
    var string2 = document.getElementById("textInput").value;

    

    /*Condtion for 3 times*/
    if (TOTAL_ATTEMPT != userAttempt) {
        if ((useridArray.includes(userName)) && (passArray.includes(userPassword))) {
            /*Captcha Verification*/
            if (string2 == string1) {
                location.replace("https://www.bitmesra.ac.in/")
            }
            else {
                console.log(userAttempt)
                userAttempt++;
                alert("Captcha didn't match");
            }
        }
        else {
            console.log(userAttempt)
            userAttempt++;
            alert("Invalid UserID or Password");
        }
    }
    else {
        alert("Out of Limits");
    }
}
