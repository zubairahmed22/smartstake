import React from 'react'

const BannerSection = () => {
  return (
    <section className="banner" id="home" style={{backgroundImage: ''}}>
        <div className="container">
            <div className="banner__wrapper">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="banner__content" >
                            <h1 className="text-uppercase">Cryptocurrency <br/> revolutionized  <br/>the  finance</h1>
                            <p>it offers a new horizon of opportunities untethered from traditional
financial constraints </p>
                            <a href="project.html" className="default-btn"><span>ExploreIDO</span></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner__thumb" >
                            <img src="assets/images/banner/banner-thumb/rocket.png" alt="banner Image"/>

                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default BannerSection