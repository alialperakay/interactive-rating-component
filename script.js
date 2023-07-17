const mainContainer=document.querySelector(".main-container")
const rateContainer=document.querySelector(".rate-container")
const thankYou=document.querySelector(".thank-you")
const subButton=document.getElementById("submiting")
const rating=document.getElementById("rating")
const rates=document.querySelectorAll(".btn")

subButton.addEventListener("click", () =>{
    thankYou.classList.remove("hidden")
    rateContainer.style.display="none"
});

rates.forEach(

    (rate)=>{
        rate.addEventListener("click",()=>{
        rating.innerHTML=rate.innerHTML
    })
    })

