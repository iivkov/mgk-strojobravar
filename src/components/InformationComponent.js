import React, { useState, useEffect } from 'react';
import EUnoteSite from './EUnoteSite';
import '../App.css';

const InformationComponent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
    <div className="main_content">
        <EUnoteSite/>
        <h1>Osnovni podatci</h1>
        <div className="container">
            <div className={`box left ${animate ? 'enter' : 'left-enter'}`}>
                <p>MGK STROJOBRAVAR, obrt za proizvodnju i montažu</p>
                <p>Trnjanska cesta 89</p>
                <p>HR-10000 Zagreb</p>
                <p>Hrvatska</p>
                <br />
                <p>Mobitel: +385 (0)98 457 464</p>
                <p>E-pošta: mgk.strojobravar@gmail.com</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className={`box right ${animate ? 'enter' : 'right-enter'}`}>
                <p>Ključna osoba: Stipan Skočibušić</p>
                <p>Godina osnutka: 1996.</p>
                <p>MBO: 90826361</p>
                <p>OIB: 98859618479</p>
                <br />
                <p>Podružnica Kuče: Sv. Fabijana 54, 10410 Velika Gorica</p>
                <p>Podružnica Petrinja: Vinogradska 15, 44250 Petrinja</p>
            </div>
        </div>
    </div>
    );
}

export default InformationComponent;