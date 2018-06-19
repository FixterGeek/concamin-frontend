import React from 'react';
import './Home.css';
import logo from '../../assets/aniver.png';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'; //Allows for server-side rendering.
import uno from '../../assets/camaras/AFGD.png';
import dos from '../../assets/camaras/AIEM-01.png';
import tres from '../../assets/camaras/AIEMAC LOGO.png';
import cuatro from '../../assets/camaras/AIEVAC-01.png';
import cinco from '../../assets/camaras/AMANAC.png';
import seis from '../../assets/camaras/AMAP-01.png';
import siete from '../../assets/camaras/AMCI.png';
import ocho from '../../assets/camaras/AMEEC.PNG';
import nueve from '../../assets/camaras/AMF.png'
import diez from '../../assets/camaras/AMIA.png';
import once from '../../assets/camaras/AMIIF.png';
import doce from '../../assets/camaras/AMIJU-01.png';
import trece from '../../assets/camaras/AMMPAC-01.png'
import catorce from '../../assets/camaras/AMPPI-01.png';
import quince from '../../assets/camaras/AMPROFON.png';



class Members extends React.Component {
    render() {

            const options = {
                items: 1,
                nav: true,
                rewind: true,
                autoplay: true
            };

        return (

            <div className="beneficios">
                <h2>Miembros</h2>
                <div style={{width:"80%", margin:"0 auto", backgroundColor:"rgba(37, 39, 41, .05)", heigth:"400px"}}>
                    <OwlCarousel ref="car" options={options} style={{heigth:"300px"}} >
                        <div className="item">
                            <img src={uno} alt="The Last of us"/>
                            <img src={dos} alt="The Last of us"/>
                            <img style={{maxHeigth:"60px !important"}} src={tres} alt="The Last of us"/>
                            <img src={cuatro} alt="The Last of us"/>
                            <img  src={cinco} alt="The Last of us"/>
                            <img src={seis} alt="The Last of us"/>
                            <img src={siete} alt="The Last of us"/>
                            <img src={ocho} alt="The Last of us"/>
                            <img src={nueve} alt="The Last of us"/>
                            <img src={diez} alt="The Last of us"/>
                            <img src={once} alt="The Last of us"/>
                            <img src={doce} alt="The Last of us"/>
                            <img src={trece} alt="The Last of us"/>
                            <img src={catorce} alt="The Last of us"/>

                        </div>
                        <div className="item"><img src="https://images.pexels.com/photos/847484/pexels-photo-847484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="GTA V"/></div>
                        <div className="item"><img src="https://images.pexels.com/photos/847484/pexels-photo-847484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Mirror Edge"/></div>
                    </OwlCarousel>
                </div>

            </div>
        )
    }
}
export default Members;