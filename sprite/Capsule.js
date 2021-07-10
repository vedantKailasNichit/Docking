class Capsule {
    constructor(x,y,w,h) {
        this.x = x;
        this.y= y;
        this.w = w;
        this.h = w;
        this.img = capsuleImg1;
    }
    show(){

        if(keyDown(RIGHT_ARROW)){
          capsule.x += 3;
          this.img = capsuleImg2;
        }
        else if(keyDown(LEFT_ARROW)){
          capsule.x -= 3;
          this.img = capsuleImg3;
        }
        else if(keyDown(UP_ARROW)){
          capsule.y -= 3;
          this.img = capsuleImg4;
        }
        else if(keyDown(DOWN_ARROW)){
          capsule.y += 3;
          this.img = capsuleImg1;
        }
        else{
          this.img = capsuleImg1;
        }
        imageMode(CENTER)
        image(this.img,this.x, this.y, this.w, this.h);
    }

}