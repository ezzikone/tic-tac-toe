class TicTacToe {
    constructor() {
        this.field = [[null,null,null],[null,null,null],[null,null,null]];
        this.currentPlayer = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayer;
            if (this.currentPlayer === 'x') {
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            }
        }
    }

    isFinished() {

        let winner = this.getWinner(),
            draw = false;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j<3; j++) {
                if (this.field[i][j] !== 'x' && this.field[i][j] !== 'o') {
                    draw = true;
                }
            }
        }

        if (!draw) {
            return true;
        } else if (winner === 'o') {
            return true;
        } else if (winner === 'x') {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        for(let i = 0; i<3; i++) {
            if ((this.field[i][0] === this.field[i][1]) && (this.field[i][1] === this.field[i][2]) && (this.field[i][2] !== null)) {
                return this.field[i][0];
            }
            if ((this.field[0][i] === this.field[1][i]) && (this.field[1][i] === this.field[2][i]) && (this.field[2][i] !== null)) {
                return this.field[0][i];
            }
        }

        if ((((this.field[0][0] === this.field[1][1]) && (this.field[1][1] === this.field[2][2])) || ((this.field[2][0] === this.field[1][1]) && (this.field[1][1] === this.field[0][2]))) && (this.field[1][1] !== null)) {
            return this.field[1][1];
        }

        return null;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if (this.field[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if ((this.noMoreTurns() === false) || (this.getWinner() !== null) ) {
            return false;
        }
        else {
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
            return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
