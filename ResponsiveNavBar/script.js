const form = document.querySelector('.menu');
const menu = document.querySelector('nav ul');
console.log(form);

form.addEventListener('click',()=>{
    if(menu.classList.length >0){
        menu.classList.remove('showmenu');
    }
    else{
        menu.classList.add('showmenu')
    }
})