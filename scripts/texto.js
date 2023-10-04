
var doorL = document.querySelector('#quarto')
var A1 = document.querySelector('#A1')
var A2 = document.querySelector('#A2')
var A3 = document.querySelector('#A3')
var A4 = document.querySelector('#A4')
var l1 = document.querySelector('#lanterna1')
var l2 = document.querySelector('#lanterna2')
var l3 = document.querySelector('#lanterna3')
var l4 = document.querySelector('#lanterna4')
var ret = document.querySelector('#back')
var h = 0
var hora =document.querySelector('#hora')
var ganh = 0
var quest = document.querySelector('#time')
var pontos = 0
var erro = 0
var resposta = ''
var c = 0





function resp1() {
  resposta = 'A1'

  if (c == 1) {
    doorL.currentTime = 0.2
    doorL.src = "jumpscares/jumpBonnie.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    
    A1.style.display = 'none'
    l1.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
    erro++
  }
  
  
  if(c==2) {
    ret.style.backgroundColor = '#0BFF4554'
    pontos++
  }
  if(c==3){
    ret.style.backgroundColor = '#0BFF4554'
    pontos++
    hora.innerHTML = '02:00'
  }
  
  
  if(c==4) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHBonnie1.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A1.style.display = 'none'
    l1.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if(c==5){
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpBallora.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    erro++
    
    A1.style.display = 'none'
    l1.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if(c==6){
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpMangle.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A1.style.display = 'none'
    l1.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if(c==7) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpMangle.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    erro++
    
    A1.style.display = 'none'
    l1.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
    }

  if (c == 8) {
    ret.style.backgroundColor = '#0BFF4554'
    pontos++
  }
  if (c == 9) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpNMarione.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    erro++
    
    A1.style.display = 'none'
    l1.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
    }
  
  
  if (c == 10) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFredbear.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A1.style.display = 'none'
    l1.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
    }
  
  if (c == 11) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFred2.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A1.style.display = 'none'
    l1.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
    }
  
  if (c == 12) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHBonnie1.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A1.style.display = 'none'
    l1.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
    }
    
    
    
    if(c==13) {
      ret.style.backgroundColor = '#0BFF4554'
      hora.innerHTML = '01:00'
      pontos++
    }
    
    if (c == 14) {
      doorL.currentTime = 2
      doorL.src = "jumpscares/jumpHBonnie1.gif"
      
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      
      }
      playSound('audio/jumpscaresFnaf3.mp3')
      A3.style.display = 'none'
      erro++
      
      A3.style.display = 'none'
      l3.style.display = 'none'
      ret.style.backgroundColor = '#FF0B4594'
    }
    
    if (c == 15) {
      doorL.currentTime = 2
      doorL.src = "jumpscares/jumpFredbear.gif"
      
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      
      }
      playSound('audio/jumpscaresFnaf4.mp3')
      A3.style.display = 'none'
      erro++
      
      A3.style.display = 'none'
      l3.style.display = 'none'
      ret.style.backgroundColor = '#FF0B4594'
    }
    
    if (c == 16) {
      doorL.currentTime = 2
      doorL.src = "jumpscares/jumpPuppet.gif"
      
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      
      }
      playSound('audio/jumpscaresFnaf3.mp3')
      A3.style.display = 'none'
      erro++
      
      A3.style.display = 'none'
      l3.style.display = 'none'
      ret.style.backgroundColor = '#FF0B4594'
    }
    
    if (c == 17) {
      doorL.currentTime = 2
      doorL.src = "jumpscares/jumpBallora.gif"
      
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      
      }
      playSound('audio/jumpscaresFnaf3.mp3')
      A3.style.display = 'none'
      erro++
      
      A3.style.display = 'none'
      l3.style.display = 'none'
      ret.style.backgroundColor = '#FF0B4594'
    }
    
    if (c == 18) {
    ret.style.backgroundColor = '#0BFF4554'
    pontos++
    }
    
    if (c == 19) {
      doorL.currentTime = 2
      doorL.src = "jumpscares/jumpPhanFoxy.gif"
      
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      
      }
      playSound('audio/jumpscaresFnaf1.mp3')
      A3.style.display = 'none'
      erro++
      
      A3.style.display = 'none'
      l3.style.display = 'none'
      ret.style.backgroundColor = '#FF0B4594'
    }
    
    if (c == 20) {
      doorL.currentTime = 2
      doorL.src = "jumpscares/jumpPhantonBB.gif"
      
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      
      }
      playSound('audio/jumpscaresFnaf1.mp3')
      A3.style.display = 'none'
      erro++
      
      A3.style.display = 'none'
      l3.style.display = 'none'
      ret.style.backgroundColor = '#FF0B4594'
    }
    
    if (c == 21) {
      doorL.currentTime = 2
      doorL.src = "jumpscares/jumpHBonnie2.gif"
      
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      
      }
      playSound('audio/jumpscaresFnaf3.mp3')
      A3.style.display = 'none'
      erro++
      
      A3.style.display = 'none'
      l3.style.display = 'none'
      ret.style.backgroundColor = '#FF0B4594'
    }
    
    if (c == 22) {
      doorL.currentTime = 2
      doorL.src = "jumpscares/jumpMangle.gif"
      
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      
      }
      playSound('audio/jumpscaresFnaf2.mp3')
      A3.style.display = 'none'
      erro++
      
      A3.style.display = 'none'
      l3.style.display = 'none'
      ret.style.backgroundColor = '#FF0B4594'
    }
    
    if (c == 23) {
      ret.style.backgroundColor = '#0BFF4554'
      hora.innerHTML = '06:00'
      pontos++
    }
    
    if (c == 24) {
      doorL.currentTime = 2
      doorL.src = "jumpscares/jumpNMarione.gif"
      
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      
      }
      playSound('audio/jumpscaresFnaf2.mp3')
      A3.style.display = 'none'
      erro++
      
      A3.style.display = 'none'
      l3.style.display = 'none'
      ret.style.backgroundColor = '#FF0B4594'
    }
  }



