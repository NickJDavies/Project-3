import React, { useState, useEffect } from "react";

function IntervalForm() {
    const [formObject, setFormObject] = useState({})
  
    useEffect(() => {
    }, [])
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };

    
    function handleChange(event) {
        console.log(event.target.value)
        const { value } = event.target;
        setFormObject({...formObject, interval: value})
    }

    function handleSubmit(event) {
        alert('Your favorite flavor is: ' + formObject.interval);
        event.preventDefault();
    }
  
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Pick your favorite flavor:
            <select className="browser-default" value={formObject.value} onChange={handleChange}>
                <option disabled defaultValue>Choose your option</option>
                <option value="jojoo!">Grapefruit</option>
                <option value="jojoo!">Lime</option>
                <option value="jojoo!">Coconut</option>
                <option value="jojoo!">Mango</option>
            </select>
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
}
  
  export default IntervalForm;