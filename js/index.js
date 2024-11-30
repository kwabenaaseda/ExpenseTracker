
function Menu (){
   const nav = document.getElementById("nav"); 
   const button = document.getElementById("menu"); 
   const close = document.getElementById("close");

   if(nav.style.display="none"){
    nav.style.display="flex";
    button.style.display="none";
    close.style.display="flex";

   }
   
}
function Close (){
   const nav = document.getElementById("nav"); 
   const button = document.getElementById("menu"); 
   const close = document.getElementById("close");

   if(nav.style.display="flex"){
    nav.style.display="none";
    button.style.display="flex";
    close.style.display="none";

   }
   
}