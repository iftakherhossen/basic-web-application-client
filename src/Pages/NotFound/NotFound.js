import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="notFoundWrapper">
                <Typography variant="h2">404 Not Found!</Typography>
                <Link to="/home" className="link"><Button className="goBackBtn">Back to Home</Button></Link>
            </div>
        </div>
    );
};

export default NotFound;