<script>
    import {fly} from 'svelte/transition'
    import LinkCard from '../../components/LinkCard.svelte'
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
            <h3 class="cosi-title-3 mt-12 mb-6">
                Administrative process
            </h3>
            <ul class="cosi-ul">
                <li>Compliance with the application process calendar and deadlines</li>
                <li>Authenticity, completeness, certification (scan of original document or certified translation), translation (English version only) of application files</li>
            </ul>
            
            <h3 class="cosi-title-3 mt-12 mb-6">
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

            <h3 class="cosi-title-3 mt-12 mb-6">
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

            <h3 class="cosi-title-3 mt-12 mb-6">
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
                <LinkCard title={'Apply to COSI'} path={'/application/apply'} />
            </div>
        </div>
    </div>
</main>
