console.log('Test 1,5 and 3')

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 

})

window.addEventListener("scroll", () => {
    const headr = document.querySelector("header")
    headr.classList.toggle("sticky", window.scrollY > 0)
})