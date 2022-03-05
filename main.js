video="";
status="";
function preload(){


}
function setup(){
video=createCapture(VIDEO);
video.hide();
    canvas=createCanvas(600,400);
 canvas.center();
 
}
function draw(){
    image(video, 0, 0, 600, 400);
}
function start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status:detecting object";
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
