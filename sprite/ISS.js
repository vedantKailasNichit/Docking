class ISS {
    constructor(x,y,w,h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = w;
    }
    show(){
        strokeWeight(0.1);
        rectMode(CENTER);
        fill('grey');
        imageMode(CENTER)
        image(issImg,this.x, this.y, this.w, this.h);
    }

}