class  CannonBall{
    constructor(x,y){
        this.x = x 
        this.y = y
        this.radius = 30
        var options = {isStatic : true}
      this.body = Bodies.circle(x,y,30,options)
      World.add(world, this.body)

      this.image = loadImage("./assets/cannonball.png")
      
    }

 
    shoot() {
        var newAngle = cannon.angle - 28;
         newAngle = newAngle *(3.14/180)
         var velocity = p5.Vector.fromAngle(newAngle);
         velocity.mult(0.5);
         Matter.Body.setStatic(this.body, false);
         Matter.Body.setVelocity(this.body, {
           x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)})
       }
       display(){
        push()
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.radius,this.radius)
        pop()
    };
}

 
