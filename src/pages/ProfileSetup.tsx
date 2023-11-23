import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';

import HeaderComponent from '../components/Header';
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

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Button from '@mui/material/Button';
import { updateProfileAsync } from '../state/slices/authSlice';


const drawerWidth = sizes.drawerWidth || 240;

function ProfileSetup() {
    // const [openMsgResponse, setOpenMsgResponse] = useState({
    //     display: false,
    //     status: false,
    //     snackbar: false,
    //     message: ""
    // });
    // const [isSubmitting, setIsSubmitting] = useState(false);

    
    const dispatch = useDispatch<AppDispatch>();
    // const authRedux = useSelector((state: RootState) => state.auth);
    const [currentScreen, setCurrentScreen] = useState(0)

    const [profile, setProfile] = useState({
        name: '', gender: '', dob: ''
    });

    const _profile = [
        {
            question: "Hi, I'm Medbot, what’s your name? ",
            screen: "name"
        },
        {
            question: `Great, ${ profile.name } are you male or female?`,
            screen: "gender"
        },
        {
            question: "What is your date of birth?",
            screen: "dob"
        }
    ]

    const {
        register,
        handleSubmit,
        reset,
        // setValue,
        formState: { 
            errors
        },
    } = useForm<any>({ mode: "onTouched" });

    const onAcceptDOB = (value: any) => {
        const d = `${value.$y}/${value.$M+1}/${value.$D}`

        setProfile({
            ...profile,
            dob: d,
        });

        setCurrentScreen(2);
        reset();

        // console.log(profile);
    }

    const onSubmit = (formData: any) => {
        // console.log(formData);
        // setIsSubmitting(true);

        switch (currentScreen) {
            case 0:
                setProfile({
                    ...profile,
                    name: formData.profile || profile.name,
                });

                setCurrentScreen(1);
                reset();
                break;
                
            case 1:
                setProfile({
                    ...profile,
                    gender: formData.profile || profile.gender,
                });

                setCurrentScreen(2);
                reset();
                break;
                
            case 2:
                setProfile({
                    ...profile,
                    dob: formData.profile || profile.dob,
                });

                setCurrentScreen(2);
                reset();

                console.log(profile);
                
                break;
                
            default:
                setProfile({
                    ...profile,
                    name: formData.profile || profile.name,
                });

                setCurrentScreen(1);
                reset();
                break;
        }
    }

    const submitProfile = () => {
        console.log(profile);


        dispatch(updateProfileAsync(profile));

        
    }
    

    let screens_;

    switch (currentScreen) {
        case 0:
            screens_ = (
                <List sx={{ 
                    width: '100%', 
                    bgcolor: 'background.paper',
                    display: _profile[currentScreen].screen != "name" ? "none" : "initial"
                }}>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <CircleIcon sx={{ color: colors.primary, fontSize: "3.7rem" }} />
                        </ListItemAvatar>

                        <ListItemText>
                            <Typography variant='h5'>
                                { _profile[currentScreen].question }
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    <ListItem alignItems="center" sx={ profile.name ? {} : { display: "none" } }>
                        <ListItemAvatar>
                            <Box p={2} textAlign="center" sx={{ color: "white" }} bgcolor={colors.primary} borderRadius={100} >
                                S
                            </Box>
                        </ListItemAvatar>

                        <ListItemText sx={{ color: colors.primary, pl: 2 }}>
                            { profile.name}
                        </ListItemText>
                    </ListItem>

                </List>
            );
            break;
        case 1:

            screens_ = (
                <List sx={{ 
                    width: '100%', 
                    bgcolor: 'background.paper',
                    display: _profile[currentScreen].screen != "gender" ? "none" : "initial"
                }}>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <CircleIcon sx={{ color: colors.primary, fontSize: "3.7rem" }} />
                        </ListItemAvatar>

                        <ListItemText>
                            <Typography variant='h5'>
                                { _profile[currentScreen].question }
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    <ListItem alignItems="center" sx={ profile.gender ? {} : { display: "none" } }>
                        <ListItemAvatar>
                            <Box p={2} textAlign="center" sx={{ color: "white" }} bgcolor={colors.primary} borderRadius={100} >
                                S
                            </Box>
                        </ListItemAvatar>

                        <ListItemText sx={{ color: colors.primary, pl: 2 }}>
                            { profile.gender}
                        </ListItemText>
                    </ListItem>

                </List>
            );
            break;
        case 2:
            screens_ = (
                <List sx={{ 
                    width: '100%', 
                    bgcolor: 'background.paper',
                    // display: _profile[currentScreen].screen != "dob" ? "none" : "initial"
                }}>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <CircleIcon sx={{ color: colors.primary, fontSize: "3.7rem" }} />
                        </ListItemAvatar>

                        <ListItemText>
                            <Typography variant='h5'>
                                { _profile[currentScreen].question }
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    

                    <ListItem sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "75%", mx: "auto" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                                    'MobileDatePicker',
                                ]}
                                sx={{ width: "100%" }}
                            >
                                <DemoItem>
                                    <MobileDatePicker 
                                        defaultValue={dayjs()}
                                        onAccept={(value) => { onAcceptDOB(value) }} 
                                    />
                                </DemoItem>
                            </DemoContainer>

                        </LocalizationProvider>

                        {/* <Link to="/" style={{ 
                            textDecoration: "none",
                            backgroundColor: colors.primary,
                            color: "white",
                            padding: "10px",
                            borderRadius: "20px",
                            width: "100%",
                            textAlign: "center",
                            marginTop: "20px"
                        }}>Send</Link> */}

                        <Button 
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: colors.primary,
                                "&:hover": {
                                    bgcolor: colors.primary
                                },
                                my: 2,
                                borderRadius: 5
                            }}
                            onClick={submitProfile}
                        > Send </Button>


                    </ListItem>
                </List>
            );
            break;
        default:
            screens_ = (
                <List sx={{ 
                    width: '100%', 
                    bgcolor: 'background.paper',
                    display: _profile[currentScreen].screen != "name" ? "none" : "initial"
                }}>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <CircleIcon sx={{ color: colors.primary, fontSize: "3.7rem" }} />
                        </ListItemAvatar>

                        <ListItemText>
                            <Typography variant='h5'>
                                { _profile[currentScreen].question }
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    <ListItem alignItems="center" sx={ profile.name ? {} : { display: "none" } }>
                        <ListItemAvatar>
                            <Box p={2} textAlign="center" sx={{ color: "white" }} bgcolor={colors.primary} borderRadius={100} >
                                S
                            </Box>
                        </ListItemAvatar>

                        <ListItemText sx={{ color: colors.primary, pl: 2 }}>
                            { profile.name}
                        </ListItemText>
                    </ListItem>

                </List>
            );
            break;
    }


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
                <Stack
                    justifyContent="center"
                    minHeight="70vh"
                >
                    { screens_ }
                </Stack>
            </Box>

            <footer style={{ marginTop: "125px" }}>
                <CssBaseline />

                <Box>
                    <Paper elevation={3}
                        sx={{ 
                            position: 'fixed',
                            bottom: 0, left: 0, right: 0, 

                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },
                        }}
                    >
                        <Box sx={{ px: 1, mb: 0.5, mt: 1, display: _profile[currentScreen].screen == "dob" ? "none": "block" }}>
                            <form noValidate onSubmit={ handleSubmit(onSubmit) } style={{ width: "100%" }}>
                                <Box>
                                    <TextField variant="outlined" fullWidth 
                                        id="profileSetup" label={`Type in your ${ _profile[currentScreen].screen }`}
                                        inputMode="text" type="text"
                                        sx={{ borderRadius: 3 }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="send" type='submit' size="small" 
                                                        sx={{ 
                                                            bgcolor: colors.primary, p: 1, 
                                                            borderRadius: 3,
                                                            "&:hover": {
                                                                bgcolor: colors.primary
                                                            }                            
                                                        }}
                                                    >
                                                        <SendOutlinedIcon fontSize="inherit" sx={{ transform: "rotate(-35deg)", color: "white" }} />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        error={ errors.name ? true : false }

                                        { 
                                            ...register(
                                                "profile",
                                                {
                                                    required: true,
                                                    minLength: 4
                                                }
                                            )
                                        }
                                    />
                                </Box>
                            </form>
                        </Box>

                        <BottomNavigation
                            showLabels
                            // value={value}
                            // onChange={(event, newValue) => {
                                // setValue(newValue);
                            //     hello(event, newValue);
                            // }}
                            sx={{ bgcolor: colors.bg, }}
                        >
                            <BottomNavigationAction sx={{ color: colors.primary }} label="Home" icon={<HomeOutlinedIcon />} />
                            <BottomNavigationAction sx={{ color: colors.primary }} label="Bot" icon={<SmsOutlinedIcon />} />
                            <BottomNavigationAction sx={{ color: colors.primary }} label="Notification" icon={<NotificationsOutlinedIcon />} />
                        </BottomNavigation>
                    </Paper>
                </Box>
            </footer>
        </main>
    )
}

export default ProfileSetup
