document.addEventListener('DOMContentLoaded',()=>{
let submitButton =document.getElementById ('submit-button');
let todolist =document.getElementById('todo list'); 

fetch('http://127.0.0.1:3000/todos')
.then(res => res.json())
.then(todos =>console.log(todos ) )

Form.addEventListener('submit',(e) =>{
 e.preventDefault(); 
 let inputElem =document.getElementById('todo list');
 

let listItem =document.createElement('li');
console.log(listItem)
listItem.innerText=inputElem.ariaValueMax;
todolist.appendChild(listItem);

}
)

}
)
