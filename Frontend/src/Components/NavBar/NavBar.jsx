import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Register } from "../Login/Register";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import logo from "../../Images/logo.png";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { getSearch } from "../../Redux/Search/action";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../Cart/Cart";
import {
  fetchInCart,
  getUserId,
  logOut,
  registerUserWithSM,
  finalCartSuccess
} from "../../Redux/FireAuth/fireAction";
import { clearData, getData, saveData } from "../../Redux/localStorage";
import { addToCart} from "../IndividualPage/IndividualAction";
import { Login } from "../Login/Login";
import { ForgetPassword } from "../Login/ForgetPassword";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },

    // title: {
    //   display: "none",
    //   marginLeft:160,
    //   [theme.breakpoints.up("xs")]: {
    //     display: "block"
    //   }
    // },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.05),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.black, 0.1),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "40vw",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(5),
            width: "auto",
        },
        height: 42,
    },
    searchIcon: {
        // padding: theme.spacing(0, 2),
        // height: "100%",
        position: "absolute",
        // pointerEvents: "none",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: -28,
        marginRight: -40,
        right: 50,
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1.5, 4, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "75ch",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
        marginRight: "10%",
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
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

function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchData, setSearchData] = React.useState({})
  const [displayDrop, setDisplayDrop] = React.useState("block")
  const history = useHistory();
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.search.data);
  const loginToggle = useSelector((state) => state.fireReducer.login_page);
    const registerToggle = useSelector(
        (state) => state.fireReducer.register_page,
    );
    const forgetToggle = useSelector((state) => state.fireReducer.forget_page);

  const isAuth = useSelector((state) => state.fireReducer.isAuth);
  const userId = useSelector((state) => state.fireReducer.userId);
  const registerSucces = useSelector((state) => state.fireReducer.registerSuccess);
 

  const [state] = React.useState(inState);

  const regRef = React.useRef(state);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const userRef = React.useRef(null);
  
  
  const cartData= useSelector(state=>state.fireReducer.inCart)

  const handleSearch = (e) => {
    let payload = e.target.value;
    setSearchData({ ...searchData, payload });
  };
  React.useEffect(()=>{
    if (isAuth === true)
    {
      if (cartData === undefined || cartData === "" || cartData === null)
      {
      dispatch(fetchInCart(userId))       
      }
    }
  },[userId,cartData]);

  const [f, setF] = React.useState(false);

  React.useEffect(()=>{
    if(isAuth===true){
      let isData = getData("finalCart");//local
      let item1=cartData;//server
      console.log(isData)
      console.log(item1)
    
      if(item1!==undefined&&item1!==null&&isData!==undefined&&isData!==null&&item1!==""){
        let cartItem = [];

       
          for (let i = 0; i < item1.length; i++)
          {
            cartItem.push(item1[i])
          }
        let flag2 = 0;
        
          for (let i = 0; i < isData.length; i++) {
            let j = 0
            for (j = 0; j < cartItem.length; j++) {
              if ( isData[i].id === cartItem[j]._id) {
               
                flag2 = 1;
                break;
               
              }
            }
            if (flag2 === 1) {
              isData[i].qty = cartItem[j].qty + isData[j].qty;
              flag2 = 0;
            }
            else
            {
              cartItem.push(isData[i]);
            }
          }
        
         dispatch(finalCartSuccess(cartItem));
        if (userId !== undefined || userId !== "") {
          dispatch(addToCart(userId,cartItem));
        }
        console.log(cartItem);
      }
       else if(isData!==undefined&&isData!==null&&isData?.length>0&&item1===[]){
        dispatch(finalCartSuccess(isData));
        if (userId !== undefined || userId !== "") {
          dispatch(addToCart(userId,isData));
        }

      }
}
  },[isAuth])



  React.useEffect(() => {
    dispatch(getSearch(searchData.payload));
  }, [searchData]);

  // console.log(searchResult.length, searchData.payload.length)

  const {
    isRegisterAuthFB,
    isRegisterAuthG,
    googleEmail,
    googlePassword,
    facebook,
    facebookPassword,
    phone,
    displayName,
  } = useSelector((state) => state.fireReducer);

  saveData("isName",displayName)
  saveData("isUser",userId)

  const handleClick = () => {
    history.push("/");
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleDrawerOpen=()=>{
    setAnchorE2(!anchorE2);
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  
 
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
    
    


    React.useEffect(() => {
        dispatch(getSearch(searchData.payload));
    }, [searchData]);

    // console.log(searchResult.length, searchData.payload.length)


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    //   window.onbeforeunload = function (e) {
    //     clearData("isAuth")
    // };

    React.useEffect(() => {
        if (isAuth) {
            userRef.current = true;
            // console.log(userId)
            if (userId === undefined || userId === "") {
                if (googlePassword === "") {
                    const pay = {
                        email: facebook,
                        password: facebookPassword,
                    };
                    dispatch(getUserId(pay));
                } else if (facebookPassword === "") {
                    const pay = {
                        email: googleEmail,
                        password: googlePassword,
                    };
                    dispatch(getUserId(pay));
                }
            }
        }
    }, [isAuth, registerSucces]);

    React.useEffect(() => {
        if (isRegisterAuthG) {
            regRef.current = {
                ...state,
                email: googleEmail,
                password: googlePassword,
                phone: phone,
                first_name: displayName,
            };
            // console.log(regRef.current)
            dispatch(registerUserWithSM(regRef.current));
        } else if (isRegisterAuthFB) {
            regRef.current = {
                ...state,
                email: facebook,
                password: facebookPassword,
                phone: phone,
                first_name: displayName,
            };
            dispatch(registerUserWithSM(regRef.current));
        }
    }, [isRegisterAuthG, isRegisterAuthFB]);

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            style={{ top: 45, left: 30 }}
        >
            {isAuth ? (
                <span>
                    <MenuItem style={{ fontSize: 12, fontWeight: "bold" }}>
                        {displayName !== "" ? displayName : "User"}
                    </MenuItem>
                    <MenuItem style={{ fontSize: 12, fontWeight: "bold" }}>
                        My Account
                    </MenuItem>
                    <MenuItem style={{ fontSize: 12, fontWeight: "bold" }}>
                        My Orders
                    </MenuItem>
                    <MenuItem style={{ fontSize: 12, fontWeight: "bold" }}>
                        My Wishlist
                    </MenuItem>
                    <MenuItem style={{ fontSize: 12, fontWeight: "bold" }}>
                        My Wallet
                    </MenuItem>
                    <MenuItem style={{ fontSize: 12, fontWeight: "bold" }}>
                        My Profile
                    </MenuItem>
                    <MenuItem
                        style={{ fontSize: 12, fontWeight: "bold" }}
                        onClick={handleLogout}
                    >
                        Logout
                    </MenuItem>
                </span>
            ) : (
                <span>
                    <MenuItem
                        style={{ background: "#ef6630" }}
                        onClick={handleMenuClose}
                    >
                        {registerToggle && <Register />}
                        {loginToggle && <Login />}
                        {forgetToggle && <ForgetPassword />}
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <span style={{ fontSize: 11 }}>
                            To access your <br />
                            account & manage
                            <br /> orders
                        </span>
                    </MenuItem>
                </span>
            )}
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <LocalShippingOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Track</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    aria-label="show 11 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={11} color="secondary">
                        <FavoriteBorderOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Wishlist</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <PermIdentityOutlinedIcon />
                </IconButton>
                <p>Login</p>
            </MenuItem>
        </Menu>
    );

    const handleSearchClick = (id) => {
        setDisplayDrop("none");
        history.push(`/item/${id}/searchbyID`);
        setSearchData("");
        setDisplayDrop("block");
    };

    return (
        <div className={classes.grow}>
            <AppBar
                style={{
                    borderBottom: "2px solid #E7E7E7",
                    height: 70,
                    boxShadow: "none",
                }}
                color="transparent"
                position="static"
            >
                <Toolbar>
                    <div
                        style={{
                            marginLeft: "10%",
                            width: "9%",
                            height: 50,
                            cursor: "pointer",
                        }}
                        onClick={() => handleClick()}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            src={logo}
                            alt="pepperfry"
                        />
                    </div>

                    <div
                        style={{ marginLeft: "2.5%" }}
                        className={classes.search}
                    >
                        <InputBase
                            placeholder="Search"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                            onChange={(e) => handleSearch(e)}
                        />
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        {searchData.payload?.length > 0 ? (
                            <div
                                style={{
                                    position: "absolute",
                                    backgroundColor: "white",
                                    width: "100%",
                                    height: "auto",
                                    zIndex: 2,
                                    borderRadius: 0,
                                    background: "white",
                                    boxShadow:
                                        "-3px 3px 2px grey, 5px -5px 2px #ffffff",
                                    display: displayDrop,
                                }}
                                // onClick={}
                            >
                                {searchResult.length > 0 &&
                                    searchResult.map((el) => (
                                        <p
                                            onClick={() =>
                                                handleSearchClick(el._id)
                                            }
                                            style={{
                                                zIndex: 1,
                                                marginLeft: "2%",
                                                paddingTop: 5,
                                                cursor: "pointer",
                                            }}
                                        >
                                            {el.name}
                                        </p>
                                    ))}
                            </div>
                        ) : (
                            <div style={{ display: "none" }}></div>
                        )}
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="show 4 new mails"
                            color="inherit"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <div>
                                <Badge badgeContent={0} color="secondary">
                                    <LocalShippingOutlinedIcon
                                        style={{
                                            fontSize: 28,
                                            marginLeft: "-62%",
                                        }}
                                    />
                                </Badge>
                                <div style={{ fontSize: 12, marginLeft: -35 }}>
                                    Track
                                </div>
                            </div>
                        </IconButton>

                        <Cart />

                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                            style={{ backgroundColor: "transparent" }}
                        >
                            <div
                                style={{ lineHeight: "80%", marginTop: "10%" }}
                            >
                                <PermIdentityOutlinedIcon
                                    style={{
                                        fontSize: 28,
                                        marginLeft: 15,
                                        marginTop: 5,
                                    }}
                                />
                                <div style={{ fontSize: 12, marginLeft: 15 }}>
                                    Profile
                                </div>
                            </div>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(NavBar);
