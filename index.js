
function validateLineup(items) {
  let toggle = true
  //  separates salaries into new array
  const salaries = items.map((player) => player.salary)
  //  separates teams into new array
  const teams = items.map((player) => player.teamId)
  //  separates games into new array
  const games = items.map((player) => player.gameId)
  //  separates positions into new array
  const positions = items.map((player) => player.position)

  //  determines if position allocation limits have been met
  function positionLimits(pos, limit) {
    if (positions.filter((position) => position === pos).length < limit ||
      positions.filter((position) => position === pos).length > limit) { toggle = false }
  }
  positionLimits('OF', 3)
  positionLimits('P', 1)
  positionLimits('C', 1)
  positionLimits('1B', 1)
  positionLimits('2B', 1)
  positionLimits('3B', 1)
  positionLimits('SS', 1)

  // callback function for reduce method 
  function sum(acc, n) {
    return acc + n
  }

  //  totals and checks if salaries exceed limit
  if (salaries.reduce(sum, 0) > 45000) { return false }

  //  compares each element in games array with elements in same array to check prescribed limits

  games.forEach(element => {
    let count = 0

    for (let index = 0; index < games.length; index++) {
      if (element === games[index]) {
        count++
      }
      if (count > 3) {
        toggle = false
      }
    }
  })
  //  compares each element in teams array with elements in same array to check prescribed limits

  teams.forEach(element => {
    let count = 0

    for (let index = 0; index < teams.length; index++) {
      if (element === teams[index]) {
        count++
      }
      if (count > 2) {
        toggle = false
      }
    }
  })

  /*  returns boolean for nested conditionals and functions. 
  Couldn't get it to return false from inside loop had to declare global variable toggle
  */
  return toggle
}

module.exports = validateLineup
