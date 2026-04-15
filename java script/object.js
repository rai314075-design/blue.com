/*const student = {
    fullName: "Rajveer Ray",
    marks: 90,
    printMrks: function() {
        console.log("marks =",this.marks);//this.marks = student.marks
}};


const employee = {
  clacTax(){  // this is a function in a object is called behavior
    console.log("tax rate is 10%");
  },

}
const karanArjun = {
    salary: 50000,
    clacTax(){/////////////////this is first to run in console///this run first
        console.log("tax rate is 20%");
    },

};

/*const karanArjun2 = {
    salary: 50000,
};

const karanArjun3 = {
    salary: 50000,
};

const karanArjun4 = {
    salary: 50000,
};*/

//karanArjun.__proto__= employee;//////////////////////////////////////////This is last to run in console 
/*karanArjun2.__proto__=employee;
karanArjun3.__proto__=employee;
karanArjun4.__proto__=employee;*/



///////////Class in js //////////////


/*class ToyotaCar{
constructor(brand,mileage){
    console.log("creating new object")///constructor is a mathod
    this.brand = brand;
    this.mileage = mileage;
}

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
    ////////////////////////*/////setBrand(brand){//////this not to be used this is example of construcntor
////////     this.brandName = brand;
/// }////////////////////////////
/*}

let fortuner = new ToyotaCar("fortuner",110);///constructor
console.log(fortuner);*//*

/*let lexus = new ToyotaCar("lexus",12);///constructor
console.log(lexus);*/
////////////////////////////////////////////////////////fortuner.setBrand("fortuner");
///////////////////////////////////////////////////lexus.setBrand("lexus"); 





///////////////Inheritance in js////////////////////////////////////////



/*class Parent {///////////first example
    hello(){
        console.log("hello world");
    }
}
class child extends Parent {}

let rishi = new child();*/

//////////////second example 


/*class Person{

    constructor(){
        this.species = "home sapiens";
    }
    eat(){
console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.logg("do nothing");
    }
}

class Engineer extends Person{
work(){
    console.log("solve problem,build something");
}
}
class Doctor extends Person{
work(){
    console.log("treat patients");/////if child & Parent have same method,child's method will be used .[Method Overriding]
}
}

let rajveerObj=new Engineer();
console.log(rajveerObj.work())*/


//////////////What is Super keyword/////////////////


/*class Person{

    constructor(name){
        this.species = "home sapiens";
        this.name = name;
    }
    eat(){
console.log("eat");
    }
 
}

class Engineer extends Person{
    constructor(name){
        super(name);///////to invoke parent class constructor 
    }
work(){
    super.eat();
    console.log("solve problem,build something");
}
}

let rajveerObj=new Engineer("Rishi");*/



///////////////////pratice question/////////


/*let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data=", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "same new value"
    }
}

let student1 = new User("shradha", "abc@email.com");
let student2 = new User("rish", "rishi@email.com")

let teacher = new User("rajveer", "rajveer@email.com");

let admin1 = new Admin("admin", "admin@email,com")*/




/////////////////////////error Handling//////////////not part of class and object///////

////////////////this is use to find error in the code///

/*let a = 5;
let b = 10;
console.log("a =",a);
console.log("b =",b);

console.log("a+b =",a + b);
console.log("a+b =",a + b);
console.log("a+b =",a + b);
console.log("a+b =",a + b);
try{
console.log("a+b =",a + c);
}catch(err){
console.log(err);
}
console.log("a+b =",a + b);
console.log("a+b =",a + b);
console.log("a+b =",a + b);
console.log("a+b =",a + b);
*/

///////////rest parameter with function/////////////

/*function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");*/

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

//////rest parameter//////////////

/*function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10*/

///////////What is setTimeout///////////////////////////////////////////////////////////////
////This is Asynchronous ////////////////////////////////////////////////////////////////////////////////////////

/*console.log("one");
console.log("two");

setTimeout(() =>{
    console.log("hello setTimeout")
},4000)//timeout 1 second = 1000 minisecond

console.log("three");
console.log("four");*/



////////////////what is callback function///////////////


/*function sum(a,b){
    console.log(a*b);
}

function calculator(a,b,sum){
    sum(a,b);
}

calculator(8,5,sum);*/


//////////////What is nesting/////////////
//////if else nesting////////////

/*let age = 35

if (age >= 18) {
    if (age >= 60) {
        console.log("senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("child");
}*/



//////////loop nesting////////////////

/*for (let i = 0; i < 5; i++){
    let str = "";
    for (let j = 0; j < 5; j++){
        str = str + j;
    }
    console.log(i,str);
}*/