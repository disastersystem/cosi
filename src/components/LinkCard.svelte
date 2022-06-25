<a href="{path}">
    <div class="flex justify-between items-center p-6" style="border: 1px solid #ddd; border-radius: 16px;">
        <div>
            <div>
                <h3 class="font-bold">{ title }</h3>
            </div>
            <div>
                <p>{ subtitle }</p>
            </div>
        </div>
        <div>
            <img src="icons/arrow-right-black.svg" alt="">
        </div>
    </div>
</a>

<script>
    export let title
    export let subtitle
    export let path
</script>
