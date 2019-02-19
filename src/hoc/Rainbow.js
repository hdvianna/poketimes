import React from 'react';

const Rainbow = (DecoratedComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    const className = randomColour.concat('-text');

    return (props) => {        
        return (
            <div className={className}>
                <DecoratedComponent {...props}/>
            </div>
        )
    };
};

export default Rainbow;

