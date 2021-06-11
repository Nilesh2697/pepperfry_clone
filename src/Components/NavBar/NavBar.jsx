import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Login } from "../Login/Login";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import logo from "../../Images/logo.png"
import { useHistory } from "react-router";
import { getSearch } from "../../Redux/Search/action";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
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
      backgroundColor: fade(theme.palette.common.black, 0.10)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "40vw",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      width: "auto"
    },
    height:42,
  
  },
  searchIcon: {
    // padding: theme.spacing(0, 2),
    // height: "100%",
    position: "absolute",
    // pointerEvents: "none",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop:-28,
    marginRight:-40,
    right:50,
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1.5, 4, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "70ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    marginRight:140,
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchData, setSearchData] = React.useState({})
  const history = useHistory();
  const dispatch = useDispatch()
  const searchResult = useSelector((state) => state.search.data)

  console.log(searchResult)

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleSearch = (e) => {
    let payload = e.target.value
    setSearchData({...searchData, payload})
  }

  React.useEffect(()=>{
    dispatch(getSearch(searchData.payload))
  }, [searchData])

  const handleClick = () => {
    history.push("/");
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
      style={{top:45,left:30}}
    >
      <MenuItem style={{background:"#ef6630"}} onClick={handleMenuClose}><Login /></MenuItem>
      <MenuItem onClick={handleMenuClose}><span style={{fontSize:11}}>To access your <br/>account & manage<br/> orders</span></MenuItem>
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
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
           <FavoriteBorderOutlinedIcon/>
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
         <PermIdentityOutlinedIcon/>
        </IconButton>
        <p>Login</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar style={{borderBottom: "2px solid #E7E7E7", height: 70, boxShadow: "none"}} color="transparent"  position="static">
        <Toolbar>
            {/* <Typography className={classes.title} variant="h6" noWrap>
               <img style={{width:170,marginTop:5}} src="https://www.pngkit.com/png/detail/366-3664559_product-image-pepperfry-logo-png.png" alt="pepperfry"/>
            </Typography> */}
            <div onClick={() => handleClick()} style={{cursor: "pointer"}}>
              <img style={{width:170, height: 50,marginTop:"1%", marginLeft: "95%"}} src={logo} alt="pepperfry"/>
            </div>
          <div style={{marginLeft: "13.5%"}} className={classes.search}>
           
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e)=>handleSearch(e)}
            />
             <div className={classes.searchIcon}>
            <SearchIcon/>
            </div>
          
          </div>
          <div className={classes.grow} />
          <div  className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
            <div>
              <Badge badgeContent={0} color="secondary">
               
               <LocalShippingOutlinedIcon style={{ fontSize: 28,marginLeft:"-65%"}}/>               
               
              </Badge>
             <div style={{fontSize:12 ,marginLeft:-35}}>Track</div> 
            </div>
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <div>
              <Badge badgeContent={0} color="secondary">
              <FavoriteBorderOutlinedIcon style={{ fontSize: 28,marginLeft:0}}/>
              </Badge>
              <div style={{fontSize:12,marginLeft:0}}>
                Wishlist
              </div>
              </div>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <div>
              <Badge badgeContent={0} color="secondary">
               <ShoppingCartOutlinedIcon style={{ fontSize: 28,marginLeft:10 }}/>
              </Badge>
              <div style={{fontSize:12,marginLeft:10}}>
                Cart
              </div>
              </div>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >  
                 <div>
                 <PermIdentityOutlinedIcon style={{ fontSize: 28 ,marginLeft:25}}/>
                 <div style={{fontSize:12,marginLeft:25}}>
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
