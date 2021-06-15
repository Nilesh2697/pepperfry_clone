import React from "react";
import {Link} from "react-router-dom";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

export const RecentlyViewed=()=>{
    return(
        <>
        <div>
            <div>
                <img src=""/>
            </div>
            <div>
                <Link>
                <div>
                    {}
                </div>
                </Link>
                <div>
                    <div>
                        <p>{}</p>
                        <p>{}</p>
                    </div>
                    <div> 
                        <p>{}</p>
                        <p>{}</p>
                    </div>
                </div>
                <div>
                    <AddShoppingCartOutlinedIcon/>
                    <u>{}</u>
                    <u>{}</u>                  
                </div>
            </div>
        </div>
        </>
    )
}