<script lang=ts>
    export let value: number;

</script>

    <input bind:value={value} min="0" max="20" on:input type="range">

<style lang=scss>

    input {
        appearance: none;
        height: .2rem;
        background-color: var(--color-gamma);
        width: 100%;

        &::-webkit-slider-thumb {
            appearance: none;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 50%;
            background-color: var(--color-alpha);
        }
    }

</style>