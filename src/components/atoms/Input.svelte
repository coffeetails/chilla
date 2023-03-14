<script lang=ts>
    export let seconds: number;

</script>

    <input bind:value={seconds} min="0" max="10" on:change type="range">

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
            background-color: var(--color-beta);
        }
    }

</style>