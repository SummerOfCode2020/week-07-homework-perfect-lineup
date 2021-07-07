function validateLineup(lineup) {
    let doesNotExceedSalaryCountLimit = validateTeamSalary(lineup)
    let doesNotExceedTeamCount = true
    let doesNotExceedGameCount = true
    let doesNotExceedPlayerCount = lineup.length === 9
    let doesNotExceedPositionCount = validatePositionCount(lineup)

    return (
        doesNotExceedSalaryCountLimit &&
        doesNotExceedTeamCount &&
        doesNotExceedGameCount &&
        doesNotExceedPlayerCount &&
        doesNotExceedPositionCount
    )
}

function validateTeamSalary(lineup) {
    let teamSalary = 0

    for (let player of lineup) {
        teamSalary += player.salary
    }
    if (teamSalary <= 45000) {
        return true
    }
    return false
}

function validatePositionCount(lineup) {
    let firstBaseCount = 0
    let secondBaseCount = 0
    let thirdBaseCount = 0
    let pitcherCount = 0
    let shortStopCount = 0
    let catcherCount = 0
    let outfielderCount = 0

    for (let player of lineup) {
        switch(player.position) {
            case '1B':
                firstBaseCount ++
                break
            case '2B':
                secondBaseCount ++
                break
            case '3B':
                thirdBaseCount ++
                break
            case 'P':
                pitcherCount ++
                break
            case 'SS':
                shortStopCount ++
                break
            case 'C':
                catcherCount ++
                break
            default:
                outfielderCount ++
                break
        }
    }
    return (
        firstBaseCount === 1 &&
        secondBaseCount === 1 &&
        thirdBaseCount === 1 &&
        pitcherCount === 1 &&
        shortStopCount === 1 &&
        catcherCount === 1 &&
        outfielderCount === 3
    )
}



module.exports = { validateLineup }