<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { numberOfBlobs, activeBlob } from "../../stores";
    import Stick from "../atoms/Stick.svelte";

    onMount(() => {
        const blobElems = document.querySelectorAll('.blob');
        numberOfBlobs.set(blobElems);
        // console.log(blobElems);
        checkViewport();
    });

    // console.log($numberOfBlobs);
    function checkViewport() {
        for(let blob of $numberOfBlobs) {
            const blobLocation = blob.getBoundingClientRect();
            // console.log(blob.id, blobLocation.y);
            // The first with a positive y coordination is the current visible blob
            if(blobLocation.y > 0 ) {
                console.log(blob.id);
                activeBlob.set(blob.id);
                break;
            }
        }
    }
    

</script>

<svelte:window on:scroll={checkViewport} />

<div class="wrapper">
    <!-- Argument of type 'unknown' is not assignable to parameter of type 'ArrayLike<unknown>'.js(2345) -->
    {#each $numberOfBlobs as elem}
        <svelte:component this={Stick} id={elem.id} />    
    {/each}
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