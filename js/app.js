const h1 = document.querySelector(".name1");
const h2 = document.querySelector(".myname");
const h3 = document.querySelector(".and");
setTimeout(()=>{
    h1.style.display = "flex";
    h2.style.display = "flex";
    h3.style.display = "flex";
    h1.style.animation = "loading 2s forwards";
    h2.style.animation = "loading 2s forwards";
    h3.style.animation = "loading 2s forwards";
},2000);