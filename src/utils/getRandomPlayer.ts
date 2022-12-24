const MAX_PLAYER_ID = 493;

export const getRandomPlayer: (notThisOne?: number) => number = (notThisOne?: number) =>{
    const playerNumber = Math.floor(Math.random() * MAX_PLAYER_ID);

    if(playerNumber !== notThisOne) return playerNumber;
    return getRandomPlayer(notThisOne)
};

export const getOptionsForVote = () => {
    const firstId = getRandomPlayer();
    const secondId = getRandomPlayer(firstId);

    return [firstId, secondId]
}