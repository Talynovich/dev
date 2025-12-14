const holetCards = document.querySelectorAll(`[data-testid = "property-card-container"]`)
const data = []
holetCards.forEach((horelCard) => {
    const horelName = horelCard.querySelector(`h3`)
    const review = horelCard.querySelector(`[data-testid="review-score"]`)
    const price = horelCard.querySelector(`[data-testid="price-and-discounted-price"]`)
    const description = horelCard.querySelector(`[data-testid="recommended-units"]`)

    data.push({
        name: horelName.innerText,
        rating: review?.children[0].innerText,
        price: price.innerText,
        description: description.innerText
    })
})
console.dir(data)




