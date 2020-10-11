class Rope {
    constructor (body1,body2,offsetX,offsetY){

       this.offsetX=offsetX
       this.offsetY=offsetY
       
       
        var options={
            bodyA : body1,
            bodyB : body2,
          
            // pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
     display(){

        var p1 = this.rope.bodyA.position;
        var p2=this.rope.bodyB.position;

        var Anchor2X = p2.x+this.offsetX
        var Anchor2Y = p2.y+this.offsetY
        strokeWeight (2)
        fill("teal")

        line(p1.x,p1.y, Anchor2X, Anchor2Y)


        }
    }