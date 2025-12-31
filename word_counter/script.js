function counter(){
    let str = String(document.getElementById("input").value);
    str.trim();
    let arr = str.split(' ');
    let value =  arr.length;
    let res = document.getElementById("result");
    res.innerHTML = value +" words";
   
    console.log(arr);
}