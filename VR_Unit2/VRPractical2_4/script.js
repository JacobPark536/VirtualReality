let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ], ufos = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let y = 1.5;
    let z = rnd(-20,20);
    let rocket = new Rocket(x,y,z);
    rockets.push(rocket);
  }

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let y = rnd(20,50);
    let z = rnd(-20,20);
    let ufo = new UFO(x,y,z);
    ufos.push(ufo);
  }

  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    ufo.invade();
  }

  window.requestAnimationFrame( loop );
}