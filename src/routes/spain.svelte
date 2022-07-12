<svelte:head>
    <title>Spain: prepare your stay - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div class="content-max-width">
            <!-- <h1 class="cosi-title-1">Spain</h1> -->
            <!-- <h1 class="cosi-title-3">University of Granada</h1> -->
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/spain', 'Spain']
            ]} />

            <h1 class="cosi-title-1">Spain - Prepare your stay</h1>

            <h2 class="cosi-title-2 mb-4 mt-16">
                Useful links during your stay
            </h2>

            <ul class="cosi-ul">
                <li>
                    <a href="http://www.ugr.university/" class="external">University of Granada</a>
                </li>
                <li>
                    <a href="http://internacional.ugr.es/pages/perfiles/estudiantes/estudiantes_ugr?lang=en" class="external">International Relations and University Development Cooperation Office</a>
                </li>
                <li>
                    <a href="http://internacional.ugr.es/pages/guias-y-folletos/guiaestudianteinternacional20102011" class="external">The International Student Guide</a>
                </li>
                <li>
                    <a href="http://www.turgranada.es/en/" class="external">The province of Granada</a>
                </li>
            </ul>

            <h2 class="cosi-title-2 mb-4 mt-16">
                Coming to Spain — administrative tasks
            </h2>

            <h4 class="cosi-title-4 mt-10 mb-4">
                1. Read about available housing options and banking services
            </h4>

            <ul class="cosi-ul">
                <li>The best way to find info on where to live in Granada is the COSI alumni network. Connect with them @ Facebook.
                </li>
                <li>You can take part in the <a href="http://internacional.ugr.es/pages/perfiles/estudiantes/nuevas-iniciativas-para-estudiantes-internacionales" class="external">Buddy Programme</a> (Programa Mentor) for International Students at the UGR to find support from the very beginning of your exchange period from one of the UGR students, who can help you throughout your stay in Granada.
                </li>
                <li>The <a href="http://estudiantes.ugr.es/alojamiento" class="external">UGR's Accomodation Service</a> provides information and assistance concerning all the options open to students searching for somewhere to live during their stay (shared flats, with a family, halls of residence,…)
                </li>
                <li>A very useful website offering <a href="http://estudiantes.ugr.es/alojamiento" class="external">shared student's (fully-equipped) apartments</a>  services in Granada only!
                </li>
                <li>The well-know <a href="https://www.airbnb.com/" class="external">airbnb</a>.
                </li>
                <li>www.erasmate.com focuses on (international) student-to-student housing for short term periods and can be used for free by students.</li>
                <li>The <a href="http://www.resa.es/eng/Residences/Emperador-Carlos-V" class="external">Emperador Carlos V Residence Hall</a> can be a good alternative.</li>
                <li>Eurocongres offers you different shared apartment or university residence in the center of Granada at a walking distance to the COSI venue.
                </li>
                <li><a href="http://www.resa.es/eng/Residences/Emperador-Carlos-V" class="external">ABILILLA Apartments</a> offers you fully equipped apartments in downtown Granada. The apartments are located in a typical “corrala” and very close to the city center and to the Center of Modern Languages (where you will receive Spanish classes).</li>
            </ul>

            <p class="cosi-p font-bold mt-6" style="margin-bottom: 6px;">
                Tips
            </p>

            <p class="cosi-p">
                It might not be a good idea to rent an apartment without seeing it in advance. It is better to see it, know what appliances it has, check if the area is the most convenient for you, how close is from the COSI venue, from the down-town, know who is the landlord, which other room-mates are in the apartment, if there are constructions nearby, if it is an apartment with a lot of natural light or just the contrary, if they are old flats without central heating, if it has a nice balcony or a terrace, if it has wireless, etc. All these aspects have to be checked before reaching an agreement.
            </p>

            <p class="cosi-p">
                The advice and experience of students from past cohorts is very very important. All of them succeeded in finding the appropriate accommodation and they have been happy during their whole semester. And 90% of them found the accommodation once they arrived to Granada.
            </p>

            <p class="cosi-p">
                Granada is full of apartments for students and sharing an apartment with others students (from COSI or not) is the best way to get integrated in the great university life of our city. Usually one person rents the flat and searches for the flatmates.
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                2. Book a flight / prepare travel
            </h4>

            <h5 class="cosi-title-5 mt-6 mb-1">
                By Plane direct to Granada
            </h5>

            <p class="cosi-p">
                Direct flight to Granada: Federico García Lorca Granada - Jaén Airport - has only a connection with several major Spanish cities, because of this it is recommended to first fly to Madrid, Barcelona or Palma de Mallorca and then book a direct flight to Granada. Check your options below:
            </p>

            <ul class="cosi-ul">
                <li>Madrid: <a href="http://www.iberia.com/fr/?gclid=COCGht7guMoCFUJmGwodTuQA1A" class="external">Ibera</a>
                </li>
                <li>Barcelona: <a href="http://www.vueling.com/en" class="external">Vueling</a>
                </li>
                <li>Palma de Mallorca: <a href="http://www.opodo.fr/vol/compagnie-aerienne/UX/air-europa/?MPortal=google&mktportal=google&CMP=fr-kw-gg-fl5-232107&gclid=CJqMm-3guMoCFYu4GwodM-4BWg" class="external">Air Europa</a></li>
            </ul>

            <p class="cosi-p">Check also <a href="http://skyscanner.com/" class="external">Skyscanner</a> to compare flight options to several cities.
            </p>
            <p class="cosi-p">The airport of Granada is 16 kilometres away from the city.  Taking a taxi is the fastest option to get you to Granada. The ride will cost you around 27€.
            </p>
            <p class="cosi-p">You can also take the bus to the city centre. The ticket costs 3€ and the ride takes approximately 40 minutes.</p>
            <p class="cosi-p"><a href="http://www.aena.es/csee/Satellite/Aeropuerto-Federico-Garcia-Lorca-Granada-Jaen/en/Page/1237554498674/">Bus info here.</a></p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                By Plane direct to Malaga
            </h5>

            <p class="cosi-p">This is the nearest international airport and It's 90 minutes away from Granada.
            </p>

            <p class="cosi-title-6">
                Bus (from Malaga Airport)
            </p>

            <p class="cosi-p">
                You can get a bus from Malaga airport to Granada bus station. This route has several stops along the way and takes 2 hours and 30 minutes. The price is around 11€. <a href="https://www.alsa.es/en/" class="external">Bus info here</a>.
            </p>

            <p class="cosi-title-6">
                By Train
            </p>

            <p class="cosi-p">
                A high speed train -called AVE in Spain- will connect in 2016 Granada to Madrid in 2h45min.
            </p>

            <p class="cosi-title-6">
                By Bus
            </p>

            <p class="cosi-p">
                For international tickets, you should visit <a href="http://www.eurolines.com/" class="external">Eurolines</a>.
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                3. Apply for a visa
            </h4>

            <p class="cosi-p">
                EU students, and non-EU students are not required to apply for a visa or residence permit. However there are some recommendations and exception.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                European citizens
            </h5>

            <p class="cosi-p">
                Students who are citizens of the European Union, Iceland, Liechtenstein, Norway or Switzerland are not required to get a visa for Spain since they already have the right to residency, nor are they required to apply for a residence permit. COSI students citizens of EU member country, from countries belonging to the EEA Agreement (Norway, Iceland and Liechtenstein) or from the Swiss Confederation are however required to register, once in Spain, to Central Register of Foreign Citizens (Registro Central de Extranjeros) at the Main Office for Foreign Residents (Oficina de Extranjeros). Application form, supporting documentation and guidelies in english are available <a href="http://internacional.ugr.es/pages/movilidad/estudiantes/entrantes/residenciainspain?lang=en#__doku_international_students_registration_at_the_foreign_office_in_granadanon-eu_students_from_non-eu_universities" class="external">here</a>. The “OFFICIAL ERASMUS STUDENT CREDENTIAL” will be issued by UGR in case certificates of admission issued by UJM and URG are not sufficient. You can provide a copy of the <a href="http://ec.europa.eu/social/main.jsp?catId=559" class="external">European health insurance card</a> if you have one (recommend in addition to COSI health insurance) or the insurance certificate that has been sent to you by our insurance service provider Marsh.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Non-European citizens
            </h5>

            <p class="cosi-p">
                Non-European COSI students may also enter Spain without the need of a visa, because they are registered in UJM, a European university., although it is recommended to apply for an entry visa. If COSI students didn’t apply to an entry visa, they should, immediately upon arrival, apply to be included in the Central Foreign Persons Register, following these instructions (link broken). Erasmus+ EMJMD and Consortium scholarships can serve as Accreditation of economic means, amount granted being mentioned in UGR’s certificate of admission (/invitation letters).
            </p>

            <p class="cosi-p">
                Non-EU citizens are however advised  to obtain a long term visa, notably if you plan to stay more than 6 months in Spain (for an internship during the summer 2016) for instance). You must in that case apply for a Foreigner Identity Card (TIE) within 30 days of having entered Spain. Additional info are available here (link broken).
            </p>

            <p class="cosi-p">
                Despite the enlargement of the EU, the Schengen zone and general harmonization of regulations regarding movement within the EU, it is important to understand that most visa issues are under competence of national states, and therefore there are no single regulations and requirements for all European countries. Visas are managed by the Spanish Ministerio de Asuntos Exteriores y Cooperación (Ministry of Foreign Affairs and Cooperation) through its consulates and embassies around the world. You must apply for and obtain your visa through the Spanish consulate nearest to your residence before you travel. Personal appearance at the Spanish Consulate is required in order to submit the documentation. Since visas are never issued in Spain, you must apply for it before you leave your country of residency. Do not attempt to enter Spain without a visa if you need one. There is no emergency procedure, your embassy in Spain can't help and you will probably be refused entry.
            </p>

            <p class="cosi-p">
                In your case, you need to plan a trip to the Spanish consulate in Villeurbanne (Lyon):<br>
                1, Rue Louis Guérin<br>
                69100 Villeurbanne<br>

                04 78 89 64 15<br>
                <a href="mailto:cog.lyon@maec.es" class="external">cog.lyon@maec.es</a><br>
            </p>
            <p class="cosi-p">
                Here is a map with direction from the train station "Lyon Part Dieu":
            </p>
            <iframe title="Map with direction from the train station Lyon Part Dieu" width="766" height="720" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m29!1m12!1m3!1d11131.999147260954!2d4.868907386094228!3d45.77119452176874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m14!1i0!3e2!4m5!1s0x47f4ea62e23824a5:0x45b1b59a949df8a6!2sLyon-Part-Dieu,%20Lyon!3m2!1d45.760574!2d4.859393!4m5!1s0x47f4ea96f40e9689:0x286a2e6b63f74067!2sConsulat%20Général%20d'Espagne,%201%20Rue%20Louis%20Guérin,%2069100%20Villeurbanne!3m2!1d45.779142!2d4.860618!5e0!3m2!1sen!2sfr!4v1423499192649"></iframe>

            <p class="cosi-p mt-4">
                No appointment is necessary, but opening hours are Monday to Friday, from 8:30 AM to 1:00 PM. We advise you to make a call before leaving to make sure the consulate is opened before leaving Saint Etienne.
            </p>
            <p class="cosi-p">Generally, you should apply for the visa at least two months before the expected date of departure. You must first have a valid passport with at least three months until expiry in order to apply, so be sure to allow adequate time to obtain or renew both the passport and get the visa application processed. Don't leave this to the last minute or you put your travel plans at risk.</p>
            <p class="cosi-p">For the application you must contact the consulate that has jurisdiction over your country of permanent residence to find out which procedure applies, i.e. the General Consulate in Lyon. Only they can give you accurate and up-to-date information on the exact type of visa you need to apply for, the process and documentation required. You can contact them at cog.lyon@maec.es to be ready before visiting them.
            </p>
            <p class="cosi-p">For information only, documents usually required for the student visa are (this should be confirmed by the Consulate previous to your request):</p>
            
            <ul class="cosi-ul">
                <li>Certificate of admission from the COSI consortium</li>
                <li>Passport (validity covering at least your stay in Spain) = original + 1 hard copy, your passport will not be kept by the Spanish Consulate)</li>
                <li>French student visa with French residence permit (OFFI sticker on your French visa) = original + 1 hard copy
                </li>
                <li>University Jean Monnet student card: original + 1 hard copy</li>
                <li>Public or private health insurance (the insurance company must be  authorized to operate in Spain
                </li>
                <li>A medical certificate (of less than three months) stating that you are fit and healthy and that you do have any contagious diseases + 1 photocopy (in case the OFII medical certificate is not accepted, we can ask the doctor base at University Jean Monnet to produce a new one).
                </li>
                <li>Your SMERRA “ Attestation d’affiliation à la sécurité sociale” + your CEAM card (Carte Européenne  d’Assurance Maladie) or the replacement certificate of the card + 1 photocopy.
                </li>
                <li>Two Forms EX00 filled and signed. You can download those forms here in French or English.
                </li>
                <li>Bank account statements (yours or your parent’s), payroll sheets, or any other documents to prove you have at least 531,52 €/month available during your stay in Spain. In case your a EMJMD schoarlishp holder, your admission letter / student agreement might help you to justify future source of income
                </li>
                <li>An extract of criminal record (“bulletin 3 de casier judiciaire”) if your stay in Spain is longer than 6 months. You can request (for free) such a record online (click on “Commencer la procédure”), here for students born in Franceand there for students (including French nationals) not born in France. The record will be delivered to you by mail.
                </li>
            </ul>

            <p class="cosi-p">
                In addition, you should bring:
            </p>

            <ul class="cosi-ul">
                <li>60 EUR in cash (non-refundable fees)</li>
                <li>1 passports photo
                </li>
                <li>Upon arrival in university of Granada, the Local Academic Coordinator Prof. Juan Luis Nieves will provide you guidance on what to do to obtain your residence permit.</li>
            </ul>

            <p class="cosi-p">
                For the temporary residence permit for non EU students you need to provide the following documents:
            </p>

            <ul class="cosi-ul">
                <li>Valid passport.
                </li>
                <li>Residence visa in force.
                </li>
                <li>Certificate of criminal record* (that is, the police clearance certificate) issued by the authorities of the foreigner’s home country.
                </li>
                <li>Some passport-size photographs.
                </li>
                <li>Medical certificate* (certificado médico)
                </li>
                <li>Proof of financial income to support you Turing the period of residence in Spain, such as pensions, work salaries… (Grant letter)
                </li>
                <li>Proof of health assistance
                </li>
            </ul>

            <p class="cosi-p">
                *NOTE: The criminal record certificate and the medical certificate must be originals. Both documents were submitted during your application to get your Spanish Visa and you should have them back when you received your Visa (So those documents must be originals).
            </p>

            <p class="cosi-p">
                In Granada the student residence permit application is processed at the main Foreign Office at the Police Station located in Calle San Agapito 2.
            </p>

            <p class="cosi-p text-sm uppercase font-bold">
                N.B.1
            </p>

            <p class="cosi-p">
                Rules for visa change often. While we'll do our best to provide any guidance and supporting documentation you will need, undertaking in a timely fashion immigration procedures are ultimately your sole responsibility. Keep the administrative coordinator update of any issues face and help us to maintain this website information accurate and up to date by sending your feedback.
            </p>

            <p class="cosi-p text-sm uppercase font-bold">
                N.B.2
            </p>

            <p class="cosi-p">
                If you need a medical certificate, please ask your administrative coordinator to book a group appointment at the Médecine Préventive Universitaire (Tréfilerie campus, 10, Rue Tréfilerie). You'll need to bring your vaccination certificate and OFII medical certificate).
            </p>

            <p class="cosi-p">
                <span class="font-bold">Can my family come with me if I have a study visa?</span> Yes. The family (spouse, common-law partner, and children under 18 or those with a disability who are not objectively able to provide for their own needs) of a study visa holder or applicant may apply for a visa to enter and stay in Spain for the same duration as the main applicant (student) visa holder.
            </p>

            <p class="cosi-p">
                In case of doubt, please contact Ms Sara Horcas: <a href="mailto:intlerasmus@ugr.es" class="external">intlerasmus at ugr.es</a>, <a href="mailto:intlmobility@ugr.es" class="external">intlmobility at ugr.es</a>, <a href="mailto:intlerasmusmundus@ugr.es" class="external">intlerasmusmundus at ugr.es</a> (copy your administrative coordinator).
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                4. Prepare documentation you'll need during your study
            </h4>

            <p class="cosi-p">
                You will be enrolled at the University of Granada through the School for Postgraduate Studies. Local Academic Coordinator at University of Granada, Prof. Juan Luis Nieves will arrange a meeting upon arrival.
            </p>

            <p class="cosi-p">
                For the enrollment at the University of Granada you need to provide the School for Postgraduate Studies with the following documentation:
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                For Spanish students:
            </h5>

            <ul class="cosi-ul">
                <li>Copy of your Identity Card or Passport</li>
                <li>Certified copy of your Bachelor’s degree (or equivalent)</li>
                <li>Photograph</li>
            </ul>

            <h5 class="cosi-title-5 mt-6 mb-1">
                For non-Spanish students:
            </h5>

            <ul class="cosi-ul">
                <li>Copy of your passport (or identity card in case of EU students)
                    (Important: It is advisable to always provide us with the passport unless you are a Spanish National, but not essential; EU identity cards will be accepted as long as they provide us with the main information generally stated on the passport: date and place of birth, sex, place and date of issue, date of expiry, etc.)</li>
                <li>Certified copy of your Bachelor’s Degree (B.Sc. diploma or equivalent, the same one as the one produced during the application). This bachelor degree certificate has to be attested by the Spanish Embassy or by the Foreign Ministry of the Home Country.</li>
                <li>Certified official translation of your Bachelor’s Degree (B.Sc. diploma or equivalent) in case your official Bachelor’s Degree is not in Spanish, Italian, French, Portuguese or English. This bachelor degree certificate has to be attested by the Spanish Embassy or the Embassy of your country in Spain (for this you may need an attestation of the Foreign Ministry of your home country).
                </li>
                <li>Certified copy of your transcripts (academic records) and an official translation in case your transcripts are not in Spanish, Italian, French, Portuguese or English.
                </li>
                <li>Photograph.
                </li>
                <li>Letters of acceptance on the COSI Master (general one + the one from your Semester one destination)
                </li>
                <li>Certificate and list from the EACEA confirming the Grant if applicable
                </li>
                <li>Proof of insurance</li>
            </ul>

            <p class="text-xs uppercase font-bold">
                N.B.1
            </p>

            <p class="cosi-p">
                If the non-Spanish student comes from a country that has signed “The Hague Accords”, then all the diplomas have to carry the corresponding “Apostille of The Hague Accords”. If the non-Spanish student comes from a country that has NOT signed “The Hague Accords”, then all the diplomas have to carry the seal (or stamp) of the Spanish embassy.
            </p>

            <p class="text-xs uppercase font-bold">
                N.B.2
            </p>

            <p class="cosi-p">
                It is preferable to have all official translations done at your Spanish consulate or embassy prior to coming to Europe. Another option is to have all the documents translated here in Spain.
            </p>

            <p class="text-xs uppercase font-bold">
                N.B.3
            </p>

            <p class="cosi-p">
                <a href="http://www.hcch.net/index_en.php?act=states.listing" class="external">List of countries that have signed the "The Hague Accords"</a>
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                5. Join the “Induction week”
            </h4>

            <h4 class="cosi-title-4 mt-10 mb-4">
                6. Registration for diploma
            </h4>

            <p class="cosi-p">
                To obtain the COSI Master Degree at the University of Granada the Spanish Government demands the same documentation required for the enrolment, otherwise the university will ultimately not be able to issue the Master Degree Title
            </p>

            <p class="cosi-p">
                See required documentation under step 4 "Prepare documentation you'll need during your study".
            </p>
        </div>
    </div>
</main>
