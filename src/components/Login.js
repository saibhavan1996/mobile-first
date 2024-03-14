// LoginPage.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy validation, replace with your own logic
    if (
      credentials.username === "dummy" &&
      credentials.password === "password"
    ) {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="https://scalebranding.com/wp-content/uploads/2021/04/J-Letter-Logo.jpg"
          alt="logo"
        />
      </div>
      <div className="text-center mt-4 name">Jokes</div>

      <form className="p-3 mt-3" onSubmit={handleSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="username"
            id="username"
            value={credentials.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
        </div>
        <button className="btn mt-3">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
