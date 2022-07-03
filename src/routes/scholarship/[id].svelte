<script context="module">
    export async function load({ fetch, params }) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()

        if (res.ok) {
            return {
                props: {
                    // scholarship: data
                    scholarship: 'test'
                }
            }
        }
    }
</script>

<script>
    import {fly} from 'svelte/transition'
    // export let scholarship
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center">
        <div class="flex justify-between mt-40" style="max-width: 766px;">
            <!-- <h2 class="cosi-title-1"></h2> -->


        </div>
    </div>
</main>