function resp2() {
  resposta = 'A2'
  
  
  if(c==1) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    A2.style.display = 'none'
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if (c == 2) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpSpringtrap.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if (c == 3) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhanChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if (c == 4) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  if (c == 5) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '03:00'
    pontos++
  }
  if (c == 6) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhanChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if(c==7) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '04:00'
    pontos++
  }
  
  if(c==8) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpBallora.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if(c==9) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpSpringtrap.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if(c==10) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '04:00'
    pontos++
  }
  
  if(c==11) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhanFoxy.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if(c==12) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if(c===13) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFredbear.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 14) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFred.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 15) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 16) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpSpringtrap.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 17) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '03:00'
    pontos++
  }
  
  if (c === 18) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 19) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhanChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 20) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPuppet.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 21) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '05:00'
    pontos++
  }
  
  if (c === 22) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhanFoxy.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 23) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpNMarione.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 24) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '07:00'
    ganh = 1
    pontos++
  }
}


function resp3() {
  resposta = 'A3'
  
  if(c==1) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFredbear.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if (c == 2) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhantonBB.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  if (c == 3) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPuppet.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  if (c == 4) {
    ret.style.backgroundColor = '#0BFF4554'
    pontos++
  }
  if (c == 5) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFred2.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  if (c == 6) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhantonBB.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if (c == 7) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPuppet.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c == 8) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpMangle.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c == 9) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c == 10) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFred2.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c == 11) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '06:00'
    pontos++
  }
  
  if (c == 12) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '07:00'
    ganh = 1
    pontos++
  }
  
  
  if (c === 13) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpMangle.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 14) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHBonnie2.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 15) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '02:00'
    pontos++
  }
  
  if (c === 16) {
    ret.style.backgroundColor = '#0BFF4554'
    pontos++
  }
  
  if (c === 17) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFredbear.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 18) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhantonBB.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 19) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '04:00'
    pontos++
  }
  
  if (c === 20) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhanFoxy.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 21) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFred.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 22) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpNMarione.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 23) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHBonnie2.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 24) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFredbear.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
}


function resp4() {
  resposta = 'A4'
  
  if(c==1) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '01:00'
    pontos++
  }
  if (c == 2) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpMangle.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A4.style.display = 'none'
    l4.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  if (c == 3) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpNMarione.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A4.style.display = 'none'
    l4.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  if (c == 4) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHBonnie2.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A4.style.display = 'none'
    l4.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  if (c == 5) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhanFoxy.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A4.style.display = 'none'
    l4.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  if (c == 6) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '06:00'
    pontos++
  }
  
  if (c == 7) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhanChica.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c == 8) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHBonnie2.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c == 9) {
    ret.style.backgroundColor = '#0BFF4554'
    hora.innerHTML = '05:00'
    pontos++
  }
  
  if (c == 10) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhantonBB.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c == 11) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpNMarione.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c == 12) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpMangle.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    erro++
    
    A2.style.display = 'none'
    l2.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  
  if (c === 13) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFredbear.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 14) {
    ret.style.backgroundColor = '#0BFF4554'
    pontos++
  }
  
  if (c === 15) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpMangle.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 16) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPuppet.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 17) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpHBonnie2.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 18) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpNMarione.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 19) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpFred.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf2.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 20) {
    ret.style.backgroundColor = '#0BFF4554'
    pontos++
  }
  
  if (c === 21) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhanFoxy.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 22) {
    ret.style.backgroundColor = '#0BFF4554'
    pontos++
  }
  
  if (c === 23) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpBallora.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf3.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
  
  if (c === 24) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpPhantonBB.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf1.mp3')
    A3.style.display = 'none'
    erro++
    
    A3.style.display = 'none'
    l3.style.display = 'none'
    ret.style.backgroundColor = '#FF0B4594'
  }
}


/*function resp() {
  if (correta === A1 && correta!==A2||correta!==A3||correta!==A4) {
    hora.innerHTML = '01:00'
  }
  if (correta === A2 && correta !== A1|| correta !== A3 || correta !== A4) {
    hora.innerHTML = '01:
  
  
  if (correta != A1 && correta != A2 && correta !=A3 && correta != A4) {
    doorL.currentTime = 2
    doorL.src = "jumpscares/jumpBonnie.gif"
    
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
  }
}*/







var tit = document.querySelector('h1')
var txt = document.querySelector('#texto')
var qst = document.querySelector('#quest')





