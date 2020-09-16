import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./StripeCheckoutButton.scss";

const StripeCheckoutButton = ({ price }) =>{

    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51H1yasALrt8R5AL5U7siCbr3el4IldUD4JoH2sBjcRGoH3kYZyq5fqnS9GoEVL9zChFBadlVMe6xLzqInfCTxi2e00GlK8DeLk";

    const onToken = token =>{
        console.log(token);
        alert("Payment Successful");
    };

    return(
        <StripeCheckout 
        label="Pay Now"
        name="Super Attract LLC"
        billingAddress
        shippingAddress
        image = "https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishablekey}
        >
        </StripeCheckout>
    )
};

export default StripeCheckoutButton;