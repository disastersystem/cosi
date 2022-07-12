<svelte:head>
    <title>News - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import LinkCard from '../components/LinkCard.svelte'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'

    const articles = [
        {
            id: 24,
            title: 'C4 - Colourlab COSI Creativity Camp at Spåtind Fjellstue',
            content: ''
        },
        {
            id: 25,
            title: 'COSI days 2021',
            content: ''
        },
        {
            id: 26,
            title: 'Best paper award',
            content: ''
        },
        {
            id: 27,
            title: 'EMJMD - Call for proposals 2019 - Notification results',
            content: ''
        },
        {
            id: 24,
            title: 'Alain Trémeau promoted to Honorary Doctor of the University of Eastern Finland',
            content: ''
        },
        {
            id: 24,
            title: 'Congratulation to Dr. Citlalli Gamez Serna PhD',
            content: ''
        },
        {
            id: 24,
            title: 'Robert W. G. Hunt',
            content: ''
        },
        {
            id: 24,
            title: 'COSI delegation in professional trip to Thailand',
            content: ''
        },
        {
            id: 24,
            title: 'COSI Students Intake 3 visiting the Alhambra',
            content: ''
        },
        {
            id: 24,
            title: 'International Color Day 2018',
            content: ''
        },
        {
            id: 24,
            title: 'Claudio OLEARI',
            content: ''
        },
        {
            id: 24,
            title: 'Induction Week 2018',
            content: ''
        },
        {
            id: 24,
            title: 'Congratulations to Juan Luis NIEVES',
            content: ''
        },
        {
            id: 24,
            title: 'COSI Boards in Brussels',
            content: ''
        },
        {
            id: 24,
            title: 'COSI Intake 3 : 2017-2019',
            content: ''
        },
        {
            id: 24,
            title: 'Call for papers on Computational Color Imaging',
            content: ''
        },
        {
            id: 24,
            title: 'Editorial Board of the scientific journal “Color Research and Application”',
            content: ''
        },
        {
            id: 24,
            title: 'Congratulations to one of our former CIMET students!',
            content: ''
        },
        {
            id: 24,
            title: 'Signal Image Vision 2017 PhD Prize',
            content: ''
        },
        {
            id: 24,
            title: 'Induction Week 2017',
            content: ''
        },
        {
            id: 24,
            title: 'Olympus Corporation',
            content: ''
        },
        {
            id: 24,
            title: 'COSI Graduation Ceremony Intake 2016-2018',
            content: ''
        }
    ]
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/news', 'News']
            ]} />

            <h1 class="cosi-title-1" style="margin-bottom: 40px;">News</h1>

            {#each articles as { id, title, content }}
                <div class="mb-6">
                    <LinkCard
                        title={ title }
                        path={ '/news/' + id }
                    />
                </div>
            {/each}
        </div>
    </div>
</main>
