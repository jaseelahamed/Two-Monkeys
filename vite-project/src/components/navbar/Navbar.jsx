import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


 
  const handleLogout = () => {
   
    setIsLoggedIn(false);
     // Reset the currentUser state when logging out
    localStorage.removeItem('isLoggedIn'); // Remove the user from local storage
    navigate('/');
  };

  useEffect(() => {
    // Get the isLoggedIn value from local storage
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    // Update the component state based on the stored value
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Empty dependency array ensures the effect runs once after the initial render

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
  </div>  */}
        {/* preloader ending here
  {/* ==========Header Section Starts Here========== */}
        <header className="header-section">
          <div className="header-bottom">
            <div className="container">
              <div className="header-wrapper">
                <div className="logo">
                  <a href="index.html">
                    <img src={"/public/images/logotwo.png"} alt="logo" />
                  </a>
                </div>

                <div className="menu-area">
                  <ul className="menu">
                    <li>
                      <a href="index.html">Home</a>
                    </li>

                    <li>
                      {isLoggedIn ? ( <>
                        <a href="choose_profiles.html"> Matching Profiles</a>
                        <Link to="/login" className="login"  onClick={handleLogout}>
                        <i className="icofont-user" /> <span>LOG OUT</span>{" "}
                      </Link>
                      </>
                      
                        
                      ) : (
                        ""
                      )}
                    </li>
                  </ul>
                  {!isLoggedIn ? (
                    <>
                      <Link to="/login" className="login">
                        <i className="icofont-user" /> <span>LOG IN</span>{" "}
                      </Link>
                      <Link to="/reg" className="signup">
                        <i className="icofont-users" /> <span>SIGN UP</span>{" "}
                      </Link>
                    </>
                  ) : (
                    ""
                  )}

                  {/* toggle icons */}
                  <div className="header-bar d-lg-none">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="ellepsis-bar d-lg-none">
                    <i className="icofont-info-square" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* ==========Header Section Ends Here========== */}
      </div>
    </>
  );
}

export default NavBar;
