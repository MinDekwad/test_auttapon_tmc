import React from 'react';
import mainSlide1 from '../src/images/mainslide/dining/sl1b.jpg';
import mainSlide2 from '../src/images/mainslide/dining/sl2b.jpg';
import mainSlide3 from '../src/images/mainslide/dining/sl3b.jpg';
import mainSlide4 from '../src/images/mainslide/dining/sl4b.jpg';
import mainSlide5 from '../src/images/mainslide/dining/sl5b.jpg';

const Slider = () => {
    return(
        <div>
            <div className="slide-content">
                <ul className="main-slide">
                    <li><img src={mainSlide1} alt="Residence Thonglor" width="100%" /></li>
                    <li><img src={mainSlide2} alt="Residence Thonglor" width="100%" /></li>
                    <li><img src={mainSlide3} alt="Residence Thonglor" width="100%" /></li>
                    <li><img src={mainSlide4} alt="Residence Thonglor" width="100%" /></li>
                    <li><img src={mainSlide5} alt="Residence Thonglor" width="100%" /></li>
                </ul>
                <div className="slogan-box">
                    <div className="slogan-form">
                        <div className="title-slogan">
			                <p>DINING</p>
		                </div>
                        <div className="detail-slogan">
                            <p>YOUR BEST ADDRESS ON THONGLOR RD.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider;