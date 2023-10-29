import React from 'react'

const Contact = () => {
  return (
    <section className="contact padding-top padding-bottom">
        <div className="container">
            <div className="section-header section-header--middle">
                <div className="section-header__content">
                    <div className="section-header__titlebar">
                        <h2 className="section__header__title"> Get In Touch
                        </h2>
                    </div>
                </div>
            </div>
            <div className="contact__wrapper">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <form action="contact.php" className="form">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Your Name*" required/>
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Your Email*" required/>
                                </div>
                                <div className="col-md-6">
                                    <input type="tel" placeholder="Your No*" required/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="Subject*" required/>
                                </div>
                                <div className="col-12">
                                    <textarea placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="default-btn"><span>Send Your Message</span></button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Contact