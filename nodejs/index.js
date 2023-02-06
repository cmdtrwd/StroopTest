function AddValues(x,y, callback){
    console.log("calculating...");
    setTimeout(()=>{
        const sum = x + y;
        callback(sum);
    }, 3000);
}

function Display(result){
    console.log('sum = ' + result);
}

AddValues(100, 50, Display);