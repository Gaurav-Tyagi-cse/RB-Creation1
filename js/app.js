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



// 


document.addEventListener('DOMContentLoaded', () => {
   const lightboxModal = document.getElementById('lightbox-modal');
   const lightboxImg = document.getElementById('lightbox-img');
   const closeBtn = document.querySelector('.lightbox-close');
   const uploadInput = document.getElementById('upload-img');

   // Open lightbox for static images
   document.querySelectorAll('.image-link').forEach(link => {
       link.addEventListener('click', (e) => {
           e.preventDefault(); // Prevent default link behavior
           const imgSrc = link.getAttribute('data-src');
           lightboxImg.src = imgSrc; // Set lightbox image source
           lightboxModal.style.display = 'block'; // Show the modal
       });
   });

   // Handle image upload
   uploadInput.addEventListener('change', (event) => {
       const file = event.target.files[0];
       if (file) {
           const reader = new FileReader();
           reader.onload = (e) => {
               lightboxImg.src = e.target.result; // Load uploaded image into lightbox
               lightboxModal.style.display = 'block'; // Show the modal
           };
           reader.readAsDataURL(file);
       }
   });

   // Close the lightbox
   closeBtn.addEventListener('click', () => {
       lightboxModal.style.display = 'none';
   });

   // Close the lightbox when clicking outside the image
   lightboxModal.addEventListener('click', (e) => {
       if (e.target === lightboxModal) {
           lightboxModal.style.display = 'none';
       }
   });
});
