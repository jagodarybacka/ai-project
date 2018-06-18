/*HOMES AND RUBBISH*/
class Rubbish {
  constructor(coordinates, glass = 0, metal = 0, paper = 0, plastic = 0, other = 0) {
    this.coordinates = coordinates;
    this.glass = glass;
	this.metal = metal;
    this.paper = paper;
    this.plastic = plastic;
    this.other = other;
	this.color = color;
	this.smell = smell;
	this.sound = sound;
	this.size = size;
	this.weight = weight;
	this.touch = touch;
	this.transparency = transparency;
  }
}

const map1 = [ // zawiera układ obiektów na mapie świata
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  1, -1,  1,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  1, -1,  1,  0,  0,  0,  0,  0, -1,  0,  0, -1, -1, -1, -1,  1,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  1,  0,  0,  0,  1,  0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1, -1, -1, -1, -1, -1,  0, -1,  0,  0,  0, -1,  0,  0,  0,  0, -1,  1, 0, 0],
    [ 0,  0,   1, -1, -1, -1,  0,  0,  0,  0, -1, -1, -1,  0,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0, -1,  1,  0, -1, -1, -1, -1,  0,  0,  0,  1, -1,  0, 0, 0],
    [ 0,  0,  -1, -1, -1, -1, -1,  1,  0,  0,  1,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  0,  0,  1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1, -1, -1, -1, -1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  1, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  2,  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  0,  0,  0,  0,  0,  0,  1, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0, -1,  0,  0,  1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  2,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  2, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0]
  ];

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
function distanceForTSP(destinations_list) {
  return concatA(destinations_list).then(r => r.dist)
}

async function path_TSP(destinations) {
  var arr = await TSP(destinations, distanceForTSP)
   return await concatA(arr).then(r => r.path);
 }
 
 async function path_GA(destinations) {
   var arr = await genetic_algorithm(destinations,distanceForTSP,100,10,40)
   console.log(arr);
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
let destinations = [astart,amiddle1,amiddle2,amiddle3,amiddle4,amiddle5,amiddle6,amiddle7,aend]

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

var smellS = ['Y', 'N'];
var sizeS = ['S', 'M', 'L'];
var transparencyS = ['Y', 'N'];
var colorS = ['white','red','black','brown','green','blue'];
var soundS = ['T', 'S', 'N'];
var weightS = ['S','M','L'];
var touchS = ['Y','N'];
var res;

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