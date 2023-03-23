<script lang="ts">

    export let btnText: string;
    export let btnClass: string;

</script>

    <button on:click class={btnClass} >{btnText}
        <slot></slot>
    </button>

<style lang=scss>

    button {
        font-size: 1rem;
        background-color: transparent;
        color: var(--font-color);
        border: none;
        cursor: pointer;
        transition: 0.5s;
        border-radius: 0.25rem;

        &:hover {
            opacity: 0.5;
        }
    }

</style>