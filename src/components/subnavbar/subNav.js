import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import Slider from '../slider';

const subNavLinks = [
    {
        _id: 0,
        title: "WHAT'S NEW",
        component: <Slider 
            controls={false}
            custom={true}
            images={['https://macmod.s3.us-east-2.amazonaws.com/images/misc/Whats-New%40Homepage-v1.svg']} 
            caption={"WHAT'S NEW"} 
            label={"Check out the latest product releases, updates, events, white papers and more!"} learnmore="LEARN MORE" />,
        active: false
    },
    {
        _id: 1,
        title: "INDUSTRY",
        component: <Slider 
            controls={false}
            images={['https://mac-mod.vseen.com/wp-content/uploads/2019/09/Industry-BG.jpg']}
            caption={"We are leaders in our industry"} 
            label={"MAC-MOD serves a number of industries with innovative chromatogrpahy solutions. Click below for specific industry applications."} learnmore="LEARN MORE" />,
        active: false
    },
    {
        _id: 2,
        title: "SMARTER CHROMATOGRAPHY",
        component: <Slider 
            custom={true}
            controls={false} 
            images={['https://mac-mod.vseen.com/wp-content/uploads/2019/09/Smarter-Chromatography_FOREGROUND.svg"']} 
            caption={"Smarter Chromatography"} 
            label={"We leverage our 30 plus years of technical expertise and manufacturing network to help solve your toughest application problems."} learnmore="LEARN MORE" />,
        active: false
    },
    {
        _id: 3,
        title: "BRAND",
        component: <Slider 
            controls={false} 
            images={['https://macmod.s3.us-east-2.amazonaws.com/images/misc/MM-2.jpg']} 
            caption={"We offer innovative solutions to your complex problems"} 
            label={"MAC-MOD is the exclusive US distribution partner of a number of premium HPLC brands."} learnmore="LEARN MORE" />,
        active: false
    },
    {
        _id: 4,
        title: "LC MODE",
        component: <Slider 
            controls={false} 
            images={['https://macmod.s3.us-east-2.amazonaws.com/images/misc/MM-3.jpg']} 
            caption={"We supply several LC Chromatography Modes"} 
            label={"Reversed Phase, Normal Phase, HILIC, and Ion-Exchange Modes with more to come with new product development"} learnmore="LEARN MORE" />,
        active: false
    },
    {
        _id: 5,
        title: "NEWS",
        component: <Slider 
            controls={false}
            custom={true}
            images={['https://mac-mod.vseen.com/wp-content/uploads/2019/09/News-FG.svg']} 
            caption={"Subscribe to keep up with all things MAC-MOD Analytical"} 
            label={"Be the first to hear breaing news, industry events, and exciting information"} learnmore="LEARN MORE" />,
        active: false
    }
]
class SubNav extends Component {
    constructor(){
        super()

        this.state = {
            showContent: false
        }
    }

    componentDidMount(){
        this.props.setSubNavLinks(subNavLinks)
        this.props.fetchSubNavCategories()
    }

    handleOnClick = (link) => {
        this.props.changeSubNavActive(link._id);
    }

    renderContent(){
        let jsx
        if(this.props.subNavLinks){
            this.props.subNavLinks.forEach(link => {
                if(link.active){
                    jsx = link.component
                }
            })
        }
        return jsx
    }

    render() {
        const { className } = this.props
        const sliderimages = [
            'https://macmod.s3.us-east-2.amazonaws.com/images/slider-images/MM-Home+Page+Sliders_HP+Applications_4-30-20.jpg',
            'https://macmod.s3.us-east-2.amazonaws.com/images/slider-images/MM-Home+Page+Sliders_HP+HALO+C30_9-26-19_VF.jpg',
            'https://macmod.s3.us-east-2.amazonaws.com/images/slider-images/MM-Home+Page+Sliders_HP+HALO+DiPhenyl_9-26-19_VF.jpg',
            'https://macmod.s3.us-east-2.amazonaws.com/images/slider-images/MM-Home+Page+Sliders_HP+Safety+Caps_9-26-19_VF.jpg',
            'https://macmod.s3.us-east-2.amazonaws.com/images/slider-images/MM-Home+Page+Sliders_HP+Upcoming+Trade+Shows_9-26-19_VF.jpg',
            'https://macmod.s3.us-east-2.amazonaws.com/images/slider-images/MM-Home+Page+Sliders_HP+Webinars_4-30-20.jpg',
            'https://macmod.s3.us-east-2.amazonaws.com/images/slider-images/MM-Home+Page+Sliders_HP+White+Paper_4-30-20.jpg'
        ]
        return (
            <div className={`${className}`}>
                {
                    this.state.showContent ? 
                    this.renderContent()
                    :
                    <Slider images={sliderimages} />
                }
                <div className={`${className}__link`}>
                    {
                        this.props.subNavLinks.map((link,index) => {
                            return (
                                <a
                                className={`${link.active ? 'brand-color': ''}`} 
                                key={index} 
                                onClick={()=> {this.handleOnClick(link); this.setState({showContent: true})}}
                                >
                                    {link.title}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { subNavLinks, onClick } = state.subNavbar
    return {
        subNavLinks,
        onClick
    }
}

SubNav = connect(mapStateToProps,actions)(SubNav)

export default SubNav