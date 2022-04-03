function diceRoll(){
    var roll = Math.ceil(6*Math.random());
    return roll;
}

function compare(a1, a2, d1, d2){
    if(a1<=d1){
        if(a1<=d2){
            attNum -= 2;
        }
        else{
            attNum --;
            defNum --;
        }
    }else{
        if(a2>d1){
            defNum -= 2;
        }
        else{
            attNum --;
            defNum --;
        }
    }
}

function battle(){

    attDice.sort(function(a, b){return b-a});
    defDice.sort(function(a, b){return b-a});

    compare(attDice[0], attDice[1], defDice[0], defDice[1]);
//    console.log("a " + attNum);
 //   console.log("d " + defNum);

}

function finish(){
    if (defNum>=attNum+8){
        attNum=0;
    } else if (attNum>=defNum+9){
        defNum=0;
    } else{
        if (Math.random()>0.5){
            attNum -- ;
        }else defNum --;
    }
}

function declare(){
    if(defNum <= 0){
      document.getElementById("results").innerHTML = "Attacker wins. Returning Troops: " + Math.floor(attNum/2);
//    wins ++;
    }
    if (attNum<=0){
      document.getElementById("results").innerHTML = "Defender wins. Returning Troops: " + defNum;
//    losses ++;
    }
}

function main(ATT, DEF){
//while (repeat<100){
attNum = ATT.value;
defNum = DEF.value;

while(attNum > 2 && defNum > 1){
    attDice = [diceRoll(), diceRoll(), diceRoll()];
    defDice = [diceRoll(), diceRoll()];
    battle();
}
while(attNum>0 && defNum>0){
    finish();
}

declare();
/*
repeat ++;
}
//console.log(wins);
console.log(losses);
*/
}

var attNum = 0;
var defNum= 0;
var attDice = [0, 0, 0];
var defDice = [0, 0];

//var repeat = 0;
//var wins = 0;
//var losses = 0;
