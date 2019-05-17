import React from 'react';

function Content(props) {
    return (
        <div className={`col ${props.open}`}>
            <p>{props.from}</p>
        </div>
    );
}

export default Content;