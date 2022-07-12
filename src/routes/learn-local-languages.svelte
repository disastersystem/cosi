<svelte:head>
    <title>Learn local languages - COSI</title>
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
                ['/learn-local-languages', 'Learn local languages']
            ]} />

            <h1 class="cosi-title-1">Learn local languages</h1>

            <h3 class="cosi-headline">
                Although 100% taught in English, our Master Degree Programmes are designed to offer a truly European experience to our students which means that we also encourage the students to spice up their language skills with introductory language courses in French, Spanish, Finnish or Norwegian. This is a way to increase your employability and allow you to get most of your student's life in hosting campuses.
            </h3>

            <h2 class="cosi-title-2 mb-4 mt-10">
                Learn French
            </h2>
            <p class="cosi-p">
                Following French courses during semester 1 is awarded by 2 ECTS and mentioned within the Diploma Supplement.
            </p>
            <p class="cosi-p">
                Courses are offered by our partner <a href="https://cilec.univ-st-etienne.fr/fr/" class="external">Centre International de Langue et Civilisation</a> (CILEC).
            </p>
            <p class="cosi-p">
                For COSI students, French language courses (during fall semester 1 are optional, although we strongly encouraged you to join to make the best of you French experience) and free of charge (2h per week for a total of 24h)
            </p>
            <!-- <p class="cosi-p">
                For CIMET students, French language courses during fall semester 1 are optional (although we strongly encouraged you to join to make the best of you French experience), and cost € 179 (2h per week for a total of 24h). French language courses during spring semester 2 are optional and free of charge.
            </p> -->

            <h2 class="cosi-title-2 mb-4 mt-10">
                Learn Spanish
            </h2>
            <p class="cosi-p">
                Following Spanish courses during semester 2 is awarded by 2 ECTS and mentioned within the Diploma Supplement.
            </p>
            <p class="cosi-p">
                Courses are offered by our partner <a href="http://www.clm-granada.com/indexing.htm" class="external">Centro de lenguas</a> (CLM).
            </p>
            <p class="cosi-p">
                For COSI students, Spanish language courses (during the spring semester 2 are optional) and free of charge (2h per week for a total of 24h).
            </p>

            <h2 class="cosi-title-2 mb-4 mt-10">
                Erasmus+ Online Linguistic Support
            </h2>
            <p class="cosi-p">
                As Erasmus+ beneficiaries, you can benefit from this <a href="https://academy.europa.eu/local/euacademy/pages/course/community-overview.php?title=learn-a-new-language" class="external">language assessment / learning programme</a>
            </p>
        </div>
    </div>
</main>
