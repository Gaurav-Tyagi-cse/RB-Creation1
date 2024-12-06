let btn = document.querySelector(".nav-cl");
let nav = document.querySelector(".nav-syst");

btn.addEventListener('click',()=>{
 if(nav.style.display != "flex"){
    nav.style.display = "flex"
 }
 else{
    nav.style.display = "none"
 }
});

// <!---------------------------------Dropdown 1 Section--------------------------------->

let drop = document.querySelector(".substitute-menu");
let dropBtn = document.querySelector(".drop-section");




dropBtn.addEventListener('click', ()=>{
   if(drop.style.display != "flex"){
    drop.style.display = "flex" ;
    document.querySelector("#drop-main").style.fontSize = "18px";
    document.querySelector("#drop-main").style.color = "darkblue";
   }
    else{
        drop.style.display = "none"
        document.querySelector("#drop-main").style.fontSize = "13px";
        document.querySelector("#drop-main").style.color = "black";
   }
});

// <!---------------------------------Dropdown 2 Section--------------------------------->

let clkbtn = document.querySelector("#drop-sc");
let drodowns = document.querySelector(".design-sub-menu");

clkbtn.addEventListener('click', ()=>{
   if(drodown.style.display != "flex"){
      drodown.style.display = "flex";
   }
   else{
      drodown.style.display = "none"
   }
});

