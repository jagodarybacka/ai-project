class LineUp {
  constructor(id, lineUp = [], lineUpDist = 0) {
    this.id = id;
    this.lineUpDist = lineUpDist;
    this.lineUp = lineUp;
  }
}

class TournamentGroup{
  constructor(id,tournamentGroup = []) {
    this.id = id;
    this.tournamentGroup = tournamentGroup;
  }
};

let lineUps = [];
let tournamentGroups = [];

const mutationLevel = 5;
let father, mother;
let currentBestPathLength, startPathLength;
let ifBeginning = true;
let currentBest;
const probabilityFirst = 90;
const probabilitySecond = 6;
const probabilityThird = 3;
const probabilityFourth = 1;

async function genetic_algorithm(destiniations, distance, howManyLoops, startPopSize, popSize){
  lineUps = [];
  let dist = await distance(destinations);
  let lineup = new LineUp(lineUps.length, destinations, dist);
  lineUps.push(lineup);
  await add_permutations(destinations,startPopSize,distance);
  while(howManyLoops > 0){
    // console.log(howManyLoops);
    if(ifBeginning == true){
      ifBeginning = false;
      currentBestPathLength = lineUps[0].lineUpDist;
      for(let i = 0 ; i < lineUps.length ; i++){ //najmniejsza liczba opoznionych zadan
        if(lineUps[i].lineUpDist < currentBestPathLength){
            currentBestPathLength = lineUps[i].lineUpDist;
            currentBest = {lineUp: lineUps[i].lineUp.slice(),dist: Number(lineUps[i].lineUpDist)};
        }
      }
      startPathLength = 0;
      for(let j = 0 ; j < lineUps.length ; j++){ //poczatkowa najwieksza liczba opoznionych zadan
          if(lineUps[j].lineUpDist > startPathLength){
              startPathLength = lineUps[j].lineUpDist;
          }
      }
      console.log('Start length: ',startPathLength);
    }
    console.log('Current best: ',currentBestPathLength,currentBest);
    // krzyzowanie
    // console.log('crossing');
    while(lineUps.length<popSize){
      father = rand(0,lineUps.length-1);
      do{
          mother = rand(0,lineUps.length-1);} while(mother == father);
      let lineup2 = cross(lineUps[mother],lineUps[father]);
      if(lineup2.length == destinations.length){
          let dist2 = await distance(lineup2);
          let lineup3 = new LineUp(lineUps.length, lineup2, dist2);
          lineUps.push(lineup3);
      }
    }
    // mutacja
    for(let k = 0 ; k < lineUps.length ; k++){
      let ifM = rand(0,100); //czy zajdzie mutacja
      let lineupm = await mutation(lineUps[k],ifM);
      lineUps[k].lineUp = lineupm.slice();
      lineUps[k].lineUpDist = await distance(lineUps[k].lineUp);
    }
    //selekcja
    // console.log('selection');
    selection();
    for(let l = 0 ; l < lineUps.length ; l++){
      if(lineUps[l].lineUpDist < currentBestPathLength){
          currentBestPathLength = lineUps[l].lineUpDist;
          currentBest = {lineUp: lineUps[l].lineUp.slice(),dist: Number(lineUps[l].lineUpDist)};
      }
    }
    howManyLoops--;
  }
  return currentBest.lineUp;
}

