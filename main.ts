//
// Your implementations
//

class Game {
    constructor(
        public p1Score: number,
        public p2Score: number,
    ){}
}

export function updateGameScore(p1Score: number, p2Score: number): Game {
    return new Game(p1Score, p2Score);
}

export function decideGameWinner(game: Game): string {
    return game.p1Score > game.p2Score ? 'Player 1' : 'Player 2';
}

export function printScore(scores: number[]): string {
    if (scores[0] === 3 && scores[1] === 3) {
        return 'deuce'
    }
    if (scores[0] === 2 && scores[1] === 2) {
        return 'thirty - thirty'
    }
    return scores[0] > scores[1] ? 'advantage player 1' : 'advantage player 2';
}
