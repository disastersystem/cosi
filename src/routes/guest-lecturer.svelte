<svelte:head>
    <title>Be our guest lecturer - COSI</title>
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
                ['/guest-lecturer', 'Be our guest lecturer']
            ]} />

            <h1 class="cosi-title-1">Be our guest lecturer</h1>
            <p class="cosi-headline">
                Are you a color expert? Make an impact by joining the consortium faculty and get the unique opportunity to meet our students, the color leaders of tomorrow, and share knowledge and good practices with the largest color science community.
            </p>
            <p class="cosi-p">
                The consortium offers each year guest lecturer's funding opportunity with competitive remuneration. Travel and accommodation costs of the visiting scholar are funded by the COSI consortium.
            </p>

            <h3 class="cosi-title-2 mt-12 mb-6">
                Eligibility criteria
            </h3>
            <p class="cosi-p">
                Applicants must hold citizenship of an Erasmus+ Programme OR Partner countries (<a href="https://erasmus-plus.ec.europa.eu/programme-guide/part-a/eligible-countries" class="external">lists of eligible countries</a>)
            </p>

            <h2 class="cosi-title-2 mt-12 mb-6">
                Selection criteria
            </h2>
            
            <h3 class="cosi-title-5 mb-4">
                Applicants must either:
            </h3>
            <ul class="cosi-ul">
                <li>hold a PhD (or be near completion of one)</li>
                <li>OR a substantial track-record in the industry</li>
                <li>AND be able to demonstrate their ability to teach at a high level.</li>
            </ul>
            <p class="cosi-p">
                We equally welcome professors from higher education institutions as well as practionners from the private sector. Academic / professional profile is the main criteria that will be used to assess applications.
            </p>

            <h2 class="cosi-title-2 mt-12 mb-6">
                How to apply
            </h2>
            <p class="cosi-p">
                To apply, please send us "mscosi@studier.ntnu.no" the following documents in .pdf:
            </p>
            <ul class="cosi-ul">
                <li>
                    <div class="mb-2">A CV, including</div>
                    <ul class="cosi-ul">
                        <li>full contact information</li>
                        <li>a short professional profile</li>
                        <li>current employment status</li>
                        <li>academic and professional background (positions and projects)</li>
                        <li>teaching track-record and professional references</li>
                    </ul>
                </li>
                <li>A short (no more than 600 words) cover letter laying out what added-value your course proposal could bring to the programme, and notably with respect to student-centered teaching/lecturing, research activities and academic/professional networking</li>
                <li>
                    <div class="mb-2">A course proposal, including:</div>
                    <ul class="cosi-ul">
                        <li>Master programme name</li>
                        <li>course title</li>
                        <li>learning outcomes (prerequisites, learning objectives and how these objectives fits into the sequence of the COSI programme)</li>
                        <li>short course syllabus (course duration, themes covered by the courses, course sequence, cases-studies, learning materials, modes of learning, suggested readings…)</li>
                        <li>desired teaching campus (France, Spain, Norway or Finland) and suggested teaching dates. We will consider online course proposals as well.</li>
                    </ul>
                </li>
                <li>Your LinkedIn page if you have one in the cover email.</li>
            </ul>

            <p class="cosi-p mt-12">
                Application are to be sent with the subject line<br>"[NAME_MASTER]_Guest_Lecturer_Application_SURNAME_NAME".
            </p>

            <p class="cosi-p mt-12">
                No handwritten application will be considered.
            </p>
            <p class="cosi-p">
                A selection committee is convened each year in March. Applicants will be informed on selection results at the end of March by email. Please note that the Academic and Management Board may suggest modification of course contents should your proposal be accepted.
            </p>
            <p class="cosi-p italic">
                The consortium is an equal opportunity employer. Minority individuals, persons with disabilities, and woman are encouraged to apply. The consortium offer support to women who face difficult circumstances or barriers to their full participation in the programme.
            </p>
        </div>
    </div>
</main>
