NoseX=0;
NoseY=0;

function preload(){
    clown_nose= loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
   Canvas=createCanvas(400,300);
   Canvas.center();
   video=createCapture(VIDEO);
   video.size(400,300);
   video.hide();

   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log (results);
        NoseX= results[0].pose.nose.x-30;
        NoseY= results[0].pose.nose.y+30;
        console.log ("nose x= " + NoseX);
        console.log ("nose y= " + NoseY);
    }
}

function draw(){
    image(video,0,0,400,300);
    image(clown_nose,NoseX,NoseY,30,30);
}

function take_snapshot(){
    save('my_filter.jpg');
}