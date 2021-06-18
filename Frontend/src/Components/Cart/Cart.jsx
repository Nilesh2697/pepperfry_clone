import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { CardSectionTab } from "./CartSectionTab";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { getData } from "../../Redux/localStorage";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    list: {
        width: 475,
    },
    fullList: {
        width: "auto",
    },
});

function Cart({ wish }) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });
    const [modal, setModal] = React.useState(0);
    const isData = getData("finalCart");
    const inCart = useSelector((state) => state.fireReducer.inCart);
    const isData2 = getData("wishList");
    const inWishList = useSelector((state) => state.categoryReducer.inWishList);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const cartRef = React.useRef(0);
    React.useEffect(() => {
        if (isData?.length > 0 && isData?.length > inCart?.length) {
            cartRef.current = isData?.length;
        } else if (inCart?.length > 0 && isData?.length < inCart?.length) {
            cartRef.current = inCart?.length;
        } else {
            cartRef.current = 0;
        }
    }, [isData?.length, inCart?.length]);

    const wishRef = React.useRef(0);
    React.useEffect(() => {
        if (isData2?.length > 0 && isData2?.length > inWishList?.length) {
            wishRef.current = isData2?.length;
        } else if (
            inWishList?.length > 0 &&
            isData2?.length < inWishList?.length
        ) {
            wishRef.current = inWishList?.length;
        } else {
            wishRef.current = 0;
        }
    }, [isData2?.length, inWishList?.length]);

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        ></div>
    );
    const handleModal1 = () => {
        setModal(1);
    };
    const handleModal = () => {
        setModal(0);
    };

    return (
        <div>
            <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                style={{ backgroundColor: "transparent" }}
                onClick={toggleDrawer("right", true)}
            >
                <div onClick={handleModal1}>
                    <Badge color="secondary">
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
                onClick={toggleDrawer("right", true)}
            >
                <div onClick={handleModal}>
                    <Badge color="secondary">
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
                <div
                    style={{ background: "black", height: 80, display: "flex" }}
                >
                    <div>
                        <p
                            style={{
                                color: "white",
                                marginTop: 18,
                                marginLeft: 20,
                            }}
                        >
                            Showing Availability At{" "}
                        </p>
                    </div>
                    <input
                        style={{ height: 30, marginTop: 18, marginLeft: 20 }}
                        placeholder="Check for your pin code"
                    />
                    <div>
                        <CloseIcon
                            style={{
                                marginTop: 18,
                                cursor: "pointer",
                                color: "white",
                                fontSize: 25,
                                marginLeft: 90,
                            }}
                            onClick={toggleDrawer("right", false)}
                        />
                    </div>
                </div>
                {list("right")}
                <CardSectionTab />
            </SwipeableDrawer>
        </div>
    );
}

export { Cart };
