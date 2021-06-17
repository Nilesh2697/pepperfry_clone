import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { Register } from "./Register";
import { useDispatch, useSelector } from "react-redux";
import {
    login,
    resetPassword,
    toggle,
    toggleToLogin,
    toggleToRegister,
} from "../../Redux/FireAuth/fireAction";
import { Redirect } from "react-router-dom";
import { Login } from "./Login";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 360,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 3, 0, 0),
    },
}));

export function ForgetPassword() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);

    const [email, setEmail] = React.useState("");
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.fireReducer.isAuth);
    const isError = useSelector((state) => state.fireReducer.isError);
    const isResetLoading = useSelector(
        (state) => state.fireReducer.isResetLoading,
    );
    const isMessage = useSelector((state) => state.fireReducer.isMessage);

    const registerToggle = useSelector(
        (state) => state.fireReducer.register_page,
    );
    const loginToggle = useSelector((state) => state.fireReducer.login_page);

    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(email));
        setEmail("");
    };
    console.log(email);
    console.log(isMessage);

    const handleToggleRegister = () => {
        dispatch(toggleToRegister());
    };

    const handleToggleToLogin = () => {
        dispatch(toggleToLogin());
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose1 = () => {
        setOpen(false);
        dispatch(toggleToLogin());
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div>
                <CloseIcon
                    style={{ marginLeft: 315, cursor: "pointer", fontSize: 30 }}
                    onClick={handleClose1}
                />
                {!isResetLoading ? (
                    <p style={{ marginLeft: 25, color: "green" }}>
                        {isMessage}
                    </p>
                ) : isError ? (
                    <p style={{ marginLeft: 25, color: "green" }}>
                        {isMessage}
                    </p>
                ) : null}

                <p
                    style={{
                        marginBottom: 0,
                        marginTop: -15,
                        marginLeft: 25,
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 25,
                    }}
                >
                    Forgot Password
                </p>
                <p
                    style={{
                        margin: 0,
                        fontSize: 14,
                        marginLeft: 25,
                        color: "black",
                    }}
                >
                    We will email you a link to reset it.
                </p>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginLeft: 30, width: 300, marginTop: 20 }}>
                        <TextField
                            id="standard-basic"
                            label="email"
                            color="secondary"
                            value={email}
                            fullWidth
                            type="email"
                            onChange={handleChange}
                        />
                        <Button
                            fullWidth
                            style={{
                                marginTop: 30,
                                height: 45,
                                background: "#ef6630",
                            }}
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            SEND
                        </Button>
                    </div>
                </form>
                <div style={{ marginLeft: 30 }}>
                    <p style={{ fontSize: 15, marginTop: 12, color: "black" }}>
                        Just remembered?{" "}
                        <span
                            style={{ color: "#ef6630", cursor: "pointer" }}
                            onClick={handleToggleToLogin}
                        >
                            Log In
                        </span>{" "}
                        Instead
                    </p>
                    <p
                        style={{
                            color: "black",
                            fontSize: 15,
                            marginBottom: 15,
                        }}
                    >
                        Don't have an account?{" "}
                        <span
                            style={{ color: "#ef6630", cursor: "pointer" }}
                            onClick={handleToggleRegister}
                        >
                            Register with us
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );

    if (isAuth) {
        return <Redirect to={"/"} push />;
    }
    //   return(
    //       <>
    //       </>
    //   )

    return registerToggle ? (
        <Register />
    ) : loginToggle ? (
        <Login />
    ) : (
        <div>
            <p type="p" style={{ margin: 0 }} onClick={handleOpen}>
                Login/Register
            </p>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
