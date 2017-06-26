'use strict';
var container = document.getElementById('pics');

var imgObject = [];
var usedImgs = [];
var randomSet = [];
var previousSet = [];
var totalClicks = 0;
var imgClicks = [];
var imgNames = [];

function images(name, url) {
  this.name = name;
  this.url = url;
  this.clicks = 0;
  this.views = 0;
  imgObject.push(this);
}

if (localStorage.data) {
  imgObject = JSON.parse(localStorage.data);
} else {
  new images('banana', 'img/banana.jpg');
  new images('bag', 'img/bag.jpg');
  new images('bathroom', 'img/bathroom.jpg');
  new images('boots', 'img/boots.jpg');
  new images('breakfast', 'img/breakfast.jpg');
  new images('bubblegum', 'img/bubblegum.jpg');
  new images('chair', 'img/chair.jpg');
  new images('cthulhu', 'img/cthulhu.jpg');
  new images('dog duck', 'img/dog-duck.jpg');
  new images('dragon', 'img/dragon.jpg');
  new images('pen', 'img/pen.jpg');
  new images('pet sweep', 'img/pet-sweep.jpg');
  new images('scissors', 'img/scissors.jpg');
  new images('shark', 'img/shark.jpg');
  new images('sweep', 'img/sweep.png');
  new images('tauntaun', 'img/tauntaun.jpg');
  new images('unicorn', 'img/unicorn.jpg');
  new images('usb', 'img/usb.gif');
  new images('water can', 'img/water-can.jpg');
  new images('wine glass', 'img/wine-glass.jpg');
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
      localStorage.setItem('data', JSON.stringify(imgObject));
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

function resultMessage() {
  var pEl = document.createElement('p');
  pEl.textContent = 'Thanks for participating in the survey.  Below you can see the results of the survey, which includes your selections also!';
  container.appendChild(pEl);
}

function final() {
  if(totalClicks === 25) {
    container.removeEventListener('click', handleClick);
    wipe();
    resultMessage();
    drawChart();
  }
}

renderRandImg();

function drawChart() {
  var chartLabel = [];
  var chartData = [];
  for(var i = 0; i < imgObject.length; i++) {
    chartData.push(imgObject[i].clicks);
    chartLabel.push(imgObject[i].name);
  }
  Chart.defaults.global.defaultFontColor = 'white';
  Chart.defaults.global.defaultFontSize = 14;
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel,
      datasets: [{
        label: '# of Clicks',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.75)',
          'rgba(54, 162, 235, 0.75)',
          'rgba(255, 206, 86, 0.75)',
          'rgba(75, 192, 192, 0.75)',
          'rgba(153, 102, 255, 0.75)',
          'rgba(255, 159, 64, 0.75)',
          'rgba(255, 99, 132, 0.75)',
          'rgba(54, 162, 235, 0.75)',
          'rgba(255, 206, 86, 0.75)',
          'rgba(75, 192, 192, 0.75)',
          'rgba(153, 102, 255, 0.75)',
          'rgba(255, 159, 64, 0.75)',
          'rgba(255, 99, 132, 0.75)',
          'rgba(54, 162, 235, 0.75)',
          'rgba(255, 206, 86, 0.75)',
          'rgba(75, 192, 192, 0.75)',
          'rgba(153, 102, 255, 0.75)',
          'rgba(255, 159, 64, 0.75)',
          'rgba(255, 99, 132, 0.75)',
          'rgba(54, 162, 235, 0.75)'

        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

container.addEventListener('click', handleClick);
