/*function rishiFunction(){////////////////////////////////////////////
    console.log("this is fist time is use function in javascript");
    console.log("thsi is tfist ime is use fjavascriptunction in ");
    console.log("this is fist time is use function in javascript");
}

rishiFunction();
rishiFunction();*/

/*function myFunction(msg){//perameter->input/////////////////////////////////////////
    console.log(msg*n);
}
myFunction("i love javascript",100);//argument*///////////////////////////////////////

//Function  -> 2 numbers sum//////////////////////////////////////////

/*function sum(x, y) {///////////////////////////////////
    p = x + y;
    return p;

}
const number = sum(7,8);
console.log(number);*/

//Arrow function///////////////////////////////////////////////////////////////////////////////

/*const arrowSum =(a , b) => {
  let i = a + b;
   return i;
}
let rishi = arrowSum(7,87);
console.log(rishi);*/

//let arrowMul = (a,b) => {
 //   return a * b;
//};


/*const countVowels = (str) => {
    let count = 0;
    str = str.toLowerCase();
    for(let n of str){
        if (n === "a"|| n === "e" || n === "i" || n === "o" || n ==="u")  {
            count++;

        }
        
     }  
     return count; 
} 
let y =countVowels("Rishi is the first pratics question for you this time");////////////////////////////////////////////////
console.log(y);*/

//const countVowels = (str) => {
    /*let count = 0;
    str = str.toLowerCase();

    for (let n of str) {
        if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u") {
            count++;
        }
    }

    return count;
}

/let y = countVowels("Rishi is the first pratics question for you this time");/////////////////////////////////
console.log(y);*/

/*function countVowels(str){
    let count = 0;
    str = str.toLowerCase();
    for(let n of str){
        if (n === "a"|| n === "e" || n === "i" || n === "o" || n ==="u")  {
            count++;

        }
        
     }  
     return count; 
} 
let p=countVowels("Rishi is the first pratics question for you this time");
console.log(p);*/ 



//forEach Loop in Array///////////////////////////////////////////////////////////////////////////


/*let arr =[1,2,3,4,5];

arr.forEach (function preintVal(val,idx) {
    console.log(val,idx);
});*/


/*let arr = ["delhi","pune","mumbai"];

arr.forEach((val,idx,arr) => {
console.log(val,idx,arr.toUpperCase());
});*/



//Partice question///////////////////////////////////////////////////////////////////////

/*let num = [78,57,98,89];

num.forEach((num)=>{
    console.log(num * num);
});*/


/*let num = [78,57,98,89];

let calcSquare = (num) =>{
    console.log(num *num);
};

num.forEach(calcSquare);*/

//Map method in array////////////////////////////////////////////////////////////



/*let nums = [98,98,78,75];
 
let newArr = nums.map((val) => {
    return val * 2;

});

console.log(newArr);*/


//Filter method  in array///////////////////////////////////////////////////////////////

/*let arr = [1,2,3,4,5,6,7];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr)

let odd = [1,2,3,4,5,6,7];

let oddArr = arr.filter((val) => {
    return val % 2 !== 0;
});

console.log(oddArr)*/


//Ruduce in array mathod/////////////////////////////////////////////

/*let arr = [1,2,3,4];

const output = arr.reduce((res,curr) => {
    return res + curr;
})

console. log (output);*/


 
//HOW TO FIND OUT LARGEST NUMBER IN ARRAY///////////////////////////////////////////////////



/*let arr = [5,6,2,1,3];


const result = arr.reduce((prev,curr) => {
return prev > curr ? prev : curr;
})
  
console.log(result);*/


//practice for array method ////////////////////////////////////////////////// 


/*let marks = [97,64,32,49,99,96,86];//////////////////first answer first answer first answer

let toppers = marks.filter((val) =>{
    return val > 90;
})

console.log(toppers);*/


/*let n = prompt("enter a number : ");///////////////////this is second question with two methods in one answer

let arr = [];

for(let i = 1; i<=n; i++){
  arr[i-1] = i;//pushing number in arr 
};

console.log(arr);

let sum = arr.reduce((prev,curr) =>{
    return prev + curr;
})

console.log(sum);

let product = arr.reduce((prev,curr) =>{
    return prev * curr;
})

console.log(product);*/


