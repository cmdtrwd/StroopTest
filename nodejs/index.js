// Call back function

// function AddValues(x,y, callback){
//     console.log("calculating...");
//     setTimeout(()=>{
//         const sum = x + y;
//         callback(sum);
//     }, 3000);
// }

// function Display(result){
//     console.log('sum = ' + result);
// }

// AddValues(100, 50, Display);


// Promise

const connect = false; // Check if there is an Internet connection
const url1 = "myserver.com/fileA.json";

function Downloading(url){
    return new Promise(function(resolve, reject){   
        console.log("Downloading " + url)     ;
        setTimeout(()=>{
            if (connect){
                resolve("Successfully downloaded " + url);            
            }
            else{
                reject("Something went wrong");
            }
        }, 3000);
    });
}

Downloading(url1).then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    console.log("end of process");
});