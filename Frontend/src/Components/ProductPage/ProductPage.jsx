import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import { getItem } from "../../Redux/Item/action"
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import tag from "../../Images/tag.PNG";
import { Divider, Link, Button } from '@material-ui/core';
import style from "./Prodbutton.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Prodmoreinfoback = styled.div`
    width: 100%;
    height: auto;
    background-color: #F5F5F5;
`

const Prodinfo = styled.div`
    width: 65%;
    height: 1000px;
    // border: 1px solid;
    margin: auto;
    display: flex;
    margin-top: 2%;
`

const Prodimage = styled.div`
    width: 45%;
    height: 350px;
    // border: 1px solid;
    // display: flex;
`

const Proddetails = styled.div`
    width: 50%;
    height: 1000px;
    margin-left: 5%;
    // border: 1px solid;
`

const Prodimagebox = styled.div`
    width: 100%;
    height: 350px;
    // border: 1px solid;
    position: relative;
    z-Index: 0;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const Miniimagebox = styled.div`
    width: 22%;
    height: 100px;
    margin-left: 2.4%;
    margin-top: 2%;
`

const Prodtitle = styled.div`
    width: 90%;
    height: 30px;
    // border: 1px solid;
    font-size: 18px;
    margin-left: 2%;
    margin-top: 2%;
    font-weight: bold;
`
const Prodtag = styled.div`
    width: 90%;
    height: 30px;
    // border: 1px solid;
    display: flex;
    margin-left: 2%;
    margin-top: 0.5%;
    font-size: 13px;
`

const Prodprice = styled.div`
    margin-left: 2%;
    margin-top: 0.5%;
    font-size: 22px;
    font-weight: bold;
    color: #FD3B02;
`
const Prodactprice = styled.div`
    margin-left: 2%;
    margin-top: 1.8%;
    font-size: 15px;
    font-weight: bold;
    color: #A496A4;
    text-decoration: line-through;
`

const ProdMRP = styled.div`
    margin-left: 2%;
    margin-top: 1.8%;
    font-size: 15px;
    color: #A496A4;
`

const Prodsaving = styled.div`
    display: flex;
    margin-left: 0.8%;
    // margin-top: 0.5%;
    font-size: 12px;
    font-weight: bold;
`

const ProdInfo = styled.div`
    width: 22%;
    height: 40px;
    // border: 1px solid;
    margin-left: 2%;
    margin-top: 2%;
    display: flex;
` 

const Prodseater = styled.div`
    width: 12%;
    height: 40px;
    border: 1px solid #969696;
    margin-left: 5%;
    margin-top: 2%;
    border-radius: 5px;
    text-align: center;
`

const Prodmore = styled.div`
    width: 90%;
    height: 100px;
    // border: 1px solid;
    margin-Left: 2%;
    margin-top: 2%;
    display: flex;
`

const Prodqunt = styled.div`
    width: 90%;
    height: 60px;
    // border: 1px solid;
    margin-Left: 2%;
    margin-top: 2%;
    display: flex;
`
const Delpincode = styled.div`
    width: 90%;
    height: 120px;
    // border: 1px solid;
    margin-top: 2%;
    margin-left: 2%;
`
const Proddetail = styled.div`
    width: 95%;
    height: 300px;
    // border: 1px solid;
    margin-top: 2%;
    margin-left: 2%;
    display: flex;
`
const Moreinfo = styled.div`
    width: 65%;
    height: 650px;
    border: 1px solid #F5F5F5;
    margin: auto;
    margin-top: 2%;
` 
const Moreinfotitle = styled.div`
    width: 95%;
    height: 60px;
    // border: 1px solid;
    margin: 2% auto;
    display: flex;
`

const Moretab = styled.div`
    width: 95%;
    height: 300px;
    // border: 1px solid;
    margin: auto;
    margin-top: 2%;
`

