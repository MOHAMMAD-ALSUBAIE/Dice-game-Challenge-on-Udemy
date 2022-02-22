

//first player
var randomNumber1=Math.floor(Math.random()*6)+1;//it will generate random number when reversh the page

var randomDiscNumber1="images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src",randomDiscNumber1);






//scanned player
var randomNumber2=Math.floor(Math.random()*6)+1;//it will generate random number when reversh the page

var randomDiscNumber2="images/dice"+ randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src",randomDiscNumber2);//it will change what in src whit varible discNumber2



















if(randomNumber1===randomNumber2){
  document.querySelector("h1").textContent="Draw!";//it take the textContent inside h1 and change the value, it property
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩 Player 1 win";//it take the textContent inside h1 and change the value, it property
}
else {
  document.querySelector("h1").textContent="Player 2 win 🚩 ";//it take the textContent inside h1 and change the value, it property
}




//button of start game
document.querySelector("button").addEventListener("click",function(){
  location.reload();
});

