// NOT IN USE
// let count = 0;          
// let pushInterval;
// let isEnabled = true;

let betweenTrialInterval;       //Waiting period before the next trial is shown
let waitingPeriod = 500;        //Waiting period in milliseconds


let keyPressInterval;
let isKeyEnabled = true;
let isInstructionDisplayed = true;

// Define variables for retrieving file information
let fileName; 
let namePrefix;
let filePath = "../images/";
let fileExtension = ".PNG";
let noOfFiles = 5;              //Number of image files in the folder
let maxTrials = 50;             //Number of maximum trials to run
let images = []; 
let currentImageNo = 0;
let probabilityRatioMale = 0.7; //A probability ratio to generate male over female images
let instructions = [];
let currentInstructionNo = 0;

// Function to set the timer for the push button
// NOT IN USE
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

// Function to initialise instructions
function InitInstructions(){
    instructions[0] = "The test consists of displaying a series of face images and word names, either in congruent (the word name matches the face image) or incongruent (the word name does not match the face image) pairs.";
    instructions[1] = "You will be asked to quickly name the emotion displayed on the face image.";
    instructions[2] = "You should try to ignore the word name and focus only on the face image.";
    instructions[3] = "The test will repeat for a set number of trials or until the participant chooses to stop.";
}


// Function to re-enable the keys after a specified waiting period
function DeactivateKey(){
    document.getElementById("keyA").classList.remove("active");
    document.getElementById("keyL").classList.remove("active");
    isKeyEnabled = true;    
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

// Function to generate an output with a random image
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

// Function to display next image in a sequence
function DisplayImage(imageNo){
    let word = document.getElementById("word");
    word.innerHTML = "Trial " + (currentImageNo+1) + "/" + maxTrials; 
    let currentImage = document.getElementById("currentImage");
    currentImage.classList.add("active");
    currentImage.innerHTML = '<img src="' + images[imageNo] +'" alt="">';
    if (betweenTrialInterval){
        clearInterval(betweenTrialInterval);
        DeactivateKey();
    }
}

// Function to display instruction in a sequence
function DisplayInstruction(instructionNo){
    let instruction = document.getElementById("instruction");
    instruction.innerHTML = instructions[instructionNo];
    if (betweenTrialInterval) {
        clearInterval(betweenTrialInterval);
        DeactivateKey();
    }
}

function InstructionTransition(){
    betweenTrialInterval = setInterval(DisplayInstruction, waitingPeriod, currentInstructionNo);
    
}

// Function to make the screen blank during a waiting period before showing the next image in a sequence
function TrialTransition(){
    let currentImage = document.getElementById("currentImage");
    currentImage.classList.remove("active");
    
    betweenTrialInterval = setInterval(DisplayImage, waitingPeriod, currentImageNo);    
}



// Generate a sequence of images on load
document.onload = GetFileInfo();
// Display the first image in a sequence on load
// document.onload = DisplayImage(currentImageNo);
document.onload = InitInstructions();
document.onload = DisplayInstruction(currentInstructionNo);

// Detecting the key press event as a response from a participant and later display the next image in a sequence
document.addEventListener('keypress', (event)=>{
    let key_press = event.key;
    let key_code = event.code;

    if (!isInstructionDisplayed){
        if(key_press == "l"){
            if (isKeyEnabled){
                let current_key = document.getElementById("keyL");
                current_key.classList.add("active");            
                isKeyEnabled = false;            
                console.log("key pressed: " + current_key.dataset.key + ", key code: " + key_code);
                currentImageNo++;
                if (currentImageNo < maxTrials)
                {
                    TrialTransition();
                }
            }
        }
        else if (key_press == "a"){
            if (isKeyEnabled){
                let current_key = document.getElementById("keyA");
                current_key.classList.add("active");            
                isKeyEnabled = false;            
                console.log("key pressed: " + current_key.dataset.key + ", key code: " + key_code);
                currentImageNo++;
                if (currentImageNo < maxTrials)
                {
                    TrialTransition();
                }
            }
        }  
    }
    else{
        if (key_press == "l") {
            if (isKeyEnabled) {
                let current_key = document.getElementById("keyL");
                current_key.classList.add("active");
                isKeyEnabled = false;
                console.log("key pressed: " + current_key.dataset.key + ", key code: " + key_code);
                currentInstructionNo++
                if (currentInstructionNo < 4){
                    InstructionTransition();
                }
                else {
                    isInstructionDisplayed = false;
                    document.getElementById("instruction").classList.remove("active");
                    DisplayImage(currentImageNo);
                }
            }
        }
        else if (key_press == "a") {
            if (isKeyEnabled) {
                let current_key = document.getElementById("keyA");
                current_key.classList.add("active");
                isKeyEnabled = false;
                console.log("key pressed: " + current_key.dataset.key + ", key code: " + key_code);
                currentInstructionNo++
                if (currentInstructionNo < 3) {
                    InstructionTransition();
                }
                else{
                    isInstructionDisplayed = false;
                    document.getElementById("instruction").classList.remove("active");
                    DisplayImage(currentImageNo);
                }
            }
        }  

    }

}, false);