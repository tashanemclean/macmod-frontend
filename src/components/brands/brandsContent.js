import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import history from '../../history';
import BrandsHelper from './brandsHelper';
import Button from 'react-bootstrap/Button'
import navbarRoutes from 'components/headernavbar/navRoutes';

class BrandContent extends Component {
    constructor(){
        super()

        this.state = {
            showContent: true,
            brandName: {},
            brands: []
        }
    }

    componentDidMount(){
        this.props.setNavbarLinks(navbarRoutes)
        this.props.fetchBrands(this.props.match.params)
        this.setState({ brandName: this.props.match.params})
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.type !== this.props.match.params.type) {
            this.props.fetchBrands(this.props.match.params)
        }
    }
    
    // this logic can be changed later
    setPhasePageImage(images){
        this.props.setProductPageImage(images)
    }

    render(){

        const specialtext = '3.5 µm and 3.0 µm particles are often packed in HPLC columns with smaller bores (<3.0 mm ID) and shorter lengths (20 - 50mm). These columns facilitate faster separations and are routinely employed with mass spectrometers as detectors. The operating pressure is not as high as with UHPLC columns, but the need still exists for low system dispersion, since these columns typically generate peaks with small volumes. ColumnShield pre-column filters are optimal for these types of columns. They provide effective, low-dispersion filtering at a lower cost than the UltraShield. Although they are not recommended for ultra-high pressure applications, they can still be safely used at pressures up to 400 bar (6,000 psi). ColumnShield pre-column filters utilize a PEEK finger-tight design that connects directly to any 1/16” 10-32 internal thread inlet fitting port, regardless of the manufacturer.'

        const phases = []
        const brands = this.props.brands
        const brand = this.props.match.params.id
        for(var i in brands){
            if(brands[i]?.brand?.includes(brand)){
                for( var b in brands[i].brandphases) {
                    phases.push(brands[i].brandphases[b])
                }
            }
        }

        return (
            <div className='content'>
                <div className='content__content'>
                    {
                        brand === 'prontosil'?
                        <BrandsHelper image={'https://mac-mod.vseen.com/wp-content/uploads/2019/09/ProntoSil-Logo.png'} />
                        :
                        brand === 'partisphere'?
                        <div className='brand-content-ex'>
                            <div className='img-wrapper'>
                                <Image src='' style={{ width: '400px'}}/>
                            </div>
                            <div className="properties-content-wrapper">
                                <p>Partisphere is available in pre-packed columns and a choice of 5µm high performance phases. In addition to its efficient pure silica and monomeric C-18 and C-8, SAX, SCX and PAC are also available. PartiSphere media feature narrow particle size distribution and excellent reproducibility.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>Normal Phase (Adsorption) Media</h4>
                                <p>PartiSphere Spherical Silica (5µm) PartiSphere silica features homogenous particles with narrow particle size distribution for sharp separations and excellent reproducibility. It is the basis for PartiSphere bonded phases.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>Ion Exchange Media</h4>
                                <p>PartiSphere Spherical Silica (5µm) PartiSphere SAX and SCX (5µm) Strong ion exchange media based on homogenous spherical silica particles with very tight size distribution. They produce very sharp separations.</p>
                                <p>Partisil SCX (5 and 10µm) Based on aromatic benzene sulfonic acid groups. Supplied in the ammonium form. Excellent for separation of nucleosides, amino acids, polyamines, drugs and other cationic species. Capable of being loaded with specific metallic cations for use in ligand exchange chromatography. Stable over pH range 1.5-7.0 when used in conjunction with a Solvecon mobile phase conditioning-column. Exceptionally stable Si-O-Si-C bond, both thermally and chemically.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>Reverse Phase Media</h4>
                                <p>PartiSphere C-18 (5µm) C-18 stationary phase on homogenous, spherical silica particles for very high separation efficiency.</p>
                                <p>PartiSphere C-8 (5µm) Octyl bonded phase on homogenous spherical particles for maximal resolution.</p>
                                <p>PartiSphere PAC (5µm) Polar Amino Cyano bonded to homogenous spherical particles for maximal resolution.</p>
                                <p>Partisphere TAC 1 (5µm) For great discoveries such as Taxol, Whatman technology optimally separates the closely eluting taxanes of Pacific yew trees. Whatman worked closely with two leading customers to develop a specific bonded phase that achieves baseline resolution of the paclitaxel molecule from its closest impurity. Each lot of TAC 1 (Taxane Analysis Column) is tested with a paclitaxel chromatographic purity separation to ensure the best possible reproducibility. (Richheimer SL et al. Anal Chem. 1992; 64: 2323-2326)</p>
                            </div>
                        </div>
                        :
                        brand === 'hydrobound'?
                        <div className='brand-content-ex'>
                            <div className='img-wrapper'>
                                <Image src='https://macmod.s3.us-east-2.amazonaws.com/images/brands/products-header-hydrobond.png'/>
                            </div>
                            <div className="properties-content-wrapper">
                                <p>HydroBond HPLC columns from MAC-MOD Analytical are available in two unique bonding chemistries, each designed to give excellent peak shape and increased retention of polar analytes.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>HydroBond AQ</h4>
                                <p>HydroBond AQ is a non-endcapped C8 with an ether linkage near the point of attachment to the silica surface. This ether group is sufficiently polar to allow water to penetrate and hydrate the silica surface preventing "pore de-wetting" even in 100% aqueous mobile phases. HydroBond AQ can retain highly water soluble compounds such as organic acids, water soluble vitamins and low molecular weight polar compounds without the use of ion-pairing reagents. HydroBond AQ also offers excellent hydrophobic retention due to its high surface area and high carbon loading.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>HydroBond PS</h4>
                                <p>HydroBond PS is available in both a C18 and C8 bonded phase. HydroBond PS columns use "polar shielding" to further deactivate the silica surface assuring excellent retention and peak shape of poorly retained basic compounds. This polar end-capping also allows water to better hydrate the silica surface. HydroBond PS is compatible with highly aqueous mobile phases and is also a good general purpose reversed phase HPLC column.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>Which do I choose?</h4>
                                <p>Both HydroBond AQ and HydroBond PS are designed to give increased retention of polar analytes and both can function in highly aqueous mobile phases. If your sample consists of all polar compounds that can be eluted isocratically, choose HydroBond AQ. If your sample is more complex, containing both polar and non-polar analytes, gradient elution is recommended on either HydroBond PS C18 or PS C8.</p>
                            </div>
                        </div>
                        :
                        brand === 'ultrasphere'?
                        <div className='brand-content-ex'>
                            <div className='img-wrapper'>
                                <Image src='https://macmod.s3.us-east-2.amazonaws.com/images/brands/ultrasphere-banner.jpg'/>
                            </div>
                            <div className="properties-content-wrapper">
                                <p>Ultrasphere columns remain widely referenced within both industry and academia and are recognized to provide excellent chromatographic performance.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>Available Phases</h4>
                                <p>Ultrasphere columns are available in five phases with a 5µm particle size; ODS (C18), Octyl (C8), Ion Pair (IP) and unbonded silica (SI).  Additionally, ODS (C18), Octyl (C8), Cyano (CN) and unbonded silica (SI) chemistries are available with a 3μm particle size</p>
                            </div>
                        </div>
                        :
                        brand === 'pre-column-filters'? 
                        <div className='brand-content-ex'>
                            <div className='img-wrapper'>
                                <Image src='https://macmod.s3.us-east-2.amazonaws.com/images/brands/product-precolumn-header.jpg'/>
                            </div>
                            <div className="properties-content-wrapper">
                                <p>One of the most common causes of HPLC column failure is particulate material collecting on the inlet frit of the column, causing high back pressure and/or distortion of peak shape. By one estimate, over 70% of the failures of HPLC columns are caused by inlet frit plugging. UHPLC columns, especially those packed with sub-2 μm size particles, are particularly vulnerable to inlet frit plugging.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>UHPLC</h4>
                                <div>
                                    <p><strong>ULTRASHIELD</strong></p> 
                                    <p>Pre-column filters for UHPLC columns</p>
                                </div>
                                <p>As the name implies, UltraShield pre-column filters are engineered specificallyfor use in fast, high efficiency “UHPLC” separations requiring high mobile phase velocities and ultra-high pressure. The ultra-low dispersion of UltraShield maintains the efficiency of UHPLC columns, assuring no loss of critical resolution. With its simple design, UltraShield installs on any analytical, UHPLC or UPLC column in seconds and is leak tight to 1000 bar (15,000 psi). Simply finger tighten initially, then wrench tighten beyond finger tight an additional ¼ turn.</p>
                                <div>
                                    <p><strong>ULTRASHIELD WW</strong></p>
                                    <p>Pre-column filters for UHPLC columns</p>
                                </div>
                                <p>Are the choice for Waters’® UPLC columns with Waters’ UPLC® systems.</p>
                                <div>
                                    <p><strong>ULTRASHIELD WP</strong></p>
                                    <p>Pre-column filters for UHPLC columns</p>
                                </div>
                                <p>Are the choice for all non-Waters column brands on UPLC systems.</p>
                                <hr></hr>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>HPLC</h4>
                                <div>
                                    <p><strong>COLUMN SHIELD</strong></p>
                                    <p>Pre-column filters for higher performance HPLC columns or smaller bore columns</p>
                                </div>
                                <p>{specialtext}</p>
                                <div>
                                    <p><strong>COLUMN SAVER</strong></p>
                                    <p>Pre-column filter for more typical standard bore (3.0 to 8.0 mm) HPLC columns</p>
                                    <p>ColumnSavers provide economical protection for HPLC columns packed with 3um size particles or larger and with bore sizes (internal diameter) 3.0mm to 8.0mm. We recommend using these pre-column filters on the inlet of guard columns to extend the life and reduce the replacement costs of these items.</p>
                                </div>
                            </div>
                        </div>
                        :
                        brand === 'ace-chromsword'?
                        <div className='brand-content-ex'>
                            <div className='img-wrapper'>
                                <Image src='https://macmod.s3.us-east-2.amazonaws.com/images/brands/ace/products-header-ace-chromsword-mdk.jpg'/>
                            </div>
                            <Button>SHOP ACE CHROMSWORD NOW</Button>
                            <div><h1>ACE® ChromSword Method Development Kits</h1></div>
                            <h4>Intelligent Solutions for Method Development, Smarter Chromatography</h4>
                            <p>Solve HPLC method development challenges systematically and efficiently – using ACE columns and ChromSword 2 method development software. The ACE ChromSword Method Development Kit includes 6 alternative selectivity ACE phases, a copy of ChromSword 2 offline with a 6-month activation license and a wealth of technical information and support – the perfect combination to introduce an improved method development protocol for your laboratory.</p>
                        </div>
                        :
                        phases.map((a,key) => {
                            return (
                                <Col key={key}>
                                    <Image src={`${a.imageurl}`}
                                    onClick={()=> { 
                                        history.push(`/products/brand/content/page/${a.phase}/${this.props.match.params.type}`); 
                                        this.setPhasePageImage(a.imageurl); 
                                    }}
                                    />
                                </Col>
                            )
                        })
                    }
                    {
                    
                        brands.length >= 1? 
                        
                            brands.map((a,key) => {
                                return (
                                    <Col key={key}>
                                        <Image src={`${a.imageurl}`}
                                        onClick={() => 
                                            { 
                                                if(a.phase == 'prontosil') { 
                                                    history.push(`/products/brand/content/prontosil/${a.phase}`);
                                                } 
                                                else 
                                                    history.push(`/products/brand/content/page/${a.phase}/${this.props.match.params.type}`); 
                                                    this.setPhasePageImage(a.imageurl); 
                                            }
                                        }
                                        />
                                    </Col>
                                )
                            })
                        
                        : null
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { brandcontent,brands } = state.brands
    const {navbarLinks} = state.headerNavbar
    return { brandcontent,navbarLinks,brands }
}

BrandContent = connect(mapStateToProps,actions)(BrandContent)

export default BrandContent;