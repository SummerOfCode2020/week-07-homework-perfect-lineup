
function validateLineup(items) {
  let toggle = true
  const salaries = items.map((player) => player.salary)
  const teams = items.map((player) => player.teamId)
  const games = items.map((player) => player.gameId)
  const positions = items.map((player) => player.position)

  if (positions.filter((position) => position === 'OF').length < 3 ||
    positions.filter((position) => position === 'OF').length > 3) { return false }
  if (positions.filter((position) => position === 'P').length < 1 ||
    positions.filter((position) => position === 'P').length > 1) { return false }
  if (positions.filter((position) => position === 'C').length < 1 ||
    positions.filter((position) => position === 'C').length > 1) { return false }
  if (positions.filter((position) => position === '1B').length < 1 ||
    positions.filter((position) => position === '1B').length > 1) { return false }
  if (positions.filter((position) => position === '2B').length < 1 ||
    positions.filter((position) => position === '2B').length > 1) { return false }
  if (positions.filter((position) => position === '3B').length < 1 ||
    positions.filter((position) => position === '3B').length > 1) { return false }
  if (positions.filter((position) => position === 'SS').length < 1 ||
    positions.filter((position) => position === 'SS').length > 1) { return false }

  function sum(acc, n) {
    return acc + n
  }
  if (salaries.reduce(sum, 0) > 45000) { return false }

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

  return toggle
}

module.exports = validateLineup
