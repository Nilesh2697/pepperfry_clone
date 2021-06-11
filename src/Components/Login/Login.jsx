import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button"

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export function Login() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{display:"flex"}}>
        <div>
          <img style={{width:300,marginLeft:-32,marginTop:-14}} src="https://ii1.pepperfry.com/media/wysiwyg/banners/2021-reg-popup-banner_2x-31-may.jpg" alt="logo"/>
        </div>
        <div>
          <CloseIcon style={{marginLeft:310,cursor:"pointer"}} onClick={handleClose}/>
        <form >
          <div style={{marginLeft:30,width:300}}>
          <TextField id="standard-basic" fullWidth helperText="Required" label="Name" color="secondary"/>
         <div style={{display:"flex"}}>
         <TextField id="standard-basic" label="Mobile Number" color="secondary" />
         <p style={{margin:0,fontSize:10,fontWeight:'bold',marginTop:20,marginLeft:3,color:"#ef6630",cursor:"pointer"}}>VERIFY WITH OTP</p>
         </div>
          <TextField id="standard-basic" fullWidth label="Email ID" style={{fontSize:12}} color="secondary" />
          <TextField id="standard-basic" fullWidth label="Password" color="secondary" />
          <Button fullWidth  style={{marginTop:30,height:45,background:"#ef6630"}} variant="contained" color="secondary">
            Register
          </Button>
          <p style={{fontSize:12,textAlign:"center"}}>By registering you agree to our <u>Terms & Conditions</u></p>
          <Button fullWidth variant="outlined" style={{color:"#ef6630",fontSize:12,marginTop:30,height:40}}>
                Existing User? Log In
          </Button>
          <div style={{display:"flex",width:300,marginTop:20}}>
          <p style={{fontSize:12,marginLeft:50,fontWeight:"bold",color:"silver"}}>OR continue with </p>
            <img style={{width:30,height:30,marginTop:6,marginLeft:20}} src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" alt="facebook"/>
            <img style={{width:30,height:30,marginTop:6,marginLeft:20}} src="https://ii1.pepperfry.com/images/social_login_google_2x.png" alt ="google"/>
          </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );

  return (
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
  );
}
