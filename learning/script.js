
function say(){
        alert("Button clicked");
    }

   
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
let str1 = "kaviyarasan";
let num = Number(Math.floor(Math.random()*11));
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
let vol = (a,b,c)=>{
    return a+b+c;
}
console.log(vol(1,2,3));

let arr=[1,2];

let name2 =(arr)=>{
    let sum = 0;
    for(let i of arr){
        sum+=i;
    }
    console.log(sum);
}
name2(arr);
//generators
// console.clear();
function* generators(){
    let ind = 1;
   
    while(ind < 5){
     
        yield ind++;
    }
}
let gen = generators();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

let names = ["kavi","arasan","raja","rani",];
// for each sends a each value in this array to a  call back functions
names.forEach(val=>{
    console.log(val.toUpperCase());
});
console.log(names);
// automatically send a val , index, and array
names.forEach((val,i,names)=>{
    names[i] = val.toUpperCase();
});
console.log(names);
let depart = ["ECE","AI","CSE","IT"];
depart.forEach((val)=>{
    let opt = document.createElement('option');
    opt.textContent = val;
    opt.value = val;
    document.getElementById('dept').appendChild(opt);
})
// Map execute a call back function like for each but return as a array

let usd = [10,20,30];
let inr = usd.map(val=>val*90);
console.log(inr);
let data = [
    {name:'kavi',age : 12},
    {name:'arasan',age : 22},
    {name:'raj',age : 42},
    {name:'dhars',age : 52},
    {name:'raju',age : 67},
    {name:'mani',age : 1},
]
console.log(data);
console.log(
    data.map((val)=>val.age)
);

arr = [
    ['a','b','c'],
    ['d','b','c'],
    ['e','c','f']
]

let cons = arr.flat().reduce(
    (acc,c)=>{
        if(acc[c]){
           acc[c] = acc[c]++;
        }
        else{
            acc[c] =1;
        }
        return acc
    },{}); 
console.log(cons);
let result = null;
result = calculate(10);
function calculate(val){
    return val*2;
}
console.log(10+" inside a function");
let prop = 
    {name:'kavi',
        id:10, }
console.log(prop);
console.log(delete prop.id);
console.log(prop.name+" After deleting");
arr = [1,2,3,4];
arr[1] = 12;
let newarr = [5,6,7,8,9];
let res = [...arr,...newarr];
console.log(res); 
res[1] = 34;
console.log(arr);
let obj = {
    name:'kaviyarasan',
    id : 12,
    fcolor:'red',
    height : 165,
    weight:45,
    address : "pudukkotai"
}
for(let a in obj){
    console.log(obj[a]);
}
const map = new Map();
map.set("one",1);
map.set("two",2);
for(let [k,v] of map){
        console.log(k+" "+v);
}
(function(name){
    document.getElementById('invok').innerHTML = `welcome ${name}`;
})("hi");
// closure maintain a outer value and stores a parameter
function outer(name){
    let outervalue = 'bun'
    function inner(n){
      console.log(name+" "+n);
    }
    return inner;
}
let a = outer(5)
a('csdc');

function f(a){
    function add(b){
        return a+b
    }
    return add;
}
let fc = f(5);
console.log(fc(5)); 

let set = new Set();
set.add(5)
let map2 = new Map();
map2.set('a',1);
console.log(map2);
// this is object
let user={
    name:"kavi",
    id :21,
    login(){
        console.log('hi',this.name);
    }
}
user.login();

// class
class User{
    name;
     id;
     static numberOfusers=0;
    constructor(name,age,amt){
        this.name = name;
        this.age = age;
        this.amt=amt
        User.numberOfusers+=1;
    }
    login(){
        console.log('hi',this.name);
    }
}
let userone = new User('kaviyarasan',21,100);
let usertwo = new User('kavi',21,250);
// userone.login();
console.log(User.numberOfusers+" loggedin");
class paidUser extends User{
    constructor(name,age,amt){
        // this willl not work use super keyword
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.amt=amt
    }
    level(){
        if(this.amt <200){
            console.log(this.name+' is a pro user');
        }
        else{
            console.log(this.name+" is a premium user");
        }
    }
}
let paiduser1 = new paidUser('raja',31,250);
paiduser1.login();
paiduser1.level();
function time(){
    console.log('steps');
}
setTimeout(()=>{console.log("step 1")},1000);
setTimeout(()=>{time()},4000)
console.log("next");
// execute every 2 sec
// setInterval(()=>{console.log("hi")},2000);