class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(1,5) / 100;   

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-sphere");
    body.setAttribute("radius", 2);
    body.setAttribute("scale", {x:1, y:0.3, z:1});
    body.setAttribute("color", "gray");
    this.obj.append(body);

    let head = document.createElement("a-sphere");
    head.setAttribute("position", {x:0, y:0.5, z:0});
    head.setAttribute("radius", 0.8);
    head.setAttribute("color", "lightgreen");
    this.obj.append(head);

    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj);
  }

  invade(){
    if(this.y > 0.6){
      this.y -= this.dy;
      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
  }
}