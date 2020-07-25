const { config } = require("chai");


function calculateSalary(lineup) {
    let totalSalary = lineup.reduce((total, player) => {
        return total = total + player.salary
        
    }, 0)
    return totalSalary <= 45000
}

    function maxPosition(lineup) {
        let pCount = 0
        let cCount = 0
        let firstBaseCount = 0
        let secondBaseCount = 0
        let thirdBaseCount= 0
        let shortStopCount = 0
        let outFielderCount = 0
        //of loop gets the value of each position - for item of object or array
        for (let player of lineup) {
            switch (player.position) {
                case 'P':
                    pCount++
                    break;
                case 'C':
                    cCount++
                    break;
                case '1B':
                    firstBaseCount++
                    break;
                case '2B':
                    secondBaseCount++
                    break;
                case '3B':
                    thirdBaseCount++
                    break;
                case 'SS':
                    shortStopCount++
                    break;
                default:
                    outFielderCount++
                    break;
            }
        }
        console.log(pCount)
        console.log(cCount)
        console.log(firstBaseCount)
        console.log(secondBaseCount)
        console.log(thirdBaseCount)
        console.log(shortStopCount)
        console.log(outFielderCount)
        return pCount === 1 &&
            cCount === 1 &&
            firstBaseCount === 1 &&
            secondBaseCount === 1 &&
            thirdBaseCount === 1 &&
            shortStopCount === 1 &&
            outFielderCount === 3
    }
    function validateGameCount(lineup) {
        const playersPerGame = lineup.reduce((gameObject, player) => {
            const { gameId } = player
            if(gameObject[gameId]) {
                gameObject[gameId]++
            } else {
                gameObject[gameId] = 1
            }
            return gameObject
        }, {})

        for(let index in playersPerGame) {
            if(playersPerGame[index] > 3) return false
        }
        return true
    }
    function validateTeamCount(lineup) {
        // to get the value for the number of players on one team
            // create a const and run lineup.reduce function
        // pass two parameters (accumulator, currentValue)
            // the accumulator builds through each iteration
            // the currentValue is the value for that iteration
        const playersPerTeam = lineup.reduce((teamObject, player) => {
            // de-structure player.teamId so that 'teamId' can be used moving forward
            const { teamId } = player
            // if teamId is found in the object we initialized: "}, {})"
            if(teamObject[teamId]) {
            // note that there is one more of the object
                teamObject[teamId]++
            } else {
            // if the value is not in the object we initialized: "}, {})"
            // add it to the object and note that there is 1
                teamObject[teamId] = 1
            }
            // always return the accumulator when using reduce
            return teamObject
        }, {})
        // now that we have a count of each position, create our condition
        // using a for statement, loop through the teamId value we just assigned
        // to playersPerTeam
        for (let index in playersPerTeam) {
        // if the count of any single team is greater than 2, return false
        if (playersPerTeam[index] > 2) return false
        }
        // else return true
        return true
    }
    function validateLineup(lineup) {
 
        return calculateSalary(lineup) &&
            validateTeamCount(lineup) &&
            validateGameCount(lineup) &&
            maxPosition(lineup) &&
            lineup.length === 9
    }



module.exports = validateLineup