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
import dseis from '../../assets/camaras/AMVD-01.png';
import dsiete from '../../assets/camaras/ANAFABI.png';
import docho from '../../assets/camaras/ANAFAM.png';
import dnueve from '../../assets/camaras/ANAFAPYT.png';
import veinte from '../../assets/camaras/ANAFATA-01.png';
import vuno from '../../assets/camaras/ANAINSE-01.png';
import vdos from '../../assets/camaras/ANFAD.png';
import vtres from '../../assets/camaras/ANFHER.png';
import vcuatro from '../../assets/camaras/ANIPAC.png';
import vcinco from '../../assets/camaras/ANIPRON-01.png';
import vseis from '../../assets/camaras/ANIQ.png';
import vsiete from '../../assets/camaras/ANPACT-01.png';
import vocho from '../../assets/camaras/ANPRAC.png';
import vnueve from '../../assets/camaras/ANTP.png';
import treinta from '../../assets/camaras/APIMEX.png';
import tuno from '../../assets/camaras/ASCHOCO-01.png';
import tdos from '../../assets/camaras/ASEVAL-01.png';
import ttres from '../../assets/camaras/CAAAREM.png';
import tcuatro from '../../assets/camaras/CAINTRA.png';
import tcinco from '../../assets/camaras/CAMARENA-01.png';
import tseis from '../../assets/camaras/CAMEINTRAM.png';
import tsiete from '../../assets/camaras/CAMIEF.jpg';
import tocho from '../../assets/camaras/CAMIMEX.png';
import tnueve from '../../assets/camaras/CANACAR.png';
import cuarenta from '../../assets/camaras/CANACEM-01.png';
import cuno from '../../assets/camaras/CANACERO.png';
import cdos from '../../assets/camaras/CANACINE.png';
import ctres from '../../assets/camaras/CANACINTRA-01.png';
import ccuatro from '../../assets/camaras/CANADEVI-01.png';
import ccinco from '../../assets/camaras/CANAERO.jpg';
import cseis from '../../assets/camaras/CANAFEM.png';
import csiete from '../../assets/camaras/CANAGRAF-01.png';
import cocho from '../../assets/camaras/CANAIBAL.png';
import cnueve from '../../assets/camaras/CANAICAL.png';
import cincuenta from '../../assets/camaras/CANAINCA.png';
import ccuno from '../../assets/camaras/CANAINPA.png';
import ccdos from '../../assets/camaras/CANAINTEX.png';
import cctres from '../../assets/camaras/CANAIPESCA.png';
import cccuatro from '../../assets/camaras/CANAIVE-01.png';
import cccinco from '../../assets/camaras/CANAJAD-01.png';
import ccseis from '../../assets/camaras/CANALAVA.png';
import ccsiete from '../../assets/camaras/CANALCUR.png';
import ccocho from '../../assets/camaras/CANALUM .png';
import ccnueve from '../../assets/camaras/CANAME-01.png';
import sesenta from '../../assets/camaras/CANAMI.png';
import suno from '../../assets/camaras/CANAPAT.png';
import sdos from '../../assets/camaras/CANIAG.png';
import stres from '../../assets/camaras/CANIEM.png';
import scuatro from '../../assets/camaras/CANIETI.png';
import scinco from '../../assets/camaras/CANIFARMA.png';
import sseis from '../../assets/camaras/CANILEC.png';
import ssiete from '../../assets/camaras/CANIMOLT-01.png';
import socho from '../../assets/camaras/CANIPEC.png';
import snueve from '../../assets/camaras/CANIRAC.png';
import sdiez from '../../assets/camaras/CANITEC-01.png';
import setenta from '../../assets/camaras/CAPRO-01.png';
import ssuno from '../../assets/camaras/CAREINTRA.png';
import ssdos from '../../assets/camaras/CARIT-01.png';
import sstres from '../../assets/camaras/CCIJ.png';
import sscuatro from '../../assets/camaras/CERVECEROS.jpg';
import sscinco from '../../assets/camaras/CIAJ.png';
import ssseis from '../../assets/camaras/CICEG.png';
import sssiete from '../../assets/camaras/CICEJ-01.png';
import ssocho from '../../assets/camaras/CICUR.png';
import ssnueve from '../../assets/camaras/CIHUL-01.png';
import ochenta from '../../assets/camaras/CIMEG-01.png';
import ouno from '../../assets/camaras/CIMEJAL.png';
import odos from '../../assets/camaras/CIRT-01.png';
import otres from '../../assets/camaras/CITEX.png';
import ocuatro from '../../assets/camaras/CMIC.png';
import ocinco from '../../assets/camaras/CNEC-01.png';
import oseis from '../../assets/camaras/CNIAA-01.png';
import osiete from '../../assets/camaras/CNICER-01.png';
import oocho from '../../assets/camaras/CNICP.png';
import onueve from '../../assets/camaras/CNIT.png';
import noventa from '../../assets/camaras/COALICION.png';
import nuno from '../../assets/camaras/COMECARNE.png';
import ndos from '../../assets/camaras/COMENOR-01.png';
import ntres from '../../assets/camaras/CONCAINGRO.png';
import ncuatro from '../../assets/camaras/COURIER.jpg';
import ncinco from '../../assets/camaras/CRIJPEJ.png';
import nseis from '../../assets/camaras/CTEXO-01.png';
import nsiete from '../../assets/camaras/CURTIDURÍA.png';
import nocho from '../../assets/camaras/IMEDAL.png';
import nnueve from '../../assets/camaras/IMFI.png';
import cien from '../../assets/camaras/INA.png';
import cienuno from '../../assets/camaras/INDEX .jpg';
import ciendos from '../../assets/camaras/ONEXPO.png';
import cientres from '../../assets/camaras/UILMAC.png';



