////////////////////////////This is a example of fatching api in with async await ///////////////////////////////////
//const URL ="https://cat-fact.herokuapp.com/facts"
 
/*const getfacts = async() =>{///////here i use  async await with fetching ////////
    console.log("getting Data ....");
let promise = await fetch(URL);
console.log(promise.status);//////Data return here in JSON format 
}
 getfacts()*/

///////////////How to convert J S O N data into object DATA;/////////////////////////////////////////////////////

///////Here we connecting the HTML button with this api//////////////////////////////////

const URL ="https://cat-fact.herokuapp.com/facts"

const btn = document.querySelector("#btn");
const factpara = document.querySelector("#fact")


btn.addEventListener("click", (async () => {//////Here we connect button withs click listener//////////////////////////////////////
        console.log("getting Data ....");
        let response = await fetch(URL);
        console.log(response.status); //////Data return here in JSON format   After that we need to convert data into javascript object////////
        let data = await response.json(); /////Here we use second await with json method in async await //////////////////////////////////////////

        //////////console.log(Data[2])/NOT important///////////
        factpara.innerText = data[1].text;

    }));