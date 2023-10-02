/*var correta = 'A'
var doorL = document.querySelector('#quarto')



function resp() {  
  if (correta === 'A') {
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


var contText = ['texto1', 'texto2', 'texto3', 'texto4', 'texto5', 'texto6', 'texto7', 'texto8', 'texto9', 'texto10']
var c = 0




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
    }
    if (c === 2) {
      tit.innerHTML = 'PARA QUE SERVE A FEBRE'
      
      txt.innerHTML = "A febre é um sinal de alerta de que algo vai mal no organismo. Mas cientistas do Roswell Park Center Institute, nos EUA, afirmam que ela é bem mais do que isso. Segundo um artigo publicado por eles na “Nature Immunology”, a temperatura corporal elevada ajuda o sistema de defesa do organismo a identificar a causa de uma infecção e combatê-la.Num estudo com camundongos, eles viram que quando há febre, o número de linfócitos (tipo de célula de defesa) dobra. A febre funcionaria como um gatilho para o corpo se proteger de infecções."
      
      qst.innerHTML = "O artigo acima tem por finalidade:"
    }
    
    if (c===3) {
      tit.innerHTML = "Mariposas"
      
      txt.innerHTML = "Numa fábula árabe, as mariposas queriam entender sobre a luz. Elas desejavam saber o segredo de se sentirem tão fascinadas pela chama de uma vela. O que as deslumbrava? Seria a luz ou o calor? Pediram a ajuda da mariposa-rainha. Depois de meditar sobre o assunto, ela aconselhou que cada uma, individualmente, procurasse encontrar a resposta. Todas saíram procurando desvendar o mistério do fogo. Passado algum tempo, uma mariposa voltou cega de um olho, afirmando que havia chegado perto demais e que a luminosidade da vela a tinha ofuscado, e que continuava sem entender os mistérios da luz. Outra voltou com uma asa queimada, reconhecendo que sua experiência não fora satisfatória. Por séculos, as mariposas não entenderam por que a luz as extasiava tanto. Até que um dia uma voou na direção de uma lamparina com tanta determinação que morreu queimada. Nesse dia, a mariposa-rainha falou: “Somente esta mariposa conheceu o mistério do fogo, mas nós nunca saberemos”. Moral: O encontro com o transcendente não pode ser contido na dimensão empírica. [...]"
      
      qst.innerHTML = 'Qual é o objetivo comunicativo desse texto?'
    }
    
    
    if(c===4) {
      txt.innerHTML = 'O primeiro dia do programa “Mais Médicos” foi marcado por faltas e desistências por parte dos médicos brasileiros. Em algumas cidades de São Paulo e do Rio de Janeiro, nenhum dos profissionais selecionados compareceu às unidades de saúde a que foram alocados — entre os que faltaram, uma parte nem sequer justificou sua ausência. Segundo as secretarias de saúde, alguns profissionais chegaram a comunicar oficialmente sua desistência do programa federal. Na capital carioca, o número de faltosos foi maior do que o de presentes. Eram esperados dezesseis profissionais, mas para o azar da população e descrédito do programa, só seis se apresentaram. Todos os que trabalharão na cidade são brasileiros e apenas um passa pelo curso de requalificação por ter se formado na Espanha — o que explica a ausência. '
      
      qst.innerHTML = 'O proposito do texto é '
    }
    
    if(c===4) {
      tit.innerHTML = 'Qual é o órgão mais dispensável do corpo humano?'
      
      txt.innerHTML = 'Se você der o azar de lesionar um órgão, torça para ser o baço. Ele tem lá suas funções, como remover os glóbulos vermelhos velhos demais e produzir parte dos anticorpos que nos protegem de vírus e bactérias. Mas dá para viver sem ele, o que não rola sem coração, pulmões, fígado, estômago, pâncreas ou intestino – sem os dois rins também não dá. Quando alguém sofre uma pancada forte na barriga e danifica o baço a ponto de ele precisar ser removido, o fígado se encarrega da “limpeza” dos glóbulos vermelhos. Já a imunidade da pessoa fica debilitada com a menor produção de anticorpos.'
      
      qst.innerHTML = 'O objetivo desse texto é'
    }
    
    if(c===5) {
      tit.innerHTML = 'O coração roubado'
      
      txt.innerHTML = '“O Coração Roubado e outras crônicas” é uma obra capaz de tornar a leitura parte da vida do leitor, pois está repleta de textos curtos, fáceis de serem compreendidos, associando diversão e reflexão.Assim, o leitor se prende ao que está escrito e ainda é levado a questionar sobre as ocorrências do cotidiano nas quais ele está inserido.O leitor é levado a refletir sobre suas próprias ações.Em alguma das histórias ele vai se encaixar. Escritas de maneira inteligente e instigante, as 26 crônicas de Marcos Rey apresentam uma série de tipos inesquecíveis, vivendo situações as mais diversas.Nas páginas de Coração Roubado, você encontrará cenas hilariantes, absurdas, constrangedoras, delicadas...presentes no cotidiano de qualquer pessoa, em qualquer lugar.[...]'
      
      qst.innerHTML = 'Qual é a finalidade desse texto?'
    }
    
  }
  
  
}
