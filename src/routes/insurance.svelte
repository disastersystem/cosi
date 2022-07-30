<svelte:head>
    <title>Insurance cover - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    // import BreadCrumbs from '../components/Breadcrumbs.svelte'
    import ExternalLink from '../components/ExternalLink.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <!-- <BreadCrumbs pages={[ ['/', 'Home'], ['/insurance', 'Insurance cover'] ]} /> -->

            <h1 class="cosi-title-1">Insurance cover</h1>

            <h2 class="cosi-headline mt-6 mb-4">
                All COSI students (EMJMD scholarship holder as well as self-financed students) are provided (cost included in Participation Costs) a full health and accident insurance coverage for the full period of the programme.
            </h2>
            <p class="cosi-p">
                This insurance coverage comply with the <ExternalLink url="https://mastercolorscience.files.wordpress.com/2015/07/e-jmd_insurance-guidelines_en.pdf">Minimum requirements for the health and accident insurance coverage provided under Erasmus+ Joint Master Degrees</ExternalLink>, as per European Commission guidelines.
            </p>
            <p class="cosi-p">
                We're working with <ExternalLink url="https://www.marsh.com/us/home.html">Marsh</ExternalLink>, a global leader insurance broker.
            </p>
            <ul class="cosi-ul">
                <li>
                    <ExternalLink url="https://mastercolorscience.files.wordpress.com/2015/07/cosi_insurance_general_provision.pdf">
                        Download general provisions of the Marsh Erasmus Mundus (MEM) insurance cover
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink url="https://mastercolorscience.files.wordpress.com/2015/07/cosi_insurance_summary_cover.pdf">
                        Download a summary of the cover
                    </ExternalLink>
                </li>
            </ul>
            <p class="cosi-p">
                Each students will received, upon selection, a personal insurance certificate (that can be requested at the time of visa application), stating contract number and period of coverage (starting 2 months before the academic start of the programme - travel included - and ending 2 months after the end of the programme).
            </p>
            <p class="cosi-p">
                In case of emergency, you can call the Europese Emergency Switch board : 00 32 3253 68 00 (24/24 7/7)
            </p>
            <p class="cosi-p">
                For general requests (e.g. reimbursement of medical treatment) you should use the contact form of the MEM website: <ExternalLink url="http://www.marsh.be/mem">http://www.marsh.be/mem</ExternalLink>.
            </p>
            <p class="cosi-p">
                European students are also recommended, additionally  to this cover, to get the <ExternalLink url="http://ec.europa.eu/social/main.jsp?catId=559">European health insurance card</ExternalLink>.
            </p>
            <p class="cosi-p">
                In any case, don't hesitate to contact your administrative coordinator.
            </p>
        </div>
    </div>
</main>
