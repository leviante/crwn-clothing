import React, { useState } from "react";


import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//saga update
//import actions that triggers sign in
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

//import connect because actions will be used
import { connect } from "react-redux";



//import styled-components
import { SignInContainer, ButtonsContainer } from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  
  //initialize useState hooks
  const [userCredentials, setCredentials] = useState({email: "", password: ""});

  //destructure userCredentials to use inside
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();


    emailSignInStart(email, password);


    //saga update - this is moved to user.sagas.js

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (err) {
    //   console.log(err);
    // }

    // this.setState({ email: "", password: "" });
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials({...userCredentials, [name]: value });
  };

    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={email}
            handleChange={handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <ButtonsContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton 
              type="button" 
              onClick={googleSignInStart} 
              isGoogleSignIn
            >
              {" "}
              Sign in With Google{" "}
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