class Members extends React.Component {
    render() {

            const options = {
                items: 1,
                rewind: true,
                autoplay: true,
                loop: true
            };

        return (

            <div className="beneficios">
                <h2>Miembros</h2>
                <div className="box_members">
                    <OwlCarousel ref="car" options={options} style={{heigth:"300px", backgroundColor:"rgba(37, 39, 41, .05)"}} >
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
                            <img src={quince} alt="The Last of us"/>
                            <img src={dseis} alt="The Last of us"/>
                            <img src={dsiete} alt="The Last of us"/>
                            <img src={docho} alt="The Last of us"/>
                            <img src={dnueve} alt="The Last of us"/>
                            <img src={veinte} alt="The Last of us"/>
                            <img src={vuno} alt="The Last of us"/>

                        </div>
                        <div className="item">
                            <img src={vdos} alt="The Last of us"/>
                            <img src={vtres} alt="The Last of us"/>
                            <img src={vcuatro} alt="The Last of us"/>
                            <img src={vcinco} alt="The Last of us"/>
                            <img  src={vseis} alt="The Last of us"/>
                            <img src={vsiete} alt="The Last of us"/>
                            <img src={vocho} alt="The Last of us"/>
                            <img src={vnueve} alt="The Last of us"/>
                            <img src={treinta} alt="The Last of us"/>
                            <img src={tuno} alt="The Last of us"/>
                            <img src={tdos} alt="The Last of us"/>
                            <img src={ttres} alt="The Last of us"/>
                            <img src={tcuatro} alt="The Last of us"/>
                            <img src={tcinco} alt="The Last of us"/>
                            <img src={tseis} alt="The Last of us"/>
                            <img src={tsiete} alt="The Last of us"/>
                            <img src={tocho} alt="The Last of us"/>
                            <img src={tnueve} alt="The Last of us"/>
                            <img src={cuarenta} alt="The Last of us"/>
                            <img src={cuno} alt="The Last of us"/>
                            <img src={cdos} alt="The Last of us"/>
                        </div>
                        <div className="item">
                            <img src={ctres} alt="The Last of us"/>
                            <img src={ccuatro} alt="The Last of us"/>
                            <img src={ccinco} alt="The Last of us"/>
                            <img src={cseis} alt="The Last of us"/>
                            <img  src={csiete} alt="The Last of us"/>
                            <img src={cocho} alt="The Last of us"/>
                            <img src={cnueve} alt="The Last of us"/>
                            <img src={cincuenta} alt="The Last of us"/>
                            <img src={ccuno} alt="The Last of us"/>
                            <img src={ccdos} alt="The Last of us"/>
                            <img src={cctres} alt="The Last of us"/>
                            <img src={cccuatro} alt="The Last of us"/>
                            <img src={cccinco} alt="The Last of us"/>
                            <img src={ccseis} alt="The Last of us"/>
                            <img src={ccsiete} alt="The Last of us"/>
                            <img src={ccocho} alt="The Last of us"/>
                            <img src={ccnueve} alt="The Last of us"/>
                            <img src={sesenta} alt="The Last of us"/>
                            <img src={suno} alt="The Last of us"/>
                            <img src={sdos} alt="The Last of us"/>
                            <img src={stres} alt="The Last of us"/>
                        </div>
                        <div className="item">
                            <img src={scuatro} alt="The Last of us"/>
                            <img src={scinco} alt="The Last of us"/>
                            <img src={sseis} alt="The Last of us"/>
                            <img src={ssiete} alt="The Last of us"/>
                            <img  src={socho} alt="The Last of us"/>
                            <img src={snueve} alt="The Last of us"/>
                            <img src={sdiez} alt="The Last of us"/>
                            <img src={sesenta} alt="The Last of us"/>
                            <img src={ssuno} alt="The Last of us"/>
                            <img src={ssdos} alt="The Last of us"/>
                            <img src={sstres} alt="The Last of us"/>
                            <img src={sscuatro} alt="The Last of us"/>
                            <img src={sscinco} alt="The Last of us"/>
                            <img src={ssseis} alt="The Last of us"/>
                            <img src={sssiete} alt="The Last of us"/>
                            <img src={ssocho} alt="The Last of us"/>
                            <img src={ssnueve} alt="The Last of us"/>
                            <img src={ochenta} alt="The Last of us"/>
                            <img src={ouno} alt="The Last of us"/>
                            <img src={odos} alt="The Last of us"/>
                            <img src={otres} alt="The Last of us"/>
                        </div>
                        <div className="item">
                            <img src={ocuatro} alt="The Last of us"/>
                            <img src={ocinco} alt="The Last of us"/>
                            <img src={oseis} alt="The Last of us"/>
                            <img src={osiete} alt="The Last of us"/>
                            <img  src={oocho} alt="The Last of us"/>
                            <img src={onueve} alt="The Last of us"/>
                            <img src={noventa} alt="The Last of us"/>
                            <img src={nuno} alt="The Last of us"/>
                            <img src={ndos} alt="The Last of us"/>
                            <img src={ntres} alt="The Last of us"/>
                            <img src={ncuatro} alt="The Last of us"/>
                            <img src={ncinco} alt="The Last of us"/>
                            <img src={nseis} alt="The Last of us"/>
                            <img src={nsiete} alt="The Last of us"/>
                            <img src={nocho} alt="The Last of us"/>
                            <img src={nnueve} alt="The Last of us"/>
                            <img src={cien} alt="The Last of us"/>
                            <img src={cienuno} alt="The Last of us"/>
                            <img src={ciendos} alt="The Last of us"/>
                            <img src={cientres} alt="The Last of us"/>
                         </div>
                    </OwlCarousel>
                </div>

            </div>
        )
    }
}
export default Members;