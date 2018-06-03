/*
  =================  Travelling Salesman Problem  ==============================

  Returns given destinations in order that solves TSP

  Algorithm used for solving - simulated annealing

  @param {Array}    destinations - list of points
  @param {function} distance     - function that given a list of destinations will return final distance of that path
  @param {number}   T            - temperature of simulation
  @param {number}   T0           - temperature of simulation's stop value
*/

async function TSP(destinations, distance, T, T0) {
  var S = shuffle(destinations);
  var S_new;
      T = T || 10;
      T0 = T0 || 0;
  var deltaE;
  var iteration = 0;
  var destinationsAmount = destinations.length;
  var bestSolution = S.slice();
  var bestDistance = await distance(S);
  var dS;
  var dSn;

  // console.log("************Start Algorithm*****************");
  //
  while (T > T0) {
    S_new = S.slice();
    S_new = miniShuffle(S_new);
    dS = await distance(S);
    dSn = await distance(S_new);
    deltaE = dSn - dS;

    // Solution Acccepted
    if (deltaE < 0 || Math.random() < Math.pow(Math.E, (-1*deltaE)/T)) {
      S = S_new.slice();
      dS = dSn;
      if (dS < bestDistance) {
        bestSolution = S.slice();
        bestDistance = dS;

        // console.log("===== NEW SOLUTION =====");
        // console.log("bestSolution ", bestSolution);
        // console.log("bestDistance: ", bestDistance);
        // console.log("");

      }

      // console.log("Solution: ", S);
      // console.log("bestSolution ", bestSolution);
      // console.log("Distance: ", dS);
      // console.log("bestDistance: ", bestDistance);
      // console.log("T: ", T);
      // console.log("Iterations: ", iteration);
      // console.log("");

    }

    T = T / (1 + Math.log(iteration+1));
    iteration++;
  }
  console.log("==== END OF ANNEALING ====");
  console.log("Final accepted solution is: ", bestSolution);
  console.log("Path length: ", bestDistance);
  // console.log("Temperature: ", T);
  // console.log("Iterations: ", iteration);

  return bestSolution;
}


function miniShuffle(a) {
  var b = a;
  var i = Math.floor(Math.random() * b.length);
  var temp = b[i];
  if (i == b.length-1) {
    b[i] = b[0];
    b[0] = temp;
  } else {
    b[i] = b[i+1];
    b[i+1] = temp;
  }
  return b;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function simpleDistance (destinations) {
  let distance = 0
  for (let i = 0; i < destinations.length - 1; i++) {
    if (destinations[i] === 1 && destinations[i + 1] === 10)
      distance += 1;
    else if (destinations[i] === 10 && destinations[i + 1] === 1)
      distance += 1;
    else
      distance += Math.abs(destinations[i] - destinations[i + 1]);
    }
  return distance;
}



console.log("======= SIMPLE EXAMPLE ========")
TSP([1,2,3,4,5,6,7,8,9,10], simpleDistance)
