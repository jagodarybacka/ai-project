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

async function move(destinations) {
  let p = await path(destinations);
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

}


/*  Help funciton for TSP */
function distanceForTSP(destinations) {
  return concatA(destinations).then(r => r.dist)
}

async function path(destinations) {
  var arr = await TSP(destinations, distanceForTSP)
  return await concatA(arr).then(r => r.path);
}

let start = {x: 4, y: 18};
let middle = {x: 7, y: 12};
let end = {x: 18, y: 13};
let destinations = [start, middle, end]


drawMap(map1);
console.log(destinations);
move(destinations)
