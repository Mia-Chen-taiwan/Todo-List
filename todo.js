// init
const todoList = document.querySelector('#my-todo')
const doneList = document.querySelector('#my-todo-done')

const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  todoList.appendChild(newItem)
}

function move_deleteItem (event){
  console.log(this)
  console.log(event.target)
  let li = event.target.parentElement
  //delete item
  if (event.target.classList.contains('delete')){
    li.remove()
  } else if (event.target.tagName === 'LABEL'){
  //點擊後畫線並移至另一個list
 event.target.classList.toggle('checked')
    if(event.target.classList == 'checked'){
      doneList.appendChild(li.cloneNode(true))
    } else {
      todoList.appendChild(li.cloneNode(true))
    }
    li.remove()
  }
}

const addBtn = document.querySelector('#addBtn')
const input = document.querySelector('#newTodo')
addBtn.addEventListener('click', function () {
  let inputValue = input.value
  //input 還沒有輸入內容，不會產生新的 todo
  if (inputValue !== ''){
    addItem(inputValue)
  }
  input.value = ''
})
//按enter也能增加項目
input.addEventListener('keypress', function (event) {
  if (event.keyCode == 13){
  //console.log(event.keyCode)  
    let inputValue = input.value
    if (inputValue !== ''){
    addItem(inputValue)
  }
    input.value = ''
  }
})

//點擊後畫線獲取消劃線並移至另一個list
todoList.addEventListener('click', move_deleteItem)
doneList.addEventListener('click', move_deleteItem)