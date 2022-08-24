//  java script Id method

// const a=document.getElementById("start");

// document.getElementById("demo").innerHTML="web page user friendly for " + a.innerHTML;

//  java script class method

// const collection = document.getElementsByClassName("phone");

// collection[1].innerHTML = "one plus!";

function check(){
    let password=document.getElementById("password").value;
    let password2=document.getElementById("conform-password").value;
    if(password==password2){
        document.getElementById("error").innerHTML="match your password"
    }
    else{
        document.getElementById("error").innerHTML="did not match your password"
    }
}
