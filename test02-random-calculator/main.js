let timeOut = document.getElementsByClassName('time')[0]
let numberOne = document.getElementById('primary-number')
let numberTwo = document.getElementById('secondary-number')
let ope = document.getElementById('operator')
let ketQua = document.getElementById('result')
let scoreHtml = document.getElementsByClassName('score')[0]
let operator = ['+','-','*']
var seconds=60;
var timer;
function myFunction() {
  if(seconds < 60) { // I want it to say 1:00, not 60
    timeOut.innerHTML = `00:${seconds}`;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     alert("Chức Mừng Bạn Đạt Được :" + score + " điểm");
     score = 0
     timeOut.innerHTML="1:00"; 
     scoreHtml.innerHTML = "00"
     seconds = 60
  }
}
if(!timer) {
    timer = window.setInterval(function() { 
      myFunction();
    }, 1000); // every second
}

timeOut.innerHTML="1:00"; 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

numberOne.innerHTML = `${getRandomInt(0, 10)}`
numberTwo.innerHTML = `${getRandomInt(0, 10)}`
ope.innerHTML = `${operator[getRandomInt(0,3)]}`

ketQua.addEventListener('keyup' ,function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        checkKQ()
       }
})

let score = 0;
function checkKQ(){
    let x = numberOne.innerText
    let y = `${numberTwo.innerText}`
    let z = ketQua.value
    if(z == ""){
       alert("Kết Quả Không Để Trống")
    }
    let result = eval(`${x}  ${ope.innerText}  ${y}`)
    if(z == result){
      score++;
      numberOne.innerHTML = `${getRandomInt(0, 10)}`
      numberTwo.innerHTML = `${getRandomInt(0, 10)}`
      ope.innerHTML = `${operator[getRandomInt(0,3)]}`
      scoreHtml.innerText = `${score}`
      ketQua.value = ""
    }
    else{
      ketQua.value = ""
    }
}


