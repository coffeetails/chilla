<script lang=ts>
    import Input from "../atoms/Input.svelte";

    export let labelFor: string;
    export let labelText: string;
    export let seconds: number;

</script>

    <label for={labelFor}>{labelText}: {seconds}s
        <Input bind:value={seconds} on:input />
    </label>

<style lang=scss>

    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label :global(input) {
        background-color: var(--color-alpha);
        height: .3rem;
        border-radius: .5rem;

        &::-webkit-slider-thumb {
            background-color: var(--color-beta);
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
        }
    }

</style>