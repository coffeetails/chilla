<script lang=ts>
// @ts-nocheck

    import { numberOfBlobs, activeBlob } from "../../stores";
    import Stick from "../atoms/Stick.svelte";

    let testBlob: any = [];
    numberOfBlobs.subscribe(value => {
        testBlob = value;
        checkViewport();
    });

    function checkViewport() {
        for(let blob of testBlob) {
            const blobLocation = blob.getBoundingClientRect();
            if(blobLocation.y >= -5 ) {
                activeBlob.set(blob.id);
                break;
            }
        }
    }
    
</script>

<svelte:window on:scroll={checkViewport} />

<div class="wrapper">
    {#each $numberOfBlobs as elem}
        <svelte:component this={Stick} id={elem.id} />    
    {/each}
</div>

<style lang="scss">
.wrapper {
    position: fixed;
    right: var(--margin);
    top: 0rem;
    height: 100vh;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: var(--baseline);
}
</style>