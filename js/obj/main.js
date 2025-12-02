// 6
const getLastName = person => {
    return person.lastName
}

console.log(getLastName({name: 'Samat', lastName: 'Abdurahmanov'}))

// 7
const addAge = (person, age) => {
    return {...person, age: age}
}
console.log(addAge({name: 'Алиса'}, 25))

// 8
const hasKey = (obj, key) => {

    return Object.keys(obj).includes(key)
}
console.log(hasKey({a: 1, b: 2}, 'a'))

// 9
const getValues = obj => {
    return Object.entries(obj)
}
console.log(getValues({a: 1, b: 'hi', c: true}))

// 10
const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2}
}
console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4}))

// Работа с Массивом Объектов
// 11
const filterByCity = (people, city) => {
    const result = people.filter((value) => {
        return value.city === city
    })
    return result
}
console.log(filterByCity([{city: 'Paris'}, {city: 'Moscow'}, {city: 'Paris'}],
    'Paris'))

// 12
const sortByPrice = products => {
    return products.sort((products1, products2) => {
        return products1.price > products2.price ? 1 : -1
    })
}
console.log(sortByPrice([{ price: 100 }, { price: 50 }, {price:80}, {price: 40}]))

//13
const findById = (items, id) => {
    const result = items.find((value) => {
        return value.id === id
    })
    return result
}
console.log(findById([{ id: 1 }, { id: 2 }], 2))

// 14
const calculateTotal = (items) => {
    let result = 0 
    for (let i = 0; i < items.length; i++){
        result = result + items[i].price * items[i].quantity
    }
    return result
}
console.log(calculateTotal([{ price: 10, quantity: 2 }, { price: 5, quantity: 3 }]))

// 15
const getNames = (users) => {
    let result = []
    for (let i = 0; i < users.length; i++){
       result.push(Object.values(users[i]))
    }
    return result
}
console.log(getNames([{ name: 'Anna' }, { name: 'Samat' }]))



