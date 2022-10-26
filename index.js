var cvName = ['VICTORIA DANKO']
var textPosition = 0; 
var speed = 100;
typewriter = () => {
  document.querySelector("#cv-name").innerHTML = cvName[0].substring(0, textPosition) + '<span>\u25AE</span>';
  
  if(textPosition++ != cvName[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)