const ProductPage = () => {

    const [count, setCount] = React.useState(0)

    const dispatch = useDispatch()

    const params = useParams()
    const prodId = params.id

    React.useEffect(()=>{
        dispatch(getItem(prodId))
    },[])

    const itemData = useSelector((state) => state.item.data)

    console.log(itemData[0])

    const handleIncrement = (val) => {
        setCount(count+val)
    }

    return (
        <div>
        <Prodinfo>
            <Prodimage>
                <div style={{diaplay: "flex"}}>
                <IconButton disabled={count === 0} style={{border: "1px solid grey", zIndex: 1, position: "absolute", marginTop: "8%"}} onClick={()=>handleIncrement(-1)}>
                    <NavigateBeforeIcon />
                </IconButton>
                <Prodimagebox>
                    <Image src={itemData[0]?.img[count]} alt="image" />
                </Prodimagebox>
                <IconButton disabled={count === itemData[0]?.img.length-1} style={{border: "1px solid grey", zIndex: 1, position: "absolute", marginLeft: "26.5%", marginTop: "-10.5%"}} onClick={()=>handleIncrement(1)}>
                    <NavigateNextIcon />
                </IconButton>
                </div>
                <div style={{display: 'flex'}}>
                    {itemData[0]?.img.map(el => (
                        <Miniimagebox>
                            <img style={{width: "100%", height: "100%"}} src={el} alt="" />
                        </Miniimagebox>
                    ))}
                </div>
            </Prodimage>
            <Proddetails>
                <Prodtitle>{itemData[0]?.name}</Prodtitle>
                <Prodtag>
                    <div><h4>{itemData[0]?.madeBy}</h4></div>
                    <div><img src={tag} alt="tag"/></div>
                </Prodtag>
                <div style={{display: "flex"}}>
                    <Prodprice>₹ {itemData[0]?.offer_price}</Prodprice>
                    <Prodactprice>₹ {itemData[0]?.actual_price} MRP</Prodactprice>
                    <ProdMRP>(Inclusive of all taxes)</ProdMRP>
                </div>
                <Prodsaving>
                    <ProdMRP>Total Savings</ProdMRP>
                    <ProdMRP><p style={{color: "#F9AB4F"}}>₹ {itemData[0]?.total_savings}</p></ProdMRP>
                </Prodsaving>   
                <Divider style={{marginLeft: "2%"}} />
                <Prodsaving>
                    <img style={{width: "90%", height: 25, marginLeft: "2%", marginTop: "-0.2%"}} src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_VIPCoupon_Extended_14621_ex_2x.jpg" alt="" />
                </Prodsaving>   
                <Divider style={{marginLeft: "2%", marginTop: "1%"}} />
                <div style={{display: "flex"}}>
                    <ProdInfo>
                        <div>
                            <img src="https://ii1.pepperfry.com/images/svg/w20-calender-icon.svg" alt="emi" />
                        </div>
                        <div style={{fontSize: 12, lineHeight: "15%", marginLeft: "5%"}}>
                            <p style={{marginTop: "15%"}}>EMI from ₹ 1,695</p>
                            <Link>No Cost EMI</Link>
                        </div>
                    </ProdInfo>
                    <ProdInfo>
                        <div>
                            <img src="https://ii1.pepperfry.com/images/svg/w20-warranty-icon.svg" alt="warrenty" />
                        </div>
                        <div style={{fontSize: 12, lineHeight: "15%", marginLeft: "5%"}}>
                            <p style={{marginTop: "20%"}}>36 Months'</p>
                            <p>Warranty</p>
                        </div>
                    </ProdInfo>
                    <ProdInfo>
                        <div>
                            <img src="https://ii1.pepperfry.com/images/svg/w20-returns-icon.svg" alt="Returns" />
                        </div>
                        <div style={{fontSize: 12, lineHeight: "15%", marginLeft: "5%"}}>
                            <p style={{marginTop: "15%"}}>No Questions</p>
                            <p>Asked Returns</p>
                        </div>
                    </ProdInfo>
                    <ProdInfo>
                        <div>
                            <img src="https://ii1.pepperfry.com/images/svg/w21-safe-delivery.svg" alt="Deliver" />
                        </div>
                        <div style={{fontSize: 12, lineHeight: "20%", marginLeft: "5%"}}>
                            <p style={{marginTop: "20%"}}>Safe</p>
                            <p>Delivery</p>
                        </div>
                    </ProdInfo>
                </div>
                <Divider style={{marginLeft: "2%", marginTop: "1%"}} />
                {itemData[0]?.seater > 0 && 
                    <div style={{display: "flex"}}>
                        <strong style={{fontSize: 15, marginTop: "2.8%", marginLeft: "2%"}}>Seating</strong>
                        <Prodseater> <p style={{marginTop: "8.5%", fontWeight: 'bold'}}>{itemData[0]?.seater} Seater</p> </Prodseater>
                    </div>
                }
                <Prodmore>
                    <strong>More Offers</strong>
                    <div 
                        style={{
                            width: "80%", 
                            height: 60, 
                            border: "1px dashed", 
                            marginTop: "1%", 
                            marginLeft: "2%", 
                            borderRadius: 5,
                            lineHeight: "30%",
                            fontWeight: "bold",
                        }}>
                        <p style={{marginTop: "3%", marginLeft: "5%", color: "#FABC63"}}>No Cost EMI</p><br />
                        <p style={{marginLeft: "5%"}}>Get up to 6 months EMI with 0% interest rate</p>
                    </div>
                </Prodmore>
                <Prodqunt>
                    <strong>Quantity</strong>
                    <select style={{width: "10%", height: 30, fontWeight: "bold", marginLeft: "5%"}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </Prodqunt>
                <div style={{display: "flex"}}>
                    <Button style={{
                        backgroundColor: "#F16521",
                        color: "white",
                        fontWeight: "bold",
                        marginLeft: "2%",
                        width: "45%",
                        height: 50,  
                    }}>
                        ADD TO CART
                    </Button>
                    <Button style={{
                        color: "white", 
                        fontWeight: "bold",
                        marginLeft: "2%",
                        width: "45%",
                        height: 50,  
                    }} 
                    className={style.btn2}
                    >
                        BUY NOW
                    </Button>
                </div>
                <Divider style={{marginLeft: "2%", marginTop: "2%"}} />
                <Delpincode>
                    <div style={{display: "flex"}}>
                        <strong>Delivery</strong>
                        <div style={{border: "1px solid #E7E7E7", marginLeft: "5%"}}>
                            <input style={{border: "none"}}></input>
                            <strong style={{color: "#F16553", cursor: "pointer", paddingRight: 10}}>CHANGE</strong>
                        </div>
                    </div>
                    <div style={{display: "flex", marginTop: "2%", marginLeft: "14.5%"}}>
                        <div>
                            <img src="https://ii1.pepperfry.com/images/svg/web20-assembly-icon.svg" alt="" />
                        </div>
                        <div style={{marginLeft: "2%"}}>
                            <p>Assembly <strong>Offered By Pepperfry</strong> <strong style={{color: "#F16553"}}>Within 24 Hours</strong> | Assembly - ₹ 449</p>
                        </div>
                    </div>
                    <div style={{display: "flex", marginLeft: "14.5%"}}>
                        <div>
                            <img src="https://ii1.pepperfry.com//images/svg/web20-map-pin-icon.svg" alt="" />
                        </div>
                        <div style={{marginLeft: "2%"}}>
                            <p>Nearest Studio Pepperfry</p>
                        </div>
                    </div>
                </Delpincode>
                <Divider style={{marginLeft: "2%"}} />
                <Proddetail>
                    <div>
                        <strong>Details</strong>
                    </div>
                    <div style={{width: "90%", height: 280, marginLeft: "5%"}}>
                        <div style={{display: 'flex'}}>
                            <strong>Barnd</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.brand}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Dimensions</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.dimensions}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Weight</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.weight}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Warranty</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.warranty}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Assembly</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.assembly}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Primary Material</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.primary_material}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Room Type</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.room_type}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Seating Height</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.seating_height}</p>
                        </div>
                    </div>
                </Proddetail>
            </Proddetails>
        </Prodinfo>
        <Prodmoreinfoback>
            <Moreinfo>
                <Moreinfotitle>
                    <div style={{lineHeight: "100%"}}>
                        <h3>MORE PRODUCT INFORMATION</h3>
                        <p>{itemData[0]?.name} - {itemData[0]?.madeBy}</p>
                    </div>
                    <div style={{display: "flex", width: "33%", marginLeft: "26%"}}>
                        <div>
                            <img src="https://ii1.pepperfry.com/images/svg/home-1.svg" alt="feedback" />
                        </div>
                        <Link style={{marginLeft: "5%"}}>Did You Find The Information You're Looking For?<br /> We Value Your Feedback</Link>
                    </div>
                </Moreinfotitle>
                <Moretab>
            <Tabs>
                <TabList>
                    <Tab>HIGHLIGHTS</Tab>
                    <Tab>OVERVIEW</Tab>
                    <Tab>ADDITIONAL INFO</Tab>
                    <Tab>CARE</Tab>
                    <Tab>MERCHANT INFO</Tab>
                    <Tab>CUSTOMER REDRESSAL</Tab>
                </TabList>

                <TabPanel>
                    <div style={{width: "80%", height: 350, margin: "auto", marginTop: "2%"}}>
                        <img style={{width: "80%", height: "100%"}} src={itemData[0]?.img[0]} alt="prod" />
                    </div>
                </TabPanel>
                <TabPanel>
                    <h4>Overview</h4>
                    <p style={{fontSize: 14}}>{itemData[0]?.details.overview}</p>
                </TabPanel>
                <TabPanel>
                    <div style={{width: "90%", height: 280, marginLeft: "5%"}}>
                        <div style={{display: 'flex'}}>
                            <strong>Barnd</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.brand}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Dimensions</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.dimensions}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Weight</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.weight}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Warranty</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.warranty}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Assembly</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.assembly}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Primary Material</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.primary_material}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Room Type</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.room_type}</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <strong>Seating Height</strong>: <p style={{marginLeft: "2%"}}>{itemData[0]?.details.seating_height}</p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h4>Care:</h4>
                    <ul>
                        <li>
                            Try and use a tablecloth or any thick quality cloth on your dining table or any other table which is subject to daily and heavy use.
                        </li>
                        <li>
                            Do not keep warm or cold items directly on a furniture surface; instead use a hot pad or coasters; please do not keep hot items like a tawa or baking dish even on a hot pad.
                        </li>
                        <li>
                            To protect your furniture from fading, avoid keeping your furniture next to windows and other places where it can be exposed to direct sunlight.
                        </li>
                        <li>
                            To avoid minor scratches which may hamper the finish of your furniture avoid sliding or passing items placed on your tabletop.
                        </li>
                        <li>
                            Avoid placing items like burning candles or irons on any furniture as the heat generated from them may affect the life of your furniture in the long run, make use of candle holders to avoid melting wax touching the furniture.
                        </li>
                        <li>
                            Cleaning your furniture items regularly will help you maintain them for a long time, make sure that you clean your furniture gently with a soft lightly damp cloth; using a rough rag and pressing it hard against the wood might lead to minor scratches.
                        </li>
                        <li>
                            In case of a spill on the furniture, never try to wipe it as it will spread the spill and hamper the polish, instead just blot the spill.
                        </li>
                        <li>
                            To protect your furniture from moisture, avoid placing it in direct contact with damp walls. We recommend wiping the moisture promptly with a dry, soft & lint free cloth.
                        </li>
                    </ul>
                </TabPanel>
                <TabPanel>
                    <div style={{width: "80%", height: 250, margin: "auto", marginTop: "2%"}}>
                        <img style={{height: 450}} src="https://ii1.pepperfry.com/supplierpng/5ea0e5b69f9bb74f6440720381a521bc.png?_v=13" alt="address" />
                    </div>
                </TabPanel>
                <TabPanel>
                    <h4>Customer Redressal</h4>
                    <p>At Pepperfry, we are committed to highest levels of customer experience. You can get answers to most of your queries related to your purchase on our Frequently Asked Questions Section on our website. In case you still have an unanswered query, feel free to reach out to us on below co-ordinates:</p>
                    <p>
                        Pepperfry Private Limited.
                        Address: Pepperfry House,
                        next to UHDE House, Opp. Cipla R&D Centre,
                        Surya Nagar, LBS Road, Vikhroli (West),
                        Mumbai - 400083, Maharashtra, India
                        To raise a query, please click here
                    </p>
                    <h4>Grievance Officer</h4>
                    <p>In accordance with Consumer Protection (E-Commerce) Rules, 2020 made there under, the name and the contact details of the Grievance Officer are provided:</p>
                    <p>
                        Lt Cdr Naveen Abhishek (Retd.)
                        Pepperfry House,
                        next to UHDE House, Opp. Cipla R&D Centre,
                        Surya Nagar, LBS Road, Vikhroli (West),
                        Mumbai - 400083, Maharashtra, India
                        Phone No – 022- 61576157
                        Email id - grievanceofficer@pepperfry.com
                    </p>
                </TabPanel>
            </Tabs>
            </Moretab>
            </Moreinfo>
        </Prodmoreinfoback>
        </div>
    )
}

export {ProductPage}
