const findCommonChars = (str1, str2) => {
    let result = new Set()
    for (let item of str1){
        if(str2.includes(item)){
            result.add(item)
        }
    }
    return Array.from(result).join(``)
}
console.log(findCommonChars("abbcrtti", "bbfattrro"))

const fib = n => {
    let first = 0
    let second = 1
    
    for(let i = 0; i < n; i++){
        let temp = second;
        second +=first;
        first = temp;
    }
    return first;
}

console.log(fib(6))

// temp = 1 
/// second = 1 ( temp )  + 0 = 1 
// first = 1 
// -----------
// temp = 1
// second  = 1 ( temp )  + 1 = 2 
// first = 1  ( temp) 
//----------
// temp = 2
// second = 2 ( temp ) + 1 = 3
// first = 2
//---------
// temp = 3
// second = 3 + 2 = 5
// first = 3
//---------
// temp = 5
// second = 5 + 3 = 8
// first = 5
//--------
// temp = 8
// second = 8 + 5 = 13
// first = 8





