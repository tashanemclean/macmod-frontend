import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';
// import { Form, Col, Row,Button } from 'react-bootstrap';
import ContactForm from './contactForm';
import { Image } from 'react-bootstrap';


class WhoWeAre extends Component {

    render(){
        return (
            <div className='wea'>
                <div className='wea__top'>
                    <div className='wea__top__header'>
                        WHO ARE WE
                    </div>
                    <div className='wea__top__mission-st'>
                        <div><p>MAC-MOD Analytical’s mission statement is “Smarter Chromatography.”</p></div>
                        <div><p>Smarter Chromatography means that when we make a recommendation to you about an HPLC or UHPLC product or  accessory it is to partner with you to offer innovative solutions to your complex separation problems.</p></div>
                    </div>
                </div>

                <div className='wea__bottom'>

                    <div className="wea__bottom__item wea1">
                        <div>
                            <Image style={{ width: '155%'}} src="https://macmod.s3.us-east-2.amazonaws.com/images/who-we-are-images/30years.png" />
                            <p>We leverage our 30 plus years of technical expertise and manufacturing network to help you solve your toughest application problems with cutting edge technologies</p>
                        </div>
                    </div>

                    <div className="wea__bottom__item wea2">
                        <div>
                            <Image style={{ width: '155%'}} src="https://macmod.s3.us-east-2.amazonaws.com/images/who-we-are-images/Analytical.png" />
                            <p>Use advanced LC analytical software to match our product portfolio with your separation needs</p>
                        </div>                    
                    </div>

                    <div className="wea__bottom__item wea3">
                        <div>
                            <Image style={{ width: '155%'}} src="https://macmod.s3.us-east-2.amazonaws.com/images/who-we-are-images/book-covers.png" />
                            <p>We provide up-to-date and accurate technical catalogs and reports from industry leading separation scientists to keep you informed of new technologies</p>
                        </div>
                    </div>

                    <div className="wea__bottom__item wea4">
                        <div>
                            <Image style={{ width: '155%'}} src="https://macmod.s3.us-east-2.amazonaws.com/images/who-we-are-images/delivery.png" />
                            <strong><p>Expect deliveries to be on-time, everytime</p></strong>
                        </div>
                    </div>

                    <div className="wea__bottom__item wea5">
                         <div>
                            <Image style={{ width: '155%'}} src="https://macmod.s3.us-east-2.amazonaws.com/images/who-we-are-images/webinar.png" />
                            <p>We provide up-to-date and accurate technical catalogs and reports from industry leading separation scientists to keep you informed of new technologies</p>
                        </div>
                    </div>

                    <div className="wea__bottom__item wea6">
                         <div>
                             <Image style={{ width: '155%'}} src="https://macmod.s3.us-east-2.amazonaws.com/images/who-we-are-images/family.png" />
                            <strong><p>Treat all customers like family</p></strong>
                        </div>
                    </div>

                    <div className="wea__bottom__item wea7">
                        <div>
                            <Image style={{ transform: 'translate(-719px, 234px)'}} src="https://macmod.s3.us-east-2.amazonaws.com/images/who-we-are-images/Layer_1.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

WhoWeAre = connect(null,actions)(WhoWeAre)

export default WhoWeAre