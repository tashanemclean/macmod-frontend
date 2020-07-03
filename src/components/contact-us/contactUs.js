import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import ContactForm from '../contactForm';

// props passed from parent component will be rendered here
class ContactUs extends Component {
    
    render(){
        const { className,contacts } = this.props
        return (
            <div className={`${className}-container`}>
                <div className={`${className}-container__info`}>
                    <div className='map'>
                        <Image src='https://macmod.s3.us-east-2.amazonaws.com/images/Contact+Us+Images/mac-mod-map-final.png' />
                    </div>
                    <div className='details'>
                        <div className='details__address'>
                            <div><strong>Mac-Mod Analytical, Inc.</strong></div>
                            <div>103 Commons Court, Chadds Ford, PA 19317</div>
                        </div>
                        <div className='details__hours'>
                            <div>Hours of Operation</div>
                            <div>Mon-Fri, 9am-5pm EST</div>
                        </div>
                        <div className='details__contact-methods'>
                            <div className='contact-phone'>
                                <i className='fas fa-phone' />  
                                <div><strong>Phone:</strong></div>
                                <a href='#' style={{color: '#c80c47'}}>+1 (610) 358-9696</a>
                            </div>

                            <div className='contact-fax'>
                                <i className='fas fa-fax' />  
                                <div><strong>Fax:</strong></div>
                                <a href='#' style={{color: '#c80c47'}}>+1 (610) 358-5993</a>
                            </div>

                            <div className='contact-email'>
                                <i className='fas fa-envelope' />  
                                <div><strong>Email:</strong></div>
                                <a href='#' style={{color: '#c80c47'}}>info@mac-mod.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${className}-container__contacts`}>
                {
                    contacts.map((a,key) =>{
                       return a.teamlead ? 
                        <div className='contacts-teamlead' key={key}>
                            {/* <Card style={{width: '18rem'}}>
                                <Card.Img src={a.contactthumbnail} />
                                <Card.Title>{a.contacttitle}</Card.Title>
                                <Card.Body>{a.contactemail}</Card.Body>
                                <Card.Footer>{a.contactphone}</Card.Footer>
                            </Card> */}
                            <div className='photo'><Image src={a.contactthumbnail} /></div>
                            <div className='bio'>
                                <h3>{a.contactname}</h3>
                                <div>{a.contacttitle}</div>
                                <div>Phone: {a.contactphone}</div>
                                <div>Email: <a href='#'>{a.contactemail}</a></div>
                            </div>
                        </div>
                        :
                        // <Card style={{width: '18rem'}}>
                        //     <label>{a.contactname}</label>
                        //     <Card.Img src={a.contactthumbnail} />
                        //     <Card.Title>{a.contacttitle}</Card.Title>
                        //     <Card.Body>{a.contactemail}</Card.Body>
                        //     <Card.Footer>{a.contactphone}</Card.Footer>
                        // </Card>
                        <div className='contacts-reg'>
                            <div className='photo'><Image src={a.contactthumbnail} /></div>
                            <div className='bio'>
                                <h3>{a.contactname}</h3>
                                <div>{a.contacttitle}</div>
                                <div>Phone: {a.contactphone}</div>
                                <div>Email: <a href='#'>{a.contactemail}</a></div>
                            </div>
                        </div>
                    })
                }
                </div>
                <div className={`${className}-container__form`}>
                    <ContactForm />
                </div>
            </div>
        )
    }
}

export default ContactUs