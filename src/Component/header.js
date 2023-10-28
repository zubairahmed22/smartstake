
const HeaderComponent = () => {
    return (
      <header className="header-section">
          <div className="container">
              <div className="header-holder">
                  <div className="header-primary d-flex flex-wrap justify-content-between align-items-center">
                      <div className="brand-logo d-none d-lg-inline-block">
                          <div className="logo">
                              <a href="index.html">
                              <img src="/assets/images/logo/smartstake_logo.png" alt="logo" />
                              </a>
                          </div>
                      </div>
                      <div className="header-wrapper justify-content-lg-end">
                          <div className="mobile-logo d-lg-none">
                              <a href="index.html"><img src="/assets/images/logo/smartstake_logo.png" alt="logo" /></a>
                          </div>
                          <div className="menu-area">
                              <ul className="menu">
                                  <li>
                                      <a href="/#" onClick={(e) => e.preventDefault()}>Home</a>
                                      {/* <ul className="submenu">
                                          <li><a href="index.html">Home 1</a></li>
                                          <li><a href="index-2.html">Home 2</a></li>
                                          <li><a href="index-3.html">Home 3 <span
                                                      className="badge bg--secondary-color">New</span></a></li>
                                      </ul> */}
                                  </li>
                                  <li>
                                      <a href="/#" onClick={(e) => e.preventDefault()}>Project</a>
                                      {/* <ul className="submenu">
                                          <li><a href="project.html">Project 1</a></li>
                                          <li><a href="project-2.html">Project 2</a></li>
                                          <li><a href="project-details.html">Project Details</a></li>
                                          <li><a href="apply-project.html">Apply for Project</a></li>
                                          <li><a href="tokenomics.html">Tokenomics</a></li>
                                      </ul> */}
                                  </li>
                                  <li>
                                      <a href="/#" onClick={(e) => e.preventDefault()}>Stacking</a>
                                      {/* <ul className="submenu">
                                          <li><a href="stacking.html">Stacking</a></li>
                                          <li><a href="farming.html">Farming</a></li>
                                      </ul> */}
                                  </li>
                                  <li>
                                      <a href="/#" onClick={(e) => e.preventDefault()}>Pages</a>
                                      {/* <ul className="submenu">
                                          <li><a href="roadmap.html">Roadmap</a></li>
                                          <li><a href="roadmap-2.html">Roadmap 2</a></li>
                                          <li><a href="kyc.html">KYC</a></li>
                                          <li><a href="tier.html">Tier</a></li>
                                          <li><a href="faq.html">FAQ</a></li>
                                          <li><a href="leaderboard.html">Leaderboard</a></li>
                                          <li>
                                              <a href="/#" onClick={(e) => e.preventDefault()}>Team</a>
                                              <ul className="submenu">
                                                  <li><a href="team.html">Team</a></li>
                                                  <li><a href="team-member.html">Team member</a></li>
                                              </ul>
                                          </li>
  
                                          <li>
                                              <a href="/#" onClick={(e) => e.preventDefault()}>Account</a>
                                              <ul className="submenu">
                                                  <li><a href="signup.html">Sign Up</a></li>
                                                  <li><a href="login.html">Log In</a></li>
                                                  <li><a href="reset-pass.html">Reset Pass</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="404.html">404</a></li>
                                          <li><a href="coming-soon.html">Coming Soon</a></li>
                                      </ul> */}
                                  </li>
                                  <li>
                                      <a href="/#" onClick={(e) => e.preventDefault()}>Blog</a>
                                      {/* <ul className="submenu">
                                          <li><a href="blog.html">Blog </a></li>
                                          <li><a href="blog-2.html">Blog 2</a></li>
                                          <li><a href="blog-single.html">Blog Single</a></li>
                                      </ul> */}
                                  </li>
                                  <li><a href="contact.html">Contact</a></li>
                              </ul>
                              <a className="wallet-btn" href="#" data-bs-toggle="modal" data-bs-target="#wallet-option">
                                  <span>Connect
                                  </span> <i className="fa-solid fa-wallet"></i></a>
  
                            
                              <div className="header-bar d-lg-none">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                          </div>
                      </div>
  
                  </div>
              </div>
          </div>
  
      </header>
    )
  }
  
  export default HeaderComponent 