lineup2.reduce((acc,player) => {
  if (acc.eperateTeamPlayers.include(player.teamId)){
    acc.sameTeam++
  } else {
    acc.seperateTeamPlayers.push(player.teamId)
  }
  return acc
}, 0)