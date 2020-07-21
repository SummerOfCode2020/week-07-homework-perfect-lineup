function validateLineup(roster) {
  return (
    validateTeamSalary(roster) &&
    validateTeamCountLimit(roster) &&
    validateGameCount(roster) &&
    validatePositionCount(roster) &&
    roster.length === 9
  )
}

function validateTeamSalary(roster) {
  let teamSalary = 0

  // used for...of to loop through each player to access their salary and find a total team salary.
  for (let player of roster) {
    teamSalary += player.salary
  }
  if (teamSalary <= 45000) return true

  return false
}

function validatePositionCount(roster) {
  let firstBaseCount = 0
  let secondBaseCount = 0
  let thirdBaseCount = 0
  let pitcherCount = 0
  let catcherCount = 0
  let shortStopCount = 0
  let outFielderCount = 0

  /* utilize a switch statement to increase each position count and then perform a check
  to make sure the roster position rule is adhered to */
  for (let player of roster) {
    switch (player.position) {
      case '1B':
        firstBaseCount++
        break
      case '2B':
        secondBaseCount++
        break
      case '3B':
        thirdBaseCount++
        break
      case 'P':
        pitcherCount++
        break
      case 'C':
        catcherCount++
        break
      case 'SS':
        shortStopCount++
        break
      default:
        outFielderCount++
        break
    }
  }

  return (
    firstBaseCount === 1 &&
    secondBaseCount === 1 &&
    thirdBaseCount === 1 &&
    pitcherCount === 1 &&
    catcherCount === 1 &&
    shortStopCount === 1 &&
    outFielderCount === 3
  )
}

/* 
use the reduce method to loop through the roster and check to see if the accumulator (empty object)
contains the teamId
- if so, increase the count for that key
- if not, add the key to the accumulator and give it a value of 1
*/
function validateTeamCountLimit(roster) {
  const playersPerTeam = roster.reduce(function (accumulator, player) {
    const { teamId } = player

    if (accumulator[teamId]) {
      accumulator[teamId]++
    } else {
      accumulator[teamId] = 1
    }

    return accumulator
  }, {})

  /* 
  since the accumulator is an object, can utilize the for...in loop to make sure that no teamIds
  have a count > 2 
  */
  for (let property in playersPerTeam) {
    if (playersPerTeam[property] > 2) return false
  }

  return true
}

function validateGameCount(roster) {
  const playersPerGame = roster.reduce(function (accumulator, player) {
    const { gameId } = player

    if (accumulator[gameId]) {
      accumulator[gameId]++
    } else {
      accumulator[gameId] = 1
    }

    return accumulator
  }, {})

  for (let property in playersPerGame) {
    if (playersPerGame[property] > 3) return false
  }

  return true
}

module.exports = {
  validateLineup
}
