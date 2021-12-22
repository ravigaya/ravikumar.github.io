



const scroll= document.querySelector(".scroll-up")

scroll.addEventListener('click',function(){

     

        // console.log("hello")

    window.scrollTo(0,0)
       
        // top:0;
        // left:0;
        // behavior:"smooth",

    
});

const togglemenu=document.querySelector(".toggle-menu");
const ul= document.querySelector("nav ul");
const nav=document.querySelector("nav");

togglemenu.addEventListener('click',function(){
   
     ul.classList.toggle('show');


})

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);