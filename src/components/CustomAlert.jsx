import React from "react";
import { Alert, AlertTitle } from '@material-ui/lab/';
import Fade from '@material-ui/core/Fade';
import Snackbar from '@mui/material/Snackbar';


function CustomAlert(props) {
    return <Snackbar anchorOrigin={{vertical:"top",horizontal:"right"}} open={props.isShow} autoHideDuration={6000} >
        <Fade in={props.isShow} timeout={{ enter: 1000, exit: 1000 }}>
            <Alert variant={props.variant} severity={props.severity}>
                <AlertTitle>{props.title}</AlertTitle>
                {props.message}</Alert>
        </Fade>
    </Snackbar>
};

export default CustomAlert;