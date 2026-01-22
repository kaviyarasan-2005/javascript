let show = document.getElementById('result');
let btn = document.getElementById("button");
let input = document.getElementById("input");
let todos =[];
window.onload=()=>{
    console.log("loaded "+localStorage.getItem('todos'));
    todos = JSON.parse(localStorage.getItem('todos'))||[];
    todos.forEach(to => addtodo(to));
}
  
btn.addEventListener("click",function (){
    todos.push(input.value);
    addtodo(input.value);
  console.log(todos);
    input.value ='';
});
function addtodo(todo){
    let para = document.createElement("p");
    para.innerText = todo;
    show.appendChild(para);
    localStorage.setItem('todos',JSON.stringify(todos));
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through';
        remove(todo);
    });
     para.addEventListener('dblclick',()=>{
        show.removeChild(para);
        remove(todo);
    });
}
function remove(todo){
    let index = todos.indexOf(todo);
    if(index<0){
        return;
    }
    // console.log(index);
    todos.splice(index,1);
     localStorage.setItem('todos',JSON.stringify(todos));
}
