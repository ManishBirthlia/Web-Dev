var a=Math.floor(Math.random()*6+1);
var b=Math.floor(Math.random()*6+1);
document.querySelectorAll(".dice img")[0].setAttribute("src","images/dice"+a+".png");
document.querySelectorAll(".dice img")[1].setAttribute("src","images/dice"+b+".png");
if(a>b){
    document.querySelector(".container h1").textContent="Player 1 WINS";
}else if(b>a){
    document.querySelector(".container h1").textContent="Player 2 WINS";
}else{
    document.querySelector(".container h1").textContent="DRAW";
}