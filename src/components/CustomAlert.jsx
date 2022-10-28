import React from "react";
import { Alert, AlertTitle } from '@material-ui/lab/';
import Fade from '@material-ui/core/Fade';

const customAlertStyle = {
    margin: "1% auto",
    display: "flex",
    justifyContent: "end",
    width: "auto"
}


function CustomAlert(props) {
    return <div style={customAlertStyle}>
        <Fade in={props.isShow} timeout={{ enter: 1000, exit: 1000 }}>
            <Alert variant={props.variant} severity={props.severity}>
            <AlertTitle>{props.title}</AlertTitle>
            {props.message}</Alert>
        </Fade>
    </div>
};

export default CustomAlert;