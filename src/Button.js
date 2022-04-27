import React from 'react';

function Button({name, disable}) {
    return (
        <button onClick={() => console.log({name})} disabled={disable}>
            {name}
        </button>
    );
}

export default Button;
