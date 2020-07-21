function validateLineup(lineup) {
  let positionArray = lineup.map((player) => player.position)
  let teamIdArray = lineup.map((player) => player.teamId)
  let gameIdArray = lineup.map((player) => player.gameId)
  let salaryArray = lineup.map((player) => player.salary)
  let countTeamId = 0
  let highestDuplicateTeam = 0
  let countGameId = 0
  let highestDuplicateGame = 0
  let validate = true

  // console.log({ positionArray })
  // console.log({ teamIdArray })
  // console.log({ gameIdArray })
  // console.log({ salaryArray })
  // console.log(positionArray.length)
  // console.log(salaryArray.reduce((a, b) => a + b))

  if (positionArray.length !== 9) {
    validate = false
  }

  if (salaryArray.reduce((a, b) => a + b) > 45000) {

    validate = false
  }

  teamIdArray.forEach(teamId => {
    for (let i = 0; i < teamIdArray.length; i++) {
      if (teamId === teamIdArray[i]) {
        countTeamId++
      }
      if (countTeamId > highestDuplicateTeam) {
        highestDuplicateTeam = countTeamId
      }
    }
    countTeamId = 0
  })

  if (highestDuplicateTeam > 2) {
    validate = false
  }

  gameIdArray.forEach(gameId => {
    for (let i = 0; i < gameIdArray.length; i++) {
      if (gameId === gameIdArray[i]) {
        countGameId++
      }
      if (countGameId > highestDuplicateGame) {
        highestDuplicateGame = countGameId
      }
    }
    countGameId = 0
  })

  if (highestDuplicateGame > 3) {
    validate = false
  }

  if (positionArray.filter((position) => position === 'OF').length !== 3) {
    validate = false
  }
  if (positionArray.filter((position) => position === 'P').length !== 1) {
    validate = false
  }
  if (positionArray.filter((position) => position === 'C').length !== 1) {
    validate = false
  }
  if (positionArray.filter((position) => position === '1B').length !== 1) {
    validate = false
  }
  if (positionArray.filter((position) => position === '2B').length !== 1) {
    validate = false
  }
  if (positionArray.filter((position) => position === '3B').length !== 1) {
    validate = false
  }
  if (positionArray.filter((position) => position === 'SS').length !== 1) {
    validate = false
  }

  return validate

}

module.exports = validateLineup

// const lineup2 = [{
//   id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
// }, {
//   id: 2, name: 'Yadier Molina', position: 'C', teamId: 17, gameId: 115, salary: 2500
// }, {
//   id: 3, name: 'Luke Voit', position: '1B', teamId: 15, gameId: 115, salary: 2800
// }, {
//   id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
// }, {
//   id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
// }, {
//   id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
// }, {
//   id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
// }, {
//   id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
// }, {
//   id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
// }]

// eslint-disable-next-line no-console
// console.log(validateLineup(lineup2))
