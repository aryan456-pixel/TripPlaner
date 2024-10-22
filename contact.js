let user=document.getElementById("user");
let loginBtn=document.getElementById("loginBtn");

let Name=document.getElementById("Name");
let Email=document.getElementById("Email");
let Connect=document.getElementById("Connect");


user.addEventListener("click",function(){
    document.querySelector(".loginpage").classList.toggle("active1");
})

loginBtn.addEventListener("click",function(){

    let email=document.getElementById("email");
    let pass=document.getElementById("pass");

    if(email.value=="" && pass.value==""){
        alert("Please fill details")
    }
    else{
        alert("you Logged In");
        document.querySelector(".loginpage").style.display="none"
    }
})


Connect.addEventListener("click",function(){
    if (Name.value=="" && Email.value==""){
        alert("Enter Name & Email")
    }
    else{
        alert("Thank You, We will reach you further.")
    }
})