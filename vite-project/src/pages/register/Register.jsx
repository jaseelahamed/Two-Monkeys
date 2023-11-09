
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobbies] = useState("");

  
  
 
  const [ interested_gender, setInterestGender] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [image, setPhote] = useState("");
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // setIsLoggedIn(true);
        // Save isLoggedIn state in local storage
// localStorage.setItem('isLoggedIn', 'true');


    try {
        const RegisterData = {
          name,
               email,
               age,
              hobby,
             gender,
             interested_gender,
            location,
            image,
          };
      
      const response = await  axios.post("http://192.168.1.79:3999/users/createuser", RegisterData)
      if (response && response.status === 200) {
        // localStorage.setItem('AccessToken', response.data?.accessToken)
        // Show_toast("login successfull", true);
        navigate('/intrest');
      }
      
      else{
          console.log(error)
          
      }
    } catch (error) {
             alert(error)
    }
  };

  return (
    <>
      {/* ==========Sign up Section start Here========== */}
      
<div className="login-section padding-tb1">
  <div className="container">
    <div className="account-wrapper account-width">
      <h3 className="title">Register Now</h3>
      <form className="account-form"  onSubmit={handleRegisterSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group" onSubmit={handleRegisterSubmit}>
              <input type="text" placeholder="Your Name" name="username"  value={name}
                                  onChange={(e) =>
                                    setName(e.target.value)
                                  }/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" placeholder="Age" name="age"  value={age}
                                  onChange={(e) =>
                                    setAge(e.target.value)
                                  }/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" name="email"  value={email}
                                  onChange={(e) =>
                                    setEmail(e.target.value)
                                  }/>
        </div>
        <div className="form-group" style={{textAlign: 'left'}}>
          <label htmlFor>Choose your hobbies</label>
          <select name="hobbies" id="hobbies" className="mt-2"  value={hobby}
                                  onChange={(e) =>
                                    setHobbies(e.target.value)
                                  }  >
            <option value="travel">Travel</option>
            <option value="sleeping">Sleeping</option>
            <option value="explore-food">Exploring food</option>
            <option value="alone">Being alone</option>
            <option value="shopping">Shopping</option>
            <option value="meeting">Meeting new friends</option>
          </select>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group" style={{textAlign: 'left'}}>
              <label htmlFor>Choose your gender</label>
              <select name="gender" id="gender" className="mt-2" value={gender}
                                  onChange={(e) =>
                                    setGender(e.target.value)
                                  }  >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non binary people</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group" style={{textAlign: 'left'}}>
              <label htmlFor>Interested Gender</label>
              <select name="in-gender" id="in-gender" className="mt-2" value={interested_gender}
                                  onChange={(e) =>
                                    setInterestGender(e.target.value)
                                  }  >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non binary people</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group" style={{textAlign: 'left'}}>
          <label htmlFor>Location</label>
          <select name="location" id="location" className="mt-2" value={location}
                                  onChange={(e) =>
                                    setLocation(e.target.value)
                                  } >
            <option value="india">India</option>
            <option value="US">US</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <div className="form-group" style={{textAlign: 'left'}}>
          <label htmlFor>Upload your photo</label>
          <input type="file" placeholder="photo" className="mt-2" name="photo" value={image}
                                  onChange={(e) =>
                                    setPhote(e.target.value)
                                  } />
        </div>
        <div className="form-group">
          <button type="submit" className="d-block lab-btn"><span>Get Started Now</span></button>
        </div>
      </form>
      <div className="account-bottom">
        <span className="d-block cate pt-10">Are you a member? <a href="login.html">Login</a></span>
      </div>
    </div>
  </div>
</div>
{/* ==========Sign up Section ends Here========== */}

    
    </>
  )
}

export default Register