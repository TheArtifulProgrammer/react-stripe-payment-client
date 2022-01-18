import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 30px;
  border-radius: 10px;
  border:  none;
  cursor: pointer;
  box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.48);
-webkit-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.48);
-moz-box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.48);
`;
const STRIPE_KEY = "pk_test_51KJB13LBs8KD19bZsBuZTPbgwn11H0KFlgqwbTStci9SzVMUOOBNGfg3XLre4hPTIdirLm9XVOsQEosOWFDx8ctX00MCTFIhUz";
const Pay = () => {
    // token
    const [stripeToken, setStripeToken] = useState(null);
    // history hook
    const navigate = useNavigate();
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                });
                console.log(res.data);
                navigate("/success")
            } catch (error) {
                console.log(error);
            }
        }

        stripeToken && makeRequest();

    }, [stripeToken, navigate])
    const onToken = (token) => {
        setStripeToken(token);
    }
    return (
        <div>
            {stripeToken ?
                (<span>Payment processing, please wait....</span>)
                :
                (
                    <StripeCheckout name="Munashe Shop"
                        image="https://images.unsplash.com/photo-1601629782333-a325302158c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        billingAddress
                        shippingAddress
                        description='Your total is $20'
                        amount={2000}
                        token={onToken}
                        const STRIPE_KEY="pk_test_51KJB13LBs8KD19bZsBuZTPbgwn11H0KFlgqwbTStci9SzVMUOOBNGfg3XLre4hPTIdirLm9XVOsQEosOWFDx8ctX00MCTFIhUz"
                        stripeKey={STRIPE_KEY}
                    >
                        <Container>
                            <Wrapper>
                                <Button>Pay</Button>
                            </Wrapper>
                        </Container>

                    </StripeCheckout>
                )}
        </div>

    )
}

export default Pay
