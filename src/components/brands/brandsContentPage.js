import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

import ToolTipResource from '../toolTipResource';
import BulletsResource from '../bulletsResource';
import ResourceHelper from 'components/resourceHelper';
import { Button } from 'react-bootstrap';
import navbarRoutes from 'components/headernavbar/navRoutes';

class BrandContentPage extends Component {

    componentDidMount(){

        this.props.setNavbarLinks(navbarRoutes)
        const brandToFetch = this.props.match.params.id
        this.props.fetchBrandContent(brandToFetch)
        // when we have all images to fetch 
        if (this.props.brandcontent.length !== 0) {
            // array to store images for sending to backend
            var images = []
            try{
                for(var i in this.props.brandcontent){
                    images.push(this.props.brandcontent[i]['Phase Design'])
                }
                this.props.fetchPhaseImages(images)

            } catch {
                console.log( 'no Images' )
            }
            // we fetch the list of phase image urls
            
        }
            
    }

    clickedBuyNow(e,itemToBuy){
        e.preventDefault()
        this.props.setClickedBuyNow(itemToBuy)
        this.props.history.push('/shop')
    }

    pushToPhasePage(e,phase,phaseNumber){
        e.preventDefault()
        this.props.history.push(`/phasepage/${phase}/${phaseNumber}`)
    }

