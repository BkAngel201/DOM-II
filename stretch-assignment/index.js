const blockElements = document.querySelectorAll(".block")
let moveLeft, moveRight
blockElements.forEach((el) => {
    el.style.marginLeft = "10px"
    el.addEventListener('click', (e) => {
        blockElements.forEach((el) => {
            el.classList.remove('top-stack')
        })
        e.target.classList.add('top-stack')
    })
    el.addEventListener('mousedown', (e) =>{
        clearInterval(moveLeft)
        let marginLeft = parseInt(e.target.style.marginLeft, 10)
        moveRight = setInterval(() => {
            marginLeft++
            e.target.style.marginLeft = `${marginLeft}px`
            if(marginLeft >= 500) {
                clearInterval(moveRight)
            }
        }, 10)
    })
    el.addEventListener("mouseup", (e) => {
        clearInterval(moveRight)
        let marginLeft = parseInt(e.target.style.marginLeft, 10)
        moveLeft = setInterval(() => {
            marginLeft--
            e.target.style.marginLeft = `${marginLeft}px`
            if(marginLeft <= 10) {
                clearInterval(moveLeft)
            }
        }, 10)
    })
})