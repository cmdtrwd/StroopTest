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

// const connect = false; // Check if there is an Internet connection
// const url1 = "myserver.com/fileA.json";

// function Downloading(url){
//     return new Promise(function(resolve, reject){   
//         console.log("Downloading " + url)     ;
//         setTimeout(()=>{
//             if (connect){
//                 resolve("Successfully downloaded " + url);            
//             }
//             else{
//                 reject("Something went wrong");
//             }
//         }, 1000);
//     });
// }

// Downloading(url1).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("end of process");
// });

// Async & Await
const connect = true; // Check if there is an Internet connection
const url1 = "myserver.com/fileA.json";
const url2 = "myserver.com/fileB.json";
const url3 = "myserver.com/fileC.json";

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
        }, 1000);
    });
}

async function Start(){
    console.log(await Downloading(url1));
    console.log(await Downloading(url2));
    // await Downloading(url3);
}

Start();