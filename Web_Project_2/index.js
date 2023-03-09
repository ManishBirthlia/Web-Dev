var numberOfDrum=document.querySelectorAll(".drum").length;
document.addEventListener("keydown",function(event){
    makeSound(event.key);
});
for(var i=0;i<numberOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var key=this.innerText;
        console.log(key);
        if(this.style.color=="white") this.style.color="#DA0463"
        else this.style.color="white"
        makeSound(key);
    });
}
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



// document.querySelectorAll(".drum")[i].addEventListener("click",clicked); 
//  ==
// document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//     alert("Hey there, I Got Clicked");
// });