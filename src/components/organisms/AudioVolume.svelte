<script lang=ts>
    import Input from "../atoms/Input.svelte";
    import { createEventDispatcher } from "svelte";
    import { activeFooter } from "../../stores";

    let footerIsActive: boolean;
    activeFooter.subscribe(value => footerIsActive = value);

    export let volume: number;

    let dispatch = createEventDispatcher();

</script>

    <div class:visible={footerIsActive} class="volume-bar-wrapper">
        <label for="volume">0</label>
        <Input name="volume" on:input={() => { dispatch('adjustVolume') }} bind:value={volume} />
        <label for="volume">{volume}</label>
    </div>

<style lang=scss>

    .volume-bar-wrapper {
        width: 15rem;
        display: none;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding-bottom: 1rem;
    }

    .visible {
        display: flex;
    }

    label {
        color: var(--font-color);
    }

</style>