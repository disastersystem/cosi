<svelte:head>
    <title>Quality Assurance Board - COSI</title>
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
                ['/about/overview-of-program', 'Overview of Program'],
                ['/qab', 'Quality Assurance Board']
            ]} />

            <h1 class="cosi-title-1">Quality Assurance Board</h1>
            <p class="cosi-headline">
                The Quality Assurance Board (QAB) leads quality management, enhancement policy design, and implementation. Which reflects our recognition that an active and strategic engagement towards quality assurance is instrumental to the fulfillment of our mission.
            </p>

            <p class="cosi-p mt-8">
                The QAB convenes physically at least at the same pace, time and place than the AMB; additionally, QAB head may convene any ad-hoc meetings.
            </p>

            <p class="cosi-title-4 mb-4 mt-8">
                The QAB is responsible for
            </p>

            <ul class="cosi-ul">
                <li>Ensuring the implementation of an efficient, relevant and auditable Quality Assurance Process to develop good practices and methodological innovation</li>
                <li>Disseminating the quality procedures, the results of the quality assurance reviews, corrective actions and improvements to be made</li>
                <li>Ensuring convergence of this Quality Assurance Process with the Erasmus Mundus Quality Assessment (EMQA), throughout all dimensions of the teaching and training programme (teaching methodologies, learning methodologies, training methodologies, learning outcomes evaluation, etc.)</li>
                <li>Enhancing the quality of learning and teaching activities, formal, non-formal and informal learning outcomes, teaching coordination among semesters and partners</li>
                <li>Enhancing the quality of academic coordination, board-level coordination, academic partner coordination, partners' involvement in the programme, partnerships and relationships with industrials</li>
                <li>Ensuring the adequacy of the educational programme with academic expectations and industrials needs identified and the relevance of changes or updates proposed within the curriculum</li>
                <li>Involving all stakeholders (students, alumni, teaching staff, etc.) and facilitate their participation in the quality assurance process, ensuring an efficient structure to support continuous improvement
                </li>
                <li>Continuously improving the satisfaction, academic results and professional skills of the students
                </li>
                <li>Appling effectiveness, efficiency and transparency as key management principles.
                </li>
            </ul>

            <h4 class="cosi-title-4 mb-4 mt-8">
                The QAB defines
            </h4>
            <ul class="cosi-ul">
                <li>Indicators and targets for programme internal evaluation and notably student's feedbacks through questionnaires and focus groups design and implementation</li>
                <li>Formal, non-formal and informal Learning outcomes validations process</li>
                <li>Academic performance evaluation indicators and process</li>
            </ul>

            <h4 class="cosi-title-4 mb-4 mt-8">
                The QAB supervises
            </h4>
            <ul class="cosi-ul">
                <li>A yearly quality review</li>
                <li>The dissemination (on the the consortium intranet) of the results of the review processes</li>
                <li>The recommendations (within six months, i.e. at Ti+6) of corrective actions to the AMB to improve bad practices or negative outcomes identified, if any. The AMB have six months to implement these solutions or other relevant solutions that achieve the requested improvements</li>
                <li>The counter-check and drafting of an annual written report (within six months, i.e. at Ti+18). This report is published on the consortium intranet and a summary of all these reports is be published each year on the consortium website</li>
            </ul>

            <h2 class="cosi-title-2 mt-16 mb-4">
                Constitutions and memberships
            </h2>
            <h3 class="cosi-title-3 mb-4 mt-8">
                Permanents members
            </h3>
            <p class="cosi-p font-bold mt-6">
                (a) QAB head (external expert)
            </p>
            <ul class="cosi-ul">
                <li>Daniel Clark, HWU</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                (b) QAB Vice-Head / Consortium representative
            </p>
            <ul class="cosi-ul">
                <li>Javier Hernández-Andrés, UGR</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                (c) Learning Outcomes Coordinator (external expert from the EMA European Chapter)
            </p>
            <ul class="cosi-ul">
                <li>To be recruited</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                (d) Academic representatives from Full Partners
            </p>
            <ul class="cosi-ul">
                <li>Eric Dinet, UJM</li>
                <li>Jussi Parkkinen, UEF</li>
                <li>Seyed Ali Amirshahi, NTNU.</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                (d') Vice- academic representatives from Full Partners
            </p>
            <ul class="cosi-ul">
                <li>Prof. Nathalie Destouches, UJM</li>
                <li>E. M. Valero, UGR</li>
                <li>T. Jääskeläinen, UEF</li>
                <li>Aditya Suneel Sole, NTNU</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                (e) 1 alumnus and one delegate from each current cohorts (at least once per year).
            </p>

            <h3 class="cosi-title-3 mt-14 mb-2">
                Ad-hoc members
            </h3>
            <p class="cosi-p italic text-sm">
                Depending on the agenda upon decision of QAB Head or Vice-Head.
            </p>
            <p class="cosi-p font-bold mt-8">
                (f) Any representative from Full Partners and Associated Academic Partners academic and administrative staff involved in the project
            </p>
            <p class="cosi-p font-bold mt-8">
                (e) Industrial Partners representatives and practitioners from any business associations or enterprises in the fields of technology transfer or valorization of Research and Development (R&D) activities, including but not limited to (at least once a year):
            </p>
            <ul class="cosi-ul">
                <li>Timo Eckhard, Chromasens
                </li>
                <li>Hiroyuki Fukuda, Olympus</li>
            </ul>

        </div>
    </div>
</main>
