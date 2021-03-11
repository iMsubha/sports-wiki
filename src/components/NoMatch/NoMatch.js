import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <Link to="/home">Home</Link>
            <h2 className="mt-5">OOPS!</h2>
            <h4>404 Not Found</h4>
            <p>Sorry, an error has occured, Requested page not found!</p>
        </div>
    );
};

export default NoMatch;