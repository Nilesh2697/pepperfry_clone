import React from 'react';
import { CheckOutNavbar } from './CheckOutNavbar';
import {CheckOutFooter} from './CheckOutFooter';
import { CheckOutMain } from './CheckOutMain';

function CheckOutPage(){
    return (
        <div>
            <CheckOutNavbar/>
            <CheckOutMain/>
            <CheckOutFooter/>
        </div>
    )
}

export {CheckOutPage}