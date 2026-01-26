    const form = document.querySelector('#form');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const cpassword = document.querySelector('#cpassword');
// const btn = document.getElementById('submit-btn');

// function random(){
//     const random = Math.random();
//     console.log(random);
//     console.log(random*16);
//     console.log(Math.floor(random*16));
// }
form.addEventListener('submit',(e)=>{
  
  if(!validateInputs()){
  e.preventDefault();
  }
  
});
function validateInputs(){
    const UsernameValue = username.value.trim();
    const EmailValue = email.value.trim();
    const PasswordValue = password.value.trim();
    const CpasswordValue = cpassword.value.trim();
    const sucess = false;
//    console.log(`${UsernameValue} - ${EmailValue} - ${PasswordValue} - ${CpasswordValue}`);
    if(UsernameValue === ''){
        setError(username,'Username is required');
        sucess = true;
    }
    else{
        setSucess(username);
    }
    if(EmailValue ===''){
        sucess = true;
        setError(email,'Enter email');
    }
    else if(!isEmail(EmailValue)){
        setError(email,'Enter a valid email');
        sucess = true;
    }
    else{
        setSucess(email);
    }
    if(PasswordValue.length < 8){
        sucess = true;
        setError(password,'password should grater than 8 ')
         setError(cpassword,'password should grater than 8 ')
    }
    else if(PasswordValue != CpasswordValue){
        sucess = true;
         setError(password,'does not match with Password')
        setError(cpassword,'does not match with Password')
    }
    else{
        setSucess(cpassword);
        setSucess(password);
    }
    return success;
}
function setError(element,message){
    const InputGroup = element.parentElement;
    const errorElement = InputGroup.querySelector('.error-message');
    errorElement.value = message;
    errorElement.textContent = message;
    InputGroup.classList.add('error');
    InputGroup.classList.remove('sucess');
}
function setSucess(element){
    const InputGroup = element.parentElement;
    const errorElement = InputGroup.querySelector('.error-message');
    errorElement.value = '';
     errorElement.textContent = '';
    InputGroup.classList.add('sucess');
    InputGroup.classList.remove('error');
}
const isEmail=(value)=>{
    return String(value).toLowerCase()
    .match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
}