import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
          /*...*/
        },
      };
      

    return (
        <div className='w-full px-10'>
            <h1 className='mx-auto text-xl mb-10 px-2 py-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent text-black text-center w-60'>Make Your Payment</h1>
            <div className=''>
  <div className='w-[]' >
      <img className='w-48 h-30 mx-auto mb-4' src="https://i.ibb.co/CBPWXfn/payment-icon-5646.png" alt="" />
  </div>
        <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
        </div>
        </div>
    );
};

export default Payment;