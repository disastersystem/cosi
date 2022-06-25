<script context="module">
    export async function load({ fetch, params }) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()

        if (res.ok) {
            return {
                props: {
                    scholarships: data
                }
            }
        }
    }
</script>

<script>
    export let scholarships
</script>

<ul class="mt-40">
    <!-- {#each scholarships as { id, title }, i} -->
        <li>
            { scholarships.title }
        </li>
    <!-- {/each} -->
</ul>
