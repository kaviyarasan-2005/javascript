function say(){
        alert("Button clicked");
    }

    document.write("<h2>This text is written inside a script as a HTML</h2>");
function change(){
    document.getElementById("name").innerHTML="Changed name ";
    console.log("kaviyarasan");
    var obj = {
        name : 'kavi',
        id : 12,
        loc : 'karur'
    }
    let sum = 10 +10;
    console.log(sum);
    console.log(obj.name);
    let a = 3;
    var b = 5;
    const sums = a+b;
    console.log(sums);
   
}
str1 = "kaviyarasan"
let num = Number(Math.floor(Math.random()*11))
console.log(str1[num]);
let s = 95;
let mes =`price is
${s}` 
console.log(s);
    // console.log(str1);
    let mark = [1,2,3,4,5,'ddf'];
    console.log(mark);
    let array = [1,2,3,4,5,6,7];
    console.log(array.splice(1,1));
    console.log(array);
    console.log(array.splice(1,0,1));
    console.log(array);
    let val = true;
    if(val){
        console.log("yes");
    }
    else{
        console.log("no");
    }
let item = {
    id:1,
    name:'kaviyarasan',
    add(){
        console.log("nick name added kavi");
    }
}
item.add()

