/*
Các chức năng có trong ứng dụng todolist

1. Lấy danh sách cv hiện có
2. Thêm cv
3. Sửa cv
4. Xóa cv
5. Lọc cv theo trạng thái
6. Thay đổi trạng thái
*/

// Truy cập vào các thành phần
const todo_list = document.querySelector(".todo-list");
const todo_input = document.getElementById("todo-input");
const btn_add = document.getElementById("btn-add");

// Khai báo biến
let todos = [];

function createId() {
    return Math.floor(Math.random() * 100000);
}

// ============== API ===============
// API lấy danh sách todo
function getTodosAPI() {
    return axios.get("/todos"); // => luôn trả về promise
}

// API thêm công việc
function createTodoAPI(title) {
    return axios.post("/todos", {
        id: createId(),
        title: title,
        status: false,
    });
}
function updateTodoAPI(id,title,trangThai){
    return axios.put(`/todos/${id}`,{
        id: id,
        title: title,
        status: trangThai,
    })
}
function deleteTodoAPI(id){
    return axios({
        method : "delete",
        url : `/todos/${id}`
    })
}

// Render UI - Hiển thị danh sách todo ra ngoài giao diện
function renderUI(arr) {
    todo_list.innerHTML = "";

    // Kiểm tra mảng rỗng
    if (arr.length == 0) {
        todo_list.innerHTML = "Không có công việc nào trong danh sách";
        return;
    }

    // Trường hợp có công việc
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        todo_list.innerHTML += `
            <div class="todo-item ${t.status ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input type="checkbox" ${t.status ? "checked" : ""}/>
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update" onclick="popup(${t.id})")>
                        <img src="./img/pencil.svg" alt="icon" />
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                        <img src="./img/remove.svg" alt="icon"  />
                    </button>
                </div>
            </div>
        `;
    }
}

// ============= Hàm xử lý =============
// Lấy danh sách todo
async function getTodos() {
    try {
        const res = await getTodosAPI();
        todos = res.data;

        // Render ra ngoài giao diện
        renderUI(todos);
    } catch (error) {
        console.log(error);
    }
}

async function createTodo(title) {
    try {
        const res = await createTodoAPI(title);
        todos.push(res.data)

        // Render ra ngoài giao diện
        renderUI(todos);
    } catch (error) {
        console.log(error);
    }
}

async function deleteTodo(id) {
    try {
        await deleteTodoAPI(id) // Gọi API xóa

        // Xóa todo trong mảng todos ban đầu
        todos.forEach((todo, index) => {
            if(todo.id == id) {
                todos.splice(index, 1)
            }
        })

        renderUI(todos)

    } catch (error) {
        console.log(error);
    }
}
async function updateToDo(id,title,status){
    try {
        await updateTodoAPI(id,title,status)
        todos.forEach((todo,index) => {
            if(todo.id == id) {
                todo.title = title
            }
        })
        renderUI(todos)
    } catch (error) {
       // console.log(error);
    }
}
// Thêm công việc
btn_add.addEventListener("click", function () {
    let todoTitle = todo_input.value; // Lấy ra nội dung trong ô input
    if(todoTitle == "") {
        alert("Tiêu đề không được để trống")
        return
    }

    createTodo(todoTitle)
    todo_input.value = ""
});
//Update Job
let modal = document.querySelector(".popup");
let closeBtn = document.querySelector(".close-btn");
let updateBtn = document.getElementById("btn-update");
let titleUpdate = document.getElementById("todo-inputUpdate");
console.log(titleUpdate)
function popup(id){
      modal.style.display = "block"
    
      updateBtn.addEventListener('click',function(){
       let title = titleUpdate.value;
       let status = false ;
       updateToDo(id,title,status)
       id = 0
   })
   titleUpdate.value = ""
}





closeBtn.onclick = function(){
    modal.style.display = "none"
}

window.onclick = function(e){
    if(e.target == modal){
    modal.style.display = "none"
}
}

window.onload = () => {
    getTodos();
};
