import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//import styled-components
import { SignUpContainer } from "./sign-up.styles";
import { SignUpStart } from "../../redux/user/user.actions";

const SignUp = ({ SignUpStart }) => {
  
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    SignUpStart({ email, password, displayName });

    //pre-challenge code 
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });

    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({
      ...userCredentials,
      [name]: value
    });
  };



    return (
      <SignUpContainer>
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password </span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
            label="Confirm password"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }


const mapDispatchToProps = dispatch => ({
  SignUpStart: (user) => dispatch(SignUpStart(user))
});

export default connect(null,mapDispatchToProps)(SignUp);
