var username = document.forms['myform']['username'];
var email = document.forms['myform']['email'];

var PANNumber = document.getElementById("PANNumber");
var PANCard = document.getElementById("PANCard");


var regx = /^[a-zA-Z ]*$/;
var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
var regex =  /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;  




function validation(){
    if(!username.value.match(regx)){
       
        error.textContent = "Name must content characters";
        error.style.color = "red";
        return false;
    }

    else if(!email.value.match(pattern)){
        
        error1.textContent = "Invalid Email id";
        error1.style.color = "red";
        return false;
    }
    
    else {
        if (regex.test(PANNumber.value.toUpperCase())) {
            PANCard.style.visibility = "hidden";
            
        } 
        else {
            PANCard.style.visibility = "visible";
            return false;
        }
        PANCard.textContent = "";
       
    }
    
    sessionStorage.setItem('fname',username.value);
    sessionStorage.setItem('email',email.value);
   
return true;


}

function calculate(){
    amount=document.getElementById('amount').value;
    rate=document.getElementById('rate').value;
    time=document.getElementById('time').value;
    const interest = (amount * (rate * 0.01)) / time;
    let emi = ((amount / time) + interest).toFixed(2);
    emi = emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("output").innerHTML = emi;
}



