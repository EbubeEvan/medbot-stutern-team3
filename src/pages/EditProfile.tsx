import React from 'react';
import HeaderComponent from '../components/Header';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';

// import ChatInputComponent from '../components/ChatInput';
import colors from "../Theming/Colors";
import sizes from "../Theming/sizes";

import Box from "@mui/material/Box";
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FooterComponent from '../components/Footer';
import styles from './auth/styles.module.css';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DateField } from '@mui/x-date-pickers/DateField';


const drawerWidth = sizes.drawerWidth || 240;

function EditProfilePage() {
    // const [openMsgResponse, setOpenMsgResponse] = useState({
    //     display: false,
    //     status: false,
    //     snackbar: false,
    //     message: ""
    // });
    // const [isSubmitting, setIsSubmitting] = useState(false);

    

    const {
        register,
        handleSubmit,
        reset,
        // setValue,
        formState: { 
            errors, isValid, isSubmitting, isSubmitted
        },
    } = useForm<any>({ mode: "onTouched" });


    const onSubmit = (formData: any) => {
        console.log(formData);
        // setIsSubmitting(true);

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

                <Typography variant='h4' textAlign="center" my={3}>Profile Edit</Typography>

                <form noValidate onSubmit={ handleSubmit(onSubmit) } style={{ width: "85%", margin: "auto" }}>
                    <Box marginBottom="15px">
                        <TextField variant="outlined" fullWidth 
                        id="name" label="Full Name(s)" 
                        inputMode="text" type="text"
                        error={ errors.name ? true : false }
                        { 
                            ...register(
                            'name',
                            {
                                required: true,
                                minLength: 4
                            }
                            )
                        }
                        />

                        <div className={ styles.errorContainer }>
                        {
                            errors.name && errors.name.type === "required" && (
                            <div className={`${ styles.formError }`}>Please enter your full name.</div>
                            )
                        }

                        {
                            errors.name && errors.name.type === "minLength" && (
                            <div className={`${ styles.formError }`}>Entered character is too short for a person's name.</div>
                            )
                        }

                        </div>
                    </Box>

                    <Box marginBottom="15px">
                        <TextField variant="outlined" fullWidth 
                        id="phoneNumber" label="Phone Number" 
                        inputMode="tel" type="text"
                        error={ errors.phoneNumber ? true : false }
                        { 
                            ...register(
                            'phoneNumber',
                            {
                                required: true,
                                minLength: 11,
                                maxLength: 11
                            }
                            )
                        }
                        />

                        <div className={ styles.errorContainer }>
                        {
                            errors.phoneNumber && errors.phoneNumber.type === "required" && (
                            <div className={`${ styles.formError }`}>Please enter your phone number.</div>
                            )
                        }

                        {
                            errors.phoneNumber && (errors.phoneNumber.type === "minLength" || errors.phoneNumber.type === "maxLength") && (
                            <div className={`${ styles.formError }`}>Please enter a valid phone number.</div>
                            )
                        }

                        </div>
                    </Box>

                    <Box marginBottom="15px">
                        <TextField variant="outlined" fullWidth 
                        id="email" label="Email Address" 
                        inputMode="email" type="email"
                        error={ errors.email ? true : false }
                        { 
                            ...register(
                            'email',
                            {
                                required: true,
                                // pattern: "[a-zA-Z0-9 ]+$",
                                pattern: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
                                minLength: 4
                            }
                            )
                        }
                        />

                        <div className={ styles.errorContainer }>
                        {
                            errors.email && errors.email.type === "required" && (
                            <div className={`${ styles.formError }`}>Please enter your email address.</div>
                            )
                        }

                        {
                            errors.email && errors.email.type === "minLength" && (
                            <div className={`${ styles.formError }`}>Please enter a valid email address.</div>
                            )
                        }

                        {
                            errors.email && errors.email.type === "pattern" && (
                            <div className={`${ styles.formError }`}>Please enter a valid email address.</div>
                            )
                        }
                        </div>
                    </Box>

                    <Box marginBottom="15px">
                        <TextField variant="outlined" fullWidth 
                        id="gender" label="Gender" 
                        type="gender"
                        error={ errors.gender ? true : false }
                        { 
                            ...register(
                                'gender',
                                {
                                    required: true,
                                    // pattern: "[a-zA-Z0-9 ]+$",
                                    minLength: 4
                                }
                            )
                        }
                        />

                        <div className={ styles.errorContainer }>
                            {
                                errors.gender && errors.gender.type === "required" && (
                                    <div className={`${ styles.formError }`}>Please enter your gender.</div>
                                )
                            }
                        </div>
                    </Box>

                    <Box marginBottom="15px">
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
                                        label="Date of Birth"
                                        // onAccept={(value) => { onAcceptDOB(value) }} 
                                    />
                                </DemoItem>
                            </DemoContainer>

                        </LocalizationProvider>
                    </Box>

                    <Box marginBottom="15px">
                        <TextField variant="outlined" fullWidth  
                        type="password" inputMode="text"
                        id="password" label="Password" 
                        error={ errors.password ? true : false }
                        { 
                            ...register(
                            'password',
                            {
                                required: true,
                                minLength: 4
                            }
                            )
                        }
                        />

                        <div className={ styles.errorContainer }>
                        {
                            errors.password && errors.password.type === "required" && (
                            <div className={`${ styles.formError }`}>Please enter your password</div>
                            )
                        }

                        {
                            errors.password && errors.password.type === "minLength" && (
                            <div className={`${ styles.formError }`}>Incorrect password.</div>
                            )
                        }
                        </div>
                    </Box>

                    <Box>
                        <Button variant="contained" 
                        className={styles.btn} color="success"
                        fullWidth type="submit" 
                        disabled={ !isValid || isSubmitting } 
                        >
                            Update
                        </Button>
                    </Box>
                </form>
                
            </Box>

            <footer style={{ marginTop: "75px" }}>
                <FooterComponent />
            </footer>
        </main>

    )
}

export default EditProfilePage