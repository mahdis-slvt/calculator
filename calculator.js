const display=document.querySelector(".display")


function showDisplay(event){
    let text=event.target.innerText;
    if(display.innerText == 0){
       return display.innerText = text;
    }else{
        display.innerText += text
    }
}
function allClear(){
    display.innerText = 0
}
function lastClear(){
    let text = display.innerText;
    if (text.length === 1) {
        display.innerText = 0;
    } else { 
        display.innerText = text.substring(0, text.length - 1)
    }
}
function calculate(){
    let result = display.innerText;
    display.innerText = eval(result);
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".clear-last").addEventListener("click", lastClear);
document.querySelector(".all-clear").addEventListener("click", allClear);
const list=document.querySelectorAll(".show-display")
list.forEach(item =>{
    item.addEventListener("click", showDisplay)
})
