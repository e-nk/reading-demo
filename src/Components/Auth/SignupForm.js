import React, { useState } from "react";
import { Layout } from "antd";
import HomeNav from "../Nav/HomeNav";
import axios from "axios";
import "../../fonts/font.css";
import reading from "../../Assets/readingknack.png";
import logo from "../../Assets/logo1.png";

const { Content } = Layout;

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Perform signup request using axios
    axios
      .post("your_signup_endpoint", { firstName, lastName, username, password })
      .then((response) => {
        // Handle successful signup
        console.log(response.data);
      })
      .catch((error) => {
        // Handle signup error
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
                    Create Account
                  </h1>
                  <h4 className="card-title text-center mb-4" style={{ fontFamily: 'Agrandir', fontWeight: 'normal' }}>
                    Enter your Credentials to create your account.
                  </h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label" style={{ fontFamily: 'Agrandir', fontWeight: 'bold' }}>
                          First Name
                        </label>
                        <input
                          type="text"
                          className={`form-control agrandir ${isSubmitted && !firstName && "is-invalid"}`}
                          id="firstName"
                          value={firstName}
                          onChange={handleFirstNameChange}
                          style={{ fontFamily: 'Agrandir', fontWeight: 'normal',  color: '#fff' }}
                        />
                        {isSubmitted && !firstName && (
                          <div className="invalid-feedback">First Name is required</div>
                        )}
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label" style={{ fontFamily: 'Agrandir', fontWeight: 'bold' }}>
                          Last Name
                        </label>
                        <input
                          type="text"
                          className={`form-control agrandir ${isSubmitted && !lastName && "is-invalid"}`}
                          id="lastName"
                          value={lastName}
                          onChange={handleLastNameChange}
                          style={{ fontFamily: 'Agrandir', fontWeight: 'normal', color: '#fff' }}
                        />
                        {isSubmitted && !lastName && (
                          <div className="invalid-feedback">Last Name is required</div>
                        )}
                      </div>
                    </div>
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
                        style={{ fontFamily: 'Agrandir', fontWeight: 'normal', color: '#fff' }}
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
                        style={{ fontFamily: 'Agrandir', fontWeight: 'normal', color: '#fff' }}
                        />
                        {isSubmitted && !password && (
                          <div className="invalid-feedback">Password is required</div>
                        )}
                      </div>
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#5CE3D4", fontFamily: 'Agrandir', fontWeight: 'bold' }}>
                          Create Account
                        </button>
                      </div>
                    </form>
                    <p className="text-center mt-3" style={{ fontFamily: 'Agrandir', fontWeight: 'normal' }}>
                      Already have an account?{" "}
                      <a href="/login" style={{ color: "#FF914D", fontFamily: 'Agrandir', fontWeight: 'bold' }}>
                        Log In
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
  
  export default Signup;
