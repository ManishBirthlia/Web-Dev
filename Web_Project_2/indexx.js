var DrumsLength=$(".drum").lenght;
$(document).keydown(function(e){
    // makeSound(e.key);
    $("."+e.key).addClass("pressed");
    $("."+e.key).css("color","white");
    setTimeout(function(){
        $("."+e.key).removeClass("pressed");
        $("."+e.key).css("color","#DA0463")
    },100);
});   
$(".drum").on("click",function(){
    // makeSound(this.innerText); // this.innerText == $(this).text();
    makeSound($(this).text());
});
// $(".drum").click(function(){
//     makeSound(this.innerText); // this.innerText == $(this).text();
//     console.log($(this).text());
// });
// function addAnimation(key){
//     var s=$("."+key);
//     s.addClass("pressed");
//     s.css("color","white");
//     setTimeout(funtion(){
//         s.removeClass("pressed");
//         s.css("color","#DA0463");
//     },100);
// }
function makeSound(key){
    var s;
    if(key=="w"){
        s=new Audio("sounds/t_1.mp3");
    }else if(key=="a"){
        s=new Audio("sounds/t_2.mp3"); 
    }else if(key=="s"){
        s=new Audio("sounds/t_3.mp3");
    }else if(key=="d"){
        s=new Audio("sounds/t_4.mp3");
    }else if(key=="j"){
        s=new Audio("sounds/t_5.mp3");
    }else if(key=="k"){
        s=new Audio("sounds/t_6.mp3");
    }else if(key=="l"){
        s=new Audio("sounds/t_7.mp3");
    }
    s.play();
}