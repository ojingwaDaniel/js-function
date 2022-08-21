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
const basicOpreator = [add,subtract,mutiply,divide]
for (let opreator of basicOpreator) {
   let answer = opreator(50,2)
   console.log(answer)
    
}