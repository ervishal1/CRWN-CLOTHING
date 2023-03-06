import { AuthError, AuthErrorCodes } from "firebase/auth";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.actions";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch()

  const changeHandler = (e : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const formSignUpHandler = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      alert("Passwords do not match");
    }

    try {
      dispatch(signUpStart(email,password,displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("cannot create user, email already in use");
      } else {
        console.log("user created encountered =>", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
      <span>Sign up With your email and password</span>
      <form onSubmit={formSignUpHandler}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
        label={"Confirm Password"}
          type="password"
          required
          onChange={changeHandler}
          minLength={6}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
