let hours = document.getElementById('hrs');
let mins = document.getElementById('mins');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

function time(){
    let datetime = new Date();
    let hrs =  datetime.getHours();
    let m = datetime.getMinutes();
    let s =datetime.getSeconds();
   
    if(hrs > 12){
        hrs -= 12;
        ampm.innerHTML= 'PM';
    }
    hrs = hrs<10?'0'+hrs:hrs;
    m = m<10 ? '0'+m:m;
    s=s<10?'0'+s:s;
     hours.innerHTML =hrs;
    mins.innerHTML = m;
    sec.innerHTML = s;
}
setInterval(time,1000);
