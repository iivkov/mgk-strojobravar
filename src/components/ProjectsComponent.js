import React from 'react';
import '../App.css';
import Petrinja from '../assets/Petrinja.jpg';
import EUnoteProject from './EUnoteProject';

const ProjectsComponent = () => {
    
    return (
    <div className="main_content">
        <h1>NOVI RAZVOJ U PETRINJI MGK STROJOBRAVAR OBRT</h1>
        <h2>Kod projekta: KK.08.2.1.16.0090</h2>
        <h2>Naziv poziva: Podrška razvoju poduzetništva u gradu Petrinji</h2>
        <div className="container">
            <img src={Petrinja} alt="Slika Petrinje." style={{ width: '100%', height: 'auto' }} />
            <p>Kroz projekt planira se nabava novih roba, kombinirane škare i probijačica, škare hidraulične, apkant preša te CNC plazma rezač. 
                Ostvarivanjem te nabave Prijavitelj će povećati svoje kapacitete za pružanje usluga, očuvat će se postojeća radna mjesta, otvorit će se nova radna mjesta, 
                povećat će se prihod Prijavitelja, konkurentnost na postojećem i novom mikro i makro tržištu. Djelatnici Prijavitelja će steći nova znanja povezana s korištenjem novih roba koje se nabavljaju.</p>
            <div className="box">
                <h3>Informacije o troškovima</h3>
                <p>Ukupni prihvatljivi troškovi (EUR): 210.554,78</p>
                <p>Ukupna bespovratna sredstva (EUR): 178.971,56</p>
            </div>
            {/* <div className="spacer"></div> */}
            <div className="box">
                <h3>Vrijeme provedbe</h3>
                <p>Početak provedbe: NN.NN.NNNN.</p>
                <p>Kraj provedbe: NN.NN.NN.</p>
                <p>Trajanje provedbe (mjeseci): NN</p>
            </div>
        </div>
        <EUnoteProject />
    </div>
    );
}

export default ProjectsComponent;