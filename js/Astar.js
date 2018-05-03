/*
 A* algorithm
 Find path from start point to end point

 map
 start - {x: _ , y: _ }
 end - {x: _ , y: _ }
 traversable: default value of traversable cell
*/


let open = [], closed = [];

function lowestF(open, map) {
  let lowest = map[open[0].x][open[0].y].f;
  let element = open[0];
  open.forEach((e) => {
    if (map[e.x][e.y].f <= lowest) {
      element = e;
      lowest = map[e.x][e.y].f;
    }
  })
  return element;
}

function traverstateMap (map) {
  let newMap = [];
  map.forEach((line, x) => {
    let newLine = [];
    line.forEach((el, y) => {
      let newEl = {x: x, y: y,
                   travers: undefined,
                   f: undefined, g: undefined, h: undefined,
                   open: undefined, closed: undefined, parent: undefined};
      el == -1 ? newEl.travers = true : newEl.travers = false;
      newLine.push(newEl);
    })
    newMap.push(newLine);
  })
  return newMap;
}
function drawMap(map) {
  map = traverstateMap(map);
  let string = " 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14\n";
  map.forEach((line, x) => {

    line.forEach((el, y) => {
      if (el.travers) string += " # ";
      else string += " _ "
    })
    string += x + "\n";
  })
  console.log(string)
}
function calculateNeighbours(map, current, start, end) {
  let x = current.x;
  let y = current.y;
  let neighbours = [];
  let x_max = map.length;
  let y_max = map[0].length-1;

  if (x && y)                 neighbours.push(map[x-1][y-1]);
  if (x)                      neighbours.push(map[x-1][y]);
  if (x && y < y_max)         neighbours.push(map[x-1][y+1]);
  if (y)                      neighbours.push(map[x][y-1]);
  if (y < y_max)              neighbours.push(map[x][y+1]);
  if (x < x_max && y)         neighbours.push(map[x+1][y-1]);
  if (x < x_max)              neighbours.push(map[x+1][y]);
  if (x < x_max && y < y_max) neighbours.push(map[x+1][y+1]);
  neighbours = neighbours.filter((el) => el.travers && el.closed == undefined)
  neighbours.forEach((el) => {
    let g = Math.sqrt(Math.pow(el.x - start.x, 2) + Math.pow(el.y - start.y, 2))
    let h = Math.sqrt(Math.pow(el.x - end.x, 2) + Math.pow(el.y - end.y, 2))
    el.f = g+h;
    el.g = g;
    el.h = h;
    map[el.x][el.y].f = g+h;
    map[el.x][el.y].g = g;
    map[el.x][el.y].h = h;
    map[el.x][el.y].parent = current;
    open.push({x: el.x, y: el.y})
  })
  // console.log(neighbours);
  return { map: map, neighbours: neighbours };
}

function pathReconstruct(map, end) {
  let path = [];
  let c = end;
  while (1) {
    let parent = map[c.x][c.y].parent;
    if (parent) {
      path.push(parent);
      c = parent;
    } else {
      return path;
    }
  }
}
function A (map, s, e) {
    map = traverstateMap(map);

    let current, path = [], neighbours = [];


    // start node f cost is 0
    map[s.x][s.y].f = 0;
    map[s.x][s.y].open = true;

    // add start node to open
    open.push(s);
    // add start node to path
    path.push(s);
    // algorithm loop
    while (1) {
      // pick element with lowest F cost
      current = lowestF(open, map);
      // console.log("Current: ", current)
      // remove current from open set
      open.splice(open.indexOf(current), 1);
      // move current to closed set
      closed.push(current);
      map[current.x][current.y].open = false;
      map[current.x][current.y].closed = true;
      // path has been found
      if (current.x == e.x && current.y == e.y) {
        console.log("path has been found");
        console.log(pathReconstruct(map, e));
        return;
      }

      let calcN = calculateNeighbours(map, current, s, e);
      map = calcN.map;
      // console.log("Open ",open);

    }
}




let map = [ // zawiera układ obiektów na mapie świata
  [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  1, -1,  1,  0,  0,  0,  0,  0,  2,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  1, -1,  1,  0,  0,  0,  0,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  1,  0,  0,  0,  1,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1, -1, -1, -1, -1, -1,  0, -1,  0,  0],
  [ 0,  0,  1, -1, -1, -1,  0,  0,  0,  0, -1, -1, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  0,  0,  0,  0, -1,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0, -1, -1, -1, -1, -1, -1,  1,  0,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  1,  0,  0,  0,  1,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
];

drawMap(map)
// let tmap = traverstateMap(map)
let start = {x: 2, y: 5};
let end = {x: 3, y: 12};
A(map, start, end)
// calculateNeighbours(tmap, start, start, end)
