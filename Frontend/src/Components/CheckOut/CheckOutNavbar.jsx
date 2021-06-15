import React from 'react';
import {CheckOutNav,Logo, PaymentProcess, Welcome} from './CheckOutStyle';
import logo from '../../Images/logo.png';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {StepperPepper} from './StepperPepper';
import NotificationsNoneOutlined from '@material-ui/icons/NotificationsNoneOutlined';

function CheckOutNavbar(){

//   const dispatch =useDispatch();
//   const isAuth= useSelector(state=>state.fireReducer.isAuth)
//   const userdata = useSelector((state) => state.payload);
//   //console.log(isAuth,userdata)

//   const getuserdata = () => {
//      axios.get('')
//      .then((res) => {
//          return res
//      })
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
                  <h3>WELCOME {}<span><NotificationsNoneOutlined style={{marginTop:'3%'}}/></span></h3>
            </Welcome>
        </CheckOutNav>
    )           
}

export {CheckOutNavbar}