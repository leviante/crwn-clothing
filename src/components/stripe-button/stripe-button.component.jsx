import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    //caveat about price
    //Stripe wants the price in sense
    //eg: 50 dollar meaning 5000 cent, thus convert it first
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_lopMYRNzlpP9hnANmBXb4JNk00PP8jSvTQ";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful!");
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton;