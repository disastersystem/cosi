<script>
    // let pages = [['/alumni', 'Home'], ['/alumni', 'Scholarships overview'], ['/alumni', 'Free-waivers']]
    export let pages = []
</script>

<div class="flex items-center mb-4">
    {#each pages as page, i}
        <a href="{ page[0] }" class={pages.length-1 === i ? 'text-gray-400 truncate' : 'external truncate'}>
            { page[1] }
        </a>

        {#if pages.length-1 > i}
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        {/if}
    {/each}
</div>
