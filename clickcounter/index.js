let count = 0;

document.getElementById("decrease").onclick = decrease()
document.getElementById("increase").onclick = increase()
document.getElementById("reset").onclick = reset()


function decrease(){
    count--;

}

function increase(){
   count++;
}

function reset(){
   count=0; 
}
