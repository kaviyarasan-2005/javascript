const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
// const btn = document.getElementById('submit-btn');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
});
function validateInputs(){
    const UsernameValue = username.value;
    const EmailValue = email.value;
    const PasswordValue = password.value;
    const CpasswordValue = cpassword.value;
    
}
function setError(element,message){
    const InputGroup = element.parentElement;
    const errorElement = InputGroup.querySelector('.error-message');
    errorElement.value = message;
    errorElement.classList.add('error');
    errorElement.classList.remove('sucess');
}
function setSucess(element){
    const InputGroup = element.parentElement;
    const errorElement = InputGroup.querySelector('.error-message');
    errorElement.value = '';
    errorElement.classList.add('sucess');
    errorElement.classList.remove('error');
}
function isEmail(){

}