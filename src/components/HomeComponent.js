import React, { useState, useEffect } from 'react';
import '../App.css';
import EUnoteSite from './EUnoteSite';
import slika from '../assets/HyperCUT CNC (2).png';

const HomeComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <EUnoteSite/>
        <h1>Dobrodošli!</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <img src={slika} alt="Slika građevinskih radova." style={{ width: '100%', height: 'auto' }} />
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>MGK STROJOBRAVAR obiteljski je obrt osnovan 1996. godine i od tada uspješno razvija proizvodnju i montažu širokog asortimana 
                    proizvoda od metalnih konstrukcija. Glavno načelo kojim se vodimo u poslovanju je zadovoljstvo svih naših klijenata i zbog toga 
                    svakom projektu pristupamo s puno entuzijazma. Iskustvo, sustavnost i stručnost tijekom svake izvedbe osiguravaju kvalitetu svakog 
                    našeg krajnjeg proizvoda. Sa zadovoljstvom očekujemo Vaš poziv! </p>
            </div>
        </div>
    </div>
    );
}

export default HomeComponent;