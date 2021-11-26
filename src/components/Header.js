import React from "react";

function Header({score, highScore}) {
    return (
        <div className = "header">
            <h1>Memory Game</h1>
            <div>
                <div><strong>Score: </strong>{score}</div>
                <div><strong>High Score: </strong>{highScore}</div>
            </div>
        </div>
    )
}

export default Header;