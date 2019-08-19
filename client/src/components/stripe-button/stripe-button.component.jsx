import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from  "axios";


const StripeCheckoutButton = ({price}) => {
    //caveat about price
    //Stripe wants the price in sense
    //eg: 50 dollar meaning 5000 cent, thus convert it first
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_lopMYRNzlpP9hnANmBXb4JNk00PP8jSvTQ";

    const onToken = token => {

        //old code
        // console.log(token);
        // alert("Payment Successful!");

        //pass token to backend, so make a post request
        //axios is a function that takes an objects as an argument, and this object will contain properties that we want to pass in order for axios to know what kind of request we're trying to make
        //returns a promise
        axios({
            url: "payment", //will use our current URL and appends "payment" at the end
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment successful");
        }).catch(error => {
            alert("There was an issue with your payment. Please make sure you use the provided credit card");
        });
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