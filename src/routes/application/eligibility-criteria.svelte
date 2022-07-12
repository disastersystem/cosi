<svelte:head>
    <title>Application eligibility criteria - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    // import LinkCard from '../../components/LinkCard.svelte'
    import BreadCrumbs from '../../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/application/eligibility-criteria', 'Application eligibility criteria']
            ]} />

            <h1 class="cosi-title-1">Application eligibility criteria</h1>
            <h2 class="cosi-headline mt-4">
                We're looking for brilliant minds, trained in mathematics, engineering, computer science or physics.
            </h2>

            <h2 class="cosi-title-2 mt-10 mb-4">
                Eligibility criteria
            </h2>
            <p class="cosi-p">
                Below are the minimum requirements to be eligible for COSI programme. Please note that <a class="external" href="/scholarships">additional eligibility
                requirements apply for applicants to be considered for an Erasmus+ Join Master scholarship</a>, notably
                ineligibility of applicants who have already benefited from an Erasmus Mundus Master Course scholarship.
            </p>
            <p class="cosi-p">
                Here you can also find the <a class="external" href="https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters-scholarships">
                    general page with information about Erasmus Mundus Joint Master Degrees.
                </a>
            </p>
            <h3 class="cosi-title-3 mt-12 mb-4">
                Administrative process
            </h3>
            <ul class="cosi-ul">
                <li>Compliance with the application process calendar and deadlines.</li>
                <li>Authenticity, completeness, certification (scan of original document or certified translation), translation (English version only) of application files.</li>
            </ul>

            <h3 class="cosi-title-3 mt-12 mb-4">
                Academic prerequisites
            </h3>
            <p class="cosi-p">
                According to the COSI program, all applicants must document the following in order for their applications to be considered for admission:
            </p>
            <ul class="cosi-ul">
                <li><span class="font-bold">A Bachelor's degree</span> from an accredited institution in the topic of computer science, optics, physics, mathematics, signal processing, electronics, cognitive psychology, or other relevant adequate education.
                </li>
                <li>Applicants must have completed at least 5 ECTS University level course on <span class="font-bold">any programming language</span> - other courses completed outside the University may be considered on an individual basis-, and at least 5 ECTS in mathematics.
                </li>
                <li>Applicants should preferably have a course on image processing, imaging, color science, photonics, vision, computer graphics, computer vision, machine learning, or justify of an experience in related fields.
                </li>
                <li><span class="font-bold">Knowledge of English</span>, i.e. Applicants have to demonstrate that they meet the level B2 within the CEFR (exemptions from the need to document level B2 are native English speakers and students who have completed a degree in an English-speaking country).</li>
            </ul>

            <h3 class="cosi-title-3 mt-12 mb-4">
                Adequate financial resources
            </h3>
            <p class="cosi-p">
                Applicants should be fully aware of the financial costs of the programme and cost of living in hosting countries. While our scholarship policy will allow most of the students to finance the entire studies period, self-funded students who were not awarded a scholarship grant will be required to submit a Guarantee of full financial support (annexed to the Learning Agreement and prior to enrollment).
            </p>
            <p class="cosi-p">
                This is to ensure that you have sufficient funds to cover the entire period of studies. You'll need to document your source/s of income to apply for a student visa. Please refer to budget simulation to assess your financial ability.
            </p>
            <p class="cosi-p">
                Erasmus+ Joint Master Degree scholarship holders are exempted of this requirement.
            </p>

            <h3 class="cosi-title-3 mt-12 mb-4">
                For information
            </h3>
            <p class="cosi-p">
                No discrimination on the basis of nationality, gender, age, religion, health conditions.
            </p>
            <p class="cosi-p">
                Dedicated to achieving equity for women in science, the consortium supports women who face difficult circumstances or barriers to their full participation. More details on service available to women planning to enroll while having to care for children are available on Academic Services.
            </p>

            <h2 class="cosi-title-2 mt-16 mb-6">
                Admission criteria
            </h2>
            <p class="cosi-p">
                Applicants should be aware that joining COSI is an extremely competitive process, which takes time. Only the best applications will be selected.  The ranking outcome will determine the award of Erasmus+ Mundus JMD scholarships and Consortium scholarships to the best applicants.
            </p>
            <p class="cosi-p">
                Method and criteria used to assess application are detailed in the selection process.
            </p>

            <div class="mt-16 flex">
                <!-- <LinkCard title={'Apply to COSI'} path={'/application/apply'} /> -->
                <a
                    href="/application/apply"
                    class="mt-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    style="display: inline-block; font-size: 13px; font-weight: bold; text-decoration: none; background: #253A90; color: white; padding: 10px 30px; border-radius: 1000px;"
                >
                    <div class="flex items-center">
                        <div class="uppercase pr-4">Apply to COSI</div>
                        <svg width="12" height="11" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.52728 0.803755L6.17141 0.193726C6.44415 -0.0645752 6.88517 -0.0645752 7.155 0.193726L12.7954 5.53286C13.0682 5.79116 13.0682 6.20884 12.7954 6.46439L7.155 11.8063C6.88227 12.0646 6.44125 12.0646 6.17141 11.8063L5.52728 11.1962C5.25165 10.9352 5.25745 10.5093 5.53889 10.2537L9.03515 7.09915H0.696351C0.310456 7.09915 0 6.80513 0 6.43966V5.56034C0 5.19487 0.310456 4.90085 0.696351 4.90085H9.03515L5.53889 1.74628C5.25455 1.49073 5.24874 1.0648 5.52728 0.803755Z" fill="#fff"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
</main>
