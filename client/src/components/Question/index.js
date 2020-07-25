import React from "react";

const notes = ["C4", "Csharp4", "D4", "Dsharp4", "E4", "F4", "Fsharp4", "G4", "Gsharp4", "A4", "Asharp4", "B4", "C5"]

function playInterval(e) {
  let note = notes[e.target.attributes.semitones.textContent]
  let href = "/Music/Notes/" + note + ".mp3"

  let C = new Audio("/Music/Notes/C4.mp3");
  let interval = new Audio(href);

  C.play();
  setTimeout(function(){ interval.play(); }, 1000);
  ;
};

function Question(props) {
  return (
    <button semitones={props.answer} onClick={playInterval}> Play Interval! </button>
  );
}

export default Question;
