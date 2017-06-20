'use strict';
var container = document.getElementById('pics');
// container.addEventListener('click', handleClick);
var imgObject = [];

function images(name, url) {
  this.name = name;
  this.url = url;
  this.clicks = 0;
  this.views = 0;
  imgObject.push(this);
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

function randomNum(min, max) {
  var min = 1;
  var max = imgObject.length;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function handleClick(event) {
  console.log(event.target.id);
}

function renderRandImg() {
  var ulEl = document.createElement('ul');
  var liEl = document.createElement('li');
  for(var i = 0; i < 3; i++) {
    var randNum = randomNum() - 1;
    var imEl = document.createElement('img');
    imEl.src = imgObject[randNum].url;
    imEl.id = imgObject[randNum].name;
    liEl.appendChild(imEl);
  }
  ulEl.appendChild(liEl);
  container.appendChild(ulEl);
}

renderRandImg();

container.addEventListener('click', handleClick);
