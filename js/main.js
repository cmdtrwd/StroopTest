let count = 0;
let pushInterval;
let isEnabled = true;

let keyPressInterval;
let isKeyEnabled = true;

// Define variables for retrieving file information
let fileName; 
let namePrefix = "_male";
let filePath = "../images/";
let fileExtension = ".PNG";
let noOfFiles = 5;
let maxTrials = 20;
let images = []; 
let currentImageNo = 0;
let probabilityRatioMale = 0.7;

// Function to set the timer for the push button
// IS NOT IN USE
/*
function NotifyPush() {
    count++;
    console.log("Push button is clicked");
    console.log("Push " + count + " times");
    if (isEnabled){
        document.getElementById("circle").classList.add("active");    
        isEnabled = false;
        pushInterval = setInterval(DeactivatePush, 1000);
    }
}


function DeactivatePush(){
    let circle = document.getElementById("circle");
    circle.classList.remove("active");
    isEnabled = true;
    clearInterval(pushInterval);

    let box = circle.parentElement;
    console.log(box);
    box.classList.toggle("active");
}*/

// Function to re-enable the keys after a specified waiting period
function DeactivateKey(){
    document.getElementById("keyA").classList.remove("active");
    document.getElementById("keyL").classList.remove("active");
    isKeyEnabled = true;
    clearInterval(keyPressInterval);
}


// Function to generate an output with random gender based on the probability ratio
function RandomGender(){
    let randomNum = Math.random();
    if (randomNum < probabilityRatioMale){
        return "_male";
    }
    else{
        return "_female";
    }
}

function RandomImage(){
    return Math.floor(Math.random()*noOfFiles).toString();
}

// Function to randomise the sequences of images
function GetFileInfo(){    
    for (let i = 0; i<maxTrials; i++){   
        namePrefix = RandomGender();
        fileName = "file_" + RandomImage();
        images[i] = filePath + fileName + namePrefix + fileExtension;
        console.log(images[i]);
    }
}

function DisplayImage(imageNo){
    let word = document.getElementById("word");
    word.innerHTML = "";
    let currentImage = document.getElementById("currentImage");    
    currentImage.innerHTML = '<img src="' + images[imageNo] +'" alt="">';
}

document.onload = GetFileInfo();
document.onload = DisplayImage(currentImageNo);

document.addEventListener('keypress', (event)=>{
    let key_press = event.key;
    let key_code = event.code;

    
    if(key_press == "l"){
        if (isKeyEnabled){
            let current_key = document.getElementById("keyL");
            current_key.classList.add("active");            
            isKeyEnabled = false;
            keyPressInterval = setInterval(DeactivateKey, 200);
            console.log("key pressed: " + current_key.dataset.key + ", key code: " + key_code);
        }
    }
    else if (key_press == "a"){
        if (isKeyEnabled){
            let current_key = document.getElementById("keyA");
            current_key.classList.add("active");            
            isKeyEnabled = false;
            keyPressInterval = setInterval(DeactivateKey, 200);
            console.log("key pressed: " + current_key.dataset.key + ", key code: " + key_code);
        }
    }
    
    if ((key_press == "a") || (key_press =="l")){
        currentImageNo++;
        if (currentImageNo < maxTrials)
        {
            DisplayImage(currentImageNo);
        }
    }

}, false);