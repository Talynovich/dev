const btn = document.querySelector('button')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.closeBtn')



btn.addEventListener('click', () => {
    modal.classList.add('hidden')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

window.addEventListener('click', event => {
    if (event.target == modal){
        modal.classList.remove('hidden')
    }
})