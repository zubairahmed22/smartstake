import { Link, NavLink } from "react-router-dom"

const HeaderComponent = () => {
    return (
      <header className="header-section">
          <div className="container">
              <div className="header-holder">
                  <div className="header-primary d-flex flex-wrap justify-content-between align-items-center">
                      <div className="brand-logo d-none d-lg-inline-block">
                          <div className="logo">
                              <a href="index.html">
                              <img src="/assets/images/logo/smartLogo.png" alt="logo" />
                              </a>
                          </div>
                      </div>
                      <div className="header-wrapper justify-content-lg-end">
                          <div className="mobile-logo d-lg-none">
                              <a href="index.html"><img src="/assets/images/logo/smartLogo.png" alt="logo" /></a>
                          </div>
                          <div className="menu-area">
                              <ul className="menu">
                                  <li>
                                     <NavLink to={'/'}>Home</NavLink>
                                      
                                  </li>
                                  
                                  <li>
                                      <Link to={'Staking'}>Stacking</Link>
                                     
                                  </li>
                                  <li>
                                      <Link to={'BuyToken'}>Buy Token</Link>
                                     
                                  </li>
                                  <li>
                                     <Link to={'Team'}> Team</Link>
                                      
                                  </li>
                                  <li>
                                  <Link to={'BlogPost'}>Blog</Link>    
                                      
                                  </li>
                                  <li> <Link to={'Contact'}> Contact</Link></li>
                                
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