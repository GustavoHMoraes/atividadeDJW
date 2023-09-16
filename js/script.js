
const sprites = new Image();
sprites.src = 'sprites.png';

let frames = 0;
const canvas = document.querySelector('canvas');
const CTX = canvas.getContext('2d');

const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    CTX.fillStyle = '#70c5ce';
    CTX.fillRect(0,0, canvas.width, canvas.height)

    CTX.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );

    CTX.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );
  },
};

function criachao(){
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  atualiza(){
    const movimentoDochao = 1;
    const repeteEm = chao.largura / 2;
    const movimentacao = chao.x - movimentoDochao;

    chao.x = movimentacao % repeteEm;
  },

  desenha() {
    
    CTX.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      chao.x, chao.y,
      chao.largura, chao.altura,
    );
    
    CTX.drawImage(
    sprites,
    chao.spriteX, chao.spriteY,
    chao.largura, chao.altura,
    (chao.x+chao.largura), chao.y,
    chao.largura, chao.altura,
    );
    
    CTX.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      (chao.x+chao.largura*2), chao.y,
      chao.largura, chao.altura,
    );
  },
};
  return chao;
}

function Colidir(balão, chao){
  const balãoY = balão.y + balão.altura;
  const chaoY = chao.y;

  if(balãoY >= chaoY){
    return true;
  }
  
  return false;

}
  function criabalão(){
  const balão = {
    spriteX: 390,
    spriteY: 204,
    largura: 100,
    altura: 100,
    x: 10,
    y: 100,
    gravidade: 0.25,
    velocidade: 0,
    
    atualiza(){
      if(Colidir(balão, globais.chao)){

        mudaParaTela(Telas.FINAL_GAME);
        return;
    }
      balão.velocidade = balão.velocidade + balão.gravidade;
      balão.y = balão.y + (balão.velocidade);
    },
    desenha() {
      
      CTX.drawImage(
        sprites,
        balão.spriteX, balão.spriteY, // Sprite X, Sprite Y
        balão.largura, balão.altura, // Tamanho do recorte na sprite
        balão.x, balão.y,
        balão.largura, balão.altura,
      );
    }
  }
  return balão;
}  

function crianuvem(){
    const nuvem = {
    spriteX: 390,
    spriteY: 304,
    largura: 200,
    altura: 200,
    x: 300,
    y: 100,

    desenha(){
      
      CTX.drawImage(
        sprites,
        nuvem.spriteX, nuvem.spriteY,
        nuvem.largura, nuvem.altura,
        nuvem.x, nuvem.y,
        nuvem.largura, nuvem.altura,
      );
    },
    atualiza(){

    }
    }
    return nuvem;
  }

  function criaplacar(){
    const placar = {
      score: 0,
      desenha(){
        CTX.font = '35px "VT323"';
        CTX.textAlign = 'right';
        CTX.fillStyle = 'white';
        CTX.fillText(` ${placar.score}`, canvas.width - 10, 35);
      },
      atualiza(){
        const intervaloDeFrames = 20;
      const passouOIntervalo = frames % intervaloDeFrames === 0;

      if(passouOIntervalo) {
        placar.score = placar.score + 1;
      }
    }
  }
  return placar;
}

    const mensagemGetReady = {
      spriteX: 134,
      spriteY: 0,
      largura: 174,
      altura: 152,
      x: (canvas.width/ 2) - 174 / 2 ,
      y: 50,
      
      desenha(){
        
        CTX.drawImage(
          sprites,
        mensagemGetReady.spriteX, mensagemGetReady.spriteY,
        mensagemGetReady.largura, mensagemGetReady.altura,
        mensagemGetReady.x, mensagemGetReady.y,
        mensagemGetReady.largura, mensagemGetReady.altura,
        );
      }
    }

    const mensagemFinalGame = {
      spriteX: 134,
      spriteY: 100,
      largura: 226,
      altura: 90,
      x: (canvas.width/ 2) - 226 / 2 ,
      y: 100,
      
      desenha(){
        
        CTX.drawImage(
          sprites,
        mensagemFinalGame.spriteX, mensagemFinalGame.spriteY,
        mensagemFinalGame.largura, mensagemFinalGame.altura,
        mensagemFinalGame.x, mensagemFinalGame.y,
        mensagemFinalGame.largura, mensagemFinalGame.altura,
        );
      }
    }

  const globais = {};
  let telaAtiva = {};
  function mudaParaTela(novaTela){
    telaAtiva = novaTela;

    if(telaAtiva.inicializa){
      telaAtiva.inicializa();
    }
  }

  const Telas = {
  INICIO:{
    inicializa(){
      globais.balão = criabalão();
      globais.chao = criachao();
      globais.nuvem = crianuvem();
    },
    desenha(){
      planoDeFundo.desenha();
      globais.chao.desenha();
      globais.balão.desenha();
      mensagemGetReady.desenha();
    },
    click(){
      mudaParaTela(Telas.JOGO);
    },
    atualiza(){
      globais.chao.atualiza();
    }
  }
};

Telas.JOGO = {
  inicializa(){
    globais.placar = criaplacar();
  },
  desenha(){
planoDeFundo.desenha();
globais.chao.desenha();
globais.balão.desenha();
globais.nuvem.desenha();  
globais.placar.desenha();
  },
  atualiza(){
globais.nuvem.atualiza();
globais.chao.atualiza();
globais.balão.atualiza();
globais.placar.atualiza();
  }
};

Telas.FINAL_GAME = {
  desenha(){
mensagemFinalGame.desenha();
  },
  atualiza(){

  },
  click(){
     mudaParaTela(Telas.INICIO);
  }
}

function loop() {

  telaAtiva.desenha();
  telaAtiva.atualiza();

    frames = frames + 1;
    requestAnimationFrame(loop);
}

window.addEventListener('click', function() {
  if(telaAtiva.click) {
    telaAtiva.click();
  }
});

mudaParaTela(Telas.INICIO);
loop();