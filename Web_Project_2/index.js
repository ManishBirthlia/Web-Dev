var numberOfDrum=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var key=this.innerText;
        this.style.color="white";
        makeSound(key);
    });
    document.addEventListener("keydown",function(event){
        makeSound(event.key);
    });
}
function makeSound(key){
    if(key=="w"){
        var key=new Audio("sounds/t_1.mp3");
        key.play();
    }else if(key=="a"){
        var key=new Audio("sounds/t_2.mp3");
        key.play();
    }else if(key=="s"){
        var key=new Audio("sounds/t_3.mp3");
        key.play();
    }else if(key=="d"){
        var key=new Audio("sounds/t_4.mp3");
        key.play();
    }else if(key=="j"){
        var key=new Audio("sounds/t_5.mp3");
        key.play();
    }else if(key=="k"){
        var key=new Audio("sounds/t_6.mp3");
        key.play();
    }else if(key=="l"){
        var key=new Audio("sounds/t_7.mp3");
        key.play();
    }else{
        alert("Key doesn't Exist");
    }
}



// document.querySelectorAll(".drum")[i].addEventListener("click",clicked); 
//  ==
// document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//     alert("Hey there, I Got Clicked");
// });