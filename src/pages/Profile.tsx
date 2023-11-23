import HeaderComponent from '../components/Header';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';

// import ChatInputComponent from '../components/ChatInput';
import colors from "../Theming/Colors";
import sizes from "../Theming/sizes";

import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import CssBaseline from "@mui/material/CssBaseline";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
// import styles from './auth/styles.module.css';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

import Button from '@mui/material/Button';
import { updateProfileAsync } from '../state/slices/authSlice';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import FooterComponent from '../components/Footer';

const drawerWidth = sizes.drawerWidth || 240;


function ProfilePage() {
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
                <List sx={{ 
                    width: '100%', 
                    bgcolor: 'background.paper',
                    // display: _profile[currentScreen].screen != "dob" ? "none" : "initial"
                }}>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar alt="profile image" src="/etom.jpg" />
                        </ListItemAvatar>

                        <ListItemText>
                            <Typography variant='h5'>
                                Sunday Etom
                            </Typography>
                        </ListItemText>
                    </ListItem>

                </List>

                <Divider sx={{ p: "0.5px", bgcolor: colors.primary }} />


                <List sx={{ 
                    // width: '100%', 
                    bgcolor: 'background.paper',
                    // display: _profile[currentScreen].screen != "dob" ? "none" : "initial"
                }}>
                    <ListItem>
                        <ListItemButton sx={{ width: "100%" }}>
                            <ListItemIcon>
                                <PersonOutlineOutlinedIcon />
                            </ListItemIcon>

                            <ListItemText>
                                <Typography variant='body1'>
                                    Sunday Etom
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton sx={{ width: "100%" }}>
                            <ListItemIcon>
                                <MailOutlinedIcon />
                            </ListItemIcon>

                            <ListItemText>
                                <Typography variant='body1'>
                                    sundaywht@hmail.com
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton sx={{ width: "100%" }}>
                            <ListItemIcon>
                                <PhoneOutlinedIcon />
                            </ListItemIcon>

                            <ListItemText>
                                <Typography variant='body1'>
                                    +2348108786933
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemButton sx={{ width: "100%" }}>
                            <ListItemIcon>
                                <MaleOutlinedIcon />
                            </ListItemIcon>

                            <ListItemText>
                                <Typography variant='body1'>
                                    Male
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemButton sx={{ width: "100%" }}>
                            <ListItemIcon>
                                <DateRangeOutlinedIcon />
                            </ListItemIcon>

                            <ListItemText>
                                <Typography variant='body1'>
                                    25/12/2023
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                </List>

                <Box sx={{ textAlign: "center", py: 3 }}>
                    <Link to="/edit-profile"
                        style={{
                            textDecoration: "none",
                            maxWidth: "75%",
                            width: "100%",
                            // backgroundColor: colors.primary,
                            color: colors.primary,
                            padding: "15px",
                            border: `1px solid ${ colors.primary }`,
                            borderRadius: "10px"
                        }}
                    >
                        Edit Profile
                    </Link>
                </Box>

            </Box>

            <footer style={{ marginTop: "75px" }}>
                <FooterComponent />
            </footer>
        </main>
    )
}

export default ProfilePage