import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

// TODO- add pulishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const Payment = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-[92%] max-w-screen-md mx-auto'>
                <h2 className='text-4xl font-semibold my-10 text-center'>Payment</h2>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;