import { Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Home = () => {
    const { user, logOut } = useAuth();
    let lastLogin = user.metadata.lastSignInTime;
    let text = lastLogin.split(' ');
    let voice1 = text.slice(0, 4);
    const date = voice1.join(' ');
    let voice2 = text.slice(4, 6);
    const time = voice2.join(' ')
    console.log(user)

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
                            <ChevronRightIcon sx={{ color: '#80D8F7' }} /> &nbsp; <Typography variant="h5"> Login Info</Typography>
                        </Box>
                        <Box className="displayActivity">
                            <Box sx={{ fontSize: '1.15em', my: 2, display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#80D8F7' }}>{user.displayName} last logged in </span>
                                <span>{date} at {time}</span>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Home;