function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  blackButton.style.borderColor = 'black';
  grayButton.style.borderColor = 'black';
  redButton.style.borderColor = 'black';
  greenButton.style.borderColor = 'black';
  purpleButton.style.borderColor = 'black';
  whiteButton.style.borderColor = 'black';
  blueButton.style.borderColor = 'black';
}

function switchBlack() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  blackButton.style.borderColor = 'white';
  grayButton.style.borderColor = 'white';
  redButton.style.borderColor = 'white';
  greenButton.style.borderColor = 'white';
  purpleButton.style.borderColor = 'white';
  whiteButton.style.borderColor = 'white';
  blueButton.style.borderColor = 'white';
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

function switchBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';

  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = 'white';
  });
}


document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blackButton').onclick = switchBlack;
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('purpleButton').onclick = switchPurple;