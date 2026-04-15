
//////How to get DATA from databass////////////////////
/////////////////Get Data one by one ///////not all Data come together//////////////////////////////////




/*function getData(dataId, getNextData) {
    return new Promise((resolve,reject)=>{//////This is not part of callback hell but this is how we create promise in javascript//////////////////////////
    //2 second delay
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");//////////////////////////////////this is also not part of callback hell but this is how we resolve promise in javascript//////////////////////////
        if (getNextData) {
            getNextData();
        }
    }, 3000);
});
}*/






//////////////////////////////////this example of promies chain///////////////////////////////////
////// This is prmies chain/////////////////////////////
/*getData(1).then((res)=>{  */                     /*  getData(1).then((res)=>{  
                                                        return getData(2);
                                                         }) .then((res)=>{console.log(res);})
  /*  console.log(res);    */                     //  
/*   getData(2).then(()=>{
      console.log(res);
   })
  })*/





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   

///////////This is called callback hell ///////////////////////////////////////////
/////////This is bad pratice of code in javascript/////////////////////
/*getData(1, () => {//data 1
    console.log("getting data2...");
    getData(2, () => {//data 2
        console.log("getting data3...")
        getData(3, () => {//data 3
            console.log("getting data4...")
            getData(4,()=>{//data 4
                console.log("getting data5...")
                getData(5)//data 5
            })
        })
    })

});

//data 1
//data 2
//data 3
//data 4
//data 5

//////////////////////////This is Template Literals////////////////////////////////////////////

///////////////we also use function in this and also use callback with Template Literals////////////////////////////
let a = "hello";

console.log(`${a}, world`);
 
///for example////////////////////////
/////THis is how we use Template Literals with maths ///////////////////////////////

const price = 10;
const tax = 0.05;

console.log(`total: ${price*(1 + tax)}`)


///////////////////////////////////////////////////////////////

/////////////////gap//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////What is jQuery in javscrity/////////////////
////for example/////////////////////////////

//////////////jQuery///////////////////

$("#box").css("backgroung","blue");                    ///////////short,uses CSS-like selectors($);///////////////////

///////////vanilla javascript///////////////////

document.getElementById("box").style.background = "blue";      */                ////////////More verbose, requires specific DOM methods.//////////////////////////////        

////////////////////////////////////////////



////////////////What is promise in javascript///////////////////////////////////////////////////////////////////////////
////////////We are not creating promise but we get promise from API//////////////////////////////////////
///////promise is a object that represent the eventual completion or failure of an asynchronous operation and its resulting value.//////////////////////
/////for example/////////////////////////////

/*let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
  //  resolve("Promise resolved");
   // reject("Promise rejected");
   // pending("Promise pending");
})*/


////////////////How API return promise///////////////////////////////////////////////////////////////////

/*function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            // resolve("success");
            reject("error");
            if (getNextData) {
                getNextData();
            }


        }, 5000);
    });
}*/


//////////////////////After the promise resolve after we use (promisde.then)///////////////////////////////////////////
///////////////////////////this example for promise.then///////////////////////////////////////////////////////////////////////////////////////////


/*const getPromies = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise")
       // resolve("success");
       reject("error");//////////////////After this reject promise.then well not E X E C U T I O N/////////////////////////////////////////////////
    });
};

//////////////(this is example of promies.then)////////////////////////////////////
let promise = getPromies();
promise.then((result) => {
    console.log("promies fulfilled",res);
    console.log(result);
});

/////////////////////this welll E X E C U T I O N after promies rejection///////////////////////////////////////


promise.catch((err)=>{
    console.log("rejected",err);
})*/


////////////////////////////////////////////////what is promies chain///////////////////////////////////////////////////////////////////////////
////////////////////This is promies chain/////////////////////////////////////////////////////////

/*function asynFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" data1")
            resolve("success");
        }, 4000);
    });
};
function asynFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(" data2")
            resolve("success");
        }, 4000);
    });
};



console.log("fetching data1...");
asynFunc1().then((res) => {
    console.log(res);
    console.log("fetching data2...");///////////this is good code for promies ///////////////////////////
    asynFunc2().then((res) => {
        console.log(res);
    });
});*/


/*console.log("fetching data2...");///////////this is not good code for promies ///////////////////////////
let p2 = asynFunc2();
p2.then((res) => {
    console.log(res);
});*/





/////////////////////////////What is Async-Await in javascript///////////////////////////////////////////////////////////////////////////////////////////
//////This work is to return promise compulsry in async//////////////////////////////////////////////////////////////////


/*async function hello() {
    console.log("hello world this is a function")
}*/

////////////////////////what is await in javascript/////////////////////////////////////////////////////////////////


/*function api() {
    return new Promise((resolve, reject)=>{;
    setTimeout(() => {
        console.log("weather data")
        resolve(200);
    },2000);
})
}

async function getWeatherData(){
    await api();//1st call
    await api();//2st call
};

getWeatherData();*/

/////////////////E X A M P L E of////////////////////// A S Y N C await //////////////////////////////////////////////////////////

//example///



/*function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        //2 second delay
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}
/////useing async await in this function/////////////This is good way to write code in javascript////////////////////////////////////////////// 
async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
    console.log("getting data6....");
    await getData(6);
    console.log("getting data7....");
    await getData(7);
    console.log("getting data8....");
    await getData(8);
    console.log("getting data9....");
    await getData(9);
    console.log("getting data10....");
    await getData(10);
}

getAllData();*/

















////////////what is I I F E ///////////////////////////////////////////////////////////////////
/////////for example of iife////////////////



////////an IIFE immediately invoked function expression is a javascript function that runs as soon as it defined. The name IIFE is promoted by Ben Alman in his blog ;///////////



/*function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        //2 second delay
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}
/////useing async await in this function/////////////This is good way to write code in javascript//////////////////////////////////////////////

///////This function is Exceuting by iife////////////////////////////////////////////////////////

//iffe syntax//(function){awaits}();//////////////////////////////////////also we use this iife with other function like arrow and normal//////////////////////////////////////

(async function () {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
    console.log("getting data6....");
    await getData(6);
    console.log("getting data7....");
    await getData(7);
    console.log("getting data8....");
    await getData(8);
    console.log("getting data9....");
    await getData(9);
    console.log("getting data10....");
    await getData(10);
})();*/

