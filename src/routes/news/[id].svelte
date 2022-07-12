<svelte:head>
    <!-- <title>{ article.title } - COSI</title> -->
    <!-- <meta name="description"> -->
</svelte:head>

<script context="module">
    export async function load({ fetch, params }) {
        // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // const data = await res.json()
        console.log(params.id)
        let data = [{
            id: 24,
            slug: 'C4-Colourlab-COSI-Creativity-Camp-at-Spåtind Fjellstue',
            title: 'C4 - Colourlab COSI Creativity Camp at Spåtind Fjellstue',
            content: `
                <h2 class="cosi-headline mb-4">
                    
                </h2>
                <p class="cosi-p">
                    
                </p>

                <h2 class="cosi-title-2 mt-12 mb-6">
                    
                </h2>
                <p class="cosi-p">
                    
                </p>
            `
            }
        ]

        // console.log(params.id)
        const current = data.find(item => item.id === parseInt(params.id))

        // if (res.ok) {
        return {
            props: {
                article: current ? current : {slug: '', title: '', content: ''}
                // article: current
            }
        }
        // }
    }
</script>

<script>
    import {fly} from 'svelte/transition'
    import CirclePoint from '../../components/Point.svelte'
    import BreadCrumbs from '../../components/Breadcrumbs.svelte'

    export let article
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/news', 'News'],
                ['/news/' + article.slug, article.title]
            ]} />

            <h1 class="cosi-title-1">{ article.title }</h1>

            {@html article.content }
        </div>
    </div>
</main>

