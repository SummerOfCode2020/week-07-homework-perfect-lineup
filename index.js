/*function validateLineup(lineup){
    let salary =  lineup.map(function(player){
        return player.salary
    })

    return console.log({salary})

}

function calculateTotalSalary(lineup) {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}
if calculateTotalSalary(lineup) < 45000 {
  return true
}

/*1) The total salary of all players in a lineup may not exceed $45,000
2) Lineups may not contain more than 2 players from a single team
3) Lineups may not contain more than 3 players from a single game
4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'
*/

/*const lineupTwo = [{
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

console.log(validateLineup(lineupTwo))*/


function calculateTotalSalary(lineup) {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}
function getPositionCounts(lineup) {
  return lineup.reduce((counts, player) => {
    counts[player.position] = counts[player.position] === undefined ? 1 : counts[player.position] + 1
    return counts
  }, {})
}
function getGameCounts(lineup) {
  return lineup.reduce((games, player) => {
    games[player.gameId] = games[player.gameId] === undefined ? 1 : games[player.gameId] + 1
    return games
  }, {})
}
function getTeamCounts(lineup) {
  return lineup.reduce((teams, player) => {
    teams[player.teamId] = teams[player.teamId] === undefined ? 1 : teams[player.teamId] + 1
    return teams
  }, {})
}
function violatesGameCount(games) {
  return Object.values(games).some((count) => { return count > 3 })
}
function violatesPositionCount(positions) {
  return positions['P'] !== 1 || positions['C'] !== 1 || positions['1B'] !== 1 ||
    positions['2B'] !== 1 || positions['3B'] !== 1 || positions['SS'] !== 1 ||
    positions['OF'] !== 3
}
function violatesSalary(lineup) {
  return calculateTotalSalary(lineup) > 45000
}
function violatesTeamCount(teams) {
  return Object.values(teams).some((count) => { return count > 2 })
}
function validateLineup(lineup) {
  const gameCounts = getGameCounts(lineup)
  const teamCounts = getTeamCounts(lineup)
  const positionCounts = getPositionCounts(lineup)
  return !violatesGameCount(gameCounts) && !violatesSalary(lineup) &&
    !violatesTeamCount(teamCounts) && !violatesPositionCount(positionCounts)
}
module.exports = validateLineup