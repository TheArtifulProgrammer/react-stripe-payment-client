import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;
const Button = styled.button`
  background-color: green;
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
const Message = styled.p`

`;
const Success = () => {
    return (
        <Container>
        <Wrapper>
            <Button>Successful</Button>
            <Message>Your order is being prepared. Thanks for choosing Muna Shop</Message>
        </Wrapper>
    </Container>
    );
}

export default Success
