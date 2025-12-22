const btn = document.querySelector('button')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.closeBtn')



btn.addEventListener('click', () => {
    modal.classList.add('modal-visible')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal-visible')
})

window.addEventListener('click', event => {
    if (event.target == modal){
        modal.classList.remove('modal-visible')
    }
})