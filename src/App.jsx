import { useState } from 'react';
import './App.css';

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  function handleToggleModal() {
    setToggleModal(!toggleModal);
  }

  return (
    <>
    <div>

   {/* Preloader (commented out) */}
      {/*
      <div id="js-preloader" ClassNameName="js-preloader">
        <div ClassNameName="preloader-inner">
          <span ClassNameName="dot" />
          <div ClassNameName="dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      */}

  <header ClassName="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col-12">
          <nav ClassName="main-nav">

            <a href="index.html" ClassName="logo">
              <img src="assets/images/logo.png" alt="Chain App Dev" />
            </a>
        
            <ul ClassName="nav">
              <li ClassName="scroll-to-section"><a href="#top" ClassName="active">Home</a></li>
              <li ClassName="scroll-to-section"><a href="#services">Services</a></li>
              <li ClassName="scroll-to-section"><a href="#about">About</a></li>
              <li ClassName="scroll-to-section"><a href="#pricing">Pricing</a></li>
              <li ClassName="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
              <li><div ClassName="gradient-button"><a id="modal_trigger" href="#modal"><i ClassName="fa fa-sign-in-alt"></i> Sign In Now</a></div></li> 
            </ul>        
            <a ClassName='menu-trigger'>
                <span>Menu</span>
            </a>

          </nav>
        </div>
      </div>
    </div>
  </header>
  
  <div id="modal" ClassName="popupContainer" style="display:none;">
    <div ClassName="popupHeader">
        <span ClassName="header_title">Login</span>
        <span ClassName="modal_close"><i ClassName="fa fa-times"></i></span>
    </div>

    <section ClassName="popupBody">

        <div ClassName="social_login">
            <div ClassName="">
                <a href="#" ClassName="social_box fb">
                    <span ClassName="icon"><i ClassName="fab fa-facebook"></i></span>
                    <span ClassName="icon_title">Connect with Facebook</span>

                </a>

                <a href="#" ClassName="social_box google">
                    <span ClassName="icon"><i ClassName="fab fa-google-plus"></i></span>
                    <span ClassName="icon_title">Connect with Google</span>
                </a>
            </div>

            <div ClassName="centeredText">
                <span>Or use your Email address</span>
            </div>

            <div ClassName="action_btns">
                <div ClassName="one_half"><a href="#" id="login_form" ClassName="btn">Login</a></div>
                <div ClassName="one_half last"><a href="#" id="register_form" ClassName="btn">Sign up</a></div>
            </div>
        </div>

        <div ClassName="user_login">
            <form>
                <label>Email / Username</label>
                <input type="text" />
                <br />

                <label>Password</label>
                <input type="password" />
                <br />

                <div ClassName="checkbox">
                    <input id="remember" type="checkbox" />
                    <label for="remember">Remember me on this computer</label>
                </div>

                <div ClassName="action_btns">
                    <div ClassName="one_half"><a href="#" ClassName="btn back_btn"><i ClassName="fa fa-angle-double-left"></i> Back</a></div>
                    <div ClassName="one_half last"><a href="#" ClassName="btn btn_red">Login</a></div>
                </div>
            </form>

            <a href="#" ClassName="forgot_password">Forgot password?</a>
        </div>

        <div ClassName="user_register">
            <form>
                <label>Full Name</label>
                <input type="text" />
                <br />

                <label>Email Address</label>
                <input type="email" />
                <br />

                <label>Password</label>
                <input type="password" />
                <br />

                <div ClassName="checkbox">
                    <input id="send_updates" type="checkbox" />
                    <label for="send_updates">Send me occasional email updates</label>
                </div>

                <div ClassName="action_btns">
                    <div ClassName="one_half"><a href="#" ClassName="btn back_btn"><i ClassName="fa fa-angle-double-left"></i> Back</a></div>
                    <div ClassName="one_half last"><a href="#" ClassName="btn btn_red">Register</a></div>
                </div>
            </form>
        </div>
    </section>
</div>

  <div ClassName="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col-lg-12">
          <div ClassName="row">
            <div ClassName="col-lg-6 align-self-center">
              <div ClassName="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div ClassName="row">
                  <div ClassName="col-lg-12">
                    <h2>Get The Latest App From App Stores</h2>
                    <p>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.</p>
                  </div>
                  <div ClassName="col-lg-12">
                    <div ClassName="white-button first-button scroll-to-section">
                      <a href="#contact">Free Quote <i ClassName="fab fa-apple"></i></a>
                    </div>
                    <div ClassName="white-button scroll-to-section">
                      <a href="#contact">Free Quote <i ClassName="fab fa-google-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ClassName="col-lg-6">
              <div ClassName="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="assets/images/slider-dec.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="services" ClassName="services section">
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col-lg-8 offset-lg-2">
          <div ClassName="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h4>Amazing <em>Services &amp; Features</em> for you</h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>If you need the greatest collection of HTML templates for your business, please visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">TooCSS</a> Blog. If you need to have a contact form PHP script, go to <a href="https://templatemo.com/contact" target="_parent">our contact page</a> for more information.</p>
          </div>
        </div>
      </div>
    </div>
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col-lg-3">
          <div ClassName="service-item first-service">
            <div ClassName="icon"></div>
            <h4>App Maintenance</h4>
            <p>You are not allowed to redistribute this template ZIP file on any other website.</p>
            <div ClassName="text-button">
              <a href="#">Read More <i ClassName="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div ClassName="col-lg-3">
          <div ClassName="service-item second-service">
            <div ClassName="icon"></div>
            <h4>Rocket Speed of App</h4>
            <p>You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.</p>
            <div ClassName="text-button">
              <a href="#">Read More <i ClassName="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div ClassName="col-lg-3">
          <div ClassName="service-item third-service">
            <div ClassName="icon"></div>
            <h4>Multi Workflow Idea</h4>
            <p>If this template is beneficial for your work, please support us <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">a little via PayPal</a>. Thank you.</p>
            <div ClassName="text-button">
              <a href="#">Read More <i ClassName="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div ClassName="col-lg-3">
          <div ClassName="service-item fourth-service">
            <div ClassName="icon"></div>
            <h4>24/7 Help &amp; Support</h4>
            <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
            <div ClassName="text-button">
              <a href="#">Read More <i ClassName="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="about" ClassName="about-us section">
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col-lg-6 align-self-center">
          <div ClassName="section-heading">
            <h4>About <em>What We Do</em> &amp; Who We Are</h4>
            <img src="assets/images/heading-line-dec.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <div ClassName="row">
            <div ClassName="col-lg-6">
              <div ClassName="box-item">
                <h4><a href="#">Maintance Problems</a></h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div ClassName="col-lg-6">
              <div ClassName="box-item">
                <h4><a href="#">24/7 Support &amp; Help</a></h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div ClassName="col-lg-6">
              <div ClassName="box-item">
                <h4><a href="#">Fixing Issues About</a></h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div ClassName="col-lg-6">
              <div ClassName="box-item">
                <h4><a href="#">Co. Development</a></h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div ClassName="col-lg-12">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing  magna.</p>
              <div ClassName="gradient-button">
                <a href="#">Start 14-Day Free Trial</a>
              </div>
              <span>*No Credit Card Required</span>
            </div>
          </div>
        </div>
        <div ClassName="col-lg-6">
          <div ClassName="right-image">
            <img src="assets/images/about-right-dec.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="clients" ClassName="the-clients">
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col-lg-8 offset-lg-2">
          <div ClassName="section-heading">
            <h4>Check What <em>The Clients Say</em> About Our App Dev</h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div ClassName="col-lg-12">
          <div ClassName="naccs">
            <div ClassName="grid">
              <div ClassName="row">
                <div ClassName="col-lg-7 align-self-center">
                  <div ClassName="menu">
                    <div ClassName="first-thumb active">
                      <div ClassName="thumb">
                        <div ClassName="row">
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                            <h4>David Martino Co</h4>
                            <span ClassName="date">30 November 2021</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span ClassName="category">Financial Apps</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <span ClassName="rating">4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div ClassName="thumb">
                        <div ClassName="row">
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                            <h4>Jake Harris Nyo</h4>
                            <span ClassName="date">29 November 2021</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span ClassName="category">Digital Business</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <span ClassName="rating">4.5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div ClassName="thumb">
                        <div ClassName="row">
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                            <h4>May Catherina</h4>
                            <span ClassName="date">27 November 2021</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span ClassName="category">Business &amp; Economics</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <span ClassName="rating">4.7</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div ClassName="thumb">
                        <div ClassName="row">
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                            <h4>Random User</h4>
                            <span ClassName="date">24 November 2021</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span ClassName="category">New App Ecosystem</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <span ClassName="rating">3.9</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div ClassName="last-thumb">
                      <div ClassName="thumb">
                        <div ClassName="row">
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                            <h4>Mark Amber Do</h4>
                            <span ClassName="date">21 November 2021</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 d-none d-sm-block">
                            <span ClassName="category">Web Development</span>
                          </div>
                          <div ClassName="col-lg-4 col-sm-4 col-12">
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <i ClassName="fa fa-star"></i>
                              <span ClassName="rating">4.3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div ClassName="col-lg-5">
                  <ul ClassName="nacc">
                    <li ClassName="active">
                      <div>
                        <div ClassName="thumb">
                          <div ClassName="row">
                            <div ClassName="col-lg-12">
                              <div ClassName="client-content">
                                <img src="assets/images/quote.png" alt=""/>
                                <p>“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
                              </div>
                              <div ClassName="down-content">
                                <img src="assets/images/client-image.jpg" alt=""/>
                                <div ClassName="right-content">
                                  <h4>David Martino</h4>
                                  <span>CEO of David Company</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div ClassName="thumb">
                          <div ClassName="row">
                            <div ClassName="col-lg-12">
                              <div ClassName="client-content">
                                <img src="assets/images/quote.png" alt=""/>
                                <p>“CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
                              </div>
                              <div ClassName="down-content">
                                <img src="assets/images/client-image.jpg" alt=""/>
                                <div ClassName="right-content">
                                  <h4>Jake H. Nyo</h4>
                                  <span>CTO of Digital Company</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div ClassName="thumb">
                          <div ClassName="row">
                            <div ClassName="col-lg-12">
                              <div ClassName="client-content">
                                <img src="assets/images/quote.png" alt=""/>
                                <p>“May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
                              </div>
                              <div ClassName="down-content">
                                <img src="assets/images/client-image.jpg" alt=""/>
                                <div ClassName="right-content">
                                  <h4>May C.</h4>
                                  <span>Founder of Catherina Co.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div ClassName="thumb">
                          <div ClassName="row">
                            <div ClassName="col-lg-12">
                              <div ClassName="client-content">
                                <img src="assets/images/quote.png" alt=""/>
                                <p>“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
                              </div>
                              <div ClassName="down-content">
                                <img src="assets/images/client-image.jpg" alt=""/>
                                <div ClassName="right-content">
                                  <h4>Random Staff</h4>
                                  <span>Manager, Digital Company</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div ClassName="thumb">
                          <div ClassName="row">
                            <div ClassName="col-lg-12">
                              <div ClassName="client-content">
                                <img src="assets/images/quote.png" alt=""/>
                                <p>“Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan
                                  lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”</p>
                              </div>
                              <div ClassName="down-content">
                                <img src="assets/images/client-image.jpg" alt=""/>
                                <div ClassName="right-content">
                                  <h4>Mark Am</h4>
                                  <span>CTO, Amber Do Company</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="pricing" ClassName="pricing-tables">
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col-lg-8 offset-lg-2">
          <div ClassName="section-heading">
            <h4>We Have The Best Pre-Order <em>Prices</em> You Can Get</h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div ClassName="col-lg-4">
          <div ClassName="pricing-item-regular">
            <span ClassName="price">$12</span>
            <h4>Standard Plan App</h4>
            <div ClassName="icon">
              <img src="assets/images/pricing-table-01.png" alt=""/>
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>20 TB of Storage</li>
              <li ClassName="non-function">Life-time Support</li>
              <li ClassName="non-function">Premium Add-Ons</li>
              <li ClassName="non-function">Fastest Network</li>
              <li ClassName="non-function">More Options</li>
            </ul>
            <div ClassName="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
        <div ClassName="col-lg-4">
          <div ClassName="pricing-item-pro">
            <span ClassName="price">$25</span>
            <h4>Business Plan App</h4>
            <div ClassName="icon">
              <img src="assets/images/pricing-table-01.png" alt=""/>
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>50 TB of Storage</li>
              <li>Life-time Support</li>
              <li>Premium Add-Ons</li>
              <li ClassName="non-function">Fastest Network</li>
              <li ClassName="non-function">More Options</li>
            </ul>
            <div ClassName="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
        <div ClassName="col-lg-4">
          <div ClassName="pricing-item-regular">
            <span ClassName="price">$66</span>
            <h4>Premium Plan App</h4>
            <div ClassName="icon">
              <img src="assets/images/pricing-table-01.png" alt=""/>
            </div>
            <ul>
              <li>Lorem Ipsum Dolores</li>
              <li>120 TB of Storage</li>
              <li>Life-time Support</li>
              <li>Premium Add-Ons</li>
              <li>Fastest Network</li>
              <li>More Options</li>
            </ul>
            <div ClassName="border-button">
              <a href="#">Purchase This Plan Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 

  <footer id="newsletter">
    <div ClassName="container">
      <div ClassName="row">
        <div ClassName="col-lg-8 offset-lg-2">
          <div ClassName="section-heading">
            <h4>Join our mailing list to receive the news &amp; latest trends</h4>
          </div>
        </div>
        <div ClassName="col-lg-6 offset-lg-3">
          <form id="search" action="#" method="GET">
            <div ClassName="row">
              <div ClassName="col-lg-6 col-sm-6">
                <fieldset>
                  <input type="address" name="address" ClassName="email" placeholder="Email Address..." autocomplete="on" required/>
                </fieldset>
              </div>
              <div ClassName="col-lg-6 col-sm-6">
                <fieldset>
                  <button type="submit" ClassName="main-button">Subscribe Now <i ClassName="fa fa-angle-right"></i></button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div ClassName="row">
        <div ClassName="col-lg-3">
          <div ClassName="footer-widget">
            <h4>Contact Us</h4>
            <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
            <p><a href="#">010-020-0340</a></p>
            <p><a href="#">info@company.co</a></p>
          </div>
        </div>
        <div ClassName="col-lg-3">
          <div ClassName="footer-widget">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>
        <div ClassName="col-lg-3">
          <div ClassName="footer-widget">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Free Apps</a></li>
              <li><a href="#">App Engine</a></li>
              <li><a href="#">Programming</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">App News</a></li>
            </ul>
            <ul>
              <li><a href="#">App Dev Team</a></li>
              <li><a href="#">Digital Web</a></li>
              <li><a href="#">Normal Apps</a></li>
            </ul>
          </div>
        </div>
        <div ClassName="col-lg-3">
          <div ClassName="footer-widget">
            <h4>About Our Company</h4>
            <div ClassName="logo">
              <img src="assets/images/white-logo.png" alt=""/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
        </div>
        <div ClassName="col-lg-12">
          <div ClassName="copyright-text">
            <p>Copyright © 2022 Chain App Dev Company. All Rights Reserved. 
          <br/>Design: <a href="https://templatemo.com/" target="_blank" title="css templates">TemplateMo</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/animation.js"></script>
  <script src="assets/js/imagesloaded.js"></script>
  <script src="assets/js/popup.js"></script>
  <script src="assets/js/custom.js"></script>
</div>
      {/* Modal Trigger */}
      <a id="modal_trigger" href="#modal" onClick={handleToggleModal}>
        Open Modal
      </a>

      {/* Modal Popup */}
      <div
        id="modal"
        ClassNameName="popupContainer"
        style={
          toggleModal
            ? {
                display: 'block',
                position: 'fixed',
                opacity: 1,
                zIndex: 11000,
                left: '50%',
                marginLeft: '-165px',
                top: 100,
              }
            : { display: 'none' }
        }
      >
        <div ClassNameName="modalContent">
          <h2>Modal Title</h2>
          <p>This is a modal popup.</p>
          <span ClassNameName="modal_close" onClick={handleToggleModal}>
            Close
          </span>
        </div>
      </div>

      {/* Lean Overlay */}
      <div
        id="lean_overlay"
        style={
          toggleModal
            ? { display: 'block', opacity: '0.6' }
            : { display: 'none' }
        }
      />

     
    </>
  );
}

export default App;