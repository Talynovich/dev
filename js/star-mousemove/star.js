const stars = document.querySelectorAll('.rating-star')// получили элемент
const output = document.querySelector('.rating-output')
console.log(output.textContent)

stars.forEach(star => {
    star.addEventListener(`click`, (abra) => {
        abra.stopPropagation()
        stars.forEach((starElem) => {
            const firstValueStar = +star.dataset.value
            const LastValueStar = +starElem.dataset.value
            const selectedRating = +star.dataset.value
            output.textContent = selectedRating
            starElem.classList.remove("selected")
            if (LastValueStar <= firstValueStar){
                starElem.classList.add("selected")
            }
        })
    })
})

const mouseX = document.querySelector('.mouse-X')
const mouseY = document.querySelector('.mouse-Y')
console.log(mouseX)


document.addEventListener('mousemove', (clickData) => {
    mouseX.innerText = clickData.x
    mouseY.innerText = clickData.y
})

