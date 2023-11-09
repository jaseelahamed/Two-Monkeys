import React from 'react'
import axios from 'axios';
import  { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


function Chooseprofile() {

    const [users, setUsers] = useState([]);
    console.log(users, "list");
   
    const tokan = localStorage.getItem('AccessToken');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.79:3999/users/list', {
                    headers: {
                        authorization:  tokan,
                    },
                })
              setUsers(response.data.data.docs);
              console.log(users, "asdfghjkl;");
            } catch (error) {
              console.error("Axios Error:", error);
              console.error("Response Data:", error.response.data); // Log response data if available
            }
          };


   
      fetchData();
    }, []);
    


  return (
      <>
      {/* ==========Member page Section Start Here========== */}
<section className="member-page-section">
  <div className="container">
    <div className="member-filter">
      <div className="member-filter-inner">
        <form action="https://labartisan.net/" className="filter-form">
          <div className="person">
            <div className="custom-select right w-100">
              <select name="gender" id="gender-two" className>
                <option value={0}>Looking for</option>
                <option value={1}>Male</option>
                <option value={2}>Female</option>
                <option value={3}>Others</option>
              </select>
            </div>
          </div>
          <div className="gender">
            <div className="custom-select right w-100">
              <select name="gender" id="gender" className>
                <option value={0}>Hobbies </option>
                <option value={1}>Travel</option>
                <option value={2}>Sleeping</option>
                <option value={3}>Exploring food</option>
                <option value={3}>Being alone</option>
                <option value={3}>Shopping</option>
                <option value={3}>Meeting new friends</option>
              </select>
            </div>
          </div>
          <div className="age">
            <div className="right d-flex justify-content-between w-100">
              <div className="custom-select">
                <select name="age-start" id="age">
                  <option value={1}>18</option>
                  <option value={2}>19</option>
                  <option value={3}>20</option>
                  <option value={4}>21</option>
                  <option value={5}>22</option>
                  <option value={6}>23</option>
                  <option value={7}>24</option>
                  <option value={8}>25</option>
                  <option value={9}>26</option>
                  <option value={10}>27</option>
                  <option value={11}>28</option>
                  <option value={13}>29</option>
                  <option value={14}>30</option>
                </select>
              </div>
              <div className="custom-select">
                <select name="age-end" id="age-two">
                  <option value={1}>36</option>
                  <option value={2}>19</option>
                  <option value={3}>20</option>
                  <option value={4}>21</option>
                  <option value={5}>22</option>
                  <option value={6}>23</option>
                  <option value={7}>24</option>
                  <option value={8}>25</option>
                  <option value={9}>26</option>
                  <option value={10}>27</option>
                  <option value={11}>28</option>
                  <option value={13}>29</option>
                  <option value={14}>30</option>
                </select>
              </div>
            </div>
          </div>
          <div className="city">
            <div className="custom-select right w-100">
              <select name="country" id="country" className>
                <option value={0}>Location
                </option>
                <option value={1}>USA</option>
                <option value={2}>UK</option>
                <option value={3}>Spain</option>
                <option value={4}>Brazil</option>
                <option value={5}>France</option>
                <option value={6}>Newzeland</option>
                <option value={7}>Australia</option>
                <option value={8}>Bangladesh</option>
                <option value={9}>Turki</option>
                <option value={10}>Chine</option>
                <option value={11}>India</option>
                <option value={12}>Canada</option>
              </select>
            </div>
          </div>
          <button className="lab-btn" type="submit">Search now <i className="icofont-search-2" /></button>
        </form>
      </div>
          </div>
          
    <div className="member-wrapper">
                      <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
                          {users.map((user) => (
                              <Link to={`/pf/${user.id}`} >
                              <div className="col">
                              <div className="lab-item member-item style-1 style-2">
                                <div className="lab-inner">
                                  <div className="lab-thumb">
                                                              <img src={"public/images/member/01.jpg"} alt="member-img" />
                                  </div>
                                  <div className="lab-content">
                                              <h6><a href="profile.html">{ user.name}</a> </h6>
                                              <p>{user.age}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </Link>
                          ))}
       
       
      </div>
      <div className="paginations">
        <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
          <li>
            <a href="#"><i className="icofont-rounded-double-left" /></a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li className="d-none d-sm-block">
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li className="d-none d-sm-block">
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#"><i className="icofont-rounded-double-right" /></a>
          </li>
        </ul>
      </div>
            </div>
         
        </div>
        
</section>

      </>
  )
}

export default Chooseprofile