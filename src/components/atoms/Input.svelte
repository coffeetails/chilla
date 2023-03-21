<script lang=ts>
    export let value: number;
    // export let name: string;

</script>

    <input bind:value={seconds} min="0" max="20" on:change type="range">

<style lang=scss>

    input {
        appearance: none;
        height: .2rem;
        background-color: var(--color-omega);
        width: 80%;

        &::-webkit-slider-thumb {
            appearance: none;
            height: .7rem;
            width: .7rem;
            border-radius: 50%;
            background-color: var(--color-alpha);
        }
    }

</style>