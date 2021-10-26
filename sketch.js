
var box1;

function setup() {
  createCanvas(600, 400);
  box1= new Box(100,200,5,20)
}

function draw() {
  background(220);
box1.show()
box1.setwidth(50)
}

