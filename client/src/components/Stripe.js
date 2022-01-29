import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from "../store/actions/auth.action";

export function Stripe() {
    
  const dispatch = useDispatch();

  function onHandleToken(token) {
    dispatch(handleToken(token));
  }

  return (
    <StripeCheckout
      name="Mailbaboon"
      description="Pay Or Die!!!"
      token={onHandleToken}
      amount={500}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button>Give Money!</button>
    </StripeCheckout>
  );
}
