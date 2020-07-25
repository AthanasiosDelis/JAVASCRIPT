//console.log("Hello Word!");
//console.log("This is Thanos");
//alert("Hello Word!")
//var b='var_b';
//console.log(b);

var age=prompt('What is your age?')
//document.getElementById('someText').innerHTML=age;
//function funct(){
//    alert('this is a function');
//}
//while test\

//var n=3;
/*while(n<5)
{
   
    document.querySelector('input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          console.log('You pressed Enter');
          n=100;
        }
      })
      n=prompt('Give permision!');
        
}*/

    //onclick="javascript:var n=100; javascript:alet(n);"
//callin funct
//funct();
/*
function name(){
    var name=prompt('What is your name?');
    var message='Hello my friend '+ name+'.\n';
    m2= 'I learnt your age is '+age+'!';
    console.log(age);
    console.log(message ,m2);
    document.getElementById('someText').innerHTML=m2;
}
name();
*/
let cars=['BMW','TESLA','FORD','FERRARI','TOYOTA'];
//console.log(cars[1]);
for (let i; i<cars.legth; i++){
    console.log(crs[i]);
}
//console.log('to string', cars.toString);
//console.log(cars.join('*'));
//console.log(cars,cars.pop('TESLA'));
const index = cars.indexOf('TESLA');
if (index > -1) {
  cars.splice(index, 1);
}
//console.log(cars);
//console.log(cars,cars.push("LAMBO"));


let planes=['airbus','boeing','lockheed'];
let allvahiclesmarks=cars.concat(planes);
//console.log(allvahiclesmarks);
//console.log(allvahiclesmarks.slice(1,4));
//console.log(allvahiclesmarks.reverse());
let randnum=Array(10).fill().map(() => Math.round(Math.random() * 40));
console.log(randnum);
console.log(randnum.sort(function(a,b){return a-b}));
console.log(randnum.sort(function(a,b){return b-a}));
let emptyArray=new Array();
for(let num=0; num<=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);
let student={first:'Delis',last:'Athanasios',age:25,height:170,
studentInfo: function(){
    return this.first+'\n'+this.last;+'\n'+this.age;
}
};
//console.log(student.first);
//console.log(student.last);
console.log(student.studentInfo());
if((age>=18 &&(age<=35))){
    status='target age group';
    console.log(status);
}else{
    status='indiffent group';
    console.log(status);
}
switch(6){
    case 0:
        text='Sunday';
        break;
    case 1:
        text='Monday';
        break;
    case 6:
        text='Saturday';
        break;
    default:
        text='Everything begins on Mondays';
        break;
}
console.log(text);