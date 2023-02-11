document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blackButton').onclick = switchBlack;
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('purpleButton').onclick = switchPurple;

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchBlack() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
}

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

function switchRed(){
  document.body.style.backgroundColor = 'red';
  document.body.style.color = 'white';
}

function switchBlue(){
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
}

function switchGreen(){
  document.body.style.backgroundColor = 'green';
  document.body.style.color = 'white';
}

function switchPurple(){
  document.body.style.backgroundColor = 'purple';
  document.body.style.color = 'white';
}