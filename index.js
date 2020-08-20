// Do work! With the help of Shani :)

// Lineup cannot contain more than 9 players. Will use this function later in our final validateLineup function.
function isValidCount(lineup) {
  return lineup.length > 9
}

// Create a function which will add all the player's salaries together in the array, using the reduce method.
function totalSalary(lineup) {
  return lineup.reduce((acc, cur) => { return acc = acc + cur.salary }, 0)
}

// The total salary of all players in a lineup may not exceed $45,000
function isValidSalary(lineup) {
  return totalSalary(lineup) > 45000
}

// Lineups may not contain more than 2 players from a single team. Passing them into an object here,
// where we count the instances of duplicate teamIds.
function getTeamCount(lineup) {
  return lineup.reduce((teams, player) => {
    teams[player.teamId] =
    teams[player.teamId] === undefined ? 1 : teams[player.teamId] + 1

    return teams
  }, {})
}
// We then create a function that we call later to return false when the count is more than 2 players from a single team
function violatesTeamCount(teams) {
  return Object.values(teams).some(count => {
    return count > 2
  })
}

// Lineups may not contain more than 3 players from a single game. Passing them into an object here, where we count the instances of
// duplicate gameIds.
function getGameCount(lineup) {
  return lineup.reduce((teams, player) => {
    teams[player.gameId] =
    teams[player.gameId] === undefined ? 1 : teams[player.gameId] + 1

    return teams
  }, {})
}
// We then create a function that we call later to return false when the count is more than 3 players from a single game.
function violatesGameCount(games) {
  return Object.values(games).some(count => {
    return count > 3
  })
}

// Lineups must contain exactly 3 players with the position of 'OF'

function getPositionCount(lineup) {
  return lineup.reduce((positions, player) => {
    positions[player.position] =
    positions[player.position] === undefined ? 1 : positions[player.position] + 1

    return positions
  }, {})
}

function violatesOutfieldCount(outfielders) {
  return Object.values(outfielders).some(count => {
    return count === 'OF'
  })
}

function violatesOtherPositionsCount(positions) {
  return Object.values(positions).some(count => {
    return count !== 'OF'
  })
}

// Must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'


// our final function will return false when requirements are not met, and true if they are all met:
function validateLineup(lineup) {
  const teamCount = getTeamCount(lineup)
  const gameCount = getGameCount(lineup)
  const outfielderCount = getPositionCount(lineup)
  const otherPositionCount = getPositionCount(lineup)

  return !isValidSalary(lineup) && !violatesTeamCount(teamCount) && !violatesGameCount(gameCount) &&
 !isValidCount(lineup) && !violatesOutfieldCount(outfielderCount) && !violatesOtherPositionsCount(otherPositionCount)
}

module.exports = validateLineup
