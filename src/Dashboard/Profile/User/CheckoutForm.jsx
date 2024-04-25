import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
  
    const [errorMessage, setErrorMessage] = useState(null);

//     const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };
  
    const handleSubmit = async (event) => {
      // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setErrorMessage(error?.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setErrorMessage('')
    }
    };

    return (
        <form onSubmit={handleSubmit}>
  <CardElement
  options={{
    style: {
      base: {
        fontWeight: 600,
        fontSize: '18px',
        color: '#333',
        '::placeholder': {
          color: 'gray',
        },
        padding: '60px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid #ccc',
        backgroundColor: 'skyblue',
        display: 'flex',
        alignItems: 'center',
        width: '50%', // Set the width to 100% or any desired value
      },
      invalid: {
        color: '#d9534f',
        border: '1px solid #d9534f',
      },
      complete: {
        color: '#5cb85c',
      },
    },
  }}
/>

        <button className='mx-auto text-xl mb-10 mt-6 px-2 py-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent text-black text-center w-60' type="submit" disabled={!stripe}>
          Pay
        </button>
        <p className='text-red-500'>{errorMessage}</p>
      </form>
    );
};

export default CheckoutForm;