function validateLineup(lineup) {

  let validateResult = false
  let totalSalary = 0
  let countOfPosition = 0
  let countPPosition = 0
  let countCPosition = 0
  let count1BPosition = 0
  let count2BPosition = 0
  let count3BPosition = 0
  let countSSPosition = 0
  let countSameTeam = 0
  let teamIDArray = []
  let sameTeamCriteriaMet = true
  let highestDuplicate = 1
  // lineup.forEach(player => {

  // });

  lineup.forEach(player => {
    teamIDArray.push(player.teamId)
  });

  for (let i = 0; i < teamIDArray.length; i++) {
    for (let j = 0; j < teamIDArray.length; j++) {
      if (i !== j && teamIDArray[i] === teamIDArray[j]) {
        countSameTeam++


        if (countSameTeam > highestDuplicate) {
          highestDuplicate = countSameTeam
        }
      }
      else {
        countSameTeam = 1
      }

    }
  }

  if (highestDuplicate > 2) {
    sameTeamCriteriaMet = false
  }

  console.log({ highestDuplicate })
  console.log({ teamIDArray })
  // teamIDArray.forEach(teamID => {

  // });
  lineup.forEach(player => {
    switch (player.position) {
      case 'OF':
        countOfPosition++
        break;
      case 'P':
        countPPosition++
        break;
      case 'C':
        countCPosition++
        break;
      case '1B':
        count1BPosition++
        break;
      case '2B':
        count2BPosition++
        break;
      case '3B':
        count3BPosition++
        break;
      case 'SS':
        countSSPosition++
        break;
    }
  })
  console.log(countOfPosition, countPPosition, countSSPosition, countCPosition)

  lineup.forEach(player => {
    totalSalary = totalSalary + player.salary
  });

  if (totalSalary < 45000 && countOfPosition === 3 && countPPosition === 1 && countCPosition === 1 && count1BPosition === 1 && count2BPosition === 1
    && count3BPosition === 1 && countSSPosition === 1 && sameTeamCriteriaMet) {
    validateResult = true
  } else {
    validateResult = false
  }

  return validateResult
}

const lineup2 = [{
  id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
}, {
  id: 2, name: 'Yadier Molina', position: 'C', teamId: 17, gameId: 115, salary: 2500
}, {
  id: 3, name: 'Luke Voit', position: '1B', teamId: 15, gameId: 115, salary: 2800
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



// if (countOfPosition===3 && countOfPosition===1 && countPPosition===1 && countCPosition ===1 
//   && count1BPosition === 1 && count2BPosition === 1 && count3BPosition===1 && countSSPosition ===1){
//     positionCriteria = true
//   }
// });
// return positionCriteria

console.log(validateLineup(lineup2))

module.exports = validateLineup