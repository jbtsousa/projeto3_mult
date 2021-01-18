var quotes = [
    "Inevitáveis viagens",
    " ",
    "Extremamente penosas",
    " ",
    "Estradas desertas",
    " ",
    "Lenta demais para a ansiedade do trapezista",
    " ",
    "Destruíam os nervos do trapezista",
    " "];

var q = document.getElementById("quote");
var sec = document.getElementById("part2-text1");

let counter = 0;


setInterval(function(){
  q.innerHTML = quotes[counter];

  if (counter%2 != 0){
    q.style.opacity = 0;
  }
  else{
    q.style.opacity = 1;
  }

  
  var positionInfo = sec.getBoundingClientRect();
  var secHeight = positionInfo.height/3;
  var secWidth = positionInfo.width;
  
  qHeight = q.clientHeight;
  qWidth = q.clientWidth;
  
  availSpace_V = secHeight - qHeight;
  availSpace_H = secWidth - qWidth;

  var randNum_V = Math.round(Math.random() * availSpace_V);
  var randNum_H = Math.round(Math.random() * availSpace_H);
                
  
  q.style.top = randNum_V + "px";
  q.style.left = randNum_H + "px";
  
  counter++;
  if (counter >= quotes.length) {
    counter = 0;
  }  
}, 2000);

