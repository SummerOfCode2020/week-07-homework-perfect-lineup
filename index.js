function validateLineup (lineUp) {
    let positionP = 0,
        positionC = 0,
        position1B = 0,
        position2B = 0,
        position3B = 0,
        positionSS = 0,
        positionOF = 0,
        gamesPlayed = [],
        playerPositions = positionOF >= 3 && position1B === 1 && position2B === 1 && position3B === 1
        && positionC === 1 && positionSS === 1 && positionP === 1,
        playerTeam = []
        
    /** checking for player salary and position the player playes */
    lineUp.forEach(player => {
        if (player.salary <= 45000) {
            switch (player.position) {
                case 'P':
                    positionP += 1
                    gamesPlayed.push(player.gameId)
                    playerTeam.push(player.teamId)
                    break;
                case 'C':
                    positionC += 1
                    gamesPlayed.push(player.gameId)
                    playerTeam.push(player.teamId)
                    break;
                case '1B':
                    position1B += 1
                    gamesPlayed.push(player.gameId)
                    playerTeam.push(player.teamId)
                    break;
                case '2B':
                    position2B += 1
                    gamesPlayed.push(player.gameId)
                    playerTeam.push(player.teamId)
                    break;
                case '3B':
                    position3B += 1
                    gamesPlayed.push(player.gameId)
                    playerTeam.push(player.teamId)
                    break;
                case 'SS':
                    positionSS += 1
                    gamesPlayed.push(player.gameId)
                    playerTeam.push(player.teamId)
                    break;
                case 'OF':
                    positionOF += 1
                    gamesPlayed.push(player.gameId)
                    playerTeam.push(player.teamId)
                    break;
            }
        }
        
    })
    /** here were a counting how many distinct games the player has played */        
        let uniqGameCount = gamesPlayed.reduce((acc, val) => {
            acc[val] = acc[val] === undefined ? 1 : acc[val] += 1
            return acc; }, {})

    /** here I am counting the different teams and many players are in them */
        let teamPlayedFor = playerTeam.reduce((acc, val) => {
            acc[val] = acc[val] === undefined ? 1 : acc[val] += 1
            return acc; }, {})

        console.log({teamPlayedFor})
        console.log({uniqGameCount})
        console.log({gamesPlayed})
        console.log({playerTeam})
    
    return playerPositions 
}

module.exports = validateLineup