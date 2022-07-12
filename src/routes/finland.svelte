<svelte:head>
    <title>Finland: prepare your stay - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div class="content-max-width">
            <!-- <h1 class="cosi-title-1">Finland</h1> -->
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/finland', 'Finland']
            ]} />

            <h1 class="cosi-title-1">
                Finland - Prepare your stay
            </h1>
            
            <h2 class="cosi-title-2 mb-4 mt-16">
                Useful links during your stay
            </h2>
            
            <ul class="cosi-ul">
                <li>
                    <a href="http://www.uef.fi/en/studies/" class="external">http://www.uef.fi/en/studies/</a>
                </li>
            </ul>

            <h2 class="cosi-title-2 mb-4 mt-16">
                Coming to Finland — administrative tasks
            </h2>

            <h4 class="cosi-title-4 mt-10 mb-4">
                1. Get your admission letter from UEF
            </h4>

            <p class="cosi-p">
                After your mobility choice have been validated by the COSI consortium, you will receive an admission letter from University of Eastern Finland. You will need the letter to apply for a residence permit. The study place needs to be confirmed in the Studyinfo service, and you will receive a link by email to do this.
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                2. Apply to a Finnish student residence permit
            </h4>

            <p class="cosi-p">
                All non-EU students should have Finnish student residence permit already before coming to Finland (<a href="https://migri.fi/en/residence-permit-application-for-studies" class="external">Residence permit application for studies</a>). You can start the application process online, but please visit the Finnish Embassy very soon after having the admission letter. Only then they will start processing the application, and also take fingerprints for biometric residence permit card. If you wait until later in summer, you might not have the permit by September.
            </p>

            <p class="cosi-p">
                If you have a Residence Permit in an EU country and the permit is valid throughout the 3rd semester, you can make a Mobility notification. In that case you don't need a residence permit for Finland. Please check with the coordinators if your current residence permit will allow mobility to Finland.
            </p>

            <p class="cosi-p">
                <a href="https://migri.fi/en/mobility-notification-to-finland" class="external">Mobility notification to Finland</a>
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                3. Apply for housing
            </h4>

            <p class="cosi-p">
                The best option for student housing is the student housing company <a href="http://www.joensuunelli.fi/en/" class="external">"Joensuun Elli"</a>. You can see all information needed in their website. There you can also find an online application form. We recommend you to apply for housing as soon as you receive the admission letter. Please state in your housing application, that you are an Erasmus+ EMJMD COSI student. This might make your chances of getting a furnished room better. Otherwise, they will offer you an unfurnished room by default. All flats of “Joensuun Elli” are within 5 kilometers from the city center and university. They are connected to the university by local buses and biking routes.
            </p>

            <p class="cosi-p">
                Please note, that the housing situation in Joensuu has been difficult in the last few years. You should accept the housing offer as soon as you receive it, even if it's not your number one choice of location or type. Otherwise there is a risk that you will not get a new offer for housing. Your lease will always begin in the beginning of a month.
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                4. Student tutors
            </h4>

            <p class="cosi-p">
                All new students will have a student tutor. They will contact you in late summer, and come to meet you at the airport/train station. If possible, they will get keys for your flats beforehand. The tutors will inform you about possibility to rent the survival package, which contain some kitchen utensils etc.
            </p>

            <h4 class="cosi-title-4 mt-10 mb-4">
                5. The semester
            </h4>

            <p class="cosi-p">
                You should arrive at Joensuu latest in the beginning of September. You will need to register either online during the summer months, or at the university in person when you arrive.
            </p>

            <p class="cosi-p">
                <a href="https://kamu.uef.fi/en/student-book/registration-for-new-students/" class="external">Registration instructions for new international Master's degree students</a>
            </p>

            <p class="cosi-p">
                As you will be degree students at the UEF, you will need to pay the student union membership fee. It is 35,50 EUR for one semester, and with that you will get student lunch with 2 - 2,5 euros and can join the student union activities, sports and trips. This fee should be paid before registering.
            </p>

            <p class="cosi-p">
                We strongly recommend to join the international student orientation on first week of September. All courses of your 3rd semester will end by December 17, but you are welcome to stay in Joensuu until you move to your semester 4 destination in January.
            </p>

            <p class="cosi-p mt-12">
                <a href="http://www.facebook.com/itasuomenyliopisto.UEF" class="external">UEF Facebook</a>
            </p>
        </div>
    </div>
</main>
