let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, mechs = [ ], mechTemplate;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  mechTemplate = document.querySelector("#mechTemplate");

  for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 2){
      let m = new Mech(x, 1, z);
      mechs.push(m);
    }
  }

  loop();
})

function loop(){
  for(let m of mechs){
    m.launch();
  }
  window.requestAnimationFrame( loop );
}