import React from 'react';

const Display = props => {
    const { num } = props
    // If the current num is greater than 10, throw an error.
    if(num > 10){
        throw new Error("I'm your error! I'm erroring so well!")
    }
    return <h1>{ num }</h1>
};

export default Display;