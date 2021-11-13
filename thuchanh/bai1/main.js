let btnTru  = document.getElementById('tru')

let btnCong = document.getElementById('cong')

let number = document.getElementById('counter')

let count = 0;

btnCong.addEventListener('click',function(){
    count++;
    checkCount(count);
   
})

btnTru.addEventListener('click',function(){
    count--;
    checkCount(count);
})

function checkCount(count){
    if(count == 0){
        number.innerHTML = `<span style = "color :#333333">${count}</span>`
    }
    else if(count > 0){
        number.innerHTML = `<span style = "color :blue">${count}</span>`
    }
    else
    {
        number.innerHTML = `<span style = "color :red">${count}</span>`
    }
}