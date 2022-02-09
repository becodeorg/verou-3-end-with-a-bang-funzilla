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


// window.addEventListener("scroll", () => {
//     const headr = document.querySelector("header")
//     headr.classList.toggle("sticky", window.scrollY > 0)
// })