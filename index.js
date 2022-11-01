var cvName = ['VICTORIA DANKO']
var textPosition = 0; 
var speed = 100;

typewriter = () => {
  document.querySelector("#cv-name").innerHTML = cvName[0].substring(0, textPosition) + '<span>\u25AE</span>';
  
  if(textPosition++ != cvName[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)

var startGame = document.querySelector("#start-game")
var runGame = document.querySelector(".game-field")
var resume = document.querySelector(".container")
var loading = ['Loading...']
var textProcessor = 0
var speedForLoader = 200


loader = () => {
  document.querySelector(".loader-text").innerHTML = loading[0].substring(0, textProcessor) + '<span>\u25AE</span>';
  
  if(textProcessor++ != loading[0].length)
    setTimeout(loader, speedForLoader);
}

startGame.addEventListener('click', function (){
   runGame.classList.toggle("open");
   resume.classList.toggle ("close");
   loader()
   
})
