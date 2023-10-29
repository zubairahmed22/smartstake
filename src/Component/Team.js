import React from 'react'

const Team = () => {
  return (
    <section className="team padding-top padding-bottom shape-1r">
    <div className="container">
        <div className="section-header section-header--middle">
            <div className="section-header__content">
                <div className="section-header__titlebar">
                    <p className="section-header__subtitle"> Team</p>
                    <h2 className="section__header__title">Meet the Crew</h2>
                </div>
            </div>
        </div>
        <div className="team__wrapper">
            <div className="row justify-content-center g-4">
                <div className="col-lg-3 col-sm-6">
                    <div className="team__item" >
                        <div className="team__thumb">
                            <img src="assets/images/team/person.png" alt="Team Member Image"/>
                        </div>
                        <div className="team__content">
                            <h4><a href="team-member.html">Name</a></h4>
                            <p>CEO</p>
                            <ul className="social">
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team__item" >
                        <div className="team__thumb">
                            <img src="assets/images/team/person.png" alt="Team Member Image"/>
                        </div>
                        <div className="team__content">
                            <h4><a href="team-member.html">Name</a></h4>
                            <p>Marketing Head</p>
                            <ul className="social">
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team__item">
                        <div className="team__thumb">
                            <img src="assets/images/team/person.png" alt="Team Member Image"/>
                        </div>
                        <div className="team__content">
                            <h4><a href="team-member.html">Name</a></h4>
                            <p>Blockchain Developer</p>
                            <ul className="social">
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="social__item">
                                    <a href="#" className="social__link"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
               
                
               
               
            </div>
        </div>
    </div>
</section>
  )
}

export default Team