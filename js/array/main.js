// 1.1
const example = [1, 2, ,3, 4, 5, 6, 7 ,9]
const numberArray = [1, 2, 3, 4, 5, 6, 7 , 9]

const getSum = (arr) => {
    return arr[0] + arr[arr.length -1]
}

console.log(getSum(example))

// 1.2
const getFirstThree = (arr) =>{
    return [...arr.slice(0, 3)]
}
console.log(getFirstThree(example))

// 1.3
const addStartAndEnd = (arr, startValue, endValue) => {
    return [startValue, ...arr, endValue]
}
console.log(addStartAndEnd(example, 50, 100))

// 1.4
const checkIdentity = (arr1, arr2) =>{
    return JSON.stringify(arr1) === JSON.stringify(arr2)
}

console.log(checkIdentity(example, numberArray))

const getLength = (arr) => {
    return arr.length
}
console.log(example)