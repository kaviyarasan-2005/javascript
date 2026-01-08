let dropdown = document.querySelectorAll('select');
let currency = fetch("https://api.frankfurter.dev/v1/currencies")
.then((cur)=>cur.json())
.then((mes)=>{dispalycurrency(mes)})
.catch((err)=>{console.log(err+" this is error")});

function dispalycurrency(res){
    let countrycode = Object.keys(res);
    for(let i of countrycode){
        let opt =`<option value="${i}">${i}</option>`;
        dropdown[0].innerHTML +=opt;
        dropdown[1].innerHTML +=opt;
    }
}
async function convert(){
    let from = dropdown[0].value;
    let to = dropdown[1].value;
    if(from == to){
        alert("enter different country money");
        return;
    }
    await fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
    .then((data)=>data.json())
    .then((mess)=>{
        let res = document.getElementById('output');
        let fr = Number(document.getElementById('input').value);
        let final = mess.rates[to]*fr;
        res.textContent = final.toFixed(2);
        res.style.fontSize='17px'
        res.style.padding='1px'
    })
    .catch((cat)=>{console.log(cat)});
}