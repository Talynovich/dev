const btn = document.querySelector('button')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.closeBtn')

btn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', event => {
    if (event.target == modal){
        modal.style.display = 'none'
    }
})