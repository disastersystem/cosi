<svelte:head>
    <title>Norway: prepare your stay - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div class="content-max-width">
            <!-- <h1 class="cosi-title-1">Norwegian University of Science and Technology</h1> -->
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/norway', 'Norway']
            ]} />

            <h1 class="cosi-title-1">Norway - prepare your stay</h1>

            <h2 class="cosi-title-2 mb-4 mt-16">
                Useful links during your stay
            </h2>

            <ul class="cosi-ul">
                <li>
                    <a href="https://www.ntnu.edu/" class="external">
                        Norwegian University of Science and Technology (english portal)
                    </a>
                </li>
            </ul>

            <h2 class="cosi-title-2 mb-4 mt-16">
                Coming to Norway — administrative tasks
            </h2>

            <h4 class="cosi-title-4 mt-10 mb-4">
                1. Get your admission letter from NTNU
            </h4>

            <p class="cosi-p">
                Congratulations! You have been accepted to the COSI program and will receive your letter of admission by email.
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                2. Apply for a student residence permit
            </h4>

            <p class="cosi-p">
                To be able to enter Norway from a country outside the EU, or with non-EU citizenship you will need to apply for a student residence permit.
            </p>

            <p class="cosi-p">
                If you are an EU citizen, you do not need to apply for student residence permit, but will instead have to register for a police appointment within 3 months of arriving in Norway (see step 5 below). You will not be able to open a bank account in Norway when staying less than 6 months.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Non-EU/EEA students
            </h5>

            <p class="cosi-p">
                Go to the UDI website: <a href="https://www.udi.no/en/" class="external">www.udi.no/en/</a>, use their standard country selector to see what documentation you will need in your student permit application. Almost all non-EU/EEA citizens, with a few exceptions, should be able to register an application for a student residence permit online at <a href="https://www.udi.no" class="external">www.udi.no</a>.
            </p>

            <p class="cosi-p">
                You should, however, note that the application is first formally registered when you submit your passport, with the relevant supporting documentation, to the appropriate embassy/consulate.
            </p>

            <p class="cosi-p">
                Applicants who are not permitted to apply online must submit an application form to a Norwegian embassy/consulate.
            </p>

            <p class="cosi-p">
                Important: NTNU does not have the possibility to act as a general reference for your application. You should not list NTNU as a reference in your application.
            </p>

            <p class="cosi-p">
                Your entry visa will be issued with a deadline on it. If you are in some way impacted and you cannot arrive within the deadline, contact NTNU.
                When you have received your entry visa from the Norwegian Directorate of Immigration (UDI) you may book your flights.
                The closest airport to Gjøvik is <a href="https://avinor.no/flyplass/oslo/)" class="external">OSL Gardermoen International Airport</a>. We recommend students book their flight to this airport.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Financing
            </h5>

            <p class="cosi-p">
                All international students who are not citizens of EU/EEA/EFTA countries must be able to document that they have enough funding to live in Norway in order to be granted a student visa. As a Erasmus Mundus awardee, your grant will in most cases cover this funding requirement.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                For Erasmus Mundus Grant awardees
            </h5>

            <p class="cosi-p">
                The Erasmus Mundus grant currently covers the minimum amount stipulated by UDI in order to be granted a visa. The scholarship received from the Erasmus Mundus programme means you do not hand in the same documentation as if a self-financed/regular international student at NTNU. The documentation you will need to provide:
            </p>

            <ul class="cosi-ul">
                <li>Admission letter (which states scholarships amounts)</li>
                <li>Housing guarantee or somewhere to stay: This guarantee can also be found in the admission letter</li>
            </ul>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Self-financed students
            </h5>

            <p class="cosi-p">
                When applying to NTNU, master's applicants who are not citizens of EU/EEA/EFTA countries must provide documentation that they have enough money (at least 123 519 NOK) to live in Norway. This can be documented with:
            </p>

            <ul class="cosi-ul">
                <li>A bank statement showing that you have a minimum of NOK 123 519 in your bank account.</li>
                <li>The bank statement cannot be more than three months old.</li>
                <li>The bank statement can be in any currency.</li>
                <li>All documentation must be in English or come with an English translation.</li>
            </ul>

            <h4 class="cosi-title-4 mt-10 mb-4">
                3. Apply for housing
            </h4>

            <p class="cosi-p">
                You will receive a information email from International Office regarding housing.
            </p>

            <p class="cosi-p">
                As a COSI student you are eligible to apply for student housing at NTNU. NTNU in Gjøvik has housing options at four locations in Gjøvik, provided through the Student Welfare Organization Sit.
            </p>

            <p class="cosi-p">
                You can decide to rent a flat by your own to a private landlord, before or upon arrival. Note that in this case you'll have to deal with the administrative process alone and we won't be able to support you in concluding a contract nor dealing with potential issues arising from this contract.
            </p>

            <p class="cosi-p">
                To be able to apply for a visa to Norway, you will need to show in your application that you have somewhere to live, along with an address in Norway to put in your application.
            </p>

            <p class="cosi-p">
                International Relations at NTNU in Gjøvik supply students information about how to apply for student housing.
            </p>

            <p class="cosi-p">
                Do not book a room before you have received an email with a booking code from International Relations.
            </p>

            <p class="cosi-p">
                More information about booking student housing here: <a href="https://www.ntnu.edu/lifeandhousing/gjovik/housing" class="external">https://www.ntnu.edu/lifeandhousing/gjovik/housing</a>
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Contact international relations
            </h5>

            <p class="cosi-p">
                Gjøvik - Office of International Relations<br>
                Visiting address: Teknologivegen 22, 2815 Gjøvik, Norway, G building, office G104<br>
                Postal address: P.O. box 191, 2802 Gjøvik, Norway
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Contact person COSI, International Office
            </h5>

            <p class="cosi-p">
                Madeleine Brørs Midtgaard, Advisor International Office<br>
                <a href="https://www.ntnu.no/ansatte/madeleine.b.midtgaard" class="external">https://www.ntnu.no/ansatte/madeleine.b.midtgaard</a><br>
                e-mail: <a href="mailto:international@gjovik.ntnu.no">international@gjovik.ntnu.no</a>
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                4. Arrival in Norway
            </h4>

            <p class="cosi-p">
                At arrival in Norway there will be an Immigration check at the airport (Non-EU), please remember to have all necessary documentation from NTNU.
            </p>

            <p class="cosi-p">
                From the airport there are two transport options:
            </p>

            <ul class="cosi-ul">
                <li>Train from Gardermoen to Moelv, bus from Moelv to Gjøvik Skysstasjon</li>
                <li>Train from OSL Gardermoen to Oslo S, Gjøvik train from Oslo S to Gjøvik.</li>
            </ul>

            <p class="cosi-p">
                A tip is to download ticketing app on your phone. <a href="https://entur.no/" class="external">Entur</a> for all travels or <a href="https://www.vy.no/en/app" class="external">VY</a> for train services.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Do you have housing with SiT?
            </h5>

            <p class="cosi-p">
                Check out their FAQ for <a href="https://www.sit.no/en/news/faq-moving-sit" class="external">moving in</a>.
            </p>

            <p class="cosi-p">
                P.S.: SiT student rooms do not provide cutlery or bedding.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Orientation Week
            </h5>

            <p class="cosi-p">
                Please see our website for International Week for more information. <a href="https://www.ntnu.edu/lifeandhousing/gjovik/new-student" class="external">https://www.ntnu.edu/lifeandhousing/gjovik/new-student</a>
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                5. Register at the Police
            </h4>

            <h5 class="cosi-title-5 mt-6 mb-1">
                Non-EU students
            </h5>

            <p class="cosi-p">
                All students with citizenship from outside-EU, staying in Norway for more than three months have to register with the police within 7 days after arrival.
            </p>

            <p class="cosi-p">
                You can book an appointment online on the UDI webpage prior to arrival through the UDI portal. You can also join one of our group appointments during orientation week. Please remember to contact international relations if you would like to join a group appointment. Please contact us well in advance of your trip, as there can be long waiting time for police appointments.
            </p>

            <p class="cosi-p">
                The police station in Gjøvik is located in the town centre:<br>
                Gjøvik Politistasjon, Strandgata 36, 2821 Gjøvik<br>
                Tel.: (+47) 62 53 90 00
            </p>

            <p class="cosi-p">
                To the appointment at the PoIice Station you must bring:
            </p>

            <ul class="cosi-ul">
                <li>Cover letter and receipt of payment</li>
                <li>Letter of confirmation/Letter of admission from the Office of International Relations, NTNU</li>
                <li>Passport (must be valid for the period you intend to stay in Norway)</li>
                <li>Confirmation of financial support</li>
                <li>Housing contract</li>
            </ul>

            <h6 class="cosi-title-6" style="margin-bottom: 6px;">
                Compulsory Health Check: Tuberculosis
            </h6>

            <p class="cosi-p">
                Immigration regulations require that citizens of the countries listed below must be tested for tuberculosis if they are staying more than three months in Norway. The test is free.
            </p>

            <p class="cosi-p">
                When you register at the police, the police authority will forward your information to health authorities. Norwegian health authorities will summon students from relevant countries to the mandatory tuberculosis test.
            </p>

            <p class="cosi-p">
                Your appointment will arrive by post, it is therefore important your address to the Police is correct. If you move after arrival you need to notify the Tax Authorities and Police to make sure you will receive your appointment. Missed appointment is subject to fines.
            </p>

            <p class="cosi-p">
                Citizens who have been staying in these countries will need to take tuberculosis test:
            </p>

            <p class="cosi-p">
                Europe:<br>
                Armenia, Azerbaijan, Bosnia-Hercegovina, Belarus, Estonia, Georgia, Greenland, Kazakhstan, Kosovo, Kyrgyzstan, Latvia, Lithuania, Moldova, Romania, Russia, Tajikistan, Turkmenistan, Ukraine and Uzbekistan.
            </p>

            <p class="cosi-p">
                Other countries:<br>
                Citizens from all countries, except: Australia, Canada, Comoros, Japan, Maldives, Mauritius, New Zealand, Seychelles, Singapore, and the USA must be tested.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">
                EU students
            </h5>

            <p class="cosi-p">
                If you are an EU/EEA citizen staying in Norway for more than three months, you will need to register as a part of the registration requirement scheme for EU/EEA nationals.
            </p>

            <ol class="cosi-ol">
                <li>Fill out your registration at <a href="https://www.udi.no" class="external">www.udi.no</a>. You should do this after arriving in Norway, but before meeting with the police</li>
                <li>
                    Get your registration certificate:<br>
                    Join a NTNU group appointment during orientation week to meet with Immigration at the police station. Please do not book your own appointment if you are planning to join a group appointment. If you are unable to participate in the group appointments, you can book your own appointment at the same time you fill out the online application. Please note that the process of getting your own appointment could take several weeks.
                </li>
                <li>
                    For the appointment at the Police Station, you must remember to bring:
                    <ul class="cosi-ul">
                        <li>NTNU admission letter</li>
                        <li>Passport (must be valid for the period you intend to stay in Norway)</li>
                        <li>European Health Insurance Card (E-111 form) or the E-128 form</li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
</main>
