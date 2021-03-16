var objUser=[
    {
        username:"admin",
        password:"admin"
    },
    {
        username:"chai",
        password:"chai@123"
    }
]
function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="#57b846";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#57B846";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }

 function login(){
     var username = document.getElementById("username").value
     var password = document.getElementById("password").value
     for(i=0;i < objUser.length;i++){
         if(username == objUser[i].username && password == objUser[i].password){
             console.log(username+"is logged in!!!")
             window.location.href="movie.html";
             return
         }else {
             console.log("incorrect username and password")
            }
        }
    }

 function signup(){
     var registeredUser = document.getElementById("user").value
     var registerdEmail = document.getElementById("email").value
     var registerdPassword = document.getElementById("pass").value

     localStorage.setItem("USER",registeredUser);
     localStorage.setItem("EMAIL",registerdEmail);
     localStorage.setItem("PASSWORD",registerdPassword);

     var newUser = {
         username : registeredUser,
         password: registerdPassword
     }
     for(i=0;i<objUser.length;i++){
         if(registeredUser == objUser[i].username){
             alert("the user already exist!!!!")
             return
         }else if(registerdPassword.length<0){
             alert("password is too weak")
             return
         }
     }
     objUser.push(registeredUser,registerdPassword)
     console.log(objUser)

 }
 