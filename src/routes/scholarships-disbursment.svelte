<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
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
                You'll find in <a href="/scholarships/" class="external">this table</a> the disbursement calendar for 2015-2017 scholarships directly managed by University Jean Monnet on behalf of the COSI consoritum.
            </p>

            <p class="cosi-p">
                Fee-waivers are directly subtracted to Participation Costs charged to student every academic year (see COSI Participation Costs).
            </p>
            <p class="cosi-p">
                The scholarships below are not managed directly by University Jean Monnet. Please refer to dedicated pages for info on disbursement info.
            </p>
            <ul class="cosi-ul">
                <li><a href="/scholarships/explora" class="external">Explo'ra scholarships</a></li>
                <li><a href="/scholarships/explora" class="external">Scholarships from University of Eastern Finland</a></li>
                <li><a href="/scholarships/explora" class="external">UJM Foundation scholarships - 'international attractiveness'</a></li>
                <li><a href="/scholarships/explora" class="external">UJM Foundation scholarships - international mobility</a></li>
            </ul>
            <p class="cosi-p">
                If you're not sure in which category you belong, refer to <a href="/" class="external">this page</a> (list of programme and partner countries)
                and/or the <a href="/" class="external">Erasmus+ distance calculator</a> (to check if your country of residence is situated at less or more than 400 km) or ask your administrative coordinator.
            </p>
        </div>
    </div>
</main>
