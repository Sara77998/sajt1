function validate(){
    
    var name = document.getElementById("contact-form-text1");
    var surname = document.getElementById("contact-form-text2");
    var email = document.getElementById("contact-form-text3");
    var message = document.getElementById("contact-form-text");
    
    if(name.value.trim == "" || surname.value.trim == "" || email.value.trim == "" || messege.value.trim == ""){
        alert("no blank values allowed")
        return false;
    }else{
        true;
    }
    
}
