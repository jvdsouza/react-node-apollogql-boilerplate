import React, { useState, useEffect } from 'react';

function PingComponent() {
    const [ping, setPing] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENPOINT}/ping`)
            .then(response => response.json())
            .then(jsonBody => setPing(jsonBody))
            .catch(error => setPing(error));
    });

    return (
        <div>
            <p>{ ping }</p>
        </div>
    )
}

export default PingComponent;