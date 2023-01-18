var increament=document.querySelector(".increament")
var decreament=document.querySelector(".decreament")
var clear=document.querySelector(".clear")
var p=document.querySelector(".this_num")
var box = document.querySelector(".box")
var x=document.querySelector(".X")
var y=document.querySelector(".Y")

increament.addEventListener("click", ()=>{
    p.innerHTML++
    p.style.color="green"
})
decreament.addEventListener("click", ()=>{
    if (p.innerHTML>0){
        p.innerHTML--
        p.style.color="red"
    }
    
})
clear.addEventListener("click",()=>{
    p.innerHTML=0
})



var MouseCoords = {
    getX: function(e)
    {x.innerHTML=e.pageX;},
    getY: function(e)
    {y.innerHTML=e.pageY;}
}
box.onmousemove = function(e)
{       
        MouseCoords.getX(e)
        MouseCoords.getY(e);
}




