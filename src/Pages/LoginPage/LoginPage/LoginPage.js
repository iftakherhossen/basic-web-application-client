import React from 'react';
import { Container, Grid } from '@mui/material';
import Login from '../../../Component/Login'

const LoginPage = () => {
    return (
        <div className="wrapper">
            <Container maxWidth="sm">
                <Grid container columns={{ xs: 12, sm: 9, md: 6 }}>
                    <Grid item xs={12} sm={9} md={6}>
                        <Login />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default LoginPage;