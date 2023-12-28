//scroll
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        let div = document.querySelector('.headerBg');
        console.log(div, "divv");
        console.log(window.scrollY, "window.scrollY");
        if (window.scrollY > 500) {
            div.classList.add('after-scroll');
        } else {
            div.classList.remove('after-scroll');
        }
    });
});

// cards hover
let bgColors = ["white", "black", "black", "#86100b", "black"]
for (let i = 0; i <= bgColors.length; i++) {
    let cardItem = document.querySelector(`.card${i+1}`);
    let links = document.querySelectorAll(".footerList a i")
    cardItem.addEventListener("mouseover", ()=>{
        document.body.style.backgroundColor = bgColors[i];
        document.body.style.transition = "all .2s ease-in-out";
        document.body.style.color = bgColors[i] === "white" ? "black" : "white";
        links.forEach(el => {
            el.style.color = bgColors[i] === "white" ? "black" : "white";
        });
      
    })
    cardItem.addEventListener("mouseout", ()=>{
        document.body.style.backgroundColor = "white";
        document.body.style.color =  "black";
        links.forEach(el => {
            el.style.color = "black"
        });
    })
}