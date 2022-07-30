<svelte:head>
    <title>Scholarship disbursment - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
    import ExternalLink from '../components/ExternalLink.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/scholarship-disbursment', 'Scholarship disbursment']
            ]} />

            <h1 class="cosi-title-1">Scholarship disbursment</h1>
            <p class="cosi-p">
                You'll find in <ExternalLink url="https://mastercolorscience.files.wordpress.com/2015/07/scholarship_disbusement.xlsx">this table</ExternalLink> the disbursement calendar for 2015-2017 scholarships directly managed by University Jean Monnet on behalf of the COSI consoritum.
            </p>

            <p class="cosi-p">
                Fee-waivers are directly subtracted to Participation Costs charged to student every academic year (<ExternalLink url="/participation-costs">see COSI Participation Costs</ExternalLink>).
            </p>
            <p class="cosi-p">
                The scholarships below are not managed directly by University Jean Monnet. Please refer to dedicated pages for info on disbursement info.
            </p>
            <ul class="cosi-ul">
                <li>
                    <ExternalLink url="/scholarship/explora">Explo'RA scholarships</ExternalLink>
                </li>
                <li>Scholarships from University of Eastern Finland</li>
                <li>
                    <ExternalLink url="/scholarship/international-attractiveness">UJM Foundation scholarships - international attractiveness</ExternalLink>
                </li>
                <li>
                    <ExternalLink url="/scholarship/international-mobility">UJM Foundation scholarships - international mobility</ExternalLink>
                </li>
            </ul>
            <p class="cosi-p">
                If you're not sure in which category you belong, refer to <ExternalLink url="https://erasmus-plus.ec.europa.eu/programme-guide/part-a/eligible-countries">this page</ExternalLink> (list of programme and partner countries)
                and/or the <ExternalLink url="https://erasmus-plus.ec.europa.eu/resources-and-tools/distance-calculator">Erasmus+ distance calculator</ExternalLink> (to check if your country of residence is situated at less or more than 400 km) or ask your administrative coordinator.
            </p>
        </div>
    </div>
</main>
