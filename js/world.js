var currentWeightCapacity = 0;
var currentSizeCapacity = 0;
let destinations = [];

const map1 = [ // zawiera układ obiektów na mapie świata
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  1, -1,  0,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  1,  0,  0,  0,  0,  0, -1,  0,  0, -1, -1, -1, -1,  1,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  1,  0,  0,  0,  1,  0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1, -1, -1, -1, -1, -1,  0, -1,  0,  0,  0, -1,  0,  0,  0,  0, -1,  1, 0, 0],
    [ 0,  0,   1, -1, -1, -1,  0,  0,  0,  0, -1, -1, -1,  0,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0, -1,  1,  0, -1, -1, -1, -1,  0,  0,  0,  1, -1,  0, 0, 0],
    [ 0,  0,  -1, -1, -1, -1, -1,  1,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  0,  0,  1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1, -1, -1, -1, -1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  1, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  0,  0,  0,  0,  0,  0,  1, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0, -1,  0,  0,  1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  2, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0]
  ];


class coord{
  constructor(x,y){
    this.x = x,
    this.y = y
  }
}

var smellS = ['Y', 'N'];
var sizeS = ['S', 'M', 'L'];
var transparencyS = ['Y', 'N'];
var colorS = ['white','red','black','brown','green','blue'];
var soundS = ['T', 'S', 'N'];
var weightS = ['S','M','L'];
var touchS = ['Y','N'];
var res;

/*HOMES AND RUBBISH*/
class Rubbish {
  constructor(coordinates, glass = 0, metal = 0, paper = 0, plastic = 0, other = 0) {
    this.coordinates = coordinates;
    this.glass = glass;
	  this.metal = metal;
    this.paper = paper;
    this.plastic = plastic;
    this.other = other;
	this.color = getRandom(colorS, 1);
	this.smell = getRandom(smellS, 1);
	this.sound = getRandom(soundS, 1);
	this.size = getRandom(sizeS, 1);
	this.weight = getRandom(weightS, 1);
	this.touch = getRandom(touchS, 1);
	this.transparency = getRandom(transparencyS, 1);
  }
}

function generateRubbish(){
  return new Rubbish();
}

  class House{
    constructor(id,x,y){
      this.id = id;
      this.x = x;
      this.y = y;
      this.rubbish = generateRubbish();
      this.missedRounds = 0;
      this.lastVisit = 0;
    }
  }

  housesData = [];

    housesData = [new House(1, 2, 5), new House(2, 4, 5), new House(3, 4, 18), new House(4, 7, 5), new House(5, 8, 10), new House(6, 8, 21), new House(7, 9, 3), new House(8, 11, 10), new House(9, 11, 21), new House(10, 12, 6), new House(11, 11, 10), new House(12, 12, 16), new House(13, 13, 13), new House(14, 15, 6), new House(15, 15, 21), new House(16, 18, 11), new House(17, 18, 13), new House(18, 18, 21), new House(19, 18, 5), new House(20, 18, 9), new House(21, 21, 12)];

  //Algorytm drzew decyzyjnych ktory determinuje, ktore domki maja byc odwiedzone

  var currentCapacity = 0;
  var dataSet = [];

  var mlData =[[41, 30, 84, 9], [79, 73, 5, 0]];
  var mlResult = [true, false];


  var dt = new ml.DecisionTree({
    data : mlData,
    result : mlResult
  });

  dt.build();
  //koniec algorytmu  


  function generateHouseList(){
      for(var t=0; t<housesData.length; t++){
        dataSet = [housesData[t].rubbish.size, housesData[t].rubbish.weight, housesData[t].missedRounds, currentWeightCapacity, currentSizeCapacity];
        var result = dt.classify(dataSet);
        if(result.true == 1){
          // var tempx = housesData[t].x;
          // var tempy = housesData[t].y;
          destinations.push({x:  housesData[t].x,  y: housesData[t].y});
          console.log("Śmieci z domku o numerze " + housesData[t].id + " zostaną zabrane");
          housesData[t].missedRounds = 0;
          if(dataSet[0] == "S"){
            currentWeightCapacity += 10;
          }
          else if(dataSet[0] == "M"){
            currentWeightCapacity += 25;
          }
          else if(dataSet[0] == "L"){
            currentWeightCapacity += 50;
          }

          if(dataSet[1] == "S"){
            currentSizeCapacity += 10;
          }
          else if(dataSet[1] == "M"){
            currentSizeCapacity += 25;
          }
          else if(dataSet[1] == "L"){
            currentSizeCapacity += 50;
          }
        }else{
          console.log("Smieci z domku o numerze " + housesData[t].id + " zostaną w tej rundzie pominięte");
          housesData[t].missedRounds += 1;
        }
        if(currentSizeCapacity == 100 || currentWeightCapacity == 100){
          console.log("Śmieciarka przepelniona! Jadę na wysypisko...");
          destinations.push({x:  22,  y: 21});
          currentSizeCapacity = 0; currentWeightCapacity = 0;
          break;
        }
    };    
  }


  generateHouseList();

const canvas = document.querySelector('canvas').getContext("2d");;

const droga = Math.floor(Math.random() * 6);
const trawa = Math.floor(Math.random() * 6);

