class Ball {
  constructor(x, y, r) {
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':9
    }

    this.body = Bodies.circle(x, y, r, options);
    this.image=loadImage("ball.png");
    this.r=r;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 100, 100);
    pop();
  }
};