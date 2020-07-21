// homework-perfect-lineup
/* from README.md
## Instructions
In the initial commit to this project, you have been provided with files that contain a JavaScript module and some associated tests. Your task is to implement a `validateLineup` function that will return `true` if the lineup provided adheres to all of the rules listed below.

## Lineup Rules
1) The total salary of all players in a lineup may not exceed $45,000
2) Lineups may not contain more than 2 players from a single team
3) Lineups may not contain more than 3 players from a single game
4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'
*/
const maxSalary = 45000
const maxTeams = 2
const maxGames = 3

function validateLineup(lineup) {
  let salarySum = 0
  let teams = []
  let games = []
  let positions = []

  lineup.forEach(function (player) {
    salarySum += player.salary
    teams.push(player.teamId)
    games.push(player.gameId)
    positions.push(player.position)
  })

  function findDupTeams(teamIds) {
    let finalDupTeamCount = 0

    teamIds.forEach(function (teamId) {
      let dupTeamCount = 0

      for (let i = 0; i < teamIds.length; i++) {
        if (teamId === teamIds[i]) {
          dupTeamCount++
        }
      }
      if (dupTeamCount > finalDupTeamCount) {
        finalDupTeamCount = dupTeamCount
      }
    })

    return finalDupTeamCount
  }

  function findDupGames(gameIds) {
    let finalDupGameCount = 0

    gameIds.forEach(function (gameId) {
      let dupGameCount = 0

      for (let i = 0; i < gameIds.length; i++) {
        if (gameId === gameIds[i]) {
          dupGameCount++
        }
      }
      if (dupGameCount > finalDupGameCount) {
        finalDupGameCount = dupGameCount
      }
    })

    return finalDupGameCount
  }

  /* 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'
  */

  function validatePositions(positions) {
    let pCount = 0
    let cCount = 0
    let b1Count = 0
    let b2Count = 0
    let b3Count = 0
    let ssCount = 0
    let ofCount = 0

    positions.forEach(function (position) {
      switch (position) {
        case 'OF':
          ofCount++
          break
        case 'P':
          pCount++
          break
        case 'C':
          cCount++
          break
        case '1B':
          b1Count++
          break
        case '2B':
          b2Count++
          break
        case '3B':
          b3Count++
          break
        case 'SS':
          ssCount++
          break
        default:
      }
    })

    return ofCount == 3 && pCount == 1 && cCount == 1 && b1Count == 1 && b2Count == 1 && b3Count == 1 && ssCount == 1
  }

  return salarySum < maxSalary && findDupTeams(teams) <= maxTeams && findDupGames(games) <= maxGames && validatePositions(positions)
}

module.exports = validateLineup
