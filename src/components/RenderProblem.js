import React from "react";

export default function RenderProblem(props) {
  return (
    <>
      {!props.hide && (
        <div className="expression" id="problem">
          <p>
            {props.firstNum} {props.operator} {props.secondNum}
          </p>
        </div>
      )}
    </>
  );
}
