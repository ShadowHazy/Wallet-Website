function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email=="admin@gmail.com" && password=="123456"){
        window.location.assign("/1.Homepage/index.html");
    }
    else{
        alert("Invalid Information")
        return;
    }
}
