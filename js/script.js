const canvas = document.getElementById('canvas');
const CTX = canvas.getContext('2d');
var img=new Image();
  img.onload=function(){
  CTX.drawImage(this, 10, 10);
  }
  img.src = "img/balaozinho.png";

  CTX.strokeStyle='white';
CTX.beginPath();
CTX.moveTo(360, 100);
CTX.lineTo(300, 100);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='white';
CTX.beginPath();
CTX.arc(310, 100, 60, 0,  Math.PI, true);
CTX.fillStyle='white';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='white';
CTX.beginPath();
CTX.arc(365, 100, 45, 0,  Math.PI, true);
CTX.fillStyle='white';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='white';
CTX.beginPath();
CTX.arc(250, 100, 45, 0,  Math.PI, true);
CTX.fillStyle='white';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='white';
CTX.beginPath();
CTX.moveTo(50, 330);
CTX.lineTo(150, 330);
CTX.fill();
CTX.stroke();

CTX.strokeStyle='white';
CTX.beginPath();
CTX.arc(80, 330, 55, 0,  Math.PI, true);
CTX.fillStyle='white';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='white';
CTX.beginPath();
CTX.arc(150, 330, 40, 0,  Math.PI, true);
CTX.fillStyle='white';
CTX.fill();
CTX.stroke();

CTX.strokeStyle='darkgreen';
CTX.beginPath();
CTX.arc(300, 1000, 400, 0,  Math.PI, true);
CTX.fillStyle='green';
CTX.fill();
CTX.stroke();
CTX.beginPath();
CTX.arc(1000, 1000, 600, 0,  Math.PI, true);
CTX.fillStyle='green';
CTX.fill();
CTX.stroke();