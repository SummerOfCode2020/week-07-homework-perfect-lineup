function validateLineup (lineUp) {
    let positionP = 0,
        positionC = 0,
        position1B = 0,
        position2B = 0,
        position3B = 0,
        positionSS = 0,
        positionOF = 0,
        gamesPlayed = [],
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

    // let's get the most repeated gameId count to see if the team's games played is less than 
    let count = 0;

    for (let i = 0; i < gamesPlayed.length; i++) {
        for (let j = i + 1; j < gamesPlayed.length; j++) {
            if (gamesPlayed[i] == gamesPlayed[j] ) {
                count++;
                break;
            }
        }
    }
    // different team count
    let teamIdCount = 0;

    for (let i = 0; i < playerTeam.length;i ++) {
        for (let j = i + 1; j < playerTeam.length; j++) {
            if (playerTeam[i] == playerTeam[j]) {
                teamIdCount++;
                break;
            }
        }
        
    }

    let playerPositions = positionOF >= 3 && position1B == 1 && position2B == 1 && position3B == 1
    && positionC == 1 && positionSS == 1 && positionP == 1

    let result = playerPositions == true && count <= 2

    return result
}

module.exports = validateLineup 