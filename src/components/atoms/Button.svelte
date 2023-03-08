<script lang="ts">

    export let btnText: string;

</script>

    <button on:click >{btnText}</button>

<style lang=scss>

    button {
        font-size: 1rem;
        background-color: transparent;
        color: var(--font-color);
        margin-top: var(--margin-large);
        border: 1px solid var(--color-beta);
        padding: var(--padding-small) var(--padding);
        align-self: flex-start;
        cursor: pointer;

        &:hover {
            // color: rgba(var(--font-color), 0.5);
            opacity: .5;
        }
    }

</style>