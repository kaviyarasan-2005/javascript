const backround = document.getElementById("color");
const code = document.getElementById('code');
const btn = document.getElementById("button");
 const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn.addEventListener('click',change);
 function change(){
let colorcode = "#";
for(let i=0;i<6;i++){
    colorcode +=randomvalue();
}
console.log(colorcode);
code.textContent = colorcode;
backround.style.backgroundColor = colorcode;
};

function randomvalue(){
    return hex[Math.floor(Math.random()*16)];
}