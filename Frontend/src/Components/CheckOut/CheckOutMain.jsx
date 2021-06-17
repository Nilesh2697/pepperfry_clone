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
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";

function CheckOutMain({ data, key }) {
  const cartpro = data[0]?.cart;
  const qty = cartpro?.map((i) => i.qty);
  const [count, setCount] = React.useState(1);
  //console.log(cartpro)

  const handlecartvalue = (val, id, e) => {
    cartpro?.map((ele, i) => {
      const finalid = ele?.id;
      e = Number(e)
      //console.log(finalid, quantity,i)
      if ( i === e && finalid === id) {
        const quantity = count;
            console.log(quantity,i,e,finalid,id)
            setCount(quantity + val);
            console.log(count);
      
       
      } else {
        // if (e !== i && finalid !== id) {
        //     const quantity = count
        //   setCount((quantity-quantity) +1);
        // }
      }
    });

    //   id? setCount(value_count) : null
  };

  const calculatecartval = () => {
      
  }

  React.useEffect(() => {
      calculatecartval()
  },[])
  
  
  return (
    <ProductMain key={key}>
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
          {cartpro?.map((item,i) => {
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
                    <img
                      style={{
                        width: "8%",
                        marginLeft: "50%",
                        marginTop: "-10%",
                      }}
                      src="https://www.materialui.co/materialIcons/action/info_outline_grey_192x192.png"
                      alt="info"
                    />
                    <span className={styles.tooltiptext}>
                      Due to the current lockdown across cities, deleiveries may
                      take more longer than usual.
                    </span>
                  </div>
                  <h4 style={{ marginLeft: "17%", marginTop: "-15%" }}>
                    Fri, 25 Jun
                  </h4>
                  <h4 style={{ marginLeft: "17%", marginTop: "-6%" }}>
                    Charges ₹ 999
                  </h4>
                  <img
                    style={{ width: "10%", marginTop: "-6%" }}
                    src="https://static.thenounproject.com/png/390337-200.png"
                    alt="stack"
                  />
                  <h5
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#969696",
                      marginTop: "-11%",
                      marginLeft: "17%",
                    }}
                  >
                    Assembly
                  </h5>
                  {/* <h4 style={{marginLeft:'17%',marginTop:'-5%'}}>{item.details.assembly}</h4> */}
                </ProData>
                <ProPrice>
                  <button
                    value={i}
                    disabled={count === 0 ? true : false}
                    onClick={(e) => {
                      handlecartvalue(-1, item.id,e.target.value);
                    }}
                  >
                    -
                  </button>
                  <div>{count}</div>
                  <button
                    value={i}
                    onClick={(e) => {
                      handlecartvalue(1, item.id,e.target.value);
                    }}
                  >
                    +
                  </button>
                </ProPrice>
                <ProEdit>
                  <DeleteOutlineOutlinedIcon style={{ marginLeft: "60%" }} />
                  <FavoriteIcon style={{ color: "#969696" }} />
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
