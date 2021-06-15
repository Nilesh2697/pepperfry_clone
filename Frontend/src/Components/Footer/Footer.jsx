import React from "react";
import style from "./Footer.module.css";
import { FooterSocial } from "./FooterSocial";
import { Link } from "react-router-dom";
import { FooterLink } from "./Footerlink";

const main_footer = [
    "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/pepperfry-logo.png",
    [
        "About Us",
        "Our Blog",
        "Careers",
        "Corporate Governance",
        "Pepperfry In The News",
        "Find A Studio",
        "Gift Cards",
        "Brands",
        "Customer Reviews",
    ],
];
const footer_list = [
    [
        "PARTNERS",
        [
            "Partner With Us",
            "Pepperfry Market Policies",
            "Login To Your Merchant Dashboard",
            "Important: ",
            "GST and You",
            "Corporate Enquiries",
        ],
    ],

    [
        ["NEED HELP?"],
        [
            "Contact Us",
            "Returns & Refund",
            "Track Your Order",
            "FAQs",
            "Buy On Phone",
        ],
    ],
    [
        ["POPULAR CATEGORIES"],
        [
            "Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves, TV Unit, Wardrobes, Outddoor Furniture, Bar Cabinets, Wall Shelves, Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room Furniture, Study Tables, Dining Room Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas",
        ],
    ],
    [
        ["POPULAR BRANDS"],
        [
            "Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana, Primorati, Mollycoddle, Mangiamo, Clouddio, Spacewood, Durian, Star India, Adiko Systems, Crystal Furnitech, Springtek, Story@Home, Parin, Furnitech, Trevi Furniture, Peachtree, Durfi, Muebles Casa, Duroflex",
        ],
    ],
    [
        ["CITIES WE DELIVER TO"],
        [
            "Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur, Aurangabad, Imphal, Hubli, Guwahati and many more",
        ],
    ],
];
function Footer() {
    return (
        <div className={style.footercont}>
            <div className={style.subfooter}>
                <div className={style.secfooter}>
                    <Link to="/">
                        <img
                            src={main_footer[0]}
                            style={{ width: "100px", marginBottom: "10px" }}
                            alt="pepperfry logo"
                        />
                    </Link>
                    {main_footer[1].map((item) => {
                        return <div className={style.logocont}>{item}</div>;
                    })}
                </div>

                {footer_list.map((item) => {
                    return (
                        <div className={style.secfooter}>
                            <div className={style.heads}>{item[0]}</div>
                            {item[1].map((item) => {
                                return (
                                    <div
                                        className={style.headcont}
                                        style={
                                            item === "Important: "
                                                ? {
                                                      color: "red",
                                                      float: "left",
                                                  }
                                                : item === "GST and You"
                                                ? {
                                                      color: "rgb(147, 146, 146)",
                                                  }
                                                : null
                                        }
                                    >
                                        {item}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <FooterSocial />
            <FooterLink />
        </div>
    );
}

export { Footer };
