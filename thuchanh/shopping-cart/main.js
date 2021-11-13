function randomId() {
         return Math.floor(Math.random() * 100000)
}

let products = [
    {
        id : randomId(),
        name : "Áo kiểu nữ cam đất phối cổ trắng dập ly",
        description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
        price : 250000,
        image : "https://image.yes24.vn/Upload/ProductImage/anhduong201605/1947415_L.jpg?width=550&height=550",
        count : 1,
    },
    {
        id : randomId(),
        name : "Áo trắng bèo lé đen tay loe dễ thương",
        description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
        price : 350000,
        image : "https://image.yes24.vn/Upload/ProductImage/anhduong201605/1914666_L.jpg?width=550&height=550",
        count : 1,
    }
]
