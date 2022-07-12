<svelte:head>
    <title>Appeal procedure / assessment - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/application/appeal', 'Appeal procedure']
            ]} />

            <h1 class="cosi-title-1">Appeal procedure</h1>
            <p class="cosi-headline">
                Unsuccessful applicants to the programme and/or an associated scholarship may appeal procedure following the
                rejection of their application (including application to EMJMD and Consortium scholarships that are attributed
                at the time of selection).
            </p>
            <h2 class="cosi-title-2 mt-12 mb-4" id="assessement">
                How applications are assessed
            </h2>
            <p class="cosi-p">
                Applicants will be selected according to the following criteria:
            </p>
            <ul class="cosi-ul">
                <li><span class="font-bold">GPA</span>: Should count for 50%. Where the applicants have their education from, i.e. which country and university will be taken into account when GPA is evaluated. Minimum score is a C on the ECTS grading scale, which is approximately 75%. Admission office will calculate GPA according to this scale for each applicant.
                    Suggestion for distribution of points:
                    <ul class="cosi-ul mt-4">
                        <li>75%-79%: 1 point</li>
                        <li>80%-84%: 2 points</li>
                        <li>85%-90%: 3 points</li>
                        <li>91-94%: 4 points</li>
                        <li>95%-: 5 points</li>
                    </ul>
                </li>
                <li>
                    <span class="font-bold">Adequate academic courses</span>: Should count for 20%.
                </li>
                <li>Personal motivation: Should count for 10%, and must be documented by means of a <span class="font-bold">motivation letter</span> containing information about the applicant's reason for applying, their interest in the programme, their ideas of applied research and their professional development plan.</li>
                <li><span class="font-bold">Recommendation letters</span>: Should count for 10% and be of an academic nature (i.e. not a personal recommendation)
                </li>
                <li><span class="font-bold">Extraordinary achievements</span>: Should count for 10%. This could be publications of relevant articles, relevant work experience, relevant international mobility, etc. This point is where each applicant has the opportunity to document extracurricular activities and other aspects that may be of value to his/ her application.</li>
            </ul>
            <p class="cosi-p">
                Candidates who end up with a score of 3.5 or better will be on the main list, while the rest of the qualified candidates will be put on the reserve list. Those lists will be then revised by the COSI consortium, and a final ranked list will be issued.
            </p>

            <h2 class="cosi-title-2 mt-16 mb-4">
                Appeal procedure
            </h2>
            <p class="cosi-p">
                The procedure to follow for an appeal to the selection decision is set as follows:
            </p>
            <ol class="cosi-ol">
                <li>If the applicant does not agree with the final decision of the Eligibility and Selection committee, then s/he may appeal this decision before the Academic & Management Board.
                </li>
                <li>In order to be valid, the appeal must be in writing, using following <a href="https://studntnu-my.sharepoint.com/:w:/g/personal/seyedaa_ntnu_no/EZ-lc8R-oUhKjjxHi98QnVABh8OmQU_e995Pz6iL0k6fWw?e=ghN8aS" class="external">letter of settlement template</a> (page 2 of this document) signed and dated, and send (in .pdf format) by the applicant to the attention of: Associate Professor Seyed Ali Amirshahi, Head of Academic & Management Board and Academic Coordinator (s.ali.amirshahi@ntnu.no) and Katrine Moe, Administrative Coordinator (katrine.moe@ntnu.no).
                </li>
                <li>The appeal must be submitted within thirty (30) days following the publication of selection outcome at the latest.
                </li>
                <li>The appeal should set out fully the grounds upon which it disputes the decision of the Selection Committee, together with copies of any relevant supporting documents or justifications upon which it relies. The grounds of the appeal must be based on new elements or facts which were not taken into consideration when the application was originally analyzed. It should be noted that the Academic & Management Board may reject an appeal which is not submitted within the thirty (30) days period or which does not contain the necessary justifications or documentation.
                </li>
                <li>The Quality Assurance Board will examine every appeal cases, either physically during the Selection Committee or virtually any time before the intake starts. The board can decide to reassess and reconsider the application or to deny the appeal procedure after close examination of the applicant's pleas.
                </li>
                <li>The applicant will be informed of the appeal decision by email.</li>
            </ol>
            <p class="cosi-p mt-8">
                <span class="italic">Important note</span>: the Academic & Management Board is primarily responsible for conflict cases settlement. The Education, Audiovisual and Culture Executive Agency should not be contacted directly by the student alone, but rather by the Consortium if the conflict, despite the appeal decision, is not resolved.
            </p>
        </div>
    </div>
</main>
