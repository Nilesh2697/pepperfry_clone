import React from 'react'
import styles from "styled-components"
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { styled } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const MenuBar = styles.div`
  width: 100%;
  height: 36px;
  // border-bottom: 1px solid black;
  // border-top: 1px solid black;
`

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "8%",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: "0.2%"
  },
  button2: {
    marginLeft: "2%",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: "0.2%"
  },
}))

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

  const classes = useStyles()

//button 1
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
//button 1
  function handleClose() {
    setAnchorEl(null);
  }
//button 2
  function handleClick2(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl2(event.currentTarget);
    }
  }
//button 2
  function handleClose2() {
    setAnchorEl2(null);
  }
//button 3
  function handleClick3(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl3(event.currentTarget);
    }
  }
//button 3
  function handleClose3() {
    setAnchorEl3(null);
  }
//button 4
function handleClick4(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl4(event.currentTarget);
  }
}
//button 4
function handleClose4() {
  setAnchorEl4(null);
}
//button 5
function handleClick5(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl5(event.currentTarget);
  }
}
//button 5
function handleClose5() {
  setAnchorEl5(null);
}
//button 6
function handleClick6(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl6(event.currentTarget);
  }
}
//button 6
function handleClose6() {
  setAnchorEl6(null);
}
//button 7
function handleClick7(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl7(event.currentTarget);
  }
}
//button 7
function handleClose7() {
  setAnchorEl7(null);
}
//button 8
function handleClick8(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl8(event.currentTarget);
  }
}
//button 8
function handleClose8() {
  setAnchorEl8(null);
}
//button 9
function handleClick9(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl9(event.currentTarget);
  }
}
//button 9
function handleClose9() {
  setAnchorEl9(null);
}
//button 10
function handleClick10(event) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl10(event.currentTarget);
  }
}
//button 10
function handleClose10() {
  setAnchorEl10(null);
}

  return (
    <MenuBar>

      {/* button 1 */}
      <Button className={classes.button} aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick}>
        Furniture
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
        <table>
          <tr>
            <th style={{textAlign: "left", fontSize: 14}}>Sofas</th>
            <th style={{textAlign: "left", fontSize: 14}}>Seatings</th>
            <th style={{textAlign: "left", fontSize: 14}}>Chairs</th>
            <th style={{textAlign: "left", fontSize: 14}}>Tables</th>
            <th style={{textAlign: "left", fontSize: 14}}>Cabinetry</th>
            <th style={{textAlign: "left", fontSize: 14}}>Dining & Bar</th>
            <th style={{textAlign: "left", fontSize: 14}}>Beds</th>
          </tr>
          <tr>
            {/* Sofas */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>1 Seater Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>2 Seater Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>3 Seater Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofas Sets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sectional Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofa Cum Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Recliners</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Futons</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofa Spa</MenuItem>
            </td>
            {/* Seatings */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Settees</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Benches</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Chaise Loungers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Recamiers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Ottomans</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pouffes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Foot Stools</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Seating Stools</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bean Bags</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Swings</MenuItem>
            </td>
            {/* Chairs */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Arm Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Rocking Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Lounge Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cafe Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Iconic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Slipper Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Barrel Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cantilever Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Folding Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Plastic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wing Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Office Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Patio Chairs</MenuItem>
            </td>
            {/* Tables */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Coffee Tables</MenuItem>  
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Coffee Table Sets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>End Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Nest of Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Console Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Portable Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Dressing Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bedside Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Office Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pattio Tables & Sets</MenuItem>
            </td>
            {/* Cabinetry */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Shoe Racks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Entertainment Unit</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sideboards</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Hutch Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Chest of Drawers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Cases</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Trunks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wardrobes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Moduler Wardrobes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Plastic Cabinets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Office Cabinets</MenuItem>
            </td>
            {/* Dining & Bar */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Dining Sets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Dining Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Dining Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Cabinets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Units</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Trolleys</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wine Racks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Stools</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Stool Sets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Moduler Kitchens</MenuItem>
            </td>
            {/* Beds */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Single Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Queen Size Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>King Size Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Upholstered Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Poster Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bunk Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Trundle Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Folding Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mattresses</MenuItem>
            </td>
          </tr>
        </table>
      </Menu>
      {/* button 1 end*/}
      {/* button 2 */}
      <Button className={classes.button2} aria-owns={anchorEl ? "simple-menu2" : undefined} aria-haspopup="true" onClick={handleClick2} onMouseOver={handleClick2}>
        Living
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
        <table>
          <tr>
            <th style={{textAlign: "left", fontSize: 14}}>Sofas</th>
            <th style={{textAlign: "left", fontSize: 14}}>Seatings</th>
            <th style={{textAlign: "left", fontSize: 14}}>Chairs</th>
            <th style={{textAlign: "left", fontSize: 14}}>Tables</th>
            <th style={{textAlign: "left", fontSize: 14}}>Cabinetry</th>
            <th style={{textAlign: "left", fontSize: 14}}>Decor</th>
            <th style={{textAlign: "left", fontSize: 14}}>Lighting</th>
          </tr>
          <tr>
            {/* Sofas */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>1 Seater Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>2 Seater Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>3 Seater Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofas Sets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sectional Sofas</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofa Cum Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Recliners</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Futons</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofa Spa</MenuItem>
            </td>
            {/* Seatings */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Settees</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Benches</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Chaise Loungers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Recamiers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Ottomans</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pouffes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Foot Stools</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Seating Stools</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bean Bags</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Stools</MenuItem>
            </td>
            {/* Chairs */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Arm Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Rocking Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Lounge Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cafe Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Iconic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Slipper Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Barrel Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cantilever Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Folding Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Plastic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wing Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Chair Spa</MenuItem>
            </td>
            {/* Tables */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Coffee Tables</MenuItem>  
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Coffee Table Sets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>End Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Nest of Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Console Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Portable Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Table Sets</MenuItem>
            </td>
            {/* Cabinetry */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Shoe Racks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Entertainment Unit</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sideboards</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Hutch Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Cases</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Trunks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Plastic Cabinets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Cabinets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Units</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bar Trolleys</MenuItem>
            </td>
            {/* Decor */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Art</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Clocks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mandirs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table Decor</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Vases</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Figurines</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Photo Frames</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Key Holders</MenuItem>
            </td>
            {/* Lighting */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Chandeliers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Lights</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Floor Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Hanging Lights</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Flush Mounts</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Panel Lights</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Tea Light Holders</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>String Lights</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Picture Lights</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Candle Holder</MenuItem>
            </td>
          </tr>
        </table>
      </Menu>
      {/* button 2 end*/}
      {/* button 3 */}
      <Button className={classes.button2} aria-owns={anchorEl ? "simple-menu3" : undefined} aria-haspopup="true" onClick={handleClick3} onMouseOver={handleClick3}>
        Bedroom
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
        <table>
          <tr>
            <th style={{textAlign: "left", fontSize: 14}}>Beds</th>
            <th style={{textAlign: "left", fontSize: 14}}>Mattresses</th>
            <th style={{textAlign: "left", fontSize: 14}}>Furnishings</th>
            <th style={{textAlign: "left", fontSize: 14}}>Tables</th>
            <th style={{textAlign: "left", fontSize: 14}}>Stotage</th>
            <th style={{textAlign: "left", fontSize: 14}}>Decor</th>
            <th style={{textAlign: "left", fontSize: 14}}>Lighting</th>
          </tr>
          <tr>
            {/* Beds */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Single Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Queen Size Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>King Size Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Upholstered Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Poster Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bunk Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Trundle Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Folding Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofa Cum Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Futons</MenuItem>
            </td>
            {/* Mattresses */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mattresses</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Single Bed Mattress</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Queen Bed Mattress</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>King Bed Mattress</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Foldable Mattress</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Baby Mattress</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Kids Mattress</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mattress Protectors</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mattress Toppers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pillows</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bed Wedges</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mattress Steaming</MenuItem>

            </td>
            {/* Furnishings */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bed Sheets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bed Covers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bedding Sets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Duvets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Quilts & Comforters</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Blankets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Dohars</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Carpets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Runners</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Curtains & Drapers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Carpet Spa</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Curtain Steaming</MenuItem>
            </td>
            {/* Tables */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bedside Tables</MenuItem>  
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Dressing Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Portable Tables</MenuItem>
            </td>
            {/* Stotage */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wardrobes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Modular Wardrobes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Chest of Drawers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Entertainment Units</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Trunks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Cases</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Plastic Cabinets</MenuItem>
            </td>
            {/* Decor */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mirrors</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Photo Frames</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Clocks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Art</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table Decor</MenuItem>
            </td>
            {/* Lighting */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Lights</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Floor Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Smart Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Candles</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Candle Holder</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Hanging Lights</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Flush Mounts</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Panel Lights</MenuItem>
            </td>
          </tr>
        </table>      
      </Menu>
      {/* button 3 end*/}
      {/* button 4*/}
      <Button className={classes.button2} aria-owns={anchorEl ? "simple-menu4" : undefined} aria-haspopup="true" onClick={handleClick4} onMouseOver={handleClick4}>
        #WFM
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
        <table>
          <tr>
            <th style={{textAlign: "left", fontSize: 14}}>Chairs</th>
            <th style={{textAlign: "left", fontSize: 14}}>Seating</th>
            <th style={{textAlign: "left", fontSize: 14}}>Tables</th>
            <th style={{textAlign: "left", fontSize: 14}}>Cabinetry</th>
            <th style={{textAlign: "left", fontSize: 14}}>Lighting</th>
            <th style={{textAlign: "left", fontSize: 14}}>Decor</th>
          </tr>
          <tr>
            {/* Chairs */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Ergonomic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>High Back Ergonomic</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mid Back Ergonomic</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Low Back Ergonomic</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Executive Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>High Back Executive</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mid Back Executive</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Guest Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Folding Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Arm Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Plastic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Iconic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cantilever Chairs</MenuItem>
            </td>
            {/* Seating */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bean Bags</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Foot Stools</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Seating Stools</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pouffes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Chair Pads</MenuItem>
            </td>
            {/* Tables */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Computer Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Writing Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Hutch Desks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Portable Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Office Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Work Stations</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Executive Desks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Kids study Table</MenuItem>
            </td>
            {/* Cabinetry */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Office Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>File Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pedestals</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Plastic Cabinets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Cases</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cabinates</MenuItem>
            </td>
            {/* Lighting */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Floor Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table LAnterns</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Filament Bulbs</MenuItem>
            </td>
            {/* Decor */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table Clocks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Photo Frames</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Magazine Holders</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Figurines</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Transport Decor</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pots & Planters</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Natural Plants</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Artificial Plants</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Artificial Flowers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Feng Shui</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Metal Wall Art</MenuItem>
            </td>
          </tr>
        </table>
      </Menu>
      {/* button 4 end*/}
      {/* button 5*/}
      <Button className={classes.button2} aria-owns={anchorEl ? "simple-menu5" : undefined} aria-haspopup="true" onClick={handleClick5} onMouseOver={handleClick5}>
        Kids Room
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
        <table>
          <tr>
            <th style={{textAlign: "left", fontSize: 14}}>Beds</th>
            <th style={{textAlign: "left", fontSize: 14}}>Study</th>
            <th style={{textAlign: "left", fontSize: 14}}>Storage</th>
            <th style={{textAlign: "left", fontSize: 14}}>Seating</th>
            <th style={{textAlign: "left", fontSize: 14}}>Decor</th>
            <th style={{textAlign: "left", fontSize: 14}}>Bedding</th>
            <th style={{textAlign: "left", fontSize: 14}}>Furnishings</th>
          </tr>
          <tr>
            {/* Beds */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cribs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Panel Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bunk Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Loft Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Trundle Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bookcase Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Novelty Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Tent Beds</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bed Units</MenuItem>
            </td>
            {/* Study */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Infant Desks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Activity Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Boards</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Art Easels</MenuItem>
            </td>
            {/* Storage */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Cases</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Storage Cabinets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Chest of Drawers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Storage Baskets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Storage Boxes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wardrobes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bedside Tables</MenuItem>  
            </td>
            {/* Seating */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Chairs</MenuItem> 
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Infant Chairs</MenuItem> 
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Rockers</MenuItem> 
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Stools</MenuItem> 
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sofas</MenuItem> 
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bean Bags</MenuItem> 
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Swings</MenuItem> 
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Tents</MenuItem> 
            </td>
            {/* Decor */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Ends</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Arts</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Lights</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Clocks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mirrors</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Height Charts</MenuItem>
            </td>
            {/* Bedding */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bed Sheets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pillows</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Blankets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Comforters</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bedding Sets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Sleeping Bags</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Baby Wraps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mattresses</MenuItem>
            </td>
            {/* Furnishings */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cushion Covers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Curtains</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Carpets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Floor Mats</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Towels</MenuItem>
            </td>
          </tr>
        </table>      
      </Menu>
      {/* button 5 end*/}
      {/* button 5*/}
      <Button className={classes.button2} aria-owns={anchorEl ? "simple-menu6" : undefined} aria-haspopup="true" onClick={handleClick6} onMouseOver={handleClick6}>
        Mattresses
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
        <table>
          <tr>
            <th style={{textAlign: "left", fontSize: 14}}>Chairs</th>
            <th style={{textAlign: "left", fontSize: 14}}>Seating</th>
            <th style={{textAlign: "left", fontSize: 14}}>Tables</th>
            <th style={{textAlign: "left", fontSize: 14}}>Cabinetry</th>
            <th style={{textAlign: "left", fontSize: 14}}>Lighting</th>
            <th style={{textAlign: "left", fontSize: 14}}>Decor</th>
          </tr>
          <tr>
            {/* Chairs */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Ergonomic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>High Back Ergonomic</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mid Back Ergonomic</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Low Back Ergonomic</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Executive Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>High Back Executive</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Mid Back Executive</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Guest Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Folding Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Arm Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Plastic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Iconic Chairs</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cantilever Chairs</MenuItem>
            </td>
            {/* Seating */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Bean Bags</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Foot Stools</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Seating Stools</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pouffes</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Chair Pads</MenuItem>
            </td>
            {/* Tables */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Computer Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Writing Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Hutch Desks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Portable Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Office Tables</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Work Stations</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Executive Desks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Kids study Table</MenuItem>
            </td>
            {/* Cabinetry */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Office Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>File Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pedestals</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Plastic Cabinets</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Book Cases</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Cabinates</MenuItem>
            </td>
            {/* Lighting */}
            <td style={{borderTop: "1px solid #E7E7E7"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Study Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Floor Lamps</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table LAnterns</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Filament Bulbs</MenuItem>
            </td>
            {/* Decor */}
            <td style={{borderTop: "1px solid #E7E7E7", backgroundColor: "#F5F5F5"}}>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Shelves</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Wall Cabinates</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Table Clocks</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Photo Frames</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Magazine Holders</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Figurines</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Transport Decor</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Pots & Planters</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Natural Plants</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Artificial Plants</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Artificial Flowers</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Feng Shui</MenuItem>
              <MenuItem style={{fontSize: 14}} onClick={handleClose}>Metal Wall Art</MenuItem>
            </td>
          </tr>
        </table>      </Menu>
      {/* button 6 end*/}
      {/* button 7*/}
      <Button className={classes.button2} aria-owns={anchorEl ? "simple-menu7" : undefined} aria-haspopup="true" onClick={handleClick7} onMouseOver={handleClick7}>
        Furnishings
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
        <div style={{ display: "flex" }}>
        <div>
          <MenuItem onClick={handleClose}>Profile7</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleClose}>Profile2</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
      </div>
      </Menu>
      {/* button 7 end*/}
      {/* button 8*/}
      <Button className={classes.button2} aria-owns={anchorEl ? "simple-menu8" : undefined} aria-haspopup="true" onClick={handleClick8} onMouseOver={handleClick8}>
        Decor
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
        <div style={{ display: "flex" }}>
        <div>
          <MenuItem onClick={handleClose}>Profile8</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleClose}>Profile2</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
      </div>
      </Menu>
      {/* button 8 end*/}
      {/* button 9*/}
      <Button className={classes.button2} aria-owns={anchorEl ? "simple-menu9" : undefined} aria-haspopup="true" onClick={handleClick9} onMouseOver={handleClick9}>
        Lighting
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
        <div style={{ display: "flex" }}>
        <div>
          <MenuItem onClick={handleClose}>Profile9</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleClose}>Profile2</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
      </div>
      </Menu>
      {/* button 9 end*/}
      {/* button 10*/}
      <Button className={classes.button2} aria-owns={anchorEl ? "simple-menu10" : undefined} aria-haspopup="true" onClick={handleClick10} onMouseOver={handleClick10}>
        Modular Furniture
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
        <div style={{ display: "flex" }}>
        <div>
          <MenuItem onClick={handleClose}>Profile10</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
        <div>
          <MenuItem onClick={handleClose}>Profile2</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </div>
      </div>
      </Menu>
      {/* button 10 end*/}

    </MenuBar>
  )
}

export {DropDown}
