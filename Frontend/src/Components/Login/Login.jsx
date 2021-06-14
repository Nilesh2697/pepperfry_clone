import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import {Register} from "./Register";
import {useDispatch,useSelector} from "react-redux";
import { login, loginWithFacebook, loginWithGoogle, toggle } from '../../Redux/FireAuth/fireAction';
import {Redirect} from "react-router-dom";

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
    position: 'absolute',
    width: 670,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,3,0,0),
  },
}));

const inState = {
  email: "",
  password: "",
};


const imageUrl="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg";

export function Login() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

  const [state,setState]=  React.useState(inState);
  const dispatch =useDispatch();
  const isAuth= useSelector(state=>state.fireReducer.isAuth)
  const isError= useSelector(state=>state.fireReducer.isError)
  const isMessage = useSelector(state=>state.fireReducer.isMessage)

  const handleChange=(e)=>{
      const {value,name} = e.target;
      setState({...state,[name]:value})
  }
  const registerToggle = useSelector(state=>state.fireReducer.register_page);
  
  
  // React.useEffect(()=>{
      
  // },[isMessage,isError])


  const handleSubmit=(e)=>{
    e.preventDefault();
     dispatch(login(state))
  }

  const handleToggleRegister=()=>{
    dispatch(toggle())
  }

 const handleLoginWithGoogle=()=>{
     dispatch(loginWithGoogle())
 }

const handleLoginWithFacebook=()=>{
    dispatch(loginWithFacebook())
}
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{ display: "flex" }}>
        <div  style={{ width: 300,marginTop:-14,height:520,marginBottom:0 ,backgroundImage:`url(${imageUrl})`}}>
          <h4 style ={{textAlign:"center",marginTop:"10%"}}>Log In</h4>
          <p style ={{textAlign:"center",color:"#ef6630"}}>You Will Be Able To Track <br/>Your Order, Use Wishlist & More.</p>
        </div>
        <div>
          <CloseIcon
            style={{ marginLeft: 330, cursor: "pointer" }}
            onClick={handleClose}
          />
          {isError?<p>{isMessage}</p>:null}
          <form onSubmit={handleSubmit}>
            <div style={{ marginLeft: 30, width: 300 }}>
              <div style={{ display: "flex" }}>
                <TextField
                  id="standard-basic"
                  label="email"
                  color="secondary"
                  name="email"
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
                  LOGIN USING OTP
                </p>
              </div>
              <TextField
                id="standard-basic"
                fullWidth
                label="Password"
                color="secondary"
                name="password"
                onChange={handleChange}
              />
              <Button
                fullWidth
                style={{ marginTop: 30, height: 45, background: "#ef6630" }}
                variant="contained"
                color="secondary"
                type="submit"
              >
                LOGIN
              </Button>           
            </div>
          </form>
          <div style={{ marginLeft: 30, width: 300 }}>
          <p style={{ fontSize: 12,  marginTop: 6 }}>
             <u>Forgot Password</u>
              </p>
              <Button
                fullWidth
                variant="outlined"
                style={{
                  color: "#ef6630",
                  fontSize: 12,
                  marginTop: 90,
                  height: 40,
                }}
                onClick={handleToggleRegister}
              >
                New to Pepperfry? Register Here.
              </Button>
            </div>
          <div style={{ display: "flex", width: 300, marginTop: 20 }}>
                <p
                  style={{
                    fontSize: 12,
                    marginLeft: 70,
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
                    cursor:"pointer"
                  }}
                  onClick={handleLoginWithFacebook}
                  src="https://ii1.pepperfry.com/images/social_login_fb_2x.png"
                  alt="facebook"
                />
                <img
                  style={{
                    width: 30,
                    height: 30,
                    marginTop: 6,
                    marginLeft: 20,
                    cursor:"pointer"
                  }}
                  onClick={handleLoginWithGoogle}
                  src="https://ii1.pepperfry.com/images/social_login_google_2x.png"
                  alt="google"
                />
              </div>
        </div>
      </div>
    </div>
  );
 
  if(isAuth){
   return <Redirect to={"/"} push/>
  }
 
  return !registerToggle?(
    <div>
      <p type="p" style={{margin:0}} onClick={handleOpen}>
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
  ):<Register/>
}
