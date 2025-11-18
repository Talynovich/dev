const MIN_AGE = 18
let userAge = 61

// if(userAge < MIN_AGE){
//     console.log('Вам сюда нельзя')
// } else {
//     console.log('Добро пожаловать!')
// }

if (userAge >= MIN_AGE) {
    console.log('Добро пожаловать!')
} else {
    console.log('Вам нет 18.')
}

// Подросток. Взрослый. Пенсионер.
// 0 до 23    24-61     61>
if (userAge < 24) {
    console.log('Подросток')
} else if (userAge < 61) {
    console.log('Взрослый')
} else {
    console.log('Пенсионер')
}

// Определить время году по месяцам
let currentMoth = 13
if (currentMoth > 0 && currentMoth < 3 || currentMoth === 12) {
    console.log('Зима')
} else if (currentMoth > 2 && currentMoth < 6) {
    console.log('Весна')
} else if (currentMoth > 5 && currentMoth < 9) {
    console.log('Лето')
} else if (currentMoth >= 9 && currentMoth <= 11) {
    console.log('Осень')
} else {
    console.log('Введите корректное число месяца!')
}

console.log(5 <= 7 && 6 == '6' || 5 > 6 && 4 < 9)
//          true        true      false     true
//                true                  false
//                          true


// 1.1
function sayHello() {
    console.log("Привет, я функция! Я не" + "принимаю аргументов.")
}

sayHello()

// 1.2
function multiplyByTen(number) {
    return number * 10
}

console.log(multiplyByTen(5))
console.log(multiplyByTen(0.5))

// 1.3
function combineWords(word1, word2) {
    return word1 + " " + word2
}

console.log(combineWords("Hello", "world!"))

// 2.1
function calculateArea(width, height) {
    return (width * height)
}

console.log(calculateArea(200, 100))

// 2.2

function increaseAge(ageString, years) {
    let ageNumber = Number(ageString)
    return ageNumber + years
}

console.log(increaseAge("25", 5), "<<<<<<1");
console.log(increaseAge("10", 30), "<<<<<<2")

// 2.3
function checkType(data) {
    return typeof data
}

console.log(checkType('hello'))
console.log(checkType(20))
console.log(checkType(true))

// 3.1
function getScoreStatus(score) {
    if (score > 90) {
        return "Отлично"
    } else if (score > 70) {
        return "Хорошо"
    } else {
        return "Удовлетворительно"
    }
}

console.log(getScoreStatus(91))
console.log(getScoreStatus(71))
console.log(getScoreStatus(50))

// 3.2
function getColorCategory(color) {
    switch (color) {
        case "red":
        case "yellow":
            return "Теплый цвет"

        case "blue":
        case "green":
            return "Холодный цвет"

        default:
            return "Неизвестный цвет"
    }
}

console.log(getColorCategory("red"))
console.log(getColorCategory("green"))
console.log(getColorCategory("purple"))

//3.3
function isAdult(age) {
    return age >= 10 ? "Совершеннолетний" : "Несовершеннолетний"
}

console.log(isAdult(20), isAdult(15))

// 4.1

function checkFreeShipping(isPremium, totalCost) {
    return isPremium && totalCost > 1000
}

console.log(checkFreeShipping(true, 1500))
console.log(checkFreeShipping(false, 2000))

// 4.2
function canEnterClub(age, hasID, isBanned) {
    if ((age >= 21 && hasID) || !isBanned) {
        return "Вход разрешен"
    } else {
        return "Вход запрещен"
    }
}

console.log(canEnterClub(18, true, false))
console.log(canEnterClub(19, false, true))

// 4.3
function isStrictlyEqual(value1, value2) {
    return value1 === value2
}

console.log(isStrictlyEqual(10, 10))
console.log(isStrictlyEqual(10, "10"))
console.log(isStrictlyEqual(false, 0))