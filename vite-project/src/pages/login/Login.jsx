import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [email, setName] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    // Save isLoggedIn state in local storage
    localStorage.setItem("isLoggedIn", "true");

    try {
      const loginData = {
        email,
      };

      const response = await axios.post(
        "http://192.168.1.79:3999/users/login",
        loginData
      );
      if (response && response.status === 200) {
        localStorage.setItem("AccessToken", response.data.data);
        // Show_toast("login successfull", true);
        navigate("/choos");
      } else {
        console.log(error);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div>
        {/* preloader start here */}
        {/* <div className="preloader">
    <div className="preloader-inner">
      <div className="preloader-icon">
        <span />
        <span />
      </div>
    </div>
  </div> */}
        {/* preloader ending here */}
        {/* ==========Header Section Starts Here========== */}

        {/* ==========login Section start Here========== */}
        <div className="login-section padding-tb1">
          <div className=" container">
            <div className="account-wrapper">
              <h3 className="title">Login</h3>
              <form
                className="account-form"
                onSubmit={handleLogin}
                method="post"
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="Email Address"
                    value={email}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="d-block lab-btn">
                    <span>Submit Now</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* ==========Login Section ends Here========== */}
      </div>
    </>
  );
}

export default Login;
