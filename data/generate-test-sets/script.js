var doc = document.getElementById("main");


function getRandom(arr){
    var length = arr.length;
    var x = Math.floor(Math.random() * length);
    return arr[x]
}

var wS = ['S','M','L'];
var currentCapacity = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 25, 35, 45, 55, 65, 75, 85, 95];

var lowCap = [10, 20, 25, 30, 35, 40, 45, 50];
var lowCap2 = [10, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75];
var lowCap3 = [10, 20, 25, 30, 35, 40, 45, 50, 55, 65, 60, 70, 75, 80, 85, 90];
var tooBigCap = [60, 70, 80, 90, 100, 55, 65, 75, 85, 95];
var tooBigCap2 = [90, 100, 85, 95];
var tooBigCap3 = [95, 100];


var whS = ['M', 'L'];

var decisions = [];

function tooOld(){
    var size = getRandom(wS, 1);
    var weight = getRandom(wS, 1);
    var currentWeightCapacity = getRandom(currentCapacity, 1);
    var currentSizeCapacity = getRandom(currentCapacity, 1);
    var missedRounds = Math.floor((Math.random() * 10 - 3) + 3);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}

function tooBigL(){
    size = getRandom(wS, 1);
    weight = "L";
    currentWeightCapacity = getRandom(tooBigCap, 1);
    currentSizeCapacity = getRandom(currentCapacity, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}

function tooBig2L(){
    weight = getRandom(wS, 1);
    size = "L";
    currentSizeCapacity = getRandom(tooBigCap, 1);
    currentWeightCapacity = getRandom(currentCapacity, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}

function tooBigM(){
    weight = getRandom(wS, 1);
    size = "M";
    currentSizeCapacity = getRandom(tooBigCap2, 1);
    currentWeightCapacity = getRandom(currentCapacity, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}
function tooBigM2(){
    size = getRandom(wS, 1);
    weight = "M";
    currentWeightCapacity = getRandom(tooBigCap2, 1);
    currentSizeCapacity = getRandom(currentCapacity, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}
function tooBigS(){
    weight = getRandom(wS, 1);
    size = "S";
    currentSizeCapacity = getRandom(tooBigCap3, 1);
    currentWeightCapacity = getRandom(currentCapacity, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}
function tooBigS2(){
    size = getRandom(wS, 1);
    weight = "S";
    currentWeightCapacity = getRandom(tooBigCap3, 1);
    currentSizeCapacity = getRandom(currentCapacity, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}

function ok(){
    weight = getRandom(wS, 1);
    size = getRandom(wS, 1);
    currentSizeCapacity = getRandom(lowCap, 1);
    currentWeightCapacity = getRandom(lowCap, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}

function ok2(){
    weight = "M";
    size = getRandom(wS, 1);
    currentSizeCapacity = getRandom(lowCap, 1);
    currentWeightCapacity = getRandom(lowCap2, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}
function ok3(){
    size = "M";
    weight = getRandom(wS, 1);
    currentWeightCapacity = getRandom(lowCap, 1);
    currenttSizeCapacity = getRandom(lowCap2, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}

function ok3(){
    weight = "S";
    size = getRandom(wS, 1);
    currentSizeCapacity = getRandom(lowCap, 1);
    currentWeightCapacity = getRandom(lowCap3, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}
function ok3(){
    size = "S";
    weight = getRandom(wS, 1);
    currentWeightCapacity = getRandom(lowCap, 1);
    currentSizeCapacity = getRandom(lowCap3, 1);
    missedRounds = Math.floor((Math.random() * 2 - 1) + 1);

    doc.innerHTML += ("[" + size + ", " + weight + ", " + missedRounds + ", " + currentWeightCapacity + ", " + currentSizeCapacity + "], ");
}
    function main(){
        var choice; 
            for(var i=0; i<1000; i++){
                 choice = Math.floor(Math.random() * 8+1);
                switch(choice){
                  case 0:
                    tooOld();
                    decisions[i] = true;
                    break;

                  case 1:
                    tooBigS2();
                    decisions[i] = false;
                    break;

                  case 2:
                    tooBigS();
                    decisions[i] = false;
                    break;

                  case 3:
                    tooBigM();
                    decisions[i] = false;
                    break;

                  case 4:
                    tooBigM2();
                    decisions[i] = false;
                    break;

                  case 5:
                    tooBig2L();
                    decisions[i] = false;
                    break;

                  case 6:
                    tooBigL();
                    decisions[i] = false;
                    break;

                  case 7:
                    ok();
                    decisions[i] = true;
                    break;

                  case 8:
                    ok3();
                    decisions[i] = true;
                    break;

                  case 9:
                    ok2();
                    decisions[i] = true;
                    break;
                }
            }

            doc.innerHTML += "\n\n\n\n\n";

            for(var i=0; i<1000; i++){
                    if(decisions[i]){
                        doc.innerHTML += "true, ";
                    }else{
                        doc.innerHTML += "false, ";
                    }
            }
        }


        main();