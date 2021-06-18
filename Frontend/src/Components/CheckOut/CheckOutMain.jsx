import React, { useEffect, useRef } from "react";
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
import axios from "axios"

const calculatecartval = (
  data,
  cartpro,
  handleSetActual,
  handleSaving,
  handleOffer,
  handleTotal
) => {
  //console.log(data);
  var actualsum = 0;
  var Savings = 0;
  var Offer = 0;
  var Total = 0;
  var covid = 99;
  const cartac = data[0]?.cart;
  cartac?.map((el) => {
    //console.log(el.ap);
    // console.log(el.savings)
    Savings = Savings + el.savings;
    actualsum = actualsum + el.ap;
    Offer = Offer + Number(el.price);
  });

  handleSetActual(actualsum);
  handleSaving(Savings);
  handleOffer(Offer);

  Total = Total + actualsum + Savings + Offer;
  handleTotal(Total);

  //   return sum;
  // handleSetActual(actualsum);
};

////////////////////Razor pay//////////////////////
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}
///////////////////////////////////////////////////

function CheckOutMain({ data }) {
  console.log(data[0]);
  const [actual, setActual] = React.useState(0);
  const [saving, setSaving] = React.useState(0);
  const [offer,setOffer] = React.useState(0);
  const [totalcheckout, setTotalCheckout] = React.useState(0)
  const [status, setStatus] = React.useState("")

  let amountRef = useRef(actual);
  const cartpro = data[0]?.cart;
  const qty = cartpro?.map((i) => i.qty);
  const [count, setCount] = React.useState(1);
  //console.log(cartpro)
  var flag = 0;
  const handleSetActual = (val) => {
    setActual(val);
  };
  const handleSaving = (val) => {
    setSaving(val);
  };

  const handleOffer = (val) => {
    setOffer(val);
  };

  const handleTotal = (val) => {
    setTotalCheckout(val);
  };

  useEffect(
    () =>
      (amountRef.current = calculatecartval(
        data,
        cartpro,
        handleSetActual,
        handleSaving,
        handleOffer,
        handleTotal
      )),
    [data]
  );

  //   calculatecartval(data, cartpro);

  const handlecartvalue = (val, id, e, Name) => {
    cartpro?.map((ele, i) => {
      const finalid = ele?.id;
      const name = ele?.item;
      e = Number(e);
      //console.log(finalid, quantity,i)
      if (name === Name && i === e && finalid === id) {
        flag = 1;
        //console.log(count, i, e, finalid, id, name, Name);
        if (flag === 1) {
          setCount(count + val);
          //console.log(count);
        }
      } else {
        flag = 0;
      }
    });
  };

  //////////////////////////Razorpay starts////////////////////////////////////////
  const name = data[0]?.name
  const email = data[0]?.email
  const cartItem = data[0]?.cart
  const usID = data[0]?._id

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch(`http://localhost:3001/razorpay/${offer}`, { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: 'rzp_test_J2k9Sh8dP5mkAX',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: '',
			handler: function (response) {
				setStatus(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature
			},
			prefill: {
				name,
				email,
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

  const orderSubmit = () => {
    axios.put(`http://localhost:3001/users/${usID}`,{
      cart:[],
      orders: cartItem
    }).then(resp => console.log(resp.data))
    .catch(err => console.log(err))
    localStorage.removeItem('finalCart')
  }

  React.useEffect(()=>{
    status.length > 0 && orderSubmit()
  },[status])

///////////////////Razorpay ends/////////////////////////
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
          {cartpro?.map((item, i) => {
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  border: "1px solid #e7e2e2",
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
                  <h4 style={{ color: "#e96a19" }}>{item.details.warranty}</h4>
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
                  <h4 style={{marginLeft:'17%',marginTop:'-5%'}}>{item.details.assembly}</h4>
                </ProData>
                <ProPrice>
                  <div style={{color:'#898686',fontWeight:'500',textDecoration:'line-through'}}>₹ {item.actual_price}</div>
                  <div style={{color:'#e96a19', fontWeight:'500'}}>₹ {item.offer_price}</div>
                </ProPrice>
                <ProEdit>
                  <DeleteOutlineOutlinedIcon />
                  <FavoriteIcon style={{ color: "#b8b8b8" }} />
                </ProEdit>
              </div>
            );
          })}
        </Product>
      </ProductDisplay>
      <PaymentDisplay>
        <div
          style={{
            width: "100%",
            border: "1px solid #e7e2e2",
            marginTop: "-2.5%",
            marginBottom: "4%",
          }}
        >
          <h3 style={{ paddingLeft: "3%" }}>Login OR Register</h3>
          <h4
            style={{ paddingLeft: "3%", color: "#acabab", fontWeight: "480" }}
          >
            For Express Checkout, Exciting Offers & More.
          </h4>
        </div>
        <strong
          style={{
            fontSize: "15px",
            fontFamily: "Fira Sans, sans-serif",
            paddingLeft: "3%",
          }}
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
            minHeight: "39.5px",
            maxHeight: "39.5px",
            marginLeft: "-.5%",
            color: "white",
            fontWeight: "500",
            paddingLeft: "3%",
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
          <div style={{ float: "left", fontWeight: "500", marginLeft: "4%" }}>
            MRP
          </div>
          <div
            style={{ textAlign: "right", marginRight: "5%", fontWeight: "500" }}
          >
            ₹{actual === 0 ? "ZERO" : new Intl.NumberFormat('en-IN', { maximumSignificantDigits: actual.length }).format(actual)}
          </div>
          <div
            style={{
              float: "left",
              fontWeight: "500",
              marginLeft: "4%",
              color: "#588209",
            }}
          >
            Retail Discount
          </div>
          <div
            style={{
              textAlign: "right",
              marginRight: "5%",
              fontWeight: "500",
              color: "#588209",
            }}
          >
            (-) ₹{saving === 0 ? "Zero" : new Intl.NumberFormat('en-IN', { maximumSignificantDigits: saving.length }).format(saving)}
          </div>
          <div style={{ float: "left", fontWeight: "700", marginLeft: "4%" }}>
            Offer Price
          </div>
          <div
            style={{ textAlign: "right", marginRight: "5%", fontWeight: "700" }}
          >
            ₹{offer === 0 ? "zero" : new Intl.NumberFormat('en-IN', { maximumSignificantDigits: offer.length }).format(offer)}
          </div>
          <div
            style={{
              borderBottom: " 1px solid #d6d4d4",
              marginTop: "5%",
              marginBottom: "3%",
            }}
          ></div>
          <div
            style={{
              float: "left",
              fontWeight: "500",
              marginLeft: "4%",
              fontSize: "19px",
            }}
          >
            You Pay
          </div>
          <div
            style={{
              textAlign: "right",
              marginRight: "5%",
              fontWeight: "500",
              fontSize: "19px",
            }}
          >
            ₹{offer === 0 ? "zero" : new Intl.NumberFormat('en-IN', { maximumSignificantDigits: offer.length }).format(offer)}
          </div>
          <div
            style={{
              textAlign: "right",
              fontWeight: "500",
              marginRight: "5%",
              fontSize: "12px",
              color: "#b3b1b1",
            }}
          >
            (Inclusive of all taxes)
          </div>
          <div
            style={{
              marginTop: "4%",
              paddingLeft: "3%",
              color: "#14a9cc",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            No Cost EMI available. EMI starting ₹ 735/month
          </div>
          <button
            onClick={displayRazorpay}
            style={{
              backgroundColor: "#e96a19",
              width: "100%",
              border: "none",
              minHeight: "42px",
              maxHeight: "42px",
              color: "white",
              fontWeight: "500",
              marginTop: "8%",
              textAlign: "center",
            }}
          >
            PLACE ORDER
          </button>
        </Invoice>
      </PaymentDisplay>
    </ProductMain>
  );
}

export { CheckOutMain };