function Monitor() {
  c++
  var nq =c-1
  quest.innerHTML = 'questao ' + nq

  
  if (monitorb.style.display == "block") {
    c--
    monitorb.style.display = "none"
    texts.style.display = 'none'

    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()

    }
    playSound('audio/monitor.mp3')
  }

  else {
    monitorb.style.display = "block"
    texts.style.display = 'block'

    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
      
      
      
    }
    playSound('audio/monitor.mp3')
    
    
    
    
    
    
    
    if (c === 1){
      tit.innerHTML = "Qual a origem do doce brigadeiro?"
      
      txt.innerHTML = "Em 1946, seriam realizadas as primeiras eleições diretas para presidente após os anos do“ Estado Novo”, de Getúlio Vargas.O candidato da aliança PTB / PSD, Eurico Gaspar Dutra, venceu com relativa folga.Mas o título de maior originalidade na campanha ficou para as correligionárias do candidato derrotado, Eduardo Gomes(da UDN).Brigadeiro da Aeronáutica, com pinta de galã, Eduardo Gomes tinha um apoio, digamos, entusiasmado.Para fazer o“ corpo - a - corpo” com o eleitorado, senhoras da sociedade saiam às ruas convocando as mulheres a votar em Gomes, com o slogan: “Vote no brigadeiro.Ele é bonito e solteiro”.Não satisfeitas ainda promoviam almoços e chás, nos quais serviam um irresistível docinho coberto com chocolate granulado.Ao qual deram o nome, claro, de brigadeiro."
      
      qst.innerHTML = "A finalidade desse gênero de texto é"
      
      
      correta = A4
      
      A1.innerHTML = 'A) propor mudanças.'
      A2.innerHTML = 'B) orientar procedimentos.'
      A3.innerHTML = 'C) refutar um argumento.'
      A4.innerHTML = 'D) trazer uma informação.'
      
      
      
      
    }
    if (c === 2) {
      tit.innerHTML = 'PARA QUE SERVE A FEBRE'
      
      txt.innerHTML = "A febre é um sinal de alerta de que algo vai mal no organismo. Mas cientistas do Roswell Park Center Institute, nos EUA, afirmam que ela é bem mais do que isso. Segundo um artigo publicado por eles na “Nature Immunology”, a temperatura corporal elevada ajuda o sistema de defesa do organismo a identificar a causa de uma infecção e combatê-la.Num estudo com camundongos, eles viram que quando há febre, o número de linfócitos (tipo de célula de defesa) dobra. A febre funcionaria como um gatilho para o corpo se proteger de infecções."
      
      qst.innerHTML = "O artigo acima tem por finalidade:"
      
      
      correta = A1
      
      A1.innerHTML = 'B) combater idéias erradas sobre a febre.'
      A2.innerHTML = 'A) aumentar a nossa compreensão sobre o que é a febre;'
      A3.innerHTML = 'D) alertar o leitor contra a febre;'
      A4.innerHTML = 'C) ensinar o leitor a proteger-se das infecções'

    }
    
    if (c===3) {
      tit.innerHTML = "Mariposas"
      
      txt.innerHTML = "Numa fábula árabe, as mariposas queriam entender sobre a luz. Elas desejavam saber o segredo de se sentirem tão fascinadas pela chama de uma vela. O que as deslumbrava? Seria a luz ou o calor? Pediram a ajuda da mariposa-rainha. Depois de meditar sobre o assunto, ela aconselhou que cada uma, individualmente, procurasse encontrar a resposta. Todas saíram procurando desvendar o mistério do fogo. Passado algum tempo, uma mariposa voltou cega de um olho, afirmando que havia chegado perto demais e que a luminosidade da vela a tinha ofuscado, e que continuava sem entender os mistérios da luz. Outra voltou com uma asa queimada, reconhecendo que sua experiência não fora satisfatória. Por séculos, as mariposas não entenderam por que a luz as extasiava tanto. Até que um dia uma voou na direção de uma lamparina com tanta determinação que morreu queimada. Nesse dia, a mariposa-rainha falou: “Somente esta mariposa conheceu o mistério do fogo, mas nós nunca saberemos”. Moral: O encontro com o transcendente não pode ser contido na dimensão empírica. [...]"
      
      qst.innerHTML = 'Qual é o objetivo comunicativo desse texto?'
      
      
      correta = A1
      
      A1.innerHTML = 'B) Transmitir um ensinamento.'
      A2.innerHTML = 'D) Noticiar um fato'
      A3.innerHTML = 'C) Criticar uma conduta.'
      A4.innerHTML = ' A) Persuadir o leitor.'

    }
    
    
    if(c===4) {
      txt.innerHTML = 'O primeiro dia do programa “Mais Médicos” foi marcado por faltas e desistências por parte dos médicos brasileiros. Em algumas cidades de São Paulo e do Rio de Janeiro, nenhum dos profissionais selecionados compareceu às unidades de saúde a que foram alocados — entre os que faltaram, uma parte nem sequer justificou sua ausência. Segundo as secretarias de saúde, alguns profissionais chegaram a comunicar oficialmente sua desistência do programa federal. Na capital carioca, o número de faltosos foi maior do que o de presentes. Eram esperados dezesseis profissionais, mas para o azar da população e descrédito do programa, só seis se apresentaram. Todos os que trabalharão na cidade são brasileiros e apenas um passa pelo curso de requalificação por ter se formado na Espanha — o que explica a ausência. '
      
      qst.innerHTML = 'O proposito do texto é '
      
      
      correta = A3
      
      A1.innerHTML = 'C) criticar'
      A2.innerHTML = 'D) ensinar'
      A3.innerHTML = 'A) informar'
      A4.innerHTML = 'B) comover'
    }
    
    if(c===5) {
      tit.innerHTML = 'Qual é o órgão mais dispensável do corpo humano?'
      
      txt.innerHTML = 'Se você der o azar de lesionar um órgão, torça para ser o baço. Ele tem lá suas funções, como remover os glóbulos vermelhos velhos demais e produzir parte dos anticorpos que nos protegem de vírus e bactérias. Mas dá para viver sem ele, o que não rola sem coração, pulmões, fígado, estômago, pâncreas ou intestino – sem os dois rins também não dá. Quando alguém sofre uma pancada forte na barriga e danifica o baço a ponto de ele precisar ser removido, o fígado se encarrega da “limpeza” dos glóbulos vermelhos. Já a imunidade da pessoa fica debilitada com a menor produção de anticorpos.'
      
      qst.innerHTML = 'O objetivo desse texto é'
      
      
      correta = A2
      
      A1.innerHTML = 'A) mostrar como funciona nosso corpo.'
      A2.innerHTML = 'B) dar uma informação de cunho científico.'
      A3.innerHTML = 'C) oferecer ensinamentos sobre anticorpos.'
      A4.innerHTML = 'D) explicar como se adquire imunidade.'
    }
    
    if(c===6) {
      tit.innerHTML = 'O coração roubado'
      
      txt.innerHTML = '“O Coração Roubado e outras crônicas” é uma obra capaz de tornar a leitura parte da vida do leitor, pois está repleta de textos curtos, fáceis de serem compreendidos, associando diversão e reflexão.Assim, o leitor se prende ao que está escrito e ainda é levado a questionar sobre as ocorrências do cotidiano nas quais ele está inserido.O leitor é levado a refletir sobre suas próprias ações.Em alguma das histórias ele vai se encaixar. Escritas de maneira inteligente e instigante, as 26 crônicas de Marcos Rey apresentam uma série de tipos inesquecíveis, vivendo situações as mais diversas.Nas páginas de Coração Roubado, você encontrará cenas hilariantes, absurdas, constrangedoras, delicadas...presentes no cotidiano de qualquer pessoa, em qualquer lugar.[...]'
      
      qst.innerHTML = 'Qual é a finalidade desse texto?'
      
      
      correta = A4
      
      A1.innerHTML = 'D) Divulgar um filme'
      A2.innerHTML = 'A) Divertir o leitor.'
      A3.innerHTML = 'C) Divulgar um filme'
      A4.innerHTML = 'B) Expor uma análise crítica.'
    }
    
    
    if(c===7) {
      tit.innerHTML = 'O amor por entre o verde'
      
      txt.innerHTML = 'Não é sem freqüência que à tarde, chegando à janela, eu vejo um casalzinho de brotos que vem namorar sobre a pequenina ponte de balaustrada branca que há no parque. Ela é uma menina de uns 13 anos, o corpo elástico metido num blues jeans e num suéter folgado, os cabelos puxados para trás num rabinho de cavalo que está sempre a balançar para todos os lados; ele, um garoto de, no máximo, dezesseis, esguio, com pastas de cabelo a lhe tombar sobre a testa e um ar de quem descobriu a fórmula da vida. Uma coisa eu lhes asseguro: eles são lindos, e ficam montados, um em frente ao outro, no corrimão da colunata, os joelhos a se tocarem, os rostos a se buscarem a todo momento para pequenos segredos, pequenos carinhos, pequenos beijos. São, na sua extrema juventude, a coisa mais antiga que há no parque, incluindo as velhas árvores que por ali espaçam sua verde sombra; e as momices e brincadeiras que se fazem dariam para escrever todo um tratado sobre a arquelogia do amor, pois têm uma tal ancestralidade que nunca se há de saber a quantos milênios remontam [...]'
      
      qst.innerHTML = 'Nos trechos abaixo, há uma opinião em'
      
      
      correta = A2
      
      A1.innerHTML = 'A) “...eu vejo um casalzinho de brotos...”.'
      A2.innerHTML = 'B) “Uma coisa eu lhes asseguro: Eles são lindos,”.'
      A3.innerHTML = 'C) “...os rostos a se buscarem a todo momento...”.'
      A4.innerHTML = 'D) “Ela é uma menina de uns treze anos...”.'
    }
    
    
    if (c === 8) {
      tit.innerHTML = 'Mal-estar de um anjo'
    
      txt.innerHTML = 'Ao sair do edifício, o inesperado me tomou. O que antes fora apenas chuva na vidraça, abafado de cortina e aconchego, era na rua a tempestade e a noite. Tudo isso se fizera enquanto eu descera pelo elevador? Dilúvio carioca, sem refúgio possível. Copacabana com água entrando pelas lojas rasas e fechadas, águas grossas de lama até o meio da perna, o pé tateando para encontrar calçadas invisíveis. Até movimento de maré já tinha, onde se juntasse o bastante de água começava a atuar a secreta influência da Lua: já havia fluxo e refluxo da maré. E o pior era o temor ancestral gravado na carne: estou sem abrigo, o mundo me expulsou para o próprio mundo, e eu que só caibo numa casa e nunca mais terei casa na vida, esse vestido ensopado sou eu, os cabelos escorridos nunca secarão, e sei que não serei dos escolhidos para a Arca, pois já selecionaram o melhor casal de minha espécie.'
    
      qst.innerHTML = 'Nesse texto, há uma opinião do narrador em:'
    
    
      correta = A1
      
      A1.innerHTML = 'A) “E o pior era o temor ancestral gravado na carne:...”.'
      A2.innerHTML = 'B) “Ao sair do edifício, o inesperado me tomou.”.'
      A3.innerHTML = 'C) “O que antes fora apenas chuva na vidraça,...”'
      A4.innerHTML = 'D) “... águas grossas de lama até o meio da perna,...”.'
    }
    
    
    if (c === 9) {
      tit.innerHTML = 'Cães imitam os donos'
    
      txt.innerHTML = 'Ah, olha só, isso não é só coisa de gato. Os cachorros também imitam o que os donos fazem. Um grupo de pesquisadores da Universidade Eötvös Loránd, na Hungria, treinou oito cachorros para ver mesmo se eles imitam ou não o que a gente faz. Primeiro, os donos tiveram de ensinar: fizeram algo (tipo enfiar a cabeça num balde que estava no chão, ou andar em volta de um cone) e, alguns segundos depois, deram a ordem “faça como eu”. Fizeram o teste 19 vezes, com tarefas diferentes e em intervalos maiores (os cães tinham de imitar a ação até 10 minutos depois que os donos haviam feito). Em algumas situações, até levavam o cachorro para longe do cone (ou do balde). E, em todas as tentativas, os bichinhos refizeram os passos do dono. Segundo a pesquisa, isso mostra que os cães têm memória declarativa – memória de longo prazo sobre fatos e eventos que podem ser relembrados conscientemente. “Eles fazem isso [nos imitar] naturalmente, porque são predispostos a aprender socialmente com a gente”, explica Ádám Miklós, um dos pesquisadores. Espertinhos, não? Vai ver é por isso que eles gostam tanto de dormir na sua cama. Só estão te imitando…'
    
      qst.innerHTML = 'Qual passagem desse texto expressa uma opinião do autor?'
    
    
      correta = A4
      
      A1.innerHTML = 'A) “... os cães têm memória declarativa...”.'
      A2.innerHTML = 'B) “...‘faça como eu’.”'
      A3.innerHTML = 'C) “Primeiro os donos tiveram de ensinar:...”.'
      A4.innerHTML = 'D) “Espertinhos, não?”.'
    }
    
    
    if (c === 10) {
      tit.innerHTML = 'O cerrado exige ações de preservação'
    
      txt.innerHTML = 'A Amazônia é um bioma tão majestoso que ofusca os demais existentes no Brasil. Falase muito – interna e externamente – na preservação da floresta. A preocupação é legítima. E deve manter-se. Não significa, porém, que se deva fechar os olhos para os demais. É o caso do cerrado. Segundo maior bioma do país em extensão, ele ocupa 24% do território nacional. Nos 2.039.368 km² de área distribuída em 11 estados e no Distrito Federal, abriga a maior biodiversidade em savana do mundo e dá origem a três nascentes das principais bacias hidrográficas da nação – Amazônia, Paraná e São Francisco. É, pois, estratégico. Não só pela biodiversidade e a conservação de recursos hídricos, mas também pelo sequestro de carbono. O desenvolvimento do oeste, porém, põe em risco o bioma. Desde a construção de Brasília, na década de 1950, desapareceram do mapa 58% do cerrado. Especialistas advertem que, mantido o atual ritmo de destruição, a extinção virá em 50 anos. É assustador.'
    
      qst.innerHTML = 'A opinião do autor desse texto, em relação à destruição do cerrado, evidencia-se pelo uso do termo'
    
    
      correta = A2
      
      A1.innerHTML = 'B) “majestoso”.'
      A2.innerHTML = 'C) “assustador”.'
      A3.innerHTML = 'D) “espetacular”.'
      A4.innerHTML = 'A) “estratégico”.'
    }
    
    
    if (c === 11) {
      tit.innerHTML = 'Não se perca na rede '
    
      txt.innerHTML = 'A Internet é o maior arquivo público do mundo. De futebol a física nuclear, de cinema a biologia, de religião a sexo, sempre há centenas de sites sobre qualquer assunto. Mas essa avalanche de informações pode atrapalhar. Como chegar ao que se quer sem perder tempo? É para isso que foram criados os sistemas de busca. Porta de entrada na rede para boa parte dos usuários, eles são um filão tão bom que já existem às centenas também. Qual deles escolher? Depende do seu objetivo de busca.  Há vários tipos. Alguns são genéricos, feitos para uso no mundo todo (Google, por exemplo). Use esse site para pesquisar temas universais. Outros são nacionais ou estrangeiros com versões específicas para o Brasil (Cadê, Yahoo e Altavista). São ideais para achar páginas “com.br”.'
    
      qst.innerHTML = 'O período que apresenta uma opinião do autor é'
    
    
      correta = A3
      
      A1.innerHTML = 'D) “foram criados sistemas de busca.” '
      A2.innerHTML = 'A) “A internet é o maior arquivo público do mundo.”'
      A3.innerHTML = 'B) “essa avalanche de informações pode atrapalhar.”'
      A4.innerHTML = 'C) “sempre há centenas de sites sobre qualquer assunto.”'
    }
    
    
    if (c === 12) {
      tit.innerHTML = 'Zap'
    
      txt.innerHTML = 'Não faz muito que temos esta nova TV com controle remoto, mas devo dizer que se trata agora de um instrumento sem o qual eu não saberia viver. Passo os dias sentado na velha poltrona, mudando de um canal para outro – uma tarefa que antes exigia certa movimentação, mas que agora ficou muito fácil. Estou num canal, não gosto – zap, mudo para outro. Não gosto de novo – zap, mudo de novo. Eu gostaria de ganhar em dólar num mês o número de vezes que você troca de canal em uma hora, diz minha mãe. Trata-se de uma pretensão fantasiosa, mas pelo menos indica disposição para o humor, admirável nessa mulher.'
    
      qst.innerHTML = 'Nesse texto, o narrador emite uma opinião sobre o controle remoto no trecho:'
    
    
      correta = A3
      
      A1.innerHTML = 'A) “Estou num canal, não gosto – zap, mudo para outro.”.'
      A2.innerHTML = 'C) “... uma tarefa que [...] agora ficou muito fácil.”.'
      A3.innerHTML = 'D) “... se trata agora de um instrumento sem o qual eu não saberia viver.”.'
      A4.innerHTML = 'B) “Passo os dias [...], mudando de um canal para outro...”.'
    }
    
    
    
    if(c==13) {
      tit.innerHTML = ''
      
      txt.innerHTML = 'Literatura. [Do lat. Litteratura.] S. f. 1. Arte de compor ou escrever trabalhos artísticos em prosa ou verso. 2. O conjunto de trabalhos literários dum país ou duma época. 3. Os homens de letras. 4. A vida literária. 5. A carreira das letras. 6. Conjunto de conhecimentos relativos às obras ou aos autores literários. 7. Qualquer dos usos estéticos da linguagem. (q.v.) 8. Fam. Irrealidade, ficção. 9. Bibliografia. 10.Conjunto de escritos de propaganda de produto industrial.'
      
      qst.innerHTML = 'A finalidade desse texto é'
      
      correta = A1
      
      A1.innerHTML = 'C) definir uma palavra da Língua Portuguesa.'
      A2.innerHTML = 'A) confirmar a origem de uma palavra latina.'
      A3.innerHTML = 'B) constatar mudanças de significado de uma palavra.'
      A4.innerHTML = 'D) informar o surgimento de uma nova palavra.'
    }
    
    if (c == 14) {
      tit.innerHTML = 'Desmatar não vale a pena '
    
      txt.innerHTML = 'Desmatar é ruim, mas traz crescimento econômico. Isso é o que fizeram você acreditar durante muito tempo. A realidade é bem diferente. O modelo de ocupação predominante na Amazônia é baseado na exploração madeireira predatória e na conversão de terras para agropecuária. É o que eu chamo de “boom-colapso”: nos primeiros anos da atividade econômica baseada nesse modelo, ocorre um rápido e efêmero crescimento (o boom). Mas, em seguida, vem um declínio significativo em renda, emprego e arrecadação de tributos (o colapso). A situação de quem era pobre fica ainda pior.  Esse modelo é nefasto em todos os sentidos. O avanço da fronteira na Amazônia é marcado pelo desmatamento, pela degradação dos recursos naturais e, se não bastasse tudo isso, pela violência rural. Em pouco mais de três décadas, o desmatamento passou de 0,5% do território da floresta original para quase 18% do território, em 2008. Além disso, áreas extensas de florestas sofreram degradação pela atividade madeireira predatória e devido a incêndios florestais.'
    
      qst.innerHTML = 'Por suas características, esse texto é'
    
      correta = A4
    
      A1.innerHTML = 'D) uma reportagem.'
      A2.innerHTML = 'B) um relato.'
      A3.innerHTML = 'C) uma resenha.'
      A4.innerHTML = 'A) um artigo'
    }
    
    if (c == 15) {
      tit.innerHTML = ''
    
      txt.innerHTML = 'Este livro feito sob medida para você, com histórias que retratam o universo dos adolescentes e que, na maioria das vezes, são contadas pelos próprios adolescentes. Você vai rir e chorar ao ler sobre a descoberta da verdadeira amizade, a perda do primeiro amor e as delicadas relações entre pais e filhos. Cada uma das histórias contém algum significado especial. Elas falam da luta dos jovens para crescer e realizar seus sonhos, superando a timidez, o medo do julgamento dos outros e seus próprios limites. Também alegram, comovem, reacendem a esperança e estimulam o desejo de empenhar-se para amar e viver plenamente. Esperamos que este livro se torne seu melhor amigo, disponível sempre que você precisar e pronto para contar uma história que vai aquecer o seu coração. '
    
      qst.innerHTML = 'O objetivo desse texto é'
    
      correta = A3
    
      A1.innerHTML = 'D)criticar um livro de histórias infantis.'
      A2.innerHTML = 'A) mostrar as características dos adolescentes.'
      A3.innerHTML = 'B) apresentar um livro ao leitor.'
      A4.innerHTML = 'C) contar as histórias de adolescentes.'
    }
    
    if (c == 16) {
      tit.innerHTML = ''
    
      txt.innerHTML = 'A porcentagem de tipos sanguíneos varia em diferentes grupos populacionais. Muitos povos indígenas, como várias tribos da América, não possuem o tipo B. No Brasil, os tipos O e A respondem, juntos, por quase 90% dos habitantes. Uma provável explicação para esse fenômeno está em pesquisas ainda não conclusivas: elas indicam que algumas doenças são mais comuns em determinados tipos sanguíneos. O câncer de estômago, por exemplo, seria mais frequente em pessoas com sangue tipo A; a pneumonia e certos tipos de anemia, no tipo B. Conforme certas epidemias se tornam mais frequentes, elas matam mais pessoas de certo tipo sanguíneo – e sobra mais gente dos outros.'
    
      qst.innerHTML = 'O objetivo desse texto é'
    
      correta = A3
    
      A1.innerHTML = 'A) divertir'
      A2.innerHTML = 'D) divulgar.'
      A3.innerHTML = 'C) informar.'
      A4.innerHTML = 'B) alertar.'
    }
    
    if (c == 17) {
      tit.innerHTML = 'Carta de Leitor'
    
      txt.innerHTML = 'Enaltecer a habilidade literária de Lya Luft seria “chover no molhado”. Eu a acompanho sempre, pois creio que ela é detentora da qualidade de que almejo um dia chegar próximo, e de hoje coloco em crônicas num blog cujo foco são o otimismo e a esperança. Por esse motivo, o artigo de Lya tocou-me mais do que nunca, especialmente porque sempre se percebe nela a preocupação em desfazer a opinião de alguns que a qualificam como mal-humorada, ranzinza e saudosista. Lya, no meu modo de ver, é realista, perspicaz, observadora e analista da realidade. No presente artigo, nesse momento em que passamos a ver uma tênue luz no fim do túnel mundial, ela aponta e vislumbra a luminosidade sobre todos os entraves que impedem o brasileiro e o ser humano universal de viver com um mínimo de dignidade. Ainda é possível mudar.  --"Teodoro Uberreich"--'
    
      qst.innerHTML = 'A finalidade do Texto é'
    
      correta = A2
    
      A1.innerHTML = 'C) divulgar uma obra literária.'
      A2.innerHTML = 'A) apresentar um posicionamento.'
      A3.innerHTML = 'D) relatar um acontecimento.'
      A4.innerHTML = 'B) contar uma história de vida.'
    }
    
    if (c == 18) {
      tit.innerHTML = 'A genética da esquizofrenia'
    
      txt.innerHTML = 'O maior estudo já feito sobre a esquizofrenia comprova o forte componente genético da doença: um terço de suas causas seriam resultado do efeito acumulativo de 30 mil mutações. O trabalho revelou também que erros numa misteriosa região do DNA humano aumentam de 15% a 25% os riscos de uma pessoa ter esquizofrenia. Tais revelações fazem parte da pesquisa feita por um grupo internacional, que gerou três estudos dependentes, publicados na revista “Nature”. A complexidade do problema, dizem os cientistas, torna muito difícil o desenvolvimento de testes de diagnóstico, mas as descobertas abrem caminho para novos tratamentos.'
    
      qst.innerHTML = 'A finalidade desse texto é'
    
      correta = A1
    
      A1.innerHTML = 'D) informar'
      A2.innerHTML = 'C) convencer.'
      A3.innerHTML = 'B) conceituar.'
      A4.innerHTML = 'A) classificar.'
    }
    
    if (c == 19) {
      tit.innerHTML = 'E a viagem continua...'
    
      txt.innerHTML = 'Depois de rezarmos e cantarmos muito, voltávamos todos para casa e logo chegavam convidados para o almoço, que sempre era especial. Comidas italianas que vovó, a nona, fazia. E todos os adultos matavam saudade da Itália. Ela tinha vindo de lá, de navio, no começo do século, quando meu pai tinha três anos. Mamãe chegou um pouco mais tarde, com seus pais. Depois de moços, conheceram-se no Brasil e se casaram. Durante o almoço, falavam em italiano e tomavam vinho. Era engraçado! Como na missa, não entendíamos nada...'
    
      qst.innerHTML = 'Qual é o trecho que apresenta uma opinião?'
    
      correta = A3
    
      A1.innerHTML = 'C) “... voltávamos todos para casa...”.'
      A2.innerHTML = 'B) “Mamãe chegou um pouco mais tarde,...”.'
      A3.innerHTML = 'D) “... o almoço, que sempre era especial.”.'
      A4.innerHTML = 'A) “Depois de [...] cantarmos muito,...”.'
    }
    
    if (c == 20) {
      tit.innerHTML = 'Princesa Nenúfar Elfo-Elfa'
    
      txt.innerHTML = 'Nasceu já bem pálida, de olhos claros e cabelos loiros, quase brancos. Foi se tornando invisível já na infância e viveu o resto da vida num castelo mal-assombrado, com fantasmas amigos da família. Dizem que é muito bonita, mas é bem difícil de se saber se é verdade. '
    
      qst.innerHTML = 'A opinião das pessoas sobre a princesa é de que ela: '
    
      correta = A4
    
      A1.innerHTML = 'D) Vive num castelo.'
      A2.innerHTML = 'B) É pálida, de olhos claros. '
      A3.innerHTML = 'C) Tem cabelos quase brancos. '
      A4.innerHTML = 'A) É muito bonita. '
    }
    
    if (c == 21) {
      tit.innerHTML = ''
    
      txt.innerHTML = 'O primeiro dia do programa “Mais Médicos” foi marcado por faltas e desistências por parte dos médicos brasileiros. Em algumas cidades de São Paulo e do Rio de Janeiro, nenhum dos profissionais selecionados compareceu às unidades de saúde a que foram alocados — entre os que faltaram, uma parte nem sequer justificou sua ausência. Segundo as secretarias de saúde, alguns profissionais chegaram a comunicar oficialmente sua desistência do programa federal.  Na capital carioca, o número de faltosos foi maior do que o de presentes. Eram esperados dezesseis profissionais, mas para o azar da população e descrédito do programa, só seis se apresentaram. Todos os que trabalharão na cidade são brasileiros e apenas um passa pelo curso de requalificação por ter se formado na Espanha — o que explica a ausência. '
    
      qst.innerHTML = 'Podemos perceber uma opinião expressa em: '
    
      correta = A2
    
      A1.innerHTML = '(A) “O primeiro dia do programa Mais Médicos foi marcado por faltas e desistências...” '
      A2.innerHTML = 'C) “... mas para o azar da população e descrédito do programa, só seis se apresentaram”. '
      A3.innerHTML = '(B) “... alguns profissionais chegaram a comunicar oficialmente sua desistência do programa federal.”. '
      A4.innerHTML = 'D) “Todos os que trabalharão na cidade são brasileiros e apenas um passa pelo curso de requalificação.”. '
    }
    
    if (c == 22) {
      tit.innerHTML = 'Soneca sem culpa'
    
      txt.innerHTML = 'Todos sabem que dormir bem ajuda a manter a saúde. Mas o sono ainda é cercado de desconhecimentos e mitos, como o de que precisamos dormir 8 horas por dia. “Isso é mentira”, diz Marco Túlio de Mello, chefe da disciplina de Medicina e Biologia do sono do Departamento de Psicologia da Unifesp. “Acontece que a média da população precisa de sete horas e 40 minutos de sono para sentir-se bem, mas há os curtos dormidores, que necessitam de menos de seis horas e meia, e os longos, que requerem mais de 8 horas.” A siesta é outro tema que desperta opiniões controversas. Enquanto uns acham que cochilar depois do almoço é um merecido descanso, outros veem a prática com pouca tolerância. Mas cada vez mais estudos vêm demonstrando que a soneca traz benefícios físicos, como a recuperação do corpo, e mentais, como o aumento da concentração. “Ela é ótima para quem vai trabalhar à tarde”, diz Mello. [...] E se alguém falar pra você que cochilo é coisa de preguiçoso, diga que um estudo da Universidade de Harvard mostrou que sonecas diárias de 45 minutos são suficientes para turbinar a memória e o aprendizado. Não é um ótimo argumento?'
    
      qst.innerHTML = 'No Texto, há uma opinião emNo Texto, há uma opinião em'
    
      correta = A4
    
      A1.innerHTML = 'A) o cochilo diário turbina a memória e o aprendizado.'
      A2.innerHTML = 'B) o sono ainda é cercado de mistérios e mitos.'
      A3.innerHTML = 'C) a média da população precisa de 7h40 de sono.'
      A4.innerHTML = 'D) a soneca é ótima para quem vai trabalhar à tarde.'
    }
    
    if (c == 23) {
      tit.innerHTML = 'Choro'
    
      txt.innerHTML = 'Eram todos negros: uma viola, um clarinete, um pandeiro e uma cabaça.Juntaram - se na varandinha de uma casa abandonada e ali ficaram chorando valsas, repinicando sambas.E a gente veio se ajuntando, calada, ouvindo.Alguém mandou no botequim da esquina trazer cerveja e cachaça.E em pé na calçada, ou sentados no chão da varanda, ou nos canteiros do jardinzinho, todos ficamos em silêncio ouvindo os negros. Os que ouviam não batiam palmas nem pediam música nenhuma; ficavam simplesmente bebendo em silêncio aquele choro, o floreio do clarinete, o repinicado vivo e triste da viola. Só essa música que nos arrasta e prende, nos dá alegria e tristeza, nos leva a outras noites de emoções– e grátis.Ainda há boas coisas grátis, nesta cidade de coisas tão caras e de tanta falta de coisas.Grátis– um favor dos negros. Alma grátis, poesia grátis, duas horas de felicidade grátis– sim, só da gente do povo podemos esperar uma coisa assim nesta cidade de ganância e de injustiça.Só o pobre tem tanta riqueza para dar de graça.'
    
      qst.innerHTML = 'A alternativa que apresenta uma opinião do narrador é'
    
      correta = A1
    
      A1.innerHTML = '(A) “Só o pobre tem tanta riqueza para dar de graça.”.'
      A2.innerHTML = '(B) “Alguém mandou no botequim da esquina trazer cerveja e cachaça.”'
      A3.innerHTML = '(C) “Os que ouviam não batiam palmas nem pediam música nenhuma.”'
      A4.innerHTML = '(D) “Juntaram-se na varandinha de uma casa abandonada...”'
    }
    
    if (c == 24) {
      tit.innerHTML = 'No mundo dos sinais'
    
      txt.innerHTML = 'Sob o sol de fogo, os mandacarus se erguem, cheios de espinhos. Mulungus e aroeiras expõem seus galhos queimados e retorcidos, sem folhas, sem flores, sem frutos. Sinais de seca brava, terrível!  Clareia o dia. O boiadeiro toca o berrante, chamando os companheiros e o gado. Toque de saída. Toque de estrada. Lá vão eles, deixando no estradão as marcas de sua passagem. TV Cultura, Jornal do Telecurso. '
    
      qst.innerHTML = 'A opinião do autor em relação ao fato comentado está em'
    
      correta = A2
    
      A1.innerHTML = 'A) “os mandacarus se erguem”'
      A2.innerHTML = 'C) “Sinais de seca brava, terrível!!” '
      A3.innerHTML = 'B) “aroeiras expõem seus galhos”'
      A4.innerHTML = 'D) “Toque de saída. Toque de entrada”.'
    }
    
  }
  
}




