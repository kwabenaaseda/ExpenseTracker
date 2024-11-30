function Onload() {
    const button = document.getElementById("startBtn");
const main = document.getElementById("main");
const news = document.createElement("a");
button.style.display="none"
news.innerHTML=`<button onclick="tellThem()" id="cleanAfter">Start1</button>`;
main.appendChild(news);

}

function tellThem(){
    const nameErr=document.getElementById("nameErr");
    const mailErr=document.getElementById("mailErr");
    const passErr=document.getElementById("passErr");
    const cpassErr=document.getElementById("cpassErr");

    const userNAme =document.getElementById("userName").value;
    const userMail=document.getElementById("userMail").value;
    const userPassword=document.getElementById("userPassword").value;
    const confirmUserPassword=document.getElementById("ConfirmPassword").value;
   

   if (userNAme===""){
     nameErr.textContent="Please Enter Username";
    nameErr.style.display="flex"
    nameErr.style.color="red";
   }
   if (userMail===""){
     mailErr.textContent="Please Enter Address";
    mailErr.style.display="flex"
    mailErr.style.color="red";
   }
   if (userPassword===""){
     passErr.textContent="Please Enter Password";
    passErr.style.display="flex"
    passErr.style.color="red";
   }
   if (confirmUserPassword===""){
     cpassErr.textContent="Please Confirm Password";
    cpassErr.style.display="flex"
    cpassErr.style.color="red";
   }
}
function formal(){
    const userNAme =document.getElementById("userName").value;
    const userMail=document.getElementById("userMail").value;
    const userPassword=document.getElementById("userPassword").value;
    const userNAmebox =document.getElementById("userName");
    const userMailbox =document.getElementById("userMail");
    const userPassbox =document.getElementById("userPassword");
    const userCPassbox =document.getElementById("ConfirmPassword");
    const nameErr=document.getElementById("nameErr");
    const mailErr=document.getElementById("mailErr");
    const passErr=document.getElementById("passErr");
    const cpassErr=document.getElementById("cpassErr");

    const localUser = localStorage.getItem(userNAme);
    const localUserMail = localStorage.getItem(userMail);
    const verify = document.getElementById("verify");


    //logics
if(localUser!==String(userNAme)){
    nameErr.textContent="Username Available";
    nameErr.style.display="none";
    nameErr.style.color="green";
    nameErr.style.justifySelf="end";
    userNAmebox.style.borderColor="green";
    userNAmebox.style.background="none"; 
    userNAmebox.style.backgroundColor="white"; 
    userNAmebox.style.boxShadow="20px 4px rgba(0, 128, 85, 0.432)";
}
else if(localUser===String(userNAme)){
    nameErr.textContent="Username unavailable";
    nameErr.style.display="flex"
    nameErr.style.color="red";
    userNAmebox.style.borderColor="red";
    userNAmebox.style.background="linear-gradient(to right,rgba(128, 0, 0, 0.432),rgba(128, 0, 0, 0.158))"
    userNAmebox.style.boxShadow="20px 4px rgba(128, 0, 0, 0.432) "
}
if(localUserMail!==String(userMail)){
    mailErr.textContent=" Mail Available"
    mailErr.style.display="none"
    mailErr.style.color="green"
    mailErr.style.justifySelf="end";
    userMailbox.style.borderColor="green";
    userMailbox.style.background="none"; 
    userMailbox.style.backgroundColor="white"; 
    userMailbox.style.boxShadow="20px 4px rgba(0, 128, 85, 0.432)"
}
else if(localUserMail===String(userMail)){
    mailErr.textContent="Mail unavailable";
    mailErr.style.display="flex"
    mailErr.style.color="red";
    userMailbox.style.borderColor="red";
    userMailbox.style.background="linear-gradient(to right,rgba(128, 0, 0, 0.432),rgba(128, 0, 0, 0.158))"
    userMailbox.style.boxShadow="20px 4px rgba(128, 0, 0, 0.432) "
}
if(String(userPassword).length >=7){
    passErr.textContent="Username Available"
    passErr.style.display="none"
    passErr.style.color="green"
    passErr.style.justifySelf="end";
    userPassbox.style.borderColor="green";
    userPassbox.style.background="none"; 
    userPassbox.style.backgroundColor="white"; 
    userPassbox.style.boxShadow="20px 4px rgba(0, 128, 85, 0.432)"
}
else if(String(userPassword).length <=7){
    passErr.textContent="Password must at least 8 characters";
    passErr.style.display="flex"
    passErr.style.color="red";
    
    passErr.style.justifySelf="end";
    userPassbox.style.borderColor="red";
    userPassbox.style.background="linear-gradient(to right,rgba(128, 0, 0, 0.432),rgba(128, 0, 0, 0.158))"
    userPassbox.style.boxShadow="20px 4px rgba(128, 0, 0, 0.432) "
}
if(String(userCPassbox.value)===String(userPassword)){
    cpassErr.textContent="Username Available"
    cpassErr.style.display="none"
    cpassErr.style.color="green"
    cpassErr.style.justifySelf="end";
    userCPassbox.style.borderColor="green";
    userCPassbox.style.background="none"; 
    userCPassbox.style.backgroundColor="white"; 
    userCPassbox.style.boxShadow="20px 4px rgba(0, 128, 85, 0.432)"
}

else if(String(userCPassbox.value)!==String(userPassword)){
    cpassErr.textContent="Mismatching Password"
    cpassErr.style.display="flex"
    cpassErr.style.color="red"
    cpassErr.style.justifySelf="end";
    userCPassbox.style.borderColor="red";
    userCPassbox.style.background="linear-gradient(to right,rgba(128, 0, 0, 0.432),rgba(128, 0, 0, 0.158))"; 
    userCPassbox.style.backgroundColor="red"; 
    userCPassbox.style.boxShadow="20px 4px rgba(128, 0, 0, 0.432)";
    
}




if (verify.style.display==="flex"){
const button = document.getElementById("startBtn");
const button1 = document.getElementById("cleanAfter")
const main = document.getElementById("main");
const news = document.createElement("a");
button1.style.display="none";
button.style.display="flex";

}
}









function UserData(){
    //variables
    const userNAme =document.getElementById("userName").value;
    const userMail=document.getElementById("userMail").value;
    const userPassword=document.getElementById("userPassword").value;
    const confirmUserPassword=document.getElementById("ConfirmPassword").value;

    //Errors
    const nameErr=document.getElementById("nameErr");
    const mailErr=document.getElementById("mailErr");
    const passErr=document.getElementById("passErr");
    const cpassErr=document.getElementById("cpassErr");

    //check if user doesnt already exist
    const localUser = localStorage.getItem(userNAme);
    const localUserMail = localStorage.getItem(userMail);
    
    //It exists
     
   localStorage.setItem("Gib","Gibs")
    //append to storage 
    //allow access

    return;
}