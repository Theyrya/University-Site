const todoList = [];

function addlines(){
let todovaluehtml = '';
for(let i =0; i<todoList.length; i++){
const todoObject = todoList[i];
//const name = todoObject.name;
//const dueDate = todoObject.dueDate;
const { name, dueDate} = todoObject;
const html = `
<div>${name}</div>
 <div>${dueDate}</div>
<button onclick="
todoList.splice(${i}, 1);
addlines();
"class="delete">Delete</button>
`;

todovaluehtml += html;

}
console.log(todovaluehtml);
document.querySelector('.js-todolist').innerHTML = todovaluehtml;
}
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });
    inputElement.todo = '';
    addlines();
}