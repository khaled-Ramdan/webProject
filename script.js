let landingPage = document.querySelector(".landing");
let imgArray=["k1.jpeg", "k2.jpeg","k3.jpeg","k4.jpeg","k5.jpeg","k6.jpeg"];
landingPage.style.backgroundImage='url("k1.jpeg")';
setInterval(() => {
    let randomNumber =Math.floor(Math.random()*imgArray.length);
    landingPage.style.backgroundImage='url('+imgArray[randomNumber]+')';
},10000);