import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [playerScore, setPlayerScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const computerMove = (boardCopy) => {
        // Find empty cells
        const emptyCells = boardCopy.reduce((acc, cell, idx) => 
            cell === null ? [...acc, idx] : acc, []);
        
        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const computerChoice = emptyCells[randomIndex];
            boardCopy[computerChoice] = 'X';
            setBoard(boardCopy);
        }
    };

    const handleClick = (i) => {
        if (gameOver || board[i] || calculateWinner(board)) return;

        const boardCopy = [...board];
        boardCopy[i] = 'O';
        setBoard(boardCopy);

        // Check if player won
        if (calculateWinner(boardCopy)) {
            setPlayerScore(prevScore => prevScore + 1);
            setGameOver(true);
            return;
        }

        // Check for draw
        if (boardCopy.every(square => square)) {
            setGameOver(true);
            return;
        }

        // Computer's turn
        setTimeout(() => {
            const newBoardCopy = [...boardCopy];
            computerMove(newBoardCopy);
        }, 300);
    };

    const winner = calculateWinner(board);
    const status = winner 
        ? `Winner: ${winner === 'O' ? 'Player' : 'Computer'}`
        : board.every(square => square) 
            ? "It's a draw!"
            : "Your turn (O)";

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setGameOver(false);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Tic Tac Toe</h2>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>{status}</div>
            <div style={{ fontSize: '20px', marginBottom: '10px' }}>Player Score: {playerScore}</div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 100px)',
                gap: '5px',
                margin: '0 auto',
                width: '305px'
            }}>
                {board.map((square, i) => (
                    <button
                        key={i}
                        style={{
                            height: '100px',
                            fontSize: '24px',
                            backgroundColor: '#fff',
                            border: '2px solid #999'
                        }}
                        onClick={() => handleClick(i)}
                    >
                        {square}
                    </button>
                ))}
            </div>
            <button
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px'
                }}
                onClick={resetGame}
            >
                Reset Game
            </button>
        </div>
    );
};

export default TicTacToe;
