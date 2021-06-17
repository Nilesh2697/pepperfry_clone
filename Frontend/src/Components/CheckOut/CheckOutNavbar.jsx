import React from 'react';
import {CheckOutNav,Logo, PaymentProcess, Welcome} from './CheckOutStyle';
import logo from '../../Images/logo.png';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {StepperPepper} from './StepperPepper';
import NotificationsNoneOutlined from '@material-ui/icons/NotificationsNoneOutlined';

function CheckOutNavbar({data}){
  const [name,setName] = React.useState('')
    const user = data[0]?.first_name
   // console.log(user)    

    return (
        <CheckOutNav>
            <Logo src={logo}/>
            <PaymentProcess>
                 <StepperPepper/>
            </PaymentProcess>
        
            <Welcome style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)'}}>
                  <h3 style={{width:'120%',marginLeft:'-20%'}}>WELCOME {user}!</h3>
                  <NotificationsNoneOutlined/>
            </Welcome>
        </CheckOutNav>
    )           
}

export {CheckOutNavbar}