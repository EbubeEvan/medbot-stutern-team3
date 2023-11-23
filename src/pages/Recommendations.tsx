// import React from 'react'
import MainLayout from '../MainLayout'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import colors from '../Theming/Colors'
import ChatInputComponent from '../components/ChatInput'

function Recommendations() {
    return (
        <MainLayout>
            <Box sx={{ width: "100%" }}>
                <Typography variant='h5' px={2} color={colors.secondary}>
                    {/* Recommendations */}
                    Medical advice 
                </Typography>

                <Box my={2}>
                    <Typography variant='body2' component="div">
                        Given the circumstances described, 
                        it's possible that the lower back pain 
                        could be related to prolonged sitting and poor posture, 
                        especially if the symptoms have started recently.  
                        Here's what I might suggest:
                        
                        <ol>
                            <li>
                                Posture and Ergonomics:
                                
                                <ul>
                                    <li>
                                        Try improving your sitting posture and incorporating breaks to stretch and move around during long work hours.
                                    </li>
                                    <li>
                                        Ensure the workstation is ergonomically designed to reduce strain on the lower back.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                Physical Activity:

                                <ul>
                                    <li>
                                        Incorporating regular physical activity into your routine, such as exercises to strengthen the core and lower back muscles.
                                    </li>
                                </ul>

                            </li>

                            <li>
                                Weight Management:
                                <ul>
                                    <li>
                                        You need to imbibe a healthy weight management lifestyle through diet and exercise as having an inappropriate  BMI can potentially be the cause of a back ache.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                Over-the-Counter Pain Relief:
                                
                                <ul>
                                    <li>
                                        you can get pain relievers or anti-inflammatory medications to alleviate discomfort, following the recommended dosage.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                Heat or Cold Therapy:

                                <ul>
                                    <li>
                                        Applying heat or cold packs to the affected area to help relieve pain.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                Monitoring Symptoms:

                                <ul>
                                    <li>
                                        Monitor the symptoms closely and seek in-person medical attention if there are any changes in the nature or intensity of the pain.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                Professional Evaluation:

                                <ul>
                                    <li>
                                        It is importance to consult with a healthcare professional for a comprehensive evaluation, especially if the pain persists or worsens.
                                    </li>
                                </ul>
                            </li>

                            <li>
                                Consideration of Urgent Concerns:

                                <ul>
                                    <li>
                                        If the pain is not associated with any alarming symptoms (such as numbness, weakness, or bowel/bladder changes), and if it doesn't pose an urgent concern, you may continue with lifestyle modifications and monitor your symptoms.
                                    </li>
                                </ul>
                            </li>
                        </ol>

                    </Typography>
                </Box>

                {/* <Box>
                    <ChatInputComponent />
                </Box> */}
            </Box>
        </MainLayout>
    )
}

export default Recommendations