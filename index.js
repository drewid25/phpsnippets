let btn1 = document.getElementsByClassName("btn1")[0]
let btn2 = document.getElementsByClassName("btn2")[0]
let btn3 = document.getElementsByClassName("btn3")[0]
let output = document.getElementsByClassName("output")[0]

btn1.onclick = function () {
     output.innerHTML +=1
}
btn2.onclick = function () {
   output.innerHTML *= 2
}
btn3.onclick = function () {
   output.innerHTML -= 3
}
