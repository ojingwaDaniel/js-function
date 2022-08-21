// passing functions as an array
const add = function(x,y){
    return  x + y
}
const subtract = function(x,y){
    return  x - y
}
const mutiply = function(x,y){
    return  x * y
}
const divide = function(x,y){
    return  x / y
}
// const basicOpreator = [add,subtract,mutiply,divide]
// for (let opreator of basicOpreator) {
//    let answer = opreator(50,2)
//    console.log(answer)
    
// }
// as an object 
let opreators = {
    add : add,
    mutiply: mutiply,
    divide : divide
}
for (let func in opreators) {
    let result = opreators[func]
    console.log(result(4,5))

}