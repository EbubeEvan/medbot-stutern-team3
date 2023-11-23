import React from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import colors from '../Theming/Colors'
import MainLayout from '../MainLayout'


function WelcomePage() {
    const navigate = useNavigate();

    const navigateToNewPage = (page: string) => {
        navigate(`/${ page }`);
    };
  
  
    return (
        <MainLayout>
            <Box sx={{ minHeight: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <main>
                    <Box sx={{ textAlign: "center"}}>
                        <Typography variant="h4" sx={{ fontWeight: "400", fontSize: "32px" }} gutterBottom>
                            Welcome to Medbot
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: "400", fontSize: "18px" }} gutterBottom>
                            Your easy health assistant
                        </Typography>

                        <Typography variant="body1" sx={{ fontWeight: "400", fontSize: "18px", py: 3 }}>
                            When you create your  account with Medbot you will 
                            be able to see and save your conversation history
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center", mt: 2}}>
                        <Button 
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: colors.primary,
                                "&:hover": {
                                    bgcolor: colors.primary
                                },
                                maxWidth: "75%",
                                borderRadius: 5
                            }}
                            onClick={() => navigateToNewPage("auth/login")}
                        > Login </Button>

                        <Button 
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: colors.primary,
                                "&:hover": {
                                    bgcolor: colors.primary
                                },
                                maxWidth: "75%",
                                my: 2,
                                borderRadius: 5
                            }}
                            onClick={() => navigateToNewPage("auth/signup")}
                        > Get Started </Button>

                        <Button 
                            variant="outlined"
                            fullWidth
                            sx={{
                                // bgcolor: colors.primary,
                                // "&:hover": {
                                //     bgcolor: colors.primary
                                // },
                                maxWidth: "75%",
                                borderRadius: 5
                            }}
                            onClick={() => navigateToNewPage("home")}
                        > Skip </Button>

                    </Box>
                </main>
            </Box>
        </MainLayout>
    )
}

export default WelcomePage