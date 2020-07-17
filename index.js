function validateLineup(inputLineup){
// if the lineup is too long, no need to do any calculations
if (inputLineup.length > 9) return false
 

 // calculate our total salary, if it's more than %45,000 return false and exit function
 const totalSalary = inputLineup.reduce((previous, array) => previous + array.salary, 0)
 if (totalSalary >= 45000) return false

 // Make sure too many teammates aren't on the same team, if so, return false
 if(countUniqueProperties(inputLineup, 'teamId', 2)) return false
 // Same function can be used for same game away well
  if (countUniqueProperties(inputLineup, 'gameId', 3)) return false

  // Now check our positions, this is in a new function due to how big it is
if(!invalidPositions(inputLineup)) return false

// if nothing has been returned yet..then return true as all conditions must have been true
return true


}

function countUniqueProperties(array, propertyName, numberAllowed){
    // make an array to hold our results
    let resultArray = []

    // make an array of every result we are looking for
    const allResults = array.map(array => array[propertyName])
    // now trim all results and get each unique value
    const uniqueResults = [...new Set(allResults)]

    // now count each unique results entries, and add it as an object in our array
    uniqueResults.forEach(element => {
        resultArray.push(allResults.filter(name => name === element).length )
     
    });
     
    // now check our array to see if there are more then allowed
    return Math.max(...resultArray) > numberAllowed
}

function invalidPositions(array){
    // make an array of every result we are looking for
    let players = array.map(array => array.position)

    // now check if there is 3 OF, and remove from array
    let outFieldArray = players.filter(player => player === 'OF')
    let otherArray = players.filter(player => player != 'OF')

    // now we check if our OF count is correct and our players are all unique positions and there are 6 of them
    // if all 3 is true then we have 3 OF and a P, C, 1B, 2B, 3B, and SS
    return JSON.stringify(otherArray) === JSON.stringify([...new Set(otherArray)]) && outFieldArray.length === 3 &&
    otherArray.length === 6

    
}


module.exports = validateLineup