
global.fetch = require("node-fetch");

fetch ("public/hol_info.json")
    //fetch returns a promise which we handle below
    .then(function(resp) {  //we receive a response resp
        return resp.json(); //convert the text to a json file
    })
    .then(function(data) {  //once converted then we can do something with it
        console.log(data);
    }); 
    
    
//note issue with fecth - when on command did 
//node hol_api.js
//got reference error: fetch is not defined
// 
// fetch is not implemented in node - need to install node-fetch with -npm install node-fetch 
// see implementation here : https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
//
//will reference this Javascript in the index.html instead to call the function and have a look at browser console page
//to check for errors
