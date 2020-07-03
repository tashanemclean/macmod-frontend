import React, { Component } from 'react';

class ShowVideo extends Component {

    render(){
        const videos = [{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/A++Streamlined+Approach+for+Reversed-Phase+Method+Development+Using+a+Combined+Column+Screening+Approach+and+Software+Modeling+Approach.mp4',
            title: "A Streamline Approach for Reversed-Phase Method De…Screening Approach and Software Modeling Approach",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/A+Useful+Method+Development+Strategy+For+Larger+Protein+Variant+RPLC+Separations+.mp4',
            title: "A Useful Method Development Strategy For Larger Protein Variant RPLC Separations",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Accelerating+HPLC+and+UHPLC+Method+Development+With+Selectivity.mp4',
            title: "Accelerating HPLC and UHPLC Method Development With Selectivity",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Accelerating+UHPLC+and+HPLC+Method+Development+Strategies+by+Leveraging+Selectivity.mp4',
            title: "Accelerating UHPLC and HPLC Method Development Strategies by Leveraging Selectivity",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/An+Introduction+to+the+Theory+and+Practice+of+LC+Method+Translations+and+LC+Method+Transfers.mp4',
            title: "An Introduction to the Theory and Practice of LC Method Translations and LC Method Transfers",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Exploiting+pH+as+a+Part+of+Your+RPLC+Method+Development+Strategy.mp4',
            title: "Exploiting pH as a Part of Your RPLC Method Development Strategy",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/HILIC++Practical+Tips+and+Guidance+for+Method+Development.mp4',
            title: "HILIC Practical Tips and Guidance for Method Development",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Improvement+of+Both+Legacy+and+New+HPLC+Methods+with+Superficially+Porous+Particle+Columns.mp4',
            title: "Improvement of Both Legacy and New HPLC Methods and Superficially Porous Particle Columns",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Improving+Larger+Protein+Separations+Using+1000A+Superficially+Porous+Particles.mp4',
            title: "Improving Larger Protein Separations using 1000A Superficially Porous Particles",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Improving+the+Separation+and+MS+Detection+of+Proteins+and+Protein+Fragments+Using+New+Mobile+Phase+Options+in+Reversed-Phase+Chromatography.mp4',
            title: "Improving the Separation and MS Detection of Proteins and Protein Fragments Using New Mobile Phase Options in Reversed-Phase Chromatography",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Protein+Separations+Using+Large+Pore+Superficially+Porous+Particles+Ben+Webinar+Oct+2018.mp4',
            title: "Protein Separations Using Large Pore Superficially Porous Particles Ben Webinar Oct 2018",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Selectivity+and+Rapid+Method+Development%2C+Method+Translations%2C+and+Instrument+Transfers.mp4',
            title: "Selectivity and Rapid Method Development, Method Translations, and Instrument Transfers",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Theory+and+Practice+of+Developing+LC+Methods+with+Solid-Core+Particle+Columns.mp4',
            title: "UHPLC and HPLC Method Development for Pharmaceutical-Related Substances",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/UHPLC+and+HPLC+Method+Development+for+Pharmaceutical-Related+Substances.mp4',
            title: "Understanding and Overcoming Separation Challenges in the Biological Drug Development Process",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Understanding+and+Overcoming+Separation+Challenges+in+the+Biological+Drug+Development+Process.mp4',
            title: "Unraveling the Structure of a Monoclonal Antibody",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Unraveling+the+Structure+of+a+Monoclonal+Antibody.mp4',
            title: "Using Selectivity to Optimize Resolution for Improved LC and LC-MS Method Development",
        },{
            source: 'https://macmod.s3.us-east-2.amazonaws.com/images/webinars/Using+Selectivity+to+Optimize+Resolution+for+Improved+LC+and+LC-MS+Method+Development.mp4',
            title: "Theory and Practice of Developing LC Methods with Solid-Core Particle Columns",
        }]
        return (
            <div>
                {
                    videos.map((a,key) => {

                        if (this.props.filtered === true && !this.props.titles.includes(a.title) ){
                            return false;
                        }

                        console.log("a: ", a)
                        console.log("key: ", key)
                        return <div key={key} className="embed-responsive embed-responsive-16by9">
                            <video controls={true} className="embed-responsive-item">
                            <source src={`${a.source}`} type="video/mp4" />
                            </video>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default ShowVideo;