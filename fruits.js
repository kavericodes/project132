status = "";

function preload(){
    img = loadImage("camera.jpeg");
}

function setup(){
    canvas = createCanvas(650,415); 
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function modelLoaded(){
    console.log("Cocossd is Initialized!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }

    if (results){
        console.log(results);
    }
}

