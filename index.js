let numLength = document.querySelectorAll('.drum').length;
console.log(numLength);
let button = document.querySelectorAll("button");
let audio = document.createElement("audio");
audio.src = "sounds/tom-1.mp3";
function clickHandle(event) {
  let text = event.key;
  // console.log(text);
  let click = this.innerHTML
  // console.log(click);
  switch (text) {
    case "w":
      document.querySelector("." + text).classList.add("pressed");
      audio.src = "sounds/tom-1.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + text).classList.remove("pressed");
      }, 200);
      break;
    
    case "a":
      document.querySelector("." + text).classList.add("pressed");
      audio.src = "sounds/tom-2.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + text).classList.remove("pressed");
      }, 200);
      break;
    
    case "s":
      document.querySelector("." + text).classList.add("pressed");
      audio.src = "sounds/tom-3.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + text).classList.remove("pressed");
      }, 200);
      break;  
    
    case "d":
      document.querySelector("." + text).classList.add("pressed");
      audio.src = "sounds/tom-4.mp3"; 
      audio.play();
      setTimeout(function () {
        document.querySelector("." + text).classList.remove("pressed");
      }, 200);
      break; 
    
    case "j":
      document.querySelector("." + text).classList.add("pressed");
      audio.src = "sounds/snare.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + text).classList.remove("pressed");
      }, 200);
      break;
    
    case "k":
      document.querySelector("." + text).classList.add("pressed");
      audio.src = "sounds/crash.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + text).classList.remove("pressed");
      }, 200);
      break;
    
    case "l":
      document.querySelector("." + text).classList.add("pressed");
      audio.src = "sounds/kick-bass.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + text).classList.remove("pressed");
      }, 200);
      break;
    
    default:
      console.log("key pressed: "+text);
  }
  switch (click) {
    case "w":
      document.querySelector("." + click).classList.add("pressed");
      audio.src = "sounds/tom-1.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + click).classList.remove("pressed");
      }, 200);
      break;
    
    case "a":
      document.querySelector("." + click).classList.add("pressed");
      audio.src = "sounds/tom-2.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + click).classList.remove("pressed");
      }, 200);
      break;
    
    case "s":
      document.querySelector("." + click).classList.add("pressed");
      audio.src = "sounds/tom-3.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + click).classList.remove("pressed");
      }, 200);
      break;  
    
    case "d":
      document.querySelector("." + click).classList.add("pressed");
      audio.src = "sounds/tom-4.mp3"; 
      audio.play();
      setTimeout(function () {
        document.querySelector("." + click).classList.remove("pressed");
      }, 200);
      break; 
    
    case "j":
      document.querySelector("." + click).classList.add("pressed");
      audio.src = "sounds/snare.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + click).classList.remove("pressed");
      }, 200);
      break;
    
    case "k":
      document.querySelector("." + click).classList.add("pressed");
      audio.src = "sounds/crash.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + click).classList.remove("pressed");
      }, 200);
      break;
    
    case "l":
      document.querySelector("." + click).classList.add("pressed");
      audio.src = "sounds/kick-bass.mp3";
      audio.play();
      setTimeout(function () {
        document.querySelector("." + click).classList.remove("pressed");
      }, 200);
      break;
    
    default:
      console.log("key pressed: "+click);
  }
}
document.addEventListener("keydown", clickHandle);
for (let index = 0; index < numLength; index++) {
  document.querySelectorAll('.drum')[index].addEventListener('click', clickHandle);
  
}