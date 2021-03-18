
function changePlayer1() { //if x or y inputs are 0 == false, I have to change here
  let x = document.getElementById("myText1").value;
  if(x == false && x != "0"){
    document.getElementById("player1").innerHTML = "Player 1";
  }
  else {
    document.getElementById("player1").innerHTML = x;
    document.getElementById("labelDisplay1").style.visibility = "hidden";
  }
  
}

// I have a lot of Id ((((((
function changePlayer2() {
  let y = document.getElementById("myText2").value;
  if(y == false && y != "0"){
    document.getElementById("player2").innerHTML = "Player 2";
  } else{
    document.getElementById("player2").innerHTML = y;
    document.getElementById("labelDisplay2").style.visibility = "hidden";
  }
  
}

//visibility input
function visibilityInput1(){
  document.getElementById("labelDisplay1").style.visibility = "visible";

}
function visibilityInput2(){
  document.getElementById("labelDisplay2").style.visibility = "visible";

}

//button event
document.getElementById("myBtn").addEventListener("click", function() {

let randomImage1 = Math.floor(Math.random() * 3) + 1;
let randomImage2 = Math.floor(Math.random() * 3) + 1;


let randomImage1Link = "images/hand" + randomImage1 + ".png";
let randomImage2Link = "images/hand" + randomImage2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1Link);
document.querySelector(".img2").setAttribute("src", randomImage2Link);


////trebuie de modificat - solved
let x = document.getElementById("myText1").value;
let y = document.getElementById("myText2").value;

if (randomImage1 === 1 && randomImage2 === 2 || randomImage1 === 2 && randomImage2 === 3 || randomImage1 === 3 && randomImage2 === 1){
  document.querySelector("h1").innerHTML = x + " won!";
} else if( randomImage1 === randomImage2){
  document.querySelector("h1").innerHTML = "Draw";
} else{
  document.querySelector("h1").innerHTML = y + " won!";
}
});

//I have to add counters

