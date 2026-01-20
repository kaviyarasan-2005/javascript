const output = document.getElementById('result');
function calculate(){
    const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;
   const result = weight/(height/100 *height/100);
   let value = null;
   if(result < 18.5){
        value = 'Under weight';
   }
   else if(result <22.5){
        value = 'normal weight';
   }
   else if( result < 30){
        value = 'over Weight';
   }
   else{
    value = 'highly obesity'
   }
   output.textContent = `${result} is your BMI score (${value})`;
}