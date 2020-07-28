function validateLineup (lineup){
    

   return (
       validateSalary(lineup) &&
       validateTeamCount(lineup) &&
       validateGameCount(lineup) &&
       violatesPositionCount(lineup) &&
       lineup.length === 9
    )

   
    
}

function validateSalary (lineup){
let totalSalary = lineup.reduce(function(total,player){
    return total += player.salary
},0)
    return totalSalary <= 45000 
    
}
function violatesPositionCount(lineup){
    let firstBaseCount = 0
    let secondBaseCount = 0
    let thirdBaseCount = 0
    let pitcherCount = 0
    let catcherCount = 0
    let shortStopCount = 0
    let outfielderCount = 0

    for (let player of lineup){
        switch (player.position) {
            case 'P': 
               pitcherCount++ 
                break;
            case 'C':
                catcherCount++
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
                outfielderCount++
                break;
        }
    }
        return firstBaseCount === 1 &&
            secondBaseCount === 1 &&
            thirdBaseCount === 1 &&
            pitcherCount === 1 &&
            catcherCount === 1 &&
            shortStopCount === 1 &&
            outfielderCount === 3
}

function validateTeamCount (lineup){
    let playersPerTeam = lineup.reduce(function(teamObject,player){
        const {teamId} = player 
        if(teamObject[teamId]){
            teamObject[teamId]++
        } else {
            teamObject[teamId] = 1
        }
        return teamObject
    },{}) 

    for (let property in playersPerTeam) {
        if (playersPerTeam[property] > 2) return false
        
    }
    return true
}

function validateGameCount (lineup){
    let playersPerGame = lineup.reduce(function(gameObject,player){
        const {gameId} = player 
        if(gameObject[gameId]){
            gameObject[gameId]++
        } else {
            gameObject[gameId] = 1
        }
        return gameObject
    },{}) 

    for (let property in playersPerGame) {
        if (playersPerGame[property] > 3) return false
        
    }
    return true 
}
module.exports = validateLineup 