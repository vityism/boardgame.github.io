var MIL = 30;
var ECO = 30;
var SS = 30;
var HRF = 30;

var lastMIL = new Array();
var lastECO = new Array();
var lastSS = new Array();
var lastHRF = new Array();

function lMil5(){
  record();
  MIL -= 5;
  if (MIL<0)MIL=0;
  document.getElementById("milNum").innerHTML = MIL;
}
function lEco5(){
  record();
  ECO -= 5;
  if (ECO<0)ECO=0;
  document.getElementById("ecoNum").innerHTML = ECO;
}
function lSs5(){
  record();
  SS -= 5;
  if (SS<0)SS=0;
  document.getElementById("ssNum").innerHTML = SS;
}
function lHrf5(){
  record();
  HRF -= 5;
  if (HRF<0)HRF=0;
  document.getElementById("hrfNum").innerHTML = HRF;
}



function lMil1(){
  record();
  MIL -= 1;
  if (MIL<0)MIL=0;
  document.getElementById("milNum").innerHTML = MIL;
}
function lEco1(){
  record();
  ECO -= 1;
  if (MIL<0)ECO=0;
  document.getElementById("ecoNum").innerHTML = ECO;
}
function lSs1(){
  record();
  SS -= 1;
  if (SS<0)SS=0;
  document.getElementById("ssNum").innerHTML = SS;
}



function uMil1(){
  record();
  MIL += 1;
  if (MIL>100)MiL=100;
  document.getElementById("milNum").innerHTML = MIL;
}
function uEco1(){
  record();
  ECO += 1;
  if (ECO>100)ECO=100;
  document.getElementById("ecoNum").innerHTML = ECO;
}
function uSs1(){
  record();
  SS += 1;
  if (SS>100)SS=100;
  document.getElementById("ssNum").innerHTML = SS;
}



function uMil5(){
  record();
  MIL += 5;
  if (MIL>100)MiL=100;
  document.getElementById("milNum").innerHTML = MIL;
}
function uEco5(){
  record();
  ECO += 5;
  if (ECO>100)ECO=100;
  document.getElementById("ecoNum").innerHTML = ECO;
}
function uSs5(){
  record();
  SS += 5;
  if (SS>100)SS=100;
  document.getElementById("ssNum").innerHTML = SS;
}
function uHrf5(){
  record();
  HRF += 5;
  if (HRF>100)HRF=100;
  document.getElementById("hrfNum").innerHTML = HRF;
}


function record(){
  lastMIL.push(MIL);
  lastECO.push(ECO);
  lastSS.push(SS);
  lastHRF.push(HRF);
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
  if(lastMil.length <= 0) return;
  MIL = lastMil.pop();
  ECO = lastECO.pop();
  SS = lastSS.pop();
  HRF = lastHRF.pop();
  printAll();
}
