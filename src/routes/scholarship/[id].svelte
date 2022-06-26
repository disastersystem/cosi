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
    // export let scholarship
</script>

<main>
    <div class="flex justify-center">
        <div class="flex justify-between mt-60" style="max-width: 750px;">
            <h2 class="cosi-title-1">COSI Erasmus+ EMJMD scholarships</h2>


        </div>
    </div>
</main>
