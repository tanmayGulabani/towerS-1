class Ground{
    constructor(x,y,w,h){
        var options = {
           isStatic :true
        }
        this.ground= Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.ground)  
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      }
    }