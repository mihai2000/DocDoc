import React from "react";
import backgroundimg from '../../../../assets/docdoc-fundal.jpg';
import iconfiind from '../../../../assets/iconfiind.png';
import iconvisits from '../../../../assets/iconvisits.png';
import iconprograms from '../../../../assets/iconprograms.png';
import icondocregister from '../../../../assets/icondocregister.png';
import iconcoment from '../../../../assets/iconcoment.png';
import $ from 'jquery';
import './SearchComponent.css';
import {withNamespaces} from "react-i18next";
import '../../../../i18next/i18n';
//@ts-ignore
function SearchComponent({t}) {
    function selectSearchType() {
        // @ts-ignore
        let x = document.getElementById("Type").value;
        switch (x) {
            case 'doctor': {
                $('#Special').toggleClass('Active');
                $('#SpecialService').toggleClass('Active');
                break;
            }
            case 'service': {
                $('#Special').toggleClass('Active');
                $('#SpecialService').toggleClass('Active');
                break;
            }
        }
    }

    // function searchButton() {
    //     // @ts-ignore
    //     let x = document.getElementById("Type").value;
    //     switch (x) {
    //         case 'doctor':
    //         {
    //             let URL = $('#Special').data('action') + $('#Special').val() + '/Location/' + $('#Location').val();
    //             console.log(' ' + $('#Special').data('action'));
    //             location.href = URL;
    //             break;
    //         }
    //         case 'service':
    //         {
    //
    //             let URL = $('#SpecialService').data('action') + $('#SpecialService').val() + '/Location/' + $('#Location').val();
    //
    //             location.href = URL;
    //             break;
    //         }
    //     }
    // }
    return (
        <section className="search" style={{backgroundImage: `url(${backgroundimg})`}}>
            <div className="container">
                <div className="row search">
                    <h1>{t('SearchBar.SearchTitle')}</h1>
                    <div className="search__sub-title-span">
                        <h2 dangerouslySetInnerHTML={{__html:t('SearchBar.SearchSubTitle')}}></h2>
                    </div>
                    <div className="group-1">
                        <select id="Type" onChange={selectSearchType}>
                            <option value='doctor' className="Level">{t('SearchBar.SearchDropBox.Doctor')}</option>
                            <option value='service' className="Level">{t('SearchBar.SearchDropBox.Servicii')}</option>
                        </select>
                        <select id="Special">
                            <option value="acupunctura" className="Level">{t('SearchBar.SearchDropBox.DoctorList')}</option>
                            <option value="alergologie" className="Level">Alergolog</option>
                            <option value="andrologie" className="Level">Androlog</option>
                            <option value="cardiologie" className="Level">Cardiolog</option>
                            <option value="chirurgie" className="Level">Chirurg</option>
                            <option value="chirurgie-estetica" className="Level">Chirurg estetician</option>
                            <option value="chirurgie-plastica" className="Level">Chirurg plastician</option>
                            <option value="cosmetologie" className="Level">Cosmetolog</option>
                            <option value="dermatologie" className="Level">Dermatolog</option>
                            <option value="nutritie-si-dietica" className="Level">Dietolog, Nutri??ionist</option>
                            <option value="diagnostic-cu-ultrasunet" className="Level">Ecografist</option>
                            <option value="endocrinologie" className="Level">Endocrinolog</option>
                            <option value="endoscopie" className="Level">Endoscopist</option>
                            <option value="medicina-alternativa" className="Level">Fitoterapeut</option>
                            <option value="fizioterapie" className="Level">Fizioterapeut</option>
                            <option value="flebologie" className="Level">Flebolog</option>
                            <option value="gastroenterologie" className="Level">Gastroenterolog</option>
                            <option value="ginecologie" className="Level">Ginecolog</option>
                            <option value="hematologie" className="Level">Hematolog</option>
                            <option value="hepatologie" className="Level">Hepatolog</option>
                            <option value="imagist" className="Level">Imagist</option>
                            <option value="boli-infectioase-tropicale-si-parazitologie" className="Level">Infec??ionist
                            </option>
                            <option value="medicina-interna" className="Level">Internist</option>
                            <option value="kinetoterapie" className="Level">Kinetoterapeut</option>
                            <option value="mamologie" className="Level">Mamolog</option>
                            <option value="medic-de-familie" className="Level">Medic de familie</option>
                            <option value="nefrologie" className="Level">Nefrolog</option>
                            <option value="neurochirurg" className="Level">Neurochirurg</option>
                            <option value="neurologie" className="Level">Neurolog</option>
                            <option value="obstetrica" className="Level">Obstetrician-ginecolog</option>
                            <option value="oftalmologie" className="Level">Oftalmolog</option>
                            <option value="oncologie" className="Level">Oncolog</option>
                            <option value="ortopedie-si-traumatologie" className="Level">Ortoped-traumatolog</option>
                            <option value="otorinolaringologie-orl" className="Level">Otorinolaringolog (ORL)</option>
                            <option value="pediatrie" className="Level">Pediatru</option>
                            <option value="pneumologie" className="Level">Pneumolog</option>
                            <option value="proctologie" className="Level">Proctolog</option>
                            <option value="psihiatrie" className="Level">Psihiatru</option>
                            <option value="psihologie" className="Level">Psiholog</option>
                            <option value="psihoterapie" className="Level">Psihoterapeut</option>
                            <option value="reabilitolog" className="Level">Reabilitolog</option>
                            <option value="reflexologie" className="Level">Reflexoterapeut</option>
                            <option value="reproducere-umana" className="Level">Reproductolog (FIV)</option>
                            <option value="reumatologie" className="Level">Reumatolog</option>
                            <option value="sexologie" className="Level">Sexolog</option>
                            <option value="masaj" className="Level">Specialist ??n masaj</option>
                            <option value="stomatologie" className="Level">Stomatolog</option>
                            <option value="terapie-manuala" className="Level">Terapeut manual</option>
                            <option value="trihologie" className="Level">Triholog</option>
                            <option value="urologie" className="Level">Urolog</option>
                            <option value="venerologie" className="Level">Venerolog</option>
                            <option value="vertebrologie" className="Level">Vertebrolog</option>
                        </select>
                        <select id="SpecialService" className="Active">
                            <option value="ecografie" className="Level0">{t('SearchBar.SearchDropBox.ServiciiList')}</option>
                            <option value="neurosonografia-prin-fontanela" className="Level1">neurosonografia prin
                                fontanel??
                            </option>
                            <option value="tesuturile-moi" className="Level1">ecografie ??esuturile moi</option>
                            <option value="ecografie-glanda-tiroida" className="Level1">ecografie glanda tiroid??
                            </option>
                            <option value="ecografia-glandelor-mamare-bilateral" className="Level1">ecografia glandele
                                mamare
                            </option>
                            <option value="tesuturile-moi-si-ganglionii-limfatici-2d-scara-gri"
                                    className="Level1">??esuturile moi ??i ganglionii limfatici (2D, scar?? gri)
                            </option>
                            <option value="ecografia-glandei-mamare-ganglioni-limfatici-2d-scara-gri"
                                    className="Level1">ecografia glandele mamare+ganglioni limfatici (2D, scar?? gri)
                            </option>
                            <option value="ecografia-glandei-tiroide-ganglioni-limfatici-2d-scara-gri"
                                    className="Level1">ecografie glanda tiroid??+ganglioni limfatici (2D, scar?? gri)
                            </option>
                            <option value="ecografie-glanda-tiroida-2d-doppler" className="Level1">ecografie glanda
                                tiroid?? 2D+Doppler
                            </option>
                            <option value="ecografia-glandelor-mamare-2d-doppler" className="Level1">ecografia glandele
                                mamare 2D+Doppler
                            </option>
                            <option value="ecografie-abdominala" className="Level1">Ecografie abdominal??</option>
                            <option value="ecografie-ficat-si-vezica-biliara" className="Level2">ecografie [ficat ??i
                                vezica biliar??]
                            </option>
                            <option value="ecografie-pancreas-si-splina" className="Level2">ecografie [pancreas ??i
                                splin??]
                            </option>
                            <option value="ecografia-unui-organ-in-dinamica" className="Level2">ecografia unui organ ??n
                                dinamic??
                            </option>
                            <option value="aprecierea-colectiilor-libere-in-una-din-cavitati"
                                    className="Level2">aprecierea colec??iilor libere ??n una din cavit????i (spa??iu
                                pleural)
                            </option>
                            <option value="ecografie-pancreas-2d-in-scara-gri" className="Level2">ecografie pancreas 2D
                                ??n scar?? gri
                            </option>
                            <option value="ecografie-complexa-a-organelor-abdominale" className="Level2">ecografia
                                organelor abdominale [ficat, vez.biliar??, splin??, pancreas]
                            </option>
                            <option value="ecogrtafie-sistemul-urinar" className="Level1">Ecografie sistemul urinar
                            </option>
                            <option value="organele-sistemului-urinar-rinichi-glandele-suprarenale-vezica-urinara"
                                    className="Level2">organele sistemului urinar [rinichi, glandele suprarenale, vezica
                                urinar??]
                            </option>
                            <option
                                value="ecografia-sistemului-urogenital-femei-glandele-suprarenale-rinichi-vezica-urinara-caile-urinare-uter-ovare-transvaginal"
                                className="Level2">ecografia sistemului urogenital femei [glandele suprarenale, rinichi,
                                vezica urinar??, c??ile urinare, uter, ovare] transvaginal
                            </option>
                            <option
                                value="ecografia-sistemului-urogenital-femei-barbati-glandele-suprarenale-rinichi-vezica-urinara-caile-urinare-org-genitale-interne-transabdominal"
                                className="Level2">ecografia sistemului urogenital femei/barba??i [gland. suprarenale,
                                rinichi, vezica urinar??, c??ile urinare,org. genitale interne] transabdominal
                            </option>
                            <option
                                value="ecografia-sistemului-urogenital-barbati-glandele-suprarenale-rinichi-vezica-urinara-caile-urinare-veziculele-seminale-prostata-transrectal"
                                className="Level2">ecografia sistemului urogenital b??rba??i [glandele suprarenale,
                                rinichi, vezica urinar??, c??ile urinare, veziculele seminale, prostata] transrectal
                            </option>
                            <option value="ecografie-bazinul-mic" className="Level1">Ecografie bazinul mic</option>
                            <option
                                value="ecografia-organelor-bazinul-mic-barbati-vezica-urinara-prostata-veziculele-seminale-transabdominal"
                                className="Level2">ecografia organelor bazinul mic barbati [vezica urinara, prostata,
                                veziculele seminale] transabdominal
                            </option>
                            <option value="ecografie-prostata-si-veziculile-seminale-transabdominal"
                                    className="Level2">ecografie prostat?? ??i veziculile seminale (transabdominal)
                            </option>
                            <option
                                value="ecografia-organelor-bazinul-mic-femei-uterul-trompele-uterine-ovarele-colul-uterin-vaginul-transvaginal"
                                className="Level2">ecografia organelor bazinul mic femei [uterul, trompele uterine,
                                ovarele, colul uterin, vaginul] transvaginal
                            </option>
                            <option
                                value="ecografia-organelor-bazinul-mic-femei-vezica-urinara-uter-ovare-transabdominal"
                                className="Level2">ecografia organelor bazinul mic femei [vezica urinara, uter, ovare]
                                transabdominal
                            </option>
                            <option value="foliculometria-endovaginala" className="Level2">foliculometria
                                transvaginal??
                            </option>
                            <option value="foliculometria-transabdominala" className="Level2">foliculometria
                                transabdominal??
                            </option>
                            <option value="ecografia-prostatei-transrectal" className="Level2">ecografia prostatei
                                transrectal
                            </option>
                            <option value="ecografia-penisuluii" className="Level2">ecografia penisului</option>
                            <option
                                value="ecografia-organelor-bazinul-mic-barbati-vezica-urinara-prostata-veziculele-seminale-transrectal"
                                className="Level2">ecografia organelor bazinul mic barbati [vezica urinara, prostata,
                                veziculele seminale] transrectal
                            </option>
                            <option value="ecografie-prostata-si-vezica-urinara-transabdominal"
                                    className="Level2">ecografie prostat?? ??i vezica urinar?? (transabdominal)
                            </option>
                            <option value="ecografia-prostatei-transabdominal" className="Level2">ecografia prostatei
                                transabdominal
                            </option>
                            <option value="ecografia-prostatei-veziculele-seminale-scrotului-2d-doppler"
                                    className="Level2">ecografia prostatei, veziculele seminale, scrotului 2D+Doppler
                            </option>
                            <option value="ecografia-scrotului-testiculele-epididimul-plexul-panpiniform"
                                    className="Level2">ecografia scrotului [testiculele, epididimul, plexul panpiniform]
                            </option>
                            <option value="ecografia-scrotului-testiculele-dopplerr" className="Level2">ecografia
                                scrotului [testiculele]+Doppler
                            </option>
                            <option value="ecografia-scrotului-copii-testiculele-doppler" className="Level2">ecografia
                                scrotului copii [testiculele]+Doppler
                            </option>
                            <option value="ecografie-complexa" className="Level1">Ecografie complex??</option>
                            <option
                                value="ecografie-femei-glanda-tiroida-paratiroida-organele-abdominale-organele-sistemului-urogenital-transvaginal"
                                className="Level2">ecografie femei: glanda tiroid??/paratiroid??, organele abdominale,
                                organele sistemului urogenital transvaginal
                            </option>
                            <option
                                value="ecografie-barbati-femei-glanda-tiroida-paratiroida-organele-abdominale-organele-sistemului-urogenital-transabdominal"
                                className="Level2">ecografie b??rba??i / femei: glanda tiroid??/paratiroid??, organele
                                abdominale, organele sistemului urogenital transabdominal
                            </option>
                            <option value="ecografie-organele-abdominale-organele-sistemului-urogenital-transabdominal"
                                    className="Level2">ecografie organele abdominale, organele sistemului urogenital
                                (transabdominal)
                            </option>
                            <option
                                value="ecografie-copii-pina-la-12-ani-glanda-tiroida-paratiroida-org-abdominale-org-sistemului-urinar"
                                className="Level2">ecografie copii p??n?? la 12 ani (glanda tiroid??/paratiroid??, org.
                                abdominale, org.sistemului urinar)
                            </option>
                            <option value="ecografie-glanda-tiroida-glandele-mamare-si-organele-bazinului-mic"
                                    className="Level2">ecografie glanda tiroid??, glandele mamare, organele bazinului mic
                            </option>
                            <option
                                value="ecografie-femei-organele-abdominale-glanda-tiroida-glandele-mamare-organele-sistemului-uro-genital-transvaginal"
                                className="Level2">ecografie femei: organele abdominale, glanda tiroid??, glandele
                                mamare, organele sistemului urogenital transvaginal
                            </option>
                            <option
                                value="ecografic-barbati-organele-abdominale-glanda-tiroida-organele-sistemului-urogenital-transrectal"
                                className="Level2">ecografie b??rba??i: organele abdominale, glanda tiroid??, organele
                                sistemului urogenital transrectal
                            </option>
                            <option value="ecografie-complexa-organele-abdominale-si-sistemul-urinar"
                                    className="Level2">ecografie organele abdominale, sistemul urinar
                            </option>
                            <option value="ecografie-complexa-pentru-copii-organele-abdominale-si-sistemul-urinar"
                                    className="Level2">ecografie organele abdominale, sistemul urinar copii
                            </option>
                            <option value="tomografie-computerizata" className="Level0">Tomografie computerizat??
                            </option>
                            <option value="cerebrala-fara-contract" className="Level1">cerebral?? f??r?? contrast</option>
                            <option value="tcsinusurile-paranazale" className="Level1">sinusurile paranazale</option>
                            <option value="tc-abdomen" className="Level1">abdomen f??r?? contrast</option>
                            <option value="coloana-vertebrala-cervicala" className="Level1">coloana vertebral??
                                cervical??
                            </option>
                            <option value="tc-organele-bazinului-mic" className="Level1">organele bazinului mic f??r??
                                contrast
                            </option>
                            <option value="cerebrala-cu-contrast" className="Level1">cerebral?? cu contrast</option>
                            <option value="cerebrala-si-sinusurile-paranazale-cu-contrast" className="Level1">sinusurile
                                paranazale ??i creierul cu contrast
                            </option>
                            <option value="nazofaringele" className="Level1">nazofaringele</option>
                            <option value="nazofaringele-cu-contrast" className="Level1">nazofaringele cu contrast
                            </option>
                            <option value="abdomen-cu-contrast" className="Level1">abdomen cu contrast</option>
                            <option value="organele-bazinului-mic-cu-contrast" className="Level1">organele bazinului mic
                                cu contrast
                            </option>
                            <option value="coloana-vertebrala-toracala" className="Level1">coloana vertebral?? toracal??
                            </option>
                            <option value="coloana-vertebrala-lombo-sacrala" className="Level1">coloana vertebral??
                                lombo-sacral??
                            </option>
                            <option value="articulatii-1-regiune-anatomica" className="Level1">articula??ii (1 zon??
                                anatomic??)
                            </option>
                            <option value="regiune-a-membrului" className="Level1">o regiune a membrului</option>
                            <option value="abdomen-etajul-superior" className="Level1">abdomen f??r?? contrast (etajul
                                superior)
                            </option>
                            <option value="abdomen-cu-contrast-etajul-superior" className="Level1">abdomen cu contrast
                                (etajul superior)
                            </option>
                            <option value="selei-turcesti-si-a-creierului-fara-contrast" className="Level1">??elei
                                turce??ti ??i a creierului f??r?? contrast
                            </option>
                            <option value="selei-turcesti-si-a-creierului-cu-contrast" className="Level1">??elei turce??ti
                                ??i a creierului cu contrast
                            </option>
                            <option value="sinusurile-paranazale-si-a-creierului" className="Level1">sinusurile
                                paranazale ??i creierul
                            </option>
                            <option value="vertebrelor-2-3-segmente-coloanei-vertebrale" className="Level1">vertebrelor
                                (2-3 segmente), coloanei vertebrale
                            </option>
                            <option value="oasele-temporale-urechea-medie" className="Level1">oasele temporale (urechea
                                medie)
                            </option>
                            <option value="colonoscopie-virtuala-colono-ct" className="Level1">Colonoscopie virtual??
                                (colono-CT)
                            </option>
                            <option value="colonoscopie-virtuala-cu-contrast-colono-ct" className="Level1">Colonoscopie
                                virtual?? cu contrast (colono-CT)
                            </option>
                            <option value="toracelui-si-mediastinului" className="Level1">toracelui ??i mediastinului
                            </option>
                            <option value="toracelui-si-mediastinului-cu-contrast" className="Level1">toracelui ??i
                                mediastinului cu contrast
                            </option>
                            <option value="toracelui-si-mediastinului-cu-bronhoscopie-virtuala"
                                    className="Level1">toracelui ??i mediastinului cu bronhoscopie virtual??
                            </option>
                            <option value="tesuturile-moi-cu-contrast" className="Level1">??esuturile moi cu contrast
                            </option>
                            <option value="bilant-oncologic-zona-toracala-abdominala-bazinul-mic-fara-contrast"
                                    className="Level1">bilan?? oncologic (zona toracal??, abdominal??, bazinul mic) f??r??
                                contrast
                            </option>
                            <option value="bilant-oncologic-zona-toracala-abdominala-bazinul-mic-cu-contrast"
                                    className="Level1">bilan?? oncologic (zona toracal??, abdominal??, bazinul mic) cu
                                contrast
                            </option>
                            <option value="radiografie" className="Level0">Radiografie</option>
                            <option value="articulatia-soldului" className="Level1">articula??ia ??oldului</option>
                            <option value="oasele-nazale" className="Level1">oasele nazale</option>
                            <option value="plantei-sau-mana" className="Level1">plantei sau m??n??</option>
                            <option value="sinusurile-paranazale" className="Level1">sinusurile paranazale</option>
                            <option value="craniu" className="Level1">craniu</option>
                            <option value="rengencoloana-cervicala" className="Level1">coloana vertebral?? cervical??
                            </option>
                            <option value="oasele-bazinului" className="Level1">oasele bazinului</option>
                            <option value="oasele-temporale" className="Level1">oasele temporale</option>
                            <option value="orbitelor" className="Level1">orbitelor</option>
                            <option value="rengen-coloana-vertebrala-toracala" className="Level1">coloana vertebral??
                                toracal??
                            </option>
                            <option value="rengen-coloana-vertebrala-lombo-sacrala" className="Level1">coloana
                                vertebral?? lombar??
                            </option>
                            <option value="rengen-cutia-toracica" className="Level1">organelor cutiei toracice
                                (fluorografie)
                            </option>
                            <option value="rengen-clavicula" className="Level1">clavicul??</option>
                            <option value="rengen-omoplat" className="Level1">omoplat</option>
                            <option value="rengen-cavitatea-abdominala" className="Level1">cavitatea abdominal??</option>
                            <option value="osul-sacral-si-coccis" className="Level1">osul sacral ??i coccis</option>
                            <option value="osul-pubian" className="Level1">osul pubian</option>
                            <option value="articulatia-sacro-iliaca" className="Level1">articula??ia sacro-iliac??
                            </option>
                            <option value="articulatia-humerala" className="Level1">articula??ia humeral??</option>
                            <option value="oasele-bratului" className="Level1">oasele bra??ului</option>
                            <option value="rengen-articulatia-cotului" className="Level1">articula??ia cotului</option>
                            <option value="articulatia-radio-carpiana" className="Level1">articula??ia radio-carpian??
                            </option>
                            <option value="femur" className="Level1">femur</option>
                            <option value="rengen-articulatia-genunchiului" className="Level1">articula??ia
                                genunchiului
                            </option>
                            <option value="gamba" className="Level1">gamb??</option>
                            <option value="articulatia-talocrurala" className="Level1">articula??ia talocrural??</option>
                            <option value="selei-turcesti" className="Level1">??elei turce??ti</option>
                            <option value="vertebra-cervicala-c1" className="Level1">vertebra cervical?? C1</option>
                            <option value="pielografia-rinichi" className="Level1">sistemul urinar</option>
                            <option value="rotula" className="Level1">rotula</option>
                            <option value="calcaneu" className="Level1">calcaneu</option>
                            <option value="radiografialaringe" className="Level1">rino-laringe</option>
                            <option value="lab" className="Level0">Diagnostic de laborator</option>
                            <option value="test-covid" className="Level1">Test PCR Covid -19 (24 ore)</option>
                            <option value="bronhoscopie-virtuala" className="Level0">Bronhoscopie virtual??</option>
                            <option value="densitometria-osoasa" className="Level0">Densitometria osoas??</option>
                            <option value="osteodensitometria-generala-maturi" className="Level1">osteodensitometria
                                general?? maturi
                            </option>
                            <option value="osteodensitometria-generala-copii" className="Level1">osteodensitometria
                                general?? copii
                            </option>
                            <option value="osteodensitometria-coloana-lombara-col-femural"
                                    className="Level1">osteodensitometria - coloana lombar??+col femural
                            </option>
                            <option value="osteodensitometria-coloana-lombara" className="Level1">osteodensitometria -
                                coloana lombar??
                            </option>
                            <option value="osteodensitometria-col-femural-bilateral"
                                    className="Level1">osteodensitometria - col femural bilateral
                            </option>
                            <option value="osteodensitometria-col-femural" className="Level1">osteodensitometria - col
                                femural
                            </option>
                            <option value="osteodensitometria-antebrat-bilateral" className="Level1">osteodensitometria
                                - antebra?? bilateral
                            </option>
                            <option value="osteodensitometria-antebrat" className="Level1">osteodensitometria -
                                antebra??
                            </option>
                            <option value="osteodensitometria-coloana-lombara-consult-medicului"
                                    className="Level1">osteodensitometria - coloana lombar?? + consult. medicului
                            </option>
                            <option value="osteodensitometria-coloana-lombara-col-femural-consult-medicului"
                                    className="Level1">osteodensitometria - coloana lombar??+col femural + consult.
                                medicului
                            </option>
                            <option value="osteodensitometria-generala-maturi-consult-medicului"
                                    className="Level1">osteodensitometria general?? maturi + consult. medicului
                            </option>
                            <option value="electrocardiografia" className="Level0">Electrocardiografie (ECG)</option>
                            <option value="electrocardiografia-de-efort-fizic-treadmill"
                                    className="Level1">Electrocardiografia de efort fizic (treadmill)
                            </option>
                            <option value="electrocardiografia-de-repaus" className="Level1">Electrocardiografia de
                                repaus
                            </option>
                            <option value="electrocardiografia-de-efort-fizic-cicloergometria"
                                    className="Level1">Electrocardiografia de efort fizic (cicloergometria)
                            </option>
                            <option value="functia-ventilatiei-pulmonare" className="Level1">Func??ia ventila??iei
                                pulmonare
                            </option>
                            <option value="electrocardiograma" className="Level1">Electrocardiograma</option>
                            <option value="ecocardiografie-ecg" className="Level0">Ecocardiografie</option>
                            <option value="ecocardiografia-m-2d-doppler-doppler-color"
                                    className="Level1">ecocardiografia (M, 2D, Doppler, Doppler color)
                            </option>
                            <option value="ecocardiografie-fetala" className="Level1">ecocardiografie fetal?? (la
                                indica??ie)
                            </option>
                            <option
                                value="ecocardiografia-m-2d-doppler-doppler-color-doppler-tisular-energetic-spectral-continuu-pulsativ"
                                className="Level1">ecocardiografia (M, 2D, Doppler, Doppler color, Doppler tisular,
                                Energetic, Spectral, Continuu, Pulsativ)
                            </option>
                            <option value="ecocardiografia-copii-0-12-ani" className="Level1">ecocardiografia copii 0-12
                                ani
                            </option>
                            <option value="mamografie-glandele-mamare" className="Level0">Mamografie</option>
                            <option value="mamografia-unei-glande-mamare" className="Level1">mamografia unei glande
                                mamare ??n regim digital, 1 film
                            </option>
                            <option value="mamografia-ambelor-glandelor-mamare-in-regim-digital-2-filme"
                                    className="Level1">mamografia ambelor glandelor mamare ??n regim digital, 2 filme
                            </option>
                            <option value="mamografia-ambelor-glandelor-mamare-in-regim-digital-4-filme"
                                    className="Level1">mamografia ambelor glandelor mamare ??n regim digital, 4 filme
                            </option>
                            <option value="dublarea-rezultatului-mamografiei-digitale-pe-cd" className="Level1">dublarea
                                rezultatului mamografiei digitale pe CD
                            </option>
                            <option value="dublarea-rezultatului-mamografiei-pe-film-digital-2-filme"
                                    className="Level1">dublarea rezultatului mamografiei pe film digital, 2 filme
                            </option>
                            <option value="endoscopie-de-diagnostic" className="Level0">Investiga??ii endoscopie de
                                diagnostic
                            </option>
                            <option value="videocolonoscopie-complexa-avansata" className="Level1">Videocolonoscopie
                                complex?? avansat??
                            </option>
                            <option
                                value="videoesofagogastroduodenoscopie-vegds-hd-complexa-determ-germ-helicocacter-pylori"
                                className="Level1">Videoesofagogastroduodenoscopie (VEGDS HD avansat??) + determ. germ.
                                Helicocacter Pylori
                            </option>
                            <option value="videoesofagogastroduodenoscopie-vegds-hd-complexa"
                                    className="Level1">Videoesofagogastroduodenoscopie (VEGDS HD complex??)
                            </option>
                            <option value="duodenoscopie-ca-suplimentare-a-vegds-sd-wle"
                                    className="Level1">Duodenoscopie ca suplimentare a VEGDS SD (WLE)
                            </option>
                            <option value="vegds-hd-de-control-dupa-interventia-endoscopica" className="Level1">VEGDS HD
                                de control dup?? interven??ia endoscopic??
                            </option>
                            <option value="recoltarea-materialului-pentru-helicobacter-pylori"
                                    className="Level1">recoltarea materialului pentru Helicobacter Pylori
                            </option>
                            <option value="test-ureaza-helicobacter-pylori" className="Level1">test Helicobacter
                                Pylori
                            </option>
                            <option value="videorectosigmoidoscopie-complexa-avansata"
                                    className="Level1">Videorectosigmoidoscopie complex?? avansat??
                            </option>
                            <option value="videocolonoscopie-avansata-de-control-dupa-interventie-endoscopica"
                                    className="Level1">Videocolonoscopie avansat?? de control dup?? interven??ie
                                endoscopic??
                            </option>
                            <option value="cromoendoscopie-cu-colorant" className="Level1">Cromoendoscopie cu colorant
                            </option>
                            <option value="biopsie-endoscopica-cu-forcepsul" className="Level1">Biopsie endoscopic?? cu
                                forcepsul
                            </option>
                            <option value="biopsie-endoscopica-cu-ansa" className="Level1">Biopsie endoscopic?? cu ans??
                            </option>
                            <option value="angiografie-prin-tc" className="Level0">Angiografie prin TC</option>
                            <option value="angiografia-cerebrala" className="Level1">Angiografia cerebral??</option>
                            <option value="angiografia-arterelor-pulmonare-prin-tc" className="Level1">Angiografia
                                arterelor pulmonare
                            </option>
                            <option value="angiografia-arterelor-renale-prin-tc" className="Level1">Angiografia
                                arterelor renale
                            </option>
                            <option value="angiografia-arterelor-membrelor-superioare-sau-inferioare"
                                    className="Level1">Angiografia arterelor membrelor superioare sau inferioare
                            </option>
                            <option value="angiografia-aortei-seg-toracal-si-seg-abdominal"
                                    className="Level1">Angiografia aortei (seg. toracal ??i seg. abdominal)
                            </option>
                            <option value="angiografia-carotidiana" className="Level1">Angiografia arterelor carotide
                            </option>
                            <option value="angiografia-carotidiana-si-cerebrala" className="Level1">Angiografia
                                carotidian?? ??i cerebral??
                            </option>
                            <option value="arteriografia-renala-inclusiv-urografia" className="Level1">Arteriografia
                                renal??, inclusiv urografia
                            </option>
                            <option value="angiografia-toracala-sau-abdominala" className="Level1">Angiografia toracal??
                                sau abdominal??
                            </option>
                            <option value="angiografia-arterelor-hepatice-pancreatice" className="Level1">Angiografia
                                arterelor hepatice, pancreatice
                            </option>
                            <option value="angiografia-arterelor-cerebrale-intra-extra-craniene"
                                    className="Level1">Angiografia arterelor cerebrale intra-extra-craniene
                            </option>
                            <option value="angiografia-cordului-ca-scoring" className="Level1">Angiografia cordului -
                                CA-scoring
                            </option>
                            <option value="angiografia-arterelor-bazinului-mic" className="Level1">Angiografia arterelor
                                bazinului mic
                            </option>
                            <option value="elastografia" className="Level0">Elastografia</option>
                            <option
                                value="un-organ-sau-o-zona-anatomica-glanda-tiroida-glanda-mamara-ficat-rinichi-uter-ovar-prostata-scrotul-tesuturi-moi-sau-ganglioni-limfatici"
                                className="Level1">un organ sau o zon?? anatomic?? [glanda tiroid??, glanda mamar??, ficat,
                                rinichi, uter, ovar, prostat??, scrotul, ??esuturi moi sau ganglioni limfatici]
                            </option>
                            <option
                                value="elastografia-shear-wave-glanda-tiroida-glanda-mamara-ficat-rinichi-uter-ovar-prostata-scrotul-tesuturi-moi-sau-ganglioni-limfatici"
                                className="Level1">elastografia + Shear Wave [glanda tiroid??, glanda mamar??, ficat,
                                rinichi, uter, ovar, prostat??, scrotul, ??esuturi moi sau ganglioni limfatici]
                            </option>
                            <option value="electroencefalografia-eeg" className="Level0">Electroencefalografia (EEG)
                            </option>
                            <option value="veeg-monitoring-cu-probele-functionale-20-min"
                                    className="Level1">VEEG-monitoring cu probele func??ionale (20 min)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-zi-1-ora" className="Level1">VEEG-monitoring cu
                                ??nreg. de zi (1 or??)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-zi-2-ore" className="Level1">VEEG-monitoring cu
                                ??nreg. de zi (2 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-zi-4-ore" className="Level1">VEEG-monitoring cu
                                ??nreg. de zi (4 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-zi-6-ore" className="Level1">VEEG-monitoring cu
                                ??nreg. de zi (6 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-zi-9-ore" className="Level1">VEEG-monitoring cu
                                ??nreg. de zi (9 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-zi-12-ore" className="Level1">VEEG-monitoring cu
                                ??nreg. de zi (12 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-noapte-1-ora" className="Level1">VEEG-monitoring
                                cu ??nreg. de noapte (1 or??)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-noapte-2-ore" className="Level1">VEEG-monitoring
                                cu ??nreg. de noapte (2 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-noapte-4-ore" className="Level1">VEEG-monitoring
                                cu ??nreg. de noapte (4 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-noapte-6-ore" className="Level1">VEEG-monitoring
                                cu ??nreg. de noapte (6 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-noapte-9-ore" className="Level1">VEEG-monitoring
                                cu ??nreg. de noapte (8 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inreg-de-noapte-12-ore" className="Level1">VEEG-monitoring
                                cu ??nreg. de noapte (12 ore)
                            </option>
                            <option value="veeg-monitoring-cu-inregistrare-de-24-ore" className="Level1">VEEG-monitoring
                                cu ??nregistrare de 24 ore
                            </option>
                            <option value="electroneuromiografia" className="Level1">Electroneuromiografia</option>
                            <option value="encefalografie" className="Level1">Encefalografie</option>
                            <option value="veeg-monitoring-cu-inreg-de-noapte-10-ore" className="Level1">VEEG-monitoring
                                cu ??nreg. de noapte (10 ore)
                            </option>
                            <option value="monitorizare-cardiologica-holter-ecg" className="Level0">Monitorizare
                                cardiologic?? Holter
                            </option>
                            <option value="monitorizare-ecg-holter-7-derivate-24-ore" className="Level1">monitorizare
                                ECG (Holter) 7 deriva??ii, 24 ore
                            </option>
                            <option value="monitorizare-ecg-holter-12-derivate-24-ore" className="Level1">monitorizare
                                ECG (Holter) 12 deriva??ii, 24 ore
                            </option>
                            <option value="monitorizare-ecg-holter-7-derivatii-48-ore" className="Level1">monitorizare
                                ECG (Holter) 7 deriva??ii, 48 ore
                            </option>
                            <option value="monitorizare-ecg-holter-12-derivatii-48-ore" className="Level1">monitorizare
                                ECG (Holter) 12 deriva??ii, 48 ore
                            </option>
                            <option value="monitorizare-ecg-holter-12-derivate-7-zile" className="Level1">monitorizare
                                ECG (Holter) 12 derivate, 7 zile
                            </option>
                            <option value="monitorizarea-tensiunii-arteriale-holter-ta-24-ore"
                                    className="Level1">Monitorizarea tensiunii arteriale (Holter TA) - 24 ore
                            </option>
                            <option value="monitorizare-ecg-holter-7-derivatii-72-ore" className="Level1">monitorizare
                                ECG (Holter) 7 deriva??ii, 72 ore
                            </option>
                            <option value="monitorizare-ecg-holter-12-derivate-72-ore" className="Level1">monitorizare
                                ECG (Holter) 12 derivate, 72 ore
                            </option>
                            <option value="inregistrarea-investigatiei-pe-cd" className="Level0">??nregistrarea
                                investiga??iei pe CD
                            </option>
                            <option value="sonodopplerografia" className="Level0">Sonodopplerografia</option>
                            <option value="duplex-scanare-a-vaselor-extra-si-intracraniene" className="Level1">Dupplex
                                scanare a vaselor extra / intracraniene
                            </option>
                            <option value="duplex-scanare-a-arterelor-renale-bilateral" className="Level1">Dupplex
                                scanare a arterelor renale bilateral
                            </option>
                            <option value="duplex-scanare-a-aortei-abdominale-2d-doppler" className="Level1">Dupplex
                                scanare a aortei abdominale 2D+Doppler
                            </option>
                            <option value="duplex-scanare-a-sistemului-venos-port-2d-doppler" className="Level1">Dupplex
                                scanare a sistemului Venos Port 2D+Doppler
                            </option>
                            <option value="dupplex-scanarea-vaselor-abdominale-aorta-vena-cava-inferior"
                                    className="Level1">Dupplex scanarea vaselor abdominale [aorta, vena cava inferior]
                            </option>
                            <option value="examen-duplex-triplex-al-vaselor-sanguine-2d-doppler-color-doppler-spectral"
                                    className="Level1">Examen Duplex/Triplex al vaselor sanguine [2D+Doppler
                                color+Doppler spectral]
                            </option>
                            <option value="vasele-brahiocefalice-portiunile-extracraniene" className="Level2">vasele
                                brahiocefalice, por??iunile extracraniene
                            </option>
                            <option value="vasele-brahiocefalice-portiunile-extra-si-intracraniene"
                                    className="Level2">vasele brahiocefalice, por??iunile extra ??i intracraniene
                            </option>
                            <option value="vasele-artere-si-vene-membrului-superior-sau-inferior"
                                    className="Level2">vasele [artere ??i vene] membrului superior sau inferior
                            </option>
                            <option value="vasele-artere-si-vene-membrelor-superioare-sau-inferioare"
                                    className="Level2">vasele [artere ??i vene] membrelor superioare sau inferioare
                            </option>
                            <option value="arterele-sau-venele-membrului-inferior" className="Level2">arterele sau
                                venele membrului inferior
                            </option>
                            <option value="arterele-sau-venele-membrelor-inferioare" className="Level2">arterele sau
                                venele membrelor inferioare
                            </option>
                            <option value="arterele-sau-venele-membrelor-inferioare-cu-segmentul-abdominal"
                                    className="Level2">arterele sau venele membrelor inferioare-cu segmentul abdominal
                            </option>
                            <option value="vasele-unui-sistem-de-organe" className="Level2">vasele unui sistem de
                                organe
                            </option>
                            <option value="sistemul-porto-caval" className="Level2">sistemul porto-caval</option>
                            <option value="arterele-renale" className="Level2">arterele renale</option>
                            <option value="aorta-abdominala" className="Level2">aorta abdominal??</option>
                            <option value="aorta-abdominala-ramurile-viscerale" className="Level2">aorta abdominal?? +
                                ramurile viscerale
                            </option>
                            <option value="arterele-sau-venele-membrului-superior" className="Level2">arterele sau
                                venele membrului superior
                            </option>
                            <option value="arterele-sau-venele-membrelor-superioare" className="Level2">arterele sau
                                venele membrelor superioare
                            </option>
                            <option value="ultrasonografie-obstetrica" className="Level0">Ultrasonografie obstetric??
                            </option>
                            <option value="examen-ecografic-transabdominal-in-trim-1-sarcina" className="Level1">examen
                                ecografic transabdominal ??n trim.1 sarcin??
                            </option>
                            <option value="examen-ecografic-endovaginal-in-trim-1-sarcina" className="Level1">examen
                                ecografic endovaginal ??n trim.1 sarcin??
                            </option>
                            <option value="examen-ecografic-in-trim-2-3-sarcina" className="Level1">examen ecografic ??n
                                trim.2-3 sarcin??
                            </option>
                            <option value="examen-ecografic-ginecologic-endovaginal-pana-la-10-sapt-sarcini"
                                    className="Level1">examen ecografic ginecologic endovaginal [p??n?? la 10 s??pt.
                                sarcini]
                            </option>
                            <option value="examen-ecografic-ginecologic-transabdominal-pana-la-10-sapt-sarcina"
                                    className="Level1">examen ecografic ginecologic transabdominal [p??n?? la 10 s??pt.
                                sarcin??]
                            </option>
                            <option
                                value="examen-ecografic-in-sarcina-unica-trim-i-screening-pentru-11-14-saptamani-transabdomina"
                                className="Level1">examen ecografic ??n sarcin?? unic??, trim.1, screening pentru 11-14
                                s??pt??m??ni, transabdominal
                            </option>
                            <option
                                value="examen-ecografic-in-sarcina-multipla-trim-i-screening-pentru-11-14-saptamani-transabdominal"
                                className="Level1">examen ecografic ??n sarcin?? multipl??, trim.1, screening pentru 11-14
                                s??pt??m??ni, transabdominal
                            </option>
                            <option value="examen-ecografic-in-trim-2-3-sarcina-multipla" className="Level1">examen
                                ecografic ??n trim.2-3 sarcin?? multipl??
                            </option>
                            <option value="examen-ecografic-in-sarcina-unica-trim-2-3-vizualizare-4d-poze-inreg-cd"
                                    className="Level1">examen ecografic ??n sarcin?? unic??, trim.2-3, vizualizare 4D,
                                poze, ??nreg. CD
                            </option>
                            <option value="examen-ecografic-in-sarcina-multipla-trim-2-3-vizualizare-4d-poze-inreg-cd"
                                    className="Level1">examen ecografic ??n sarcin?? multipl??, trim.2-3, vizualizare 4D,
                                poze, ??nreg. CD
                            </option>
                            <option value="examen-ecografic-in-trim-2-sarcina" className="Level1">examen ecografic ??n
                                trim.2 sarcin??
                            </option>
                            <option value="examen-ecografic-in-trim-2-sarcina-doppler" className="Level1">examen
                                ecografic ??n trim.2 sarcin??+Doppler
                            </option>
                            <option value="examen-ecografic-in-trim-3-sarcina-doppler" className="Level1">examen
                                ecografic ??n trim.3 sarcin??+Doppler
                            </option>
                            <option value="ecocardiografia-cordul-fatului-doppler-color"
                                    className="Level1">Ecocardiografia cordul f??tului (Doppler color)
                            </option>
                            <option value="ecocardiografia-cordul-fatului-doppler-color-gemeni"
                                    className="Level1">Ecocardiografia cordul f??tului (Doppler color) (gemeni)
                            </option>
                            <option value="examen-ecografic-sarcina-unica-trimestrul-i-transabdominal-transvaginal"
                                    className="Level1">examen ecografic sarcin?? unic??, trimestrul I, (transabdominal /
                                transvaginal)
                            </option>
                            <option value="examen-ecografic-sarcina-multipla-trimestrul-i-transabdominal-transvaginal"
                                    className="Level1">examen ecografic sarcin?? multipl??, trimestrul I, (transabdominal
                                / transvaginal)
                            </option>
                            <option value="ultrasonografia-musculoscheletara" className="Level0">Ultrasonografia
                                musculoscheletar??
                            </option>
                            <option value="articulatiile-palmei-sau-plantei" className="Level1">articula??iile palmei sau
                                plantei
                            </option>
                            <option value="articulatiile-palmelor-sau-plantelor" className="Level1">articula??iile
                                palmelor sau plantelor
                            </option>
                            <option value="unei-zone-anatomice-tesuturi-moi-sau-grup-de-ganglioni-limfatici"
                                    className="Level1">unei zone anatomice (??esuturi moi sau grup de ganglioni
                                limfatici)
                            </option>
                            <option value="doua-articulatii-simetrice" className="Level1">dou?? articula??ii simetrice
                                (radiocarpiene, coatelor, umerilor, ??oldurilor, genunchilor, gleznelor)
                            </option>
                            <option value="doua-articulatii-diferite" className="Level1">dou?? articula??ii diferite
                                (cot+um??r, um??r+genunchi, ??old+cot, etc.)
                            </option>
                            <option value="interventie-ecoghidata-a-articulatiei-coxofemurale-sau-sacroiliace"
                                    className="Level1">interven??ie ecoghidat?? a articula??iei coxofemurale sau
                                sacroiliace
                            </option>
                            <option value="interventie-ecoghidata-a-articulatiilor-coxofemurale-sau-sacroiliace"
                                    className="Level1">interven??ie ecoghidat?? a articula??iilor coxofemurale sau
                                sacroiliace
                            </option>
                            <option value="articulatia-soldului-la-nou-nascuti-dupa-metoda-graf-0-3-luni"
                                    className="Level1">articula??ia ??oldului la nou-n??scu??i dup?? metoda Graf (0-3 luni)
                            </option>
                            <option value="unei-articulatii" className="Level1">unei articula??ii (radiocarpian??, cot,
                                um??r, ??old, genunchi, glezn??)
                            </option>
                            <option
                                value="interventie-ecoghidata-a-unei-articulatii-radiocarpiana-cot-umar-genunchi-glezna"
                                className="Level1">interven??ie ecoghidat?? a unei articula??ii (radiocarpian??, cot, um??r,
                                genunchi, glezn??)
                            </option>
                            <option
                                value="interventie-ecoghidata-a-doua-articulatii-simetrice-sau-diferite-radiocarpiana-cot-umar-genunchi-glezna"
                                className="Level1">interven??ie ecoghidat?? a dou?? articula??ii simetrice sau diferite
                                (radiocarpian??, cot, um??r, genunchi, glezn??)
                            </option>
                            <option value="nervul-median-si-ulnar-in-sindrom-de-canal-carpian-cubital-guyon-1-mana"
                                    className="Level1">nervul median ??i ulnar ??n sindrom de canal carpian/cubital/Guyon
                                - 1 m??n??
                            </option>
                            <option value="nervul-median-si-ulnar-in-sindrom-de-canal-carpian-cubital-guyon-2-maini"
                                    className="Level1">nervul median ??i ulnar ??n sindrom de canal carpian/cubital/Guyon
                                - 2 m??ini
                            </option>
                            <option value="inregistrarea-investigatiei-pe-fotografie" className="Level0">??nregistrarea
                                investiga??iei pe fotografie
                            </option>
                        </select>
                        <select id="Location">
                            <option value="1,2,3,4,5,6,7,8">{t('SearchBar.SearchDropBox.Sectoare')}</option>
                            <option value="2">Botanica</option>
                            <option value="3">Buiucani</option>
                            <option value="4">Centru</option>
                            <option value="5">Ciocana</option>
                            <option value="6">Sculeanca</option>
                            <option value="7">R????cani</option>
                            <option value="8">Telecentru</option>
                        </select>
                        <button className="search__button" /*onClick={searchButton}*/>
                            <img src={iconfiind} alt={iconfiind}/>
                            <i>{t('SearchBar.SearchDropBox.Cauta')}</i>
                        </button>
                    </div>
                    <div className="group-2">
                        <div className="statistic1">
                            <img src={iconvisits} alt="Vizitatori"/>
                            <div className="statistic__content">
                                <h1>4113836</h1>
                                <h2>{t('SearchBar.SearchStatistics.Vizitatori')}</h2>
                            </div>
                        </div>
                        <div className="statistic2">
                            <img src={iconprograms} alt="Programari"/>
                            <div className="statistic__content">
                                <h1>74712</h1>
                                <h2>{t('SearchBar.SearchStatistics.Programari')}</h2>
                            </div>
                        </div>
                        <div className="statistic3">
                            <img src={icondocregister} alt="Doctori pe sait"/>
                            <div className="statistic__content">
                                <h1>163</h1>
                                <h2>{t('SearchBar.SearchStatistics.Doctori')}</h2>
                            </div>
                        </div>
                        <div className="statistic4">
                            <img src={iconcoment} alt="Comentarii"/>
                            <div className="statistic__content">
                                <h1>20418</h1>
                                <h2>{t('SearchBar.SearchStatistics.Comentarii')}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
// @ts-ignore
export default withNamespaces()(SearchComponent)
