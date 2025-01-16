import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import axios from 'axios';
import useCartData from '../../Hooks/useCartData';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { dividerClasses } from '@mui/material';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {

    const [clientSecret, setClientSecret] = useState()
    const [transactionId, setTransactionId] = useState()

    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [cart] = useCartData()
    const price = cart?.reduce((total, item) => total + item.price, 0)
    console.log(price)


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)

            })
    }, [axiosSecure, price])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            toast.error(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        } else {
            console.log('payment intent-', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // saveing the payment details in database
                const payment = {
                    email: user?.email,
                    name: user?.displayName,
                    price: price,
                    transactionId: transactionId,
                    date: new Date(), //TODO: convert with moment js
                    cartIds: cart.map(item => item._id),
                    itemIds: cart.map(item => item.item_id),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res)
                if (res.data.payResult?.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Payment Successfull",
                        showConfirmButton: false,
                        timer: 2500
                    });
                    navigate('/')
                }
            }
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret} className='px-4 py-1 text-lg rounded-md bg-[#D1A054] my-6'>
                Pay
            </button>
            {
                transactionId &&
                <div className='text-green-500'>Your transaction id is {transactionId}</div>
            }
        </form>
    );
};

export default CheckoutForm;