import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HRXABEZ1S56HKOIDBo7ziddYOfu7V3oBeFF8ucRImTHgleSHVQsVGi5ANa19mYmka6UmZAj8gfwXUk5zxS5joYK00BoBSEwEg'

const onToken = token => {
        alert('Payment Sucessful');
    }

    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'Namaste Design GmbH'
        billingAddress
        shippingAddress
        image = 'https://pluginsware.com/wp-content/uploads/2016/04/icon-pay-as-you-go.png'
        description = {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    );
};


export default StripeCheckoutButton;