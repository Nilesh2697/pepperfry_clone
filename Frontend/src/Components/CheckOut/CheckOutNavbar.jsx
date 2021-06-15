import React from 'react';
import {CheckOutNav,Logo, PaymentProcess, Welcome} from './CheckOutStyle';
import logo from '../../Images/logo.png';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {StepperPepper} from './StepperPepper';

function CheckOutNavbar(){

//   const dispatch =useDispatch();
//   const isAuth= useSelector(state=>state.fireReducer.isAuth)
//   const userdata = useSelector((state) => state.register_page);
//   console.log(isAuth,userdata)

//   const getuserdata = () => {
     
//   }

//   React.useEffect(() => {
//     getuserdata();
//   })


    return (
        <CheckOutNav>
            <Logo src={logo}/>
            <PaymentProcess>
                 <StepperPepper/>
            </PaymentProcess>
        
            <Welcome>

            </Welcome>
        </CheckOutNav>
    )           
}

export {CheckOutNavbar}