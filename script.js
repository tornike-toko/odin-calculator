const DISPLAY = document.getElementsByClassName("display")[0]
DISPLAY.innerText = ""

const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")

let firstNum = ""

const add = document.getElementById("add")
const sub = document.getElementById("sub")
const mult = document.getElementById("mult")
const dev = document.getElementById("dev")

let opperator = ""

add.addEventListener("click", (e) => {chooseOpperator(e.target)})
sub.addEventListener("click", (e) => {chooseOpperator(e.target)})
mult.addEventListener("click", (e) => {chooseOpperator(e.target)})
dev.addEventListener("click", (e) => {chooseOpperator(e.target)})

for(i=0;i<10;i++){
    document.getElementById(`${i}`).addEventListener("click",(e) => { doMath(e.target)})
}

function doMath(num){
    firstNum = firstNum + num.innerText
    console.log(firstNum)
    addToDisplay(num.innerText)
}

function addToDisplay(newel){
    DISPLAY.innerText = DISPLAY.innerText + newel
}

function chooseOpperator(e){
    switch (e.innerText){
        case "+":
            console.log(e.innerText)
            break;
        case "-":
            console.log(e.innerText)
            break;
        case "*":
            console.log(e.innerText)
            break;
        case "/":
            console.log(e.innerText)
            break;
    }
}