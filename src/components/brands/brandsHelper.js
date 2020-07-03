import React , { Component } from 'react';
import Image from 'react-bootstrap/Image';

class BrandsHelper extends Component {

    render(){
        const {image, text} = this.props
        return (
            <div className='brand-content-ex'>
                <div className='img-wrapper'>
                    <Image src={`${image}`} style={{ width: '400px'}}/>
                </div>
                <div className="properties-content-wrapper">
                    <p>ProntoSIL HPLC columns from Bischoff Chromatography are available in a wide variety of bonded phases and dimensions. In addition to more typical C8 and C18 phases, ProntoSIL columns are also available in hard to find bonded phases such as C1, amino, diol and C30. If you are looking for a specialty bonded phase, there is a good chance it is available from Bischoff Chromatography. Contact MAC-MOD Analytical for further information.</p>
                    <p>Some of the most popular ProntoSIL bonded phases are below.</p>
                    <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>ProntoSIL EPS</h4>
                    <p>ProntoSIL EPS is available in both C8 and C18. This column incorporates an amide group near the silica surface giving the column unique selectivity to polar analytes. In addition, the increased polarity from the amide group makes ProntoSIL EPS compatible with highly aqueous mobile phases and an excellent choice for poorly retained polar analytes. ProntoSIL EPS uses a bi-functional silane which forms two covalent bonds with the silica surface. This “dual bonding” gives the column excellent stability at pH extremes and elevated temperatures.</p>
                    <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>ProntoSIL C30</h4>
                    <p>ProntoSIL C30 columns are particularly recommended for the separation of hydrophobic, long chain, structural isomers such as carotenoids, tocopherols and lutein stereoisomers. A C30 columns is the best choice for analytes of similar hydrophobicity, but differing in molecular shape.</p>
                    <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>ProntoSIL C18SH &amp; C8 SH</h4>
                    <p>ProntoSIL C18 SH and C8 SH are non-encapped aliphatic phases using the same “dual bonding” as in ProntoSIL EPS. These columns are very useful in reversed phase applications requiring extremes of pH and temperature.</p>
                    <p>Care and Use Sheets Available on Request (email <a href="mailto:hplc@mac-mod.com">hplc@mac-mod.com</a>)</p>
                </div>
            </div>
        )
    }
}

export default BrandsHelper