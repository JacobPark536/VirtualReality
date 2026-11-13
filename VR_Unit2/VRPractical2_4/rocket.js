class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(1,5) / 100;   

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("radius", 0.5);
    body.setAttribute("height", 2);
    body.setAttribute("color", "white");
    this.obj.append(body);

    let nose = document.createElement("a-cone");
    nose.setAttribute("position", {x:0, y:1.5, z:0});
    nose.setAttribute("radius-bottom", 0.5);
    nose.setAttribute("radius-top", 0);
    nose.setAttribute("height", 1);
    nose.setAttribute("color", "red");
    this.obj.append(nose);

    let win = document.createElement("a-sphere");
    win.setAttribute("position", {x:0, y:0.4, z:0.4});
    win.setAttribute("radius", 0.2);
    win.setAttribute("color", "lightblue");
    this.obj.append(win);

    for(let i = -1; i <= 1; i += 2){
      let bottom = document.createElement("a-box");
      bottom.setAttribute("position", {x:i*0.6, y:-0.8, z:0});
      bottom.setAttribute("width", 0.1);
      bottom.setAttribute("height", 0.8);
      bottom.setAttribute("depth", 0.6);
      bottom.setAttribute("color", "red");
      this.obj.append(bottom);
    }

    let flame = document.createElement("a-cone");
    flame.setAttribute("position", {x:0, y:-1.5, z:0});
    flame.setAttribute("radius-bottom", 0);
    flame.setAttribute("radius-top", 0.4);
    flame.setAttribute("height", 1);
    flame.setAttribute("color", "orange");
    this.obj.append(flame);

    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj);
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  }
}