/*===========÷=÷÷=========÷====÷÷÷÷÷÷÷÷÷*/
var time = document.querySelector('#time')
var min = 24 * 60
var seg = 10 * 2

while (min > 0) {
  min--


function meuLoop(i) {
  // cria uma função de loop
  setTimeout(function() {
    // chama um setTimeout de 1s quando o loop é chamado// o seu código aqui
    console.log(i)
    i++; // incrementa o contador
    if (i < 1439) {
      // se o contador < 10, chama a função de loop novamente
      meuLoop(i); // ... de novo, que vai disparar outro setTimeout
    }
  }, 1000);
  
  if(i === 1437) {
    doorL.currentTime = 0.2
    doorL.src = "jumpscares/f3.gif"
    
    document.querySelector('.options').style.display = 'none'
    document.querySelector('#time').style.display = 'none'
    
    plac.style.display = 'block'
    point.innerHTML = 'Pontos: ' + pontos
    err.innerHTML = 'Erros: ' + erro
    
    
    function myLoop(j) {
      // cria uma função de loop
      setTimeout(function() {
        // chama um setTimeout de 1s quando o loop é chamado// o seu código aqui
        console.log(j)
        j++; // incrementa o contador
        if (j < 10) {
          // se o contador < 10, chama a função de loop novamente
          myLoop(j); // ... de novo, que vai disparar outro setTimeout
        }
      }, 1000);
    
      if (j === 9) {
        doorL.currentTime = 0.2
        doorL.src = "jumpscares/jf.gif"
        
        document.querySelector('#recomecar').style.display = 'block'
        
        
      }
  }
    myLoop(1);
  }
  
  

    
  /*if(i === 10)  {
    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
  }*/
}
}


