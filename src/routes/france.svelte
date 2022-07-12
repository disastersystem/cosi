<svelte:head>
    <title>France: prepare your stay - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div class="content-max-width">
            <!-- <h1 class="cosi-title-1">University Jean Monnet</h1> -->
            <!-- <h2 class="cosi-headline">University Jean Monnet</h2> -->
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/france', 'France']
            ]} />

            <h1 class="cosi-title-1">France - Prepare your stay</h1>

            <h2 class="cosi-title-2 mb-4 mt-16">
                Useful links during your stay
            </h2>

            <ul class="cosi-ul">
                <li>
                    <a href="http://portail.univ-st-etienne.fr/bienvenue/universite-jean-monnet-welcomes-you-204691.kjsp?RH=ACCUEIL" class="external">University English portal</a>
                </li>
                <li>
                    <a href="http://www.campusfrance.org/en/rubrique/vivre-en-france" class="external">General info for international student living in France</a>
                </li>
                <li>
                    <a href="http://www.campusfrance.org/en/rubrique/vivre-en-france" class="external">General info for international student living in France</a>
                </li>
                <li>
                    <a href="http://saint-etiennetourisme.com/?lang=en" class="external">What to do in Saint-Etienne</a>
                </li>
                <li>
                    <a href="http://www.france.fr/en/welcome-france.html" class="external">Info on living in France</a>
                </li>
                <li>
                    <a href="http://lyon-university.org/practical-information/discover-lyon-and-saint-etienne--182164.kjsp?RH=PENdis&RF=1337965877562" class="external">Discover Lyon and Saint-Etienne!</a>
                </li>
                <li>
                    <a href="http://lyon-university.org/practical-information/discover-lyon-and-saint-etienne--182164.kjsp?RH=PENdis&RF=1337965877562" class="external">Saint-Etienne: a student city</a>
                </li>
            </ul>

            <h2 class="cosi-title-2 mb-4 mt-16">
                Coming to France — administrative tasks
            </h2>

            <h4 class="cosi-title-4 mt-10 mb-4">
                1. Read about available housing options and banking services
            </h4>

            <p class="cosi-p">
                To allow you to request a visa, you need to produce a “residence certificate” to show during your visa application. That's why you need to book a room in France beforehand.

            </p>
            <p class="cosi-p">University Jean Monnet offers a variety of housing options, at both public and private student residences. You can of course decide to rent a flat by your own to a private landlord, before or upon arrival. Note that in this case you'll have to deal with the administrative process alone and we won't be able to support you in concluding a contract nor dealing with potential issues arising from this contract.
            </p>
            <p class="cosi-p">Residence booking have to be done for at least a semester. Be careful because you cannot change residence after a week upon arrival (you would loose your deposit and 1 month advance notification is needed).</p>
            <p class="cosi-p">IMPORTANT: although we will do our best to help you communicate and book a room, the contract relationship with those private service providers and hence the final responsibility lies with the student. You need to contact the residence and make sure your room is actually booked, irrespective of the certificate of residence you might received from the International Office.
            </p>
            <p class="cosi-p">If you wish to have a look at options before commiting yourself, it can be a good idea to go first in an hotel / residence for the first few days or your stay.
            </p>
            <p class="cosi-p">Options are (rent mentioned applied for the 2020/2021 academic year and is indicative only, they might be slightly revised in July 2020):
            </p>
            <ul class="cosi-ul">
                <li><a href="https://cdn.website-editor.net/9d802a9e77324ea49af5974d51d75a28/files/uploaded/RAMI%2520h%25C3%25A9bergement%2520bilingue.pdf" class="external">Résidence des Arts - Maison Internationale</a>
                </li>
                <li><a href="https://cdn.website-editor.net/9d802a9e77324ea49af5974d51d75a28/files/uploaded/N%25C3%25A9or%25C3%25A9side%2520Tr%25C3%25A9filerie%2520%2520h%25C3%25A9bergement%2520bilingueAnn%25C3%25A9e.pdf" class="external">Résidence Néoréside Tréfilerie</a>
                </li>
                <li><a href="https://cdn.website-editor.net/9d802a9e77324ea49af5974d51d75a28/files/uploaded/N%25C3%25A9or%25C3%25A9side%2520Bellevue%2520h%25C3%25A9bergement%2520bilingueAnn%25C3%25A9e.pdf" class="external">Résidence Néoréside Bellevue</a>
                </li>
                <li><a href="https://cdn.website-editor.net/9d802a9e77324ea49af5974d51d75a28/files/uploaded/LITTRE%2520h%25C3%25A9bergement%2520bilingue.pdf" class="external">Résidence Le Littré</a>
                </li>
                <li><a href="https://cdn.website-editor.net/9d802a9e77324ea49af5974d51d75a28/files/uploaded/ESTUDINES%2520h%25C3%25A9bergement%2520bilingueAnn%25C3%25A9e.pdf" class="external">Résidence Les Estudines - Jules Ferry</a></li>
            </ul>
            <p class="text-xs uppercase font-bold">N.B.1</p>
            <p class="cosi-p">As an international student enrolled in a Higher Education Institution in France, you are eligible to the student housing allowance called "APL", generally around 160€ for a studio and 100€ for a room (actual amount depends on each particular situation). Therefore exact monthly rent to be paid, once the housing allowance is deducted, cannot not be planned precisely.
            </p>
            <p class="cosi-p">The APL is calculated from the date of deposit of your application at the <a href="http://www.caf.fr/" class="external">CAF</a> ("Caisse Allocations Familiales") and paid monthly on your French bank account.
            </p>
            <p class="cosi-p">A translated and certified copy of your birth certificate (in French) will be required to deposit your student housing benefit application. This can be done in France upon arrival.</p>
            <p class="text-xs uppercase font-bold">N.B.2</p>
            <p class="cosi-p">Considering expenses to be made upon arrival (deposit, registration fees, home insurance, installation costs, …) it is advised to students to plan at least 1000 € of housing expenses the first week of arrival. It is also advise not to arrive on a Sunday (no help desk) and considering you will probably have to do shopping before settling down (no bed linen in some residence). Shops are closed on Sundays in France.</p>
            <p class="text-xs uppercase font-bold">N.B.3</p>
            <p class="cosi-p">The home insurance can be contracted from our <a href="http://www.ca-loirehauteloire.fr/home-part.html" class="external">banking partner</a> upon arrival in France.</p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                2. You need to officially commit to the Programme by completing a Letter of commitment in this <a href="https://docs.google.com/forms/d/e/1FAIpQLScRWX9_MqemDlWD_qR0-qSalX4OixsCc_D8c2K4R4T1HZPJCg/viewform" class="external">online form</a>.
            </h4>
            <p class="cosi-p">
                In the form you need to provide additional info regarding housing & banking service, your financial ability to cover expenses associated to your participation in the Programme and the cost of living during the full period of your enrolment in the Programme need to be informed.
            </p>
            <p class="cosi-p">
                The letter of admission and certificate of residence - documentation required to apply to a French student visa - will be sent to you only upon reception of this letter with completed information.
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                3. Receive your letter of admission / certificate of residence
            </h4>
            <p class="cosi-p">
                Upon reception of your letter of commitment the Consortium will send you:
            </p>
            <ul class="cosi-ul">
                <li>a scan of your certificate of admission, signed by all hosting institutions, stating the precise dates of the Programme mobility scheme and, if applicable, the scholarship you're entitled to that will serve supporting all visa applications you'll need to undertake during the Programme, and</li>
                <li>a certificate of residence, document you'll need to apply to a French long-stay student visa.</li>
            </ul>

            <h4 class="cosi-title-4 mt-10 mb-4">
                4. Book a flight
            </h4>
            <p class="cosi-p">
                Flight booking and travel arrangement are your own responsibility. We strongly advice you to carefully plan you arrival to make sure you arrive in Saint Etienne from 01/09 to 04/09.
            </p>
            <p class="cosi-p">We don't have partnerships with travel agencies; flight booking and travel arrangement are your own responsibility. We advise you to book your flight ticket as early as possible. A return ticket is always cheaper than a single one: think ahead if you wish to go back home for the winter break or if you will only return during the summer break. You can book a flight to the cities of Paris or Lyon depending on the best fare you can get, both destinations being equally convenient to come to Saint Etienne.
            </p>
            <p class="cosi-p">We strongly advice you to carefully plan you arrival to make sure you arrive in Saint Etienne from 01/09 to 04/09, preferably before 04.00 pm (reception desk closed usually early in the afternoon and during the weekend). Residence desks will be informed of your arrival.</p>
            <p class="cosi-p">COSI students benefit from a full health & accident coverage taking effect by the time the student the journey to participate to the Programme (international travel) and until two months after the end of the Programme. This coverage starts from 15/08/2016 for intake 2. We do not advise you to travel before this date to France. See this page for more info.</p>
        
            <h4 class="cosi-title-4 mt-10 mb-4">
                5. Apply for a visa
            </h4>

            <p class="cosi-p">
                Non-European students should start with the visa paperwork as soon as possible, as soon as you've received the certificate of admission and certificate of residence.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                European students
            </h5>

            <p class="cosi-p">
                If you are a national of a member state of the European Union (EU) or the European Economic Area (EEA) - Iceland, Liechtenstein, Norway - or of Switzerland, you are not required to have a specific visa to study in France, a passport of ID card is sufficient. Do not forget to apply before arrival and bring your <a href="http://ec.europa.eu/social/main.jsp?catId=559" class="external">European health insurance card</a> that will allow you to benefit from heath insurance in France at no costs if you're under 28 years old.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Non-European students
            </h5>
            <p class="cosi-p">
                While we'll follow-up and provide any possible support during your visa application (notably by communicating directly with your consulate to advocate for your application and detail compliance of your application with legal criteria as detailed <a href="http://www.campusfrance.org/en/page/long-term-visa-used-residence-permit-vls-ts" class="external">here</a>) please note that this procedure is ultimately your own and sole responsibility and that the granting of the visa is the prerogative of the French government; the Consortium is not able to guarantee successful award of the French visa.
            </p>
            <p class="cosi-p">Based on our previous experience, visa issues demand much time and attention. Sometimes it might take up to 4 months. For a more effective result, please start with the visa paperwork as soon as possible, (i.e. as soon as you've received the certificate of admission and certificate of residence). Pay attention to small details, such as photos format or amount of passport pages to be copied; double-check all your forms and the data you fill in. Always have copies of originals (good idea to have them in a digital form, too) for your own administration, as well as when submitting applications, since sometimes consulates do not return any documents (make sure you make several copies of the certificate of admission, of the official scholarship confirmation letter from the European Commission; of the insurance policy statement and the insurance card, etc). Rules at embassies change often, so be sure you get the most updated information on the required documents. You should keep your Administrative Coordinator informed if you face visa problems.
            </p>
            <p class="cosi-p">It may be better if your passport is valid for at least 2-3 years before your planned date of arrival to avoid problems with receiving passport while you study and with lack of pages in your passport if you already had a lot of visas in. Some countries require it to be valid for at least one year to issue a visa.
            </p>
            <p class="cosi-p">You need to apply to an <a href="http://www.campusfrance.org/en/page/long-term-visa-used-residence-permit-vls-ts" class="external">Extended-stay student visa, with residency permit (VLS-TS)</a>. It is important that you request a visa valid 1 year, irrespective of the in-built mobility scheme of the Programme. This visa will serve as a residence permit after completed the right procedure upon arrival, or, for citizens of Algeria only, a “visa “D” Long séjour“.
            </p>
            <p class="cosi-p">Check first if you're a citizen of one of the <a href="http://www.campusfrance.org/en/page/a-country-using-cef-procedure" class="external">following 35 countries</a> (so-called "countries using CEF procedure"):</p>
            
            <p class="cosi-p">If so, you will have to register with your local Campus France office to apply for admission and obtain a student visa, using the <a href="https://pastel.diplomatie.gouv.fr/etudesenfrance/dyn/public/authentification/login.html?codeLangue=EN" class="external">online CEF procedure</a>. You need to register, then follow the option available for student already accepted to a programme. Your <a href="http://www.campusfrance.org/en/espaces/map" class="external">local Campus France office</a> will be your main contact person during your visa application. Please indicate clearly to Campus France that you have already been selected by Universty Jean Monnet (by enclosing to your online file your certificate of preliminary admission and certificate of residence).
            </p>
            <p class="cosi-p">If not, you need to submit to the <a href="http://latitudefrance.diplomatie.gouv.fr/AnnuaireCarto.html" class="external">nearest French consulate of place of residence</a> your application for an extended-stay visa, along with any supporting documents required by the consulate. Supporting documents are generally the following (this list varies from one country to another; you should always contact and consult the relevant consular authority of your place of residence):
            </p>

            <ul class="cosi-ul">
                <li>A valid passport (the length of validity must cover at least the length of the visa requested, the passport or travel document must contain at least two blank pages).
                </li>
                <li>The certificate of residence
                </li>
                <li>The certificate of admission
                </li>
                <li>A flight booking
                </li>
                <li>A insurance certificate (travel insurance)
                </li>
                <li>evidence of sufficient financial resources (France's immigration code does not specify a minimum amount. Prospective students must demonstrate that they possess resources equivalent to the monthly base amounts paid to recipients of French government scholarship grants, about €615. France's consulates have discretion in applying these guidelines).</li>
            </ul>

            <p class="cosi-p">
                Cost of the visa itself may vary depending on your home country, from 50 €  to 200 €.
            </p>
            <p class="text-xs uppercase font-bold">N.B.1.</p>
            <p class="cosi-p">The same process must be undertake and type of visa requested in case you plan to work in France during the work placement to complete the Master Thesis in Semester 4. A 1 year <a href="http://www.campusfrance.org/en/page/long-term-visa-used-residence-permit-vls-ts" class="external">Extended-stay student visa, with residency permit (VLS-TS)</a> is better even if you plan to stay less than six months because it makes you eligible to the housing allowance.</p>
            <p class="text-xs uppercase font-bold">N.B.2.</p>
            <p class="cosi-p">French consulate in Syria has been closed. Syrian nationals must therefore, when possible, consult French consulate in Jordan, Lebanon or Turkey.
            </p>
            <p class="text-xs uppercase font-bold">
                N.B.3.
            </p>
            <p class="cosi-p">
                If you live in an EU country but are not a citizen, you will have to apply for a student visa at the French consulate in the country in which you reside. Even if the CEF procedure is used in your country of origin, you do not have to return there in order to apply for admission to a French institution of higher education.
            </p>
            <p class="cosi-p">
                You can also find information on the <a href="http://ec.europa.eu/immigration/what-do-i-need-before-leaving/france/student_en#" class="external">EU Immigration Portal</a> regarding the visa application process.
            </p>
            
            <h5 class="cosi-title-5 mt-6 mb-1">
                International Office - Incoming mobility
            </h5>
            <p class="cosi-p">
                21 rue Denis Papin - 2nd  floor<br>
                42100 Saint-Etienne<br>
                Open on Mondays, Tuesday, Wednesdays and Thursdays from 8: 30 am to 12:30 am and 01:30 pm to 05:00 pm<br>
                Open on Fridays mornings from 08:30 am to 12:00 am
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                6. Prepare documentation you'll need during your study
            </h4>
            <p class="cosi-p">
                Here is a summary of documents you'll need to provide at some point and should bring with you before departure:
            </p>
            <h5 class="cosi-title-5 mt-6 mb-1">
                Pre-arrival
            </h5>
            <p class="cosi-title-6">
                Letter of commitment
            </p>
            <p class="cosi-p">
                Banking documentation to provide evidence of financial means (will be required by the consulate to issue visa as well)
            </p>
            <p class="cosi-title-6">
                French visa
            </p>
            <p class="cosi-p">             
                Certificate of admission (sent to you by the Consortium) and certificate of residence (sent to you by the Consortium). Consult the French consulate for list of supporting documents needed.
            </p>
            <h5 class="cosi-title-5 mt-6 mb-1">
                Inception week
            </h5>
            <p class="cosi-title-6">
                Administrative registration at University Jean Monnet	
            </p>
            <ul class="cosi-ul">
                <li>registration form (provided by the international office)
                </li>
                <li>
                    1 ID photograph (official guidelines and standards for photograph quality)<br>
                    <a href="http://www.consulfrance-losangeles.org/spip.php?article773" class="external">http://www.consulfrance-losangeles.org/spip.php?article773</a><br>
                    <a href="http://www.diplomatie.gouv.fr/en/IMG/pdf/sample_photos_france.pdf" class="external">http://www.diplomatie.gouv.fr/en/IMG/pdf/sample_photos_france.pdf</a>
                </li>
                <li>
                    certificate of admission (provided by the Consortium)
                </li>
                <li>copy of first pages of the passport</li>
                <li>
                    <a href="http://ec.europa.eu/social/main.jsp?catId=559" class="external">European health insurance card</a> for European student (to be exempted from French health insurance fees)
                </li>
                <li>COSI students (personal insurance certificate from Marsh)</li>
            </ul>

            <p class="cosi-title-6">
                Subscription to French health insurance	
            </p>
            <ul class="cosi-ul">
                <li>passeport1 ID photograph
                </li>
                <li>OFII letter (given by the Consulate when the visa has been issued)
                </li>
                <li>original diploma certificates or certified copies (translation if applicable in English or French)
                </li>
                <li>copy of birth certificate (mother and father's names must appear) (translated in French)</li>
            </ul>

            <p class="cosi-title-6">
                Housing - registration at the residence	
            </p>
            <ul class="cosi-ul">
                <li>In any case: copy of passport and certificate of registration
                </li>
                <li>see <a href="http://master-colourscience.eu/pre-arrival-process/housing-options/" class="external" style="color: red;">this page</a> for details (guarantor, forms, ...)
                </li>
            </ul>

            <p class="cosi-title-6">
                Residence permit
            </p>
            <ul class="cosi-ul">
                <li>copy of birth certificate (mother and father's names must appear) (translated in French if applicable)copy of passport (first pages and French visa)
                </li>
                <li>evidence of financial means (615 € / month of planned stay in France) and/or scholarship certificate
                </li>
                <li>certificate of residence (provided by the Consortium)
                </li>
                <li>3 ID photograph</li>
            </ul>

            <p class="cosi-title-6">
                Residence permit
            </p>
            <ul class="cosi-ul">
                <li>copy of birth certificate (mother and father's names must appear) (translated in French if applicable)copy of passport (first pages and French visa)
                </li>
                <li>evidence of financial means (615 € / month of planned stay in France) and/or scholarship certificate
                </li>
                <li>certificate of residence (provided by the Consortium)
                </li>
                <li>3 ID photograph</li>
            </ul>

            <p class="cosi-title-6">
                Housing - housing allowance	
            </p>
            <ul class="cosi-ul">
                <li>a translated and certified copy of your birth certificate (in French)
                </li>
                <li>IBAN
                </li>
                <li>copy of passport (first pages and French visa)
                </li>
                <li>copy of the residence permit for non-European students</li>
            </ul>

            <p class="cosi-title-6">
                Bank account opening
            </p>
            <ul class="cosi-ul">
                <li>copy of passport (first pages and French visa)
                </li>
                <li>French address details
                </li>
                <li>certificate of residence (provided by the Consortium)
                </li>
                <li>certificate of admission
                </li>
                <li>10 EUR cash (to be transferred in your bank account)</li>
            </ul>

            <h4 class="cosi-title-4 mt-10 mb-4">
                7. Prepare your travel to Saint Etienne
            </h4>
            <p class="cosi-p">
                Once you're in France, you must settle by Monday the 7th of September in the residence you've booked.
            </p>
            <p class="cosi-p">
                Important note: Always carry a copy of your passport and visa at any time when abroad in case of police control.
            </p>
            <h5 class="cosi-title-5 mt-6 mb-1">
                Coming to Saint-Etienne from Paris (“Paris Charles de Gaulle”, CDG)
            </h5>

            <p class="cosi-p">
                Don't forget to bring some cash in Euros (at least 200 € for travel expenses). From <a href="http://www.aeroportsdeparis.fr/en/homepage" class="external">Paris Charles de Gaulle airport</a> (CDG) , you can either:
            </p>

            <ul class="cosi-ul">
                <li>take the subway to the train station “Paris Gare de Lyon” to go directly to Saint Etienne. There are usually 2 or 3 direct journeys from “Paris Gare de Lyon” to  the city of Saint Etienne. It takes 2h45 and cost vary significantly depending on time of departure and date of booking, from € 50 to € 100.</li>
                <li>or directly take a train to Lyon Part-Dieu from Paris Charles de Gaulle airport (there is a train station in the airport). The journey takes 2h and cost vary significantly depending on time of departure and date of booking, from € 50 to € 120. When you're in Lyon Part-Dieu, take another regional train (“TER“) to Saint Etienne (“Saint Etienne Chateaucreux“). There is a train running every 30 minutes, the journey takes 45 minutes and cost around € 12.
                </li>
            </ul>

            <p class="text-xs uppercase font-bold">
                N.B.
            </p>
            <p class="cosi-p">
                Train tickets can be purchased upon arrival directly at the train station by cash or <a href="http://en.voyages-sncf.com/en/" class="external">online</a> (and delivered to your home country). Train tickets are usually available only 3 months before the date of departure. If you book online, don't forget to print the ticket or reference number.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Coming to Saint-Etienne from Lyon (“Lyon Saint Exupéry“, LYS)
            </h5>
            <p class="cosi-p">
                Don't forget to bring some cash in Euros (at least 200 € for travel expenses). From <a href="http://www.lyonaeroports.com/eng" class="external">“Lyon Saint Exupéry” airport</a> (LYS), you must:
            </p>
            <ul class="cosi-ul">
                <li>Then take the <a href="http://www.rhonexpress.fr/boutique/grandpublic/?lang=us" class="external">Rhonexpress train</a> from Lyon airport to the train station “Lyon Part-Dieu“, the journey takes 30 minutes and cost around 15 €.</li>
                <li>When you're in Lyon Part-Dieu, take another regional train (“TER“) to Saint Etienne (“Saint Etienne Chateaucreux“). There is a train running every 30 minutes, the journey takes 45 minutes and cost around 12 €.</li>
            </ul>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Once in Saint Etienne train station
            </h5>
            <p class="cosi-p">
                You can easily go to your residence / city by tramway (a tram station is located in front of the train station and ticket can be purchased at the station).
            </p>

            <p class="cosi-title-6">
                Saint-Etienne Chateaucreux to the residence "Carr'Etude"
            </p>
            <p class="cosi-p">
                Take tramway in direction Bellevue/Solaure or Hopitâl nord/La Terrasse and get off at “place Fourneyron”. Then walk by PLACE FOURNEYRON, then RUE CHANTEGRILLET, then SQUARE DU TEMPS PASSÉ to arrive to 33 ALLÉE CHANTEGRILLET.
            </p>

            <p class="cosi-title-6">
                Saint-Etienne Chateaucreux to the residence '"Le Littré"
            </p>
            <p class="cosi-p">
                Take tramway in direction of T3 Bellevue/Solaure get off at ANATOLE France. Then walk by RUE GAMBETTA, RUE DU ONZE NOVEMBRE, RUE BAR-THÉLEMY RAMIER, RUE ÉMILE LITTRE.
            </p>

            <p class="cosi-title-6">
                Saint-Etienne Chateaucreux to the residence “La Cotonne‟
            </p>
            <p class="cosi-p">
                Take any tramway in direction of Bellevue/Solaure or Hopitâl nord/La Terrasse and get off at “place Fourneyron” , then walk to the bus stop ST ETIENNE - FOURNEYRON , take the bus line N°3, COTONNE-TERRENOIRE in direction of Cotonne.
            </p>

            <p class="cosi-title-6">
                Saint-Etienne Chateaucreux to the residence “La Cotonne‟
            </p>
            <p class="cosi-p">
                Take any tramway in direction of Bellevue/Solaure or Hopitâl nord/La Terrasse and get off at “place Fourneyron” , then walk to the bus stop ST ETIENNE - FOURNEYRON , take the bus line N°3, COTONNE-TERRENOIRE in direction of Cotonne.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Temporary residence
            </h5>

            <p class="cosi-p">
                We recommend two cheap and convenient hotels in Saint-Etienne in case you don't have a room booked:
            </p>
            <ul class="cosi-ul">
                <li><a href="http://www.cis-st-etienne.com/fr/" class="external">Centre international de séjour</a> (from 24,10 euro per night)
                </li>
                <li><a href="http://www.hotel-bb.com/en/hotels/saint-etienne.htm" class="external">Hotel BnB - La Terasse</a> (from 45 EUR per night)
                </li>
                <li><a href="http://www.hotel-lecarnot.fr/" class="external">Hotel Blanc Le Carnot</a> (from 35 EUR per night)
                </li>
                <li><a href="http://www.residhotel.com/st-etienne-centre.html" class="external">Hotel Residhotel</a> (from 19 EUR per night)
                </li>
                <li><a href="http://www.crous-lyon.fr/html/-residence-des-arts-76-.html" class="external">Residence des Arts</a> (from 45 EUR per night)</li>
            </ul>

            <p class="cosi-p">
                In case you plan to arrive later 04.00 pm or during the week-end, you should get in touch with a student who arrived sooner and ask them to get your key for you. Staff usually speak little English, but you'll always find a student ready to help you there. We suggest you to contact each other as soon as you know your precise date of arrival to travel in groups. Students coming early that week might also want to welcome and pick-up students staying at the same residence at Saint-Etienne train station. The administrative coordinator will send you a link to a google board panel to allow you to share that kind of information. Residence des Arts sends the residence access codes before arrival (no further arrangement needed).
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                8. Join the “Induction week”
            </h4>
            <p class="cosi-p">
                From the 4th to the 9th of September 2022.
            </p>

            <!-- <h4 class="cosi-title-4 mt-10 mb-4">
                9. Keep yourself informed on next administrative steps
            </h4> -->
        </div>
    </div>
</main>
