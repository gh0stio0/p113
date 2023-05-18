function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150)
    video=createCapture(VIDEO)
    video.hide()

}
function draw(){
    image(video,230,150,220,200)
    fill(255,0,0)
    stroke(255,0,0)
    circle(50,50,60)
    circle(50,400,60)
    circle(600,50,60)
    circle(600,400,60)
    fill(0,255,0)
    stroke(0,255,0)
    rect(40,70,30,300)
    rect(600,70,30,300)
    rect(60,70,550,30)
    rect(60,360,550,30)
}

