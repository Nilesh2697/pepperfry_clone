import React from 'react';
import { CheckOutNavbar } from './CheckOutNavbar';
import {CheckOutFooter} from './CheckOutFooter';
import { CheckOutMain } from './CheckOutMain';
import axios from 'axios';

function CheckOutPage(){

   const [data,setData] = React.useState([])
    const id = '60ca2b366e0cdd6758c8cd86';

    const getuserdataforcheckout = () => {
        axios.get(`http://localhost:3001/userbyID/${id}`)
        .then((res) => {
           
            console.log(res.data)
            setData(res.data)
           
        })
        .catch((err) => console.log(err))
    }

   
    React.useEffect(() => {
        getuserdataforcheckout();
    },[])
    return (

       
        <div>
            <CheckOutNavbar data={data}/>
            <CheckOutMain data={data}/>
            <CheckOutFooter/>
        </div>
    )
}

export {CheckOutPage}