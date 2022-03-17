<script>
 export let src;
 export let alt;
 export let attribution;
</script>

<div about="{src}">
    <img class="w-full"
        src="{src}" alt="{alt}" />
    {#if $$slots.attribution}
    <p class="font-light text-sm">
        <slot name="attribution" />
    </p>
    {/if}
</div>
