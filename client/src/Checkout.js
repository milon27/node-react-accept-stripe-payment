import React from 'react'
import RCheckout from 'react-stripe-checkout'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:2727/"

export default function Checkout() {
    return (
        <div >
            <RCheckout
                name='M27Lab.com'
                email='user@g.com'
                token={async (token) => {
                    const res = await axios.post('pay', {
                        tokenId: token.id
                    })
                    //payment done so send to success page.
                }}
                zipCode={false}
                stripeKey="'--YOUR STRIPE PUBLISHABLE KEY---'"
            >
                <button style={{
                    padding: '10px 20px',
                    background: "black",
                    border: 'none',
                    color: "#fff"
                }}>
                    Pay With Stripe
                </button>
            </RCheckout>
        </div>
    )
}
