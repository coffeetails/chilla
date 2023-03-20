<script lang=ts>
    import Input from "../atoms/Input.svelte";
    import { createEventDispatcher } from "svelte";
    import { activeFooter } from "../../stores";
    import VolumeIconLow from "../atoms/icons/VolumeIconLow.svelte";
    import VolumeIconHigh from "../atoms/icons/VolumeIconHigh.svelte";
    import VolumeIconOff from "../atoms/icons/VolumeIconOff.svelte";

    let footerIsActive: boolean;
    activeFooter.subscribe(value => footerIsActive = value);

    export let volume: number;

    let dispatch = createEventDispatcher();

</script>

    <div class:visible={footerIsActive} class="volume-bar-wrapper">
        <div class="icon-wrapper">
        {#if volume == 0}
            <VolumeIconOff />
        {:else if volume >= 7}
            <VolumeIconHigh />
        {:else}
            <VolumeIconLow />
        {/if}
        </div>
        <Input on:input={() => { dispatch('adjustVolume') }} bind:value={volume} />
        <label for="volume">{volume}</label>
    </div>

<style lang=scss>

    .icon-wrapper {
        width: 3rem;
    }

    .volume-bar-wrapper {
        width: 20rem;
        display: none;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding-bottom: 1rem;
    }

    .volume-bar-wrapper :global(i) {
        color: var(--color-alpha);

        &:hover {
            cursor: initial;
        }
    }

    .visible {
        display: flex;
    }

    label {
        color: var(--color-alpha);
        padding-right: 0;
        width: 3rem;
        text-align: center;
    }

</style>