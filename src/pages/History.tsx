import HeaderComponent from '../components/Header';

// import ChatInputComponent from '../components/ChatInput';
import colors from "../Theming/Colors";
import sizes from "../Theming/sizes";

import Box from "@mui/material/Box"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// import styles from './auth/styles.module.css';
import IconButton from '@mui/material/IconButton';

import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import FooterComponent from '../components/Footer';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const drawerWidth = sizes.drawerWidth || 240;

function HistoryPage() {
    return (

        <main>
            <nav>
                <HeaderComponent />
            </nav>
            
            <Box 
                sx={{
                    // width: { sm: `calc(100% - ${sizes.drawerWidth - 20}px)` }, 
                    ml: { sm: `${sizes.drawerWidth + 20}px` }, 
                    mx: `10px`, 
                    textAlign: "left",
                    pt: "70px",
                }}
            >
                <Typography variant='h4' my={3} align='center'>
                    History
                </Typography>
                
                <List sx={{ 
                    width: '100%', 
                    bgcolor: 'background.paper',
                    // display: _profile[currentScreen].screen != "dob" ? "none" : "initial"
                }}>

                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="arrow">
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        }
                        sx={{
                            borderBottom: "1px solid #ccc"
                        }}
                    >
                        <ListItemText
                            primary="Single-line item"
                        />
                    </ListItem>

                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="arrow">
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        }
                        sx={{
                            borderBottom: "1px solid #ccc"
                        }}
                    >
                        <ListItemText
                            primary="Single-line item"
                        />
                    </ListItem>

                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="arrow">
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        }
                        sx={{
                            borderBottom: "1px solid #ccc"
                        }}
                    >
                        <ListItemText
                            primary="Single-line item"
                        />
                    </ListItem>

                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="arrow">
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        }
                        sx={{
                            borderBottom: "1px solid #ccc"
                        }}
                    >
                        <ListItemText
                            primary="Single-line item"
                        />
                    </ListItem>

                </List>

            </Box>

            <footer style={{ marginTop: "75px" }}>
                <FooterComponent />
            </footer>
        </main>
    )
}

export default HistoryPage