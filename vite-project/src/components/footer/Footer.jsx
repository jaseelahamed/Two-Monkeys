import React from 'react'

function Footer() {
  return (
      <>
      
    {/* ================ footer Section start Here =============== */}
<footer className="footer-section">
  <div className="footer-middle padding-tb" style={{backgroundImage: 'url(public/images/footer/bg.png)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="footer-middle-item-wrapper">
            <div className="footer-middle-item mb-lg-0">
              <div className="fm-item-title">
                                          <img src={"public/images/logotwo.png"} width="150px" alt="logo" />
              </div>
              <div className="fm-item-content mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="footer-middle-item-wrapper">
            <div className="footer-middle-item mb-lg-0">
              <div className="fm-item-title">
                <h4>Conditions</h4>
              </div>
              <div>
                <ul className="footer-menu">
                  <li>
                    <a href="#0">Privacy</a>
                  </li>
                  <li>
                    <a href="#0">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#0">Community Guidelines</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="footer-middle-item-wrapper">
            <div className="footer-middle-item mb-lg-0">
              <div className="fm-item-title">
                <h4>Quick Links</h4>
              </div>
              <div>
                <ul className="footer-menu">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Safety Tips</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-bottom-content text-center">
            <p>© 2023 <a href="index.html">Two Monkeys</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* ================ footer Section end Here =============== */}


      
      </>
  )
}

export default Footer