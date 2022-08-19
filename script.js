function rollDice(){
    let row = Math.floor(Math.random()* 7)
    console.log(`Rolled Dice : ${row}`)
}
function numOfTimes(times){
    for(let i = 0; i < times; i++){
        rollDice()
    }
}
numOfTimes(30)