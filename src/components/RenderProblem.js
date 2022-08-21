import React from 'react';

export default function RenderProblem(props) {
    return (
      <div className="expression">
        <p>
          {/* {props.firstNum} {props.operators} {props.secondNum} */}
          {props.firstNum} * {props.secondNum}
        </p>
      </div>
    );
  }