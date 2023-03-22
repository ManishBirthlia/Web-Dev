var clrs=["green","red","yellow","blue"];
var Pattern = [];
var user = [];
var st = false;
var level=1;
$(document).on("keydown",()=>{
    if(!st){
        Pattern=[];
        user=[];
        //makePattern();
        st=true;
    }
});
// function makePattern(){
//     var r=Math.floor(Math.random()*4);
//     Pattern.push(clrs[r]);
//     $("#"+clrs[r]).click();
// }
$(".btn").on("click",()=>{
    var element=$(this);
    var element_color = element.attr('id');
    element.addClass("pressed");
    playSound(element.attr('id'));
    setTimeout(()=>{    
        element.removeClass("pressed");
    },100);
});
function playSound(key){
    var s=new Audio("sounds/"+key+".mp3");
    s.play();
}
function GameOver(){
    st=false;
    level=1;
}