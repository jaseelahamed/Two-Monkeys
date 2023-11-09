import React from 'react'

function Profile() {
  return (
    <>
    {/* ==========Profile Section Start Here========== */}
<section className="profile-section padding-tb1">
<div className="container">
  <div className="section-wrapper">
    <div className="member-profile">
      <div className="profile-item">
        <div className="profile-cover">
          <img src="assets/images/profile/cover.jpg" alt="cover-pic" />
          <div className="edit-photo custom-upload">
            <div className="file-btn"><i className="icofont-camera" />
              Edit Photo</div>
            <input type="file" />
          </div>
        </div>
        <div className="profile-information">
          <div className="profile-pic">
            <img src="assets/images/profile/Profile.jpg" alt="DP" />
            <div className="custom-upload">
              <div className="file-btn">
                <span className="d-none d-lg-inline-block"> <i className="icofont-camera" />
                  Edit</span>
                <span className="d-lg-none mr-0"><i className="icofont-plus" /></span></div>
              <input type="file" />
            </div>
          </div>
          <div className="profile-name">
            <h4>Angel</h4>
          </div>
          <ul className="profile-contact">
            <li>
              <a href="#">
                <div className="icon"><i className="icofont-love" /></div>
                <div className="text">
                  <p>Add to favorites</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-item d-none">
        <div className="lab-inner">
          <div className="lab-thumb">
            <a href="#"><img src="assets/images/profile/Profile.jpg" alt="profile" /></a>
          </div>
          <div className="lab-content">
            <div className="profile-name">
              <div className="p-name-content">
                <h4>Angel</h4>
              </div>
              <div className="contact-button">
                <button className="contact-btn">
                  <i className="icofont-info-circle" />
                </button>
              </div>
            </div>
            <ul className="profile-contact">
              <li>
                <a href="#">
                  <div className="icon"><i className="icofont-love" /></div>
                  <div className="text">
                    <p>Add to favorites</p>
                  </div>
                </a>
              </li>
            </ul> 
          </div>
        </div>
      </div>
      <div className="profile-details">
        <nav className="profile-nav">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
            <button className="nav-link" id="nav-friends-tab" data-bs-toggle="tab" data-bs-target="#friends" type="button" role="tab" aria-controls="friends" aria-selected="false">Interests</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          {/* Profile tab */}
          <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div>
              <div className="row">
                <div className="col-xl-12">
                  <article>
                    <div className="info-card mb-20">
                      <div className="info-card-title">
                        <h6>Base Info</h6>
                      </div>
                      <div className="info-card-content">
                        <ul className="info-list">
                          <li>
                            <p className="info-name">Your Name</p>
                            <p className="info-details">Angel</p>
                          </li>
                          <li>
                            <p className="info-name">Age</p>
                            <p className="info-details">18</p>
                          </li>
                          <li>
                            <p className="info-name">Email</p>
                            <p className="info-details">angel@gmail.com</p>
                          </li>
                          <li>
                            <p className="info-name">Hobbies</p>
                            <p className="info-details">Travel</p>
                          </li>
                          <li>
                            <p className="info-name">Your Gender</p>
                            <p className="info-details">Female</p>
                          </li>
                          <li>
                            <p className="info-name">Interested Gender</p>
                            <p className="info-details">Male</p>
                          </li>
                          <li>
                            <p className="info-name">Location</p>
                            <p className="info-details">India</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/* Frinds Tab */}
          <div className="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="nav-friends-tab">
            <div>
              <div className="row">
                <div className="col-xl-12">
                  <article>
                    <div className="info-card mb-20">
                      <div className="info-card-title">
                        <h6>Base Info</h6>
                      </div>
                      <div className="info-card-content">
                        <ul className="info-list">
                          <li>
                            <p className="info-name">What are your main reasons for waiting a relationship?</p>
                            <p className="info-details">Emotional Security</p>
                          </li>
                          <li>
                            <p className="info-name">What do you think is most important in the relationship?</p>
                            <p className="info-details">Accepting our imperfections</p>
                          </li>
                          <li>
                            <p className="info-name">Are you morning person or night person?</p>
                            <p className="info-details">Morning person</p>
                          </li>
                          <li>
                            <p className="info-name">Does it bother you when people use their cellphone around you?</p>
                            <p className="info-details">Use the time to check the phone too</p>
                          </li>
                          <li>
                            <p className="info-name">How important is sexuality to you?</p>
                            <p className="info-details">Not important</p>
                          </li>
                          <li>
                            <p className="info-name">Do you believe living together or marriage?</p>
                            <p className="info-details">Living together</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          {/* Group Tab */}
          <div className="tab-pane fade" id="groups" role="tabpanel" aria-labelledby="nav-groups-tab">
            <div>
              <div className="row">
                <div className="col-xl-8">
                  <article>
                    <div className="row gy-3">
                      <div className="col-12">
                        <div className="group-item lab-item style-1">
                          <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                              <img src="assets/images/group/group-page/01.jpg" alt="img" />
                            </div>
                            <div className="lab-content">
                              <h4>Active Group A2</h4>
                              <p>Colabors atively fabcate best breed and
                                apcations through visionary value </p>
                              <ul className="img-stack d-flex">
                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                <li className="bg-theme">12+</li>
                              </ul>
                              <div className="test"> <a href="profile.html" className="lab-btn"> <i className="icofont-users-alt-5" />
                                  View Group</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="group-item lab-item style-1">
                          <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                              <img src="assets/images/group/group-page/02.jpg" alt="img" />
                            </div>
                            <div className="lab-content">
                              <h4>Active Group A2</h4>
                              <p>Colabors atively fabcate best breed and
                                apcations through visionary value </p>
                              <ul className="img-stack d-flex">
                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                <li className="bg-theme">12+</li>
                              </ul>
                              <div className="test"> <a href="profile.html" className="lab-btn"> <i className="icofont-users-alt-5" />
                                  View Group</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="group-item lab-item style-1">
                          <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                              <img src="assets/images/group/group-page/03.jpg" alt="img" />
                            </div>
                            <div className="lab-content">
                              <h4>Active Group A2</h4>
                              <p>Colabors atively fabcate best breed and
                                apcations through visionary value </p>
                              <ul className="img-stack d-flex">
                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                <li className="bg-theme">12+</li>
                              </ul>
                              <div className="test"> <a href="profile.html" className="lab-btn"> <i className="icofont-users-alt-5" />
                                  View Group</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="group-item lab-item style-1">
                          <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                              <img src="assets/images/group/group-page/04.jpg" alt="img" />
                            </div>
                            <div className="lab-content">
                              <h4>Active Group A2</h4>
                              <p>Colabors atively fabcate best breed and
                                apcations through visionary value </p>
                              <ul className="img-stack d-flex">
                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                <li className="bg-theme">12+</li>
                              </ul>
                              <div className="test"> <a href="profile.html" className="lab-btn"> <i className="icofont-users-alt-5" />
                                  View Group</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="group-item lab-item style-1">
                          <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                              <img src="assets/images/group/group-page/05.jpg" alt="img" />
                            </div>
                            <div className="lab-content">
                              <h4>Active Group A2</h4>
                              <p>Colabors atively fabcate best breed and
                                apcations through visionary value </p>
                              <ul className="img-stack d-flex">
                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                <li className="bg-theme">12+</li>
                              </ul>
                              <div className="test"> <a href="profile.html" className="lab-btn"> <i className="icofont-users-alt-5" />
                                  View Group</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="group-item lab-item style-1">
                          <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                            <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                              <img src="assets/images/group/group-page/02.jpg" alt="img" />
                            </div>
                            <div className="lab-content">
                              <h4>Active Group A2</h4>
                              <p>Colabors atively fabcate best breed and
                                apcations through visionary value </p>
                              <ul className="img-stack d-flex">
                                <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                <li className="bg-theme">12+</li>
                              </ul>
                              <div className="test"> <a href="profile.html" className="lab-btn"> <i className="icofont-users-alt-5" />
                                  View Group</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Aside Part */}
                <div className="col-xl-4">
                  <aside className="mt-5 mt-xl-0">
                    <div className="widget search-widget">
                      <div className="widget-inner">
                        <div className="widget-title">
                          <h5>Filter Search Member</h5>
                        </div>
                        <div className="widget-content">
                          <p>Serious Dating With Two Monkeys Your Perfect
                            Match is Just a Click Away.</p>
                          <form action="https://labartisan.net/" className="banner-form">
                            <div className="gender">
                              <div className="custom-select right w-100">
                                <select className>
                                  <option value={0}>I am a </option>
                                  <option value={1}>Male</option>
                                  <option value={2}>Female</option>
                                  <option value={3}>Others</option>
                                </select>
                              </div>
                            </div>
                            <div className="person">
                              <div className="custom-select right w-100">
                                <select className>
                                  <option value={0}>Looking for</option>
                                  <option value={1}>Male</option>
                                  <option value={2}>Female</option>
                                  <option value={3}>Others</option>
                                </select>
                              </div>
                            </div>
                            <div className="age">
                              <div className="right d-flex justify-content-between w-100">
                                <div className="custom-select">
                                  <select>
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
                                  <select>
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
                                <select className>
                                  <option value={0}>Choose Your Country
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
                            <div className="interest">
                              <div className="custom-select right w-100">
                                <select className>
                                  <option value={0}>Your Interests
                                  </option>
                                  <option value={1}>Gaming</option>
                                  <option value={2}>Fishing</option>
                                  <option value={3}>Skydriving</option>
                                  <option value={4}>Swimming</option>
                                  <option value={5}>Racing</option>
                                  <option value={6}>Hangout</option>
                                  <option value={7}>Tranvelling</option>
                                  <option value={8}>Camping</option>
                                  <option value={9}>Touring</option>
                                  <option value={10}>Acting</option>
                                  <option value={11}>Dancing</option>
                                  <option value={12}>Singing</option>
                                </select>
                              </div>
                            </div>
                            <button className>Find Your Partner</button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="widget like-member">
                      <div className="widget-inner">
                        <div className="widget-title">
                          <h5>you may like</h5>
                        </div>
                        <div className="widget-content">
                          <div className="row row-cols-3 row-cols-sm-auto g-3">
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/01.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/02.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/03.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/04.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/05.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/06.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/07.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/08.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/09.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget active-group">
                      <div className="widget-inner">
                        <div className="widget-title">
                          <h5>join the group</h5>
                        </div>
                        <div className="widget-content">
                          <div className="group-item lab-item">
                            <div className="lab-inner d-flex flex-wrap align-items-center">
                              <div className="lab-content w-100">
                                <h6>Active Group A1</h6>
                                <p>Colabors atively fabcate best breed and
                                  apcations through visionary</p>
                                <ul className="img-stack d-flex">
                                  <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                  <li className="bg-theme">12+</li>
                                </ul>
                                <div className="test"> <a href="profile.html" className="lab-btn">
                                    <i className="icofont-users-alt-5" />
                                    View Group</a></div>
                              </div>
                            </div>
                          </div>
                          <div className="group-item lab-item">
                            <div className="lab-inner d-flex flex-wrap align-items-center">
                              <div className="lab-content w-100">
                                <h6>Active Group A2</h6>
                                <p>Colabors atively fabcate best breed and
                                  apcations through visionary</p>
                                <ul className="img-stack d-flex">
                                  <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                  <li className="bg-theme">16+</li>
                                </ul>
                                <div className="test"> <a href="profile.html" className="lab-btn">
                                    <i className="icofont-users-alt-5" />
                                    View Group</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          {/* Photos Tab */}
          <div className="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="nav-photos-tab">
            <div className="photo-title text-center border-radius-2 bg-theme p-1 mb-4">
              <h3 className="mb-0">All Uploaded Pictures</h3>
            </div>
            <div className="row g-3 g-lg-4 justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/03.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/02.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/01.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/04.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/05.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/06.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/07.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/08.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/09.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/10.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/11.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/12.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/13.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/14.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/15.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/16.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/17.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/18.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/19.jpg" alt="image" className="rounded" />
                </div>
              </div>
              <div className="col">
                <div className="gallery-img">
                  <img src="assets/images/member/20.jpg" alt="image" className="rounded" />
                </div>
              </div>
            </div>
            <div className="load-btn">
              <a href="#" className="lab-btn">Load More<i className="icofont-spinner" /></a>
            </div>
          </div>
          {/* Media Tab */}
          <div className="tab-pane fade" id="media" role="tabpanel" aria-labelledby="nav-media-tab">
            <div>
              <div className="row">
                <div className="col-xl-8">
                  <article>
                    <div className="media-wrapper">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="all-media-tab" data-bs-toggle="tab" data-bs-target="#all-media" type="button" role="tab" aria-controls="all-media" aria-selected="true"><i className="icofont-star" /> All
                            Media</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="album-tab" data-bs-toggle="tab" data-bs-target="#album" type="button" role="tab" aria-controls="album" aria-selected="false"><i className="icofont-layout" /> Albums
                            <span>04</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="photos-media-tab" data-bs-toggle="tab" data-bs-target="#photos-media" type="button" role="tab" aria-controls="photos-media" aria-selected="false"><i className="icofont-image" />
                            Photos <span>12</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="video-tab" data-bs-toggle="tab" data-bs-target="#video" type="button" role="tab" aria-controls="video" aria-selected="false"><i className="icofont-video-alt" /> Videos
                            <span>0</span></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music" type="button" role="tab" aria-controls="music" aria-selected="false"><i className="icofont-music-disk" /> Music
                            <span>0</span></button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        {/* All Media Tab */}
                        <div className="tab-pane fade show active" id="all-media" role="tabpanel" aria-labelledby="all-media-tab">
                          <div className="media-title">
                            <h3>Media Gallery</h3>
                          </div>
                          <div className="media-content">
                            <ul className="media-upload">
                              <li className="upload-now">
                                <div className="custom-upload">
                                  <div className="file-btn"><i className="icofont-upload-alt" />
                                    Upload</div>
                                  <input type="file" />
                                </div>
                              </li>
                            </ul>
                            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-4 g-3">
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/01.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/02.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/03.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/04.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/05.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/06.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/07.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/08.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/09.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/10.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/11.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/12.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/03.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/02.jpg" alt="img" />
                                </div>
                              </div>
                            </div>
                            <div className="load-btn">
                              <a href="#" className="lab-btn">Load More<i className="icofont-spinner" /></a>
                            </div>
                          </div>
                        </div>
                        {/* Albums */}
                        <div className="tab-pane fade" id="album" role="tabpanel" aria-labelledby="album-tab">
                          <div className="media-title">
                            <h3>Album Lists</h3>
                          </div>
                          <div className="media-content">
                            <ul className="media-upload">
                              <li className="upload-now">
                                <div className="custom-upload">
                                  <div className="file-btn"><i className="icofont-upload-alt" />
                                    Upload</div>
                                  <input type="file" />
                                </div>
                              </li>
                            </ul>
                            <div className="row g-4">
                              <div className="col-lg-4 col-sm-6">
                                <div className="album text-center">
                                  <div className="album-thumb">
                                    <a href="#">
                                      <img src="assets/images/member/02.jpg" alt="album" />
                                    </a>
                                  </div>
                                  <div className="album-content">
                                    <h6>Private</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="album text-center">
                                  <div className="album-thumb">
                                    <a href="#">
                                      <img src="assets/images/member/03.jpg" alt="album" />
                                    </a>
                                  </div>
                                  <div className="album-content">
                                    <h6>Crush</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="album text-center">
                                  <div className="album-thumb">
                                    <a href="#">
                                      <img src="assets/images/member/06.jpg" alt="album" />
                                    </a>
                                  </div>
                                  <div className="album-content">
                                    <h6>Public</h6>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-sm-6">
                                <div className="album text-center">
                                  <div className="album-thumb">
                                    <a href="#">
                                      <img src="assets/images/member/08.jpg" alt="album" />
                                    </a>
                                  </div>
                                  <div className="album-content">
                                    <h6>Favorite</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="load-btn">
                              <a href="#" className="lab-btn">Load More<i className="icofont-spinner" /></a>
                            </div>
                          </div>
                        </div>
                        {/* Photos */}
                        <div className="tab-pane fade" id="photos-media" role="tabpanel" aria-labelledby="photos-media-tab">
                          <div className="media-title">
                            <h2>All Photos</h2>
                          </div>
                          <div className="media-content">
                            <ul className="media-upload">
                              <li className="upload-now">
                                <div className="custom-upload">
                                  <div className="file-btn"><i className="icofont-upload-alt" />
                                    Upload</div>
                                  <input type="file" />
                                </div>
                              </li>
                            </ul>
                            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-4 g-3">
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/01.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/02.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/03.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/04.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/05.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/06.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/07.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/08.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/09.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/10.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/11.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/12.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/03.jpg" alt="img" />
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb">
                                  <img src="assets/images/member/02.jpg" alt="img" />
                                </div>
                              </div>
                            </div>
                            <div className="load-btn">
                              <a href="#" className="lab-btn">Load More<i className="icofont-spinner" /></a>
                            </div>
                          </div>
                        </div>
                        {/* Videos */}
                        <div className="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
                          <div className="media-title">
                            <h3>All Videos</h3>
                          </div>
                          <div className="media-content">
                            <ul className="media-upload">
                              <li className="upload-now">
                                <div className="custom-upload">
                                  <div className="file-btn"><i className="icofont-upload-alt" />
                                    Upload</div>
                                  <input type="file" />
                                </div>
                              </li>
                            </ul>
                            <div className="row">
                              <div className="col">
                                <p><i className="icofont-worried" /> Sorry !!
                                  There's no media found for the
                                  request !! </p>
                              </div>
                            </div>
                            <div className="load-btn">
                              <a href="#" className="lab-btn">Load More<i className="icofont-spinner" /></a>
                            </div>
                          </div>
                        </div>
                        {/* Music */}
                        <div className="tab-pane fade" id="music" role="tabpanel" aria-labelledby="music-tab">
                          <div className="media-title">
                            <h3>All Music</h3>
                          </div>
                          <div className="media-content">
                            <ul className="media-upload">
                              <li className="upload-now">
                                <div className="custom-upload">
                                  <div className="file-btn"><i className="icofont-upload-alt" />
                                    Upload</div>
                                  <input type="file" />
                                </div>
                              </li>
                            </ul>
                            <div className="row">
                              <div className="col">
                                <p><i className="icofont-worried" /> Sorry !!
                                  There's no media found for the
                                  request !! </p>
                              </div>
                            </div>
                            <div className="load-btn">
                              <a href="#" className="lab-btn">Load More<i className="icofont-spinner" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                {/* Aside Part */}
                <div className="col-xl-4">
                  <aside className="mt-5 mt-xl-0">
                    <div className="widget search-widget">
                      <div className="widget-inner">
                        <div className="widget-title">
                          <h5>Filter Search Member</h5>
                        </div>
                        <div className="widget-content">
                          <p>Serious Dating With Two Monkeys Your Perfect
                            Match is Just a Click Away.</p>
                          <form action="https://labartisan.net/" className="banner-form">
                            <div className="gender">
                              <div className="custom-select right w-100">
                                <select className>
                                  <option value={0}>I am a </option>
                                  <option value={1}>Male</option>
                                  <option value={2}>Female</option>
                                  <option value={3}>Others</option>
                                </select>
                              </div>
                            </div>
                            <div className="person">
                              <div className="custom-select right w-100">
                                <select className>
                                  <option value={0}>Looking for</option>
                                  <option value={1}>Male</option>
                                  <option value={2}>Female</option>
                                  <option value={3}>Others</option>
                                </select>
                              </div>
                            </div>
                            <div className="age">
                              <div className="right d-flex justify-content-between w-100">
                                <div className="custom-select">
                                  <select>
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
                                  <select>
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
                                <select className>
                                  <option value={0}>Choose Your Country
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
                            <div className="interest">
                              <div className="custom-select right w-100">
                                <select className>
                                  <option value={0}>Your Interests
                                  </option>
                                  <option value={1}>Gaming</option>
                                  <option value={2}>Fishing</option>
                                  <option value={3}>Skydriving</option>
                                  <option value={4}>Swimming</option>
                                  <option value={5}>Racing</option>
                                  <option value={6}>Hangout</option>
                                  <option value={7}>Tranvelling</option>
                                  <option value={8}>Camping</option>
                                  <option value={9}>Touring</option>
                                  <option value={10}>Acting</option>
                                  <option value={11}>Dancing</option>
                                  <option value={12}>Singing</option>
                                </select>
                              </div>
                            </div>
                            <button className>Find Your Partner</button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="widget like-member">
                      <div className="widget-inner">
                        <div className="widget-title">
                          <h5>you may like</h5>
                        </div>
                        <div className="widget-content">
                          <div className="row row-cols-3 row-cols-sm-auto g-3">
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/01.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/02.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/03.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/04.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/05.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/06.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/07.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/08.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="col">
                              <div className="image-thumb">
                                <a href="#">
                                  <img src="assets/images/widget/09.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget active-group">
                      <div className="widget-inner">
                        <div className="widget-title">
                          <h5>join the group</h5>
                        </div>
                        <div className="widget-content">
                          <div className="group-item lab-item">
                            <div className="lab-inner d-flex flex-wrap align-items-center">
                              <div className="lab-content w-100">
                                <h6>Active Group A1</h6>
                                <p>Colabors atively fabcate best breed and
                                  apcations through visionary</p>
                                <ul className="img-stack d-flex">
                                  <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                  <li className="bg-theme">12+</li>
                                </ul>
                                <div className="test"> <a href="profile.html" className="lab-btn">
                                    <i className="icofont-users-alt-5" />
                                    View Group</a></div>
                              </div>
                            </div>
                          </div>
                          <div className="group-item lab-item">
                            <div className="lab-inner d-flex flex-wrap align-items-center">
                              <div className="lab-content w-100">
                                <h6>Active Group A2</h6>
                                <p>Colabors atively fabcate best breed and
                                  apcations through visionary</p>
                                <ul className="img-stack d-flex">
                                  <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                                  <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                                  <li className="bg-theme">16+</li>
                                </ul>
                                <div className="test"> <a href="profile.html" className="lab-btn">
                                    <i className="icofont-users-alt-5" />
                                    View Group</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
{/* ==========Profile Section Ends Here========== */}




    </>
  )
}

export default Profile