function rand(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// krzyzowanie
function ifExitsInBToSort(bToSort, coord){
  let tmp = false;
  for(let k = 0; k < bToSort.length; k++){
    if(bToSort[k].x == coord.x && bToSort[k].y == coord.y){
      tmp = true;
      break;
    }
  }
  return tmp;
}

function sort(bToSort,a,b,lowerCrossingBorder,higherCrossingBorder){
  let sorted = [];
  for (let i = 0; i < a.lineUp.length; i++){  // po kolei iterujac po a sprawdza czy taki istnieje w sortowanym wektorze, jezeli tak to doklada go na koniec posortowanych
    if (ifExitsInBToSort(bToSort,a.lineUp[i])){
      sorted.push(a.lineUp[i]);
      }
    }
  return sorted;
}

function cross(a,b){
    let lowerCrossingBorder, higherCrossingBorder;
    let temp1,temp2;
    let lineup=[];
    let bToSort=[];
    //losowanie przedzialu krzyzowania
    temp1 = rand(1,a.lineUp.length-2);
    do{
        temp2 = rand(1, a.lineUp.length-2);
      } while(temp2 == temp1);
    if(temp1>temp2){
      lowerCrossingBorder = temp2;
      higherCrossingBorder = temp1;
    }
    else {
      lowerCrossingBorder = temp1;
      higherCrossingBorder = temp2;
    }
    for (let i = 0 ; i < lowerCrossingBorder ; i++){  // dodaje zadania z przed przedzialu krzyzowania
      lineup.push(b.lineUp[i]);
    }
    for (let j = lowerCrossingBorder; j < higherCrossingBorder; j++){  // krzyzowanie
          bToSort.push(b.lineUp[j]);
    }
    let sorted = sort(bToSort,a,b,lowerCrossingBorder,higherCrossingBorder);
    for(let k = 0; k < sorted.length; k++){
      lineup.push(sorted[k]);
    }
    for (let l = higherCrossingBorder; l < b.lineUp.length; l++){ // dodaje zadania zza przedzialu krzyzowania
      lineup.push(b.lineUp[l]);
    }
    return lineup;
}

// selekcja

function compareNumbers(a, b) {
  return a - b
}

function selection(){
  tournamentGroups = [];
  let choose;
  let newLineUps = [];
  let counter = 0;
  let tourGroup = [];
  for (let i = 0; i <= lineUps.length; i++){ // tworzone sa grupy turniejowe
    if (counter == 4){
        let tournamentGroup = new TournamentGroup(tournamentGroups.length,tourGroup);
        tournamentGroups.push(tournamentGroup);
        counter = 0;
    }
    if (counter == 0){
        tourGroup = [];
    }
    tourGroup.push(lineUps[i]);
    counter++;
  }
  let tournamentValues = [];
  for (let j = 0; j < tournamentGroups.length; j++){
    tournamentValues = [];
    for (let l = 0; l<tournamentGroups[j].tournamentGroup.length; l++){
        tournamentValues.push(tournamentGroups[j].tournamentGroup[l].lineUpDist);
    }
    tournamentValues.sort(compareNumbers);
    choose = rand(0,100);
    if (choose<probabilityFirst){
        for (let aa = 0; aa<tournamentGroups[j].tournamentGroup.length; aa++){
            if (tournamentValues[0] == tournamentGroups[j].tournamentGroup[aa].lineUpDist){
                newLineUps.push(tournamentGroups[j].tournamentGroup[aa]);
                break;
            }
        }
    }
    else if (choose>=probabilityFirst && choose<(probabilityFirst+probabilitySecond)){
        for (let ab = 0; ab<tournamentGroups[j].tournamentGroup.length; ab++){
            if (tournamentValues[1] == tournamentGroups[j].tournamentGroup[ab].lineUpsDist){
                newLineUps.push(tournamentGroups[j].tournamentGroup[ab]);
                break;
            }
        }
    }
    else if (choose>=(probabilityFirst+probabilitySecond) && choose<(probabilityFirst+probabilitySecond+probabilityThird)){
        for (let ac = 0; ac<tournamentGroups[j].tournamentGroup.length; ac++){
            if (tournamentValues[2] == tournamentGroups[j].tournamentGroup[ac].lineUpDist){
                newLineUps.push(tournamentGroups[j].tournamentGroup[ac]);
                break;
            }
        }
    }
    else{
        for (let ad = 0; ad<tournamentGroups[j].tournamentGroup.length; ad++){
            if (tournamentValues[3] == tournamentGroups[j].tournamentGroup[ad].lineUpDist){
                newLineUps.push(tournamentGroups[j].tournamentGroup[ad]);
                break;
            }
        }
    }
  }
  lineUps = [];
  for (let k = 0; k<newLineUps.length; k++){
    lineUps.push(newLineUps[k]);
  }
  newLineUps = [];

}

// mutacja
function makeLineUpLeft(a,point,newPosition){
  let newlineup = [];
  if(point!=newPosition){
    for(let i = 0; i < a.lineUp.length; i++){
      if(i!=point && i!= newPosition){
        newlineup.push(a.lineUp[i]);
      } else if(i!=point && i == newPosition){
        newlineup.push(a.lineUp[point]);
        newlineup.push(a.lineUp[i]);
      }
    }
    return newlineup;
  }
  else
    return a.lineUp;
}

function makeLineUpRight(a,point,newPosition){
  let newlineup = [];
  if(point!=newPosition){
    for(let i = 0; i < a.lineUp.length; i++){
      if(i!=point && i!= newPosition){
        newlineup.push(a.lineUp[i]);
      } else if(i!=point && i == newPosition){
        newlineup.push(a.lineUp[i]);
        newlineup.push(a.lineUp[point]);

      }
    }
    return newlineup;
  }
  else
    return a.lineUp;
}

function mutation(a,ifM){
  let temp1,temp2;
  let lower,higher;
  if(ifM> 0 && ifM <= mutationLevel){
    // console.log('mutation');
    let option = rand(0,200);
    if(option<100){ // przesun punkt w lewo
      let point = rand(2,a.lineUp.length-2);
      let newPosition = rand(1,point);
      let newlineup = makeLineUpLeft(a,point,newPosition);
      return newlineup;
    } else if(option>=100 && option<200){ // przesun punkt w prawo
      let point = rand(1,a.lineUp.length-2);
      let newPosition = rand(point,a.lineUp.length-2);
      let newlineup2 = makeLineUpRight(a,point,newPosition);
      return newlineup2;
    }
    else
      return a.lineUp;
  }
  else {
    return a.lineUp;
  }
}

// Tworzy okreslona przez size liczbe permutacji z podanych punktow z zachowaniem startu i konca
// Mozliwych permutacji dla sciezki o dl 8 --> 720
async function add_permutations (destinations, size, distance) {
  let i = j= 0;
  for(i = 0; i < size ; i++){
      let used = [];
      for(j = 0; j < destinations.length; j ++)
        used.push(false);
      let permutation = [];
      permutation.push(destinations[0]);
      used[0] = true;
      for(j = 0; j < destinations.length-2; j++){
        let randLineUp;
        do{
          randLineUp = rand(1,destinations.length-2);
        } while(used[randLineUp] == true);

        if(used[randLineUp] != true){
          permutation.push(destinations[randLineUp]);
          used[randLineUp] = true;
        }
      }
      permutation.push(destinations[destinations.length-1]);
      let dist = await distance(permutation);
      let lineup = new LineUp(lineUps.length,permutation,dist,permutation);
      lineUps.push(lineup);
    }
}
