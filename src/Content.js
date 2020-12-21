//import React from 'react';

import React, { Component } from 'react';

import ImgContent from './ImgContent';
import ContentImg1 from '../src/images/dining/25resizea.jpg';


//const Content = () => {
class Content extends Component {        
    imageClick = (img) => {
        document.getElementById('imgallfactype6').src = img;
    } 

render () {
    return(
        <div>
            <div className="bg-white">
		        <div className="container">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="content-detail-box">
                            <div className="content-detail">
                                <h3 style={{textAlign: 'center', color: 'white'}}>&nbsp;</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				        <div className="content-detail-box">
                            <div className="content-detail">
                                <h1 style={{textAlign: 'center', color: '#005176', fontWeight: 'bold', fontFamily: 'Bodoni'}}>RESTAURANT</h1>
                                <p>
                            The stylish but homey restaurant offers lively ambience with modern city view.
The all-day restaurant provides all-day dining experiences, A-la carte menus both delicious Thai cuisine and international selection.
                                </p>
                                <p><strong>Breakfast is served from</strong> 6.30 a.m. - 11.00 a.m.</p>
                            </div>
                            <div className="clear"></div>
                            
                            <div className="box-img">
                                <img src={ContentImg1} alt="" className="img-responsive" id="imgallfactype6" width="100%" />
                            </div>
                            <div id="bx-pager" style={{paddingTop:"5px"}}>
                                {ImgContent.map((img, index) => (
                                    <span data-slide-index={index} key={index}>
                                        <div className="box-img">
                                            <img alt="" src={img} id={index} style={{cursor:'pointer'}} onClick={this.imageClick.bind(this, img)} />
                                        </div>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default Content;
