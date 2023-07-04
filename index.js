let blocks = document.getElementsByClassName("block");
for(let i = 0; i < blocks.length; i++){
  blocks[i].style.opacity = "0";
}
var ww = 0;
let inv = setInterval(animAppear, 100);

function animAppear(){
  if (ww >= blocks.length)
  {
    clearInterval(inv);
    return;
  }

  const anim = blocks[ww].animate(
    [{ opacity: "0", transform: "scale(0.8)" }, { opacity: "1", transform: "scale(1)" }],
    {
      fill: "forwards",
      easing: "ease",
      duration: 1000,
    }
  );
  ww++;
  anim.play();
}


fetch('data.json')
    .then((response) => response.json())
    .then((json) => loadData(json));
  
var mydata = null;
function loadData(json){
  mydata = json;
}

let btmDaily = document.getElementById("daily")
let btmWeekly = document.getElementById("weekly")
let btmMonthly = document.getElementById("monthly")

let workHours = document.getElementById("work-hours");
let workLast = document.getElementById("work-last");

let playHours = document.getElementById("play-hours");
let playLast = document.getElementById("play-last");

let studyHours = document.getElementById("study-hours");
let studyLast = document.getElementById("study-last");

let exerciseHours = document.getElementById("exercise-hours");
let exerciseLast = document.getElementById("exercise-last");

let socialHours = document.getElementById("social-hours");
let socialLast = document.getElementById("social-last");

let selfHours = document.getElementById("self-hours");
let selfLast = document.getElementById("self-last");

let statsHours = [workHours, playHours, studyHours, exerciseHours, socialHours, selfHours];
let statsLast = [workLast, playLast, studyLast, exerciseLast, socialLast, selfLast];

function loadDaily(){
  btmDaily.style.color = "white";
  btmWeekly.style.color = "hsl(235, 45%, 61%)";
  btmMonthly.style.color = "hsl(235, 45%, 61%)";

  for(let i = 0; i < statsHours.length; i++){
    statsHours[i].textContent = mydata[i].timeframes.daily.current + "hrs";
    statsLast[i].textContent = "Previous Day - " + mydata[i].timeframes.daily.previous + "hrs";
  }
}

function loadWeekly(){
  btmDaily.style.color = "hsl(235, 45%, 61%)";
  btmWeekly.style.color = "white";
  btmMonthly.style.color = "hsl(235, 45%, 61%)";

  for(let i = 0; i < statsHours.length; i++){
    statsHours[i].textContent = mydata[i].timeframes.weekly.current + "hrs";
    statsLast[i].textContent = "Last Week - " + mydata[i].timeframes.weekly.previous + "hrs";
  }
}

function loadMonthly(){
  btmDaily.style.color = "hsl(235, 45%, 61%)";
  btmWeekly.style.color = "hsl(235, 45%, 61%)";
  btmMonthly.style.color = "white";

  for(let i = 0; i < statsHours.length; i++){
    statsHours[i].textContent = mydata[i].timeframes.monthly.current + "hrs";
    statsLast[i].textContent = "Last Month - " + mydata[i].timeframes.monthly.previous + "hrs";
  }
}