<svelte:head>
    <title>Finland: prepare your stay - COSI</title>
    <meta name="description" content="How to get ready on time to go to the University of Eastern Finland, Finland, Joennsu.">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center px-6">
        <div class="content-max-width mt-40 ml-0 xl:ml-20 2xl:ml-60">
            <!-- <h1 class="cosi-title-1">Finland</h1> -->
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/finland', 'Finland']
            ]} />

            <h1 class="cosi-title-1">
                Finland - Prepare your stay
                <span id="useful-links"></span>
            </h1>
            
            <h2 class="cosi-title-2 mb-4 mt-16">
                Useful links during your stay
            </h2>
            
            <ul class="cosi-ul">
                <li>
                    <a href="https://kamu.uef.fi/en/" target="_blank" class="cosi-new-tab external">Kamu: instructions, tools and links to various services for students</a>
                </li>
                <li>
                    <a href="http://www.facebook.com/itasuomenyliopisto.UEF" target="_blank" class="cosi-new-tab external">UEF Facebook</a>
                </li>
            </ul>

            <h2 class="cosi-title-2 mb-4 mt-16">
                Coming to Finland — administrative tasks
                <span id="admission-letter"></span>
            </h2>

            <h4 class="cosi-title-4 mt-10 mb-4">
                1. Get your admission letter from UEF
            </h4>

            <p class="cosi-p">
                After your mobility choice have been validated by the COSI consortium, you will receive an admission letter from University of Eastern Finland. You will need the letter to apply for a residence permit. The study place needs to be confirmed in the Studyinfo service, and you will receive a link by email to do this.
                <span id="residence-permit"></span>
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                2. Apply to a Finnish student residence permit
            </h4>

            <h5 class="cosi-title-5 mt-6 mb-1">Non-EU students</h5>
            <p class="cosi-p">
                All non-EU students should have Finnish student residence permit already before coming to Finland (<a href="https://migri.fi/en/residence-permit-application-for-studies" target="_blank" class="cosi-new-tab external">Residence permit application for studies</a>). You can start the application process online, but please visit the Finnish Embassy very soon after having the admission letter. Only then they will start processing the application, and also take fingerprints for biometric residence permit card. If you wait until later in summer, you might not have the permit by September.
            </p>

            <h5 class="cosi-title-5 mt-6 mb-1">EU students</h5>
            <p class="cosi-p">
                If you have a Residence Permit in an EU country and the permit is valid throughout the 3rd semester, you can make a <a href="https://migri.fi/en/mobility-notification-to-finland" target="_blank" class="cosi-new-tab external">Mobility notification to Finland</a>. In that case you don't need a residence permit for Finland. Please check with the coordinators if your current residence permit will allow mobility to Finland.
                <span id="housing"></span>
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                3. Apply for housing
            </h4>

            <p class="cosi-p">
                The best option for student housing is the student housing company <a href="http://www.joensuunelli.fi/en/" target="_blank" class="cosi-new-tab external">"Joensuun Elli"</a>. You can see all information needed in their website. There you can also find an online application form. We recommend you to apply for housing as soon as you receive the admission letter. Please state in your housing application, that you are an Erasmus+ EMJMD COSI student. This might make your chances of getting a furnished room better. Otherwise, they will offer you an unfurnished room by default. All flats of “Joensuun Elli” are within 5 kilometers from the city center and university. They are connected to the university by local buses and biking routes.
            </p>

            <p class="cosi-p">
                Please note, that the housing situation in Joensuu has been difficult in the last few years. You should accept the housing offer as soon as you receive it, even if it's not your number one choice of location or type. Otherwise there is a risk that you will not get a new offer for housing. Your lease will always begin in the beginning of a month.
                <span id="student-tutors"></span>
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                4. Student tutors
            </h4>

            <p class="cosi-p">
                All new students will have a student tutor. They will contact you in late summer, and come to meet you at the airport/train station. If possible, they will get keys for your flats beforehand. The tutors will inform you about possibility to rent the survival package, which contain some kitchen utensils etc.
                <span id="semester"></span>
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                5. The semester
            </h4>

            <p class="cosi-p">
                You should arrive at Joensuu latest in the beginning of September. You will need to register either online during the summer months, or at the university in person when you arrive.
            </p>

            <p class="cosi-p">
                <a href="https://kamu.uef.fi/en/student-book/registration-for-new-students/" target="_blank" class="cosi-new-tab external">Registration instructions for new international Master's degree students</a>
            </p>

            <p class="cosi-p">
                As you will be degree students at the UEF, you will need to pay the student union membership fee. It is 35,50 EUR for one semester, and with that you will get student lunch with 2 - 2,5 euros and can join the student union activities, sports and trips. This fee should be paid before registering.
            </p>

            <p class="cosi-p">
                We strongly recommend to join the international student orientation on first week of September. All courses of your 3rd semester will end by December 17, but you are welcome to stay in Joensuu until you move to your semester 4 destination in January.
            </p>
        </div>

        <div
            class="table-of-contents self-start mt-40 ml-10 pt-12 pl-12 pr-10 mr-10 sticky top-10 hidden xl:block"
            style="width: 350px;"
        >
            <p class="cosi-title-5 mb-4">Table of Contents</p>
            <ul class="cosi-ul" style="list-style: none; border-left: 1px solid #ddd;">
                <li>
                    <a class="external text-sm" href="#useful-links">Useful links during stay</a>
                </li>
                <li>
                    <a class="external text-sm" href="#admission-letter">Admission letter</a>
                </li>
                <li><a class="external text-sm" href="#residence-permit">Student residence permit</a></li>
                <li><a class="external text-sm" href="#housing">Housing</a></li>
                <li><a class="external text-sm" href="#student-tutors">Student tutors</a></li>
                <li><a class="external text-sm" href="#semester">The semester</a></li>
            </ul>
        </div>
    </div>
</main>
