let name = 'Tolya'
let age = 24
let avgscore = 50.5
let isRainWeather = true
let nullValue = null
let undefinedValue

console.log(typeof name)
console.log(typeof age)
console.log(typeof avgscore)
console.log(typeof isRainWeather)
console.log(typeof nullValue)
console.log(typeof undefinedValue)


let initialNumber = 30
initialNumber += 10
initialNumber *= 2

let initialString = 'Я изучаю'
initialString += 'JavaScript!'

console.log(initialString)

// step 2

let a = 25
let b = 7
console.log(a + b)
console.log(b - b)
console.log(a * b)
console.log(b / b)
console.log(a % b)
console.log(b ** 3)
console.log(b / b)

console.log(a++)
console.log(a)
console.log(--b)


let radius = 5
let PI = 3.14159
let area = PI * (radius ** 2)
console.log(area)


// //  step 3


// Преобразуйте строку "77" в число с помощью Number(
let string1 = '10'
let number1 = Number(string1)
console.log(typeof number1)

// Преобразуйте число 99 в строку с помощью String()
let string2 = 10
let number2 = String(string2)
console.log(typeof number2)

//Преобразуйте число 0 и строку "0" в булево значение с помощью Boolean().
let number3 = 0
let string3 = 'O'
let numberoolan3 = Boolean(number3)
let stringboolean3 = Boolean(string3)
console.log(numberoolan3, stringboolean3)

//Преобразуйте строку "Non-empty" в булево значение.
let string4 = 'Non-empty'
let boolean4 = Boolean(string4)
console.log(boolean4)

//Определите результат и тип операции: "15" + 20 (Строка + Число)
let string = '15'
let number = 20
number += string
console.log(number)

//Определите результат и тип операции: "50" - 5 (Строка - Число)
let string5 = '50'
let number5 = 5
string5 -= number5
console.log(string5)

//Определите результат и тип операции: 100 * "10" (Число * Строка)
number6 = 100
string6 = '10'
number6 *= string6
console.log(string6)

//Определите результат и тип операции: true + 5 (Булево + Число)
let boolean5 = true
let number7 = 5
boolean5 += number7
console.log(typeof boolean5, boolean5)

// Определите результат и тип операции: false + " test" (Булево + Строка)
let boolean6 = false
boolean6 += " test"
console.log(typeof boolean6, boolean6)

// part 4

let num = 25
let str = '25'

console.log(num == str)
console.log(num === str)
console.log(num != str)
console.log(num !== str)

console.log(50 < 45)
console.log(100 >= 100);
console.log("Zebra" > "Apple");
console.log(null == 0);
console.log(null >= 0);

// task 5*

// 1.  1 == true, потому что булевое значение true будет = 1, а false = 0

let z = 10;
z += 5;
z /= 3;
console.log(z);
