const canvas  = document.querySelector('#canvas1');
const ctx       = canvas.getContext('2d');  //Context

canvas.width    = window.innerWidth;
canvas.height   = window.innerHeight;

let particlesArray;

//Posição do mouse

let mouse = {
    x:null, 
    y:null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

// Minhas particulas

class Particle{
    constructor(x, y, directionX, directionY, size, color){
        this.x          = x;
        this.y          = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size       = size;
        this.color      = color
    }
    //método para criar individualmente as partículas
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
    update(){
        //verificando se a particula está no escopo
        if(this.x > canvas.width || this.x < 0){
            this.directionX = -this.directionX;
        }
        if(this.y > canvas.height || this.y < 0){
            this.directionY = -this.directionY;
        } 

        //verificando colisão com o mouse
        //referência: https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size){
            //colision
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10){
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10){
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
        }

        //movimento da partícula
        this.x += this.directionX;
        this.y += this.directionY;
        
        //desenhando a partícula
        this.draw();

    }
}

//array de partículas
function init() {
    particlesArray = [];
    let numbersOfParticles = (canvas.height * canvas.width) / 9000;

    for (let i          = 0; i < numbersOfParticles; i++){
        let size        = (Math.random() * 5) + 1;
        let x           = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y           = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let directionX  = (Math.random() * 5) - 2.5;
        let directionY  = (Math.random() * 5) - 2.5;
       //let color       = '#8C5523';
       let color       = '#fff';

        particlesArray.push(new Particle(x , y , directionX, directionY, size, color))



    }
}

//conectando os pontos

function connect(){
    let oppacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++){
        for (let b = 0; b < particlesArray.length; b++){
            //let distance = (( particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y  - particlesArray[b].y) * (particlesArray[a].y) - particlesArray[b].y);
            let distance = (( particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y  - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width/7) * (canvas.height/7)){
                oppacityValue   = 1 - (distance / 20000);
                ctx.strokeStyle = 'rgba(215,215,215,'+ oppacityValue + ')';
                ctx.lineWidth   =  1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }

}

//loop
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
    }

    connect();
    
}

window.addEventListener('resize', function(){
    canvas.width    = innerWidth;
    canvas.height   = this.innerHeight;
    mouse.radius    = ((canvas.height/80) * (canvas.height/80));
    init();
});

window.addEventListener('mouseout', function(){
    mouse.x = undefined;

})




init();
animate();
