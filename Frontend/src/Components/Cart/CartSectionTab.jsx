import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { CartView } from "./CartView";
import { WishListView } from "./WishListView";
import { RecentlyView } from "./RecentlyView";
import { getData } from "../../Redux/localStorage";
import { useSelector } from "react-redux";
import Badge from "@material-ui/core/Badge";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 475,
        paddingLeft: 0,
    },
}));

export function CardSectionTab({ no = 0 }) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(no);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const isData = getData("finalCart");
    const inCart = useSelector((state) => state.fireReducer.inCart);
    const isData2 = getData("wishList");
    const inWishList = useSelector((state) => state.categoryReducer.inWishList);
    const finalCart = useSelector((state) => state.fireReducer.finalCart);
    const finalWishlist = useSelector(state=>state.categoryReducer.finalWishlist);


    // const handleChangeIndex = (index) => {
    //   setValue(index);
    // };
    const cartRef = React.useRef(null);
    React.useEffect(() => {
        if (isData?.length > 0 && isData?.length >= inCart?.length) {
            cartRef.current = isData?.length;
        } else if (inCart?.length > 0 && isData?.length < inCart?.length) {
            cartRef.current = inCart?.length;
        } else if(isData?.length > 0){
            cartRef.current = isData?.length;
        }
        else if (inCart?.length > 0)
        {
            cartRef.current = inCart?.length;
        }
        
    }, [isData?.length, inCart?.length, value, finalCart,cartRef]);
    
   

    const wishRef = React.useRef(0);
    React.useEffect(() => {
        if (isData2?.length > 0 && isData2?.length >= inWishList?.length) {
            wishRef.current = isData2?.length;
        } else if (
            inWishList?.length > 0 &&
            isData2?.length < inWishList?.length
        ) {
            wishRef.current = inWishList?.length;
        }
        else if(isData2?.length > 0){
            cartRef.current = isData2?.length;
        }
        else if (inWishList?.length > 0)
        {
            cartRef.current = inWishList?.length;
        }
        else
        {
            wishRef.current = 0;
        }
    }, [isData2?.length, inWishList?.length,value, finalWishlist,wishRef]);
    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                style={{ background: "black", height: 48 }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    style={{}}
                >
                    <Tab
                        style={{
                            background: "white",
                            color: "black",
                            fontSize: 12,
                            height: 30,
                        }}
                        label={<Badge  badgeContent={inCart?.length?inCart?.length:isData?.length?isData?.length:0} color="secondary">MY CART</Badge>}
                        {...a11yProps(0)}
                    ></Tab>

                    <Tab
                        style={{
                            background: "white",
                            color: "black",
                            fontSize: 12,
                            height: 30,
                        }}
                        label={
                            <Badge
                                badgeContent={inWishList?.length?inWishList?.length:isData2?.length?isData2?.length:0}
                                color="primary"
                            >
                                MY WISHLIST
                            </Badge>
                        }
                        {...a11yProps(1)}
                    />
                    <Tab
                        style={{
                            background: "white",
                            color: "black",
                            fontSize: 12,
                            height: 30,
                        }}
                        label="RECENTLY VIEWED"
                        {...a11yProps(2)}
                    />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} dir={theme.direction}>
                <CartView />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <WishListView />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <RecentlyView />
            </TabPanel>
        </div>
    );
}
