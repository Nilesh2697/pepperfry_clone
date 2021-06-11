import React from "react";
import styles from "styled-components";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import imageModule from "../../Images/bookCons.png";
import { useHistory } from "react-router";

const MenuBar = styles.div`
  width: 100%;
  height: 36px;
`;

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: "8%",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: "0.2%",
        position: "relative",
        zIndex: 0,
    },
    button2: {
        marginLeft: "2%",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: "0.2%",
    },
}));

const DropDown = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const [anchorEl4, setAnchorEl4] = React.useState(null);
    const [anchorEl5, setAnchorEl5] = React.useState(null);
    const [anchorEl6, setAnchorEl6] = React.useState(null);
    const [anchorEl7, setAnchorEl7] = React.useState(null);
    const [anchorEl8, setAnchorEl8] = React.useState(null);
    const [anchorEl9, setAnchorEl9] = React.useState(null);
    const [anchorEl10, setAnchorEl10] = React.useState(null);

    const classes = useStyles();
    const history = useHistory();

    function handleClick(path) {
        // console.log("Pushed");
        history.push(path);
    }

    //button 1
    function handleHover(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }
    //button 1
    function handleClose() {
        setAnchorEl(null);
    }
    //button 2
    function handleHover2(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl2(event.currentTarget);
        }
    }
    //button 2
    function handleClose2() {
        setAnchorEl2(null);
    }
    //button 3
    function handleHover3(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl3(event.currentTarget);
        }
    }
    //button 3
    function handleClose3() {
        setAnchorEl3(null);
    }
    //button 4
    function handleHover4(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl4(event.currentTarget);
        }
    }
    //button 4
    function handleClose4() {
        setAnchorEl4(null);
    }
    //button 5
    function handleHover5(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl5(event.currentTarget);
        }
    }
    //button 5
    function handleClose5() {
        setAnchorEl5(null);
    }
    //button 6
    function handleHover6(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl6(event.currentTarget);
        }
    }
    //button 6
    function handleClose6() {
        setAnchorEl6(null);
    }
    //button 7
    function handleHover7(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl7(event.currentTarget);
        }
    }
    //button 7
    function handleClose7() {
        setAnchorEl7(null);
    }
    //button 8
    function handleHover8(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl8(event.currentTarget);
        }
    }
    //button 8
    function handleClose8() {
        setAnchorEl8(null);
    }
    //button 9
    function handleHover9(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl9(event.currentTarget);
        }
    }
    //button 9
    function handleClose9() {
        setAnchorEl9(null);
    }
    //button 10
    function handleHover10(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl10(event.currentTarget);
        }
    }
    //button 10
    function handleClose10() {
        setAnchorEl10(null);
    }

    return (
        <MenuBar style={{ borderBottom: "2px solid #F1F1F1", height: 40 }}>
            {/* button 1 */}
            <Button
                className={classes.button}
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover}
            >
                <span onClick={() => handleClick("/furniture")}>Furniture</span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        backgroundColor: "orange",
                        marginTop: "-1%",
                        width: "8%",
                        height: "5px",
                    }}
                ></div>
                <table>
                    <tr>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Sofas
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Seatings
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Chairs
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Tables
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Cabinetry
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Dining & Bar
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Beds
                        </th>
                    </tr>
                    <tr>
                        {/* Sofas */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-75%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    1 Seater Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    2 Seater Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    3 Seater Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofas Sets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sectional Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofa Cum Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Recliners
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Futons
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofa Spa
                                </MenuItem>
                            </div>
                        </td>
                        {/* Seatings */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-70%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Settees
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Benches
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Chaise Loungers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Recamiers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Ottomans
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Pouffes
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Foot Stools
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Seating Stools
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bean Bags
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Swings
                                </MenuItem>
                            </div>
                        </td>
                        {/* Chairs */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Arm Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Rocking Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Lounge Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Cafe Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Iconic Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Slipper Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Barrel Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Cantilever Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Folding Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Plastic Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wing Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Office Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Patio Chairs
                            </MenuItem>
                        </td>
                        {/* Tables */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-40%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Coffee Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Coffee Table Sets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    End Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Nest of Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Console Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Portable Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Study Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Dressing Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bedside Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Office Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Pattio Tables & Sets
                                </MenuItem>
                            </div>
                        </td>
                        {/* Cabinetry */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Shoe Racks
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Entertainment Unit
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Cabinates
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Sideboards
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Hutch Cabinates
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Chest of Drawers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Book Shelves
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Book Cases
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Trunks
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wardrobes
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Moduler Wardrobes
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Plastic Cabinets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Office Cabinets
                            </MenuItem>
                        </td>
                        {/* Dining & Bar */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-68%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Dining Sets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Dining Chairs
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Dining Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bar Cabinets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bar Units
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bar Trolleys
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wine Racks
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bar Stools
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bar Stool Sets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Moduler Kitchens
                                </MenuItem>
                            </div>
                        </td>
                        {/* Beds */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-68%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Single Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Queen Size Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    King Size Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Upholstered Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Poster Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bunk Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Trundle Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Folding Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Mattresses
                                </MenuItem>
                            </div>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 1 end*/}
            {/* button 2 */}
            <Button
                className={classes.button2}
                aria-owns={anchorEl ? "simple-menu2" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover2}
            >
                <span onClick={() => handleClick("/living")}>Living</span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu2"
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
                MenuListProps={{ onMouseLeave: handleClose2 }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        backgroundColor: "orange",
                        marginTop: "-1%",
                        width: "8%",
                        height: "5px",
                    }}
                ></div>
                <table>
                    <tr>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Sofas
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Seatings
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Chairs
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Tables
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Cabinetry
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Decor
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Lighting
                        </th>
                    </tr>
                    <tr>
                        {/* Sofas */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-50%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    1 Seater Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    2 Seater Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    3 Seater Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofas Sets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sectional Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofa Cum Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Recliners
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Futons
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofa Spa
                                </MenuItem>
                            </div>
                        </td>
                        {/* Seatings */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-46%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Settees
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Benches
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Chaise Loungers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Recamiers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Ottomans
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Pouffes
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Foot Stools
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Seating Stools
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bean Bags
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bar Stools
                                </MenuItem>
                            </div>
                        </td>
                        {/* Chairs */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Arm Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Rocking Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Lounge Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Cafe Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Iconic Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Slipper Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Barrel Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Cantilever Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Folding Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Plastic Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wing Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Chair Spa
                            </MenuItem>
                        </td>
                        {/* Tables */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-88%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Coffee Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Coffee Table Sets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    End Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Nest of Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Console Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Study Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Portable Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bar Table Sets
                                </MenuItem>
                            </div>
                        </td>
                        {/* Cabinetry */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Shoe Racks
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Entertainment Unit
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Cabinates
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Sideboards
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Hutch Cabinates
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Book Shelves
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Book Cases
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Trunks
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Plastic Cabinets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bar Cabinets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bar Units
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bar Trolleys
                            </MenuItem>
                        </td>
                        {/* Decor */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-78%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Shelves
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Art
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Clocks
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Mandirs
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Table Decor
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Vases
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Figurines
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Photo Frames
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Key Holders
                                </MenuItem>
                            </div>
                        </td>
                        {/* Lighting */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-20%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Chandeliers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Floor Lamps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Hanging Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Table Lamps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Flush Mounts
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Panel Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Tea Light Holders
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    String Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Picture Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Candle Holder
                                </MenuItem>
                            </div>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 2 end*/}
            {/* button 3 */}
            <Button
                className={classes.button2}
                aria-owns={anchorEl ? "simple-menu3" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover3}
            >
                <span onClick={() => handleClick("/bedroom")}>Bedroom</span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu3"
                anchorEl={anchorEl3}
                open={Boolean(anchorEl3)}
                onClose={handleClose3}
                MenuListProps={{ onMouseLeave: handleClose3 }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        backgroundColor: "orange",
                        marginTop: "-1%",
                        width: "8%",
                        height: "5px",
                    }}
                ></div>
                <table>
                    <tr>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Beds
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Mattresses
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Furnishings
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Tables
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Stotage
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Decor
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Lighting
                        </th>
                    </tr>
                    <tr>
                        {/* Beds */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-20%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Single Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Queen Size Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    King Size Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Upholstered Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Poster Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bunk Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Trundle Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Folding Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofa Cum Beds
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Futons
                                </MenuItem>
                            </div>
                        </td>
                        {/* Mattresses */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mattresses
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Single Bed Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Queen Bed Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                King Bed Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Foldable Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Baby Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Kids Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mattress Protectors
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mattress Toppers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Pillows
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bed Wedges
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mattress Steaming
                            </MenuItem>
                        </td>
                        {/* Furnishings */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bed Sheets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bed Covers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bedding Sets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Duvets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Quilts & Comforters
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Blankets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Dohars
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Carpets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Runners
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Curtains & Drapers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Carpet Spa
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Curtain Steaming
                            </MenuItem>
                        </td>
                        {/* Tables */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-146%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bedside Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Dressing Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Study Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Portable Tables
                                </MenuItem>
                            </div>
                        </td>
                        {/* Stotage */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-58%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wardrobes
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Modular Wardrobes
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Chest of Drawers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Cabinates
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Entertainment Units
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Trunks
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Book Shelves
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Book Cases
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Plastic Cabinets
                                </MenuItem>
                            </div>
                        </td>
                        {/* Decor */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-150%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Mirrors
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Photo Frames
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Clocks
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Cabinates
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Art
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Table Decor
                                </MenuItem>
                            </div>
                        </td>
                        {/* Lighting */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-50%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Table Lamps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Study Lamps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Floor Lamps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Smart Lamps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Candles
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Candle Holder
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Hanging Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Flush Mounts
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Panel Lights
                                </MenuItem>
                            </div>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 3 end*/}
            {/* button 4*/}
            <Button
                className={classes.button2}
                aria-owns={anchorEl ? "simple-menu4" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover4}
            >
                <span onClick={() => handleClick("/wfh")}>#wfh</span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu4"
                anchorEl={anchorEl4}
                open={Boolean(anchorEl4)}
                onClose={handleClose4}
                MenuListProps={{ onMouseLeave: handleClose4 }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        backgroundColor: "orange",
                        marginTop: "-1%",
                        width: "8%",
                        height: "5px",
                    }}
                ></div>
                <table>
                    <tr>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Chairs
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Seating
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Tables
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Cabinetry
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Lighting
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Decor
                        </th>
                    </tr>
                    <tr>
                        {/* Chairs */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Ergonomic Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                High Back Ergonomic
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mid Back Ergonomic
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Low Back Ergonomic
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Executive Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                High Back Executive
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mid Back Executive
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Guest Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Folding Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Arm Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Plastic Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Iconic Chairs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Cantilever Chairs
                            </MenuItem>
                        </td>
                        {/* Seating */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-172%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bean Bags
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Foot Stools
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Seating Stools
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Pouffes
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Chair Pads
                                </MenuItem>
                            </div>
                        </td>
                        {/* Tables */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-92%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Study Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Computer Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Writing Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Hutch Desks
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Portable Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Office Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Work Stations
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Executive Desks
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Kids study Table
                                </MenuItem>
                            </div>
                        </td>
                        {/* Cabinetry */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-145%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Office Cabinates
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    File Cabinates
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Pedestals
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Plastic Cabinets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Book Shelves
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Book Cases
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Cabinates
                                </MenuItem>
                            </div>
                        </td>
                        {/* Lighting */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-168%" }}></div>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Table Lamps
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Study Lamps
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Floor Lamps
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Table LAnterns
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Filament Bulbs
                            </MenuItem>
                        </td>
                        {/* Decor */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wall Shelves
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wall Cabinates
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Table Clocks
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Photo Frames
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Magazine Holders
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Figurines
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Transport Decor
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Pots & Planters
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Natural Plants
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Artificial Plants
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Artificial Flowers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Feng Shui
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Metal Wall Art
                            </MenuItem>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 4 end*/}
            {/* button 5*/}
            <Button
                className={classes.button2}
                aria-owns={anchorEl ? "simple-menu5" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover5}
            >
                <span onClick={() => handleClick("/kids_room")}>Kids Room</span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu5"
                anchorEl={anchorEl5}
                open={Boolean(anchorEl5)}
                onClose={handleClose5}
                MenuListProps={{ onMouseLeave: handleClose5 }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        backgroundColor: "orange",
                        marginTop: "-1%",
                        width: "10%",
                        height: "5px",
                        marginLeft: "8.5%",
                    }}
                ></div>
                <table>
                    <tr>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Beds
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Study
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Storage
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Seating
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Decor
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Bedding
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Furnishings
                        </th>
                    </tr>
                    <tr>
                        {/* Beds */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Cribs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Panel Beds
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bunk Beds
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Loft Beds
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Trundle Beds
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bookcase Beds
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Novelty Beds
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Tent Beds
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bed Units
                            </MenuItem>
                        </td>
                        {/* Study */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-75%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Study Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Infant Desks
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Study Chairs
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Activity Tables
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Boards
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Art Easels
                                </MenuItem>
                            </div>
                        </td>
                        {/* Storage */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-20%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Book Shelves
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Book Cases
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Storage Cabinets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Chest of Drawers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Storage Baskets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Storage Boxes
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wardrobes
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bedside Tables
                                </MenuItem>
                            </div>
                        </td>
                        {/* Seating */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-25%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Study Chairs
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Infant Chairs
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Rockers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Stools
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofas
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bean Bags
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Swings
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Tents
                                </MenuItem>
                            </div>
                        </td>
                        {/* Decor */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-25%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Shelves
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Book Ends
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Arts
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Lamps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Clocks
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Mirrors
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Height Charts
                                </MenuItem>
                            </div>
                        </td>
                        {/* Bedding */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-25%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bed Sheets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Pillows
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Blankets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Comforters
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bedding Sets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sleeping Bags
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Baby Wraps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Mattresses
                                </MenuItem>
                            </div>
                        </td>
                        {/* Furnishings */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-95%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Cushion Covers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Curtains
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Carpets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Floor Mats
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Towels
                                </MenuItem>
                            </div>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 5 end*/}
            {/* button 5*/}
            <Button
                className={classes.button2}
                aria-owns={anchorEl ? "simple-menu6" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover6}
            >
                <span onClick={() => handleClick("/mattresses")}>
                    Mattresses
                </span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu6"
                anchorEl={anchorEl6}
                open={Boolean(anchorEl6)}
                onClose={handleClose6}
                MenuListProps={{ onMouseLeave: handleClose6 }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        width: "16%",
                        height: "5px",
                        marginTop: "-1.5%",
                        backgroundColor: "orange",
                    }}
                ></div>
                <table>
                    <tr>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Mattresses
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Mattress Type
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Mattress Firmness
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Mattress Brands
                        </th>
                    </tr>
                    <tr>
                        {/* Mattresses */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mattresses
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Single Bed Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Queen Bed Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                King Bed Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Foldable Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Baby Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Kids Mattress
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mattress Protectors
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mattress Toppers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Pillows
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bed Wedges
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mattress Steaming
                            </MenuItem>
                        </td>
                        {/* Mattress Type */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <div style={{ marginTop: "-70%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Coir
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Foam
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Memory Foam
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bonnell Spring
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Pocket Spring
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Coir & Foam
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    HR Foam
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Cool Gel Foam
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Rebonded Foam
                                </MenuItem>
                            </div>
                        </td>
                        {/* Mattress Firmness */}
                        <td style={{ borderTop: "1px solid #E7E7E7" }}>
                            <div style={{ marginTop: "-165%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Soft
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Medium Soft
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Medium Firm
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Firm
                                </MenuItem>
                            </div>
                        </td>
                        {/* Mattress Brands */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Clouddio
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Sleepyhead
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Duroflex
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Springtek
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Springfit
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Usha Shriram
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Sleep Heaven
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Amore International
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                SleepSpa
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Soho
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Kurl-on
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Sleep Sutraa
                            </MenuItem>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 6 end*/}
            {/* button 7*/}
            <Button
                className={classes.button2}
                aria-owns={anchorEl ? "simple-menu7" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover7}
            >
                <span onClick={() => handleClick("/furnishings")}>
                    Furnishings
                </span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu7"
                anchorEl={anchorEl7}
                open={Boolean(anchorEl7)}
                onClose={handleClose7}
                MenuListProps={{ onMouseLeave: handleClose7 }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        width: "10%",
                        height: "5px",
                        marginTop: "-0.8%",
                        marginLeft: "44.5%",
                        backgroundColor: "orange",
                    }}
                ></div>
                <table>
                    <tr>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Bed Linen
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Flooring
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Curtains
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Bath Linen
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Cushion & Covers
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Table Linen
                        </th>
                    </tr>
                    <tr>
                        {/* Bed Linen */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bed Sheets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bed Covers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bedding Sets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Duvets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Duvets Covers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Blankets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Quilts & Comforters
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Dohars
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Pillows
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Pillow Covers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Diwan Sets
                            </MenuItem>
                        </td>
                        {/* Flooring */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-105%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Carpets
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Dhurries
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Runners
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Door Mats
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Carpet Spa
                                </MenuItem>
                            </div>
                        </td>
                        {/* Curtains */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-105%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Curtains & Drapes
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Curtain Accessories
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Blinds & Shades
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Curtain Steaming
                                </MenuItem>
                            </div>
                        </td>
                        {/* Bath Linen */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-95%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bath Mats
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Shower Curtains
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bath Towels
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Hand Towels
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Face Towels
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Towel Sets
                                </MenuItem>
                            </div>
                        </td>
                        {/* Cushion Covers */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-105%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Cushions
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Cushion Covers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Sofa Covers & Throws
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Chair Pads
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Chair Covers
                                </MenuItem>
                            </div>
                        </td>
                        {/* Mattress Brands */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-105%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Table Runners
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Table Cloths
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Placements
                                </MenuItem>
                            </div>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 7 end*/}
            {/* button 8*/}
            <Button
                className={classes.button2}
                aria-owns={anchorEl ? "simple-menu8" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover8}
            >
                <span onClick={() => handleClick("/decor")}>Decor</span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu8"
                anchorEl={anchorEl8}
                open={Boolean(anchorEl8)}
                onClose={handleClose8}
                MenuListProps={{ onMouseLeave: handleClose8 }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        width: "5%",
                        height: "5px",
                        marginTop: "-0.6%",
                        marginLeft: "65.5%",
                        backgroundColor: "orange",
                    }}
                ></div>
                <table>
                    <tr>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Wall Accents
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Wall Art
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Table Decor
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Spiritual
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Home Garden
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Tableware
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Home Services
                        </th>
                    </tr>
                    <tr>
                        {/* Wall Accents */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wall Shelves
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wall Cabinets
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mirrors
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Clocks
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Screens & Dividers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Photo Frames
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Key Holders
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Magazine Holders
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Set Top Box Holders
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Jharokhas
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Decor Clearance Sale
                            </MenuItem>
                        </td>
                        {/* Wall Arts */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                                width: "16.66%",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Metal Wall Art
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wood Wall Art
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wall Murals
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wall Plates
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wall Tiles
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Original Paintings
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Art Pannels
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Art Prints
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Ethnic Art
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Wall Masks
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Faux Animal Busts
                            </MenuItem>
                        </td>
                        {/* Table Decor */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Vases
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Table Clocks
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Home Fragrances
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Figurines
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Transport Decor
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Nautical Decor
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Monuments Decor
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Vintage Decor
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Military Decor
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Table Organizers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Decorative Plates
                            </MenuItem>
                        </td>
                        {/* Spirituals */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                                width: "16.66%",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mandirs
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Pooja Shelves
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Religious Idols
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Religious Frames
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Chowkies
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Feng Shui
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bells
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Pooja Essentials
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Festive Decor
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Prayer Mats
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Spiritual Coins
                            </MenuItem>
                        </td>
                        {/* Home Garden */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-35%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Pots & Planters
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Natural Plants
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Artificial Plants
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Artificial Flowers
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Artificial Grass
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Indoor Fountains
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Decorative Pebbles
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Garden Figurines
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bird Houses
                                </MenuItem>
                            </div>
                        </td>
                        {/* Tableware */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-55%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Teaware
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Dinnerware
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Trays & Platters
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Serveware
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Glassware
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Barware
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bakeware
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Clearance Sale
                                </MenuItem>
                            </div>
                        </td>
                        {/* Home Services */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Sofa Spa
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Chair Spa
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Carpet Spa
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Curtain Steaming
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Mattress Steaming
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Home Cleaning
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Kitchen and Bathroom
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Pest Control
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Termite Control
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Bed bug Control
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Cockroach Control
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Disinfection Service
                            </MenuItem>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 8 end*/}
            {/* button 9*/}
            <Button
                className={classes.button2}
                aria-owns={anchorEl ? "simple-menu9" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover9}
            >
                <span onClick={() => handleClick("/lighting")}>Lighting</span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu9"
                anchorEl={anchorEl9}
                open={Boolean(anchorEl9)}
                onClose={handleClose9}
                MenuListProps={{ onMouseLeave: handleClose9 }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        width: "6%",
                        height: "5px",
                        marginTop: "-0.6%",
                        marginLeft: "72%",
                        backgroundColor: "orange",
                    }}
                ></div>
                <table>
                    <tr>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Lamps
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Wall Lights
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Ceiling Lights
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Smart Lights
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Outdoor Lights
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            Festive Lights
                        </th>
                        <th style={{ textAlign: "left", fontSize: 14 }}>
                            LED Lights
                        </th>
                    </tr>
                    <tr>
                        {/* Lamps */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Floor Lamps
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Table Lamps
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Study Lamps
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Lampshades
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Table Lanterns
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Filament Bulbs
                            </MenuItem>
                        </td>
                        {/* Wall Lights */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-35%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Sconces
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Wall Lanterns
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Picture Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Bath Lights
                                </MenuItem>
                            </div>
                        </td>
                        {/* Ceiling Lights */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Chandeliers
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Hanging Lights
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Hanging Lanterns
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Flush Mounts
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Panel Lights
                            </MenuItem>
                            <MenuItem
                                style={{ fontSize: 14 }}
                                onClick={handleClose}
                            >
                                Spot Lights
                            </MenuItem>
                        </td>
                        {/* Smart Lights */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-50%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Smart Homes
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Smart Lamps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Smart Chandeliers
                                </MenuItem>
                            </div>
                        </td>
                        {/* Outdoor Lights */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-15%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Gate Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Outdoor Wall Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Outdoor Hanging
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Garden Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Flood Lights
                                </MenuItem>
                            </div>
                        </td>
                        {/* Festive Lights */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                backgroundColor: "#F5F5F5",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-15%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Candles
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Candle Holders
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    String Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Decorative Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    Tea Light Holders
                                </MenuItem>
                            </div>
                        </td>
                        {/* LED Lights */}
                        <td
                            style={{
                                borderTop: "1px solid #E7E7E7",
                                width: "16.66%",
                            }}
                        >
                            <div style={{ marginTop: "-60%" }}>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    LED Lamps
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    LED Ceiling Lights
                                </MenuItem>
                                <MenuItem
                                    style={{ fontSize: 14 }}
                                    onClick={handleClose}
                                >
                                    LED Wall Lights
                                </MenuItem>
                            </div>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 9 end*/}
            {/* button 10*/}
            <Button
                className={classes.button2}
                aria-owns={anchorEl ? "simple-menu10" : undefined}
                aria-haspopup="true"
                onMouseOut={handleHover10}
            >
                <span onClick={() => handleClick("/modular_furniture")}>
                    Modular Furniture
                </span>
            </Button>
            <Menu
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                id="simple-menu10"
                anchorEl={anchorEl10}
                open={Boolean(anchorEl10)}
                onClose={handleClose10}
                MenuListProps={{ onMouseLeave: handleClose10 }}
                getContentAnchorEl={null}
            >
                <div
                    style={{
                        width: "20%",
                        height: "5px",
                        marginTop: "-1.2%",
                        marginLeft: "64%",
                        backgroundColor: "orange",
                    }}
                ></div>
                <div>
                    <div style={{ textAlign: "center" }}>
                        <strong>
                            Modular Furniture Tailor-made for Your Home
                        </strong>
                        <p
                            style={{
                                fontSize: 12,
                                color: "#9B9B9B",
                                lineHeight: "1%",
                            }}
                        >
                            Widest Variety of Materials & Finishes, Chooose From
                            300+ colours
                        </p>
                    </div>
                </div>
                <table style={{ height: 220, marginTop: "-5%" }}>
                    <tr>
                        <td>
                            <div
                                style={{
                                    width: 280,
                                    height: 150,
                                    // lineHeight: "1%",
                                    cursor: "pointer",
                                }}
                            >
                                <img
                                    style={{ width: "100%", height: "100%" }}
                                    src="https://ii1.pepperfry.com/media/wysiwyg/banners/modular-hover20-wardrobe.jpg"
                                    alt="SampleImage"
                                />
                                <p style={{ color: "#F27335" }}>
                                    Modular Wardrobes
                                </p>
                            </div>
                        </td>
                        <Divider orientation="vertical" flexItem />
                        <td>
                            <div
                                style={{
                                    width: 280,
                                    height: 150,
                                    // lineHeight: "1%",
                                    cursor: "pointer",
                                }}
                            >
                                <img
                                    style={{ width: "100%", height: "100%" }}
                                    src="https://ii2.pepperfry.com/media/wysiwyg/banners/modular-hover20-kitchen.jpg"
                                    alt="SampleImage"
                                />
                                <p style={{ color: "#F27335" }}>
                                    Moduler Kitchens
                                </p>
                            </div>
                        </td>
                        <Divider orientation="vertical" flexItem />
                        <td>
                            <div
                                style={{
                                    width: 150,
                                    height: 150,
                                    cursor: "pointer",
                                }}
                            >
                                <img
                                    style={{ width: "100%", height: "100%" }}
                                    src={imageModule}
                                    alt="SampleImage"
                                />
                            </div>
                        </td>
                    </tr>
                </table>
            </Menu>
            {/* button 10 end*/}
        </MenuBar>
    );
};

export { DropDown };
