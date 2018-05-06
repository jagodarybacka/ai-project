const map = [ // zawiera układ obiektów na mapie świata
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

const canvas = document.querySelector('canvas').getContext("2d");;

function PrintWorld(map) {

  map.forEach((line, i) => {
    line.forEach((el, j) => {
      let image = new Image();
      image.onload = () => {
        canvas.drawImage(image, i*32, j*32, 32, 32);
      }
      if (el == 0) {
        image.src = 'img/trawa_' + Math.floor(Math.random() * 6) + '.png';
      }
      if (el == -1) {
        image.src = 'img/droga_' + Math.floor(Math.random() * 6) + '.png';
      }
      if (el == 1) {
        image.src = 'img/domek_' + Math.floor(Math.random() * 4) + '.png';
      }
      if (el == 2) {
        image.src = 'img/wysypisko.png';
      }
      // console.log(image);
    })
  })
}

function PrintTruck(x, y) {
  let image = new Image();
  image.onload = () => {
    canvas.drawImage(image, x*32, x*32, 32, 32);
  }
  image.src = 'img/smieciarka_0.png';


}


PrintWorld(map)
PrintTruck(10, 10);
