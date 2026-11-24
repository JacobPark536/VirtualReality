class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("src","wall.png");
    this.obj.setAttribute("repeat","1 3");
    this.obj.setAttribute("width",4);
    this.obj.setAttribute("height",14);
    this.obj.setAttribute("depth",4);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}