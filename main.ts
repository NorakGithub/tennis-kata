//
// Your implementations
//

class Game {
    constructor(
        public p1Score: number,
        public p2Score: number,
    ){}

    get winner(): string {
        if ((this.p1Score - this.p2Score) >= 2) { return 'Player 1'}
        if ((this.p2Score - this.p1Score) >= 2) { return 'Player 2'}
        if (this.p1Score <= 5 && this.p2Score <= 5) { return 'On Going'}
        return this.p1Score > this.p2Score ? 'Player 1': 'Player 2';
    }
}

export function updateGameScore(p1Score: number, p2Score: number): Game {
    return new Game(p1Score, p2Score);
}

export function decideGameWinner(game: Game): string {
    return game.winner;
}

export function printScore(scores: number[]): string {
    if ((scores[0] >= 3 && scores[1] >= 3) && (scores[0] === scores[1])) {
        return 'deuce'
    }
    const scoring = [
        'love',
        'fifteen',
        'thirty',
        'forty',
    ]
    if (scores[0] <= 2 && scores[1] <= 2) {
        return scoring[scores[0]] + ' - ' + scoring[scores[1]]
    }
    return scores[0] > scores[1] ? 'advantage player 1' : 'advantage player 2';
}
