import { useState } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import styles from './../pages/auth/styles.module.css';
import InputAdornment from "@mui/material/InputAdornment";
import colors from "../Theming/Colors";

function ChatInputComponent() {
    const [openMsgResponse, setOpenMsgResponse] = useState({
        display: false,
        status: false,
        snackbar: false,
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        // setValue,
        formState: { 
            errors, isValid
        },
    } = useForm<any>({ mode: "onTouched" });
        
    const onSubmit = (formData: any) => {
        setIsSubmitting(true);


        // save2FirestoreDB("reachUs", newContactMsg).then(
        //     (res: any) => {
        //         // console.log(res);
                
        //         setOpenMsgResponse({
        //             display: true,
        //             status: true,
        //             snackbar: true,
        //             message: "Thanks, for reaching out to us, we've glad to hear from you and will respond ASAP."
        //         });
        //         reset();
        //         setIsSubmitting(false);
        //     },
        //     (err: any) => {
        //         console.log(err);
                
        //         setOpenMsgResponse({
        //             display: true,
        //             status: false,
        //             snackbar: true,
        //             message: "Ooops, an error occurred, while trying to submit your message, please do try again!"
        //         });
        //         setIsSubmitting(false);
        //     }
        // );
    }


    return (
        <form noValidate onSubmit={ handleSubmit(onSubmit) } style={{ width: "100%" }}>
            <Box>
                <TextField variant="outlined" fullWidth 
                    id="chat" label="Type in your name" 
                    inputMode="text" type="text"
                    sx={{ borderRadius: 3 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Box sx={{ bgcolor: colors.primary, p: 1, borderRadius: 3 }}>
                                    <SendOutlinedIcon sx={{ transform: "rotate(-35deg)", color: "white" }} />
                                </Box>
                            </InputAdornment>
                        ),
                    }}
                    error={ errors.name ? true : false }

                    { 
                        ...register(
                            'chat',
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
                            <div className={`${ styles.formError }`}>Type in your name.</div>
                        )
                    }

                    {
                        errors.name && errors.name.type === "minLength" && (
                            <div className={`${ styles.formError }`}>Entered character is too short.</div>
                        )
                    }
                </div>
            </Box>
        </form>
    )
}

export default ChatInputComponent