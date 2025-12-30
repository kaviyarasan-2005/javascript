function convert(){
    let value = Number(document.getElementById("textbox").value);
    let inches = (value/2.53).toFixed(2);
    let message = document.getElementById("result");
    message.innerHTML = inches+" inches";
}