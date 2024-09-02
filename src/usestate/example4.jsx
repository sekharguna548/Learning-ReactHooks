// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
function  Form ()  {
    // Declare a state variable for the input text
    const [text, setText] = useState('');

    // Handle input changes
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="App">
            <h1>Real-Time Text Display</h1>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <p>You typed: {text}</p>
        </div>
    );
}

export default Form;
