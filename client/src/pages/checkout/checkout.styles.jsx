import styled from "styled-components";

//checkout-page
export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;

    button{
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 400px){
      width: 100%;
      margin: 50px auto;
  }

  @media screen and (max-width: 800px){
      width: 95%;
  }

  @media screen and (max-width: 1000px){
      width: 80%;
  }
`;

//checkout header
export const CheckoutHeaderDiv = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

//header-block
export const HeaderBlockDiv = styled.div`
    text-transform: capitalize;
    text-align: center;
    width: 20%;
    
    @media screen and (max-width: 800px){
        width:50%;
    }
`;

//total
export const TotalDiv = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

//test-warning message
export const TestWarningMsg = styled.div`
    text-align:center;
    margin-top:40px;
    font-size:24px;
    color:red;
`;

