import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
    registerUser,
    registerWithGoogle,
    registerWithFacebook,
    toggleToLogin,
} from "../../Redux/FireAuth/fireAction";
import { Login } from "./Login";
import { Redirect } from "react-router-dom";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

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
        width: 670,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 0, 0),
    },
}));

const inState = {
    first_name: "",
    last_name: "",
    gender: "",
    age: 0,
    dob: "",
    phone: "",
    email: "",
    password: "",
    address: {},
    cards: [],
    wishlist: [],
    cart: [],
    orders: [],
};
export function Register() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);

    const [state, setState] = React.useState(inState);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { value, name } = e.target;
        setState({ ...state, [name]: value });
    };
    const loginToggle = useSelector((state) => state.fireReducer.login_page);

    const isAuth = useSelector((state) => state.fireReducer.isAuth);

    const { email, password, first_name, phone } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            email !== "" ||
            password !== "" ||
            first_name !== "" ||
            phone !== ""
        ) {
            dispatch(registerUser(state));
        } else {
            alert("Please input all the fields");
        }
    };

    const handleToggleLogin = () => {
        dispatch(toggleToLogin());
    };

    const handleRegisterWithGoogle = () => {
        dispatch(registerWithGoogle(state));
    };

    const handleRegisterWithFacebook = () => {
        dispatch(registerWithFacebook(state));
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div style={{ display: "flex" }}>
                <div>
                    <img
                        style={{ width: 300, marginTop: -14, height: 520 }}
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021-reg-popup-banner_2x-31-may.jpg"
                        alt="logo"
                    />
                </div>
                <div>
                    <CloseIcon
                        style={{ marginLeft: 330, cursor: "pointer" }}
                        onClick={handleClose}
                    />

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginLeft: 30, width: 300 }}>
                            <TextField
                                id="standard-basic"
                                fullWidth
                                helperText="Required"
                                label="Name"
                                color="secondary"
                                name="first_name"
                                onChange={handleChange}
                            />
                            <div style={{ display: "flex" }}>
                                <TextField
                                    id="standard-basic"
                                    label="Mobile Number"
                                    color="secondary"
                                    name="phone"
                                    onChange={handleChange}
                                />
                                <p
                                    style={{
                                        margin: 0,
                                        fontSize: 10,
                                        fontWeight: "bold",
                                        marginTop: 20,
                                        marginLeft: 3,
                                        color: "#ef6630",
                                        cursor: "pointer",
                                    }}
                                >
                                    VERIFY WITH OTP
                                </p>
                            </div>
                            <TextField
                                id="standard-basic"
                                fullWidth
                                label="Email ID"
                                style={{ fontSize: 12 }}
                                color="secondary"
                                name="email"
                                type="email"
                                onChange={handleChange}
                            />
                            <TextField
                                id="standard-basic"
                                fullWidth
                                label="Password"
                                type="password"
                                color="secondary"
                                name="password"
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
                                Register
                            </Button>
                        </div>
                    </form>
                    <div style={{ marginLeft: 30, width: 300 }}>
                        <p
                            style={{
                                fontSize: 12,
                                textAlign: "center",
                                marginTop: 6,
                            }}
                        >
                            By registering you agree to our{" "}
                            <u>Terms & Conditions</u>
                        </p>
                        <Button
                            fullWidth
                            variant="outlined"
                            style={{
                                color: "#ef6630",
                                fontSize: 12,
                                marginTop: 30,
                                height: 40,
                            }}
                            onClick={handleToggleLogin}
                        >
                            Existing User? Log In
                        </Button>
                    </div>
                    <div style={{ display: "flex", width: 300, marginTop: 20 }}>
                        <p
                            style={{
                                fontSize: 12,
                                marginLeft: 80,
                                fontWeight: "bold",
                                color: "silver",
                                marginTop: 10,
                            }}
                        >
                            OR continue with{" "}
                        </p>
                        <img
                            style={{
                                width: 30,
                                height: 30,
                                marginTop: 6,
                                marginLeft: 20,
                                cursor: "pointer",
                            }}
                            onClick={handleRegisterWithFacebook}
                            src="https://ii1.pepperfry.com/images/social_login_fb_2x.png"
                            alt="facebook"
                        />
                        <img
                            style={{
                                width: 30,
                                height: 30,
                                marginTop: 6,
                                marginLeft: 20,
                                cursor: "pointer",
                            }}
                            onClick={handleRegisterWithGoogle}
                            src="https://ii1.pepperfry.com/images/social_login_google_2x.png"
                            alt="google"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    if (isAuth) {
        return <Redirect to={"/"} push />;
    }
    // console.log("LOGINTOGGLE ", loginToggle);
    console.log("In Register.jsx");

    return (
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
