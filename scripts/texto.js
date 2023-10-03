
var doorL = document.querySelector('#quarto')
var A1 = document.querySelector('#A1')
var A2 = document.querySelector('#A2')
var A3 = document.querySelector('#A3')
var A4 = document.querySelector('#A4')
var h = 0
var hora =document.querySelector('#hora')
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
    erro++
  }
  
  
  if(c==2) {
    alert('certo')
    pontos++
    hora.innerHTML = '02:00'
  }
  if(c==3){
    alert('certo')
    pontos++
    hora.innerHTML = '03:00'
  }
  if(c==4) {
    alert('errado')
    erro++
  }
  if(c==5){
    alert('errado')
    erro++
  }
  if(c==6){
    alert('errado')
    erro++
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
  }
  
  
  if (c == 4) {
    alert('errado')
    erro++
  }
  if (c == 5) {
    alert('certo')
    hora.innerHTML = '05:00'
    pontos++
  }
  if (c == 6) {
    alert('errado')
    erro++
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
  }
  if (c == 4) {
    alert('certo')
    hora.innerHTML = '04:00'
    pontos++
  }
  if (c == 5) {
    alert('errado')
    erro++
  }
  if (c == 6) {
    alert('errado')
    erro++
  }
}


function resp4() {
  resposta = 'A4'
  
  if(c==1) {
    alert('certo')
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
  }
  if (c == 3) {
    
    erro++
  }
  if (c == 4) {
    alert('errado')
    erro++
  }
  if (c == 5) {
    alert('errado')
    erro++
  }
  if (c == 6) {
    alert('certo')
    hora.innerHTML = '06:00'
    pontos++
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
    
  }
  
}




/*===========÷=÷÷=========÷====÷÷÷÷÷÷÷÷÷*/



/*function ant() {
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
      tit.innerHTML = ''
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
}



var at1 = document.querySelector('#at1')
var at2 = document.querySelector('#at2')
var at3 = document.querySelector('#at3')
var at4 = document.querySelector('#at4')


function prox() {
  tit.style.display = 'none'
  qst.style.display = 'none'
  txt.style.display = 'none'
  
  if(c==1) {
    
    at1.innerHTML = 'A) propor mudanças.'
    at2.innerHTML = 'B) orientar procedimentos.'
    at3.innerHTML = 'C) refutar um argumento.'
    at4.innerHTML = 'D) trazer uma informação.'
  }
  
  if (c == 2) {
  
    at1.innerHTML = 'A) aumentar a nossa compreensão sobre o que é a febre;'
    at2.innerHTML = 'B) combater idéias erradas sobre a febre.'
    at3.innerHTML = 'C) ensinar o leitor a proteger-se das infecções'
    at4.innerHTML = 'D) alertar o leitor contra a febre;'
  }
  
  if (c == 3) {
  
    at1.innerHTML = 'A) Persuadir o leitor.'
    at2.innerHTML = 'B) Transmitir um ensinamento.'
    at3.innerHTML = 'C) Criticar uma conduta.'
    at4.innerHTML = 'D) Noticiar um fato'
  }
  
  if (c == 4) {
  
    at1.innerHTML = 'A) informar'
    at2.innerHTML = 'B) comover'
    at3.innerHTML = 'C) criticar'
    at4.innerHTML = 'D) ensinar'
  }
  
  if (c == 5) {
  
    at1.innerHTML = 'A) mostrar como funciona nosso corpo.'
    at2.innerHTML = 'B) dar uma informação de cunho científico.'
    at3.innerHTML = 'C) oferecer ensinamentos sobre anticorpos.'
    at4.innerHTML = 'D) explicar como se adquire imunidade.'
  }
  
  if (c == 6) {
  
    at1.innerHTML = 'A) Divertir o leitor.'
    at2.innerHTML = 'B) Expor uma análise crítica.'
    at3.innerHTML = 'C) Divulgar um filme'
    at4.innerHTML = 'D) Divulgar um filme '
  }
}
*/