


/* ***********************--------Search Box 

const container = document.querySelector(".container");
const input = document.querySelector(".serach");
const button = document.getElementById("_button");

const serachIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");

button.addEventListener("click",()=>{
    container.classList.toggle("active");
    button.classList.toggle("active");

    if(container.classList.contains("active")){
        serachIcon.style.opacity = 0;
        closeIcon.style.opacity = 1;
    } else{
        serachIcon.style.opacity = 1;
        closeIcon.style.opacity = 0;
    }

    input.focus();

 })



/* ***********************--------Scratcher 

document.addEventListener("mousemove",(e)=>{
    const body = document.querySelector("body");
    const scretcher = document.createElement("span");

    scretcher.style.left = -17 + e.offsetX +"px";
    scretcher.style.top = -17 + e.offsetY +"px";

    body.append(scretcher);

})





/* ***********************--------Tab Preview 

const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const body = document.body;
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active");


function setColors(tab,bgColor,iconClass,infoColor){
    body.style.backgroundColor = bgColor;
    icon.innerHTML = `<i class = "${iconClass}"></i>`;
    for(let i = 0 ; i < item.length; i++){
        item[i].style.color = infoColor;
    }
}

tabOne.addEventListener("click", () => {
    setColors(tabOne,"#00d8ff", "fab fa-react", "#00d8ff");
    tabOne.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})
tabTwo.addEventListener("click", () => {
    setColors(tabTwo,"#42b883", "fab fa-vuejs", "#42b883");
    tabTwo.classList.add("tabOne");
    tabOne.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})
tabThree.addEventListener("click", () => {
    setColors(tabThree,"#b52e31", "fab fa-angular", "#b52e31");
    tabThree.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabOne.classList.remove("tabOne");
})

setColors(tabOne,"#00d8ff", "fab fa-react", "#00d8ff");
tabOne.classList.add("tabOne");


/* ***********************--------Captcha Generator and Checking Match

const display = document.getElementById("_status");
const body = document.body;
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");

const char= "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOOPASDFGHJKLZXCVBNM";

let captcha = "";

body.onload = function generateCaptcha(){
    const captchalength = 6;
    for(let i=0;i<captchalength;i++){
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char.substring(randomIndex,randomIndex+1);
    }

    document.getElementById("_generator").value = captcha;
    display.innerText = "Generator";
}

submit.onclick = function checkCatcha(){
    const subChar = document.getElementById("_client-text").value;
    if(subChar === ""){
        display.innerText = "Please Enter The Text Shown Above";
    } else if(subChar === captcha){
        display.innerText = "Matched";
    }else{
        display.innerText = "Not Matched";
    }   
}

refresh.onclick = function loadCatcha(){
    let newCaptcha = "";
    for(let i = 0; i < captcha.length; i++){
        const randomChar = char[Math.floor(Math.random() * char.length)];
        newCaptcha += randomChar; 
    }
    captcha = newCaptcha;
    document.getElementById("_generator").value = captcha;
    display.getElementById("_status").value = "Captcha Generator";
}

*/




/* ***********************--------Scroll Indicator

const scrollIndicator = document.getElementById("scrollIndicator");

const totalScrollHiegt = document.body.scrollHeight - window.innerHeight;
function updateScrollIndicator(){
    const scrollPercentage = (window.scrollY/totalScrollHiegt) * 100;
    scrollIndicator.style.width = scrollPercentage +"%";
}

window.addEventListener("scroll",updateScrollIndicator);

updateScrollIndicator();
*/




/* ***********************--------Bell Notification

const button = document.getElementById("_button");
const notify = document.getElementById("_notification");

button.addEventListener("click",()=>{
    
    const counter = Number(notify.getAttribute("data-count")) || 0;
    
    notify.setAttribute("data-count", counter + 1);
    notify.classList.add("count");
    notify.classList.add("notify");
    

});

notify.addEventListener("animationend",()=>{
    notify.classList.remove("notify");
});

*/


/* ***********************--------Cursor Animation

for(let i = 1; i< 2000; i++){
    const shape = document.createElement("span");
    document.querySelector(".container").appendChild(shape);
}

*/


/* ***********************--------Cursor Animation
const letters = document.querySelectorAll(".letters span");

letters.forEach((letter)=>{

    letter.addEventListener("click",(e)=>{
        e.target.classList.add("active");
    });
});
*/
