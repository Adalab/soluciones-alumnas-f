import React from 'react';

function Collapsible(props) {
    return (
        <div className="collapsible" id={props.id} onClick={props.openPanel}>
            <h2>{props.name}</h2>
            <i className={`${props.symbol}`}></i>
        </div>
    );
}

export default Collapsible;