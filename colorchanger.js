function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  blackButton.style['border-color'] = 'black';
  grayButton.style['border-color'] = 'black';
  redButton.style['border-color'] = 'black';
  greenButton.style['border-color'] = 'black';
  purpleButton.style['border-color'] = 'black';
  whiteButton.style['border-color'] = 'black';
  blueButton.style['border-color'] = 'black';
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = 'black';
  })
}

function switchBlack() {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  blackButton.style['border-color'] = 'white';
  grayButton.style['border-color'] = 'white';
  redButton.style['border-color'] = 'white';
  greenButton.style['border-color'] = 'white';
  purpleButton.style['border-color'] = 'white';
  whiteButton.style['border-color'] = 'white';
  blueButton.style['border-color'] = 'white';
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = 'white';
  });
}

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
  blackButton.style['border-color'] = 'white';
  grayButton.style['border-color'] = 'white';
  redButton.style['border-color'] = 'white';
  greenButton.style['border-color'] = 'white';
  purpleButton.style['border-color'] = 'white';
  whiteButton.style['border-color'] = 'white';
  blueButton.style['border-color'] = 'white';
}

function switchRed(){
  document.body.style.backgroundColor = 'red';
  document.body.style.color = 'white';
  blackButton.style['border-color'] = 'white';
  grayButton.style['border-color'] = 'white';
  redButton.style['border-color'] = 'white';
  greenButton.style['border-color'] = 'white';
  purpleButton.style['border-color'] = 'white';
  whiteButton.style['border-color'] = 'white';
  blueButton.style['border-color'] = 'white';
}

function switchBlue(){
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
  blackButton.style['border-color'] = 'white';
  grayButton.style['border-color'] = 'white';
  redButton.style['border-color'] = 'white';
  greenButton.style['border-color'] = 'white';
  purpleButton.style['border-color'] = 'white';
  whiteButton.style['border-color'] = 'white';
  blueButton.style['border-color'] = 'white';
}

function switchGreen(){
  document.body.style.backgroundColor = 'green';
  document.body.style.color = 'white';
  blackButton.style['border-color'] = 'white';
  grayButton.style['border-color'] = 'white';
  redButton.style['border-color'] = 'white';
  greenButton.style['border-color'] = 'white';
  purpleButton.style['border-color'] = 'white';
  whiteButton.style['border-color'] = 'white';
  blueButton.style['border-color'] = 'white';
}

function switchPurple(){
  document.body.style.backgroundColor = 'purple';
  document.body.style.color = 'white';
  blackButton.style['border-color'] = 'white';
  grayButton.style['border-color'] = 'white';
  redButton.style['border-color'] = 'white';
  greenButton.style['border-color'] = 'white';
  purpleButton.style['border-color'] = 'white';
  whiteButton.style['border-color'] = 'white';
  blueButton.style['border-color'] = 'white';
}

function switchBlue() {
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'white';
  blackButton.style['border-color'] = 'white';
  grayButton.style['border-color'] = 'white';
  redButton.style['border-color'] = 'white';
  greenButton.style['border-color'] = 'white';
  purpleButton.style['border-color'] = 'white';
  whiteButton.style['border-color'] = 'white';
  blueButton.style['border-color'] = 'white';
}

document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blackButton').onclick = switchBlack;
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('redButton').onclick = switchRed;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('purpleButton').onclick = switchPurple;