/*let n = Number(prompt("enter a number : "));///////////this is second question with two methods in one answer but this is easy to explain


let arr = [];

// fill array from 1 to n
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

console.log(arr);

// sum
let sum = arr.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum);

// product
let product = arr.reduce((prev, curr) => {
    return prev * curr;
});

console.log(product);*/


//console.dir(document.body);
//console.log(document.body);

//document.body.childNodes[3].innerText ="this is first time i am uisng dom concept in javascrpt";
//ocument.body.style.backgroundColor = "black";


/////////////////////////////DOM Manipulation///////////////////////////////////////////


//let heading = document.getElementById("heading");
//console.dir(heading);



/*let heading = document.getElementsByTagName("h2")[0];//////////////this is use for append two sting without space .
console.dir(heading.innerText);
heading.innerText = "Apna College Student"+ heading.innerText;*/



////////////////////////////////////////////////////////////////////////////////////


/*let h2 = document.querySelector("h2");//////////////////this is use for connet two strint with space /////////////////////
console.dir(h2.innerText);
h2.innerText = h2.innerText+"Apna College Student";*/




/////////////////////////////console.dir(h2.innerText);//////////oppational to check the change in h2 text after append string.//////////apeend mean is conect two or multiple string to end of the line//////////////////////////////////////


/*let div = document.querySelectorAll(".box");/////////////change the text in div by using query selector all and this is use for change multiple element at a time by using class name or tag name or id name.//////////////////////////
div[0].innerText = "first change in div by using query selector ";
div[1].innerText = "second change in div";
div[2].innerText = "third change in div";*/




/////////change the text in div by using query selector all and  change multiple element at a time by use loop in DOM query.//////////////////////////



/*let divs = document.querySelectorAll(".box");////using loop for change the text in div by using query selector all and this is use for change multiple element at a time by using class name or tag name or id name.//////////////////////////

let idx = 1;
for (div of divs){
div.innerText = `new unique value ${idx}`;
idx++;
}*/





//////////////////////////DOM mnupulation by using gat Attribute and set attribute//////////////////////////


/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);


/////////////////////EASY WAY TO GET ATTRIBUTE VALUE IN DOM MANUPULATION//////////////////////////

let name = div.getAttribute("name");
console.log(name);*/////////////////////////////



/*let p = document.querySelector("div");
console.log(p.getAttribute("id"));*/////////////////////EASY WAY TO GET ATTRIBUTE VALUE IN DOM MANUPULATION//////////////////////////


/////////////////////change the attribute value in DOM manupulation by using set attribute//////////////////////////


/*let change = document.querySelector("div");
console.log(change.setAttribute("id","newId"));*/

///////////////////////////////NODE.Style////////////////////////////////////////////////

/*let div = document.querySelector("div");

div.style.backgroundColor = "black";
div.style.color = "white";
div.style.fontSize = "30px";
div.style.textAlign = "center";
div.style.padding = "20px";
div.innerText = "Hello!";
console.log(div.style);*/



////////////How to create and add new element in css by using DOM manipulation method Insert Element//////////////////////////////////////////

/*let newElement = document.createElement("button");
newElement.innerText ="Click Me";
console.log(newElement);

let div = document.querySelector("div");
div.prepend(newElement);*/


/////////////this is easy way to create and add new element in css by using DOM manipulation method Insert Element//////////////////////////////////////////

/*let newElement = document.createElement("H1");
newElement.innerHTML = "<i>Hi ,I am new!</i>";
//console.log(newElement);

document.querySelector("body").prepend(newElement);*/
////////////////////////////////////////////////////////////////////////top one more east way and simple ////////////////////////////////////////////////////////

/*let newElement = document.createElement("h1");
let italicText = document.createElement("i");

italicText.innerText = "Hi, I am new!";
newElement.appendChild(italicText);

document.body.prepend(newElement);*/

////////////////////how to remove element in DOM manipulation by using remove method//////////////////////////////////////////

//let para = document.querySelector("p").remove();


////////////Practice question for DOM manipulation//////////////////////////////////////////

//Question 1

/*let newElement = document.createElement("button");
newElement.innerText = "Click Me";
newElement.style["background-color"] = "red";
newElement.style["color"] = "white";

let container = document.body.prepend(newElement);
console.log(container);*/


//Question 2///how to margine two class in style by using classlist in DOM manipulation//////////////////////////////////////////

/*let para = document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.classList);
para.classList.add("newClass");*/



///////what is classlist in DOM manipulation and how to use it//////////////////////////////////////////////////////////



