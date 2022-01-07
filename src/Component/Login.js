import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Snackbar, Alert, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import CloseIcon from '@mui/icons-material/Close';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const [open, setOpen] = useState(false);
    const { user, loginUser, loading, authError } = useAuth();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, navigate);
        setOpen(true);
        e.preventDefault();
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <div className="wrapper">
            <Container maxWidth="sm">
                <Grid container columns={{ xs: 12, sm: 9, md: 6 }}>
                    <Grid item xs={12} sm={9} md={6}>
                        <Box className="title">
                            <Typography variant="h4">
                                <Link to="/" className="link active">Login</Link> or <Link to="/newUserRegistration" className="link">Registration</Link>
                            </Typography>
                            <Box className="regContainer">
                                <Box className="txtFieldWrapper" sx={{ mt: 2 }}>
                                    <form onSubmit={handleLogin}>
                                        <TextField
                                            id="standard-email"
                                            name="email"
                                            type="email"
                                            required
                                            label="Email Address"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                            sx={{ mb: 2, width: 1 }}
                                        />
                                        <TextField
                                            id="standard-phone"
                                            type="password"
                                            name="password"
                                            required
                                            label="Password"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                            sx={{ mb: 3, width: 1 }}
                                        />
                                        <Button className="btn" type="submit">Login</Button>
                                    </form>
                                </Box>
                            </Box>
                            {loading && <CircularProgress />}
                            <Snackbar open={open} autoHideDuration={6000} action={action}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Welcome, {user.displayName}
                                </Alert>
                            </Snackbar>
                            {authError && <Snackbar open={open} autoHideDuration={6000} action={action}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    {authError}
                                </Alert>
                            </Snackbar>}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;