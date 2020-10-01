// We need a function validateLineup that only returns
// or false. It only returns true if all conditions are met.
// 1) The total salary of all players in a lineup may not exceed $45,000
// 2) Lineups may not contain more than 2 players from a single team
// 3) Lineups may not contain more than 3 players from a single game
// 4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'

const lineup = [{
    id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
}, {
    id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
}, {
    id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
}, {
    id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
}, {
    id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
}, {
    id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
}, {
    id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
}, {
    id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
}, {
    id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
}]

function validateLineUp(lineup) {
    // I'll try initializing a valid flag and flip it to false based on code for each requirement.

    let valid = true
    let totalSalary = 0
    let seperateTeamPlayers = []
    let seperateGamePlayers = []
    let sameTeam = 0
    let sameGame = 0
    let expectedPositions = ['1B', '2B', '3B', 'C', 'OF', 'OF', 'OF', 'P', 'SS']
    const playerPositions = lineup.map(player => player.position)

    // Init a total salary var and iterate over array to set it equal to toal of all player's salary

    lineup.forEach(player => {
        totalSalary += player.salary
    })

    // If totalSalary is higher than 45,000 it's not a perfect Lineup
    if (totalSalary > 45000) {
        valid = false
    }

    lineup.forEach(player => {
        if (seperateTeamPlayers.includes(player.teamId)) {
            sameTeam++
        } else {
            seperateTeamPlayers.push(player.teamId)
        }

    })

    lineup.forEach(player => {
        if (seperateGamePlayers.includes(player.gameId)) {
            sameGame++
        } else {
            seperateGamePlayers.push(player.gameId)
        }
    })

    if (sameTeam >= 2) {
        valid = false
    }

    if (sameGame >= 3) {
        valid = false
    }

    if (lineup.length > 9) {
        valid = false
    }

    console.log(valid)

    if (playerPositions.sort().join('') !== expectedPositions.join('')) {
        valid = false
    }

    console.log(playerPositions.sort())
    console.log(expectedPositions)

    return valid
}

console.log(validateLineUp(lineup))

module.exports = validateLineUp