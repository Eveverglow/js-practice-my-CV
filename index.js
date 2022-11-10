var cvName = ['VICTORIA DANKO']
var textPosition = 0; 
var speed = 100;
var startGame = document.querySelector("#start-game")
var runGame = document.querySelector(".game-field")
var resume = document.querySelector(".container")
var loading = ['Loading...']
var textProcessor = 0
var speedForLoader = 200
var closeButton = document.querySelector('.exit-btn')
var endLoading = document.querySelector('.loader-field')
var game = document.querySelector('.game')


typewriter = () => {
  document.querySelector("#cv-name").innerHTML = cvName[0].substring(0, textPosition) + '<span>\u25AE</span>';
  
  if(textPosition++ != cvName[0].length)
    setTimeout(typewriter, speed);
}
window.addEventListener("load", typewriter)

function openGame(){
endLoading.classList.toggle("close")
game.classList.toggle("close")

} 

loader = () => {
  document.querySelector(".loader-text").innerHTML = loading[0].substring(0, textProcessor) + '<span>\u25AE</span>';
  
  if(textProcessor++ <= loading[0].length) {
    setTimeout(loader, speedForLoader);
    console.log('loader')
  } else {
    openGame()
  }
}

function closeGame() {
  endLoading.classList.toggle ("close");
  runGame.classList.toggle("open");
  resume.classList.toggle ("close");
  game.classList.toggle("close")
  textProcessor = 0;
}

startGame.addEventListener('click', function (){
   runGame.classList.toggle("open");
   resume.classList.toggle ("close");
   loader()
   
})

closeButton.addEventListener('click', function () {
  closeGame()
})

var character = document.getElementById('character')
var obstacle = document.getElementById('obstacle')

function jump (){
  if (character.classList != 'animate') {
  character.classList.add('animate')
  }
  setTimeout(function(){
    character.classList.remove('animate');
  }, 500);
}

var checkFail = setInterval (function (){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

  var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

  if(obstacleLeft < 60 && obstacleLeft > 10 && characterTop >= 50) {
    // obstacle.style.animation = 'none';
    alert('game over')
  }
  
  

}, 10)

