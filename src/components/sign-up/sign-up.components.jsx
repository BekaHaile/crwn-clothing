import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import Button from "../custom-button/custom_button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        ); 
        await createUserProfileDocument(user, { displayName });
        setFormFields(defaultFormFields);
      } catch (error) {
        if(error.code === 'auth/email-already-in-use') alert('User already exists');
        if(error.code === 'auth/weak-password') alert('Password must be 6 characters long or more');
        
        console.log(error);
      }
    } else {
      alert("Password mismatch");
      return;
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
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
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />

        <Button type="submit"> Sign Up </Button>
      </form>
    </div>
  );
};

export default SignUp;
