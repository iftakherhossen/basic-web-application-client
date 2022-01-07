import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Snackbar, Alert, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import CloseIcon from '@mui/icons-material/Close';

const Registration = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { registerUser, loading, authError } = useAuth();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData };
        newRegistrationData[field] = value;
        setRegistrationData(newRegistrationData);
        console.log(newRegistrationData);
    }
    const handleRegister = e => {
        registerUser(registrationData.fName, registrationData.lName, registrationData.email, registrationData.phone, registrationData.password, navigate);
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
                                <Link to="/" className="link">Login</Link> or <Link to="/newUserRegistration" className="link active" >Registration</Link>
                            </Typography>
                            <Box className="regContainer">
                                <Box className="txtFieldWrapper">
                                    {!loading && <form onSubmit={handleRegister} sx={{ mt: 2 }}>
                                        <TextField
                                            id="standard-fname"
                                            type="name"
                                            label="First Name"
                                            required
                                            name="fName"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                            sx={{ mb: 2, width: 1 }}
                                        />
                                        <TextField
                                            id="standard-lname"
                                            type="name"
                                            label="Last Name"
                                            required
                                            name="lName"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                            sx={{ mb: 2, width: 1 }}
                                        />
                                        <TextField
                                            id="standard-email"
                                            type="email"
                                            required
                                            name="email"
                                            label="Email Address"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                            sx={{ mb: 2, width: 1 }}
                                        />
                                        <TextField
                                            id="standard-phone"
                                            type="tel"
                                            required
                                            name="phone"
                                            label="Phone Number"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                            sx={{ mb: 2, width: 1 }}
                                        />
                                        <TextField
                                            id="standard-password"
                                            type="password"
                                            required
                                            name="password"
                                            label="Password"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                            sx={{ mb: 3, width: 1 }}
                                        />
                                        <Button className="btn" type="submit">Register</Button>
                                    </form>}
                                </Box>
                            </Box>
                            {loading && <CircularProgress />}
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} action={action}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    User Created Successfully!
                                </Alert>
                            </Snackbar>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} action={action}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    {authError}
                                </Alert>
                            </Snackbar>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Registration;