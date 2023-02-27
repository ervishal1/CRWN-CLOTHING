import React, { useState } from "react";
import {
  signInWithGooglePopUp,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
     await signInWithGooglePopUp();
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const formSignUpHandler = async (e) => {
    e.preventDefault();
    try {
      await SignInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password for Email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          alert(error.message);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in With your email and password</span>
      <form onSubmit={formSignUpHandler}>
        <FormInput
          label={"Email Address"}
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={changeHandler}
          minLength={6}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType={"google"} onClick={signInWithGoogle}>
            Google Sign-in{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
