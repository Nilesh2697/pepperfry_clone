import React from 'react';
import { CheckOutNavbar } from './CheckOutNavbar';
import {CheckOutFooter} from './CheckOutFooter';
import { CheckOutMain } from './CheckOutMain';
import { useSelector } from 'react-redux';
import axios from 'axios';

function CheckOutPage(){

   const [data,setData] = React.useState([])
    
   const userId = useSelector(state=>state.fireReducer.userId);
   console.log(userId)
    const getuserdataforcheckout = () => {
        axios.get(`http://localhost:3001/userbyID/${userId}`)
        .then((res) => {
           
            //console.log(res.data)
            setData(res.data)
           
        })
        .catch((err) => console.log(err))
    }
 
    React.useEffect(() => {
        getuserdataforcheckout();
    },[])
    return (

       
        <div>
            <CheckOutNavbar key={userId} data={data}/>
            <CheckOutMain data={data}/>
            <CheckOutFooter/>
        </div>
    )
}

export {CheckOutPage}