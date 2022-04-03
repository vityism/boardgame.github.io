var MIL = 30;
var ECO = 30;
var SS = 30;
var HRF = 30;

var lastMIL;
var lastECO;
var lastSS;
var lastHRF;

function lMil5(){
  record();
  MIL -= 5;
  if (MIL>100){MiL=100;} else if (MIL<0){MIL=0;}
  console.log(MIL);
  document.getElementById("milNum").innerHTML = MIL;
}
function lEco5(){

}
function lSs5(){

}
function lHrf5(){

}



function lMil1(){

}
function lEco1(){

}
function lSs1(){

}



function uMil1(){

}
function uEco1(){

}
function uSs1(){

}



function uMil5(){

}
function uEco5(){

}
function uSs5(){

}
function uHrf5(){

}


function record(){
  lastMIL = MIL;
  lastECO = ECO;
  lastSS = SS;
  lastHRF = HRF;
}

function printAll(){
  document.getElementById("milNum").innerHTML = MIL;
  document.getElementById("ecoNum").innerHTML = ECO;
  document.getElementById("ssNum").innerHTML = SS;
  document.getElementById("hrfNum").innerHTML = HRF;
}

function RESET(){
  record();
  MIL = 30;
  ECO = 30;
  SS = 30;
  HRF = 30;
  printAll();
}

function UNDO(){
  MIL = lastMIL;
  ECO = lastECO;
  SS = lastSS;
  HRF = lastHRF;
  record();
  printAll();
}
