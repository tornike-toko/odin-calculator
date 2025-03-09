const DISPLAY = document.getElementsByClassName("display")[0]

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

for(i=0;i<10;i++){
    document.getElementById(`${i}`).addEventListener("click",(e) => { doMath(e.target)})
}

function doMath(num){
    firstNum = firstNum + num.innerText
    console.log(firstNum)
}
