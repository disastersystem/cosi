<script>
    export let type = 'internal'
    export let title = ''
    export let subtitle = ''
    export let path = ''
</script>

{#if type !== 'disabled'}
    <a href="{path}">
        <div class="relative flex justify-between items-center p-6" style="background: #F8F7FC; border-radius: 16px;">
            <div class="pr-4 md:pr-20">
                <div>
                    <h3 class="cosi-title-5">{ title }</h3>
                </div>
                <div>
                    <p class="cosi-p" style="margin-bottom: 0px;">{ subtitle }</p>
                    <slot></slot>
                </div>
            </div>

            {#if type === 'internal'}
                <div class="absolute bottom-4 right-4 flex">
                    <span class="uppercase text-xs hidden md:block">Read More</span>
                    <img class="ml-2" src="/icons/arrow-right-black.svg" alt="">
                </div>
            {:else if type === 'external'}
                <div class="absolute bottom-4 right-4 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
            {:else if type === 'disabled'}
                <div class="absolute bottom-4 right-4 flex"></div>
            {/if}
        </div>
    </a>
{:else}
    <div>
        <div class="relative flex justify-between items-center p-6" style="background: #F8F7FC; border-radius: 16px;">
            <div>
                <div>
                    <h3 class="cosi-title-5">{ title }</h3>
                </div>
                <div>
                    <p class="cosi-p" style="margin-bottom: 0px;">{ subtitle }</p>
                    <slot></slot>
                </div>
            </div>

            {#if type === 'internal'}
                <div class="absolute bottom-4 right-4 flex">
                    <span class="uppercase text-xs">Learn more</span>
                    <img class="ml-2" src="/icons/arrow-right-black.svg" alt="">
                </div>
            {:else if type === 'external'}
                <div class="absolute bottom-4 right-4 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
            {:else if type === 'disabled'}
                <div class="absolute bottom-4 right-4 flex"></div>
            {/if}
        </div>
    </div>
{/if}
