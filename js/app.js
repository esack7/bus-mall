'use strict';
var container = document.getElementById('pics');
var button = document.createElement('button');
// container.addEventListener('click', handleClick);
var imgObject = [];
var usedImgs = [];
var randomSet = [];
var previousSet = [];
var totalClicks = 0;

function images(name, url) {
  this.name = name;
  this.url = url;
  this.clicks = 0;
  this.views = 0;
  imgObject.push(this);
}

function randomNum(min, max) {
  var min = 1;
  var max = imgObject.length;
  return Math.floor(Math.random() * (max - min + 1) + min) - 1;
}

function buildSet() {
  randomSet = [];
  for(var i = 0; i < 3; i++) {
    var x = randomNum();
    randomSet.push(imgObject[x]);
  }
  verifySet();
}

function verifySet() {
  if(previousSet[0] === null) {
    return;
  } else if(randomSet[0] === randomSet[2] || randomSet[1] === randomSet[0] || randomSet[2] === randomSet[1]) {
    return buildSet();
  } else if(randomSet[0] === previousSet[0] || randomSet[0] === previousSet[1] || randomSet[0] === previousSet[2] || randomSet[1] === previousSet[0] || randomSet[1] === previousSet[1] || randomSet[1] === previousSet[2] || randomSet[2] === previousSet[0] || randomSet[2] === previousSet[1] || randomSet[2] === previousSet[2] ){
    return buildSet();
  }
}

function renderRandImg() {
  previousSet = randomSet;
  buildSet();
  var ulEl = document.createElement('ul');
  var liEl = document.createElement('li');
  for(var i = 0; i < randomSet.length; i++) {
    var imEl = document.createElement('img');
    imEl.src = randomSet[i].url;
    imEl.id = randomSet[i].name;
    liEl.appendChild(imEl);
    randomSet[i].views++;
  }
  ulEl.appendChild(liEl);
  container.appendChild(ulEl);
}

function handleClick(event) {
  for(var i = 0; i < randomSet.length; i++) {
    if(event.target.id === randomSet[i].name) {
      randomSet[i].clicks++;
      totalClicks++;
    }
  }
  wipe();
  renderRandImg();
  final();
}

function wipe() {
  var el = document.getElementById('pics');
  while(el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function final() {
  if(totalClicks === 25) {
    wipe();
    renderResults();
    container.removEventListener;
  }
}

function renderButton() {
  container.removEventListener;
  var messEl = document.createElement('h1');
  messEl.textContent = 'Do you want to see the results?';
  container.appendChild(messEl);
  // var btEl = document.createElement('button');
  button.textContent = 'See Results';
  button.id = 'submit';
  container.appendChild(button);
}

function handleButton(event) {
  wipe();
  renderResults();
}

function renderResults() {
  var clickRender = document.getElementById('pics');
  var hrEl = document.createElement('tr');
  var hdEl = document.createElement('th');
  hdEl.textContent = 'Item';
  hrEl.appendChild(hdEl);
  var hdEl = document.createElement('th');
  hdEl.textContent = 'Clicks';
  hrEl.appendChild(hdEl);
  var hdEl = document.createElement('th');
  hdEl.textContent = 'Views';
  hrEl.appendChild(hdEl);
  clickRender.appendChild(hrEl);
  for(var i = 0; i < imgObject.length; i++) {
  // for(var j = 0; j < imgObject[i].length; j++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = imgObject[i].name;
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = imgObject[i].clicks;
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = imgObject[i].views;
    trEl.appendChild(tdEl);
    // }
    clickRender.appendChild(trEl);
  }
}

var banana = new images('banana', 'img/banana.jpg');
var bag = new images('bag', 'img/bag.jpg');
var bathroom = new images('bathroom', 'img/bathroom.jpg');
var boots = new images('boots', 'img/boots.jpg');
var breakfast = new images('breakfast', 'img/breakfast.jpg');
var bubblegum = new images('bubblegum', 'img/bubblegum.jpg');
var chair = new images('chair', 'img/chair.jpg');
var cthulhu = new images('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new images('dog duck', 'img/dog-duck.jpg');
var dragon = new images('dragon', 'img/dragon.jpg');
var pen = new images('pen', 'img/pen.jpg');
var petSweep = new images('pet sweep', 'img/pet-sweep.jpg');
var scissors = new images('scissors', 'img/scissors.jpg');
var shark = new images('shark', 'img/shark.jpg');
var sweep = new images('sweep', 'img/sweep.png');
var tauntaun = new images('tauntaun', 'img/tauntaun.jpg');
var unicorn = new images('unicorn', 'img/unicorn.jpg');
var usb = new images('usb', 'img/usb.gif');
var waterCan = new images('water can', 'img/water-can.jpg');
var wineGlass = new images('wine glass', 'img/wine-glass.jpg');
//
// buildSet();
renderRandImg();

container.addEventListener('click', handleClick);
button.addEventListener('click', handleButton);
