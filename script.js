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
let secondNum = ""

const add = document.getElementById("add")
const sub = document.getElementById("sub")
const mult = document.getElementById("mult")
const dev = document.getElementById("dev")

let opperator = ""

add.addEventListener("click", (e) => {doMath(e.target)})
sub.addEventListener("click", (e) => {doMath(e.target)})
mult.addEventListener("click", (e) => {doMath(e.target)})
dev.addEventListener("click", (e) => {doMath(e.target)})

for(i=0;i<10;i++){
    document.getElementById(`${i}`).addEventListener("click",(e) => { doMath(e.target)})
}

function doMath(e){
    if(opperator == ""){
        //choose first number and have option to choose operator
        if(e.innerText == "+" || e.innerText == "-" || e.innerText == "*" || e.innerText == "/"){
            //choose operator
            if(firstNum != ""){
                chooseOpperator(e)
            }
        }else{
            //then it is number and choose number
            firstNum = firstNum + e.innerText
            console.log(firstNum)
            addToDisplay(e.innerText)
        }
    }else if(opperator != ""){
        if(e.innerText == "+" || e.innerText == "-" || e.innerText == "*" || e.innerText == "/"){
            if(secondNum ==""){
                console.log(`change ${e.innerText}`)
            }else{
                console.log("do calculation and get this operation as next operation")
            }
            // console.log(`change operator to ${e.innerText}`)
        }else{
            //then it is number and choose number
            secondNum = secondNum + e.innerText
            console.log(secondNum)
            addToDisplay(e.innerText)
        }
    }
}

function addToDisplay(newel){
    DISPLAY.innerText = DISPLAY.innerText + newel
}

function chooseOpperator(e){
    switch (e.innerText){
        case "+":
            opperator = "add"
            addToDisplay(e.innerText)
            console.log(e.innerText)
            break;
        case "-":
            opperator = "sub"
            addToDisplay(e.innerText)
            console.log(e.innerText)
            break;
        case "*":
            opperator = "mult"
            addToDisplay(e.innerText)
            console.log(e.innerText)
            break;
        case "/":
            opperator = "dev"
            addToDisplay(e.innerText)
            console.log(e.innerText)
            break;
    }
}