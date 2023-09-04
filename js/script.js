
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

  const flappyBird = {
    spriteX: 390,
    spriteY: 204,
    largura: 100,
    altura: 100,
    x: 10,
    y: 400,
    desenha() {
      CTX.drawImage(
        sprites,
        flappyBird.spriteX, flappyBird.spriteY, // Sprite X, Sprite Y
        flappyBird.largura, flappyBird.altura, // Tamanho do recorte na sprite
        flappyBird.x, flappyBird.y,
        flappyBird.largura, flappyBird.altura,
      );
    }
  }

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
    }
    }

function loop() {

  planoDeFundo.desenha();
  chao.desenha();  
  flappyBird.desenha();
  nuvem.desenha();
  
  flappyBird.y = flappyBird.y - 1;
  nuvem.x = nuvem.x - 1;

    requestAnimationFrame(loop);
}

loop();