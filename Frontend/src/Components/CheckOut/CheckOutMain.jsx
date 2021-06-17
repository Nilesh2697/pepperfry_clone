import React from "react";
import {
  PaymentDisplay,
  Pincode,
  ProductDisplay,
  ProductMain,
  Invoice,
  Product,
  ProImage,
  ProData,
  ProPrice,
  ProEdit,
} from "./CheckOutStyle";
import { Tooltip } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import styles from "./Checkout.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DateRangeSharpIcon from "@material-ui/icons/DateRangeSharp";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';

const db = [
  {
    id: 1,
    name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    img: [
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-nqijeg.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-qoh0xi.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-ra9orm.jpg",
    ],
    madeBy: "CasaCraft by Pepperfry",
    offer_price: "1,13,999",
    actual_price: "1,84,999",
    total_savings: "71,000 (38% Off)",
    price: 113999,
    seater: 3,
    details: {
      brand: "CasaCraft",
      dimensions:
        "H 35 x W 83 x D 38; Seating Height -18 (All dimension in inches)",
      weight: "64 KG",
      warranty: "36 Months' Warranty",
      assembly: "Carpenter Assembly",
      "primary material": "Half Leather",
      "room type": "Living Room",
      "seating height": 18,
      overview:
        "Casacraft offers the best in comfort with elan. The collections are a series of modern trendy designs, simple yet striking and represent the ideals of minimalism. The designs are a perfect blend of functionality and exceptional aesthetics. Each piece is crafted with passion and follows international standards on quality and style. Contemporary Style Sofas are very current and in trend. Its a very fluid, simplistic style which takes its cues from the in-vogue polishes, textures and colours of the season and is bereft of any ornamentation or embellishments. In this style you can see nods to modern, traditional, art deco and even futuristic design.",
    },
  },
  {
    id: 2,
    name: "Amelia 2 Seater Sofa in Charcoal Grey Colour",
    img: [
      "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-2-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-2-seater-sofa-in-charcoal-grey-colo-mc0vev.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-two-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-two-seater-sofa-in-charcoal-grey--3g7ees.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-two-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-two-seater-sofa-in-charcoal-grey--qsy3nv.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-two-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-two-seater-sofa-in-charcoal-grey--nifmkr.jpg",
    ],
    madeBy: "CasaCraft by Pepperfry",
    offer_price: "28,999",
    actual_price: "46,999",
    total_savings: "18,000 (38% Off)",
    price: 28999,
    seater: 2,
    details: {
      brand: "CasaCraft",
      dimensions:
        "H 34.5 x W 48 x D 31; Seating Height-18.5 (All Dimension in Inches)",
      weight: "26.95 KG",
      warranty: "36 Months' Warranty",
      assembly: "No Assembly Required",
      "primary material": "Fabric",
      "room type": "Living Room",
      "seating height": 19,
      overview:
        "Casacraft offers the best in comfort with elan. The collections are a series of modern trendy designs, simple yet striking and represent the ideals of minimalism. The designs are a perfect blend of functionality and exceptional aesthetics. Each piece is crafted with passion and follows international standards on quality and style. Contemporary Style Sofas are very current and in trend. Its a very fluid, simplistic style which takes its cues from the in-vogue polishes, textures and colours of the season and is bereft of any ornamentation or embellishments. In this style you can see nods to modern, traditional, art deco and even futuristic design.",
    },
  },
  {
    id: 3,
    name: "Miranda 3 Seater Sofa in Navy Blue Colour",
    img: [
      "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-3-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-3-seater-sofa-in-navy-blue-colour-by-ee7lmu.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-three-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-three-seater-sofa-in-navy-blue-c-ecuf5p.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-three-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-three-seater-sofa-in-navy-blue-c-cjlzqj.jpg",
      "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-three-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-three-seater-sofa-in-navy-blue-c-zd5fj8.jpg",
    ],
    madeBy: "Woodsworth by Pepperfry",
    offer_price: "49,999",
    actual_price: "81,999",
    total_savings: "32,000 (39% Off)",
    price: 49999,
    seater: 3,
    details: {
      brand: "Woodsworth",
      dimensions:
        " H 35.5 x W 80 x D 35.5; Seating Height-18; Seating Depth - 22.5 (all dimensions in inches)",
      weight: "54 KG",
      warranty: "36 Months' Warranty",
      assembly: "Carpenter Assembly",
      "primary material": "Fabric",
      "room type": "Living Room",
      "seating height": 18,
      overview:
        "Woodsworth is our premium homegrown label thats part classic, part contemporary. A delectable amalgamation of the timeless and trendy, a precarious balance of function and flair. Woodsworth is a harmonious fit for all tastes, styles and spaces. This type is attributed to Thomas W. Lawson, an American businessman and author who commissioned the model for extra comfort. You can recognize a Lawson by three back cushions and arms lower than the back (slightly rolled or square). You can find textile and leather finishes and various embedded materials, including metal and wood. Furniture bought on Pepperfry.com comes with a 3 Year Warranty against any manufacturing defects. So go ahead and buy with confidence.",
    },
  },
];

