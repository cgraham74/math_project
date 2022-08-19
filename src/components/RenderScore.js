import React from 'react';


export default function RenderScore(props) {
    return (
        <p>
        Problem: <span className="currentProblem">{props.problemCounter}</span>/10 | Score: <span className="currentScore">{props.score}</span>
        </p>

    )
}
