import React, { useState, useEffect } from "react";
import intervals from "../../Music/Intervals";
import { FormBtn } from "../Form";
import Question from "../Question";

function IntervalForm() {
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        initialState();
    }, [])

    function initialState() {
        let randomNum = Math.floor(Math.random()*intervals.length);
        setFormObject((formObject) => ({...formObject, answer: intervals[randomNum].name, answerSemiTones: intervals[randomNum].semiTones}));
    }
  
    // Handles updating component state when the user types into the input field
    
    function handleChange(event) {
        const { value } = event.target;
        setFormObject((formObject) => ({...formObject, interval: value}));
    }

    function handleSubmit(event) {
        if (formObject.answerName === formObject.interval) {
            alert("correct");
        } else {
            alert("incorrect");
        };
        let randomNum = Math.floor(Math.random()*intervals.length);
        setFormObject((formObject) => ({...formObject, answerName: intervals[randomNum].name, answerSemiTones: intervals[randomNum].semiTones}));
        event.preventDefault();
    }
    
    return (
        <div>
            
            <Question answer={formObject.answerSemiTones} />

            <form onSubmit={handleSubmit}>
            <label>
                Choose Your Interval:
                <select className="browser-default" value={formObject.value} onChange={handleChange}>
                    <option disabled selected>Choose Your Interval</option>

                    {intervals.map(interval => (
                        <option value={interval.name}>
                            {interval.name}
                        </option>
                    ))}
                    
                </select>
            </label>

            <FormBtn type="submit" value="Submit" disabled={!(formObject.interval )}>
                Submit Answer
            </FormBtn>

            </form>
        </div>
    );
}
  
  export default IntervalForm;