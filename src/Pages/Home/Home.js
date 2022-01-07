import { Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Home = () => {
    const { user, logOut } = useAuth();
    // const lastLogin = user?.metadata?.lastSignInTime;

    return (
        <div>
            <Container>
                <Box>
                    <Box className="navBar">
                        <Box>
                            <Typography variant="h5">User Activity</Typography>
                            <Typography>Welcome, <span className="coloredTxt">{user.displayName}</span></Typography>
                        </Box>
                        <Box>
                            <Button className="logOutBtn" onClick={logOut}>Log Out</Button>
                        </Box>
                    </Box>
                    <Box className="activityWrapper">
                        <Box className="txtBox">
                            <ChevronRightIcon /> &nbsp; <Typography variant="h5"> Login Info</Typography>
                        </Box>
                        <Box className="displayActivity">
                            <h4>{user.displayName}</h4>
                            <h4>refat</h4>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Home;