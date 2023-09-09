
const sprites = new Image();
sprites.src = 'sprites.png';

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

const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
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
      if(Colidir(balão, chao)){

        mudaParaTela(Telas.INICIO);
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

    const nuvem = {
    spriteX: 390,
    spriteY: 304,
    largura: 200,
    altura: 200,
    x: 300,
    y: 100,
    
    atualiza(){
      nuvem.x = nuvem.x - 1;
    },
    desenha(){
      
      CTX.drawImage(
        sprites,
        nuvem.spriteX, nuvem.spriteY,
        nuvem.largura, nuvem.altura,
        nuvem.x, nuvem.y,
        nuvem.largura, nuvem.altura,
      );
    }
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
    },
    desenha(){
      planoDeFundo.desenha();
      chao.desenha();
      globais.balão.desenha();
      nuvem.desenha();
      mensagemGetReady.desenha();
    },
    click(){
      mudaParaTela(Telas.JOGO);
    },
    atualiza(){

    }
  }
};

Telas.JOGO = {
  desenha(){
planoDeFundo.desenha();
chao.desenha();
globais.balão.desenha();
nuvem.desenha();  
  },
  atualiza(){
globais.balão.atualiza();
nuvem.atualiza();
  }
};

function loop() {

  telaAtiva.desenha();
  telaAtiva.atualiza();

    requestAnimationFrame(loop);
}

window.addEventListener('click', function() {
  if(telaAtiva.click) {
    telaAtiva.click();
  }
});

mudaParaTela(Telas.INICIO);
loop();