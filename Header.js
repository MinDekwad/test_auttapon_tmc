import React from 'react';
import mainLogo from '../src/images/logo.png';
import ughLogo from '../src/images/logo-uhg.png';

const Header = () => { // ในทางปฎิบัติจริงต้องใช้แบบนี้ สามารถใช้กับ ES6 ขึ้นไป
    return(
        <div>
            <header>
                <div className="header">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="col-xs-4 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                            <a href="index.html"><img src={mainLogo} alt="" className="img-responsive margin-center img-logo" /></a>
				            <img src={ughLogo} alt="" className="img-responsive margin-center img-logo-uhg-left" />
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-7 col-lg-7 col-xl-7">
                            <div className="menu-box">
                                <nav className="navbar navbar-inverse">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".myNavbar">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>                        
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse myNavbar">
                                        <ul className="nav navbar-nav">
                                            <li><a href="index.html" id="font_page1" style={{ textDecoration: 'none' }}>HOME</a></li>
                                            <li><a href="accommodation.html" id="font_page2" style={{ textDecoration: 'none' }}>ACCOMMODATIONS</a></li>
                                            <li><a href="rate.html" id="font_page3" style={{ textDecoration: 'none' }}>ROOM RATES</a></li>
                                            <li><a href="special-offer.html" id="font_page4" style={{ textDecoration: 'none' }}>SPECIAL OFFERS</a></li>
                                            <li><a href="residence-facilities.html" id="font_page5" style={{ textDecoration: 'none' }}>FACILITIES</a></li>
                                            <li><a href="dining.html" id="font_page6" style={{ textDecoration: 'none' }}>DINING</a></li>
                                            <li><a href="gallery.html" id="font_page7" style={{ textDecoration: 'none' }}>GALLERY</a></li>
                                            <li><a href="contact.html" id="font_page8" style={{ textDecoration: 'none' }}>CONTACT</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xs-0 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                            <div className="book-now-desktop">
                                <div className="book-now-head-button-box">
                                    <a href="index.html" target="_blank" rel="noopener" className="book-now-head-button" style={{ textDecoration: 'none' }}><i className="fa fa-calendar"></i> BOOK NOW</a>
                                </div>
                                <div className="img-logo-uhg-right-box">
                                    <img src={ughLogo} alt="" className="img-responsive margin-center img-logo-uhg-right" />
                                </div>
                            </div>
                            <div className="book-now-mobile">
                                <img src={ughLogo} alt="" className="img-responsive margin-center img-logo-uhg-right1" />
                                <div className="book-now-head-button-box">
                                    <a href="index.html" target="_blank" rel="noopener" className="book-now-head-button" style={{ textDecoration: 'none' }}><i className="fa fa-calendar"></i> BOOK NOW</a>
                                </div>
                            </div>
                            <div id="google_translate_box">
                                <div id="google_translate_element"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;