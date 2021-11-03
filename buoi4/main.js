//Bai 1
let newElement = document.createElement('p')
newElement.innerText ="Hello"
newElement.id = 'text'
newElement.style.color = '#777'
newElement.style.width = '2rem'
newElement.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
console.log(newElement)
// Bai 2 : Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue.

let liTarget = document.querySelectorAll('ul:nth-child(1) > li')
for(let i = 0 ; i < liTarget.length ; i++)
{
    liTarget[i].style.color = 'blue'
}
//console.log(liTarget)

//Bai 3
// Sử dụng javascript để thực hiện những công việc sau
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
// Remove thẻ <li> 4
// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ

let ulTarget = document.getElementById('list')
let li8th = document.createElement("li")
li8th.innerText = 'Item 8'
ulTarget.appendChild(li8th)
let li9th = document.createElement("li")
li9th.innerText = 'Item 9'
ulTarget.appendChild(li9th)
let li10th = document.createElement("li")
li10th.innerText = 'Item 10'
ulTarget.appendChild(li10th)

let listLi = document.querySelectorAll("ul:nth-child(2) > li")
console.log(listLi)
listLi[0].style.color = 'red'
listLi[2].style.backgroundColor = 'green'
ulTarget.removeChild(listLi[3])
listLi[2].insertAdjacentHTML("afterend","<li>Lear DOM JS</li>")