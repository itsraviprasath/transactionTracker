import React, { useState } from "react";
import "../assests/css/LoginRegister.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginRegister = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const login = props?.isLogin;
  const url = login ? "api/auth" : "api/users";
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:2000/${url}`, {
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      })
      .then((result) => {
        console.log(result.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:2000/${url}`, {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        if (result.data.login !== "false") {
          navigate("/dashboard");
        } else {
          setErrorMsg(result.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="login-register">
        <div className="login-register-header">
          <img src="" alt="logo" />
          <h1 className="login-register-title">{props?.title}</h1>
          <p className="login-register-subtitle">
            Lorem Ipsum is simply dummy text
          </p>
        </div>
        <div className="login-register-body">
          <form
            method=""
            action=""
            onSubmit={login ? handleLoginSubmit : handleRegisterSubmit}
          >
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="input"
              name="email"
              id="email"
              value={email}
              required
              placeholder="you@mail.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            {login ? null : (
              <>
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  id="name"
                  value={name}
                  required
                  placeholder="Andrew"
                  onChange={(e) => setName(e.target.value)}
                />

                <label className="label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="input"
                  name="phoneNumber"
                  id="phone"
                  value={phoneNumber}
                  required
                  placeholder="9876543210"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </>
            )}

            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="input"
              name="password"
              id="password"
              value={password}
              required
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />

            {login ? (
              <>
                <p className="error-msg">{errorMsg}</p>
                <Link className="forgot-password" to="#">
                  Forgot Password?
                </Link>
              </>
            ) : null}

            <button className="button" type="submit">
              {props?.button}
            </button>
          </form>
        </div>
        <div className="login-register-footer">
          <p>
            {props?.question}
            <Link to={props?.redirectLink}> {props?.redirect}</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginRegister;