meuLoop(1); // inicia o loop



if(ganh==1) {
  pontos=0
  erro=0
  ganh = 0
  
  alert('ganhou')
  
  document.querySelector('.options').style.display = 'none'
  document.querySelector('#time').style.display = 'none'
  document.querySelector('#recomecar')
  
  plac.style.display = 'block'
  point.innerHTML = 'Pontos: ' + pontos
  err.innerHTML = 'Erros: ' + erro
  
  function playSound(audioName) {
      var audio = new Audio(audioName)
      audio.play()
    
    }
    playSound('audio/jumpscaresFnaf4.mp3')
}


/*===========÷=÷÷=========÷====÷÷÷÷÷÷÷÷÷*/


function restart() {
  document.querySelector('#quarto').src = "imgs/quarto.jpeg"
  document.querySelector('#left').style.display = 'block'
  document.querySelector('#right').style.display = 'block'
  document.querySelector('#bed').style.display = 'block'
  document.querySelector('#wardrobe').style.display = 'block'
  document.querySelector('#monitorIcon').style.display = "block"
  document.querySelector('.options').style.display = "block"
  document.querySelector('#recomecar').style.display = 'none'
  quest.style.display = 'block'
  plac.style.display = 'none'
  hora = 0
  erro = 0
}

var plac = document.querySelector('#placar')
var point = document.querySelector('#pont')
var err = document.querySelector('#errs')