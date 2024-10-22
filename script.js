let user=document.getElementById("user");
let loginBtn=document.getElementById("loginBtn");


user.addEventListener("click", function(){
    document.querySelector(".loginpage").classList.toggle("active1");
})

loginBtn.addEventListener("click", function(){

    let email=document.getElementById("email");
    let pass=document.getElementById("pass");

    if(email.value=="" && pass.value==""){
        alert("Please fill details")
    }else{
        alert("you Logged In");
        document.querySelector(".loginpage").style.display="none"
    }
})





