<svelte:head>
    <title>Participation costs - COSI</title>
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
                ['/participation-costs', 'Participation costs']
            ]} />

            <h1 class="cosi-title-1">Participation costs</h1>
            <h2 class="cosi-headline mb-4">
                "Attract, select, and fund excellence."
            </h2>
            <p class="cosi-p">
                The COSI programme benefits from the financial support of the European Union funded Erasmus+ Joint Master Degree programme. This support allows us to implement a very attractive scholarship strategy to attract the best students.
            </p>
            <p class="cosi-p">
                Participation costs differ if you're from (i.e. hold the nationality of) a “Programme country” (member states of the European Union AND non-European Union countries situated in Europe) or “Partner Country” (basically the rest of the world). This distinction reflects the rationale of financial instruments of European Union external action, our main financial sponsor.
            </p>
            <p class="cosi-p">
                Find your country on this link to determine if your from a partner country or not:
                <a class="external" href="https://erasmus-plus.ec.europa.eu/programme-guide/part-a/eligible-countries">
                    https://erasmus-plus.ec.europa.eu/programme-guide/part-a/eligible-countries
                </a>
            </p>

            <h2 class="cosi-title-2 mt-12 mb-6">
                Participation costs for 2020/2022
            </h2>
            <!-- <h2 class="cosi-title-2 mt-16 mb-4">
                Determine if you're from a Programme of Partner country
            </h2> -->

            <div>
                <div class="grid grid-cols-3">
                    <h5 class="cosi-title-5 mb-4">Installments</h5>
                    <h5 class="cosi-title-5 mb-4 text-right">Programme Country</h5>
                    <h5 class="cosi-title-5 mb-4 text-right">Partner Country</h5>
                </div>
                <div class="grid grid-cols-3">
                    <p class="cosi-p">2020/2021 (2 semesters)</p>
                    <p class="cosi-p text-center text-right">4,500 €</p>
                    <p class="cosi-p text-center text-right">9,000 €</p>
                </div>
                <div class="grid grid-cols-3">
                    <p class="cosi-p">2021/2022 (2 semesters)</p>
                    <p class="cosi-p text-right">4,500 €</p>
                    <p class="cosi-p text-right">9,000 €</p>
                </div>
                <div class="grid grid-cols-3">
                    <p class="cosi-p">Total (entire programme)</p>
                    <p class="cosi-p text-right">9,000 €</p>
                    <p class="cosi-p text-right">18,000 €</p>
                </div>
            </div>

            <p class="cosi-p pt-4 italic" style="border-top: 1px solid #ddd;">
                Self-funded students will be able to pay participation costs in three instalments.
            </p>

            <h2 class="cosi-title-2 mt-12 mb-4">
                Why do students from a partner country have to pay higher participation costs?
            </h2>
            <p class="cosi-p">
                The higher participation costs for students coming from a partner country accounts for special needs, including more expensive hiring and student's affairs services costs. However, applicants from a partner country should note that available scholarships grants are also higher for students from a partner country.
            </p>

            <h2 class="cosi-title-2 mt-12 mb-4">
                I cannot pay such participation costs, are scholarship grants available?
            </h2>
            <p class="cosi-p">
                Participation costs (covering “tuition fees” and insurance) should not, in any case discourage you from applying if you have the required academic background. <a href="/scholarships" class="external">Very generous scholarships are available</a>.
            </p>
            <p class="cosi-p">
                COSI is managed by European public universities as a non-profit organization. Participation costs reflect real costs occurred by delivering the programme. Potential benefits are directly re-invested as student scholarships.
            </p>

            <h2 class="cosi-title-2 mt-12 mb-4">
                What do I pay for?
            </h2>
            <p class="cosi-p">
                Participation costs that are charged to each student cover, for the entire duration of the COSI programme, the costs related to:
            </p>
            <ul class="cosi-ul">
                <li>The selection process.</li>
                <li>Registration, and notably, local tuitions fees in hosting university.</li>
                <li>Full access to COSI curriculum (courses, offer of master thesis in the industry, exams, thesis examinations).</li>
                <li>Social insurance and full insurance cover during the entire period of the programme.</li>
                <li>Student affairs services including administrative counselling, degree delivery, support for banking, housing, and immigration affairs.</li>
                <li>Full access to any scientific courses offered by hosting universities.</li>
                <li>Full access to hosting universities' libraries and online resources.</li>
                <li>Full access to hosting universities' services (culture, sports, health, ...).</li>
                <li>Dedicated local language courses.</li>
                <li>Special tutoring / mentoring by an Academic Advisor; access to COSI events and networking activities with industry and alumni.</li>
                <!-- <li>Learn more about other services and benefits of joining the COSI programme.</li> -->
            </ul>
            <p class="cosi-p">
                Accommodation and travel expenses are not covered by the participation costs. You can find here (coming soon) a “rule of thumb” budgeting of the 2 years programme based on cost of living to self-assess your financial ability to join as a self-sponsored student.
            </p>

            <!-- <h2 class="cosi-title-2 mt-16 mb-4">
                Determine if you're from a Programme of Partner country
            </h2>
            <p class="cosi-p">
                Find your country on this link to determine if your from a partner country or not: <a class="external" href="https://erasmus-plus.ec.europa.eu/programme-guide/part-a/eligible-countries">https://erasmus-plus.ec.europa.eu/programme-guide/part-a/eligible-countries</a>
            </p> -->
            <p class="cosi-p mt-20 pt-4 italic" style="color: #494949; border-top: 1px solid #ddd;">
                Please note that the legal basis and documentation that prevails for determining if you are from a
                Programme or Partner country is the English version and latest version of the <a href="https://test.com">Erasmus programme guide</a>,
                pages 24 to 26 (valid as of 10/10/2014).
            </p>
        </div>
    </div>
</main>
