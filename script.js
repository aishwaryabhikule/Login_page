var username = document.getElementById('fname');
var email = document.getElementById('email');

var PANNumber = document.getElementById("PANNumber");
var PANCard = document.getElementById("PANCard");


var regx = /^[a-zA-Z ]*$/;
var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
var regex =  /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;  

username.onblur = function() {myfunction()};
email.onblur = function() {myfunction1()};
PANNumber.onblur = function() {validation()};

function myfunction(){
    if(!username.value.match(regx)){
        error.textContent = "Name must content characters";
        error.style.color = "red";
       
        return false;
    }
    error.textContent = " ";
    return true;
}

function myfunction1(){  
    if(!email.value.match(pattern)){
        
        error1.textContent = "Invalid Email id";
        error1.style.color = "red";
        return false;
    }
    error1.textContent = " ";
    return true;
}



function validation(){
    // if(!username.value.match(regx)){
    //     error.textContent = "Name must content characters";
    //     error.style.color = "red";
    //     return false;
    // }

    //  if(!email.value.match(pattern)){
        
    //     error1.textContent = "Invalid Email id";
    //     error1.style.color = "red";
    //     return false;
    // }
    
    if (regex.test(PANNumber.value.toUpperCase())) {
            PANCard.style.visibility = "hidden";
       
        } 
        else {
            PANCard.style.visibility = "visible";
            return false;
        }
        // PANCard.textContent = "";
    
    sessionStorage.setItem('fname',username.value);
    sessionStorage.setItem('email',email.value);
    PANCard.textContent = " ";
    return true;
    }


function calculate(){

    var amount = document.getElementById('amount').value;
    var ir = 8.5 /12/ 100;
    var nm = 15 * 12;
    var rate = Math.pow((ir+1),nm);

    var emi = amount * ir * (rate) / (rate-1);
    console.log(amount);
    console.log(rate);
    console.log(emi);
    
    
    document.getElementById("output").innerHTML = parseInt(emi);
}

 
