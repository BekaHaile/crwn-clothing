import React, { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import Button from "../custom-button/custom_button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

const defaultFormFields = { email: "", password: "" };

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword();
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/wrong-password") alert("Incorect Password");
      if (error.code === "auth/user-not-found")
        alert("No user associated with this email");
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <Button type="submit"> Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign In with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
