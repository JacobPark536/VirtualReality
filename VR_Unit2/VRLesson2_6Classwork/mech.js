class Mech{
  constructor(x,y,z){
    this.x = x;
    this.z = z;

    this.y = y;
    this.dx = rnd(1,10) / 50 
    
    this.obj = mechTemplate.cloneNode(true);
    
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);  
    
  }
  move(){
    this.x += this.dx;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}