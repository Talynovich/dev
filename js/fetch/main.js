const getAllfilms = async () => {
    try {
        const response = await fetch('https://swapi.info/api/films')
        const data = await response.json()
        const films = document.querySelector('.films');

        data.forEach((film) => {
            const li = document.createElement('li')
            li.textContent = film.title
            films.append(li)
        })
    } catch (error) {
        console.error(error)
    }
}
getAllfilms()

const getAllpeople = async () => {
    try {
        const response = await fetch('https://swapi.info/api/people')
        const data = await response.json()
        const peoples = document.querySelector('.peoples');

        data.forEach((people) => {
            const li = document.createElement('li')
            li.textContent = people.name
            peoples.append(li)
        })
    } catch (error) {
        console.log(error)
    }
}
getAllpeople()

const getAllplanets = async () => {
    try {
        const response = await fetch('https://swapi.info/api/planets')
        const data = await response.json()
        const planets = document.querySelector('.planets');

        data.forEach((people) => {
            const li = document.createElement('li')
            li.textContent = people.name
            planets.append(li)
        })
    } catch (error) {
        console.error(error)
    }
}
getAllplanets()

const species = document.querySelector('.species')
fetch('https://swapi.info/api/species')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((item) => {
            const li = document.createElement('li')
            li.innerText = item.name
            species.append(li)
        })
    }).catch((error) => {
        console.error(error)
})

const vehicles = document.querySelector('.vehicles')
fetch('https://swapi.info/api/vehicles')
    .then((res)=>res.json())
    .then((data)=>{
    data.forEach((item)=>{
        const li = document.createElement('li')
        li.innerText = item.name
        vehicles.append(li)
    })
}).catch((error) => {
    console.error(error)
})

const starships = document.querySelector('.starships')
fetch('https://swapi.info/api/vehicles')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((item)=>{
                const li = document.createElement('li')
                li.innerText = item.name
                starships.append(li)
            })
        }).catch((error) => {
            console.error(error)
})