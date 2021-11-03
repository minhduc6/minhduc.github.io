let inputTarget = document.getElementById("password")
console.log(inputTarget)

let btnTarget = document.getElementById("btn")

btnTarget.addEventListener('click',function(){
    if(inputTarget.type == 'text')
    {
        inputTarget.type = 'password'
        btnTarget.innerText = 'Hien'
    }
    else
    {
        btnTarget.innerText = 'An'
        inputTarget.type = 'text'
    }
})


let userNameEle = document.getElementById("username")

let passWordEle = document.getElementById("password")

let buttonLogin = document.getElementById("btn-login")

buttonLogin.addEventListener('click',function(){
    let usernameValue = userNameEle.value;
    let passwordValue = passWordEle.value;
    checkValidate(usernameValue,passwordValue)
})

function checkValidate(username,pass) {
     if(username == "") {
          setError(username , "ten khong duoc de trong")
     } else{
         setSuccess(username)
     }
     if(pass == "") {
         setError(pass, "Mat khao khong de trong")
     } else if(pass.length < 8)
     {
        setError(pass, "Mat khao nhieu hon 8 ky tu")
     }
     else
     {
         setSuccess(pass)
     }
}

function setError(ele,message) {
    ele.classList.add('error')
    let span = ele.parentElement.querySelector('span')
    span.innerText  = message
}

function setSuccess(ele) {
    ele.classList.add('success')
}