console.log('Test 1,5 and 3')

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
    }   
)
document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
        }
    )
)


window.addEventListener("scroll", () => {
    const headr = document.querySelector("header")
    headr.classList.toggle("sticky", window.scrollY > 0)
})

//Creating a canvas
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
//Changing the witdh of canvas to size of browser window
canvas.width = innerWidth //No need to use window object here ex. window.innerwitdh
//Chaning canvas height
canvas.height = document.body

ctx.imageSmoothingEnabled = true
//Creating a player
class Player {
    constructor(){
        //Velocity of player. We want the player to be able to move
        this.velocity ={
            x : 0,
            y : 0
        }
        this.rotation = 0
        const image = new Image()
        image.src = './img/spaceship.png'

        image.onload = () =>{
            const scale = 0.15
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
            x : canvas.width / 2 - this.width / 2,
            y : canvas.height - this.height - 20
            }}}
    draw() {
        // ctx.fillStyle = 'red' // to test if player is drawn  
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.save()
        ctx.translate(player.position.x + player.width / 2 , player.position.y + player.height / 2)
        ctx.rotate(this.rotation)
        ctx.translate(-player.position.x -player.width / 2 , -player.position.y - player.height / 2)
        ctx.drawImage(
            this.image, 
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
        ctx.restore()
    }
    update() {
        if(this.image){
        this.draw()
        this.position.x += this.velocity.x
    }}}
class Projectile {
    constructor({position,velocity}){
        this.position = position
        this.velocity = velocity
        this.radius = 3
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y , this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'red'
        ctx.fill()
        ctx.closePath
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }}
class Invader {
    constructor({position}){
        
        this.velocity ={
            x : 0,
            y : 0
        }
        
        const image = new Image()
        image.src = './img/invader.png'

        image.onload = () =>{
            const scale = 1
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
            x : position.x,
            y : position.y
            }}}
    draw() {
        
        ctx.drawImage(
                this.image, 
                this.position.x,
                this.position.y,
                this.width,
                this.height
        )
        
    }
    update({velocity}) {
        if(this.image){
        this.draw()
        this.position.x += velocity.x
        this.position.y += velocity.y

        
    }}}

class Grid {
    constructor(){
        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 3,
            y: 0
        }
        this.invaders = []
        const rows = Math.floor(Math.random() * 5 + 2)
        const colums = Math.floor(Math.random() * 10 + 2)
        this.width = colums * 30

        for (let x = 0; x < colums ; x++){
            for (let y = 0; y < rows ; y++){
            this.invaders.push(new Invader({position: {
                x: x * 30,
                y: y * 30
            }}))
            
        }}
        console.log(this.invaders);
    }
    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.velocity.y = 0

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0){
            this.velocity.x = - this.velocity.x
            this.velocity.y = 30
        }

    }
}

const player = new Player()
const projectiles = []
const grids = []
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }}

let frames = 0  

let randomInterval = Math.floor(Math.random() * 500 + 500)

console.log(randomInterval)
function animate  () { 
    requestAnimationFrame(animate)
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0, canvas.width, canvas.height)
    
    player.update()
    projectiles.forEach((projectile, index) => {

        if (projectile.position.y + projectile.radius <= 0){
            setTimeout(()=>{
                projectiles.splice(index, 1)
            },0)
            
        }else {
            projectile.update()
        }

        projectile.update()
    })

    grids.forEach((grid) => {
        grid.update()
        grid.invaders.forEach((invader, i) => {
            invader.update({velocity: grid.velocity })

                projectiles.forEach((projectile, j) => {
                    if(projectile.position.y - projectile.radius <= invader.position.y + invader.height){
                        
                        setTimeout(() => {
                            grid.invaders.splice(i, 1)
                            projectile.splice(j, 1)
                        })
                    }
                })
                    })})
                
            
    
    

    if (keys.a.pressed && player.position.x >= 0){
        player.velocity.x = -8
        player.rotation = -0.15
    }else if (keys.d.pressed && player.position.x + player.width <= canvas.width ){
        player.velocity.x = 8
        player.rotation = 0.15
    }else {
        player.velocity.x = 0
        player.rotation = 0
    }

    if (frames % randomInterval === 0){
        grids.push(new Grid())
        let randomInterval = Math.floor(Math.random() * 500 + 500)
        console.log(randomInterval)
        frames = 0        
    }

    frames++
}
animate()
addEventListener('keydown' , ({key}) => {
    switch (key) {
        case 'a':
            //console.log('left');
            keys.a.pressed = true
            break;
        case 'd':
            //console.log('right');
            keys.d.pressed = true
            break;
        case 'w':
            //console.log('up');
            break;
        case 's':
           // console.log('down');
            break;
        case ' ':
            //console.log('space');
            //console.log(projectiles)
            projectiles.push(
                new Projectile({
                    position: {
                        x: player.position.x + player.width / 2 ,
                        y: player.position.y
                    },
                    velocity:{
                        x: 0,
                        y: -10
                    }
                }))
            break;
        }})
addEventListener('keyup' , ({key}) => {
    switch (key) {
        case 'a':
            // console.log('left done');
            keys.a.pressed = false
            break;
        case 'd':
            //console.log('right done');
            keys.d.pressed = false
            break;
        case 'w':
            //console.log('up');
            break;
        case 's':
            //console.log('down');
            break;
        case ' ':
            //console.log('space');
            break;
        }
    }
)