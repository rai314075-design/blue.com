/*const profile={
userName:"pokemon83",
isFollow:false,
followers:123,
following:456,
};
console.log(typeof profile["isFollow"]);*/
/*let a = 5;
let b = 2;
console.log("a=",a,"& b=",b);
//a++;
console.log("--a=",--a);*/


//Asignment Operators

/*let a = 5;
let b = 2;
a**=4;
console.log(a);*/
//let age = 18;
/*let mode = "yellow";

if (mode === "dark"){
    color = "black";
}
else {
    color="green";
}
    

if (age >= 18) {
    console.log(" you can vote");
}
if (age < 18) {
    console.log("you CANNOT vote");
}
console.log(color);*/
/*if (age >=18){
    console.log("vote");
}else{
    console.log("not vote");
}*/
/*let num = 13;
if (num%2 === 0){
    console.log(num," is even");
}else{
    console.log(num," is odd ");
}*/
/*let mode ="red";
let color;

if (mode ==="dark"){
color="black";
}else if(
    mode ==="blue"){
color="blue";
    }
else if(mode ==="pink"){
    color="pink";
}else{
    color = "white";
}
console.log(color);
*/
/*let age =17;
let result=age >=18 ? "adult":"not adult";
console.log(result);*/
/*let number = prompt("enter a number");

if (number % 5 === 0 ){
console.log(number,"this is mutiple by  5");

}else{console.log (number,"is not multiple by 5");}*/

/*let score = prompt("enter youre score(0-100 ):");
let grade;

if(score >=90 && score <=100){
    grade="A";
}
else if (score >=70 && score <=89){
    grade="b";
}
else if (score >=60 && score <=69){
    grade="c";
}else if (score >=50 && score <=69){
    grade="d";
}
else if (score >=0 && score <=49) {
    grade="f";
}
console.log("according to your score, your grade was",grade);*/

/*for(let count=1; count<=5;count++){
    console.log("raj veer");
}*/

/*sum=1;
 for(let i=1; i <= 5; i++ ){
   // sum = sum +i
 
 console.log("i=",sum)
 }

 let i=1;
 do{console.log("i=",i);
    i++;
 }while(i<=10);*/

//for in loop;

/*let str="JavaScript";

let size=0;
for(let val of str){
   console.log(val);
   size++;
}
console.log("string size",size);*/

//for in loop;

/*let student = {
    name :" Rahul Kumar",
    age : 20,
    Cgpa :7.9,
    isPass: true,
};

for(let key in student){
    console.log("key =",key,"value =",student[key]);
}*/

//practice QS1

/*for(let num = 0; num <=100;num++){
    if(num%2===0){
        console.log("num =",num);
    }
}*/

//Game


/*let gamesNUM = 6414;
let userNum = prompt("guess the right number and win prize:");

do {
    userNum = prompt("better luck try next time:");
} while (gamesNUM != userNum);

console.log("congratulations, ypu endered the right  number ");*/



//tempate Literals

/*let obj={
    item : "Pen",
    price : 10,
};

let output =`the cost of ${obj.item} is ${obj.price} rupees`;//tempate Literals
console.log(output);

console.log("the cost of",obj.item,"is",obj.price,"rupees");

//template Literals
let specialString =`This is a template literal`;
console.log(typeof specialString );




let rishi="123456";
console.log(rishi.slice(1,5));


let str1 ="123";
let str2 ="456";
let str3 ="789";

let answer=str1+str2+str3;
console.log(answer);*/

//generate a username for them based on the input start usernme with @
/*
let fullName=prompt("enter your full name without spaces");
console.log(fullName);

let username ="@"+fullName+fullName.length;
console.log(username);*/




//array in js

/*let marks = [97,82,75,64,36,];
console.log(marks);*/

//let heroes = ["ironman","thor","hulk","shaktiman","spiderman","Antman"];

//for(let i=0;idx<heroes.length;i++){
 //   console.log(heroes[i]);
//}

/*for(let hero of heroes){
console.log(hero)
}*/

/*let cities =["delhi","pune","mumbai","hyderabad","gurgaon"];

for(let city of cities){
    console.log(city.toUpperCase());

}*/

/*let marks =[85,97,44,37,76,60];

let sum = 0;
for(let val of marks){
    sum += val;
}
let avg = sum/marks.length;
console.log(avg);*/

/*let items = [250,645,300,900,50];

let i = 0;

for (let val of items){
console.log(`value at index ${i}=${val}`);
let offer = val/10;
items[i] = items[i] - offer;
console.log(`value after offer = ${items[i]}`)
i++;
}


let number = [250,645,300,900,50];




 number.forEach((val,i) =>{
    let offer = val /10;
    number[i] = val - offer;
    console.log(`value after offer =${ number[i]}`);
})*/


/*let rishi = [5, 6, 3, 6, 5];

let result = 1;

for (let val of rishi) {
    result = result * val;
}

console.log("Total product =", result);
*/

/*let companies = ["bloomberg","microsft","uber","google","nerflix"];

companies.splice(3,1,"ola");
console.log(companies);


let a =[1,2,3,4];
let b=[5,6,7,8];
let d =[9,10,11,12,13];
let c=a.concat(b,d);
console.log(c);*/

//function in javascript





