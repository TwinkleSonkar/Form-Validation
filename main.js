let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes );

let username = id("username"),
  email = id("useremail"),
  form = id("form"),
  errorMsg = classes("error"),
  password = id("userpassword"),
  submit = id("submit"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    engine(username,0,"Username Cannot be blank");
    engine(email,1,"Email Cannot be blank");
    engine(password,2,"Password Cannot be blank");
});
let engine=(id,serial,message)=>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML=message;
        failureIcon[serial].style.opacity="1";
        successIcon[serial].style.opacity="0";
    }
    else{
        errorMsg[serial].innerHTML="";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }

}