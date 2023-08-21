import React from "react";
import LoginRegister from "../components/LoginRegister";

const Register = () => {
  return (
    <>
      <LoginRegister
        title="Create an Account"
        button="Register"
        question="Already have an account?"
        redirect="Login to your account"
        isLogin={false}
        redirectLink="/login"
      />
    </>
  );
};

export default Register;
