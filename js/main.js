let count = 0;
let pushInterval;
let isEnabled = true;

let keyPressInterval;
let isKeyEnabled = true;

function NotifyPush() {
	// alert("Push!");
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
}

function DeactivateKey(){
    document.getElementById("keyA").classList.remove("active");
    document.getElementById("keyL").classList.remove("active");
    isKeyEnabled = true;
    clearInterval(keyPressInterval);
}

document.addEventListener('keypress', (event)=>{
    let key_press = event.key;
    let key_code = event.code;

    console.log("key pressed: " + key_press + ", key code: " + key_code);

    if(key_press == "l"){
        if (isKeyEnabled){
            document.getElementById("keyL").classList.add("active");            
            isKeyEnabled = false;
            keyPressInterval = setInterval(DeactivateKey, 200);
        }
    }
    else if (key_press == "a"){
        if (isKeyEnabled){
            document.getElementById("keyA").classList.add("active");            
            isKeyEnabled = false;
            keyPressInterval = setInterval(DeactivateKey, 200);
        }
    }

}, false);