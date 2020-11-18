
const button = document.querySelector("button");

button.addEventListener("click",startGame,);

function startGame(){

const character = document.getElementById("character")

function moveLeft(){
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
    character.style.left = left - 2 + "px";
    }
}

function moveRight(){
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<480){
    character.style.left = left + 2 + "px";
    }
}

function moveDown(enemy){
    const top = parseInt(window.getComputedStyle(enemy).getPropertyValue("top"));
    if(top >640){
        enemy.style.top="-250px"
    } else { enemy.style.top = top  + 2 + "px";}
}


document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){
        interval =setInterval(moveLeft,1);
    }
    if(event.key==="ArrowRight"){
        interval = setInterval(moveRight,1);
    }
});

document.addEventListener("keyup", event => {
    clearInterval(interval);
});

const enemy = document.getElementById("enemy1")

interval = setInterval(() => { moveDown(enemy) }, 5)

const enemy2 = document.getElementById("enemy2")

interval = setInterval(() => { moveDown(enemy2) }, 6)

const enemy3 = document.getElementById("enemy3")

interval = setInterval(() => { moveDown(enemy3) }, 7)

};