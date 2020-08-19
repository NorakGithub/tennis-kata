//
// Your implementations
//

class Game {
    constructor(
        private p1Score: number,
        private p2Score: number,
    ){}
}

export function updateGameScore(p1Score: number, p2Score: number): Game {
    return new Game(p1Score, p2Score);
}

export function decideGameWinner(game: Game): string {
    return 'hello world';
}

export function printScore(scores: number[]): string {
    return 'hello world';
}
