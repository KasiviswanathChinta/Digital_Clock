function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours,minutes,seconds);

    if(hours>12){
        hours = hours-12;
    }


let hrs = document.getElementById("hours");
hrs.innerText = hours; 


let mins = document.getElementById("mins");
mins.innerText = minutes;

let secs = document.getElementById("secs");
secs.innerText = seconds;

}

setInterval(() => {
    clock()  
} ,1000);

let date = new Date();
let hours = date.getHours();

if(hours>=12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "PM";
}
else if (hours<12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "AM";
}

let greeting = document.getElementById("greeting");
if((hours>12)&&(hours<16)){
    greeting.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
}
if((hours>=16)&&(hours<21)){
    greeting.innerText = "GOOD EVENING !!";
}
if((hours>=21)&&(hours<24)){
    greeting.innerText = "GOOD NIGHT !!";
}

let set = document.getElementById("set");
set.addEventListener("mouseover", function(){
this.innerText="Party Time";
})

set.addEventListener("mouseout", function(){
this.innerText="Set Time";
})

set.addEventListener("click",function(){
let date = new Date();
let hours = date.getHours();
let wakeup = document.getElementById("timing");
let lunch = document.getElementById("timing1");
let nap = document.getElementById("timing2");
let night = document.getElementById("timing3");

let picture = document.getElementById("bigimage");

if(parseInt(timing.value)===hours){
    document.getElementById("grab").innerText = "GRAB HEALTHY BREAKFAST!!!"; 
    picture.src="./wakeup.svg"
}
else if(parseInt(timing1.value)===hours){
    document.getElementById("grab").innerText = "LET'S HAVE SOME LUNCH!!"; 
    picture.src="./lunch.svg"
}
else if(parseInt(timing2.value)===hours){
    document.getElementById("grab").innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    picture.src="./nap.png"
}
else{
    document.getElementById("grab").innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
    picture.src="./night.svg"
}

let variation = document.getElementsByClassName("tim");
console.log("karma");
variation[0].innerText = timing.options[timing.selectedIndex].text;
variation[1].innerText = timing1.options[timing1.selectedIndex].text;
variation[2].innerText = timing2.options[timing2.selectedIndex].text;
variation[3].innerText = timing3.options[timing3.selectedIndex].text;
})


