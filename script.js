//Simon Array
simonArray = [];

//Simon Input 1 to Array
function simonCounter(){
    let r = Math.floor(Math.random(0)*4);
    simonArray.push(r);
    setTimeout(playbackSimon, 1000);
}

//Declare Sounds
const bloop1 = new Audio("./Sounds/bloop-1.mp3");
const bloop2 = new Audio("./Sounds/bloop-2.mp3");
const bloop3 = new Audio("./Sounds/bloop-3.mp3");
const bloop4 = new Audio("./Sounds/bloop-4.mp3");
const fart = new Audio("./Sounds/fart.mp3");

//Simon PLays Array
function playbackSimon(){
    
    for (let i = 0; i < simonArray.length; i++){

        let r = simonArray[i];

            setTimeout(function(){
        
                if (r === 0){
                $("#red").animate({opacity: 0.1}).animate({opacity: 1});
                bloop1.pause();
                bloop1.currentTime = 0;
                bloop1.play();
            } else if (r === 1){
                $("#blue").animate({opacity: 0.1}).animate({opacity: 1});
                bloop2.pause();
                bloop2.currentTime = 0;
                bloop2.play();
            } else if (r === 2){
                $("#yellow").animate({opacity: 0.1}).animate({opacity: 1});
                bloop3.pause();
                bloop3.currentTime = 0;
                bloop3.play();
            } else {
                $("#green").animate({opacity: 0.1}).animate({opacity: 1});
                bloop4.pause();
                bloop4.currentTime = 0;
                bloop4.play();
            }
        }, 700 * i);
    }
}

//Manual Input Array
inputArray = [];

//Manual Inputs
$("#red").on("click", function(){
    inputArray.push(0);
    $("#red").animate({opacity: 0.1}).animate({opacity: 1});
    bloop1.pause();
    bloop1.currentTime = 0;
    bloop1.play();
    checkSimon();
});

$("#blue").on("click", function(){
    inputArray.push(1);
    $("#blue").animate({opacity: 0.1}).animate({opacity: 1});
    bloop2.pause();
    bloop2.currentTime = 0;
    bloop2.play();
    checkSimon();
});

$("#yellow").on("click", function(){
    inputArray.push(2);
    $("#yellow").animate({opacity: 0.1}).animate({opacity: 1});
    bloop3.pause();
    bloop3.currentTime = 0;
    bloop3.play();
    checkSimon();
});

$("#green").on("click", function(){
    inputArray.push(3);
    $("#green").animate({opacity: 0.1}).animate({opacity: 1});
    bloop4.pause();
    bloop4.currentTime = 0;
    bloop4.play();
    checkSimon();
});


//Clears Game
function simonClear(){
    simonArray = [];
    inputArray = [];
}

//Clears inputs after Round
function inputClear(){
    inputArray = [];
}

//Game Start and Restart Game
$(document).keypress(function(event){
    if (event.key === "s"){
        simonCounter();
    } else if (event.key === "r"){
        simonClear();
        fart.pause();
        fart.currentTime = 0;
        fart.play();
    } else {
        console.log(event.key)
    }
})

$("button").on("click", function(){
    simonClear();
    simonCounter();
})

//After Click Check
function checkSimon(){
    if (inputArray.length === simonArray.length && inputArray[inputArray.length - 1] === simonArray[inputArray.length - 1]){
        console.log(simonArray);
        console.log(inputArray);
        simonCounter();
        inputClear();
    } else if (inputArray[inputArray.length - 1] === simonArray[inputArray.length - 1]) {
        console.log(simonArray);
        console.log(inputArray);
    } else {
        console.log(simonArray);
        console.log(inputArray);
        fart.pause();
        fart.currentTime = 0;
        fart.play();
        simonClear();
    }
}

// Debug Function, Checking Each Step
function logArray(){
    console.log(simonArray);
    console.log(inputArray);
}
