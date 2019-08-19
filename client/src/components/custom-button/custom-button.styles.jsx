import styled, { css } from "styled-components";
import { CartDropdownContainer } from "../cart-dropdown/cart-dropdown.styles";


const buttonStyles = css` 
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

//styles for inverted buttons and google sign in button

const InvertedButtonStyles = css`
background-color: white;
color: black;
border: 1px solid black;

&:hover {
    background-color: black;
    color: white;
    border: none;
}
`;

const googleSignInStyles = css`
background-color: #4285f4;
color: #fff;
border:none;

&:hover {
    background-color: #357ae8;
    border: none;
}
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }

    return props.inverted ? InvertedButtonStyles : buttonStyles;
}


//base component style
export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}

    /*inside cartDropDown, styled like this*/
    ${CartDropdownContainer} & {
        margin-top: auto;
    }
`;

//the syntax is same with SASS so it's possible to use selectors like this
