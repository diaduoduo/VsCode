//var a=1
let a="jspang";
//console.log(a);

window.onload =function (){
    console.log(a)
}
/* 
var variable
let 局部申明
const 


*/
//二进制　声明　binary
let binary = 0B010101;
console.log(binary)
//八进制　声明　Octal
let octal = 0o666;
console.log(octal)
/* let a = 918.1;
console.log(Number.isFloat(a))
console.log(Number.parseInt(a)) */

let jspang = Math.pow(2,53)-1;
console.log(jspang)

//json数组　改为　数组
let json = {
    '0' : "jspang",
    '1' : "技术胖",
    '2' : "大",
    length:3
}
let arr = Array.from(json);
console.log(arr);

//　arrary.of　方法　　　'3，4，5，6'
let arr1 = Array.of(3,4,5,6);
console.log(arr1);
//'[3,4,5,6]'
let stt = '[3,4,5,6]';
let arr2 = eval(stt);

console.log(arr2);


//'[3,4,5,6]'
let stt1 = '[3,4,5,6]';
let arr3 = Array.of(stt1);

console.log(arr3);
let arr4 = [1,2,3,4,5,6];
console.log(arr4.find(function(value,index,arr4){
    return value > 5;
}))



function add(a,b=1){
    return a+b;
}
console.log(add(1))


var add  = (a,b=1) =>　a+b;
console.log(add(1))
//　对像的函数解构json
let json2 = {
    a:"jspang",
    b:'技术这'
}
function fun({a,b='web'}){
    console.log(a,b)
}
 //key 值的构建
 let key = "skill";
 var obj = {
    [key] :'web',
 }
console.log(obj)

//自定义对象　方法
let obj2 = {
    add:function(a,b){
        return a+b;
    }
}

console.log(obj2.add(2,3))
console.log(+0 === -0)
console.log(NaN === NaN)

let a2={a:'jspang'};
let b2={b:'duoduo'};
let c2={c:'diadia'};
let d2=Object.assign(a2,b2,c2);
console.log(d2)


let aa= new String;
let bb= new Number;
let cc= new Boolean;
let dd =new Array;
let ee = new Object;

let f= Symbol();
console.log(typeof(f))


//set
let setArr = new Set(["jspang","jishu","web"])

// for of 
for (let item of setArr){
    console.log(item)
}
//forEach
setArr.forEach((value) => console.log(value));
//size;
