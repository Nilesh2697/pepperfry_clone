import React from 'react'
import styles from "styled-components"
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { styled } from '@material-ui/core';

const MenuBar = styles.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`

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
      <Button aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick} onMouseOver={handleClick} style={{border: "1px solid", marginLeft: "3.6%", marginTop: "0.8%"}}>
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
            <th style={{textAlign: "left"}}>Sofas</th>
            <th style={{textAlign: "left"}}>Seatings</th>
            <th style={{textAlign: "left"}}>Chairs</th>
            <th style={{textAlign: "left"}}>Tables</th>
            <th style={{textAlign: "left"}}>Cabinetry</th>
            <th style={{textAlign: "left"}}>Dining & Bar</th>
            <th style={{textAlign: "left"}}>Beds</th>
          </tr>
          <tr>
            {/* Sofas */}
            <td style={{borderTop: "1px solid"}}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </td>
            {/* Seatings */}
            <td style={{borderTop: "1px solid"}}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </td>
            {/* Chairs */}
            <td>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </td>
            {/* Tables */}
            <td>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </td>
            {/* Cabinetry */}
            <td>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </td>
            {/* Dining & Bar */}
            <td>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </td>
            {/* Beds */}
            <td>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </td>
          </tr>
        </table>
        {/* <div style={{ display: "flex"}}>
          <div>
            <strong>Sofas</strong>
            <div>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            </div>
          </div>
          <div>
            <strong>Seatings</strong>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </div>
          <div>
            <strong>Chairs</strong>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </div>
          <div>
            <strong>Tables</strong>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </div>
          <div>
            <strong>Cabinetry</strong>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </div>
          <div>
            <strong>Dining & Bar</strong>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </div>
          <div>
            <strong>Beds</strong>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </div>
        </div> */}
      </Menu>
      {/* button 1 end*/}
      {/* button 2 */}
      <Button aria-owns={anchorEl ? "simple-menu2" : undefined} aria-haspopup="true" onClick={handleClick2} onMouseOver={handleClick2} style={{border: "1px solid", marginLeft: "1.9%", marginTop: "0.8%"}}>
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
        <div style={{ display: "flex" }}>
        <div>
          <MenuItem onClick={handleClose}>Profile2</MenuItem>
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
      {/* button 2 end*/}
      {/* button 3 */}
      <Button aria-owns={anchorEl ? "simple-menu3" : undefined} aria-haspopup="true" onClick={handleClick3} onMouseOver={handleClick3} style={{border: "1px solid", marginLeft: "1.9%", marginTop: "0.8%"}}>
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
        <div style={{ display: "flex" }}>
        <div>
          <MenuItem onClick={handleClose}>Profile3</MenuItem>
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
      {/* button 3 end*/}
      {/* button 4*/}
      <Button aria-owns={anchorEl ? "simple-menu4" : undefined} aria-haspopup="true" onClick={handleClick4} onMouseOver={handleClick4} style={{border: "1px solid", marginLeft: "1.9%", marginTop: "0.8%"}}>
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
        <div style={{ display: "flex" }}>
        <div>
          <MenuItem onClick={handleClose}>Profile4</MenuItem>
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
      {/* button 4 end*/}
      {/* button 5*/}
      <Button aria-owns={anchorEl ? "simple-menu5" : undefined} aria-haspopup="true" onClick={handleClick5} onMouseOver={handleClick5} style={{border: "1px solid", marginLeft: "1.9%", marginTop: "0.8%"}}>
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
        <div style={{ display: "flex" }}>
        <div>
          <MenuItem onClick={handleClose}>Profile5</MenuItem>
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
      {/* button 5 end*/}
      {/* button 5*/}
      <Button aria-owns={anchorEl ? "simple-menu6" : undefined} aria-haspopup="true" onClick={handleClick6} onMouseOver={handleClick6} style={{border: "1px solid", marginLeft: "1.9%", marginTop: "0.8%"}}>
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
        <div style={{ display: "flex" }}>
        <div>
          <MenuItem onClick={handleClose}>Profile6</MenuItem>
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
      {/* button 6 end*/}
      {/* button 7*/}
      <Button aria-owns={anchorEl ? "simple-menu7" : undefined} aria-haspopup="true" onClick={handleClick7} onMouseOver={handleClick7} style={{border: "1px solid", marginLeft: "1.9%", marginTop: "0.8%"}}>
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
      <Button aria-owns={anchorEl ? "simple-menu8" : undefined} aria-haspopup="true" onClick={handleClick8} onMouseOver={handleClick8} style={{border: "1px solid", marginLeft: "1.9%", marginTop: "0.8%"}}>
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
      <Button aria-owns={anchorEl ? "simple-menu9" : undefined} aria-haspopup="true" onClick={handleClick9} onMouseOver={handleClick9} style={{border: "1px solid", marginLeft: "1.9%", marginTop: "0.8%"}}>
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
      {/* button 7*/}
      <Button aria-owns={anchorEl ? "simple-menu10" : undefined} aria-haspopup="true" onClick={handleClick10} onMouseOver={handleClick10} style={{border: "1px solid", marginLeft: "1.9%", marginTop: "0.8%"}}>
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
