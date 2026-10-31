class Tree{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let pines = document.createElement("a-cone");
    pines.setAttribute("color","green");
    pines.setAttribute("position","0 1.5 0");
    pines.setAttribute("height","2");
    this.obj.append( pines );
  
    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position","0 0 0");
    stump.setAttribute("color","brown");
    stump.setAttribute("radius","0.25");
    this.obj.append( stump );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

  class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let cloud1 = document.createElement("a-sphere");
    cloud1.setAttribute("color","white");
    cloud1.setAttribute("position","0 0 0");
    cloud1.setAttribute("radius","1");
    this.obj.append( cloud1 );

    let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("color","white");
    cloud2.setAttribute("position","1 -0.2 0");
    cloud2.setAttribute("radius","0.8");
    this.obj.append( cloud2 );

    let cloud3 = document.createElement("a-sphere");
    cloud3.setAttribute("color","white");
    cloud3.setAttribute("position","-1 -0.2 0");
    cloud3.setAttribute("radius","0.8");
    this.obj.append( cloud3 );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

  class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let walls = document.createElement("a-box");
    walls.setAttribute("color","tan");
    walls.setAttribute("position","0 1 0");
    walls.setAttribute("width","3");
    walls.setAttribute("height","2");
    walls.setAttribute("depth","3");
    this.obj.append( walls );

    let roof = document.createElement("a-cone");
    roof.setAttribute("color","darkred");
    roof.setAttribute("position","0 2.75 0");
    roof.setAttribute("radius-bottom","2.4");
    roof.setAttribute("radius-top","0");
    roof.setAttribute("height","1.5");
    roof.setAttribute("segments-radial","4");
    roof.setAttribute("rotation","0 45 0");
    this.obj.append( roof );

    let door = document.createElement("a-box");
    door.setAttribute("color","saddlebrown");
    door.setAttribute("position","0 0.6 1.51");
    door.setAttribute("width","0.8");
    door.setAttribute("height","1.2");
    door.setAttribute("depth","0.05");
    this.obj.append( door );

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}
}
}