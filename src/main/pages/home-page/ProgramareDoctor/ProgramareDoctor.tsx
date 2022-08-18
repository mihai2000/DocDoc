import React from 'react';
import './ProgramareDoctor.css';
import iconline from '../../../../assets/iconline.png';
import icontriangle from '../../../../assets/icontriangle.png';
import iconarrowright2 from '../../../../assets/iconarrowright2.png';

export default function ProgramareDoctor(){
    const show = () =>
    {
        const hidden = document.querySelectorAll('.d-none');
        hidden.forEach(hidden => {
            hidden.classList.remove('d-none');
        });
        // @ts-ignore
        document.getElementById("hide").classList.add('d-none');
    }

    return(
    <section>
        <div className="program-medic1 container">
            <div className="row container">
                <h1>Programare la doctor</h1>
                <div className="figure">
                    <img className="line1" src={iconline} alt="line"/>
                    <img className="triangle" src={icontriangle} alt="triangle"/>
                    <img className="line2" src={iconline} alt="line"/>
                </div>
            </div>
        </div>
        <div className="program-medic2" id="doctors-list">
            <div className="container">
                <div id="" className="row program-medic2">
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <ul>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/acupunctura">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Acupunctor</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/alergologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Alergolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/andrologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Androlog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/cardiologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Cardiolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/chirurgie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Chirurg</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/chirurgie-estetica">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Chirurg estetician</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/chirurgie-plastica">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Chirurg plastician</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/cosmetologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Cosmetolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/dermatologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Dermatolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/nutritie-si-dietica">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Dietolog, Nutriționist</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/diagnostic-cu-ultrasunet">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Ecografist</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/endocrinologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Endocrinolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/endoscopie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Endoscopist</h1>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <ul>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/medicina-alternativa">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Fitoterapeut</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/fizioterapie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Fizioterapeut</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/flebologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Flebolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/gastroenterologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Gastroenterolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/ginecologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Ginecolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/hematologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Hematolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/hepatologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Hepatolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/imagist">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Imagist</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/boli-infectioase-tropicale-si-parazitologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Infecționist</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/medicina-interna">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Internist</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/kinetoterapie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Kinetoterapeut</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/mamologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Mamolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/medic-de-familie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Medic de familie</h1>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <ul>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/nefrologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Nefrolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/neurochirurg">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Neurochirurg</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/neurologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Neurolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/obstetrica">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Obstetrician-ginecolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/oftalmologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Oftalmolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/oncologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Oncolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/ortopedie-si-traumatologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Ortoped-traumatolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/otorinolaringologie-orl">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Otorinolaringolog (ORL)</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/pediatrie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Pediatru</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/pneumologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Pneumolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/proctologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Proctolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/psihiatrie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Psihiatru</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/psihologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Psiholog</h1>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <ul>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/psihoterapie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Psihoterapeut</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/reabilitolog">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Reabilitolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/reflexologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Reflexoterapeut</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/reproducere-umana">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Reproductolog (FIV)</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/reumatologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Reumatolog</h1>
                                </a>
                            </li>
                            <li className="">
                                <a href="http://www.docdoc.md/ro/doctors/sexologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Sexolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/masaj">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Specialist în masaj</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/stomatologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Stomatolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/terapie-manuala">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Terapeut manual</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none">
                                <a href="http://www.docdoc.md/ro/doctors/trihologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Triholog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/urologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Urolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/venerologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Venerolog</h1>
                                </a>
                            </li>
                            <li  className="hidden-item d-none ">
                                <a href="http://www.docdoc.md/ro/doctors/vertebrologie">
                                    <div className="program-medic2__icon"></div>
                                    <h1>Vertebrolog</h1>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="row program-medic3" id="hide">
            <div className="container">
                <a onClick={show} id="js-open-doctors-list" href="#doctors-list">
                    <h1>Vezi toate specialitățile</h1>
                    <img src={iconarrowright2} alt="iconarrowright2"/>
                </a>
            </div>
        </div>
    </section>
    );
}