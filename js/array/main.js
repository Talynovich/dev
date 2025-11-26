// 1
const example = [1, 2, 3, 4, 5, 6, 7 ,9, -1, -2, -3, 0, 9, 10]
const numberArray = [1, 2, 3, 4, 5, 6, 7 , 9, 10, 20, 30]
const exampleString = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `test`, `home work`, `hello`, `HELLO`]
const minLength = 7
const search = `hO`
const booleanArray = [true, false, true, false]
const item = 300
const nameArray = [`Иван Петров`, `Анна Сидорова`]

const getSum = (arr) => {
    return arr[0] + arr[arr.length -1]
}

console.log(getSum(example))

// 2
const getFirstThree = (arr) =>{
    return [...arr.slice(0, 3)]
}
console.log(getFirstThree(example))

// 3
const addStartAndEnd = (arr, startValue, endValue) => {
    return [startValue, ...arr, endValue]
}
console.log(addStartAndEnd(example, 50, 100))

// 4
const checkIdentity = (arr1, arr2) =>{
    return JSON.stringify(arr1) === JSON.stringify(arr2)
}

console.log(checkIdentity(example, numberArray))

const getLength = (arr) => {
    return arr.length
}
console.log(example)

// 6
const pushNewItem = (arr, item) => arr.push(item)
console.log(pushNewItem(example,  item), `6666666666`)

// 7
const popLastItem = (arr) => arr.pop()
console.log(popLastItem(example), `77777`)

// 8
const shiftFirstItem = (arr) => arr.shift()
console.log(shiftFirstItem(example), `88888`)

// 9
const unshiftNewItem = (arr, item) => arr.unshift(item)
console.log(unshiftNewItem(example, item), `99999`)

// 10
const reverseArray = (arr) => arr.reverse()
console.log(reverseArray(example), `10`)


// 11
const sortNumbersAsc = (arr) => arr.sort((a, b) => a - b)
console.log(sortNumbersAsc(example), `11`)

// 12
const sortStringsDesc = (arr) => arr.sort((a, b) => b.localeCompare(a))
console.log(sortStringsDesc(exampleString), `12`)

// 13
const filterEven = (arr) => arr.filter(num => num % 2 === 0)
console.log(filterEven(example), `13`)

// 14
const filterLongWords = (arr, minLength) => arr.filter(w => w.length >= minLength)
console.log(filterLongWords(exampleString, minLength), `14`)

// 15
const filterBelowZero = (arr) => arr.filter(num => num < 0)
console.log(filterBelowZero(example), `15`)

// 16
const filterContainsSubstring = (arr, search) => arr.filter(str => str.toLowerCase().includes(search.toLowerCase()))
console.log(filterContainsSubstring(exampleString, search), `16`)

// 17
const filterNonEmpty = (arr) => arr.filter(item => item)
console.log(filterNonEmpty(example), `17`)

// 18
const doubleValues = (arr) => arr.map(num => num * 2)
console.log(doubleValues(numberArray), `18`)

// 19
const toUpperCaseArray = (arr) => arr.map(s => s.toUpperCase())
console.log(toUpperCaseArray(exampleString), `19`)

// 20
const toLengthArray = (arr) => arr.map(s => s.length)
console.log(toLengthArray(exampleString), `20`)

// 21
const toHTMLList = (arr) => arr.map(item => `<li>${item}</li>`)
console.log(toHTMLList(exampleString), `21`)

// 22
const booleanToStatus = (arr) => arr.map(b => b ? 'Active' : 'Inactive')
console.log(booleanToStatus(booleanArray), `22`)

// 23
const makePositive = (arr) => arr.map(num => Math.abs(num))
console.log(makePositive(example), `23`)

// 24
const checkIncludes = (arr, item) => arr.includes(item)
console.log(checkIncludes(example, item), `24`)

// 25
const findFirstOdd = (arr) => arr.find(num => num % 2 !== 0)
console.log(findFirstOdd(example), `25`)

// 26
const findLast = (arr) => arr[arr.length - 1]
console.log(findLast(example), `26`)

// 27
const printAll = (arr) => arr.forEach(el => console.log(el))
console.log(printAll(exampleString), `27`)

// 28
const joinWithDash = (arr) => arr.join('-')
console.log(joinWithDash(exampleString), `28`)

// 29
const process = (arr) => arr.filter(n => n > 10).map(n => n * n)
console.log(process(numberArray), `29`)

// 30
const getMiddleElement = (arr) => arr.length % 2 === 1 ? arr[Math.floor(arr.length / 2)] : arr[arr.length / 2]
console.log(getMiddleElement(example), `30`)

// Комбинирование Методов

// 1
const getSortedOdds = (arr) => arr.filter(n => n % 2 !== 0).sort((a, b) => b - a)
console.log(getSortedOdds(example), `1`)

// 2
const mapAndFilter = (arr) => arr.map(n => n * 1.5).filter(n => n > 10)
console.log(mapAndFilter(numberArray), `2`)

// 3
const getUniqueNames = (arr) => arr.sort().filter((name, i, a) => a.indexOf(name) === i)
console.log(getUniqueNames(exampleString), `3`)

// 4
const processWords = (arr) => arr.filter(w => w.length >= 4).map(w => w.toLowerCase())
console.log(processWords(exampleString), `4`)

// 5
const getInitials = (arr) => arr.sort().map(fullName => fullName.split(' ').map(w => w[0].toUpperCase() + '.').join(''))
console.log(getInitials(nameArray), `5`)

// 6
const findAndJoin = (arr) => arr.filter(n => n >= 5 && n <= 15).map(n => n * 10).join(', ')
console.log(findAndJoin(numberArray), `6`)

// 7
const reverseFilterMap = (arr) => arr.reverse().filter(n => n < 5).map(n => n + 'km')
console.log(reverseFilterMap(numberArray), `7`)

// 8
const sortWordsByLength = (arr) => arr.sort((a, b) => a.length - b.length)
console.log(sortWordsByLength(exampleString), `8`)

// 9
const getAverage = (arr) => {
    const filtered = arr.filter(n => n > 0)
    return filtered.reduce((sum, n) => sum + n, 0) / filtered.length
}
console.log(getAverage(numberArray), `9`)

// 10
const formatIDs = (arr) => arr.filter(id => id % 3 === 0).map(id => `ID-${id}`).sort((a, b) => b.localeCompare(a))
console.log(formatIDs(numberArray), `10`)



