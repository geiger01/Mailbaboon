import React from "react";
import StripeCheckout from "react-stripe-checkout";

export function Stripe() {
  function onToken(token) {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  return (
    <StripeCheckout
      token={onToken}
      amount={500}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    />
  );
}
