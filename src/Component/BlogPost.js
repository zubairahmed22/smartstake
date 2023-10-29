import React from 'react'
import "./BannerSection"
const BlogPost = () => {
  return (
    
//    {/* <section classNameName="page-header bg--cover" style={{backgroundImage: 'url(assets/images/header/bg.jpg)'}}>
//     <div classNameName="container">
//         <div classNameName="page-header__content text-center">
//             <h2 classNameName="text-capitalize">Blog Details</h2>
            
//         </div>
//     </div>
   
// </section> */}

<div className="blog padding-top padding-bottom">
        <div className="container">
            <div className="blog__wrapper">
                <div className="row ">
                    <div className="col-lg-8">
                        <article>
                            <div className="post-item-2">
                                <div className="post-inner">
                                    <div className="post-thumb mb-30 px-30 pt-30">
                                        <img src="assets/images/blog/single/Dapp.png" alt="blog"/>
                                    </div>
                                    <div className="post-content pt-0">
                                        <h3> Staking and DApp Development</h3>
                                        <ul className="blog__meta d-flex flex-wrap align-items-center mb-4">
                                            <li className="blog__meta-author">
                                                <a href="#"><span><i className="fa-solid fa-user"></i></span> dorothea
                                                </a>
                                            </li>
                                            <li className="blog__meta-date">
                                                <a href="#"><span><i className="fa-solid fa-calendar-days"></i></span>
                                                    30
                                                    December 2022</a>
                                            </li>
                                        </ul>
                                        <p> Staking allows users to lock away a specified amount of $SMART in return for financial
rewards to maximize the potential of their holdings. At its core, staking will offer a dual
advantage; it serves as a mechanism for securing the network while simultaneously rewarding
participants with additional tokens.
</p>
                                        <blockquote className="single-quote mb-30">
                                            <div className="quotes">
                                            By Q2, 2024, Smart Staking will introduce an external DApp, enabling holders to stake their
tokens and reap the rewards seamlessly. However, our focus isn't just on staking; it's about
creating a system where every stakeholder finds value
                                            </div>
                                           
                                        </blockquote>
                                        <p>When holders stake their tokens, they
don't just earn passively; they contribute to the overall stability and health of the platform.
What makes Smart Staking different is that investors will earn both BUSD and the native
$MART token, ensuring diverse income streams. This approach mirrors the ethos of depositing
in a high-yield savings account but within the decentralized realm, blending traditional
finance's stability with crypto's innovation.</p>
                                        

                                      


                                    </div>
                                </div>
                            </div>
                            
                            

                            <div id="respond" className="comment-respond">
                                <h4 className="h7">Leave a Comment</h4>
                                <div className="add-comment">
                                    <form action="#" method="post" id="commentform" className="comment-form">
                                        <input name="name" type="text" value="" placeholder="Name*"/>
                                        <input name="email" type="text" value="" placeholder="Email*"/>
                                        <textarea id="comment-reply" name="comment" rows="7"
                                            placeholder="Type Here Your Comment*"></textarea>
                                        <button type="submit" className="default-btn"><span>Send Comment</span></button>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4">
                        <aside className="ps-lg-4">

                            <div className="widget widget-search">
                                <div className="widget__header">
                                    <h5>Search keywords</h5>
                                </div>
                                <div className="widget-search-inner">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search here"
                                            aria-label="Search bar"/>
                                        <button className="search-icon"><i
                                                className="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget-category">
                                <div className="widget__header">
                                    <h5>Post Categories</h5>
                                </div>
                                <ul className="lab-ul widget-wrapper list-bg-none">
                                    <li>
                                        <a href="#" className="d-flex flex-wrap justify-content-between"><span>
                                                <i className="fa-solid fa-folder"></i> Show
                                                all</span><span>15</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="fa-solid fa-folder"></i>IGO</span><span>20</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="fa-solid fa-folder"></i>Metaverse</span><span>65</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="fa-solid fa-folder"></i>Web
                                                3.0</span><span>32</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="fa-solid fa-folder"></i>IDO</span><span>16</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="fa-solid fa-folder"></i>Token</span><span>70</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex flex-wrap justify-content-between"><span><i
                                                    className="fa-solid fa-folder"></i>Binance</span><span>26</span></a>
                                    </li>
                                </ul>
                            </div>




                            <div className="widget widget-post">
                                <div className="widget__header">
                                    <h5>Recent Post</h5>
                                </div>
                                <ul className="lab-ul widget-wrapper">
                                    <li className="widget-post-item">
                                        <div className="post-thumb">
                                            <a href="blog-single.html"><img src="assets/images/blog/p-post/01.jpg"
                                                    alt="product"/></a>
                                        </div>
                                        <div className="post-content">
                                            <a href="blog-single.html">
                                                <h6>Launch Your IDO Project Now</h6>
                                            </a>
                                            <p>02 January 2022</p>
                                        </div>
                                    </li>
                                    <li className="widget-post-item">
                                        <div className="post-thumb">
                                            <a href="blog-single.html"><img src="assets/images/blog/p-post/02.jpg"
                                                    alt="product"/></a>
                                        </div>
                                        <div className="post-content">
                                            <a href="blog-single.html">
                                                <h6>Best IDO Launchpad HTML template</h6>
                                            </a>
                                            <p>21 February 2022</p>
                                        </div>
                                    </li>
                                    <li className="widget-post-item">
                                        <div className="post-thumb">
                                            <a href="blog-single.html"><img src="assets/images/blog/p-post/03.jpg"
                                                    alt="product"/></a>
                                        </div>
                                        <div className="post-content">
                                            <a href="blog-single.html">
                                                <h6>Who are eligible to launch project?</h6>
                                            </a>
                                            <p>30 Sep 2022</p>
                                        </div>
                                    </li>
                                    <li className="widget-post-item">
                                        <div className="post-thumb">
                                            <a href="blog-single.html"><img src="assets/images/blog/p-post/04.jpg"
                                                    alt="product"/></a>
                                        </div>
                                        <div className="post-content">
                                            <a href="blog-single.html">
                                                <h6>What is the Token allocation in Torkgo</h6>
                                            </a>
                                            <p>05 March 2022</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>




                          
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default BlogPost