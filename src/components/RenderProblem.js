import React from "react";

const RenderProblem = ({ hide, firstNum, operator, secondNum }) => {
  return !hide && (
    <div className="expression" id="problem">
      <p>
        {firstNum} {operator} {secondNum}
      </p>
    </div>
  );
};

export default RenderProblem;
