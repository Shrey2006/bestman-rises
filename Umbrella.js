class Umbrella {
    constructor(x,y){
        var options = {
            restitution:0.1,
            friction:0.5,
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image =  loadImage("Walking Frame/walking_1.png");
        this.image2 = loadImage("bat/Bestman-01.png");
        World.add(world, this.umbrella)
        
        
    }

    display(){
        var pos = this.umbrella.position;
        push ();
        translate (pos.x,pos.y);
        strokeWeight (2);
        fill ("silver");
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount >= 200){
            image(this.image2,0,0,200,350);
        }
        else{
            image(this.image,0,0,420,420);
        }
        pop ();
      
    }
}
