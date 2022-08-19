function rollDice(){
    let row = Math.floor(Math.random()* 7)
    console.log(`Rolled Dice : ${row}`)
}
function numOfTimes(times){
    for(let i = 0; i < times; i++){
        rollDice()
    }
}
// numOfTimes(30)
// code to mutiply, add and divide parameter in a function
function mutiply(x,y){
     return x * y
}
let answer = mutiply(5,5)
function add(a,b){
    return a + b
}
let total = add(20,20)
function divide(j,k){
    return j / k
}
let score =  divide(25,5)
console.log(answer)
console.log(total)
console.log(score)

// a function that loop through an array and return true or false 

function nigerian(languages){
    for (let lang of languages) {
        if (lang =='igbo' || lang =='yoruba' || lang =='Hausa') {
            return true
        }
        
    }
    return false

}
nigerian(['akwa-ibom','item','ebonyi','igbo'])