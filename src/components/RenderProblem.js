import React from "react";

export default function RenderProblem(props) {

  return (
    <div className="expression">
      <p>
        {props.firstNum} {props.operator} {props.secondNum}
      </p>
    </div>
    
  );
}
