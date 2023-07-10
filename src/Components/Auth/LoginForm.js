import React, { useState } from "react";
import { Layout } from "antd";
import HomeNav from "../Nav/HomeNav";
import axios from "axios";
import "../../fonts/font.css";
import reading from "../../Assets/readingknack.png";
import logo from "../../Assets/logo1.png";

const { Content } = Layout;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Perform login request using axios
    axios
      .post("your_login_endpoint", { username, password, rememberMe })
      .then((response) => {
        // Handle successful login
        console.log(response.data);
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HomeNav style={{ marginBottom: "1rem" }} />
      <Content style={{ padding: "2rem", backgroundColor: "#CAF0F8" }}>
        <div className="container">
        <div className="logo">
        <img src={logo} alt="Logo" className="mr-2" />
      </div> 
          <div className="row justify-content-start">
            <div className="col-md-6">
              <div className="card" style={{ borderRadius: 10, width: "80%" }}>
                <div className="card-body">
                  <h1 className="card-title text-center mb-4" style={{ fontFamily: 'Agrandir', fontWeight: 'bold' }}>
                    Welcome Back!
                  </h1>
                  <h4 className="card-title text-center mb-4" style={{ fontFamily: 'Agrandir', fontWeight: 'normal' }}>
                    Enter your Credentials to access your account.
                  </h4>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label" style={{ fontFamily: 'Agrandir', fontWeight: 'bold' }}>
                        Username
                      </label>
                      <input
                        type="text"
                        className={`form-control agrandir ${isSubmitted && !username && "is-invalid"}`}
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        style={{ fontFamily: 'Agrandir', fontWeight: 'normal', backgroundColor: '#5CE3D4', color: '#fff' }}
                      />
                      {isSubmitted && !username && (
                        <div className="invalid-feedback">Username is required</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label" style={{ fontFamily: 'Agrandir', fontWeight: 'bold' }}>
                        Password
                      </label>
                      <input
                        type="password"
                        className={`form-control agrandir ${isSubmitted && !password && "is-invalid"}`}
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ fontFamily: 'Agrandir', fontWeight: 'normal', backgroundColor: '#5CE3D4', color: '#fff' }}
                      />
                      {isSubmitted && !password && (
                        <div className="invalid-feedback">Password is required</div>
                      )}
                    </div>
                    <div className="mb-3 form-check d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={handleRememberMeChange}
                        />
                        <label className="form-check-label" htmlFor="rememberMe" style={{ fontFamily: 'Agrandir', fontWeight: 'normal' }}>
                          Remember me
                        </label>
                      </div>
                      <a href="#" style={{ color: "#FF914D", fontFamily: 'Agrandir', fontWeight: 'bold', marginLeft: '1rem' }}>
                        Forgot Password?
                      </a>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#5CE3D4", fontFamily: 'Agrandir', fontWeight: 'bold' }}>
                        Login
                      </button>
                    </div>
                  </form>
                  <p className="text-center mt-3" style={{ fontFamily: 'Agrandir', fontWeight: 'normal' }}>
                    Don't have an account?{" "}
                    <a href="/signup" style={{ color: "#FF914D", fontFamily: 'Agrandir', fontWeight: 'bold' }}>
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ display: "flex", justifyContent: "flex-end" }}>
            <img src={reading} alt="LOGO" style={{ marginLeft: "2rem" }} />

            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Login;
