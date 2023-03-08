<script>
    import { onMount } from "svelte";
    import { numberOfBlobs } from "../../stores";
    import Stick from "../atoms/Stick.svelte";

    onMount(() => {
        const blobElems = document.querySelectorAll('.blob');
        numberOfBlobs.set(blobElems);
        console.log(blobElems);
    });

    console.log($numberOfBlobs);

    let component = Stick;

</script>

<div class="wrapper">
    <Stick />
    <!-- {#each $numberOfBlobs as elem}
        <svelte:component this={component} />    
    {/each} -->
</div>

<style lang="scss">
.wrapper {
    position: fixed;
    right: var(--margin-small);
    top: 5rem;
    bottom: 5rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: var(--baseline);
}
</style>