function PrintWorld(map) {

  map.forEach((line, j) => {
    line.forEach((el, i) => {
      let image = new Image();
      image.onload = () => {
        canvas.drawImage(image, i*32, j*32, 32, 32);
      }
      if (el == 0) {
        image.src = 'img/trawa_' + trawa + '.png';
      }
      if (el == -1) {
        image.src = 'img/droga_' + droga + '.png';
      }
      if (el == 1) {
        image.src = 'img/domek_3.png';
      }
      if (el == 2) {
        image.src = 'img/wysypisko.png';
      }
      if (el == 3) {
        image.src = 'img/domek_2.png';
      }
    })
  })
}



function PrintTruck(x, y) {
  let image = new Image();
  image.onload = () => {
    canvas.drawImage(image, x*32, y*32);
  }
  image.src = 'img/smieciarka_0.png';
}


async function moveSimple(start, end) {
  if (map1[start.x][start.y] != -1) {
    PrintWorld(map1)
    PrintTruck(start.y, start.x);
    alert("Starting point is not traversable!")
  } else if (map1[end.x][end.y] != -1) {
    PrintWorld(map1)
    PrintTruck(end.y, end.x);
    alert("End point is not traversable!")
  } else {
    console.log(start, end);
    let a = A(start, end);
    a = a.reverse();
    let path = a.concat([end])
    console.log(path);

    let i = 0;

    const animate = () => {
      let obj = path[i];
      PrintWorld(map1)
      PrintTruck(obj.y, obj.x);
      if (i < path.length-1) i++;
      else {
        // console.log("done");
        clearInterval(animation);
      }
    }
    let animation = setInterval(animate, 500);
  }
}

async function move_TSP(destinations) {
  try {
    let p = await path_TSP(destinations);
    let i = 0;
    console.log(await p);

    const animate = () => {
      let obj = p[i];
      PrintWorld(map1)
      PrintTruck(obj.y, obj.x);
      if (i < p.length-1) i++;
      else {
        clearInterval(animation);
      }
    }
    let animation = setInterval(animate, 500);
  } catch (err) {
    PrintWorld(map1);
    PrintTruck(12, 7);
    alert("Problem with destinations' list")
  }
}

async function move_GA(destinations) {
  try {
    let p = await path_GA(destinations);
    let i = 0;
    console.log(await p);

    const animate = () => {
      let obj = p[i];
      PrintWorld(map1)
      PrintTruck(obj.y, obj.x);
      if (i < p.length-1) i++;
      else {
        clearInterval(animation);
      }
    }
    let animation = setInterval(animate, 500);
  } catch (err) {
    PrintWorld(map1);
    PrintTruck(12, 7);
    alert("Problem with destinations' list")
  }
}

/*  Help funciton for TSP */
function distanceForTSP(destinations) {
  return concatA(destinations).then(r => r.dist)
}

async function path_TSP(destinations) {
  var arr = await TSP(destinations, distanceForTSP)
  return await concatA(arr).then(r => r.path);
}

async function path_GA(destinations) {
var arr = await genetic_algorithm(destinations,distanceForTSP,100,10,40)
  return await concatA(arr).then(r => r.path);
}
// let start = {x: 4, y: 18};
// let middle1 = {x: 7, y: 12};
// let middle2 = {x: 13, y: 13};
// let end = {x: 18, y: 13};
// let destinations = [start, middle1, middle2, end]

let astart = {x: 4, y: 18};
let amiddle1 = {x: 8, y: 10};
let amiddle2 = {x: 20, y: 16};
let amiddle3 = {x: 2, y: 5};
let amiddle4 = {x: 13, y: 13};
let amiddle5 = {x: 12, y: 6};
let amiddle6 = {x: 21, y: 12};
let amiddle7 = {x: 11, y: 21};
let aend = {x: 18, y: 13};
// let destinations = [start,middle1,middle2,middle3,middle4,middle5,middle6,end]
let destinations2 = [astart,amiddle1,amiddle2,amiddle3,amiddle4,amiddle5,amiddle6,amiddle7,aend]

if(window.algorithmName=="tsp"){
  drawMap(map1);
  console.log("List of destinations: ", destinations);
  move_TSP(destinations);
}
else if(window.algorithmName=="genetic"){
  drawMap(map1);
  console.log("List of destinations: ", destinations);
  move_GA(destinations);
}

// drawMap(map1);
// console.log("List of destinations: ", destinations);
// move_TSP(destinations);

//ID3
console.log("---decision tree ID3---");

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


var smell = getRandom(smellS, 1);
var size = getRandom(sizeS, 1);
var transparency = getRandom(transparencyS, 1);
var color = getRandom(colorS, 1);
var sound = getRandom(soundS, 1);
var weight = getRandom(weightS, 1);
var touch = getRandom(touchS, 1);

console.log("characteristic set:");
console.log("Smell", smell);
console.log("Size", size);
console.log("Transparency", transparency);
console.log("Color", color);
console.log("Sound", sound);
console.log("Weight", weight);
console.log("Touch", touch);

if(sound == 'N')
	if(smell == 'Y')
		res = 'home rubbish';
	else res = 'paper';
if(sound == 'T')
	res = 'plastik';
if(sound == 'S')
	if(transparency == 'Y')
		res = 'glass';
	else res = 'metal';



console.log('Rubbish have sorted. Your rubbish is', res);
