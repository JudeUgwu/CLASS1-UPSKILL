let mobile_bar = document.getElementById("mobile_bar");
let nav = document.getElementById("navigation");

mobile_bar.onclick = function(){
     if(nav.style.display == "block"){
      nav.style.display  = "none";  
     }else{
      nav.style.display  = "block";  
     }

}