    render(){

        const currentbrand = this.props.match.params.id
        const brandContent = this.props.brandcontent

        const productpageimage = this.props.productpageimage
        const imageUrls = this.props.phaseimage

        // array for tables headers use to show table heading
        const th = []
        const phaseimages = []

        // we get the keys fron the brandcontent object to store and use them as table headers
        for(var i in brandContent){
            th.push(Object.keys(brandContent[i]))
        }

        // if brandContent is not null then we get the phase image names that we will fetch from the backend
        if(brandContent.length !== 0){
            for(var a in brandContent){
                phaseimages.push(brandContent[a]['Phase Design'])
            }
        }

        const brandbullets = this.props.brandbullets

        return(
           <div className='content'>
                <div className='product-phase-table'>

                    <div className='product-pg-img'>
                        <Image src={productpageimage} />
                    </div>
                    {
                        currentbrand === 'vydac'? 
                        <div>
                            <ResourceHelper
                            page='VYDAC'
                            header='Vydac TP was the first range of wide pore media phases developed in the Vydac range and became the industry standard for peptide and protein separations. The large pores of the 300A TP silica give polypeptide molecules complete access to the interior of the silica pores.'
                            bulletpoints={['Long column lifetime and negligible phase leaching','Reliable protein purifications, scalable from analytical to preparative scale','Referenced in a large number of patents and publications']}
                            />
                            <div>
                                <table cellPadding="2" cellSpacing="0" className="lined" border="0">
                                    <tbody>
                                        <tr>
                                            <th width="89" bgcolor="#CCCCCC"><p>Vydac TP Phase</p></th>
                                            <th width="83" bgcolor="#CCCCCC"><p>Functional group</p></th>
                                            <th width="81" bgcolor="#CCCCCC">Particle <br></br><p>size (um)</p></th>
                                            <th width="181" bgcolor="#CCCCCC"><p>&nbsp;Chromatographic Properties</p></th>
                                            <th width="284" bgcolor="#CCCCCC"><p>Application/Benefit)</p></th>
                                            <th width="46" bgcolor="#CCCCCC"><p>USP Code</p></th>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Vydac 218TP</p></td>
                                            <td style={{textAlign: 'center'}}><p>C18</p></td>
                                            <td style={{textAlign: 'center'}}><p>3, 5, 10</p></td>
                                            <td style={{textAlign: 'center'}}><p>First generation polymeric C18 phase with unique selectivity</p></td>
                                            <td style={{textAlign: 'center'}}><p>Small polypeptides 4-5K MW, enzymatic digest fragments, natural and synthetic peptides, multi-ring compounds</p></td>
                                            <td style={{textAlign: 'center'}}><p>L1</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Vydac 238TP</p></td>
                                            <td style={{textAlign: 'center'}}><p>C18</p></td>
                                            <td style={{textAlign: 'center'}}><p>5</p></td>
                                            <td style={{textAlign: 'center'}}><p>First generation monomeric C18 phase</p></td>
                                            <td style={{textAlign: 'center'}}><p>Use for same applications as 218TP, but offers different C18 selectivity</p></td><td style={{textAlign: 'center'}}><p>L1</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Vydac 208TP</p></td>
                                            <td style={{textAlign: 'center'}}><p>C8</p></td>
                                            <td style={{textAlign: 'center'}}><p>5</p></td>
                                            <td style={{textAlign: 'center'}}><p>Less hydrophobic than C18TP phase</p></td>
                                            <td style={{textAlign: 'center'}}><p>Polypeptides 10-20K MW</p></td>
                                            <td style={{textAlign: 'center'}}><p>L7</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Vydac 214TP</p></td>
                                            <td style={{textAlign: 'center'}}><p>C4</p></td>
                                            <td style={{textAlign: 'center'}}><p>5,10</p></td>
                                            <td style={{textAlign: 'center'}}><p>First generation C4 phase</p></td>
                                            <td style={{textAlign: 'center'}}><p>Glycoproteins, haemoglobin variants, histones, insulin variants, membrane proteins</p></td>
                                            <td style={{textAlign: 'center'}}><p>L26</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Vydac 214ATP</p></td>
                                            <td style={{textAlign: 'center'}}><p>C4</p></td>
                                            <td style={{textAlign: 'center'}}><p>5</p></td>
                                            <td style={{textAlign: 'center'}}><p>C4 phase with lower level of endcapping</p></td>
                                            <td style={{textAlign: 'center'}}><p>Optimised for analysis of human growth hormone</p></td>
                                            <td style={{textAlign: 'center'}}><p>L26</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Vydac 219TP</p></td>
                                            <td><p style={{textAlign: 'center'}}>Diphenyl</p></td>
                                            <td style={{textAlign: 'center'}}><p>5,10</p></td>
                                            <td><p style={{textAlign: 'center'}}>Lowest capacity first generation diphenyl phase</p></td>
                                            <td><p style={{textAlign: 'center'}}>Polypeptides with aromatic side chains, large hydrophobic proteins, membrane-spanning peptides, lipid peptides, fusion proteins from inclusion bodies</p></td>
                                            <td><p style={{textAlign: 'center'}}>L11</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Vydac 201TP</p></td>
                                            <td><p style={{textAlign: 'center'}}>C18</p></td>
                                            <td style={{textAlign: 'center'}}><p>3, 5, 10</p></td>
                                            <td><p style={{textAlign: 'center'}}>Non-endcapped 300A C18 phase</p></td>
                                            <td><p style={{textAlign: 'center'}}>Developed for separation of PAHs</p></td>
                                            <td><p style={{textAlign: 'center'}}>L1</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Vydac 202TP</p></td>
                                            <td><p style={{textAlign: 'center'}}>C18</p></td>
                                            <td style={{textAlign: 'center'}}><p>5</p></td>
                                            <td><p style={{textAlign: 'center'}}>Higher carbon load than 201TP</p></td>
                                            <td><p style={{textAlign: 'center'}}>Developed for separation of PAHs</p></td>
                                            <td><p style={{textAlign: 'center'}}>L1</p></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                    <p>Vydac 218TP and 238TP are used for small polypeptides of 4-5kDa, enzymatic digest fragments, natural and synthetic peptides and multi-ring compounds.</p>

                                    <p>Vydac 208TP is recommended for polypeptides of molecular weight 10-20kDa.</p>

                                    <p>Vydac 214TP is recommended for the analysis of glycoproteins, haemoglobin variants, histones, insulin variants and membrane proteins.</p>

                                    <p>Vydac 219TP is suitable for polypeptides with aromatic side chains, large hydrophobic proteins, membrane-spanning peptides, lipid peptides and fusion proteins from inclusion bodies.</p>

                                    <h1>Vydac MS</h1>
                                    <p>Vydac MS columns are a later development from Grace for the reversed-phase HPLC separation of biomolecules. A proprietary surface treatment and bonding process give Vydac MS columns unique selectivity. A variety of reversed-phases makes this product line suitable for the analysis of small peptides to large intact, undenatured proteins.</p>
                                    <strong>The general features of Vydac MS include:</strong>
                                    <ul type="disc">
                                    <li>300A pore size spherical silica</li>
                                    <li>Five reversed-phase chemistries</li>
                                    <li>Excellent peak shape with little or no TFA</li>
                                    <li>High protein recoveries make scale-up easy</li>
                                    </ul>

                                    <p><strong>Vydac MS Phase Specifications</strong> </p>
                                    <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                        <tbody>
                                            <tr>
                                                <th width="83" bgcolor="#CCCCCC"><p>Vydac MS Phase</p></th>
                                                <th width="94" bgcolor="#CCCCCC"><p>Functional Group</p></th>
                                                <th width="70" bgcolor="#CCCCCC"><p>Particle Size (um)</p></th>
                                                <th width="217" bgcolor="#CCCCCC"><p>Chromatographic Properties</p></th>
                                                <th width="224" bgcolor="#CCCCCC"><p>Application/Benefit</p></th>
                                                <th width="78" bgcolor="#CCCCCC"><p>USP Code</p></th>
                                            </tr>
                                            <tr>
                                                <td align="center"><p>Vydac 218MS</p></td>
                                                <td><p style={{textAlign: 'center'}}>C18</p></td>
                                                <td><p style={{textAlign: 'center'}}>3, 5, 10</p></td>
                                                <td><p style={{textAlign: 'center'}}>Polymeric bonding, highest hydrophobic interaction and unique geometric selectivity</p></td>
                                                <td><p style={{textAlign: 'center'}}>Use for simple enzymatic digests (&lt;12 proteins) or biomolecules 0 - 5k MW</p></td>
                                                <td><p style={{textAlign: 'center'}}>L1</p></td>
                                            </tr>
                                            <tr>
                                                <td align="center"><p>Vydac 238MS</p></td>
                                                <td><p style={{textAlign: 'center'}}>C18</p></td>
                                                <td><p style={{textAlign: 'center'}}>5</p></td>
                                                <td><p style={{textAlign: 'center'}}>Monomeric bonding offers increased peptide interaction and generally yields higher peak counts</p></td>
                                                <td><p style={{textAlign: 'center'}}>Use for same applications as 218MS, but offers different C18 selectivity</p></td>
                                                <td><p style={{textAlign: 'center'}}>L1</p></td>
                                            </tr>
                                            <tr>
                                                <td align="center"><p>Vydac 208MS</p></td>
                                                <td><p style={{textAlign: 'center'}}>C8</p></td>
                                                <td><p style={{textAlign: 'center'}}>5</p></td>
                                                <td><p style={{textAlign: 'center'}}>Lower hydrophobicity is better for larger biomolecules</p></td>
                                                <td><p style={{textAlign: 'center'}}>Ideal for biomolecules 5-10K MW</p></td>
                                                <td><p style={{textAlign: 'center'}}>L7</p></td></tr><tr><td align="center"><p>Vydac 214MS</p></td>
                                                <td><p style={{textAlign: 'center'}}>C4</p></td>
                                                <td><p style={{textAlign: 'center'}}>5, 10</p></td>
                                                <td><p style={{textAlign: 'center'}}>Lower capacity than C18 or C8, suitable for hydrophobic proteins or when minimal organic solvent is desired</p></td>
                                                <td><p style={{textAlign: 'center'}}>Ideal for biomolecules &gt;10K MW, undenatured intact proteins, antibodies, oligonucleotides, human growth hormone</p></td>
                                                <td><p style={{textAlign: 'center'}}>L26</p></td>
                                            </tr>
                                            <tr>
                                                <td align="center"><p>Vydac 219MS</p></td>
                                                <td><p style={{textAlign: 'center'}}>Diphenyl</p></td>
                                                <td><p style={{textAlign: 'center'}}>5</p></td>
                                                <td><p style={{textAlign: 'center'}}>Lowest capacity, aromatic functional groups</p></td>
                                                <td><p style={{textAlign: 'center'}}>Highly selective for proteins with aromatic side chains</p></td>
                                                <td><p style={{textAlign: 'center'}}>L11</p></td>
                                            </tr>
                                        </tbody>
                                        </table>

                                    <p>The improved selectivity for peptides on the Vydac MS columns results in better primary structure definition and easier identification of degradation products and other protein characteristics.</p>
                                    <p><strong>Vydac 218MS</strong> and <strong>238MS </strong>are used for simple enzymatic digests {'(< 12 proteins)'} or biomolecules (0-5kDa).</p>
                                    <p><strong>Vydac 208MS</strong> is ideal for biomolecules of molecular weight 5-10kDa.</p>
                                    <p><strong>Vydac 214MS</strong> has lower capacity than C18 or C8 and is suitable for hydrophobic proteins or when minimal organic solvent is required. It is recommended for biomolecules of {"> "}10kDa molecular weight, undenatured intact proteins, antibodies, oligonucleotides, human growth hormone.</p>
                                    <p><strong>Vydac 219MS</strong> has the lowest capacity and is highly selective for proteins with aromatic side chains.</p>
                                    <h1>Vydac Everest</h1>
                                    <p>Everest columns have unique selectivity and sensitivity, which are the result of bonding technology that improves C18 surface coverage and deactivates residual silanols. Previously, the best 300A C18 chemistries have had carbon coverage in the 2.8 to 3.6umol/m2 range. Everest C18 coverage is in excess of 4umol/m2 and approximates the theoretical limit based on surface area. The increased shielding of the base silica increases column lifetime and reduces the amount of TFA required to shield the silica.</p>
                                    <p><strong>The general features of Vydac Everest inlcude:</strong></p>
                                    <ul>
                                    <li> Unique selectivity for hydrophilic and hydrophobic peptides</li>
                                    <li> High resolution for complex peptide digests</li>
                                    <li> Excellent sensitivity with little or no TFA in mobile phase</li>
                                    </ul>
                                    <p><strong>Vydac Everest Phase Specifications</strong></p>
                                        
                                    <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                        <tbody>
                                            <tr>
                                                <th bgcolor="#CCCCCC"><p>Vydac Everest Phase</p></th>
                                                <th bgcolor="#CCCCCC"><p>Particle Size(um)</p></th>
                                                <th bgcolor="#CCCCCC"><p>Chromatographic Properties</p></th>
                                                <th bgcolor="#CCCCCC"><p>Application//Benefit</p></th>
                                                <th bgcolor="#CCCCCC"><p>USP Code</p></th>
                                            </tr>
                                            <tr>
                                                <td align="center"><p>Vydac 238EV (C18)</p></td>
                                                <td align="center"><p>5, 10</p></td>
                                                <td align="center"><p style={{textAlign: 'center'}}>Maximum surface coverage for highest resolution of complex samples</p></td>
                                                <td align="center"><p style={{textAlign: 'center'}}>Complex enzymatic digests (&gt;12 proteins)</p></td>
                                                <td align="center"><p style={{textAlign: 'center'}}>L1</p></td>
                                            </tr>
                                        </tbody>
                                        </table>

                                    <h1>Vydac Denali</h1>

                                    <p>Vydac Denali (238DE) is a 120A C18 bonded phase with high carbon coverage, suitable for the analysis of both acidic and basic analytes. It has applications for small molecule analyses of interest to pharmaceutical and environmental laboratories. </p>
                                    <p><strong> The general features of Vydac Denali include: </strong></p>
                                    <ul>
                                    <li>High retentivity</li>
                                    <li>LC-MS of small molecules</li>
                                    <li>Fully scalable from capillary to process</li>
                                    </ul>
                            </div>
                        </div>
                        :
                        currentbrand === 'prevail'?
                        <div>
                            <ResourceHelper
                            page='PREVAIL'
                            header='Prevail HPLC columns exhibit long column lifetime in both highly aqueous and highly organic mobile phases. All phases, apart from Prevail Carbohydrate ES are silica-based. The stability of these phases is such that a single column can be switched between highly aqueous for analysis of highly polar analytes and highly organic for strong retention of hydrophobic analytes.'
                            bulletpoints={['Stable from highly organic to highly aqueous','Speciality phases for specific applications','Excellent sensitivity with microbore and ELSD applications']}
                            />
                            <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                <tbody>
                                    <tr>
                                        <th align="center" bgcolor="#CCCCCC"><p>Phase</p></th>
                                        <th bgcolor="#CCCCCC"><p>Particle size (um)</p></th>
                                        <th bgcolor="#CCCCCC"><p>Chromatographic Properties</p></th>
                                        <th bgcolor="#CCCCCC"><p>Application/Benefit</p></th>
                                        <th bgcolor="#CCCCCC"><p>USP code </p></th>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Prevail C18 Select</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Stable in highly aqueous to highly organic mobile phases</p></td>
                                        <td style={{textAlign: 'center'}}><p>Same benefits as Prevail C18, but slightly more retentive</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Prevail C18</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>&nbsp;Stable in highly aqueous to highly organic mobile phases</p></td>
                                        <td style={{textAlign: 'center'}}><p>Flexibility to switch between varied mobile phase conditions to suit a variety of applications. Excellent sensitivity for microbore applications</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Prevail C8</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Stable C8 phase</p></td>
                                        <td style={{textAlign: 'center'}}><p>Use for highly hydrophobic compounds that retain too strongly on C18</p></td>
                                        <td style={{textAlign: 'center'}}><p>L7</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Prevail Phenyl</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Lowest hydrophobic capacity</p></td>
                                        <td style={{textAlign: 'center'}}><p>Selective for aromatic compounds in a variety of mobile phase conditions</p></td>
                                        <td style={{textAlign: 'center'}}><p>L11</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Prevail Cyano</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>General purpose cyano suitable for normal or reversed-phase use</p></td>
                                        <td style={{textAlign: 'center'}}><p>Rugged normal phase applications</p></td>
                                        <td style={{textAlign: 'center'}}><p>L10</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Prevail Amino</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Stable in highly aqueous to highly organic mobile phases</p></td>
                                        <td style={{textAlign: 'center'}}><p>Use for carbohydrates or as a weak anion exchanger</p></td>
                                        <td style={{textAlign: 'center'}}><p>L8</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Prevail Silica</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Highly polar phase</p></td>
                                        <td style={{textAlign: 'center'}}><p>General purpose normal phase applications</p></td>
                                        <td style={{textAlign: 'center'}}><p>L3</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Prevail Organic Acid</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Highly efficient silica-based, acid-stable phase</p></td>
                                        <td style={{textAlign: 'center'}}><p>Separates common organic acids with unsurpassed resolution, speed and sensitivity. Lower cost than polymeric columns</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Prevail Carbohydrate ES</p></td>
                                        <td style={{textAlign: 'center'}}><p>5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Extremely stable hybrid phase</p></td>
                                        <td style={{textAlign: 'center'}}><p>Excellent for mono- and oligosaccharides and sugar alcohols</p></td>
                                        <td style={{textAlign: 'center'}}><p>-</p></td>
                                    </tr>
                                    <tr> 
                                        <td align="center"><p>Prevail Amide</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Polar embedded phase</p></td>
                                        <td style={{textAlign: 'center'}}><p>Suitable for use with 100% aqueous mobile phases</p></td>
                                        <td style={{textAlign: 'center'}}><p>-</p></td>
                                    </tr>
                                </tbody>
                                </table>
                        </div>
                        :
                        currentbrand === 'alttima hp'?
                        <div>
                            <ResourceHelper
                            page='ALTTIMA HP'
                            header='Alltima HP columns combine a range of different phase chemistries with high purity silica. The Alltima HP product family combines the selectivity and performance needed to overcome the most challenging separation needs. The low column bleed makes these columns ideal for microbore applications.'
                            bulletpoints={['High purity silica','Excellent column stability','Low to no detectable column bleed','Multiple selectivity options']}
                            />
                            <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                <tbody>
                                    <tr>
                                        <th width="90" bgcolor="#CCCCCC"><p>Alltima HP Phase</p></th>
                                        <th width="106" bgcolor="#CCCCCC"><p>Particlesize (um)</p></th>
                                        <th width="297" bgcolor="#CCCCCC"><p>Chromatographic Properties</p></th>
                                        <th width="225" bgcolor="#CCCCCC"><p>Application/Benefit</p></th>
                                        <th width="50" bgcolor="#CCCCCC"><p>USP Code</p></th>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima HP C18</p></td>
                                        <td style={{textAlign: 'center'}}><p>3,5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Classic reversed-phase retention and selectivity</p></td>
                                        <td style={{textAlign: 'center'}}><p>Routine applications</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima HP C18 EPS</p></td>
                                        <td style={{textAlign: 'center'}}><p>3,5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Greater retention and enhanced peak symmetry for polar compounds. Alternative selectivity to traditional reversed-phase</p></td>
                                        <td style={{textAlign: 'center'}}><p>Reversed-phase applications where C18 is too retentive</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima HP C18 Hi-Load</p></td>
                                        <td style={{textAlign: 'center'}}><p>3,5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Highest carbon load for superior retention and loadability</p></td>
                                        <td style={{textAlign: 'center'}}><p>&nbsp;High resolution for complex samples</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima HP C18-AQ</p></td>
                                        <td style={{textAlign: 'center'}}><p>3,5</p></td>
                                        <td style={{textAlign: 'center'}}><p>100% water wettable</p></td>
                                        <td style={{textAlign: 'center'}}><p>Applications requiring high aqueous mobile phases</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima HP C18-Amide</p></td>
                                        <td style={{textAlign: 'center'}}><p>3,5</p></td>
                                        <td style={{textAlign: 'center'}}><p>Polar-embedded phase with extremely low bleed. Compatible with microbore</p></td>
                                        <td style={{textAlign: 'center'}}><p>&nbsp;Basic compounds in neutral to alkaline pH, MS applications</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                        <tr>
                                            <td align="center"><p>Alltima HP C8</p></td>
                                            <td style={{textAlign: 'center'}}><p>3,5</p></td>
                                            <td style={{textAlign: 'center'}}><p>Lower capacity compared to C18 phases</p></td>
                                            <td style={{textAlign: 'center'}}><p>Reversed-phase applications where C18 is too retentive</p></td>
                                            <td style={{textAlign: 'center'}}><p>L7</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Alltima HP Cyano</p></td>
                                            <td style={{textAlign: 'center'}}><p>3,5</p></td>
                                            <td style={{textAlign: 'center'}}><p>Extremely stable, long life and reproducible</p></td>
                                            <td style={{textAlign: 'center'}}><p>Ideal for basic drug analysis</p></td>
                                            <td style={{textAlign: 'center'}}><p>L10</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Alltima HP Silica</p></td>
                                            <td style={{textAlign: 'center'}}><p>3,5</p></td>
                                            <td style={{textAlign: 'center'}}><p>Highly polar phase</p></td>
                                            <td style={{textAlign: 'center'}}><p>General purpose normal phase applications</p></td>
                                            <td style={{textAlign: 'center'}}><p>L3</p></td>
                                        </tr>
                                        <tr>
                                            <td align="center"><p>Alltima HP HILIC</p></td>
                                            <td style={{textAlign: 'center'}}><p>1.5,3,5</p></td>
                                            <td style={{textAlign: 'center'}}><p>Hydrophilic interaction chromatography uses small amounts of water for increased sensitivity with microbore applications</p></td>
                                            <td style={{textAlign: 'center'}}><p>Very polar analytes that cannot be retained by reversed-phase</p></td>
                                            <td style={{textAlign: 'center'}}><p>L3</p></td>
                                        </tr>
                                        </tbody>
                                </table>
                        </div>
                        :
                        currentbrand === 'alttima'?
                        <div>
                            <ResourceHelper
                            page='ALTTIMA'
                            header='Alltima HPLC columns are high quality phases designed for general purpose applications.'
                            bulletpoints={['Base deactivated silica phases','Stable bonding for long column lifetime','Multiple selectivity options']}
                            />
                            <strong>Phase specifications:</strong><br />
                            <br />

                            <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                <tbody>
                                    <tr>
                                        <th bgcolor="#CCCCCC"><p>Alltima Phase</p></th>
                                        <th bgcolor="#CCCCCC"><p>Particle Size (um)</p></th>
                                        <th bgcolor="#CCCCCC"><p>Chromatographic Properties&nbsp;</p></th>
                                        <th bgcolor="#CCCCCC"><p>Application/Benefit&nbsp;</p></th>
                                        <th bgcolor="#CCCCCC"><p>&nbsp;USP Code</p></th>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima C18</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5, 10</p></td>
                                        <td><p style={{textAlign: 'center'}}>Classic reversed-phase retention and selectivity</p></td>
                                        <td><p style={{textAlign: 'center'}}>High quality hydrophobic general purpose C18</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima C18LL</p></td>
                                        <td style={{textAlign: 'center'}}><p>5</p></td>
                                        <td><p style={{textAlign: 'center'}}>Lower carbon load than traditional Alltima C18</p></td>
                                        <td><p style={{textAlign: 'center'}}>Reversed-phase applications that require a less hydrophobic C18 phase</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima C8</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5, 10</p></td>
                                        <td><p style={{textAlign: 'center'}}>Lower capacity compared to C18 phases</p></td>
                                        <td><p style={{textAlign: 'center'}}>Reversed-phase applications where C18 is too retentive</p></td>
                                        <td style={{textAlign: 'center'}}><p>L7</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima Phenyl</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td><p style={{textAlign: 'center'}}>Less hydrophobic than C18 phase</p></td>
                                        <td><p style={{textAlign: 'center'}}>Selective for aromatic compounds</p></td>
                                        <td style={{textAlign: 'center'}}><p>L11</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima Cyano</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td><p style={{textAlign: 'center'}}>General purpose cyano suitable for normal or reversed-phase use</p></td>
                                        <td><p style={{textAlign: 'center'}}>Rugged normal phase applications</p></td>
                                        <td style={{textAlign: 'center'}}><p>L10</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima Amino</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td><p style={{textAlign: 'center'}}>General purpose amino suitable for normal or reversed-phase use</p></td>
                                        <td><p style={{textAlign: 'center'}}>Use for carbohydrate analysis or as a weak anion exchanger</p></td>
                                        <td style={{textAlign: 'center'}}><p>L8</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Alltima Silica</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5, 10</p></td>
                                        <td><p style={{textAlign: 'center'}}>Highly polar phase</p></td>
                                        <td><p style={{textAlign: 'center'}}>General purpose normal phase applications</p></td>
                                        <td style={{textAlign: 'center'}}><p>L3</p></td>
                                    </tr>
                                </tbody>
                                </table>
                        </div>
                        :
                        currentbrand === 'genesis'? 
                        <div>
                            <ResourceHelper
                            page='GENESIS'
                            header='Genesis phases are based on high purity metal-free spherical silica. They are suitable for the analysis of a wide range of analytes.'
                            bulletpoints={['Good peak shape and reproducibility','Long column lifetime']}
                            />
                            <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                <tbody>
                                    <tr>
                                        <th width="98" bgcolor="#CCCCCC"><p>Phase</p></th>
                                        <th width="146" bgcolor="#CCCCCC"><p>Particle size (um)</p></th>
                                        <th width="82" bgcolor="#CCCCCC"><p>USP code</p></th>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Genesis C18</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 4, 7</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Genesis C8</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 4</p></td>
                                        <td style={{textAlign: 'center'}}><p>L7</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Genesis C8 e/c</p></td>
                                        <td style={{textAlign: 'center'}}><p>4</p></td>
                                        <td style={{textAlign: 'center'}}><p>L7</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Genesis AQ</p></td>
                                        <td style={{textAlign: 'center'}}><p>4</p></td>
                                        <td style={{textAlign: 'center'}}><p>-</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Genesis Phenyl</p></td>
                                        <td style={{textAlign: 'center'}}><p>4</p></td>
                                        <td style={{textAlign: 'center'}}><p>L11</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Genesis CN</p></td>
                                        <td style={{textAlign: 'center'}}><p>4</p></td>
                                        <td style={{textAlign: 'center'}}><p>L10</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Genesis NH2</p></td>
                                        <td style={{textAlign: 'center'}}><p>4</p></td>
                                        <td style={{textAlign: 'center'}}><p>L8</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Genesis Silica</p></td>
                                        <td style={{textAlign: 'center'}}><p>4</p></td>
                                        <td style={{textAlign: 'center'}}><p>L3</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        :
                        currentbrand === 'apollo'? 
                        <div>
                            <ResourceHelper
                            page='APOLLO'
                            header='Apollo HPLC columns use high purity, base deactivated silica for powerful separations at an economical price. They are ideal for routine analyses and for educational laboratories.'
                            bulletpoints={['Easy scale-up from analytical to prep','Extended pH stability – 1.5 to 10.5']}
                            />
                            <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                <tbody>
                                    <tr>
                                        <th width="121" bgcolor="#CCCCCC"><p>Phase</p></th>
                                        <th width="128" bgcolor="#CCCCCC"><p>Particle Size (um)</p></th>
                                        <th width="99" bgcolor="#CCCCCC"><p>USP Code</p></th>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apollo C18</p></td>
                                        <td style={{textAlign: 'center'}}><p>5</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apollo C8</p></td>
                                        <td style={{textAlign: 'center'}}><p>5</p></td>
                                        <td style={{textAlign: 'center'}}><p>L7</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apollo Phenyl</p></td>
                                        <td style={{textAlign: 'center'}}><p>5</p></td>
                                        <td style={{textAlign: 'center'}}><p>L11</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apollo Silica</p></td>
                                        <td style={{textAlign: 'center'}}><p>5</p></td>
                                        <td style={{textAlign: 'center'}}><p>L3</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        :
                        currentbrand === 'apex' ?
                        <div>
                            <ResourceHelper
                            page='APEX'
                            header='Apex and Apex ll phases are recommended for routine analyses.'
                            bulletpoints={['Conventional 100A pore size spherical silica','Narrow particle distribution','Controlled surface area']}
                            />
                            <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                <tbody>
                                    <tr>
                                        <th width="149" bgcolor="#CCCCCC"><p>Phase</p></th>
                                        <th width="151" bgcolor="#CCCCCC"><p>Particle Size (um)</p></th>
                                        <th width="115" bgcolor="#CCCCCC"><p>USP Code</p></th>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apex ODS</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5, 10</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apex ll ODS</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>L1</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apex Phenyl</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>L11</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apex Phenyl-RP</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>L11</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apex ll Amino</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5</p></td>
                                        <td style={{textAlign: 'center'}}><p>L8</p></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><p>Apex Silica</p></td>
                                        <td style={{textAlign: 'center'}}><p>3, 5, 10</p></td>
                                        <td style={{textAlign: 'center'}}><p>L3</p></td>
                                    </tr>
                                </tbody>
                                </table>
                        </div>
                        :
                        currentbrand === 'guard cartridge systems'?
                        <div>
                            <ResourceHelper
                            page='GUARD CARTRIDGE SYSTEMS'
                            header='The hardware of the Alltech All-Guard Cartridge System has been improved and all guard cartridges and holders are now supplied in this new hardware, leading to more robust and higher efficiency separations. Chromatographic selectivity will be unaffected by this change.'
                            bulletpoints={['Higher pressure rating','Low internal swept volume']}
                            />
                            <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                <tbody>
                                    <tr>
                                        <th width="171" bgcolor="#CCCCCC"><p>Part Number</p></th>
                                        <th width="609" bgcolor="#CCCCCC"><p>Description</p></th>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: 'center'}}><p>80101/N or 3112782/N</p></td>
                                        <td style={{textAlign: 'center'}}><p style={{textAlign: 'left'}}>All-Guard Cartridge Holder (for 2.1 - 4.6 mm id columns)</p></td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: 'center'}}><p>HI-081</p></td>
                                        <td style={{textAlign: 'center'}}><p style={{textAlign: 'left'}}>Column Coupler for All-Guard Cartridge Holder (standard column port)</p></td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: 'center'}}><p>HI-881</p></td>
                                        <td style={{textAlign: 'center'}}><p style={{textAlign: 'left'}}>Column Coupler for All-Guard Cartridge Holder ("Waters" type column port only)</p></td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: 'center'}}><p>HI-226</p></td>
                                        <td style={{textAlign: 'center'}}><p style={{textAlign: 'left'}}>Analytical Guard Holder Wrench Set - contains a pair of 9/16" stainless steel wrenches</p></td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign: 'center'}}><p>HI-050X</p></td>
                                        <td style={{textAlign: 'center'}}><p style={{textAlign: 'left'}}>Hichrom PEEK Fingertight Fittings (10/pack) - suitable for connection of HPLC columns and guard holders to all<br></br>1/16" tubing types, are compatible with both standard and Waters port designs, and are slip free to &gt;5000 psi</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        :
                        currentbrand === 'ion chromatography'?
                        <div>
                            <h1>Ion Chromatography (IC) / Organic Acid / Carbohydrate Columns</h1>
                            <Button>CONTACT US FOR PURCHASE INFO</Button>

                            <h2>Allsep Anion</h2>
                            <p>Allsep Anion is a methacrylate based phase with quaternary ammonium functional groups, optimised for use with both suppressed and non-suppressed conductivity detection. Columns are compatible with common IC mobile phases, such as carbonate, bicarbonate, p-hydroxybenzoic acid, phthalic acid, succinic acid and sodium octane sulfonate.</p>
                            <p>Allsep Anion is recommended for applications involving inorganic anions, weak and strong acid ions, metal complexes and organic acids. It meets the requirements for the EPA method 300.0 Part A for determining inorganic ions in water.</p>
                            <br />
                            <strong>The general features of Allsep Anion include:</strong>
                            <ul type="disc">
                            <li>7µm polymer based anion exchange phase</li>
                            <li>Suppressed or non-suppressed conductivity detection</li>
                            <li>pH range 2 - 10</li>
                            <li>Use with 0 - 100% organic modifier</li>
                            <li>USP L23</li>
                            </ul>

                            <h2>Hichrom Alltech Organic Acid</h2>
                            <p>Hichrom Alltech Organic Acid columns are ion exclusion columns packed with sulphonated polystyrene-divinylbenzene. The OA-1000 and OA-2000 columns exhibit excellent selectivity for aliphatic and aromatic acids. As with most ion exclusion columns, a column heater in necessary for normal operating procedures. <br />
                            The IOA-1000 and IOA-2000 columns are suitable for the separation of citric and other acids from glucose and fructose.</p>
                            <ul>
                            <li>Rapid analysis of organic acids and alcohols</li>
                            <li>pH stable polymer resin</li>
                            <li>Isocratic 100% aqueous mobile phases only, no organic solvents</li>
                            <li>USP L17</li>
                            </ul>
                            <p><strong>Phase specifications:</strong></p>
                            
                            <table cellPadding="2" cellSpacing="0" className="lined" border="0" style={{border: '1px solid #333'}}>
                                <tbody>
                                    <tr>
                                        <th bgcolor="#CCCCCC"><strong>Organic Acid Phase</strong></th>
                                        <th bgcolor="#CCCCCC"><strong>Particle Size (&mu;m)</strong></th>
                                        <th bgcolor="#CCCCCC"><strong>Column Dimensions</strong></th>
                                        <th bgcolor="#CCCCCC"><strong>Applications</strong></th>
                                    </tr>
                                    <tr>
                                        <td align="center" style={{textAlign: 'left'}}>OA-1000</td>
                                        <td style={{textAlign: 'center'}}>9<br></br></td>
                                        <td style={{textAlign: 'center'}}>300 x 6.5mm</td>
                                        <td style={{textAlign: 'center'}}>Inorganic ions, such as fluoride, arsenate, sulphite, alcohols and most organic acids</td>
                                    </tr>
                                    <tr>
                                        <td align="center" style={{textAlign: 'left'}}>OA-2000</td>
                                        <td style={{textAlign: 'center'}}>6.5<br></br></td>
                                        <td style={{textAlign: 'center'}}>100 x 6.5mm</td>
                                        <td style={{textAlign: 'center'}}>Organic acids with low pH values, low MW straight chain acids and aromatic acids</td>
                                    </tr>
                                    <tr>
                                        <td align="center" style={{textAlign: 'left'}}>IOA-1000</td>
                                        <td style={{textAlign: 'center'}}>9<br></br></td>
                                        <td style={{textAlign: 'center'}}>300 x 7.8mm</td>
                                        <td style={{textAlign: 'center'}}>Acids of the tricarboxylic acid cycle (Krebs cycle)</td>
                                    </tr>
                                        <tr>
                                    <td align="center" style={{textAlign: 'left'}}>IOA-2000</td>
                                    <td style={{textAlign: 'center'}}>8<br></br></td>
                                    <td style={{textAlign: 'center'}}>150 x 6.5mm</td>
                                    <td style={{textAlign: 'center'}}>Fast separation of acids and some alcohols</td>
                                </tr>
                                </tbody>
                                </table>

                                <h2>Hichrom Alltech Anion Exclusion</h2>
                                <p>Hichrom Alltech Anion Exclusion columns are based on a highly sulphonated polystyrene-divinylbenzene cation-exchange resin. The phase has a particle size of 10μm and is designed for the separation of organic acids and weakly ionised anions by an anion exclusion mechanism. Typical mobile phases contain dilute mineral acids. Acetonitrile (&lt;10%) may be added as organic modifier to decrease the retention of hydrophobic compounds.<br />
                                Separates organic acids and weak acid anions</p>
                                <ul>
                                <li>Polymer-based for broad pH stability</li>
                                <li>USP L22</li>
                                <li>Stainless steel columns are available with dimensions of 300 x 7.8mm and 100 x 7.8mm.</li>
                                </ul>
                                <h2>Hichrom Alltech Carbohydrate Cation</h2>
                                <p>The Hichrom Alltech Carbohydrate Cation column consists of a highly efficient sulphonated polystyrene resin supplied in the calcium form. This column provides excellent separations using only water as the mobile phase.</p>
                                <ul>
                                <li>Sulphonated polystyrene resin in the calcium form</li>
                                <li>100% water used as mobile phase</li>
                                <li>Column heating required</li>
                                <li>USP L19</li>
                                </ul>
                                <p>Analytical columns are available in dimensions 300 x 6.5mm.</p>
                        </div>
                        :
                        currentbrand === 'partisil'?
                        <div className='brand-content-ex'>
                            <div className='img-wrapper'>
                                {/* <Image src='https://macmod.s3.us-east-2.amazonaws.com/images/brands/products-header-partisil.png' /> */}
                            </div>
                            <div className="properties-content-wrapper">
                                <p>Partisil is a high-purity irregular silica gel available in both 5µm and 10µm particle sizes with a pore size of 80Å. The choice of column packing includes Silica, C-18 polymeric phases (ODS-3,ODS-2) and C-8. Also available are SAX, SCX, and PAC. These columns provide reproducible results, column to column, lot to lot.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>Normal Phase (Adsorption) Media</h4>
                                <p>Partisil Silica (5 and 10µm) Pure silica stationary phase for adsorption chromatography. Partisil 10 is used particularly for routine separations for higher flow rates and lower back pressures. Partisil 5 is used particularly for higher resolution and fast analysis. These are the supports on which the Partisil bonded phases are based.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>Ion Exchange Media</h4>
                                <p>Partisil SAX (5 and 10µm) A strong anion exchanger based on quaternary ammonium groups (-NR+3 ). Supplied in the H2PO4 form in methanol, Partisil 10 SAX has been widely reported in literature and is best known for the separation of nucleotides. Stable over pH range 1.5-7.5 when used in conjunction with a Solvecon mobile phase conditioning column. Obtains the highest anion exchange efficiencies and resolution. Applicable to separations of nucleic acids, organic acids and inorganic anions.</p>
                                <p>Partisil SCX (5 and 10µm) Based on aromatic benzene sulfonic acid groups. Supplied in the ammonium form. Excellent for separation of nucleosides, amino acids, polyamines, drugs and other cationic species. Capable of being loaded with specific metallic cations for use in ligand exchange chromatography. Stable over pH range 1.5-7.0 when used in conjunction with a Solvecon mobile phase conditioning-column. Exceptionally stable Si-O-Si-C bond, both thermally and chemically.</p>
                                <h4 className="heading-h4" style={{color: '#c80c47',fontWeight: '600',fontSize: '1.8rem'}}>Reverse Phase Media</h4>
                                <p>Partisil ODS (10µm) A C-18 phase with a 5% carbon load for both normal adsorption and reversed phase partitioning. Dual-mode operation for added selectivity with 50% residual silanols. Lightly loaded C-18 packing is particularly effective for compounds having greater water solubility when used in the reversed phase mode. Creates a moderately polar surface, different from that of pure silica, in normal phase mode.</p>
                                <p>Partisil ODS-2 (10µm) The high carbon load (16%) of this polymeric phase makes it the most nonpolar and, therefore, the most retentive of the reversed phases. An alternative to end-capped C-18 where different elution order is desirable for optimum separation. High sample load capacity and 10 µm particle size are very suitable for preparative work.</p>
                                <p>Partisil ODS-3 (5 and 10µm) A C-18 polymeric phase with a 10.5% carbon load. Medium of choice for improved speed, efficiency and resolution in applications requiring C-18 phases. End-capped for deactivation of silanols to minimize the need for ion suppression or ion pairing agents. Used in a wide range of applications with optimal selectivity, including pharmaceuticals, natural products, food, biological and environmental pollutants.</p>
                                <p>Partisil C8 1(5 and 10µm) An end-capped C-8 monomeric phase with at least 8.5% carbon load. Provides high efficiency and rapid mass transfer while maintaining excellent peak shape and stability over a range of aqueous mobile phase compositions. Recommended for ion pair chromatography.</p>
                                <p>Partisil PAC (5 and 10µm) A polar amino cyano bonded phase with secondary amine groups for good thermal and chemical stability. Selectivity and rapid equilibrium allow a range of separation mechanisms to be used, including adsorption, reversed phase and weak anion exchange. Extremely fast equilibration across the entire range of solvents from heptane to water. The media of choice for carbohydrate separations.</p>
                                <p>Care and Use Sheets Available on Request (email <a href="mailto:hplc@mac-mod.com">hplc@mac-mod.com</a>)</p>
                            </div>
                        </div>
                        :
                        currentbrand === 'hydrobond'?
                        <div className='brand-content-ex'>
                            <div className='img-wrapper'>
                                {/* <Image src='https://macmod.s3.us-east-2.amazonaws.com/images/brands/products-header-hydrobond.png'/> */}
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
                        <BulletsResource resource={brandbullets} />
                    }
                    {
                    currentbrand === 'ace excel uhplc guard columns' | 'ace ultracore solid-core guard columns' | 'Halo fused-core guard columns' ?
                        console.log(currentbrand)
                    :
                    <Table>
                        <thead>
                            <tr>
                                {
                                    th[0] ? (
                                        th[0].map((a,key) =>{
                                            if(a === 'Phase Design') {
                                                return null
                                            }
                                            return <th key={key}>{a}</th>
                                        })
                                    ) :
                                    null
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                brandContent.map((content,i) => {
                                    return (
                                    <tr key={i}>
                                        {Object.values(content).map((a,key) =>{
                                            if(a !== null){
                                                if (a.toString().includes('ACE')){
                                                    return null
                                                }
                                            }
                                            if(a === 'Click Here') {
                                                return <td key={key}><a href="#">{a}</a></td>
                                            }
                                            if(a === 'Buy Now'){
                                                return <td key={key} onClick={(e)=> this.clickedBuyNow(e,brandContent[i])}><a href="#">{a}</a></td>
                                            }
                                            if(a === 'Show' && imageUrls.length !==0 ){
                                                return <td key={key}><ToolTipResource image={imageUrls[i]}/></td>
                                            }
                                            else {
                                                return <td key={key} data={'testing'}><a href="#" onClick={(e)=> this.pushToPhasePage(e,a,content['Phase Number'])}>{a}</a></td>
                                            }
                                        })}
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    }
                </div>
           </div>
        )
    }
}

function mapStateToProps(state){
    // this logic can be changed later
    const { productpageimage } = state.brands
    const {navbarLinks} = state.headerNavbar
    const {brandcontent,brandbullets,phaseimage } = state.brands
    return { navbarLinks,brandcontent,brandbullets,phaseimage,productpageimage }
}

BrandContentPage = connect(mapStateToProps,actions)(BrandContentPage)

export default BrandContentPage;