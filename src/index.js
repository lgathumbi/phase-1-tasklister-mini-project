document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form =document.querySelector('#create-task-form')
form.addEventListener('submit',(e) => {
  e.preventDefault();
  let newTask = document.querySelector('#new-task-description').value;
  buildToDo(newTask);
  form.reset();
})

function buildToDo(taskDescription) {
let li = document.createElement('li');
li.textContent = taskDescription;
let btn = document.createElement('button');
btn.addEventListener('click', handleDelete);
btn.textContent = 'delete';
li.appendChild(btn)
console.log(li)
document.querySelector('#tasks').appendChild(li)
}
function handleDelete(e){
  e.target.parentNode.remove()
}
});
