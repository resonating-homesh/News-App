import React, { PureComponent } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';



const Textform = (props) => {
    const [text, setText] = useState('Enter the text here');

    const handleUpClick = () =>
    {
        // console.log("Uppercase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleOnChange = (event) =>
    {
        // console.log("It was changed");
        setText(event.target.value);
    };
    const copy = (event) =>
    {
        setText(navigator.clipboard.writeText(this.state.textToCopy)) ;
    }
    return (
        <>
            <div className='container my-5'>
                <div className="form-group">
                  <h1> {props.heading} </h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value = {text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <div className='btnset'>
                <button className='btn btn-primary my-3 mx-3' onClick={handleUpClick} >Convert to Uppercase</button>
                <button className='btn btn-primary my-3' onClick= {copy} > Copy </button>
                </div>
            </div>
            <div className='container'>
                <h1>Your text summary</h1>
                <p>
                    {text.split(" ").length} words and {text.length} characters!
                </p>
                <h2>
                    Preview
                </h2>
                <p> {text} </p>
            </div>

        </>
    )
}

export default Textform