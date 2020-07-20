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
        setFormObject((formObject) => ({...formObject, answer: intervals[Math.floor(Math.random()*intervals.length)].name}));
    }
  
    // Handles updating component state when the user types into the input field
    
    function handleChange(event) {
        const { value } = event.target;
        setFormObject((formObject) => ({...formObject, interval: value}));
    }

    function handleSubmit(event) {
        console.log(formObject.answer + "===" + formObject.interval)
        if (formObject.answer === formObject.interval) {
            alert("correct");
        };
        setFormObject((formObject) => ({...formObject, answer: intervals[Math.floor(Math.random()*intervals.length)].name}));
        event.preventDefault();
    }
    
    return (
        <div>
            
            <Question answer={formObject.answer} />

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