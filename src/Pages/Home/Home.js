import { Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Home = () => {
    const { user, logOut } = useAuth();
    const lastLogin = user;
    console.log(lastLogin)
    
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
                            <ChevronRightIcon sx={{ color: '#80D8F7'}} /> &nbsp; <Typography variant="h5"> Login Info</Typography>
                        </Box>
                        <Box className="displayActivity">
                            <h3>● <span style={{ color: '#80D8F7' }}>{user.displayName}</span> last login at</h3>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Home;