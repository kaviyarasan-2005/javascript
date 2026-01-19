let expression = document.getElementById('outele');

function Append(inp){
    expression.value +=inp;
    console.log(expression+" this is expression ");
}
function calculate(){
   try{
     let result = eval(expression.value);
    expression.value = result;
   }
   catch(err){
    expression.value = "enter a valid expression";
    setTimeout(()=>{
        clears();
    },1500)
   }
}
function clears(){
    expression.value = '';
}