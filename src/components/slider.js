import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Slider extends Component {
    render(){
        const { controls,caption,label,images,learnmore,custom } = this.props;
        return (
            <div className='home__items__subnav__slider'>
            <Carousel interval={3000} controls={controls}>
                {
                    custom === true ? 
                    images.map((image,i) => {
                        return (
                            <Carousel.Item key={i}>
                                <div className='group'>
                                    <div className='group-content'>
                                        <h3 className='content-header'>{caption}</h3>
                                        <div className='content-body'>{label}</div>
                                        <a href='#'>{learnmore}</a>
                                    </div>
                                    <div className='related-image'>
                                        <img
                                        src={image}/>
                                    </div>
                                </div>
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                    :
                    images.map((image,i) => {
                        return (
                            <Carousel.Item key={i}>
                                <img  
                                className='home__items__subnav__slider__images' 
                                style={{width: '100%'}}
                                src={image}/>
                                <Carousel.Caption>
                                    <h3>{caption}</h3>
                                    <p>{label}</p>
                                    <h5>{learnmore}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            </div>
        )
    }
}

export default Slider;