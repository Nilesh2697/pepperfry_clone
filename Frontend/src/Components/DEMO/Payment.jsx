import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

export const Payment = () => {
    const [product] = useState({
        name: "Car",
        price: 15000,
    });
    const handleToken = (token, addresses) => {
        console.log(token, addresses);
    };
    return (
        <div>
            <StripeCheckout
                stripeKey="pk_test_51J3HeZSJkg0CwBYBfs4AExbjuSTtT5EJHbMvYzxH1HAGfZJxldCw8VlXXfWtvmNSG8QNZByDkKdocKmlJ58f2g7A00pKhNQ8TN"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={product.price * 100}
                name={product.name}
            />
        </div>
    );
};
