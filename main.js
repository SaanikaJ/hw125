nose_x = 0; 
nose_y = 0; 

difference = 0; 

function preload(){

}

function setup(){
    canvas = createCanvas(450, 450); 
    canvas.position(800, 125);

    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 100);

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on("poses", gotPoses);
}

function draw(){
    background("#b4ede3");

    fill("#9c52eb"); 
    stroke ("#e9f59f"); 
    square(nose_x, nose_y, 100); 
}

function modelLoaded(){
    console.log("PoseNet is initialised"); 
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results); 
        nose_x = results[0].pose.nose.x; 
        nose_y = results[0].pose.nose.y;
        console.log("Nose x = " + nose_x + ", nose y = " + nose_y); 
    }
}