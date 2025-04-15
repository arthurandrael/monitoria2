
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
    doorL.src = "jumpscares/jumpFred2.gif"
    
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






var dsc = document.querySelector('#h1')
var tit = document.querySelector('h1')
var txt = document.querySelector('#texto')
var qst = document.querySelector('#quest')





function Monitor() {
  c++
  var nq =c-1
  quest.innerHTML = 'questao ' + nq

  
  if (monitorb.style.display == "block") {
    
    if (c == 8) {
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
      }
      playSound('audio/NightLaugh.mp3')
    }
    
    
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
    
    if (c === 4 || c === 14) {
      function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play()
    
      }
      playSound('audio/freddyLaugh.mp3')
      erro++
    }
    
    
    
    monitorb.style.display = "block"
    texts.style.display = 'block'

    function playSound(audioName) {
      let audio = new Audio(audioName)
      audio.play()
      
      
      
    }
    playSound('audio/monitor.mp3')
    
/*-------------------------*/
    
    
    
    
    if (c === 1){
      dsc.innerHTML = ""
      
      tit.innerHTML = ""
      
      txt.innerHTML = "1. Qual é o principal papel da fundamentação teórica em um trabalho acadêmico?."
      
      qst.innerHTML = ""
      
      
      correta = A4
      
      A1.innerHTML = 'B) Garantir que o trabalho tenha mais páginas.'
      A2.innerHTML = 'A) Substituir a análise dos dados da pesquisa.'
      A3.innerHTML = 'C) Apresentar as normas da ABNT.'
      A4.innerHTML = 'D) Embasar teoricamente o estudo, mostrando o que já foi pesquisado sobre o tema.'
      
      
      
      
    }
    if (c === 2) {
      dsc.innerHTML = ""
      
      tit.innerHTML = ''
      
      txt.innerHTML = "2. Por que é importante revisar a literatura existente ao elaborar a fundamentação teórica ?"
      
      qst.innerHTML = ""
      
      
      correta = A1
      
      A1.innerHTML = 'B) Para compreender o que já foi estudado e evitar repetição de temas.'
      A2.innerHTML = 'A) Para copiar ideias de outros autores.'
      A3.innerHTML = 'C) Para facilitar a escrita da conclusão.'
      A4.innerHTML = 'D) Para escolher um tema aleatório para a pesquisa.'

    }
    
    if (c===3) {
      dsc.innerHTML = ""

      tit.innerHTML = ""
      
      txt.innerHTML = "3. Como a fundamentação teórica contribui para a delimitação do problema de pesquisa?"
      
      qst.innerHTML = ''
      
      
      correta = A1
      
      A1.innerHTML = 'B) Ajuda a identificar lacunas e a focar em aspectos específicos do tema. '
      A2.innerHTML = 'A) Ela não influencia na delimitação do problema.'
      A3.innerHTML = 'C) Serve apenas para citar autores famosos.'
      A4.innerHTML = 'D) Determina a metodologia que será usada."'

    }
    
    
    if(c===4) {
      dsc.innerHTML = ""
      
      txt.innerHTML = '4. Quais são os riscos de uma fundamentação teórica fraca ou mal elaborada?'
      
      qst.innerHTML = ''

      
      correta = A3
      
      A1.innerHTML = 'D) A fundamentação teórica não tem impacto significativo.'
      A2.innerHTML = 'A) O trabalho será mais curto e fácil de ler.'
      A3.innerHTML = 'C) O trabalho pode perder credibilidade e rigor científico. '
      A4.innerHTML = 'B) A banca avaliadora pode ignorar essa parte.'
    }
    
    if(c===5) {
      dsc.innerHTML = ""
      
      tit.innerHTML = ''
      
      txt.innerHTML = '5. De que forma a fundamentação teórica contribui para a originalidade de uma pesquisa ?'
      
      qst.innerHTML = ''
      
      
      correta = A2
      
      A1.innerHTML = 'A) Repetindo estudos antigos para reforçar os resultados.'
      A2.innerHTML = 'C) Ajudando a identificar lacunas e propor novas abordagens.'
      A3.innerHTML = 'B) Limitando a pesquisa a teorias já existentes.'
      A4.innerHTML = 'D) Garantindo que o pesquisador use as mesmas fontes que outros autores.'
    }
    
   /* if(c===6) {
      dsc.innerHTML = "D20 Reconhecer diferentes formas de tratar uma informação na comparação de textos que tratam do mesmo tema, em função das condições em que ele foi produzido e daquelas em que será recebido"
      
      tit.innerHTML = 'Texto I'
      


  
      txt.innerHTML = '“Sou completamente a favor da flexibilização das relações trabalhistas, pois a velhís¬sima legislação brasileira, além de anacrônica, vem comprometendo seriamente a nossa competitividade em nível global.” <br><br><strong>Texto II</strong><br><br>“É uma falácia dizer que com a eliminação dos direitos trabalhistas se criarão mais empregos. O trabalhador brasileiro já é por demais castigado para suportar mais essa provocação.”'
      
      qst.innerHTML = 'Os textos acima tratam do mesmo assunto, ou seja, da relação entre patrão e em¬pregado. Os dois se diferenciam, porém, pela abordagem temática. O texto II em relação ao texto I apresenta uma:'
      
      
      correta = A4
      
      A1.innerHTML = '(D) aceitação.'
      A2.innerHTML = '(B) semelhança.'
      A3.innerHTML = '(A) ironia.'
      A4.innerHTML = '(C) oposição.'
    }
    
    
    if(c===7) {
      dsc.innerHTML = "D21 Reconhecer posições distintas entre duas ou mais opiniões relativas ao mesmo fato ou ao mesmo tema."
      
      tit.innerHTML = 'Texto 1'
      
      txt.innerHTML = 'Estamos vendo a consolidação de um grande diretor. Estamos vendo DiCaprio em sua melhor atuação na carreira. Isso não é pouco! [...] Elenco inspirado, forte, físico. [...] Vá ao cinema e, enquanto admira o belo trabalho de fotografia, [...] entregue-se por inteiro. [...] “O Regresso” vai te dar a opção de escolher o que é o bem e o que é o mal. [...]  <br>George F.   <br><br><strong>Texto 2<strong><br><br>  Muito chato! Filme sem emoção, monótono e sem nexo em muitas partes. [...] Não vale a pena assistir. Um dos piores filmes que já assisti. Me desculpem os experts em cinema, mas não passa sentimento nenhum na trama. A fotografia é linda, mas só isso!  <br>Neide Santos'
      
      qst.innerHTML = 'Em relação ao filme “O Regresso”, os autores desses textos'
      
      
      correta = A2
      
      A1.innerHTML = 'B) defendem ideias complementares.'
      A2.innerHTML = 'A) apresentam posições divergentes.'
      A3.innerHTML = 'C) expõem argumentos confusos.'
      A4.innerHTML = 'D) manifestam o mesmo ponto de vista.'
    }
    
    
    if (c === 8) {
      dsc.innerHTML = "D15 Estabelecer relações lógico - discursivas presentes no texto, marcadas por conjunções, advérbios, etc."
      
      tit.innerHTML = 'SOBRE A TRANSPOSIÇÃO DO SÃO FRANCISCO '
    
      txt.innerHTML = 'Um problema essencial na discussão das questões envolvidas no projeto de transposição de águas do São Francisco para os rios do Ceará e Rio Grande do Norte diz respeito ao equilíbrio que deveria ser mantido entre as águas que seriam obrigatórias para as importantíssimas hidrelétricas já implantadas no médio/baixo vale do rio Paulo Afonso, Itaparica, Xingó.'
    
      qst.innerHTML = 'No trecho ...”transposição de águas do São Francisco <strong>para os rios do Ceará</strong>” (linhas 1 e 2) o termo grifado estabelece uma relação de'
    
    
      correta = A1
      
      A1.innerHTML = 'C) destino.'
      A2.innerHTML = 'A) assunto.'
      A3.innerHTML = 'B) causa.'
      A4.innerHTML = 'D) finalidade.'
    }
    
    
    if (c === 9) {
      dsc.innerHTML = "D16 Identificar efeitos de ironia ou humor em textos variados."

      tit.innerHTML = 'Piada'
    
      txt.innerHTML = 'A menina foi visitar a avó no campo. A avó tinha uma criação enorme de aves, e a menina, que morava na cidade, ficou encantada. E de repente, passeando pela fazenda da avó, ela viu um pavão. Voltou correndo para casa e, toda alegre, avisou à vovó: – Vovó! Vovó! Uma de suas galinhas está dando flor! '
    
      qst.innerHTML = 'Nesse texto, o trecho que apresenta humor é: '
    
    
      correta = A4
      
      A1.innerHTML = 'A) “A menina foi visitar a avó no campo.”.'
      A2.innerHTML = 'B) “A avó tinha uma criação enorme de aves,...”. '
      A3.innerHTML = 'D) “... pela fazenda da avó, ela viu um pavão.”. '
      A4.innerHTML = 'C) “Uma de suas galinhas está dando flor!”.'
    }
    
    
    if (c === 10) {
      dsc.innerHTML = "D17 Identificar o efeito de sentido decorrente do uso da pontuação e de outras notações."
      
      tit.innerHTML = 'O marinheiro que tocava tuba '
    
      txt.innerHTML = 'Tendo nascido no interior do Ceará, como foi acabar sendo regente? <br> Nasci no Iguatu, porque meu pai trabalhava naquela época nessa cidade, numa função muito delicada e até pejorativa: a de delegado de polícia. Na época, havia uma espécie de guerra no Ceará, com intervenção federal. <br> [...] E, como ia sendo expulso de tudo quanto era escola, meu pai resolveu me colocar na Escola de Aprendizes de Marinheiros. Aí a coisa mudou. A escola, naquela época, era semicorrecional. Meu pai advertia: “ Agora você toma jeito”.  <br> Éramos 14 irmãos, dos quais eu era o quinto, pela ordem. Família “pequena”, como veem. Oito homens, seis mulheres.'
    
      qst.innerHTML = 'As aspas empregadas na palavra “‘pequena’” dão à palavra um tom'
    
    
      correta = A2
      
      A1.innerHTML = 'B) crítico.'
      A2.innerHTML = 'C) irônico.'
      A3.innerHTML = 'A) coloquial'
      A4.innerHTML = 'D) metafórico.'
    }
    
    
    if (c === 11) {
      dsc.innerHTML = "D18 Reconhecer o efeito de sentido decorrente da escolha de uma determinada palavra ou expressão."
      
      tit.innerHTML = 'Longe de pendurar a chuteira'
    
      txt.innerHTML = 'Quem solta a voz para anunciar que “o Maraca é nosso” sabe o que está dizendo. Sentado do lado oﬁcial do Vasco (esquerdo) ou do Flamengo (direito), o torcedor que aguarda uma semana ou mais para vibrar pelo time do coração se sente em casa no Estádio Jornalista Mário Filho, popularmente conhecido como Maracanã (nome de um pássaro). Essa íntima relação provocada pelos quase 200 mil metros quadrados de complexo de lazer começou há 59 anos, quando o jornalista Mário Filho iniciou sua batalha em prol da construção de um mega estádio para a Copa do Mundo de 1950. Assim como a linha da história, que, por vezes, parece repetir, o Maracanã, inaugurado em estado inacabado para a partida entre jogadores de São Paulo e do Rio (3 a 1 para os paulistas), está prestes a respirar novos ares e entrar, novamente, para a história em 2014, quando o Brasil abrigará a Copa do Mundo. [...]'
    
      qst.innerHTML = 'No trecho “O <strong>Maraca</strong> é nosso”, o uso da palavra destacada sugere'
    
    
      correta = A3
      
      A1.innerHTML = 'D) propriedade.&&'
      A2.innerHTML = 'A) aceitação.'
      A3.innerHTML = 'B) intimidade.'
      A4.innerHTML = 'C) respeito'
    }
    
    
    if (c === 12) {
      dsc.innerHTML = "D19 Reconhecer o efeito de sentido decorrente da exploração de recursos ortográficos e / ou morfossintáticos."
      
      tit.innerHTML = 'Estresse animal'
    
      txt.innerHTML = 'Os animais estão cada vez mais sendo acometidos pelo estresse, que, segundo a veterinária Monisa Corraini, pode desencadear problemas gástricos ou até mesmo a agressividade. O sintoma costuma surgir em períodos grandes de fome ou sede, viagens longas, com a falta ou excesso de exercícios, solidão, mudanças na rotina, em ambientes conturbados, durante o banho e tosa, nas consultas veterinárias, participação em exposições ou competições.  <br> Os bichinhos necessitam de dedicação e qualidade de vida para serem felizes.'
    
      qst.innerHTML = 'No trecho “Os <strong>bichinhos</strong> necessitam de dedicação e qualidade de vida para serem felizes.”, o uso do diminutivo na palavra destacada deve-se'
    
    
      correta = A3
      
      A1.innerHTML = 'A) ao fato de os animais serem pequenos.'
      A2.innerHTML = 'C) à suavização dos fatos vividos pelos bichos.'
      A3.innerHTML = 'D) à afetividade pelos bichos de estimação.'
      A4.innerHTML = 'B) ao desprezo pela situação dos animais.'
    }
    
    
    
    if(c==13) {
      dsc.innerHTML = "D20 Reconhecer diferentes formas de tratar uma informação na comparação de textos que tratam do mesmo tema, em função das condições em que ele foi produzido e daquelas em que será recebido"
      
      tit.innerHTML = 'Rubinho a mil por hora'
      
      txt.innerHTML = 'Desde criança, Rubens Barrichello é louco por corridas. Aos seis anos já voava nas pistas de kart. Depois passou rápido pela Fórmula Ford, Fórmula Opel, Fórmula 3 e Fórmula 3000. Não parou por aí. Foi o mais jovem piloto da história a entrar para a Fórmula 1, quando tinha apenas 20 anos.  <br><br><strong>Vencer ou vencer</strong><br><br>   Ayrton Senna sempre fez tudo muito rapidinho. Aos quatro anos ganhou o seu primeiro kart. Aos dez, já pilotava no Autódromo de Interlagos. Quando tinha 31 anos, era o mais jovem tricampeão da história da Fórmula 1. Vencer ou vencer era o seu lema.'
      
      qst.innerHTML = 'Esse dois textos'
      
      correta = A1
      
      A1.innerHTML = 'A) apresentam uma biografia.'
      A2.innerHTML = 'B) convidam para corridas.'
      A3.innerHTML = 'C) incentivam o uso do kart.'
      A4.innerHTML = 'D) oferecem um prêmio.'
    }
    
    if (c == 14) {
      dsc.innerHTML = "D21 Reconhecer posições distintas entre duas ou mais opiniões relativas ao mesmo fato ou ao mesmo tema."
      
      tit.innerHTML = 'Antena de celular faz mal à saúde?'
    
      txt.innerHTML = '<strong>Texto 1 </strong><br><br>  A exposição permanente às radiações eletromagnéticas pode causar cefaleia, insônia e até alterações cardiovasculares. A Organização Mundial da Saúde ainda não declarou qual a distância prudente entre uma casa e uma torre de telefonia celular, mas órgãos ambientalistas adotam 300 m como uma medida segura.<br>José Carlos Virtuoso, professor de engenharia ambiental.   <br><br><strong>Texto 2</strong><br><br> Não há comprovação de que a radiação das antenas de telefonia celular cause dano à saúde. A única evidência se refere à tolerância humana aos níveis de radiação eletromagnética. O problema é que não há uma fiscalização dos órgãos competentes sobre esses níveis, produzidos também por outras fontes, como antenas de rádio e TV.'
    
      qst.innerHTML = 'Nesses dois textos, as opiniões emitidas pelos professores são'
    
      correta = A4
    
      A1.innerHTML = 'C) iguais.'
      A2.innerHTML = 'D) semelhantes.'
      A3.innerHTML = 'A) complementares.'
      A4.innerHTML = 'B) divergentes'
    }*/
    
    /*if (c == 15) {
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
    }*/
    
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
  
  if(i === 1435) {
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
    
    
    
    
  
    if (i === 1437) {
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
  
  
  
  meuLoop(1); // inicia o loop
  
  
}

var plac = document.querySelector('#placar')
var point = document.querySelector('#pont')
var err = document.querySelector('#errs')



  