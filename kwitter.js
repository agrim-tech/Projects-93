var username;
function login(){
    username = document.getElementById("userinput").value;
    localStorage.setItem("username" ,username)
}