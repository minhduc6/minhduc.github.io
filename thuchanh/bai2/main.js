let users = [
    {
        name: "DUC",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        color: "red"
    },
    {
        name: "THAO",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        color: "blue"
    },
    {
        name: "TRI",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
        color: "green"
    },
    {
        name: "LAN",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        color: "grey"
    },
    {
        name: "LAN",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        color: "black"
    }
]

let pTarget = document.getElementsByClassName('text').item(0)
let strongTarget = document.getElementsByClassName('name').item(0)
console.log(strongTarget)

let authors = document.getElementsByClassName('author')
console.log(authors)
let authorArr  = Array.from(authors)
console.log(authorArr)
for(let i = 0 ; i < authorArr.length ; i++) {
    authorArr[i].addEventListener('click',function(){
          pTarget.innerHTML = `<span>${users[i].quote}</span>`
          strongTarget =  `<span>${users[i].name}</span>`
          
    })
}