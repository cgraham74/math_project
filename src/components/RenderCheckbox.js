import React, { useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer"
let operators = [null, null, null, null];

export function RenderCheckbox() {
  const [addition, setAddition] = useState(false);
  const [subtraction, setSubtraction] = useState(false);
  const [multiplication, setMultiplication] = useState(false);
  const [division, setDivision] = useState(false);

  /**
   * Adding operands to the array based on which check boxes are used
   * In the event a user changes their mind and unchecks a box - the value is removed from the operators array
   */
  const setAdd = () => {
    setAddition(!addition);
    if (!addition) {
      operators[0] = "+";
    }

    if (addition) {
      operators[0] = null;
    }
    console.log(operators);
  };

  const setSub = () => {
    setSubtraction(!subtraction);
    if (!subtraction) {
      operators[1] = "-";
    }

    if (subtraction) {
      operators[1] = null;
    }
    console.log(operators);
  };

  const setMult = () => {
    setMultiplication(!multiplication);
    if (!multiplication) {
      operators[2] = "*";
    }

    if (multiplication) {
      operators[2] = null;
    }
    console.log(operators);
  };
  const setDiv = () => {
    setDivision(!division);
    if (!division) {
      operators[3] = "/";
    }

    if (division) {
      operators[3] = null;
    }
    console.log(operators);
  };

  /**
   * Creating checkbox elements
   */
  return (
    <div id="checkboxHolder" className="operands">
      <form>
        <label>
          <input
            type="checkbox"
            checked={addition}
            onChange={setAdd}
            className="box"
            name="Addition"
            value="+"
          />
          Addition
        </label>
        <label>
          <input
            type="checkbox"
            checked={subtraction}
            onChange={setSub}
            className="box"
            name="Subtraction"
            value="-"
          />
          Subtraction
        </label>
        <label>
          <input
            type="checkbox"
            checked={multiplication}
            onChange={setMult}
            className="box"
            name="Multiplication"
            value="*"
          />
          Multiplication
        </label>
        <label>
          <input
            type="checkbox"
            checked={division}
            onChange={setDiv}
            className="box"
            name="Division"
            value="/"
          />
          Division
        </label>
      </form>
    </div>
  );
}

export default function StartGame() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
