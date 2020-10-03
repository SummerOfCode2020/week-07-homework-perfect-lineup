

function totalSalary(lineup){
    return lineup.reduce((salary, player)=> {
    return salary + player.salary
    }, 0)

}

function checkTeamID(lineup){ 
    return lineup.reduce((teams, player) => {
        teams[player.teamId] = teams[player.teamId] === undefined ? 1 : teams[player.teamId] + 1
        return teams
    },{})
}
function checkGameTotal(lineup){
    return lineup.reduce((games, player) => { 
        games[player.gameId] = games[player.gameId] === undefined ? 1 : games[player.gameId] + 1
     return games
    })
}



function findPositions(lineup){
    return lineup.reduce(( positions, player) => {
        positions[player.position] = positions[player.position] === undefined ? 1 : positions[player.position] + 1
    return positions
    })
}


function breakSalaryCap( lineup){
    return totalSalary(lineup) > 45,000

}


function breakTeamIdTotal (teams){
    return Object.values(teams).some((count)=> { 
    return count > 2
    })
}

function breakGameIdTotal(games){
    return Object.values(games).some((count) => {
    return count > 3
    })
    
}

function breakPosition(positions){
    return positions['OF'] !== 3 || position['P'] !== 1 || position ['c'] !== 1 || position['1B'] !== 1 || position['2B'] !== 1 || position['3B']!== 1 || position['SS'] !== 1
}


function validateLineUp (lineup){ 
    const teams = checkTeamID(lineup)
    const games = checkGameTotal(lineup)
    const positions = findPositions(lineup)
    return !breakSalaryCap(lineup) && !breakTeamIdTotal(teams) && !breakGameIdTotal(games) && !breakPosition(positions)
}

module.exports = validateLineUp
