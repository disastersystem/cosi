<svelte:head>
    <title>Career prospects - COSI</title>
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
                ['/career', 'Career Prospects']
            ]} />

            <h1 class="cosi-title-1">Career prospects</h1>
            <p class="cosi-headline">
                You'll acquire skills and qualifications that will be widely recognized and understood by other education
                institutions and the labour market. Over the years COSI graduates have been employed in world leading
                industries and universities.
            </p>

            <p class="cosi-p">
                Tackling the talent gaps of our industrial partners is the main focus of the COSI Master program.
                Your employability will be our very first priority. Having the chance to do your six week internship,
                and possibly a master thesis in one of our affiliated industrial partners will allow you to shine and
                show your capabilities and possibly find a job in the industry.
            </p>
            <p class="cosi-p">
                The courses in the COSI program are structured so that the skills learnt could address the needs of a diverse range of sectors (multimedia, health care, cosmetic, automotive, and food-processing) bridging a talent gap in the industry where colour imaging experts are in high demand.
            </p>
            <p class="cosi-p">
                Over the years the graduates of the COSI program have been able to join different universities and industries leading the field in:
            </p>
            <ul class="cosi-ul">
                <li>Color Imaging</li>
                <li>Spectral Imaging</li>
                <li>Computer Graphics</li>
                <li>Multimedia Technologies</li>
                <li>Photonics</li>
                <li>Optics</li>
                <li>Vision</li>
            </ul>

            <h3 class="cosi-title-4 mt-16 mb-4">
                Graduate impact survey
            </h3>
            <p class="cosi-p">
                Check out the annual <a href="http://www.em-a.eu/en/erasmus-mundus/graduate-impact-survey.html" class="external">Erasmus Mundus Graduate Impact Survey</a> from EMA.
            </p>
        </div>
    </div>
</main>
