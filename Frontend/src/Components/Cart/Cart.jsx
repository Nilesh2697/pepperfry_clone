import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import {CardSectionTab} from "./CartSectionTab";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
  list: {
    width: 475,
  },
  fullList: {
    width: 'auto',
  },
});

 function Cart( ) {
  const classes = useStyles();
  const [state, setState] = React.useState({ 
    right: false,
  });
  const [modal,setModal] =React.useState(0)
   

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </div>
  );
   const handleModal1=()=>{
       setModal(1)
   }
   const handleModal=()=>{
       setModal(0)
   }
  return (
    <div>   
       
        <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              style={{ backgroundColor: "transparent" }}
              onClick={ toggleDrawer("right", true)}
            >
              <div onClick={handleModal1} >
                <Badge badgeContent={0} color="secondary">
                  <FavoriteBorderOutlinedIcon
                    style={{ fontSize: 28, marginLeft: 0 }}
                    
                  />
                </Badge>
                <div style={{ fontSize: 12, marginLeft: 0 }}>Wishlist</div>
              </div>
            </IconButton>
          <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              style={{ backgroundColor: "transparent" }}
              onClick={ toggleDrawer("right", true)}
            >
              <div onClick={handleModal} >
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartOutlinedIcon
                    style={{ fontSize: 28, marginLeft: 10 }}
                  />
                </Badge>

                <div style={{ fontSize: 12, marginLeft: 10 }}>Cart</div>
              </div>
            </IconButton>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
          <div style={{background:"black",height:80,display:"flex"}}>
           <div>
            <p style={{color:"white",marginTop:18,marginLeft:20}}>Showing Availability At </p>    
            </div> 
            <input style={{height:30,marginTop:18,marginLeft:20}}/> 
            <div>
            <CloseIcon
                style={{marginTop:18, cursor: "pointer",color:"white",fontSize:25,marginLeft:90 }}
                onClick={toggleDrawer("right", false)}
            />
            </div>
          </div>
            {list("right")}
            <CardSectionTab no={modal}/>
            <Link to='/checkout' style={{backgroundColor:'#e96a19',width:'93%',border:'none',height:'6.5%',color:'white',fontWeight:'500',marginLeft:'3.5%',marginTop:'98%',textAlign:'center',paddingTop:'2.5%'}} target='_blank'>
                PROCEED TO PAY SECURELY
            </Link>
          </SwipeableDrawer>  
    </div>
  );
}

export {Cart}