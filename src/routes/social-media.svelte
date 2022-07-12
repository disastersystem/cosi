<svelte:head>
    <title>Social media - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/social-media', 'Social media']
            ]} />

            <h1 class="cosi-title-1">Social media</h1>

            <h2 class="cosi-headline">
                Stay connected to one of the largest community in color science.
            </h2>

            <p class="cosi-p">
                <a href="https://www.facebook.com/groups/21733014280/" class="external">Master CIMET Erasmus Mundus Facebook group</a> is the CIMET / COSI students and alumni network, self-moderated. Here is the place to connect with future, current and past students!
            </p>
            <p class="cosi-p">
                Find the <a href="https://www.facebook.com/groups/MyCOSI/" class="external">Master COSI Facebook group</a> is here.
            </p>
            <p class="cosi-p">
                The <a href="https://www.linkedin.com/groups/2726905/" class="external">European Master Degrees in Color Science LinkedIn group</a> brings together our programmes' students, alumni, faculty, project teams, academic and industrial partners and colour science professionals.
            </p>
            <p class="cosi-p">
                We encourage you, as a COSI student, to join the group to connect with peers, potential employers and be informed of what's new in our Programmes. This group is moderated by the Consortium; we want it professional and focused on the industry's trends and development, job opportunities and professional networking. Do not hesitate to contribute.
            </p>

            <h2 class="cosi-title-2 mt-10 mb-4">
                Guidelines to add your COSI degree to your LinkedIn profile
            </h2>
            <p class="cosi-p">
                To contribute to raising the international profile of your COSI Master Degree, it is important that, as an alumni, you follow those guidelines to increase the visibility of your Master degree through LinkedIn. We believe also that it is crucial that alumni acknowledged correctly the Higher Education Institutions that have worked toward delivering a high-value Master Degree. This will ultimately help you in your career path by adding value to your academic background.
            </p>
            <p class="cosi-p">
                <span class="font-bold">School</span>: European Consortium in Colour Science: Universty Jean Monnet (France), University of Granada (Spain), University of Eastern Finland (Finland) & Gjøvik University College (Norway).
            </p>
            <p class="cosi-p">
                <span class="font-bold">Dates attended</span>: please specify the full 2-years of the programme
            </p>
            <p class="cosi-p">
                <span class="font-bold">Degree/list</span>: Master's Degree
            </p>
            <p class="cosi-p">
                <span class="font-bold">Degree/field</span>: COSI / COlour in Science and Industry /
            </p>
            <p class="cosi-p">
                <span class="font-bold">Field of study</span>: Engineering Physics/Applied Physics, Computer Science
            </p>
            <p class="cosi-p">
                <span class="font-bold">Description</span>: COSI / COlour in Science and Industry / is a two-year  (120 ECTS)   Erasmus+ Joint Master Degree, aiming to train the next generation of highly-skilled industrial experts in applied colour science, in various cutting-edge industries (photonics, optics, spectral imaging, multimedia technologies, computer graphics and vision) in a diverse range of sectors (including multimedia, health care, cosmetic, automotive, food-processing) bridging a talent gap in the industry where colour experts are in high demand.  The 2 area of focus are spectral technologies and applied colour imaging.
            </p>
            <p class="cosi-p">
                COSI is brought to you by a world leading university-business cooperation of 4 European universities (University Jean Monnet, University of Granada, University of Eastern Finland and Gjovik University College), 5 Asian universities and 15 industrial leaders across the globe.
            </p>

            <h3 class="cosi-title-3 mb-4 mt-12">
                Media
            </h3>
            <img src="linkedin_media.png" alt="">

            <p class="cosi-p mt-4 mb-12">
                Please add a link to url (this will automatically add a picture and link to the CIMET / COSI website).
            </p>
            <img src="ema_logo.png" alt="">

            <p class="cosi-p">
                Association for all students and graduates of Erasmus Mundus Master and Doctoral Programmes. Over 15 000 bright international students took part in the Erasmus Mundus programme already. Almost 9000 of them are members of EMA Association!
            </p>
        </div>
    </div>
</main>
