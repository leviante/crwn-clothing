import React from "react";


//import styled components
import { FormGroupContainer, FormInputLabel, StyledFormInput } from "./form-input.styles";

const FromInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormGroupContainer>
      <StyledFormInput onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel length={otherProps.value.length}
          // className={`${
          //   otherProps.value.length ? "shrink" : ""
          // } form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </FormGroupContainer>
  );
};

export default FromInput;
