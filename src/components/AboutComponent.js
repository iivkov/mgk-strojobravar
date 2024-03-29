import React, {useState, useEffect } from 'react';
import EUnoteSite from './EUnoteSite';
import '../App.css';
import slika from '../assets/Hidraulicne skare.png';

const AboutComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
        <div className="main_content">
            <EUnoteSite/>
            <h1>O nama</h1>
            <div className="container">
                <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                    <p>Naša glavna djelatnost je proizvodnja metalnih konstrukcija i njihovih dijelova, uključujući ventile, ležajeve i prijenosnike. 
                        Također, bavimo se proizvodnjom rashladne i ventilacijske opreme, uređaja za dizanje i prenošenje, crpki i kompresora, peći i plamenika 
                        te općenito raznih motora i turbina. S obzirom da od svojih početaka težimo sveobuhvatnosti, tijekom puno godina rada smo razvili i usavršili
                        proizvodnju i montažu vrata i prozora od PVC-a i metala.
                    </p>
                </div>
            {/* <div className="spacer"></div> */}
                <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                    <img src={slika} alt="Slika hidrauličnih škara." style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;