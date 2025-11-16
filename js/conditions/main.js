let numberToCheck = 18

if (numberToCheck % 2 === 0) {
    console.log(`Число ${numberToCheck} — четное.`)
} else {
    console.log(`Число ${numberToCheck} — нечетное.`)
}

let value = -5

if (value < 0) {
    console.log(`Число <<${value}>> отрицательное`)
} else if (value > 0) {
    console.log(`Число <<${value}>> положительное`)
} else {
    console.log('Число равно нулю')
}

let stringNumber = "45"
let threshold = 50

if (Number(stringNumber) > threshold) {
    console.log(`Проверка ${stringNumber} больше, чем пороговое`)
} else {
    console.log(`Проверка ${stringNumber} меньше или равно ${threshold}. Неудача.`)
}

// part 2 

console.log('part 2')

let ticketType = "premium"

switch (ticketType) {
    case "premium":
        console.log('Доступны все зоны')
        break;
    case "standard":
    case "economy":
        console.log('Доступна только основная зона')
        break;
    default:
        console.log('Нет таких значений')
}

let dayNumber = 1
switch (dayNumber) {
    case 1:
        console.log('Понедельник')
        break
    case 2:
        console.log('Вторник')
        break
    case 3:
        console.log('Среда')
        break
    case 4:
        console.log('Четверг')
        break
    case 5:
        console.log('Пятница')
        break
    case 6:
        console.log('Суббота')
        break
    case 7:
        console.log('Воскресенье')
        break
    default:
        console.log('Введите корректное значение дня недели')
}

let isLightOn = true;

let statusMessage = isLightOn ? "Свет включен" : "Свет выключен";

console.log(statusMessage);

// part 3 
console.log('part 3')

let age = 35
let isStudent = false
let hasLoyaltyCard = true

if (age > 65 || isStudent === false || hasLoyaltyCard === true) {
    console.log('Клиент имеет право на скидку')
} else {
    console.log('Клиент не имеет права на скидку')
}

let userRole = "admin"
let isPaidSubscription = true
let userLevel = 8

if (userRole === "admin" && isPaidSubscription === true && userLevel >= 5) {
    console.log('Полный доступ разрешен')
} else {
    console.log('Доступ ограничен')
}

let isLoggedIn = false
let isBanned = false

if (!isBanned) {
    console.log('Учетная запись заблокирована.')
} else if (!isLoggedIn) {
    console.log('Пожалуйста, авторизуйтесь.')
} else {
    console.log('Добро пожаловать!')
}