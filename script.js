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
    console.log(x * y)
}
mutiply(5,5)
function add(a,b){
    console.log(a + b)
}
add(20,20)
function divide(j,k){
    console.log(j / k)
}
divide(25,5)