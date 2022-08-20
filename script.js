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
// creating a function that takes the avg value of a giving array
function avgValue(...numbers){
    let totals = 0

    for (let num of numbers) {
        totals += num
        
    }
    let avg= totals/ numbers.length
    console.log(avg)
   
}
// function to check if a sentence is a pangram avoiding string casing
function Pangram(statement){
    
    // avoiding string casing in the sentence
    let modifieldStatement = statement.toLowerCase()
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    //loop through a sentence to check if it contains each alphabet
    for (let letter  of alphabet) {
        if (!modifieldStatement.includes(letter)) {
            return false
        }
        
    }
    return true


}
/// a code to verify a password
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false
function isValidPassword(password,username){
    // checking if the password is <= 8
    // checking if the password contains spaces
    let lessthanEight = password.length < 8
    let noSpaces = password.indexOf(' ') !== -1
    let checkUsername = password.indexOf(username) !== -1
    if(lessthanEight || noSpaces || checkUsername){
        return false
    }
    return true

}
// a function that pick a random items of two  arrays and add them together in a obejct
// {
//     value : 2;
//     suits : 'clubs'
// }
// values = 1,2,3,4,5,6,7,8,9,10,J,K,L,O

// suits = 'clubs','hearts','diamond','spades'
function pick(array){
  let index = Math.floor(Math.random() * array.length)
  let element = array[index]
  return element
}
function pickingCards(){
    let values = [1,2,3,4,5,6,7,8,9,10,'J','K','L','O']
    let suits = ['clubs','hearts','diamond','spades']
    return {
        value : pick(values),
        suit : pick(suits)
    }
}
