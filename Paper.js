class Paper {
    constructor(x,y,r) {
        var ball_options = {
            isStatic: false,
          friction:0,
          density:1.2,
            restitution: 1, 
                   }
      
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,ball_options);
        World.add(world,this.body);
      }
    display(){
   
      var pos = this.body.position;
      push()
      translate(pos.x,pos.y)
      fill("red");
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop()

        }
      };