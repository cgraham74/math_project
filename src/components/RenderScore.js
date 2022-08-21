import React from 'react';

export default function RenderScore(props){
    return (
        <>
        {!props.hide &&
        <p>
        Problem: <span className="currentProblem">{props.problemCounter}</span>/10
        | Score: <span className="currentScore">{props.score}</span>
        </p>}
        </>
    );
  }
