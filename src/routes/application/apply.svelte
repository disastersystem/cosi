<svelte:head>
    <title>Apply to COSI - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import CirclePoint from '../../components/Point.svelte'
    import BreadCrumbs from '../../components/Breadcrumbs.svelte'
</script>

<main in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center px-6">
        <div class="mt-40 mb-40" style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/application/apply', 'Apply to COSI']
            ]} />

            <h1 class="cosi-title-1">Apply to COSI</h1>

            <h3 class="cosi-title-3 mt-10">
                Call for applications study years 2022 - 2024
            </h3>
            <h3 class="cosi-title-3">
                Apply before January 10th 2022
            </h3>
            <p class="cosi-p italic mt-2">
                Application received after this deadline will not be taken into consideration.
            </p>
            <p class="cosi-p mt-10">
                We have a double phase selection. First you need to apply on <a class="external" href="https://fsweb.no/soknadsweb/login.jsf">Søknadsweb</a>, then if your application pass our
                administrative screening, you will be required to upload additional documents on the <a class="external" href="https://international-sciencemasters.univ-st-etienne.fr/login">UJM plateform</a>.
                Follow the 4 steps below to complete the first phase, you'll be notified of the next steps some time between
                10. January and 01. March.
            </p>
            <p class="cosi-p">
                <!-- If you have any questions, do not hesitate to <a href="/contact" class="external">contact us</a>. -->
                If you have any need for clarification on COSI programme / eligibility prior to application or if you encounter technical issues during your online application do not hesitate to <a href="/contact" class="external">contact us</a> (mscosi@studier.ntnu.no).
            </p>

            <h3 class="cosi-title-4 mb-4 mt-16">1. Make sure you are eligible to apply</h3>
            <p class="cosi-p">
                Read carefully <a class="external" href="/about/overview-of-program" target="_blank">about COSI programme</a> and make sure you are <a class="external" href="/application/eligibility-criteria" target="_blank">eligible to apply</a>.
            </p>
            <!-- <p class="cosi-p">
                All applicants must document the following in order for their applications to be considered for admission:
            </p>
            <ul class="cosi-ul">
                <li>
                    A Bachelor's degree from an accredited institution in the topic of computer science, optics, physics, mathematics, signal processing, electronics, cognitive psychology, or other relevant adequate education.
                </li>
                <li>
                    Applicants must have completed at least 5 ECTS University level course on any programming language - other courses completed outside the University may be considered on an individual basis-, and at least 5 ECTS in mathematics.
                </li>
                <li>
                    Applicants should preferably have a course on image processing, imaging, color science, photonics, vision, computer graphics, computer vision, machine learning, or justify of an experience in related fields.
                </li>
                <li>
                    Knowledge of English, i.e. Applicants have to demonstrate that they meet the level B2 within the CEFR (exemptions from the need to document level B2 are native English speakers and students who have completed a degree in an English-speaking country).
                </li>
            </ul>
            <p class="cosi-p">
                Applicants should be fully aware of the financial costs of the programme and cost of living in hosting countries. While our scholarship policy will allow most of the students to finance the entire studies period, self-funded students who were not awarded a scholarship grant will be required to submit a Guarantee of full financial support (annexed to the Learning Agreement and prior to enrollment).
            </p>
            <h6 class="cosi-title-5 mb-2 mt-6">
                Adequate financial resources
            </h6>
            <p class="cosi-p">
                Applicants should be fully aware of the financial costs of the programme and cost of living in hosting countries. While our scholarship policy will allow most of the students to finance the entire studies period, self-funded students who were not awarded a scholarship grant will be required to submit a Guarantee of full financial support (annexed to the Learning Agreement and prior to enrollment).
            </p> -->

            <h2 class="cosi-title-4 mt-12 mb-6">
                2. Determine if you are from a Programme or Partner country and assess your financial ability in case you are not awarded a Erasmus+ JMD scholarship
            </h2>
            <p class="cosi-p">
                Determine if you are from a Programme or Partner country:
                <a href="https://erasmus-plus.ec.europa.eu/programme-guide/part-a/eligible-countries" target="_blank" class="external">
                    Lists of eligible countries
                </a>
            </p>
            <p class="cosi-p">
                Participation costs (covering “tuition fees” and insurance) should not, in any case discourage you from applying if you have the required academic background. Very <a class="external" target="_blank" href="/scholarships">generous scholarships</a> are available.
            </p>
            <p class="cosi-p">
                Self-funded students will be able to pay participation costs in three instalments.
            </p>
            <a href="/participation-costs" target="_blank" class="external">What do I pay for?</a>

            <h4 class="cosi-title-4 mt-12 mb-4">3. Prepare your application files</h4>
            <p class="cosi-p">
                Please make sure you have all documents available in english and PDF format before starting the application process in step 4. You will need to upload the following documents:
            </p>
            <p class="cosi-p font-bold mt-8">
                Check-list:
            </p>
            <ul class="cosi-ul">
                <li>Transcript of records</li>
                <li>Bachelor's diploma</li>
                <li>Documentation of English language proficiency</li>
                <li>Motivation letter</li>
                <li>CV</li>
                <li>A minimum of two letters of recommendation</li>
                <li>Proof of nationality</li>
                <li>Documented last 5 years residence history</li>
            </ul>
            <p class="cosi-p font-bold mt-10">
                Recommendation to prepare the documents:
            </p>
            <ul class="cosi-ul">
                <li>CV: preferably in Europass format.</li>
                <li>
                    Motivation letter: Motivation must be documented by means of a motivation letter containing information about the applicant's reason for applying, their interest in the programme, their ideas of applied research and their professional development plan. In addition:
                    <ul class="cosi-ul ml-4">
                        <li>State and argument your preferred choice of <a href="/courses" target="_blank" class="external">mobility for semester 2 and 3</a>.</li>
                        <li>Clearly declare that you've never benefited from an Erasmus Mundus Master Course grant.</li>
                        <li>Indicate your references.</li>
                    </ul>
                </li>
                <li>
                    Documented last 5 years residence history:
                    <ul class="cosi-ul ml-4">
                        <li>
                            Document where you explain your residency during the last 5 years Current residence certificate in accordance with your municipality normal registration rules AND a certificate from your place of work, study or training issued by the employer or institution in question. Both documents must have been issued within 12 months before the submission deadline. The place of residence should be verified on the basis of the provision of the documents listed in the <a href="https://www.consilium.europa.eu/prado/en/search-by-document-country.html" target="_blank" class="external">PRADO website</a>. Past residence certificate(s) (last five years only)
                        </li>
                    </ul>
                </li>
            </ul>

            <h4 class="cosi-title-4 mt-12 mb-4">
                4. Apply to søknadsweb
            </h4>
            <p class="cosi-p">
                When your documents are ready, go to <a class="external" target="_blank" href="https://fsweb.no/soknadsweb/login.jsf">Søknadsweb</a>
            </p>
            <p class="cosi-p">
                Step-by-step recipe to register on Søknadsweb:
            </p>
            <ul class="cosi-ul">
                <li>Go to the <a class="external" target="_blank" href="https://fsweb.no/soknadsweb/login.jsf">application portal Søknadsweb</a>.</li>
                <li>Select language in the top right corner where it says "Norsk bokmål".</li>
                <li>Choose institution: "Norwegian University of Science and Technology"</li>
                <li>Click on "International Applicant".</li>
                <li>Click on "Register new international applicant".</li>
                <li>Answer the question regarding your English qualifications.</li>
                <li>Answer the question regarding residence permit in Norway.</li>
                <li>Answer the question concerning financing. Choose the answer "I have a scholarship", since you apply for the COSI EMJMD by submitting your application.</li>
                <li>You have now reached the application form. Please register as an applicant, and you will receive your password by e-mail.</li>
                <li>Log on to Søknadsweb with your e-mail address and password, and fill in the application details.</li>
                <li>As the final step of the application process, you will be asked to submit the required documentation. Upload all the required documents and make sure they have the correct format (.pdf).</li>
            </ul>
            <p class="cosi-p">
                Please note that there is no “submit”-button.
            </p>
            <p class="cosi-p">
                You can change your application as many times as you like up until the deadline.
            </p>

            <ul class="cosi-ul mt-12 pt-4 italic" style="color: #494949; border-top: 1px solid #ddd;">
                <li>Applications by email will not be taken into consideration at any time.</li>
                <li>
                    Information relating to individuals (personal data) is collected and used in accordance with the Regulation (EC) N° 45/2001 of the European Parliament and of the Council of 18.12.2000 on the protection of individuals with regard to the processing of personal data by the Community institutions and bodies and on the free movement of such data (OJ L8 of 12.1.2001, p. 1).
                </li>
                <li>
                    Personal data will be sent to the Education, Audiovisual and Culture Executive Agency and may be used by other bodies involved in the management of EMJMD acting as stakeholders of the programme (i.e. European Commission, Erasmus+ National Offices, EU Delegations, Erasmus Mundus Student and EM) for facilitating the student access to the joint programme. Please find here the privacy statement for processing of personal data collected via the EACEA Mobility Data Base.
                </li>
            </ul>

            <h3 class="cosi-title-2 text-center mt-20">
                You're all done!
            </h3>
            <h4 class="cosi-title-3 mt-2 text-center">
                You will be notifed of the next step<br>between 10. January and 1. March.
            </h4>
            <p class="cosi-p text-center mt-4">
                In the meantime, take a look at the timelime below<br>to see the full application process.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="margin-left: 6px; display: inline-block; width: 12px;"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>
            </p>
            <!-- <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 14px;"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>
            </div> -->

        </div>
    </div>

    <div style="background: #5853A0;" class="px-6">
        <div class="flex justify-center pt-16 pb-16">
            <div class="mr-8 mt-40" style="border-right: 1px solid rgba(161, 152, 209, 0.425);"></div>
            <div style="max-width: 750px;">
                <div class="-ml-10">
                    <h2 class="flex cosi-title-2 text-white">
                        Key dates
                        <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff" width="30"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/></svg>
                    </h2>
                    <p class="mt-4 cosi-headline cosi-text-light-purple">
                        Below you'll find a complete timeline of the whole process.
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">10. jan. 2022</span>
                        <span style="font-weight: 400;">12.00 pm (UTC time)</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">Application deadline "scholarships"</h3>
                    <h4 class="cosi-p cosi-text-light-purple">
                        Apply to COSI before this deadline and you'll be directly considered (no additional application) for <a href="/scholarships" class="external-dark">Erasmus+ EMJMD scholarships and COSI scholarship</a>.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="pr-2">
                            <div class="cosi-text-light-purple mb-1">From</div>
                            <div class="cosi-text-light-purple">To</div>
                        </div>
                        <div>
                            <div class="mb-1">10. jan. 2022</div>
                            <div>15. feb. 2022</div>
                        </div>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Notification of Ineligibly</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        Ineligible applicants (for administrative issues or weak academic background) are notified at the time of the first selection committee review after the eligibility check and provided information on the appeal procedure. Due to the large number of applications we expect, we won't be able to provide a personalized feedback on weaknesses of the application.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="pr-2">
                            <div class="cosi-text-light-purple mb-1">From</div>
                            <div class="cosi-text-light-purple">To</div>
                        </div>
                        <div>
                            <div class="mb-1">10. jan. 2022</div>
                            <div>01. mar. 2022</div>
                        </div>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Application second-phase</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        Eligible students can apply to the second-phase selection process through the UJM platform.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="pr-2">
                            <div class="cosi-text-light-purple mb-1">From</div>
                            <!-- <div class="cosi-text-light-purple">To</div> -->
                        </div>
                        <div>
                            <div class="mb-1">16. mar. 2022</div>
                            <!-- <div>15. feb. 2022</div> -->
                        </div>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Selection Committee</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        COSI <a href="/amb" class="external-dark">academic and management board</a> select students.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="pr-2">
                            <div class="cosi-text-light-purple mb-1">From</div>
                            <div class="cosi-text-light-purple">To</div>
                        </div>
                        <div>
                            <div class="mb-1">20. mar. 2022</div>
                            <div>05. apr. 2022</div>
                        </div>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Notification of Short-list</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        Short-listed students for <a href="/scholarships" class="external-dark">E+EMJMD scholarships</a> are informed. Applicants who are not contacted for interviews may however be selected as self-financed students.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="">
                            <!-- <div class="cosi-text-light-purple mb-1">From</div> -->
                            <!-- <div class="cosi-text-light-purple">To</div> -->
                        </div>
                        <div>
                            <div class="mb-1">04. apr. 2022</div>
                            <!-- <div>15. feb. 2022</div> -->
                        </div>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Notification of the Selection outcome</h2>
                    <p class="cosi-p cosi-text-light-purple">
                        Successful applicants are notified of the outcome of their application by email. Successful applicants can be either on:
                    </p>
                    <ul class="cosi-ul mb-5">
                        <li style="color: #D9D7FF;">a main list (best ranked successful applicants with an Erasmus+ Joint Master Degree scholarship) and</li>
                        <li style="color: #D9D7FF;">a reserve list (successful applicants with a Consortium scholarship and successful applicants without scholarships). Time is left for applicants in the reserve list to decide to join as self-funded students, or to benefit for potential drop-out from main list applicants.</li>
                    </ul>
                    <p class="cosi-p cosi-text-light-purple">
                        Applicants who were contacted for interview must send certified and translated copies of their diploma and transcripts to COSI consortium by the 30th of March 2020.
                    </p>
                    <p class="cosi-p cosi-text-light-purple">
                        Non-successful applicants or successful student without scholarships attributed can <a href="/application/appeal" class="external-dark">appeal of the selection committee decisions</a>. Only aggregated statistics on applicants and selected students are published to ensure confidentiality of applicants. Original certificates of admission are sent to successful applicants.
                    </p>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="pr-2">
                            <div class="cosi-text-light-purple mb-1">From</div>
                            <!-- <div class="cosi-text-light-purple">To</div> -->
                        </div>
                        <div>
                            <div class="mb-1">04. apr. 2022</div>
                            <!-- <div>15. feb. 2022</div> -->
                        </div>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Prepare your stay in Norway</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        Successful applicants are encouraged to immediately <a href="/norway" class="external-dark">prepare their stay in Norway</a>, and notably immigration process.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="">
                            <!-- <div class="cosi-text-light-purple mb-1">From</div> -->
                            <!-- <div class="cosi-text-light-purple">To</div> -->
                        </div>
                        <div>
                            <div class="mb-1">Date not know</div>
                            <!-- <div>15. feb. 2022</div> -->
                        </div>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Notification from the EACEA</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        COSI E+EMJMD scholarship holders received an official notification from the agency of the European Commission.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="">
                            <!-- <div class="cosi-text-light-purple mb-1">From</div> -->
                            <!-- <div class="cosi-text-light-purple">To</div> -->
                        </div>
                        <div>
                            <div class="mb-1">12. apr. 2022</div>
                            <!-- <div>15. feb. 2022</div> -->
                        </div>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">End of Appeal period</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        Appeals received after this deadline won't be considered.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="">
                            <!-- <div class="cosi-text-light-purple mb-1">From</div> -->
                            <!-- <div class="cosi-text-light-purple">To</div> -->
                        </div>
                        <div>
                            <div class="mb-1">15. may. 2022</div>
                            <!-- <div>15. feb. 2022</div> -->
                        </div>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Commitment Deadline</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        Successful applicants must confirm their participation in the programme. Students in the reserve list must decide to enroll as self-financed students.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">15. may. 2022</span>
                        <span style="font-weight: 400;">12.00 pm (UTC time)</span>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Deadline "self-financed" Non-EU students</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        Non-European students may apply to COSI till this date, as self-financed students (no scholarships granted)
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">30. jun. 2022</span>
                        <span style="font-weight: 400;">12.00 pm (UTC time)</span>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Deadline "self-financed" EU students</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        European students may apply to COSI till this date, as self-financed students (no scholarship granted).
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">01. sep. 2022</span>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">End of E+EMJMD re-allocation</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        <a href="/scholarship/emjmd" class="external-dark">E+EMJMD scholarships</a> may be re-allocated to students in the reserve list till this date in case of applicants withdraw.
                    </h4>
                </div>

                <div class="mt-12">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">15. aug. 2022</span>
                    </h6>
                    <h2 class="text-white cosi-title-4 mb-2" style="color: #fff;">Student agreement signature</h2>
                    <h4 class="cosi-p cosi-text-light-purple">
                        Effective enrollment of successful applicant is subject of conclusion and signing of a <a href="/student-agreement" class="external-dark">student agreement</a> between the student and COSI consortium providing for rights and obligation of both parties.
                    </h4>
                </div>

            </div>
        </div>
    </div>
</main>
