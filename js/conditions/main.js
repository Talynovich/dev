let numberToCheck = 18

if (numberToCheck % 2 === 0) {
    console.log(`Число ${numberToCheck} — четное.`);
} else {
    console.log(`Число ${numberToCheck} — нечетное.`);
}

let value = -5 

if(value < 0){
    console.log(`Число <<${value}>> отрицательное`)
} else if (value > 0){
    console.log(`Число <<${value}>> положительное`)
} else {
    console.log('Число равно нулю')
}

let stringNumber = "45"
let threshold = 50

if (Number(stringNumber) > threshold ){
    console.log(`Проверка ${stringNumber} больше, чем пороговое`)
} else {
    console.log(`Проверка ${stringNumber} меньше или равно ${threshold}. Неудача.`)
}