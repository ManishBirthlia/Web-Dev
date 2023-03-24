var clrs=["green","red","yellow","blue"];
var Pattern = [];
var user = [];
var st = false;
var level=1;
$(document).on("keydown",()=>{
    if(!st){
        makePattern();
        st=true;
    }
});
function makePattern(){
    var n=Math.floor(Math.random()*4);
    user=[];
    $("h1").text("Level "+level);
    level++;
    Pattern.push(clrs[n]);
    setTimeout(()=>{
        animate(clrs[n]);
        makesound(clrs[n]);
    },1000);
}
$(".btn").on("click",function(){
    var l=$(this);
    var element_color=l.attr('id');
    makesound(element_color);
    animate(element_color);
    user.push(element_color);
    check_Pattern(user.length-1);
    console.log(Pattern);
    console.log(user);
});
function check_Pattern(i){
    if (user.length===Pattern.length  && user[i]===Pattern[i]){
        makePattern();
    }else if(user.length>=Pattern.length || user[i]!==Pattern[i]){
        GameOver();
    }
}
function animate(key){
    var l=$("#"+key);
    l.addClass("pressed");
    setTimeout(function(){
        l.removeClass("pressed");  
    },100);
}
function makesound(key){
    var s=new Audio("sounds/"+key+".mp3");
    s.play();
}
function GameOver(){
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(()=>{
        $("body").removeClass("game-over");
    },200);
    Pattern=[];
    user=[];
    st=false;
    level=1;
}