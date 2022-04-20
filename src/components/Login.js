import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const login = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
    .then(res=>res.json())
            .then(json=> {localStorage.setItem("token", json.token)
              navigate('/Allproducts')})

  };

  return (
   
    <div className="container-fluid login">
      <div class="col-md-6 col-10 bg-light divInputs">
        <h3>Login Here</h3>
        <hr />
        <div class="mb-3">
          <label class="form-label">Username</label><br/>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            class="form-control"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            class="form-control"
          />
        </div>

        <button onClick={login} type="click" class="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
