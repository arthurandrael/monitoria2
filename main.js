var game = document.querySelector('.quarto')
game.style.display = 'none'


function ambience() {
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/ambiente1.mp3')
}



function start() {
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/wAffton.mp3')
}




var monitorb = document.querySelector("#gif")
var texts = document.querySelector('.textos')
var doorL = document.querySelector('#quarto')
var doorR = document.querySelector('#quarto')
var ward = document.querySelector('#quarto')
var thebed = document.querySelector('#quarto')





/*---------------------------------------*/


var leftDoor = document.querySelector('#left')
var rightDoor = document.querySelector('#right')
var bed = document.querySelector('#bed')
var wardrobe = document.querySelector('#wardrobe')


/*---------------------------------------*/


function Left() {
  doorL.src = "imgs/doorL.jpg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
  
  
  document.querySelector('#lanterna1').style.display = 'block'
  document.querySelector('#lanterna2').style.display = 'none'
  document.querySelector('#lanterna3').style.display = 'none'
  document.querySelector('#lanterna4').style.display = 'none'
  monitorb.style.display = 'none'
  texts.style.display = 'none'
}


function Right() {
  doorR.src = "imgs/doorR.jpg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
  
  document.querySelector('#lanterna1').style.display = 'none'
  document.querySelector('#lanterna2').style.display = 'block'
  document.querySelector('#lanterna3').style.display = 'none'
  document.querySelector('#lanterna4').style.display = 'none'
  monitorb.style.display = 'none'
  texts.style.display = 'none'
}


function Bed() {
  thebed.src = "imgs/BedOff.jpg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
  
  document.querySelector('#lanterna1').style.display = 'none'
  document.querySelector('#lanterna2').style.display = 'none'
  document.querySelector('#lanterna3').style.display = 'block'
  document.querySelector('#lanterna4').style.display = 'none'
  texts.style.display = 'none'
}


function Wardrobe() {
  ward.src = "imgs/wardrobeOff.jpeg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
  
  document.querySelector('#lanterna1').style.display = 'none'
  document.querySelector('#lanterna2').style.display = 'none'
  document.querySelector('#lanterna3').style.display = 'none'
  document.querySelector('#lanterna4').style.display = 'block'
  texts.style.display = 'none'
}


/*---------------------------------------*/


function Back() {
  document.querySelector('#quarto').src = "imgs/quarto.jpeg"
  document.querySelector('#left').style.display = 'block'
  document.querySelector('#right').style.display = 'block'
  document.querySelector('#bed').style.display = 'block'
  document.querySelector('#wardrobe').style.display = 'block'
  document.querySelector('#monitorIcon').style.display = "block"
  document.querySelector('.options2').style.display = "none"
  
  
  document.querySelector('#A1').style.display = 'none'
  document.querySelector('#A2').style.display = 'none'
  document.querySelector('#A3').style.display = 'none'
  document.querySelector('#A4').style.display = 'none'
  
  
  document.querySelector('#back').style.backgroundColor = 'transparent'
}


/*--------------------------------------*/


function Ligar1() {
  doorL.src = 'imgs/doorLOn.jpeg'
  document.querySelector('.alternativa').style.display = 'block'
  document.querySelector('#A1').style.display = 'block'
  document.querySelector('#A2').style.display = 'none'
  document.querySelector('#A3').style.display = 'none'
  document.querySelector('#A4').style.display = 'none'
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/flash.mp3')
}
function Ligar2() {
  doorL.src = 'imgs/doorROn.jpeg'
  document.querySelector('.alternativa').style.display = 'block'
    document.querySelector('#A2').style.display = 'block'
    document.querySelector('#A1').style.display = 'none'
    document.querySelector('#A3').style.display = 'none'
    document.querySelector('#A4').style.display = 'none'

  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/flash.mp3')
}


function Ligar3() {
  doorL.src = 'imgs/bedOn.gif'
  document.querySelector('.alternativa').style.display = 'block'
  document.querySelector('#A3').style.display = 'block'
  document.querySelector('#A1').style.display = 'none'
  document.querySelector('#A2').style.display = 'none'
  document.querySelector('#A4').style.display = 'none'
  
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.loop = 'false'
    audio.play()
    
  }
  playSound('audio/freddies.mp3')
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/flash.mp3')
  
}
function Ligar4() {
  doorL.src = 'imgs/wardrobeOn.jpeg'
  document.querySelector('.alternativa').style.display = 'block'
  document.querySelector('#A4').style.display = 'block'
  document.querySelector('#A1').style.display = 'none'
  document.querySelector('#A3').style.display = 'none'
  document.querySelector('#A2').style.display = 'none'
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/flash.mp3')
}


function Desligar1() {
  doorL.src = "imgs/doorL.jpg"
  document.querySelector('#A1').style.display = 'none'
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/flash.mp3')
}


function Desligar2() {
  doorL.src = 'imgs/doorR.jpg'
  document.querySelector('#A2').style.display = 'none'
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/flash.mp3')
}


function Desligar3() {
  doorL.src = 'imgs/BedOff.jpg'
  document.querySelector('#A3').style.display = 'none'
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/flash.mp3')
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.pause()
  }
  playSound('audio/freddies.mp3')
}


function Desligar4() {
  doorL.src = "imgs/wardrobeOff.jpeg"
  document.querySelector('#A4').style.display = 'none'
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.play()
  
  }
  playSound('audio/flash.mp3')
}


/*---------------------------------------*/



var auFreddies = document.querySelector('#freddies')



/*---------------------------------------*/


