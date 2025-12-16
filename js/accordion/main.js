const allHeaders = document.querySelectorAll('.accordion-header')
const allContents = document.querySelectorAll('.accordion-content')
const accordion = document.querySelector('#accordion')




// allHeaders.forEach(el => {
//     el.addEventListener('click', (event) => {
//         allContents[el.dataset.index - 1].classList.toggle('hidden')
//     })
// })

accordion.addEventListener('click', event => {
    if (event.target.classList.contains('accordion-header')){
        allContents.forEach(el => {
            el.classList.add('hidden')
        })
        allContents[event.target.dataset.index - 1].classList.remove('hidden')
    }
})
