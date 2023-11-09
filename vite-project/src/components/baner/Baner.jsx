import React from 'react'
import './Baner.css'
function Baner() {
  return (
      <>
  {/* ================ Banner Section start Here =============== */}
<section className="banner-section">
  <div className="container">
          <div className="section-wrapper">
          <div class="header">
  <h1 id="h1"></h1>
  <h3 id="h3"><span>Create Your Profile</span>Get started by creating your dating profile. It's quick, easy, and completely free.</h3>
</div>

<div class="header">
  <h1 id="h1"></h1>
  <h3 id="h3"><span>Find Your Match</span> Our powerful matching algorithm will help you discover potential matches based on your preferences. Start Dating: Once you've found a connection, start chatting and get to know each other better.</h3>
</div>
            
            <div className="row align-items-end">
              
              <div className="col-lg-5">
                
          <div className="banner-content">
                  <div className="intro-form">
                    
              <div className="intro-form-inner">
                <h3>Are you waiting for dating?</h3>
                <form action="https://labartisan.net/" className="banner-form">
                  <div className="gender">
                    <label htmlFor="gender" className="left">I am a </label>
                    <div className="custom-select right">
                      <select name="gender" id="gender" className>
                        <option value={0}>Select Gender</option>
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                        <option value={3}>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="person">
                    <label htmlFor="gender-two" className="left">Looking for</label>
                    <div className="custom-select right">
                      <select name="gender" id="gender-two" className>
                        <option value={0}>Select Gender</option>
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                        <option value={3}>Others</option>
                      </select>
                    </div>
                  </div>
                  <button className="mt-3">Find Your Coffeemate</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="banner-thumb">
                                  <img src={"public/images/banner/01.png"} alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="all-shapes">
    <img src={"public/images/banner/banner-shapes/01.png"} alt="shape" className="banner-shape shape-1" />
                  <img src={"public/images/banner/banner-shapes/02.png"} alt="shape" className="banner-shape shape-2" />
                  <img src={"public/images/banner/banner-shapes/08.png"} alt="shape" className="banner-shape shape-8"/>
  </div>
</section>
{/* ================ Banner Section end Here =============== */}

          

 


<div>
  {/* ================ About Section start Here =============== */}
  <section className="about-section padding-tb bg-img">
    <div className="container">
      <div className="section-header">
        <h4>About Our Turulav</h4>
        <h2>It All Starts With A Date</h2>
      </div>
      <div className="section-wrapper">
        <div className="row justify-content-center g-4">
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="lab-item about-item">
              <div className="lab-inner text-center">
                <div className="lab-thumb">
                                              <img src={"public/images/about/01.png"} alt="img" />
                </div>
                <div className="lab-content">
                  <h2 className="counter">29,991</h2>
                  <p>Members in Total</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="lab-item about-item">
              <div className="lab-inner text-center">
                <div className="lab-thumb">
                                              <img src={"public/images/about/02.png"} alt="img" />
                </div>
                <div className="lab-content">
                  <h2 className="counter">29,960</h2>
                  <p>Members Online</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="lab-item about-item">
              <div className="lab-inner text-center">
                <div className="lab-thumb">
                                              <img src={"public/images/about/03.png"} alt="img" />
                </div>
                <div className="lab-content">
                  <h2 className="counter">29,960</h2>
                  <p>Men Online</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <div className="lab-item about-item">
              <div className="lab-inner text-center">
                <div className="lab-thumb">
                                              <img src={"public/images/about/04.png"} alt="img" />
                </div>
                <div className="lab-content">
                  <h2 className="counter">28,960</h2>
                  <p>Women Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ================ About Section end Here =============== */}
  {/* ================ Work Section start Here =============== */}
  <section className="work-section padding-tb">
    <div className="container">
      <div className="section-header">
        <h4 className="theme-color">How Does It Work?</h4>
        <h2>You’re Just 3 Steps Away From A Great Date</h2>
      </div>
      <div className="section-wrapper">
        <div className="row justify-content-center g-5">
          <div className="col-lg-4 col-sm-6 col-12 px-4">
            <div className="lab-item work-item">
              <div className="lab-inner text-center">
                <div className="lab-thumb">
                  <div className="thumb-inner">
                                                  <img src={"public/images/work/01.png"} alt="work-img" />
                    <div className="step">
                      <span>step</span>
                      <p>01</p>
                    </div>
                  </div>
                </div>
                <div className="lab-content">
                  <h4>Create A Profile</h4>
                  <p>Continua actualize ailers through robu
                    and sertively concepze standards compliant
                    commerce after technica sound.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 px-4">
            <div className="lab-item work-item">
              <div className="lab-inner text-center">
                <div className="lab-thumb">
                  <div className="thumb-inner">
                                                  <img src={"public/images/work/02.png"} alt="work-img" />
                    <div className="step">
                      <span>step</span>
                      <p>02</p>
                    </div>
                  </div>
                </div>
                <div className="lab-content">
                  <h4>Find Matches</h4>
                  <p>Continua actualize ailers through robu
                    and sertively concepze standards compliant
                    commerce after technica sound.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 px-4">
            <div className="lab-item work-item">
              <div className="lab-inner text-center">
                <div className="lab-thumb">
                  <div className="thumb-inner">
                                                  <img src={"public/images/work/03.png"} alt="work-img" />
                    <div className="step">
                      <span>step</span>
                      <p>03</p>
                    </div>
                  </div>
                </div>
                <div className="lab-content">
                  <h4>Start Dating</h4>
                  <p>Continua actualize ailers through robu
                    and sertively concepze standards compliant
                    commerce after technica sound.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ================ Work Section end Here =============== */}
  {/* ================ Review Section start Here =============== */}
  <section className="clints-section padding-tb">
    <div className="container">
      <div className="section-header">
        <h4 className="theme-color">What our Customers Say</h4>
        <h2>Client’s Feed back Latest Reviews
          From My Clients</h2>
      </div>
      <div className="section-wrapper">
        <div className="clients">
          <div className="client-list">
            <div className="client-content">
              <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                Procedur Arramin</p>
              <div className="client-info">
                <div className="name-desi">
                  <h6>Marin Chapla</h6>
                  <span>UI Designer</span>
                </div>
                <div className="rating">
                  <ul>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-thumb">
                                      <img src={"public/images/group/group-mem/02.png"} alt="lab-clients" />
            </div>
          </div>
          <div className="client-list">
            <div className="client-content">
              <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                Procedur Arramin</p>
              <div className="client-info">
                <div className="name-desi">
                  <h6>Nandita Rani</h6>
                  <span>Digital Marketor</span>
                </div>
                <div className="rating">
                  <ul>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-thumb">
                                      <img src={"public/images/group/group-mem/01.png"} alt="lab-clients" />
            </div>
          </div>
          <div className="client-list">
            <div className="client-content">
              <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                Procedur Arramin</p>
              <div className="client-info">
                <div className="name-desi">
                  <h6>Sunil Borua</h6>
                  <span>UX Designer</span>
                </div>
                <div className="rating">
                  <ul>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-thumb">
                                      <img src={"public/images/group/group-mem/03.png"} alt="lab-clients" />
            </div>
          </div>
          <div className="client-list">
            <div className="client-content">
              <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                Procedur Arramin</p>
              <div className="client-info">
                <div className="name-desi">
                  <h6>Zinat Zaara</h6>
                  <span>Web Designer</span>
                </div>
                <div className="rating">
                  <ul>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-thumb">
                                      <img src={"public/images/group/group-mem/04.png"} alt="lab-clients" />
            </div>
          </div>
          <div className="client-list">
            <div className="client-content">
              <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                Procedur Arramin</p>
              <div className="client-info">
                <div className="name-desi">
                  <h6><a href="profile.html">Somrat Islam </a></h6>
                  <span>UI Designer</span>
                </div>
                <div className="rating">
                  <ul>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-thumb">
                                      <img src={"public/images/group/group-mem/05.png"} alt="lab-clients" />
            </div>
          </div>
          <div className="client-list">
            <div className="client-content">
              <p>Drama enable wordwide action team whereProcedu Aran Manu Produc Raher ConveneMotin Was
                Procedur Arramin</p>
              <div className="client-info">
                <div className="name-desi">
                  <h6>Junaid Khan</h6>
                  <span>Font-End-Devoloper</span>
                </div>
                <div className="rating">
                  <ul>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                    <li><i className="icofont-star" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="client-thumb">
                                      <img src={"public/images/group/group-mem/06.png"} alt="lab-clients" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ================ Review Section end Here =============== */}
</div>



      
      </>
  )
}

export default Baner