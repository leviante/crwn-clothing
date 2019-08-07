import styled, { css } from "styled-components";

const sub_color = "grey";
const main_color = "black"; 

const shrinkLabel = css`
    top: -14px;
    font-size: 12px;
    color: ${main_color};
`;

//group
export const FormGroupContainer = styled.div`
    position: relative;
    margin: 45px 0;
`;

//form-input-label
export const FormInputLabel = styled.label`
    color: ${sub_color};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    @include ${(props) => props.length ? shrinkLabel : null};

    /*include shrinkLabel if the component has no length*/
`;


//form-input
export const StyledFormInput = styled.input`
    background: none;
    background-color: white;
    color: ${sub_color};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${sub_color};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    input[type="password"] {
    letter-spacing: 0.3em;
  }

  &:focus ~${FormInputLabel}{
      ${shrinkLabel};
  }

`;

