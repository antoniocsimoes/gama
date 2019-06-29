const timeInput = document.querySelector(".time-input");
const startBtn = document.querySelector(".start-btn");
const display = document.querySelector(".display");
const rocket = document.querySelector(".rocket");
const sound = new Audio("soundtrack.mp3");
const rockets = [
 "https://images.vexels.com/media/users/3/145819/isolated/preview/486c34cf5b3b4badd52bc427dbeb44a1-desenhos-animados-de-foguete-by-vexels.png",
 "https://ferver.com.br/wp-content/uploads/2016/06/Foguete.png",
 "https://cdn.pixabay.com/photo/2018/04/11/07/08/rocket-3309711_960_720.png"
];
let selected = 0;
let counter;
rocket.addEventListener("click", function() {
 if (selected == 2) selected = 0;
 else selected++;
 rocket.setAttribute("src", rockets[selected]);
});
startBtn.addEventListener("click", function() {
 counter = Number(timeInput.value);
 display.innerText = counter;
 const interval = setInterval(function() {
   display.innerHTML = --counter;
   if (counter === 0) {
     clearInterval(interval);
     launch();
   }
 }, 1000);
});
function launch() {
 let bottom = 0;
 sound.currentTime = 5;
 sound.play();
 const interval = setInterval(function() {
   bottom += 0.2;
   rocket.style.bottom = `${bottom}%`;
   if (bottom >= 100) {
     alert("Lançamento concluído!");
     rocket.style.bottom = 0;
     sound.pause();
     sound.load();
     clearInterval(interval);
   }
 }, 10);
}

