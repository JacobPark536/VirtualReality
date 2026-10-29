let scene, car, pokeball, rocket, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    pokeball = document.querySelector("#pokemonball");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    sun = document.querySelector("#sun");

    car.x = 0;
    car.dx = 0.01;

    pokeball.a = 50;
    pokeball.da = 4;
    
    rocket.y = 0;
    rocket.dy = 0.05;

    dude.x = 0;
    dude.dx=  0.01;

    sun.x = 1;
    sun.dx = 0.1;

    loop();
    
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position",{x:-car.x, y:0, z:0});
    
    pokeball.a += pokeball.da;
    pokeball.setAttribute("rotation",{x:pokeball.a, y:0, z:0});

    rocket.y += rocket.dy;
    rocket.setAttribute("position", {x:0, y:rocket.y, z:0});

    dude.x += dude.dx;
    dude.setAttribute("scale", {x:dude.x, y:dude.x, z:dude.x});

    sun.x += sun.dx;
    sun.setAttribute("opacity","${sun.x}");

    window.requestAnimationFrame(loop);
}