import React from "react";

function Question(props) {
  console.log(props)
  return (
    <button value={props.answer}>{props.answer}</button>
  );
}

export default Question;
