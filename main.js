img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);

    stroke("red");
    noFill();
    rect(100, 80, 250, 300);
    text("Dog", 115, 95);
    textSize(20);

    stroke("red");
    noFill();
    rect(300, 80, 250, 300);
    text("Cat", 315, 95);
    textSize(20);
}