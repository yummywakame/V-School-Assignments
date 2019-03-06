import React from 'react';

const Controls = props => {
    const { addOne } = props
    return (
        <div>
            <button onClick={ addOne }> + </button>
        </div>
    )
};

export default Controls;