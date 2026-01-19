let show = document.querySelector("#result");
let btn = document.getElementById("button");
let input = document.getElementById("input");
let todo =[];
btn.addEventListener("click",function (){
    let list = document.createElement("p");
    todo.push(input.value);
    list.textContent = input.value;
    show.appendChild(list);
    input.value ='';
});

