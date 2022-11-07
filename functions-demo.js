let jonSnowHealth = 100

// converting to a string
// jonSnowHealth = String(jonSnowHealth)
// jonSnowHealth = toString(jonSnowHealth)


//converting to a number
// jonSnowHealth = parseInt(jonSnowHealth)

//converting to a boolean
// jonSnowHealth = boolean(jonSnowHealth)

//converting using string coercion/concatenation
// jonSnowHealth = jonSnowHealth + 'health'

console.log(typeof jonSnowHealth)

let theWinnerIs = 'Jamie is the winner'

//theWinnerIs = theWinnerIs.replace('Jamie', 'Jon')

// replace
let newWinnerIs = theWinnerIs.toLowerCase().replace('jamie', 'Jon')


// includes
if(newWinnerIs.includes('Jon')){
    console.log('replaced successfully')
} else {
    console.log('not replaced')
}

console.log(newWinnerIs)

// Covert to kebab-case eg. Jon-is-the-winner
// let newWinnerReplace = newWinner.replaceAll(' ', '-')
// console.log(newWinnerReplace)

// let newWinnerLower = new.toLowerCase()
// let newWinnerLowerSplit = newWinnerLower.split(' ')
// let newWinnerKebab = newWinnerLowerSplit.join('-')

// let newWinnerKebab = newWinner.toLowerCase().split(' ').join('-')

// console.log(newWinnerKebab)

// functions

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('Jon is alive!')
    } else {
        console.log('RIP Jon Snow')
    }
}

// envoke/call function
isJonAlive()

//function expression
// const isJonAlive = () => {
//     if(jonSnowHealth > 0){
//         console.log(`Jon is alive!`)
//     } else {
//         console.log(`RIP Jon Snow`)
//     }
// }

//arrow function
//  const isJonAlive = function(){
//     if(jonSnowHealth > 0){
//         console.log('Jon is alive!')
//     } else {
//         console.log('RIP Jon Snow')
//     }
//  }

//create a function to launch attack on Jon

function surpriseAttack(attack){
    jonSnowHealth -= attack
    //the same
    // jonSnowHealth = jonSnowHealth - attack
}

surpriseAttack(20)

console.log(jonSnowHealth)

function greeting(person1,person2){
    // make sure you use `(back ticks here) instead of  ' or " " when using ${}
    console.log(`${person1} and ${person2} are saying hello to each other`)
}

greeting('Ned', 'Jon')

//functions with return

function rollDice(){
    let possibleRolls = [1,2,3,4,5,6]
    //Math.floor rounds down, Math.ceil rounds up, 
    let randomIndex = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomIndex]
}
// console.log(firstRoll, secondRoll)

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()

    return firstRoll * secondRoll
}

let multipliedRoll = diceMultiplier()
console.log(multipliedRoll)