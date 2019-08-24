import styled from "styled-components";

//checkout-item
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

//img-container
export const ImageContainer = styled.div`
    width: 20%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
`;

//name, quantity and price
export const NameSpan = styled.span`
    width: 20%;
    text-align: center;

    @media screen and (max-width: 350px){
        font-size: 18px;
    }
`;

export const QuantitySpan = styled.span`
    display: flex;
    justify-content: center;
    width: 20%;


    @media screen and (max-width: 350px){
        font-size: 18px;
        padding-left:10px;
    } 
`;

export const PriceSpan = styled.span`
    width: 20%;
    text-align: center;

    @media screen and (max-width: 350px){
        font-size: 18px;
    }
`;

//arrows and value
export const Arrow = styled.div`
    cursor: pointer;
`;

export const ValueSpan = styled.span`
    margin: 0px 10px;
`;

//remove-button
export const RemoveButtonStyle = styled.div`
    cursor: pointer;
    text-align:center;
    width:20%;
`;


