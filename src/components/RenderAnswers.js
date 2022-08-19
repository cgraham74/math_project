import React from "react";

export default function RenderAnswers(props) {
 
  const answers = props.answers.map((answer) => {
    return <li>{answer}</li>
  
  })
  return (
    <section id="answers" className="show-hide">
      <ul>
        {answers}
        
      </ul>
    </section>
  );
}
