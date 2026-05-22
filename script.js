// SCROLL REVEAL ANIMATION

const hiddenElements = document.querySelectorAll(
  ".section, .project-card, .about-card, .skill-card"
);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });
});

hiddenElements.forEach((el)=>{
  el.classList.add("hidden");
  observer.observe(el);
});


// NAVBAR SHADOW

window.addEventListener("scroll", ()=>{

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.25)";
  }else{
    navbar.style.boxShadow = "none";
  }

});