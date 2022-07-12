<svelte:head>
    <title>Academic Management Board - COSI</title>
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
                ['/amb', 'Academic Management Board']
            ]} />

            <h1 class="cosi-title-1">Academic Management Board</h1>
            <p class="cosi-headline">
                The Academic Management Board (AMB) sets the consortium, vision, strategy and its long-term academic and business plan; oversees the management and administration, consider and decide upon all academic matters and questions affecting the educational policy and the conduct of its affairs.
            </p>

            <img class="mt-8" src="amb.png" alt="">

            <p class="cosi-p mt-8">
                The AMB convene physically at least twice a year, meetings are held alternately in Full Partners campuses.
            </p>
            <ul class="cosi-ul">
                <li>In March, notably regarding validation of students learning outcomes and decision regarding semesters 1 and 3 and final selection of new intakes</li>
                <li>In September, notably regarding participation to the induction week and curriculum management.</li>
            </ul>
            <p class="cosi-p mt-6">
                Additional virtual meetings will also be held by video-conference:
            </p>
            <ul class="cosi-ul">
                <li>In June, notably regarding validation of students' learning outcomes in semester 2, master thesis management and industrial projects course oral presentations.</li>
            </ul>

            <h2 class="cosi-title-2 mt-12 mb-4">
                Missions
            </h2>
            <p class="cosi-title-4 mb-4 mt-6">
                The AMB is responsible for:
            </p>
            <p class="cosi-p font-bold mt-6">
                (a) At academic level:
            </p>
            <ul class="cosi-ul">
                <li>defining the programme structure, ensuring consistency of the courses sequence, ensuring quality of teaching, ensuring credit recognition within each hosting university and learning validation outcomes criteria and rules</li>
                <li>supervising any changes on teaching offer that may occurs in each institution and validating courses syllabuses</li>
                <li>selecting the students and guest lecturers and to define their mobility</li>
                <li>following-up the achievements of students</li>
                <li>resolving and stating on disputes that may arise from students; providing student with an appeal procedure in case of conflict</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                (b) At management level:
            </p>
            <ul class="cosi-ul">
                <li>supervising the administrative implementation of their decision</li>
                <li>stating upon budget management and notably participation costs, consortium scholarships and disbursements between partners</li>
                <li>discussing QAB recommendations and taking corrective decisions</li>
            </ul>

            <h2 class="cosi-title-2 mt-16 mb-4">
                Constitution and memberships
            </h2>

            <h3 class="cosi-title-3 mb-4 mt-8">
                Permanents members
            </h3>
            <p class="cosi-p font-bold mt-6">
                (a) Consortium coordinator
            </p>
            <ul class="cosi-ul">
                <li>S. A. Amirshahi, NTNU</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                (b') Vice Academic Coordinators
            </p>
            <ul class="cosi-ul">
                <li>Assistant Prof. P. Colantoni, UJM</li>
                <li>Pasi Vahimaa, UEF</li>
                <li>Rafael Huertas, UGR</li>
                <li>J.Y. Hardeberg, NTNU</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                (b) Local Academic Coordinators
            </p>
            <ul class="cosi-ul">
                <li>S.A. Amirshahi, NTNU</li>
                <li>A. Trémeau, UJM</li>
                <li>J. Nieves, UGR</li>
                <li>M. Hauta-Kasari, UEF</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                (c) Administrative coordinators
            </p>
            <ul class="cosi-ul">
                <li>K. Moe, NTNU</li>
                <li>A. Genvrin, UJM</li>
            </ul>

            <h3 class="cosi-title-3 mt-14 mb-2">
                Ad-hoc members
            </h3>
            <p class="cosi-p italic text-sm">
                Depending on the agenda, invited by any permanent member and upon agreement by other permanent members
            </p>
            <p class="cosi-p font-bold mt-8">
                (d) 1 alumnus and one delegate from each current cohorts (at least once per year).
            </p>
            <p class="cosi-p font-bold mt-8">
                (e) Local Administrative focal points from the university hosting the AMB.
            </p>
            <p class="cosi-p font-bold mt-8">
                (d) Academic Partners Local Academic Coordinators (at least once a year):
            </p>
            <ul class="cosi-ul">
                <li>D. H. Widyantoro, ITB
                </li>
                <li>S. Nakauchi, TUT</li>
                <li>R. Parthiban, MUM</li>
                <li>Prof. K. Pichayada, CHULA</li>
            </ul>

            <p class="cosi-p font-bold mt-8">
                (e) Industrial Partners representatives, including but not limited to (at least once a year):
            </p>
            <ul class="cosi-ul">
                <li>Jurgen Stauder, PhD, Principal Scientist at Technicolor;
                </li>
                <li>Markus Karl Schnitzlein, PhD, Managing Director (CEO) of Chromasens GmbH.</li>
            </ul>
            <p class="cosi-p font-bold mt-8">
                The AMB is chaired by the Academic Coordinator where the meeting is held:
            </p>
            <ul class="cosi-ul">
                <li>S. A. Amirshahi, NTNU</li>
                <li>A. Trémeau, UJM</li>
                <li>J. Nieves, UGR</li>
                <li>M. Hauta-Kasari, UEF</li>
            </ul>

        </div>
    </div>
</main>
