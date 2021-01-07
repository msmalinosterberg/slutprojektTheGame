
class Environment {

    
    public platform: p5.Image

    constructor() {
        this.platform = loadImage('assets/bg-1250.png');
    }

    draw() {
    background(this.platform);
    strokeWeight(6);
    point(0, 650);
    point(0, 600);
    point(45, 600);
    point(90, 590);
    point(130, 580);
    point(170, 580);
    point(210, 600);
    point(250, 600);
    point(290, 600);
    point(330, 590);
    point(370, 585);
    point(410, 580);
    point(450, 590);
    point(490, 590);
    point(530, 595);
    point(570, 580);
    point(610, 575);
    point(650, 570);
    point(690, 570);
    point(730, 575);
    point(770, 580);     
    point(800, 590);  
    point(860, 600);
    point(920, 600);
    point(980, 600);
    point(1040, 600);
    point(1100, 590);
    point(1160, 590);
    point(1200, 600);
    point(1250, 600);
    point(1250, 650);
    strokeWeight(1);
    
    fill(0);
    beginShape();
    curveVertex(600, 0);
    curveVertex(0, 650);
    curveVertex(0, 600);
    curveVertex(0, 600);
    curveVertex(0, 650);
    curveVertex(0, 600);
    curveVertex(45, 600);
    curveVertex(90, 590);
    curveVertex(130, 580);
    curveVertex(170, 580);
    curveVertex(210, 600);
    curveVertex(250, 600);
    curveVertex(290, 600);
    curveVertex(330, 590);
    curveVertex(370, 585);
    curveVertex(410, 580);
    curveVertex(450, 590);
    curveVertex(490, 590);
    curveVertex(530, 595);
    curveVertex(570, 580);
    curveVertex(610, 580);
    curveVertex(650, 578);
    curveVertex(690, 582);
    curveVertex(730, 575);
    curveVertex(770, 580);     
    curveVertex(800, 590);  
    curveVertex(860, 600);
    curveVertex(920, 600);
    curveVertex(980, 600);
    curveVertex(1040, 600);
    curveVertex(1100, 590);
    curveVertex(1160, 590);
    curveVertex(1200, 600);
    curveVertex(1250, 600);
    curveVertex(1250, 650);    
    curveVertex(1250, 650);    
    endShape();
}



}