function CheckOutMain({data}) {

    const cartpro = data[0]?.cart

    console.log(cartpro)

    // const cartlist = cartitem.map((i) => {
    //     console.log(i.item)
    // })
    
    const handlecartvalue = () => {

    }
  return (
    <ProductMain>
      <ProductDisplay>
        <div>
          <h2 style={{ letterSpacing: "-1px" }}>
            IN YOUR CART
            <span
              style={{
                marginLeft: "1%",
                letterSpacing: ".01px",
                color: "#969696",
                fontSize: "15px",
              }}
            >{`(${3} Items)`}</span>
          </h2>
        </div>
        <Pincode style={{ backgroundColor: "#f5f5f5" }}>
          <LocationOnOutlinedIcon
            style={{ color: "#969696", width: "25%", marginTop: "1%" }}
          />
          <h3
            style={{
              marginTop: "-.5%",
              marginLeft: "-80.5%",
              letterSpacing: "-1px",
              fontSizeAdjust: "15px",
              fontWeight: "600",
              color: "#969696",
              width: "250%",
            }}
          >
            Enter Your Pincode For Delivery & Assembly Information
          </h3>
          <input
            style={{
              marginLeft: "40%",
              height: "115%",
              marginTop: "-3.5%",
              width: "70%",
            }}
            type="number"
            maxLength="6"
            step="0.01"
          />
          <button
            style={{
              width: "30%",
              marginTop: "-3.5%",
              height: "115%",
              marginLeft: "9%",
              backgroundColor: "black",
              color: "white",
              fontSize: "13px",
            }}
          >
            GO
          </button>
        </Pincode>
        <Product>
            {/* {console.log(cartitem)} */}
          {cartpro?.map((item) => {
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  border: "1px solid #969696",
                  padding: "2% 2%",
                }}
              >
                <ProImage>
                  <img
                    style={{ width: "95%", height: "100px" }}
                    src={item.image}
                    alt="Sofa"
                  />
                </ProImage>
                <ProData>
                  <h4 style={{ fontWeight: 600 }}>{item.item}</h4>
                  {/* <h4 style={{ color: "#e96a19" }}>{item.details.warranty}</h4> */}
                  <DateRangeSharpIcon style={{ width: "10%" }} />
                  <h5
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#969696",
                      marginTop: "-14%",
                      marginLeft: "17%",
                    }}
                  >
                    Delivery By
                  </h5>
                  
                    <div className={styles.tooltip}>
                     <img style={{width:'8%',marginLeft:'50%',marginTop:'-10%'}} src='https://www.materialui.co/materialIcons/action/info_outline_grey_192x192.png' alt='info'/>
                     <span className={styles.tooltiptext}>Due to the current lockdown across cities, deleiveries may take more longer than usual.</span>
                     </div>
                      <h4 style={{ marginLeft: "17%", marginTop: "-15%" }}>
                        Fri, 25 Jun
                      </h4>
                      <h4 style={{ marginLeft: "17%", marginTop: "-6%" }}>Charges ₹ 999</h4>
                      <img style={{width:'10%',marginTop:'-6%'}} src='https://static.thenounproject.com/png/390337-200.png' alt='stack'/>
                      <h5 style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#969696",
                      marginTop: "-11%",
                      marginLeft: "17%",
                    }}>Assembly</h5>
                    {/* <h4 style={{marginLeft:'17%',marginTop:'-5%'}}>{item.details.assembly}</h4> */}

                </ProData>
                <ProPrice>
                    <button onClick={() => {handlecartvalue(-1)}}>-</button>
                    <div>{}</div>
                    <button onClick={() => {handlecartvalue(1)}}>+</button>
                </ProPrice>
                <ProEdit>
                    <DeleteOutlineOutlinedIcon style={{marginLeft:'60%'}}/>
                    <FavoriteIcon style={{color:"#969696"}}/>
                </ProEdit>
              </div>
            );
          })}
        </Product>
      </ProductDisplay>
      <PaymentDisplay>
        <strong
          style={{ fontSize: "15px", fontFamily: "Fira Sans, sans-serif" }}
        >
          Have A Coupon Code?
        </strong>
        <br />
        <i style={{ position: "absolute" }} className={styles.icon}>
          <CardGiftcardOutlinedIcon style={{ color: "#bfbebe" }} />
        </i>
        <input
          className={styles.field}
          type="text"
          placeholder="Enter Coupon Code"
        />
        <button
          style={{
            backgroundColor: "#e96a19",
            width: "30%",
            border: "none",
            minHeight: "11.2%",
            maxHeight: "11.2%",
            marginLeft: "-.5%",
            color: "white",
            fontWeight: "500",
          }}
        >
          APPLY
        </button>

        <Invoice>
          <label className={styles.container} for="tooltip">
            Contribute Rs.99 For COVID Relief Through GiveIndia.
            <ArrowDropDownIcon for="tooltip" className={styles.tooltiparrow} />
            <input id="tooltip" type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
        </Invoice>
      </PaymentDisplay>
    </ProductMain>
  );
}

export { CheckOutMain };
