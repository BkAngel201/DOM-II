// Your code goes here
const bodyElement = document.querySelector("body")
const navContainerElement = document.querySelector(".nav-container")
const navItemsElements = document.querySelectorAll("nav .nav-link");
const imgInImgContentElements = document.querySelectorAll(".img-content img")
const imgInIntroElement = document.querySelector(".intro img")
const pElements = document.querySelectorAll("p")
const logoHeadingElement = document.querySelector(".logo-heading")



// Function
randomRGB = () => {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
}





// Prevent Propagation and and prevetn refresh page on link click
// popup and alert that show which link user has clicked
navItemsElements.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        alert(`Have clicked on navigation item "${event.target.textContent}"`)
    })
})

// above event prevent propagation to the event under
// Event on click on nav container that change background color randomly 
navContainerElement.addEventListener('click', (event) => {
    event.stopPropagation()
    event.target.style.backgroundColor = randomRGB()
})


// Event to images in content Area , change opacity on enter or leave evento of mouse
imgInImgContentElements.forEach((el) => {
    el.addEventListener('mouseenter', (event) => {
        event.target.style.opacity = 0.6
    })
    el.addEventListener('mouseleave', (event) => {
        event.target.style.opacity = 1
    })
})

// drag event to intro section image, alert popup on drag
imgInIntroElement.addEventListener('dragstart', () => {
    alert("Please dont try to move anything, that could make the page to collapse. ;)")
})

pElements.forEach((el) => {
    el.addEventListener('copy', (event) => {
        event.preventDefault()
        alert("You cant copy any info shown here, This is clasified material.")
    })
})

// on wheel movement print on console the time stamp of the event
bodyElement.addEventListener("wheel", (event) => {
    console.log(`Wheel event triggered at: ${event.timeStamp}`);
    
})

// on right click change randomly font color
logoHeadingElement.addEventListener('contextmenu',(event) =>{
    event.preventDefault()
    event.target.style.color = randomRGB()
})

window.addEventListener("keydown", (event) => {
    pElements.forEach((el) => {
        el.style.color = randomRGB()
    })
})