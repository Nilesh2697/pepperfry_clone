import React from 'react';
import { PaymentDisplay, Pincode, PinInput, ProductDisplay, ProductMain } from './CheckOutStyle';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';


const db = [ {
    "id": 1,
    "name": "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    "img": ["https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
            "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-nqijeg.jpg",
            "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-qoh0xi.jpg",
            "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-ra9orm.jpg"],
    "madeBy": "CasaCraft by Pepperfry",
    "offer_price": "1,13,999",
    "actual_price": "1,84,999",
    "total_savings": "71,000 (38% Off)",
    "price": 113999,
    "seater": 3,
    "details":{
        "brand": "CasaCraft",
        "dimensions": "H 35 x W 83 x D 38; Seating Height -18 (All dimension in inches)",
        "weight": "64 KG",
        "warranty": "36 Months' Warranty",
        "assembly": "Carpenter Assembly",
        "primary material": "Half Leather",
        "room type": "Living Room",
        "seating height": 18,
        "overview": "Casacraft offers the best in comfort with elan. The collections are a series of modern trendy designs, simple yet striking and represent the ideals of minimalism. The designs are a perfect blend of functionality and exceptional aesthetics. Each piece is crafted with passion and follows international standards on quality and style. Contemporary Style Sofas are very current and in trend. Its a very fluid, simplistic style which takes its cues from the in-vogue polishes, textures and colours of the season and is bereft of any ornamentation or embellishments. In this style you can see nods to modern, traditional, art deco and even futuristic design."
    }
},
{
    "id": 2,
    "name": "Amelia 2 Seater Sofa in Charcoal Grey Colour",
    "img": ["https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-2-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-2-seater-sofa-in-charcoal-grey-colo-mc0vev.jpg",
            "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-two-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-two-seater-sofa-in-charcoal-grey--3g7ees.jpg",
            "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-two-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-two-seater-sofa-in-charcoal-grey--qsy3nv.jpg",
            "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-two-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-two-seater-sofa-in-charcoal-grey--nifmkr.jpg"],
    "madeBy": "CasaCraft by Pepperfry",
    "offer_price": "28,999",
    "actual_price": "46,999",
    "total_savings": "18,000 (38% Off)",
    "price": 28999,
    "seater": 2,
    "details":{
        "brand": "CasaCraft",
        "dimensions": "H 34.5 x W 48 x D 31; Seating Height-18.5 (All Dimension in Inches)",
        "weight": "26.95 KG",
        "warranty": "36 Months' Warranty",
        "assembly": "No Assembly Required",
        "primary material": "Fabric",
        "room type": "Living Room",
        "seating height": 19,
        "overview": "Casacraft offers the best in comfort with elan. The collections are a series of modern trendy designs, simple yet striking and represent the ideals of minimalism. The designs are a perfect blend of functionality and exceptional aesthetics. Each piece is crafted with passion and follows international standards on quality and style. Contemporary Style Sofas are very current and in trend. Its a very fluid, simplistic style which takes its cues from the in-vogue polishes, textures and colours of the season and is bereft of any ornamentation or embellishments. In this style you can see nods to modern, traditional, art deco and even futuristic design."
    }
},
{
    "id": 3,
    "name": "Miranda 3 Seater Sofa in Navy Blue Colour",
    "img": ["https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-3-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-3-seater-sofa-in-navy-blue-colour-by-ee7lmu.jpg",
            "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-three-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-three-seater-sofa-in-navy-blue-c-ecuf5p.jpg",
            "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-three-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-three-seater-sofa-in-navy-blue-c-cjlzqj.jpg",
            "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-three-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-three-seater-sofa-in-navy-blue-c-zd5fj8.jpg"],
    "madeBy": "Woodsworth by Pepperfry",
    "offer_price": "49,999",
    "actual_price": "81,999",
    "total_savings": "32,000 (39% Off)",
    "price": 49999,
    "seater": 3,
    "details":{
        "brand": "Woodsworth",
        "dimensions": " H 35.5 x W 80 x D 35.5; Seating Height-18; Seating Depth - 22.5 (all dimensions in inches)",
        "weight": "54 KG",
        "warranty": "36 Months' Warranty",
        "assembly": "Carpenter Assembly",
        "primary material": "Fabric",
        "room type": "Living Room",
        "seating height": 18,
        "overview": "Woodsworth is our premium homegrown label thats part classic, part contemporary. A delectable amalgamation of the timeless and trendy, a precarious balance of function and flair. Woodsworth is a harmonious fit for all tastes, styles and spaces. This type is attributed to Thomas W. Lawson, an American businessman and author who commissioned the model for extra comfort. You can recognize a Lawson by three back cushions and arms lower than the back (slightly rolled or square). You can find textile and leather finishes and various embedded materials, including metal and wood. Furniture bought on Pepperfry.com comes with a 3 Year Warranty against any manufacturing defects. So go ahead and buy with confidence."
    }
}]

function CheckOutMain(){

    return (
        <ProductMain>
             <ProductDisplay>
              <div>
                  <h2 style={{letterSpacing:'-1px'}}>IN YOUR CART 
                        <span style={{marginLeft:'1%',letterSpacing:'.01px',color:'#969696',fontSize:'15px'}}>{`(${3} Items)`}</span>
                  </h2>
              </div>
              <Pincode style={{backgroundColor:'#f5f5f5'}}>
                    <LocationOnOutlinedIcon style={{color:'#969696',width:'25%',border:'1px solid black',marginTop:'-1%'}}/>
                    <h3 style={{marginTop:'-2.5%',marginLeft:'-80.5%',letterSpacing:'-1px',fontSizeAdjust:'15px',fontWeight:'600',color:'#969696',width:'250%',border:'1px solid black'}}>Enter Your Pincode For Delivery & Assembly Information</h3>
                    <input style={{border:'1px solid black',marginLeft:'40%',height:'115%',marginTop:'-3.5%',width
                :'70%'}} type='number' maxLength='6' step='0.01'/>
                    <button style={{border:'1px solid black',width:'30%',marginTop:'-3.5%',height:'115%',marginLeft:'9%',backgroundColor:'black',color:'white',fontSize:'13px'}}>GO</button>
              </Pincode>
              <div>
                  {db.map((item) => {
                     <div>{item}</div>
                  })}
              </div>
             </ProductDisplay>
             <PaymentDisplay>
                 <strong style={{fontSize:'16px',fontFamily:'Fira Sans, sans-serif'}}>Have A Coupon Code?</strong>
                 <br/>
                 <i><CardGiftcardOutlinedIcon style={{position:"absolute",bottom:"2px",right:"5px",width:"24px",height:"24px"}}/></i>
                 <input type='text' placeholder="Enter Coupon Code"/>
                 <button style={{backgroundColor:'#e96a19'}}>APPLY</button>
             </PaymentDisplay>
        </ProductMain>
    )
}

export {CheckOutMain}