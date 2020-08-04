function validateLineup(lineup) {
  return (
    validateGameCount(lineup) &&
    validateTeamCount(lineup) &&
    validateSalary(lineup) &&
    violatePositionCount(lineup) &&
    lineup.length === 9
  )
}

function validateGameCount(lineup) {
  const playersPerGame =

  lineup.reduce((gameObject, player) => {
    const { gameId } = player

    if (gameObject[gameId]) {
      gameObject[gameId]++
    } else {
      gameObject[gameId] = 1
    }

    return gameObject
  })

  for (let index in playersPerGame) {
    if (playersPerGame[index] > 3) return false
  }

  return true
}

function validateTeamCount(lineup) {
  const playersPerTeam =

  lineup.reduce((teamObject, player) => {
    const { teamId } = player

    if (teamObject[teamId]) {
      teamObject[teamId]++
    } else {
      teamObject[teamId] = 1
    }

    return teamObject
  })

  for (let index in playersPerTeam) {
    if (playersPerTeam[index] > 2) return false
  }

  return true
}

function validateSalary(lineup) {
  let totalSalary = lineup.reduce((total, player) => {
    return total += player.salary
  }, 0)

  return totalSalary <= 45000
}

function violatePositionCount(lineup) {
  let catcherCount = 0
  let pitcherCount = 0
  let firstBaseCount = 0
  let secondBaseCount = 0
  let thirdBaseCount = 0
  let shortStopCount = 0
  let outfieldCount = 0

  for (let player of lineup) {
    switch (player.position) {
      case 'C':
        catcherCount++
        break
      case 'P':
        pitcherCount++
        break
      case '1B':
        firstBaseCount++
        break
      case '2B':
        secondBaseCount++
        break
      case '3B':
        thirdBaseCount++
        break
      case 'SS':
        shortStopCount++
        break
      case 'OF':
        outfieldCount++
        break
      default:
        break
    }
  }

  return catcherCount === 1 &&
  pitcherCount === 1 &&
  firstBaseCount === 1 &&
  secondBaseCount === 1 &&
  thirdBaseCount === 1 &&
  shortStopCount === 1 &&
  outfieldCount === 3
}

module.exports = validateLineup

// cannot contain more than 3 players from a single game
// cannot contain more than 2 players from a single team
// total salary of all players in a lineup may not exceed $45,000
// Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following 
// positions: 'P', 'C', '1B', '2B', '3B', 'SS'


