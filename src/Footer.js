import React from 'react';
import faceBook from '../src/images/fb.png';
import tripAd from '../src/images/tripad.png';
import onehotel from '../src/images/1hotel.png';

const Footer = () => {
    return(
        <div>
            <div className="footer">
                <div className="container">
			        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
					        <h3 className="title-foot1">NEWSLETTER</h3>
					        <p className="col-foot1">Enter your email address to receive our exclusive offers & promotions</p>
					        <div className="enew-box">
                                <form>
                                    <input type="text" name="EmailEnews" id="EmailEnews" readOnly placeholder="Your Email Address" />
                                    <div className="Enews-arrow">
                                        <a href="foo"><span className="glyphicon glyphicon-arrow-right" style={{padding: '7px 10px 0px 10px', display: 'block'}}></span></a>
                                    </div>
                                </form>
                                <div id="MessSend"></div>
                            </div>
					    </div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <h3 className="title-foot2">QUICK LINKS</h3>
                            <div className="menu-foot">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pdlr0">
                                    <ul className="list">
                                        <li><a href="index.html" style={{ textDecoration: 'none' }}>HOME</a></li>
                                        <li><a href="accommodation.html" style={{ textDecoration: 'none' }}>ACCOMMODATION</a></li>
                                        <li><a href="rate.html" style={{ textDecoration: 'none' }}>ROOM RATES</a></li>
                                        <li><a href="special-offer.html" style={{ textDecoration: 'none' }}>SPECIAL OFFERS</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pdlr0">
                                    <ul className="list">
                                        <li><a href="residence-facilities.html" style={{ textDecoration: 'none' }}>FACILITIES</a></li>
                                        <li><a href="dining.html" style={{ textDecoration: 'none' }}>DINING</a></li>
                                        <li><a href="gallery.html" style={{ textDecoration: 'none' }}>PHOTO GALLERY</a></li>
                                        <li><a href="contact.html" style={{ textDecoration: 'none' }}>CONTACT</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                            <h3 className="title-foot3">FIND US ON</h3>
                            <div className="social-box">
                                <ul className="list">
                                    <li><a href="foo" target="_blank" rel="noopener"><img src={faceBook} alt="" className="img-responsive" /></a></li>
                                    <li><a href="foo" target="_blank" rel="noopener"><img src={tripAd} alt="" className="img-responsive" /></a></li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                            <div className="col-foot3">
                                <p>Copyright 2018 © RESIDENCETHONGLOR.COM. All Rights Reserved.<br/>
                                   Designed & Hosted by <img src={onehotel} alt="" /> 1hotelsolution.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;