import React from 'react';

const validation = (props) => {
    
    let validationMessage = 'Text long enough';

    if (props.inputLenght <= 5) {
        validationMessage = 'Text too short';
    }
    
    
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
};

export default validation;

    // Using ternary operatior!!!
       {/*     <div>
            {
                props.inputLenght > 5 ?
                <p>Text long enough</p> :
                <p>Text is too short!</p>
            }
        </div> */}