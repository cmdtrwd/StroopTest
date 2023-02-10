// Call Back Functions
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



const url1= "jptechnote.com/file.json";

function downloading(url, callback){
    console.log("downloading..." + url);
    setTimeout(()=>{
        callback(url);
    }, 3000);
}

function complete(result){
    console.log("downloaded " + result + " successfully");
}

downloading(url1, complete);
